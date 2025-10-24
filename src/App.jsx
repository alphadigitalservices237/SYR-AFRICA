import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/layout'
import Home from './pages/Home'
import Story from './pages/story'
import Contact from './pages/Contact'
import { BrowserRouter, Route, Routes } from 'react-router'
import Servicespage from './components/servicespage'
import ProjetsPage from './components/projetspage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="story" element={<Story />} />
          <Route path="contact" element={<Contact />} />
          <Route path="services" element={<Servicespage />} />
          <Route path="projets" element={<ProjetsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
