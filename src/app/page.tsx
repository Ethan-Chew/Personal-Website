// Font
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

// Database and Data Handling
import getFirestore from "@/components/DatabaseCall/getFirestore"
import { Project, Projects, Experience, Education } from "@/firebase/schema"
import { cache } from 'react'
export const revalidate = 3600 // revalidate the data at most every hour

// Components
import Header from '@/components/Header/header'
import Footer from '@/components/Footer/footer'
import NavBar from '@/components/NavBar/navbar'
import RoleDescription from '@/components/RoleDescription/RoleDescription'
import ProjectContainer from '@/components/ProjectContainer/ProjectContainer'
import KnowledgeSkills from '@/components/KnowledgeSkills/KnowledgeSkills'

export default async function Home() {
  // Load Data from Firebase
  let education: Education[] = []
  let experience: Experience[] = []
  let projects: Projects = { } as Projects
  
  const getFromDB: any = cache(async (db: string) => {
    return await getFirestore.getCollection(db)
  })

  if (process.env.ENVIRONMENT !== "dev") {
    education = await getFromDB("education")
    experience = await getFromDB("experience")
    projects = await getFromDB("projects")
  }

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between bg-lightmode-page dark:bg-darkmode-page ${inter.className} text-lightmode-text dark:text-darkmode-text duration-200`}>
      <NavBar />

      {/* Main Content */}
      <div className='pt-28 container'>
        <div className='content'>
          <Header />

          {/* Education Section */}
          <div className='pt-10' id="education">
            <h2 className='font-semibold text-4xl pb-6'>Education 🏫</h2>
            {education.map((edu) => (
              <RoleDescription key={`${edu.name}`} content={edu} />
            ))}

            <div className='divider'></div>
          </div>

          {/* Experience Section */}
          <div className='pt-10' id="experience">
            <h2 className='font-semibold text-4xl pb-6'>Experience 💼</h2>
            {experience.map((exp) => (
              <RoleDescription key={`${exp.name}`} content={exp} />
            ))}

            <div className='divider'></div>
          </div>

          {/* Projects Section */}
          <div className='pt-10' id="projects">
            <h2 className='font-semibold text-4xl pb-1.5'>Projects 🛠</h2>
            <p className='pb-6 font-light'>I love working on various projects because I always learn something new while working on them. Checkout some of the projects I have worked on, they're all open-sourced on GitHub too!</p>
            <div className='space-y-3 mb-6'>
              {Object.keys(projects).reverse().map((projName) => (
                <ProjectContainer projects={projects[projName as keyof Projects]} title={projName} key={`${projName}`} />
              ))}
            </div>

            <div className='divider'></div>
          </div>

          {/* Knowledge/Skills Section */}
          <div className='pt-10' id="knowledgeandskills">
            <h2 className='font-semibold text-4xl pb-1.5'>Knowledge and Skills 🎓</h2>
            <p className='pb-6 font-light'>I&apos;m always learning and honing my skills. These are some of the technologies, tools and frameworks that I currently know!</p>
            <div className='space-y-3 mb-6'>
              <KnowledgeSkills />
            </div>

            <div className='divider'></div>
          </div>

          {/* Achievements */}
          <div className='pt-10' id="achievements">
            <h2 className='font-semibold text-4xl pb-1.5'>Achievements 📚</h2>
            <p className='pb-6 font-light'></p>
            <div className='space-y-3'>
              
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </main>
  )
}