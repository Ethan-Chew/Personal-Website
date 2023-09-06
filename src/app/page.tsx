import Image from 'next/image'

// Components
import Header from '@/components/Header/header'
import NavBar from '@/components/NavBar/navbar'

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-darkmode-page">
      <NavBar />
      <div className='px-8 pt-28'>
        <Header />
      </div>
    </main>
  )
}
