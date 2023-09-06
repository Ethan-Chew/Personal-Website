"use client"

import Link from "next/link"
import styles from "./navbar.module.css"

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

    const handleNavClick = (page: Page) => {
        const element = document.getElementById(page.scrollId)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <>
            <div className={`w-full py-3 bg-darkmode-nav shadow-md ${styles.navbar}`}>
                <div className="pl-6 flex flex-row items-center">
                    <Link href="/" className="">
                        <img src="/Name Logo L.png" alt="Name Logo" className={styles.logoImage} />
                    </Link>

                    <div className="ml-auto space-x-3 flex flex-row pr-6">
                        {Pages.map((page) => (
                            <p onClick={() => handleNavClick(page)} className={`p-3 ${styles.linkText}`}>{ page.id }</p>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}