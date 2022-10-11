import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'> 
    <Navbar />
    <Hero />
    <Skills />
    <About />
    <Projects />
    <Contact />
    <Footer />
    </div>
  )
}

export default App
