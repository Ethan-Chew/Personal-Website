import Link from "next/link"
import styles from "./footer.module.css"

export default function Footer() {
    return (
        <>
            <div className="text-center content-center py-6">
                <div className={styles.footerDivider}></div>
                <p className="text-sm py-6">
                    Made with ♥&#xFE0E; by{" "}
                    <Link style={{ color: "#90CDF4" }} href="https://www.ethanchew.com" target="_blank" rel="noreferrer">Ethan Chew</Link>{" "}
                    <br />
                    Open sourced on{" "}
                    <Link style={{ color: "#90CDF4" }} href="https://github.com/Ethan-Chew/Personal-Website" target="_blank" rel="noreferrer">GitHub</Link>
                    .{" "}
                    Last Updated: Sept 2023
                </p>
            </div>
        </>
    )
}