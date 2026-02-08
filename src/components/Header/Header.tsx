import Link from "next/link"

// Icons
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { IoDocumentText } from "react-icons/io5";

export default function Header() {
    return (
        <div className="py-24 md:py-32">
            <div className="space-y-6">
                <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-neutral-900 dark:text-white">
                    Hey, I&apos;m <span className="text-accent dark:text-darkaccent">Ethan Chew</span>
                </h1>
                <p className="text-xl sm:text-2xl text-neutral-600 dark:text-neutral-400 font-light">
                    Student Developer  <span className="mx-2">·</span>  Private Pilot  <span className="mx-2">·</span>  Photographer
                </p>
            </div>

            <div className="my-10 border-t border-divider dark:border-darkdivider w-24"></div>

            <div className="max-w-4xl text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-6">
                <p>
                    I&apos;m a <span className="font-semibold text-neutral-900 dark:text-neutral-200">{Math.floor((new Date().getTime() - new Date(2006, 10, 19).getTime()) / (1000 * 60 * 60 * 24 * 365.25))}-year old</span> student from Singapore 🇸🇬, studying <span className="font-semibold text-neutral-900 dark:text-neutral-200">Information Technology</span> at Ngee Ann Polytechnic. 
                    I build web, app, and AI-driven solutions with a focus on using <span className="font-semibold text-neutral-900 dark:text-neutral-200">technology for public good</span>, always learning and refining along the way.
                </p>
                <p className="italic">
                    &quot;When once you have tasted flight, you will forever walk the earth with your eyes turned skyward.&quot;
                </p>
                <p>
                    Beyond the screen, I&apos;m a Private Pilot and photographer, always chasing new perspectives from the sky and through my lens.
                </p>
                <p>
                    I&apos;m always excited to connect with new people, so feel free to reach out and say hi!
                </p>
            </div>

            <div className="flex flex-row pt-10 gap-6">
                <SocialLink href="https://go.ethanchew.com/linkedin" icon={<FaLinkedin size={28} />} />
                <SocialLink href="https://go.ethanchew.com/github" icon={<FaGithub size={28} />} />
                <SocialLink href="mailto:hello@ethanchew.com" icon={<MdEmail size={28} />} />
                <SocialLink href="https://go.ethanchew.com/cv" icon={<IoDocumentText size={28} />} />
            </div>
        </div>
    )
}

function SocialLink({ href, icon }: { href: string, icon: React.ReactNode }) {
    return (
        <Link href={href} target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-accent dark:hover:text-darkaccent transition-colors duration-200">
            {icon}
        </Link>
    )
}