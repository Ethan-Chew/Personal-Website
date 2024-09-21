"use client";

import Link from "next/link"
import { useTheme } from "next-themes";

export default function ProjectContainer() {
    const { theme, setTheme } = useTheme()

    return (
        <div className="p-5 rounded-xl bg-[#242424] border border-lightgrey">
            <div>
                <h3 className="text-2xl font-semibold">Project Title</h3>
                <p className="text-neutral-500">2020 - Current</p>
            </div>

            <div className="flex flex-row gap-3">
                {/* <Link href="">
                    <div className='rounded-md bg-lightmode-btnbg-hover dark:bg-darkmode-projbtn flex flex-row space-x-3 justify-center px-6 py-3'>
                        <img src={theme === "light" ? "/github-mark.png" : "/github-mark-white.png"} alt="GitHub Icon" />
                        <p className='font-semibold'>GitHub</p>
                    </div>
                </Link> */}
            </div>
        </div>
    )
}