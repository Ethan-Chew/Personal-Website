"use client"
import { Tab } from "@headlessui/react"
import { dataObj, KSDataSkills } from "./data"

export default function KnowledgeSkills() {
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
                                                {lang.icon.map((icon) => <i key={icon} className={`${icon} text-lg`}></i>)}
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            {lang.desc.map((desc) => <p key={desc} className="font-light">{desc}</p>)}
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
                                        {dataObj["Skills"][sectionName as keyof KSDataSkills].map((section) => (
                                            <div key={section.name} className="bg-[#F8F9FB] rounded-xl dark:bg-[#262A34] p-2 flex flex-row gap-2 mt-2 items-center space-x-2">
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