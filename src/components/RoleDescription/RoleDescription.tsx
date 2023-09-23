"use client"
import { Experience } from "@/firebase/schema";
import styles from "./roledescription.module.css"
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function RoleDescription({ content }: { content: Experience }) {
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
            <div className="pb-6 duration-200">
                <img className={`${styles.featuredImg} mb-2`} src={theme === "light" ? content.lightImg : content.darkImg} alt={content.name} />
                <h3 className="font-semibold text-xl">{content.name}</h3>
                <div className={`${styles.dateContainer} bg-[#EEF2F8] dark:bg-[#777777] my-2 duration-200`}>
                    {`${content.startDate} - ${content.endDate}`}
                </div>
                <p>{content.desc}</p>
            </div>
        </>
    )
}