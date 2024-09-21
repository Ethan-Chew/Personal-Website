// Database and Data Handling
import getFirestore from "@/db/retrieveData"
import { Projects, Experience, Education } from "@/db/schema"
import { cache } from 'react'
export const revalidate = 3600 // revalidate the data at most every hour

import Container from "@/components/Container";
import Header from "@/components/Header/Header";
import NavigationBar from "@/components/NavigationBar";
import TldrButton from "@/components/TldrButton";
import ProjectContainer from "@/components/ProjectContainer";

export default async function Home() {
  const getFromDB: any = cache(async (db: string) => {
    return await getFirestore.getCollection(db);
  });

  // let education: Education[] = await getFromDB("education");
  // let experience: Experience[] = await getFromDB("experience");
  // let projects: Projects = await getFromDB("projects");

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
              <h3 className="text-4xl font-bold">My Education 🏫</h3>
              <p>Pieces of paper that proves i&apos;m ✨somewhat qualified✨ that I know what i&apos;m doing</p>
            </div>

            <div id="edu-content" className="flex flex-col gap-3">
              {/* {education.map(data => (
                <Container tldr={false} data={data} />
              ))} */}
            </div>
          </div>

          <br />
          <div className="flex items-center justify-center min-w-screen my-4">
            <div className="border border-divider w-1/2"></div>
          </div>
          <br />

          {/* Experience Section */}
          <div>
            <div id="work-exp" className="text-lg">
              <div id="workexp-header" className="mb-4">
                <h3 className="text-4xl font-bold">Work Experience 💼</h3>
                {/* <p>Pieces of paper that proves i&apos;m ✨somewhat qualified✨ that I know what i&apos;m doing</p> */}
              </div>

              <div id="workexp-content">
                {/* {experience.map(data => (
                  <Container tldr={false} data={data} />
                ))} */}
              </div>
            </div>

            <div id="leadership-exp" className="mt-7 text-lg">
              <div id="leadershipexp-header" className="mb-4">
                <h3 className="text-4xl font-bold">Leadership Experience 👥</h3>
                {/* <p>Pieces of paper that proves i&apos;m ✨somewhat qualified✨ that I know what i&apos;m doing</p> */}
              </div>

              <div id="leadershipexp-content">
                
              </div>
            </div>
          </div>
        </div>

        <br />
        <div className="flex items-center justify-center min-w-screen my-4">
          <div className="border border-divider w-1/2"></div>
        </div>
        <br />

        {/* Projects */}
        <div id="projects" className="text-lg">
          <div id="proj-header" className="mb-4">
            <h3 className="text-4xl font-bold">Projects 🛠</h3>
            <p>I love working on various projects because I always learn something new while working on them. Checkout some of the projects I have worked on, they're all open-sourced on GitHub too!</p>
          </div>

           <div id="proj-content" className="gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <ProjectContainer />
            <ProjectContainer />
            <ProjectContainer />
            <ProjectContainer />
          </div>
        </div>

        <br />
        <div className="flex items-center justify-center min-w-screen my-4">
          <div className="border border-divider w-1/2"></div>
        </div>
        <br />

        {/* Knowledge and Achievements */}
        
        
        {/* Tldr */}
        <TldrButton />
      </div>
    </main>
  );
}
