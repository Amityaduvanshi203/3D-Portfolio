import React from 'react'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Skills from '../components/Skills.jsx'
import Projects from '../components/Projects.jsx'
import Work from '../components/Work.jsx'
import Contact from '../components/Contact.jsx'

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Work />
      <Contact />
    </div>
  )
}

export default Home
