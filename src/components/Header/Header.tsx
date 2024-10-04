import Link from "next/link"

// Icons
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { IoDocumentText } from "react-icons/io5";
import ImageCarousel from "./ImageCarousel"

export default function Header() {
    return (
        <div className="py-20 md:py-14">
            <div className="space-y-3">
                <h1 className="text-5xl sm:text-6.5xl">Hey! <br className="block sm:hidden" /> I&apos;m <span className="font-semibold text-accent dark:text-darkaccent">Ethan Chew</span> 👋</h1>
                <p className="text-lg sm:text-xl">Student Developer  |  Private Pilot  | Photography</p>
            </div>

            <br />
            <div className="border border-divider dark:border-darkdivider"></div>
            <br />

            <div className="space-y-4 max-w-4xl sm:text-lg">
                <p>I&apos;m a <span className="font-bold">{ Math.floor((new Date().getTime() - new Date(2006, 10, 19).getTime()) / (1000 * 60 * 60 * 24 * 365.25)) }-year old</span> student from Singapore 🇸🇬, studying <span className="underline">Information Technology</span> at Ngee Ann Polytechnic. My passion for programming started at a young age, and I&apos;ve been actively pursuing it since 2019, when I entered secondary school.</p>
                <p>Turning some &apos;overcomplicated english&apos; on my computer screen into fully-working ideas excites me. I&apos;ve dabbled in many fields in programming, and have really grown to love both Web and App Development. Learning, however, never truly ends, and I am always working to refine and improve my skills.</p>
                <p>Beyond the confines of my computer, I have many hobbies, but Aviation and Photography takes the cake. I am a licensed Private Pilot with over 73 hours in the sky. There&apos;s really nothing quite like viewing the world from above.</p>
                <p>I&apos;m always excited to connect with new people, so feel free to reach out and say hi! :)</p>
            </div>

            <div className="flex flex-row pt-4 gap-3">
                <Link href="https://go.ethanchew.com/linkedin" rel="noreferrer" target="_blank">
                    <div className={`p-3 bg-lightbtngrey hover:bg-lightbtnhover dark:bg-darkbtngrey dark:hover:bg-darkbtnhover rounded-lg duration-200`}>
                        <FaLinkedin size={25} />
                    </div>
                </Link>

                <Link href="https://go.ethanchew.com/github" rel="noreferrer" target="_blank">
                    <div className={`p-3 bg-lightbtngrey hover:bg-lightbtnhover dark:bg-darkbtngrey dark:hover:bg-darkbtnhover rounded-lg duration-200`}>
                        <FaGithub size={25} />
                    </div>
                </Link>

                <Link href="mailto:hello@ethanchew.com" rel="noreferrer" target="_blank">
                    <div className={`p-3 bg-lightbtngrey hover:bg-lightbtnhover dark:bg-darkbtngrey dark:hover:bg-darkbtnhover rounded-lg duration-200`}>
                        <MdEmail size={25} />
                    </div>
                </Link>

                <a href="/files/Ethan_Chew_CV.pdf">
                    <div className={`p-3 bg-lightbtngrey hover:bg-lightbtnhover dark:bg-darkbtngrey dark:hover:bg-darkbtnhover rounded-lg duration-200`}>
                        <IoDocumentText size={25} />
                    </div>
                </a>
            </div>

            {/* <ImageCarousel /> */}
        </div>
    )
}