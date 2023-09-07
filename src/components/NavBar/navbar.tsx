"use client"

import Link from "next/link"
import styles from "./navbar.module.css"
import ThemeButton from "../ThemeButton/ThemeButton"
import { useTheme } from "next-themes"
import { useState, useEffect, Fragment } from "react"
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoMdClose } from 'react-icons/io'
import { Transition } from "@headlessui/react"

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
    const [ mobileNavExpanded, setMobileNavExpanded ] = useState(false)
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
                            <p key={page.id} onClick={() => handleNavClick(page)} className={`p-3 ${styles.linkText}`}>{ page.id }</p>
                        ))}
                        <ThemeButton />
                    </div>
                </div>
            </div>
            <div className={`w-full ${styles.mobileNavbar}`}>
                <div className={`py-3 bg-lightmode-nav dark:bg-darkmode-nav duration-200 ${mobileNavExpanded ? "" : "shadow-md"}`}>
                    <div className="px-6 flex flex-row items-center">
                        <button className="p-2 bg-[#E2E8F0] dark:bg-[#292B33] rounded-lg duration-200" onClick={() => setMobileNavExpanded(!mobileNavExpanded)}>
                            {mobileNavExpanded ? <IoMdClose size={25} /> : <RxHamburgerMenu size={25} />}
                        </button>

                        <Link href="/" className="mx-auto space-x-3">
                            <img src={theme === "dark" ? "/Name Logo L.png" : "/Name Logo.png"} alt="Name Logo" className={styles.logoImage} />
                        </Link>

                        <ThemeButton />
                    </div>
                </div>
                <Transition 
                    as={Fragment}
                    show={mobileNavExpanded}
                    enter="transition-opacity duration-400"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-400"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className={`bg-lightmode-nav dark:bg-darkmode-nav duration-200 shadow-md px-6 space-y-1 pb-2`}>
                        {Pages.map((page) => (
                            <div onClick={() => handleNavClick(page)} key={page.id} className="cursor-pointer py-2 duration-200 hover:font-semibold">
                                {page.id}
                            </div>
                        ))}
                    </div>
                </Transition>
                {/* {!mobileNavExpanded ? <></> :
                    <div className={`bg-lightmode-nav dark:bg-darkmode-nav duration-200 shadow-md px-6 space-y-1 pb-2`}>
                        {Pages.map((page) => (
                            <div onClick={() => handleNavClick(page)} key={page.id} className="cursor-pointer py-2 duration-200 hover:font-semibold">
                                {page.id}
                            </div>
                        ))}
                    </div>
                } */}
            </div>
        </>
    )
}