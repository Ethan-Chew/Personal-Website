"use client"

import Link from "next/link"
import styles from "./navbar.module.css"
import ThemeButton from "../ThemeButton/ThemeButton"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

interface Page {
    id: string,
    scrollId: string
}

const Pages = [{
    id: "Education",
    scrollId: "education"
}, {
    id: "Experience",
    scrollId: "experience"
}, {
    id: "Projects",
    scrollId: "projects"
}, {
    id: "Knowledge",
    scrollId: "knowledgeandskills"
}, {
    id: "Achievements",
    scrollId: "achievements"
}]

export default function NavBar() {
    const [ isMounted, setIsMounted ] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setIsMounted(true);
    }, []);
    
    
    if (!isMounted) {
        return null;
    }

    const handleNavClick = (page: Page) => {
        const element = document.getElementById(page.scrollId)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <>
            <div className={`w-full py-3 bg-lightmode-nav dark:bg-darkmode-nav duration-200 shadow-md ${styles.navbar}`}>
                <div className="pl-6 flex flex-row items-center">
                    <Link href="/" className="">
                        <img src={theme === "dark" ? "/Name Logo L.png" : "/Name Logo.png"} alt="Name Logo" className={styles.logoImage} />
                    </Link>

                    <div className="ml-auto space-x-3 flex flex-row pr-6">
                        {Pages.map((page) => (
                            <p onClick={() => handleNavClick(page)} className={`p-3 ${styles.linkText}`}>{ page.id }</p>
                        ))}
                        <ThemeButton />
                    </div>
                </div>
            </div>
        </>
    )
}