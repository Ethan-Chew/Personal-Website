import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

export default function Footer() {
    return (
        <footer className="w-full border-t border-divider dark:border-white/10 bg-neutral-50 dark:bg-neutral-900/50 p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
                    <div className="space-y-4">
                        <h4 className="font-bold text-2xl md:text-3xl text-neutral-900 dark:text-white tracking-tight">Ethan Chew</h4>
                        <p className="text-neutral-600 dark:text-neutral-400 max-w-lg leading-relaxed">
                            Developing for Public Good, while seeing the world from above.<br />
                            Based in Singapore 🇸🇬
                        </p>
                        <div className="text-sm text-neutral-500 dark:text-neutral-500 pt-4">
                            &copy; {new Date().getFullYear()} Ethan Chew. All rights reserved.
                        </div>
                    </div>

                    <div className="flex flex-col md:items-end space-y-4">
                        <h5 className="font-semibold text-neutral-900 dark:text-white">Connect</h5>
                        <div className="flex gap-4">
                            <FooterLink href="https://go.ethanchew.com/linkedin" icon={<FaLinkedin size={20} />} label="LinkedIn" />
                            <FooterLink href="https://go.ethanchew.com/github" icon={<FaGithub size={20} />} label="GitHub" />
                            <FooterLink href="mailto:hello@ethanchew.com" icon={<MdEmail size={20} />} label="Email" />
                            <FooterLink href="https://go.ethanchew.com/cv" icon={<IoDocumentText size={20} />} label="Resume" />
                        </div>
                        <p className="text-sm text-neutral-500 dark:text-neutral-500 pt-8 md:pt-4">
                            Designed & Built with <span className="text-accent dark:text-darkaccent">Next.js</span>
                        </p>
                    </div>
                </div>
        </footer>
    )
}

function FooterLink({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) {
    return (
        <Link 
            href={href} 
            target="_blank" 
            className="p-2 rounded-lg bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-300 dark:hover:bg-neutral-700 hover:text-neutral-900 dark:hover:text-white transition-all duration-200"
            aria-label={label}
        >
            {icon}
        </Link>
    )
}