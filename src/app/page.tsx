
// Imports
import { Suspense } from 'react'

// Font
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

// Database
import getFirestore from "@/components/DatabaseCall/getFirestore"

// Components
import Header from '@/components/Header/header'
import Footer from '@/components/Footer/footer'
import NavBar from '@/components/NavBar/navbar'
import RoleDescription from '@/components/RoleDescription/RoleDescription'

export default async function Home() {
  const education = await getFirestore.getCollection("education")
  const experience = await getFirestore.getCollection("experience")
  const projects = await getFirestore.getCollection("projects")

  // Set default colour mode to dark
  // useEffect(() => {
  //   sessionStorage.setItem("colour-mode", "dark")
  // }, [])

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between bg-lightmode-page dark:bg-darkmode-page ${inter.className} text-lightmode-text dark:text-darkmode-text duration-200`}>
      <NavBar />

      {/* Main Content */}
      <div className='pt-28 container'>
        <div className='content'>
          <Header />

          {/* Education Section */}
          <div className='pt-10' id="education">
            <h2 className='font-semibold text-4xl pb-6'>Education</h2>
            {education.map((edu) => (
              <RoleDescription key={`${edu.name}`} content={edu} />
            ))}

            <div className='divider'></div>
          </div>

          {/* Experience Section */}
          <div className='pt-10' id="experience">
            <h2 className='font-semibold text-4xl pb-6'>Experience</h2>
            {experience.map((exp) => (
              <RoleDescription key={`${exp.name}`} content={exp} />
            ))}

            <div className='divider'></div>
          </div>

          {/* Projects Section */}
          <div className='pt-10' id="projects">
            <h2 className='font-semibold text-4xl pb-6'>Projects</h2>
            <p>Click on any project to visit their GitHub repository!</p>

          </div>

          <Footer />
        </div>
      </div>
    </main>
  )
}