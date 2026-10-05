import React, { useState } from 'react'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Skills from '../components/Skills.jsx'
import Freelance from '../components/Freelance.jsx'
import ProjectRequest from '../components/ProjectRequest.jsx'
import Projects from '../components/Projects.jsx'
import Work from '../components/Work.jsx'
import Contact from '../components/Contact.jsx'

const Home = () => {
  const [showProjectRequest, setShowProjectRequest] = useState(false)

  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Freelance onStartProject={() => setShowProjectRequest(true)} />
      {showProjectRequest && <ProjectRequest />}
      <Projects />
      <Work />
      <Contact />
    </div>
  )
}

export default Home
