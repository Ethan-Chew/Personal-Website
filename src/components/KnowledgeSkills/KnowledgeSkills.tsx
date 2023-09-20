"use client"
import { Tab } from "@headlessui/react"
import { data } from "autoprefixer"

export default function KnowledgeSkills() {
    const dataObj = {
        "Languages": [
            {
                "name": "Web Development",
                "desc": ["For web development, I frequently use Next.js and React.js. The framework and library allows me to create websites with ease. While developing these websites, Tailwind CSS and various databases such as Firebase and MongoDB are also used.", "Recently, for web development, I have been working on a revamp of my personal website with Next.js 13 (this website!) and creating a Full-Stack Web Application, ProjMatch, with a bunch of my friends.", "These websites are then deployed either on Vercel or on Google Cloud Run."],
                "icon": ["devicon-javascript-plain", "devicon-react-original", "devicon-nextjs-original"]
            },
            {
                "name": "Swift",
                "desc": ["Swift is a language used to develop iOS, iPadOS, tvOS, MacOS and tvOS. Swift is one of the first language I've actually learnt! One of the most notable apps I have created with Swift is ArrivalSG, a transport app that allows users to view the bus arrival times, the MRT Map and Train Disruptions if any."],
                "icon": ["devicon-swift-plain"]
            },
            {
                "name": "Python",
                "desc": [],
                "icon": []
            },
            {
                "name": "HTML",
                "desc": [],
                "icon": []
            },
            {
                "name": "CSS",
                "desc": [],
                "icon": []
            },
        ],
        "Skills": {
            "Developer Tools": [
                {
                    name: "GitHub",
                    desc: "Version Control",
                    icon: "devicon-github-plain"
                },
                {
                    name: "Xcode",
                    desc: "iOS Development",
                    icon: "devicon-xcode-plain"
                },
                {
                    name: "Visual Studio Code",
                    desc: "General/Web Development",
                    icon: "devicon-vscode-plain"
                }
            ],
            "Technologies": [
                {
                    name: "MongoDB",
                    desc: "Video Editing",
                    icon: "devicon-mongodb-plain"
                },
                {
                    name: "Google Cloud Run",
                    desc: "Video Editing",
                    icon: "devicon-googlecloud-plain"
                }
            ],
            "Design Tools": [
                {
                    name: "Figma",
                    desc: "UI/UX Design",
                    icon: "devicon-figma-plain"
                },
                {
                    name: "Adobe XD",
                    desc: "UI/UX Design",
                    icon: "devicon-xd-plain"
                },
                {
                    name: "Adobe Photoshop",
                    desc: "Image Editing and Creation",
                    icon: "devicon-photoshop-plain"
                },
            ],
            "Post Production": [
                {
                    name: "Davinci Resolve",
                    desc: "Video Editing",
                    icon: ""
                },
                {
                    name: "iMovie",
                    desc: "Video Editing",
                    icon: ""
                }
            ]
        }
    }

    return (
        <>
            <div>
                <Tab.Group>
                    <Tab.List className="flex space-x-1 rounded-xl p-1 bg-lightmode-nav dark:bg-darkmode-nav">
                        {Object.keys(dataObj).map((val) => (
                            <Tab key={val} className={({ selected }) =>  
                                selected ? "w-full py-2 rounded-lg bg-[#D8DDE3] dark:bg-darkmode-btnbg font-medium" : "w-full py-2.5 rounded-lg hover:dark:bg-[#1D1F28] hover:bg-[#E6EBF2]"
                            }>{ val }</Tab>
                        ))}
                    </Tab.List>
                    
                    <Tab.Panels className="mt-5">
                        <Tab.Panel>
                            <div className="space-y-5">
                                {dataObj["Languages"].filter((lang) => lang.desc.length !== 0).map((lang) => (
                                    <div key={lang.name}>
                                        <div className="flex flex-row items-center space-x-3 mb-1.5">
                                            <h3 className="font-semibold text-xl">{ lang.name }</h3>
                                            <div className="space-x-2">
                                                {lang.icon.map((icon) => <i className={`${icon} text-lg`}></i>)}
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            {lang.desc.map((desc) => <p className="font-light">{desc}</p>)}
                                        </div>
                                    </div>
                                ))}
                                <div>
                                    <h3 className="font-semibold text-lg mb-1.5">Other Languages</h3>
                                    <div className="flex flex-row items-center space-x-3">
                                        {dataObj["Languages"].filter((lang) => lang.desc.length === 0).map((lang) => (
                                            <p key={lang.name}>{ lang.name }</p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Tab.Panel>
                        <Tab.Panel>
                            <div className="grid md:grid-cols-2 gap-2 gap-y-4">
                                {Object.keys(dataObj["Skills"]).map((sectionName) => (
                                    <div key={sectionName}>
                                        <h3 className="text-xl font-semibold">{sectionName}</h3>
                                        {dataObj["Skills"][sectionName].map((section) => (
                                            <div key={section.name} className="rounded-xl dark:bg-[#262A34] p-2 flex flex-row gap-2 mt-2 items-center space-x-2">
                                                {section.icon !== "" ? <i className={`${section.icon} text-4xl pl-3`}></i> : <></>}
                                                <div className={section.icon === "" ? "px-2" : ""}>
                                                    <p className="text-lg font-medium">{section.name}</p>
                                                    <p>{section.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>
        </>
    )
}