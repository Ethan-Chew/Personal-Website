// Database and Data Handling
import getFirestore from "@/db/retrieveData"
import { Project, Experience, Education } from "@/db/schema"
import { cache } from 'react'
export const revalidate = 7200 // revalidate the data at most every hour

import Container from "@/components/Container";
import Header from "@/components/Header/Header";
import NavigationBar from "@/components/NavigationBar";
import TldrButton from "@/components/TldrButton";
import ProjectContainer from "@/components/ProjectContainer/ProjectContainer";
import { achievements, certificates } from "@/data/certs";
import ACContainer from "@/components/ACContainer";

export default async function Home({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const getFromDB: (db: string) => Promise<Project[] | Experience[] | Education[]> = cache(async (db: string) => {
    return await getFirestore.getCollection(db);
  });

  const education: Education[] = await getFromDB("education") as Education[];
  const experience: Experience[] = await getFromDB("experience") as Experience[];
  const projects: Project[] = await getFromDB("topProjects") as Project[];

  return (
    <main>
      <NavigationBar />

      <div className="p-10">
        <div className="min-h-screen">
          <Header />
        </div>

        <div className="flex flex-col space-y-7">
          {/* Education Section */}
          <div id="education" className="text-lg">
            <div id="edu-header" className="mb-4">
              <h3 className="text-4xl font-bold mb-2">My Education 🏫</h3>
              <p>Pieces of paper that proves i&apos;m ✨somewhat qualified✨ that I know what i&apos;m doing</p>
            </div>

            <div id="edu-content" className="flex flex-col gap-3">
              {education.map(data => (
                <Container key={data.name} tldr={searchParams.tldr === "true" ? true: false} data={data} />
              ))}
            </div>
          </div>

          <br />
          <div className="flex items-center justify-center min-w-screen my-4">
            <div className="border border-divider dark:border-darkdivider w-1/2"></div>
          </div>
          <br />

          {/* Experience Section */}
          <div>
            <div id="experience" className="text-lg">
              <div id="workexp-header" className="mb-4">
                <h3 className="text-4xl font-bold">Work Experience 💼</h3>
              </div>

              <div id="workexp-content" className="flex flex-col gap-3">
                {experience.filter(data => data.type === "work").map(data => (
                  <Container key={data.name} tldr={searchParams.tldr === "true" ? true: false} data={data} />
                ))}
              </div>
            </div>

            <div id="leadership-exp" className="mt-7 text-lg">
              <div id="leadershipexp-header" className="mb-4">
                <h3 className="text-4xl font-bold">Leadership Experience 👥</h3>
              </div>

              <div id="leadershipexp-content" className="flex flex-col gap-3">
                {experience.filter(data => data.type === "leadership").map(data => (
                  <Container key={data.name} tldr={searchParams.tldr === "true" ? true: false} data={data} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <br />
        <div className="flex items-center justify-center min-w-screen my-4">
          <div className="border border-divider dark:border-darkdivider w-1/2"></div>
        </div>
        <br />

        {/* Projects */}
        <div id="projects" className="text-lg">
          <div id="proj-header" className="mb-4">
            <h3 className="text-4xl font-bold mb-2">Projects 🛠</h3>
            <p>A showcase of my works, which are all open-sourced on GitHub.</p>
            <p>I love on working on diverse projects that teach me something new. Checkout some of my open-source projects below!</p>
          </div>

          <div id="proj-content" className="gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {projects.map(proj => (
              <ProjectContainer key={proj.name} project={proj} />
            ))}
          </div>
        </div>

        <br />
        <div className="flex items-center justify-center min-w-screen my-4">
            <div className="border border-divider dark:border-darkdivider w-1/2"></div>
        </div>
        <br />

        {/* Achievements and Certifications */}
        <div id="achievements" className="text-lg flex flex-row gap-14">
            {/* Achievements */}
            <div id="ach" className="w-full flex flex-col items-start">
              <h3 className="text-4xl font-bold mb-5">Achievements 🏅</h3>
              {achievements.map((ach, i) => (
                <div key={ach.name} className="w-full">
                  <ACContainer data={ach} />
                  <div className={`border border-divider dark:border-darkdivider my-4 ${i == achievements.length - 1 && "hidden"}`}></div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div id="certifications" className="w-full flex flex-col items-start">
              <h3 className="text-4xl font-bold mb-5">Certifications 📜</h3>
              {certificates.map((cert, i) => (
                <div key={cert.name} className="w-full">
                  <ACContainer data={cert} />
                  <div className={`border border-divider dark:border-darkdivider my-4 ${i == certificates.length - 1 && "hidden"}`}></div>
                </div>
              ))}
            </div>
        </div>
        
        {/* Tldr */}
        <TldrButton />
      </div>
    </main>
  );
}
