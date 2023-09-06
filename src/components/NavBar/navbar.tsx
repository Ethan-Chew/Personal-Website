import Link from "next/link"
import styles from "./navbar.module.css"

const Pages = [{
    id: "Education",
    scrollId: "#education"
}, {
    id: "Experience",
    scrollId: "#experience"
}, {
    id: "Projects",
    scrollId: "#projects"
}, {
    id: "Knowledge",
    scrollId: "#knowledgeandskills"
}, {
    id: "Achievements",
    scrollId: "#achievements"
}]

export default function NavBar() {
    return (
        <>
            <div className={`w-full py-3 bg-darkmode-nav shadow-md ${styles.navbar}`}>
                <div className="pl-6 flex flex-row items-center">
                    <Link href="/" className="">
                        <img src="/Name Logo L.png" alt="Name Logo" className={styles.logoImage} />
                    </Link>

                    <div className="ml-auto space-x-3 flex flex-row pr-6">
                        {Pages.map((page) => (
                            <Link href="/">
                                <p className={`p-3 ${styles.linkText}`}>{ page.id }</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}