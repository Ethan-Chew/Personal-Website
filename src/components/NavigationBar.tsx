"use client";

import Image from "next/image"
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

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
    id: "Knowledge",
    scrollId: "knowledgeandskills"
}]

export default function NavigationBar() {
    const [ isMounted, setIsMounted ] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setIsMounted(true);
    }, []);
    
    
    if (!isMounted) {
        return null;
    }

    return (
        <nav className="w-full flex flex-row justify-between">
            <Image src="/EcLogoNew.svg" alt="Logo" width={30} height={30} />

            <div className="text-xl space-x-5 flex flex-row">
                {pages.map((page, i) => (
                    <div key={page.id} className="flex flex-row space-x-5 items-center">
                        <a className="cursor-pointer">{ page.id }</a>
                        {i !== pages.length - 1 && <div className="border-l border"></div>}
                    </div>
                ))}
            </div>

            <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className='duration-200'>
                {theme === "dark" ? <BsFillSunFill size={23} /> : <BsFillMoonFill size={23} />}
            </button>
        </nav>
    )
}