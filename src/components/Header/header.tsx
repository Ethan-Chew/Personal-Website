import styles from "./header.module.css"

// Icons
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export default function Header() {
    return (
        <>
            <div>
                {/* Top Information */}
                <div className="">
                    <h1 className="text-5xl font-semibold pb-2">Ethan Chew</h1>
                    <h2 className="text-xl font-light">Developer, Designer, Student</h2>
                </div>

                <br />
                <div className={styles.divider}></div>
                <br />

                {/* Description */}
                <div className="break-words space-y-2">
                    <p>Hi! I&apos;m Ethan Chew, a <b>{ Math.floor((new Date().getTime() - new Date(2006, 10, 19).getTime()) / (1000 * 60 * 60 * 24 * 365.25)) }-year-old student</b> from Singapore, currently <b>studying Information Technology at Ngee Ann Polytechnic.</b> In addition, I am also a <b>Student Pilot</b>, studying to obtain my Private Pilot's Licence on the Diamond DA-40.</p>
                    <p>I have a bunch of interests like aviation, science and photography to name a few. I only really started programming in 2020 <i>(Thats... {new Date().getFullYear() - 2019} years ago)</i> when I entered secondary school, so I am constantly learning, and have a looong way to go!</p>
                    <p>I&apos;m always happy to meet new people! Feel free to reach out to me and say hi. :)</p>
                </div>

                {/* Social Media Icons */}
                <div className="flex flex-row pt-4 gap-2">
                    <div className={`duration-200 dark:bg-darkmode-btnbg dark:hover:bg-darkmode-btnbg-hover bg-lightmode-btnbg hover:bg-lightmode-btnbg-hover ${styles.iconButton}`}>
                        <FaLinkedin size={23} />
                    </div>

                    <div className={`duration-200 dark:bg-darkmode-btnbg dark:hover:bg-darkmode-btnbg-hover bg-lightmode-btnbg hover:bg-lightmode-btnbg-hover ${styles.iconButton}`}>
                        <FaGithub size={23} />
                    </div>

                    <div className={`duration-200 dark:bg-darkmode-btnbg dark:hover:bg-darkmode-btnbg-hover bg-lightmode-btnbg hover:bg-lightmode-btnbg-hover ${styles.iconButton}`}>
                        <MdEmail size={23} />
                    </div>
                </div>
            </div>
        </>
    )
}