"use client"
import Link from "next/link"
import styles from "./footer.module.css"
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function Footer() {
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
            <div className="text-center content-center py-6">
                <div className={styles.footerDivider}></div>
                <p className="text-sm py-6">
                    Made with ♥&#xFE0E; by{" "}
                    <Link style={theme === "dark" ? { color: "#90CDF4" } : { color: "#2B6CB0" }} href="https://www.ethanchew.com" target="_blank" rel="noreferrer">Ethan Chew</Link>{" "}
                    <br />
                    Open sourced on{" "}
                    <Link style={theme === "dark" ? { color: "#90CDF4" } : { color: "#2B6CB0" }} href="https://github.com/Ethan-Chew/Personal-Website" target="_blank" rel="noreferrer">GitHub</Link>
                    .{" "}
                    Last Updated: Sept 2023
                </p>
            </div>
        </>
    )
}