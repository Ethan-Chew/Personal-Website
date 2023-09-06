
// React Imports
import { useEffect, useState, Suspense } from 'react'

// Database
import getFirestore from "@/components/DatabaseCall/getFirestore"

// Components
import Header from '@/components/Header/header'
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
    <main className="flex min-h-screen flex-col items-center justify-between bg-darkmode-page">
      <NavBar />

      {/* Main Content */}
      <div className='pt-28 container'>
        <div className='content'>
          <Header />

          {/* Education Section */}
          <div className='pt-10'>
            <h2 className='font-semibold text-4xl pb-6'>Education</h2>
            {education.map((edu) => (
              <RoleDescription key={`${edu.name}`} content={edu} />
            ))}

            <div className='divider'></div>
          </div>

          {/* Experience Section */}
          <div className='pt-10'>
            <h2 className='font-semibold text-4xl pb-6'>Experience</h2>
            {experience.map((exp) => (
              <RoleDescription key={`${exp.name}`} content={exp} />
            ))}

            <div className='divider'></div>
          </div>

        </div>
      </div>
    </main>
  )
}