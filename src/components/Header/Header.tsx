import Link from "next/link"

// Icons
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export default function Header() {
    return (
        <div className="py-14">
            <div>
                <h1 className="text-6.5xl">Hey! I'm <span className="font-semibold text-accent">Ethan Chew</span> 👋</h1>
                <p className="text-xl">Student Developer  |  Private Pilot  | Photography</p>
            </div>

            <br />
            <div className="border border-lightgrey"></div>
            <br />

            <div className="space-y-4 max-w-4xl text-lg">
                <p>I&apos;m a <span className="font-bold">{ Math.floor((new Date().getTime() - new Date(2006, 10, 19).getTime()) / (1000 * 60 * 60 * 24 * 365.25)) }-year old</span> student from Singapore 🇸🇬, studying <span className="underline">Information Technology</span> at Ngee Ann Polytechnic. My passion for programming started at a young age, and I've been actively pursuing it since 2020, when I entered secondary school.</p>
                <p>Turning some ‘overcomplicated english&apos; on my computer screen into fully-working ideas excites me. I&apos;ve dabbled in many fields in programming, and have really grown to love both Web and App Development.</p>
                <p>Beyond the confines of my computer, I have many hobbies, but Aviation and Photography takes the cake. I am a licensed Private Pilot with over 73 hours in the sky. There's really nothing quite like viewing the world from above.</p>
                <p>I&apos;m always excited to connect with new people, so feel free to reach out and say hi! :)</p>
            </div>

            <div className="flex flex-row pt-4 gap-3">
                    <Link href="https://go.ethanchew.com/linkedin" rel="noreferrer" target="_blank">
                        <div className={`p-3 bg-darkbtngrey hover:bg-darkbtnhover rounded-lg duration-200`}>
                            <FaLinkedin size={25} />
                        </div>
                    </Link>

                    <Link href="https://go.ethanchew.com/github" rel="noreferrer" target="_blank">
                        <div className={`p-3 bg-darkbtngrey hover:bg-darkbtnhover rounded-lg duration-200`}>
                            <FaGithub size={25} />
                        </div>
                    </Link>

                    <Link href="mailto:hello@ethanchew.com" rel="noreferrer" target="_blank">
                        <div className={`p-3 bg-darkbtngrey hover:bg-darkbtnhover rounded-lg duration-200`}>
                            <MdEmail size={25} />
                        </div>
                    </Link>
                </div>
        </div>
    )
}