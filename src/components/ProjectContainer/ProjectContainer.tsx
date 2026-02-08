"use client";

import Link from "next/link"
import { Project } from "@/db/schema";
import { useTheme } from "next-themes";
import styles from "./projectcontainer.module.css"
import ProjectTagContainer from "./ProjectTag";
import Image from "next/image";

export default function ProjectContainer({ project }: { project: Project }) {
    const { theme } = useTheme();

    return (
        <div className="p-6 rounded-xl bg-neutral-100 dark:bg-[#242424] border border-white/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg dark:hover:shadow-[0_0_15px_rgba(0,0,0,0.3)] flex flex-col h-full">
            { project.image && 
                <Image 
                    src={project.image}
                    alt={project.name}
                    width={800}
                    height={400}
                    data-loaded='false'
                    onLoad={event => {
                        event.currentTarget.setAttribute('data-loaded', 'true')
                    }}
                    className='rounded-lg mb-4 w-full object-cover data-[loaded=false]:animate-pulse data-[loaded=false]:bg-gray-100/10'
                /> 
            }
            <div className="flex flex-row items-center gap-3 mb-2">
                <h3 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">{ project.name }</h3>
                <ProjectTagContainer tagId={project.tag} />
            </div>
            <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-3">{ project.language }</p>

            <p className="text-neutral-600 dark:text-neutral-300 text-base leading-relaxed mb-6 flex-grow">{ project.desc }</p>

            <div className="flex gap-3 mt-auto">
                {/* GitHub Repository Link */}
                <Link href={project.ghRepo} target="_blank" className="flex-1">
                    <div className='rounded-lg bg-white dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700 transition-colors duration-200 flex flex-row gap-2 justify-center items-center py-2.5'>
                        <img src={theme === "light" ? "/github-mark.png" : "/github-mark-white.png"} alt="GitHub" className="w-5 h-5" />
                        <span className='font-semibold text-sm'>GitHub</span>
                    </div>
                </Link>

                {/* Website Link */}
                { project.website && (
                <Link href={project.website} target="_blank" className="flex-1">
                    <div className='rounded-lg bg-black text-white dark:bg-white dark:text-black hover:opacity-80 transition-opacity duration-200 flex flex-row gap-2 justify-center items-center py-2.5'>
                        <img src={theme === "light" ? "/webWhite.png" : "/webBlack.png"} alt="Website" className="w-5 h-5" />
                        <span className='font-semibold text-sm'>Visit</span>
                    </div>
                </Link>
                )}

                {/* App Store Link */}
                { project.appStoreLink && (
                <Link href={project.appStoreLink} target="_blank">
                     <img src={theme === "light" ? "/AppStoreDark.svg" : "/AppStoreWhite.svg"} alt="App Store" className="h-[42px] w-auto hover:opacity-80 transition-opacity" />
                </Link>
                )}
            </div>
        </div>
    )
}