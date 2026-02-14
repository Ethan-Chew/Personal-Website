import getFirestore from "@/db/retrieveData";
import { Project, Experience, Education } from "@/db/schema";
import { cache } from "react";
export const revalidate = 3600; 

import { achievements, certificates } from "../../public/data/certs";
import ExpContainer from "@/components/ExpContainer";
import Header from "@/components/Header/Header";
import TldrButton from "@/components/TldrButton";
import ProjectContainer from "@/components/ProjectContainer/ProjectContainer";
import AccoladesContainer from "@/components/AccoladesContainer";
import Footer from "@/components/Footer";
import Divider from "@/components/Divider";
import AnimatePresence from "@/components/AnimatePresence";
import SkillsContainer from "@/components/SkillsContainer";
import PhotographySection from "@/components/PhotographySection";


export default async function Page() {  
  const getFromDB: (db: string) => Promise<Project[] | Experience[] | Education[]> = cache(
    async (db: string) => {
      return await getFirestore.getCollection(db);
    }
  );

  const education: Education[] = (await getFromDB("education")) as Education[];
  const experience: Experience[] = (await getFromDB("experience")) as Experience[];
  const projects: Project[] = (await getFromDB("topProjects")) as Project[];

  return (
    <main>
        <div className="p-7 sm:p-10">
            <div className="min-h-screen">
            <Header />
            </div>

            <div className="flex flex-col space-y-7">
            {/* Education Section */}
            <AnimatePresence>
                <section id="education" className="sm:text-lg">
                    <div id="edu-header" className="mb-8">
                        <h3 className="text-3xl md:text-5xl font-bold mb-4 text-neutral-900 dark:text-white">
                            Education
                        </h3>
                        <p className="text-neutral-600 dark:text-neutral-400">
                            Academic journey and qualifications.
                        </p>
                    </div>

                    <div
                        id="edu-content"
                        className="flex flex-col divide-y divide-neutral-200 dark:divide-neutral-800"
                    >
                        {education.map((data) => (
                            <ExpContainer
                                key={data.name}
                                data={data}
                            />
                        ))}
                    </div>
                </section>
            </AnimatePresence>

            <Divider />

            {/* Experience Section */}
            <AnimatePresence>
                <section className="group intersect:animate-slide-in-from-left">
                    <div id="experience" className="sm:text-lg group">
                        <div id="workexp-header" className="mb-8">
                            <h3 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
                                Experience
                            </h3>
                            <p className="text-neutral-600 dark:text-neutral-400">
                                Professional work and leadership roles.
                            </p>
                        </div>

                        <div
                            id="workexp-content"
                            className="flex flex-col divide-y divide-neutral-200 dark:divide-neutral-800"
                        >
                            {experience
                                .filter((data) => data.type === "work")
                                .map((data) => (
                                    <ExpContainer
                                        key={data.name}
                                        data={data}
                                    />
                                ))}
                        </div>
                    </div>

                    <div id="leadership-exp" className="mt-16 sm:text-lg group">
                        <div id="leadershipexp-header" className="mb-8">
                            <h3 className="text-2xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
                                Leadership
                            </h3>
                        </div>

                        <div
                            id="leadershipexp-content"
                            className="flex flex-col divide-y divide-neutral-200 dark:divide-neutral-800"
                        >
                            {experience
                                .filter((data) => data.type === "leadership")
                                .map((data) => (
                                    <ExpContainer
                                        key={data.name}
                                        data={data}
                                    />
                                ))}
                        </div>
                    </div>
                </section>
            </AnimatePresence>
            </div>

            <Divider />

            {/* Projects */}
            <AnimatePresence>
            <section id="projects" className="sm:text-lg">
                <div id="proj-header" className="mb-10">
                    <h3 className="text-3xl md:text-5xl font-bold mb-4 text-neutral-900 dark:text-white">
                        Projects
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400">
                        A selection of my favourite works, ranging from web apps to
                        mobile applications.
                    </p>
                </div>

                <div
                    id="proj-content"
                    className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                >
                    {projects.map((proj) => (
                        <ProjectContainer key={proj.name} project={proj} />
                    ))}
                </div>
            </section>
            </AnimatePresence>

            <Divider />

            {/* Skills */}
            <AnimatePresence>
            <section id="skills" className="sm:text-lg">
                <div id="skills-header" className="mb-8">
                    <h3 className="text-3xl md:text-5xl font-bold mb-4 text-neutral-900 dark:text-white">
                        Technologies
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400">
                        Languages, frameworks, and tools I work with.
                    </p>
                </div>
                <SkillsContainer />
            </section>
            </AnimatePresence>

            <Divider />

            {/* Achievements and Certifications */}
            <AnimatePresence>
                <section
                    id="achievements"
                    className="sm:text-lg flex flex-col md:flex-row gap-14"
                >
                    {/* Achievements */}
                    <div id="ach" className="w-full flex flex-col items-start">
                        <h3 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-900 dark:text-white">
                            Achievements
                        </h3>
                        {achievements.map((ach, i) => (
                            <div key={ach.name} className="w-full">
                                <AccoladesContainer data={ach} />
                                <div
                                    className={`border-b border-neutral-200 dark:border-neutral-800 my-4 ${i == achievements.length - 1 && "hidden"}`}
                                ></div>
                            </div>
                        ))}
                    </div>

                    {/* Certifications */}
                    <div
                        id="certifications"
                        className="w-full flex flex-col items-start"
                    >
                        <h3 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-900 dark:text-white">
                            Certifications
                        </h3>
                        {certificates.map((cert, i) => (
                            <div key={cert.name} className="w-full">
                                <AccoladesContainer data={cert} />
                                <div
                                    className={`border-b border-neutral-200 dark:border-neutral-800 my-4 ${i == certificates.length - 1 && "hidden"}`}
                                ></div>
                            </div>
                        ))}
                    </div>
                </section>
            </AnimatePresence>

            {/* Tldr */}
            <TldrButton />

            <div className="mt-20">
                <PhotographySection />
            </div>
        </div>

        <Footer />
    </main>
  );
}
