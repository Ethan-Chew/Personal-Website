"use client";

import Image from "next/image"
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { useTheme } from "next-themes";
import { useEffect, useState, Fragment } from "react";
import { Transition } from "@headlessui/react"

interface Page {
    id: string,
    scrollId: string
}

const pages: Page[] = [{
    id: "Education",
    scrollId: "education"
}, {
    id: "Experience",
    scrollId: "experience"
}, {
    id: "Projects",
    scrollId: "projects"
}, {
    id: "Achievements",
    scrollId: "achievements"
}]

export default function NavigationBar() {
    const [ isMounted, setIsMounted ] = useState(false)
    const [ isMobileNavOpen, setIsMobileNavOpen ] = useState(false)
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
        <nav className="w-full bg-background dark:bg-darkbackground fixed px-10 py-6 z-30">
            <div className="flex flex-row justify-between">
                <Image src={theme === "dark" ? "/ECLogoDark.svg" : "/ECLogoLight.svg"} alt="Logo" width={30} height={30} />

                <div className="hidden text-md md:text-lg space-x-5 sm:flex flex-row">
                    {pages.map((page, i) => (
                        <div key={page.id} className="flex flex-row space-x-5 items-center">
                            <a className="cursor-pointer" onClick={() => handleNavClick(page)}>{ page.id }</a>
                            {i !== pages.length - 1 && <div className="border-l border"></div>}
                        </div>
                    ))}
                </div>

                <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className='hidden sm:block duration-200'>
                    {theme === "dark" ? <BsFillSunFill size={23} /> : <BsFillMoonFill size={23} />}
                </button>

                {/* Mobile Navigation View */}
                <button id="expand-mobile-nav" onClick={() => setIsMobileNavOpen(!isMobileNavOpen)} className="block sm:hidden">
                    {isMobileNavOpen ? <RxCross2 size={28} /> : <RxHamburgerMenu size={28} />  }
                </button>
            </div>

            <Transition 
                as={Fragment}
                show={isMobileNavOpen}
                enter="transition-opacity duration-400"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-400"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className={`bg-background dark:bg-darkbackground duration-200 shadow-md space-y-1 pt-5 pb-2 text-lg`}>
                    {pages.map((page) => (
                        <div onClick={() => handleNavClick(page)} key={page.id} className="cursor-pointer py-2 duration-200 hover:font-semibold">
                            {page.id}
                        </div>
                    ))}
                </div>
            </Transition>
        </nav>
    )
}