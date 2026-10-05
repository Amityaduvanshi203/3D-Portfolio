import React, { useState, useMemo } from 'react'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import { FaReact, FaCode, FaServer, FaRobot, FaDatabase, FaTools, FaMobileAlt, FaCloud, FaPython, FaCamera, FaMicrochip, FaChartLine, FaGithub, FaExternalLinkAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa'
import TiltCard from './3d/TiltCard'

// Project images
import aiSentimentImg from '../assets/project/ai -sentimet.png'
import aiCustomerImg from '../assets/project/aicostumar.jpg'
import nabhaImg from '../assets/project/nabha.png'
import speshImg from '../assets/project/spesh.png'
import intecImg from '../assets/project/intec.png'
import hospitalImg from '../assets/project/hospital.png'
import portfolioImg from '../assets/project/potfolio.png'
import freelancingImg from '../assets/project/frilansing.png'
import realsImg from '../assets/project/reals.png'
import railwayProjectImg from '../assets/project/relway.png'
import blindImg from '../assets/project/bilnd.png'
import heritageChatbotImg from '../assets/project/chatbot-heriteg.png'
import faceDetectionImg from '../assets/project/face.png'
import kishoreImg from '../assets/project/kishor.png'

// Hardware images
import electresaImg from '../assets/Hadware/electresa .png'
import bluecarImg from '../assets/Hadware/blucar .png'
import dustbinImg from '../assets/Hadware/dustbin.png'
import firecarImg from '../assets/Hadware/firecar.png'
import healthcareImg from '../assets/Hadware/healthcare.png'
import homeImg from '../assets/Hadware/home.png'
import obscarImg from '../assets/Hadware/obscar.png'
import pavementImg from '../assets/Hadware/Pavement .png'
import pumpImg from '../assets/Hadware/pump.png'
import railwayHardwareImg from '../assets/Hadware/relway.png'

const hardwareDemoUrl = "https://github.com/Amityaduvanshi203/hadware.project"

const categories = [
  { key: 'all', label: 'All Projects', icon: '🚀' },
  { key: 'software', label: 'Software', icon: '💻' },
  { key: 'ai', label: 'AI / ML', icon: '🤖' },
  { key: 'hardware', label: 'Hardware / IoT', icon: '🔧' },
]

const projects = [
  {
    title: "Electrixa",
    description: "A student-focused technology platform for learning, hardware projects, software development, courses, kits and engineering resources.",
    image: electresaImg,
    tech: ["React", "JavaScript", "Tailwind CSS", "Node.js"],
    icons: [FaReact, FaCode, FaServer],
    code: "https://github.com/Amityaduvanshi203/Electrixa",
    category: 'software',
  },
  {
    title: "AI-Based Citizen Feedback Analysis",
    description: "An AI-powered system that analyzes citizen feedback using NLP and machine learning to identify issues and generate department-wise insights.",
    image: aiCustomerImg,
    tech: ["Python", "NLP", "LSTM", "Flask", "Machine Learning"],
    icons: [FaRobot, FaServer, FaDatabase],
    code: "https://github.com/Amityaduvanshi203/Sentiment-analyzer",
    category: 'ai',
  },
  {
    title: "Sentiment Analyzer",
    description: "An AI-based application that analyzes text feedback and classifies user opinions into different sentiment categories using NLP techniques.",
    image: aiSentimentImg,
    tech: ["Python", "NLP", "Flask", "VADER", "Machine Learning"],
    icons: [FaRobot, FaServer, FaDatabase],
    code: "https://github.com/Amityaduvanshi203/Sentiment-analyzer",
    category: 'ai',
  },
  {
    title: "Railway Track Safety System",
    description: "An embedded safety system designed to detect railway track problems and provide early warnings to help prevent railway accidents.",
    image: railwayProjectImg,
    tech: ["Arduino", "Embedded C", "Sensors", "IoT"],
    icons: [FaTools, FaCode],
    code: "https://github.com/Amityaduvanshi203/Railway_track",
    demo: hardwareDemoUrl,
    category: 'hardware',
  },
  {
    title: "Nabha Student Learning Platform",
    description: "A digital learning platform designed to provide rural students with educational content, learning resources and offline-friendly access.",
    image: nabhaImg,
    tech: ["React", "PWA", "JavaScript", "CSS"],
    icons: [FaReact, FaCode, FaMobileAlt],
    code: "https://github.com/Amityaduvanshi203/Nabha--student",
    category: 'software',
  },
  {
    title: "Scroll",
    description: "A modern responsive web project focused on smooth scrolling, interactive sections and an engaging user interface experience.",
    image: realsImg,
    tech: ["React", "JavaScript", "CSS", "Framer Motion"],
    icons: [FaReact, FaCode],
    code: "https://github.com/Amityaduvanshi203/Scroll--relecx",
    category: 'software',
  },
  {
    title: "Kishore Chandak",
    description: "A modern web project developed to present information and services through a responsive interface with a clean and user-friendly design.",
    image: kishoreImg,
    tech: ["React", "JavaScript", "CSS", "Responsive Design"],
    icons: [FaReact, FaCode],
    code: "https://github.com/Amityaduvanshi203/kishore-chandak-..-web-page-",
    category: 'software',
  },
  {
    title: "InTech Heritage",
    description: "A heritage-focused digital platform designed to present cultural information, locations and historical content through an interactive website.",
    image: intecImg,
    tech: ["React", "JavaScript", "CSS", "Three.js"],
    icons: [FaReact, FaCode],
    code: "https://intachsolapur.org/",
    category: 'software',
  },
  {
    title: "Hospital Management System",
    description: "A web-based hospital management solution designed to manage patients, doctors, appointments and essential healthcare information efficiently.",
    image: hospitalImg,
    tech: ["React", "Node.js", "Express.js", "Database"],
    icons: [FaReact, FaServer, FaDatabase],
    code: "",
    category: 'software',
  },
  {
    title: "SpaceWorld",
    description: "An educational website that helps students explore the solar system, planets, astronauts and space missions through interactive content.",
    image: speshImg,
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    icons: [FaCode, FaMobileAlt],
    code: "https://github.com/Amityaduvanshi203/SpaceWorld",
    category: 'software',
  },
  {
    title: "Amit Portfolio",
    description: "A responsive personal portfolio website showcasing my technical skills, projects, experience, achievements and professional journey.",
    image: portfolioImg,
    tech: ["React", "Tailwind CSS", "Framer Motion", "JavaScript"],
    icons: [FaReact, FaCode],
    code: "https://github.com/Amityaduvanshi203/Amit--portfolio",
    category: 'software',
  },
  {
    title: "Freelancing Platform",
    description: "A web platform designed for freelancers and clients with features for authentication, project listings, searching and user interactions.",
    image: freelancingImg,
    tech: ["React", "Vite", "Express.js", "SQLite", "Tailwind CSS"],
    icons: [FaReact, FaServer, FaDatabase],
    code: "https://github.com/Amityaduvanshi203/Freelancing-platform",
    category: 'software',
  },
  {
    title: "Bluetooth Control Car",
    description: "A Bluetooth-controlled robotic car that receives commands from a mobile device and controls the movement of the vehicle wirelessly.",
    image: bluecarImg,
    tech: ["Arduino", "Bluetooth", "Embedded C", "Motor Driver"],
    icons: [FaTools, FaCode],
    code: "",
    demo: hardwareDemoUrl,
    category: 'hardware',
  },
  {
    title: "Obstacle Avoidance Car",
    description: "An autonomous robotic car that detects obstacles using sensors and automatically changes its direction to avoid collisions.",
    image: obscarImg,
    tech: ["Arduino", "Ultrasonic Sensor", "Embedded C", "Motor Driver"],
    icons: [FaTools, FaCode],
    code: "",
    demo: hardwareDemoUrl,
    category: 'hardware',
  },
  {
    title: "Fire Fighting Car",
    description: "An autonomous robotic vehicle designed to detect fire and move toward the affected area to perform basic fire extinguishing operations.",
    image: firecarImg,
    tech: ["Arduino", "Flame Sensor", "Embedded C", "Water Pump"],
    icons: [FaTools, FaCode],
    code: "",
    demo: hardwareDemoUrl,
    category: 'hardware',
  },
  {
    title: "Health Care Monitoring System using ESP32",
    description: "An IoT-based healthcare monitoring system that collects health parameters using sensors and provides real-time monitoring through ESP32.",
    image: healthcareImg,
    tech: ["ESP32", "IoT", "Sensors", "Embedded C"],
    icons: [FaTools, FaCloud, FaDatabase],
    code: "",
    demo: hardwareDemoUrl,
    category: 'hardware',
  },
  {
    title: "Smart Dustbin",
    description: "An automated smart dustbin that uses sensors to detect nearby objects and open the lid automatically for touch-free waste disposal.",
    image: dustbinImg,
    tech: ["Arduino", "Ultrasonic Sensor", "Servo Motor", "Embedded C"],
    icons: [FaTools, FaCode],
    code: "",
    demo: hardwareDemoUrl,
    category: 'hardware',
  },
  {
    title: "Smart Water Pump for Agriculture",
    description: "An automated agricultural irrigation system that monitors soil conditions and controls the water pump to improve water usage efficiency.",
    image: pumpImg,
    tech: ["Arduino", "Soil Moisture Sensor", "Relay", "Embedded C"],
    icons: [FaTools, FaCloud],
    code: "",
    demo: hardwareDemoUrl,
    category: 'hardware',
  },
  {
    title: "Smart Blind Stick",
    description: "An assistive smart stick that uses sensors to detect obstacles and provide alerts to help visually impaired users navigate safely.",
    image: blindImg,
    tech: ["Arduino", "Ultrasonic Sensor", "Buzzer", "Embedded C"],
    icons: [FaTools, FaCode],
    code: "",
    demo: hardwareDemoUrl,
    category: 'hardware',
  },
  {
    title: "Railway Accident Prevention System",
    description: "An embedded railway safety solution designed to detect dangerous conditions and provide warnings to reduce the possibility of railway accidents.",
    image: railwayHardwareImg,
    tech: ["Arduino", "Sensors", "Embedded C", "IoT"],
    icons: [FaTools, FaCloud],
    code: "",
    demo: hardwareDemoUrl,
    category: 'hardware',
  },
  {
    title: "Smart Home",
    description: "An IoT-based smart home system that enables automated monitoring and control of household appliances using sensors and connected devices.",
    image: homeImg,
    tech: ["Arduino", "ESP32", "IoT", "Sensors", "Embedded C"],
    icons: [FaTools, FaCloud],
    code: "",
    demo: hardwareDemoUrl,
    category: 'hardware',
  },
  {
    title: "Face Detection System",
    description: "A computer vision-based face detection system designed to detect and identify human faces using camera input and image processing techniques.",
    image: faceDetectionImg,
    tech: ["Python", "OpenCV", "Computer Vision", "AI"],
    icons: [FaPython, FaCamera],
    code: "",
    category: 'ai',
  },
  {
    title: "AI Heritage Chatbot",
    description: "An AI-powered chatbot designed to provide information about Solapur's heritage, historical places, monuments, and cultural significance through an interactive conversational interface.",
    image: heritageChatbotImg,
    tech: ["Python", "AI", "NLP", "Chatbot", "React"],
    icons: [FaRobot, FaPython],
    code: "",
    category: 'ai',
  },
  {
    title: "Smart Pave",
    description: "An IoT-based permeable pavement monitoring system that measures and analyzes water infiltration performance using sensors and an ESP32-based monitoring system.",
    image: pavementImg,
    tech: ["ESP32", "IoT", "Sensors", "FastAPI", "React"],
    icons: [FaMicrochip, FaChartLine],
    code: "",
    demo: hardwareDemoUrl,
    category: 'hardware',
  },
]

// --- Flip Card Component ---
const FlipProjectCard = ({ project, index }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  const categoryColors = {
    software: 'from-purple-500 to-violet-600',
    ai: 'from-pink-500 to-rose-600',
    hardware: 'from-teal-500 to-cyan-600',
  }

  return (
    <Motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.05 }}
      className='w-full'
      style={{ perspective: '1200px' }}
    >
      <div
        className='relative w-full cursor-pointer group'
        style={{ minHeight: '420px' }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Card inner container — handles 3D flip */}
        <div
          className='relative w-full h-full transition-transform duration-700 ease-in-out'
          style={{
            transformStyle: 'preserve-3d',
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            minHeight: '420px',
          }}
        >
          {/* ====== FRONT FACE ====== */}
          <div
            className='absolute inset-0 w-full h-full rounded-2xl overflow-hidden'
            style={{ backfaceVisibility: 'hidden' }}
          >
            <div className='bg-dark-200/90 border border-white/5 hover:border-purple-100/40 rounded-2xl overflow-hidden transition-all duration-300 shadow-xl hover:shadow-[0_15px_35px_rgba(139,92,246,0.25)] flex flex-col h-full'>
              {/* Image */}
              <div className='relative overflow-hidden h-52'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-dark-200 via-transparent to-transparent opacity-70' />

                {/* Category badge */}
                <div className='absolute top-3 left-3'>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${categoryColors[project.category]} shadow-lg`}>
                    {project.category === 'ai' ? '🤖 AI/ML' : project.category === 'hardware' ? '🔧 Hardware' : '💻 Software'}
                  </span>
                </div>

                {/* Flip hint */}
                <div className='absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <span className='px-3 py-1.5 rounded-lg text-xs font-medium text-white bg-dark-100/80 backdrop-blur-sm border border-white/10 flex items-center gap-1.5'>
                    <span className='inline-block animate-pulse'>🔄</span> Click to flip
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className='p-5 flex flex-col flex-grow'>
                <h3 className='text-lg font-bold text-white mb-2 group-hover:text-purple-100 transition-colors duration-300 line-clamp-1'>
                  {project.title}
                </h3>
                <p className='text-gray-400 text-sm leading-relaxed mb-4 flex-grow line-clamp-3'>
                  {project.description}
                </p>
                <div className='flex flex-wrap gap-1.5'>
                  {project.tech.slice(0, 3).map((item, i) => (
                    <span
                      key={i}
                      className='bg-dark-400/80 border border-white/5 px-2.5 py-1 rounded-full text-xs text-gray-300 font-medium'
                    >
                      {item}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className='bg-purple-100/10 border border-purple-100/20 px-2.5 py-1 rounded-full text-xs text-purple-100 font-medium'>
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* ====== BACK FACE ====== */}
          <div
            className='absolute inset-0 w-full h-full rounded-2xl overflow-hidden'
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
          >
            <div className={`bg-dark-200 border border-white/10 rounded-2xl p-6 flex flex-col h-full relative overflow-hidden`}>
              {/* Decorative gradient */}
              <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${categoryColors[project.category]}`} />

              <h3 className='text-xl font-bold text-white mb-4 mt-2'>
                {project.title}
              </h3>

              <p className='text-gray-300 text-sm leading-relaxed mb-6 flex-grow'>
                {project.description}
              </p>

              {/* Full tech stack */}
              <div className='mb-6'>
                <p className='text-xs text-gray-500 uppercase tracking-wider font-semibold mb-2'>Tech Stack</p>
                <div className='flex flex-wrap gap-2'>
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium text-white bg-gradient-to-r ${categoryColors[project.category]} shadow-sm`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className='flex gap-3 mt-auto'>
                {project.code ? (
                  <a
                    href={project.code}
                    target='_blank'
                    rel='noopener noreferrer'
                    onClick={(e) => e.stopPropagation()}
                    className='flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-purple-100 hover:bg-purple-700 text-white rounded-xl font-medium shadow-md shadow-purple-100/20 hover:shadow-purple-100/40 transition-all duration-300'
                  >
                    <FaGithub className='text-lg' />
                    Source Code
                  </a>
                ) : null}
                {project.demo ? (
                  <a
                    href={project.demo}
                    target='_blank'
                    rel='noopener noreferrer'
                    onClick={(e) => e.stopPropagation()}
                    className='flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-dark-400/60 hover:bg-dark-400 text-gray-300 hover:text-white rounded-xl text-sm transition-colors duration-300 border border-white/5'
                  >
                    <FaExternalLinkAlt />
                    Demo
                  </a>
                ) : !project.code ? (
                  <span className='flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-dark-400/40 text-gray-500 rounded-xl text-sm border border-white/5'>
                    <FaTools />
                    Internal / Hardware
                  </span>
                ) : null}
              </div>

              {/* Flip back hint */}
              <p className='text-center text-xs text-gray-500 mt-4'>
                Click to flip back
              </p>
            </div>
          </div>
        </div>
      </div>
    </Motion.div>
  )
}

// --- Main Projects Component ---
const INITIAL_SHOW = 6

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [showAll, setShowAll] = useState(false)

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return projects
    return projects.filter(p => p.category === activeCategory)
  }, [activeCategory])

  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, INITIAL_SHOW)
  const hasMore = filteredProjects.length > INITIAL_SHOW

  const projectCounts = useMemo(() => ({
    all: projects.length,
    software: projects.filter(p => p.category === 'software').length,
    ai: projects.filter(p => p.category === 'ai').length,
    hardware: projects.filter(p => p.category === 'hardware').length,
  }), [])

  return (
    <Motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.05 }}
      id='projects'
      className='py-16 md:py-24 bg-dark-200 overflow-hidden relative'
    >
      {/* Decorative blurs */}
      <div className='absolute top-0 left-1/4 w-96 h-96 bg-purple-100/5 rounded-full blur-3xl pointer-events-none' />
      <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-blue-100/5 rounded-full blur-3xl pointer-events-none' />

      <div className='container mx-auto px-4 md:px-6 relative z-10'>
        {/* Header */}
        <h2 className='text-3xl md:text-5xl font-bold mb-4 text-center'>
          My <span className='text-purple-100 drop-shadow-[0_0_20px_rgba(139,92,246,0.4)]'>Projects</span>
        </h2>
        <p className='text-gray-400 text-center text-sm md:text-base max-w-2xl mx-auto mb-10'>
          Click any card to flip it and explore the details — filter by category to find what interests you.
        </p>

        {/* Category Tabs */}
        <div className='flex flex-wrap justify-center gap-3 mb-12'>
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => { setActiveCategory(cat.key); setShowAll(false); }}
              className={`
                relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300
                ${activeCategory === cat.key
                  ? 'bg-purple-100 text-white shadow-lg shadow-purple-100/30'
                  : 'bg-dark-400/50 text-gray-400 hover:text-white hover:bg-dark-400/80 border border-white/5'
                }
              `}
            >
              <span className='mr-1.5'>{cat.icon}</span>
              {cat.label}
              <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                activeCategory === cat.key
                  ? 'bg-white/20 text-white'
                  : 'bg-dark-200/50 text-gray-500'
              }`}>
                {projectCounts[cat.key]}
              </span>
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <AnimatePresence mode='wait'>
          <Motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto'
          >
            {visibleProjects.map((project, index) => (
              <FlipProjectCard key={`${activeCategory}-${index}`} project={project} index={index} />
            ))}
          </Motion.div>
        </AnimatePresence>

        {/* Show More / Show Less */}
        {hasMore && (
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className='flex justify-center mt-12'
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className='group flex items-center gap-2 px-8 py-3.5 bg-dark-400/50 hover:bg-purple-100/20 border border-white/10 hover:border-purple-100/40 text-gray-300 hover:text-white rounded-xl font-medium transition-all duration-300 hover:-translate-y-0.5'
            >
              {showAll ? (
                <>
                  <FaChevronUp className='group-hover:-translate-y-0.5 transition-transform duration-300' />
                  Show Less
                </>
              ) : (
                <>
                  <FaChevronDown className='group-hover:translate-y-0.5 transition-transform duration-300 animate-bounce' />
                  Show All {filteredProjects.length} Projects
                </>
              )}
            </button>
          </Motion.div>
        )}

        {/* Stats bar */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className='flex flex-wrap justify-center gap-6 md:gap-12 mt-16 pt-10 border-t border-white/5'
        >
          {[
            { num: projects.length, label: 'Total Projects' },
            { num: projectCounts.software, label: 'Software Projects' },
            { num: projectCounts.ai, label: 'AI/ML Projects' },
            { num: projectCounts.hardware, label: 'Hardware Projects' },
          ].map((stat, i) => (
            <div key={i} className='text-center'>
              <p className='text-3xl md:text-4xl font-bold text-purple-100 drop-shadow-[0_0_15px_rgba(139,92,246,0.4)]'>
                {stat.num}+
              </p>
              <p className='text-gray-400 text-sm mt-1'>{stat.label}</p>
            </div>
          ))}
        </Motion.div>
      </div>
    </Motion.div>
  )
}

export default Projects