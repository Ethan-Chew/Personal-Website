"use client";

import Link from "next/link"
import { Project } from "@/db/schema";
import { useTheme } from "next-themes";

export default function ProjectContainer({ project }: { project: Project }) {
    const { theme, setTheme } = useTheme()

    return (
        <div className="p-5 rounded-xl bg-[#242424] border border-lightgrey">
            <div>
                <h3 className="text-2xl font-semibold">{ project.name }</h3>
                <p className="text-neutral-500">{ project.startDate } - { project.endDate }</p>
            </div>

            <p><span className="font-semibold">{ project.language }</span> | { project.desc }</p>

            <div className="flex flex-row gap-3">
                {/* GitHub Repository Link */}
                <Link href={project.ghRepo}>
                    <div className='rounded-md bg-lightmode-btnbg-hover dark:bg-darkmode-projbtn flex flex-row space-x-3 justify-center px-6 py-3'>
                        <img src={theme === "light" ? "/github-mark.png" : "/github-mark-white.png"} alt="GitHub Icon" />
                        <p className='font-semibold'>GitHub</p>
                    </div>
                </Link>

                {/* Website Link */}
                { project.website ? 
                <Link href={project.website}>
                    <div className='rounded-md bg-lightmode-btnbg-hover dark:bg-darkmode-projbtn flex flex-row space-x-3 justify-center px-6 py-3'>
                        <img src={theme === "light" ? "/webBlack.png" : "/webWhite.png"} alt="Website Icon" />
                        <p className='font-semibold'>Website</p>
                    </div>
                </Link>
                : <></> }

                {/* App Store Link */}
                { project.appStoreLink ?
                <Link href={project.appStoreLink}>
                    <img src={theme === "light" ? "AppStoreWhite.svg" : "AppStoreDark.svg"}></img>
                </Link>
                : <></> }
            </div>
        </div>
    )
}