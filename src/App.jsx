import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InfoTopHeader from './components/infoTopHeader'
import { BrowserRouter } from 'react-router'
import Header from './components/header'
import HeroSection from './components/heroSection'
import Phylosophie from './components/Phylosophie'
import Projects from './components/projects'
import Services from './components/services'
import Achievements from './components/achievements'
import GalleryProjects from './components/GalleryProjects'
import Testimonials from './components/testimonials'
import CTA from './components/CTA'
import Footer from './components/footer'

function App() {

  return (
    <BrowserRouter>
    <div className='bg-white m-0  min-h-screen flex flex-col justify-start items-start w-full '>
      <InfoTopHeader />
      <Header/>
      <HeroSection/>
      <Phylosophie />
      <Projects/>
      <Services />
      <Achievements />
      <GalleryProjects/>
      <Testimonials/>
      <CTA/>
      <Footer/>
    </div>
    </BrowserRouter>
  )
}

export default App
