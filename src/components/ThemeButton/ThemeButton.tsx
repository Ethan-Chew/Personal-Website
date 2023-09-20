"use client"
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeButton() {
    const [ isMounted, setIsMounted ] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setIsMounted(true);
    }, []);
    
    
    if (!isMounted) {
        return null;
    }

    return (
        <>
            <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className='duration-200 p-2 rounded-lg active:scale-100 bg-[#E2E8F0] dark:bg-[#292B33]'>
                {theme === "dark" ? <BsFillSunFill size={23} /> : <BsFillMoonFill size={23} />}
            </button>
        </>
    )
}