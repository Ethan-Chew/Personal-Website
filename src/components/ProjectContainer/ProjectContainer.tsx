'use client'
import { MdOutlineExpandMore, MdOutlineExpandLess } from 'react-icons/md'
import { BsGlobe } from 'react-icons/bs'
import { useTheme } from "next-themes";
import { useState, useEffect } from 'react'
import styles from "./projectcontainer.module.css"
import Link from 'next/link';
import { Project, Projects } from '@/firebase/schema';

interface ProjectsContainerProps {
    projects: Project[],
    title: string
}

export default function ProjectContainer({ projects, title }: ProjectsContainerProps) {
    const [ boxExpanded, setBoxExpanded ] = useState(false)
    const [ isMounted, setIsMounted ] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setIsMounted(true);
    }, []);
    
    
    if (!isMounted) {
        return null;
    }

    return (
        <>
            <div className="w-full border border-darkmode-text rounded-lg shadow-md p-4 duration-200">
                <div className={`flex flex-row ${boxExpanded ? "pb-2" : ""}`}>
                    <div>
                        <h2 className="text-3xl font-semibold mb-1">{ title }</h2>
                        { !boxExpanded ? <p className='font-light'>Press the button to view projects</p> : <></> }
                    </div>
                    <button className="ml-auto space-x-3" onClick={() => setBoxExpanded(!boxExpanded)}>
                        { boxExpanded ? <MdOutlineExpandLess size={30} /> : <MdOutlineExpandMore size={30} /> }
                    </button>
                </div>
                <div className='space-y-3'>
                    { !boxExpanded ? <></> :
                        projects.map((proj: Project) => (
                            <IndivProjContainer proj={proj} theme={theme} key={proj.name} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

interface IndivProjContainerProps {
    proj: Project,
    theme: string | undefined
}

const IndivProjContainer = ({ proj, theme }: IndivProjContainerProps) => {
    return (
        <div className='bg-[#F8F9FB] dark:bg-darkmode-bg rounded-lg px-4 py-5'>
            <div className='pb-2'>
                <h3 className='text-2xl font-semibold'>{ proj.name }</h3>
                <p className='text-base font-light'>{ proj.language } | { proj.startYear ? `${proj.startYear} - ${proj.endYear}` : proj.endYear }</p>
            </div>
            <p className='pb-2.5'>
                { proj.desc ? proj.desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare faucibus sapien vitae sagittis. Cras condimentum fringilla massa. Morbi suscipit commodo varius. Nunc nec lorem a sapien rutrum auctor at quis quam."}
            </p>
            <div className='flex flex-row space-x-3'>
                <Link href={proj.ghRepo}>
                    <div className='rounded-md bg-lightmode-btnbg-hover dark:bg-darkmode-projbtn flex flex-row space-x-3 items-center px-6 py-3'>
                        <img src={theme === "light" ? "/github-mark.png" : "/github-mark-white.png"} alt="GitHub Icon" className={styles.icon} />
                        <p className='font-semibold'>GitHub</p>
                    </div>
                </Link>
                { proj.website ? 
                <Link href={proj.ghRepo}>
                    <div className='rounded-md bg-lightmode-btnbg-hover dark:bg-darkmode-projbtn flex flex-row space-x-3 items-center px-6 py-3'>
                        <img src={theme === "light" ? "/webBlack.png" : "/webWhite.png"} alt="Website Icon" className={styles.icon} />
                        <p className='font-semibold'>Website</p>
                    </div>
                </Link>
                : <></> }
                { proj.appStoreLink ?
                <Link href={proj.appStoreLink}>
                    <img src={theme === "light" ? "AppStoreWhite.svg" : "AppStoreDark.svg"} className={styles.appStoreIcn}></img>
                </Link>
                : <></> }
            </div>
        </div>
    )
}