import React from 'react'
import { motion as Motion } from 'framer-motion'
import { FaReact, FaCode, FaServer, FaRobot, FaDatabase, FaTools, FaMobileAlt, FaCloud } from 'react-icons/fa'
import ProjectCard from './ProjectCard'

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

// Hardware images
import electresaImg from '../assets/Hadware/electresa .png'
import bluecarImg from '../assets/Hadware/blucar .png'
import dustbinImg from '../assets/Hadware/dustbin.png'
import firecarImg from '../assets/Hadware/firecar.png'
import healthcareImg from '../assets/Hadware/healthcare.png'
import homeImg from '../assets/Hadware/home.png'
import obscarImg from '../assets/Hadware/obscar.png'
import pumpImg from '../assets/Hadware/pump.png'
import railwayHardwareImg from '../assets/Hadware/relway.png'

const projects = [
  {
    title: "Electrixa",
    description: "A student-focused technology platform for learning, hardware projects, software development, courses, kits and engineering resources.",
    image: electresaImg,
    tech: ["React", "JavaScript", "Tailwind CSS", "Node.js"],
    icons: [FaReact, FaCode, FaServer],
    code: "https://github.com/Amityaduvanshi203/Electrixa",
  },
  {
    title: "AI-Based Citizen Feedback Analysis",
    description: "An AI-powered system that analyzes citizen feedback using NLP and machine learning to identify issues and generate department-wise insights.",
    image: aiCustomerImg,
    tech: ["Python", "NLP", "LSTM", "Flask", "Machine Learning"],
    icons: [FaRobot, FaServer, FaDatabase],
    code: "https://github.com/Amityaduvanshi203/Sentiment-analyzer",
  },
  {
    title: "Sentiment Analyzer",
    description: "An AI-based application that analyzes text feedback and classifies user opinions into different sentiment categories using NLP techniques.",
    image: aiSentimentImg,
    tech: ["Python", "NLP", "Flask", "VADER", "Machine Learning"],
    icons: [FaRobot, FaServer, FaDatabase],
    code: "https://github.com/Amityaduvanshi203/Sentiment-analyzer",
  },
  {
    title: "Railway Track Safety System",
    description: "An embedded safety system designed to detect railway track problems and provide early warnings to help prevent railway accidents.",
    image: railwayProjectImg,
    tech: ["Arduino", "Embedded C", "Sensors", "IoT"],
    icons: [FaTools, FaCode],
    code: "https://github.com/Amityaduvanshi203/Railway_track",
  },
  {
    title: "Nabha Student Learning Platform",
    description: "A digital learning platform designed to provide rural students with educational content, learning resources and offline-friendly access.",
    image: nabhaImg,
    tech: ["React", "PWA", "JavaScript", "CSS"],
    icons: [FaReact, FaCode, FaMobileAlt],
    code: "https://github.com/Amityaduvanshi203/Nabha--student",
  },
  {
    title: "Scroll",
    description: "A modern responsive web project focused on smooth scrolling, interactive sections and an engaging user interface experience.",
    image: realsImg,
    tech: ["React", "JavaScript", "CSS", "Framer Motion"],
    icons: [FaReact, FaCode],
    code: "https://github.com/Amityaduvanshi203/Scroll--relecx",
  },
  {
    title: "Kishore Chandak",
    description: "A modern web project developed to present information and services through a responsive interface with a clean and user-friendly design.",
    image: intecImg,
    tech: ["React", "JavaScript", "CSS", "Responsive Design"],
    icons: [FaReact, FaCode],
    code: "https://github.com/Amityaduvanshi203/kishore-chandak-..-web-page-",
  },
  {
    title: "InTech Heritage",
    description: "A heritage-focused digital platform designed to present cultural information, locations and historical content through an interactive website.",
    image: intecImg,
    tech: ["React", "JavaScript", "CSS", "Three.js"],
    icons: [FaReact, FaCode],
    code: "https://github.com/Amityaduvanshi203/-Intach-Solapur-heritage",
  },
  {
    title: "Hospital Management System",
    description: "A web-based hospital management solution designed to manage patients, doctors, appointments and essential healthcare information efficiently.",
    image: hospitalImg,
    tech: ["React", "Node.js", "Express.js", "Database"],
    icons: [FaReact, FaServer, FaDatabase],
    code: "",
  },
  {
    title: "SpaceWorld",
    description: "An educational website that helps students explore the solar system, planets, astronauts and space missions through interactive content.",
    image: speshImg,
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    icons: [FaCode, FaMobileAlt],
    code: "https://github.com/Amityaduvanshi203/SpaceWorld",
  },
  {
    title: "Amit Portfolio",
    description: "A responsive personal portfolio website showcasing my technical skills, projects, experience, achievements and professional journey.",
    image: portfolioImg,
    tech: ["React", "Tailwind CSS", "Framer Motion", "JavaScript"],
    icons: [FaReact, FaCode],
    code: "https://github.com/Amityaduvanshi203/Amit--portfolio",
  },
  {
    title: "Freelancing Platform",
    description: "A web platform designed for freelancers and clients with features for authentication, project listings, searching and user interactions.",
    image: freelancingImg,
    tech: ["React", "Vite", "Express.js", "SQLite", "Tailwind CSS"],
    icons: [FaReact, FaServer, FaDatabase],
    code: "https://github.com/Amityaduvanshi203/Freelancing-platform",
  },
  {
    title: "Bluetooth Control Car",
    description: "A Bluetooth-controlled robotic car that receives commands from a mobile device and controls the movement of the vehicle wirelessly.",
    image: bluecarImg,
    tech: ["Arduino", "Bluetooth", "Embedded C", "Motor Driver"],
    icons: [FaTools, FaCode],
    code: "",
  },
  {
    title: "Obstacle Avoidance Car",
    description: "An autonomous robotic car that detects obstacles using sensors and automatically changes its direction to avoid collisions.",
    image: obscarImg,
    tech: ["Arduino", "Ultrasonic Sensor", "Embedded C", "Motor Driver"],
    icons: [FaTools, FaCode],
    code: "",
  },
  {
    title: "Fire Fighting Car",
    description: "An autonomous robotic vehicle designed to detect fire and move toward the affected area to perform basic fire extinguishing operations.",
    image: firecarImg,
    tech: ["Arduino", "Flame Sensor", "Embedded C", "Water Pump"],
    icons: [FaTools, FaCode],
    code: "",
  },
  {
    title: "Health Care Monitoring System using ESP32",
    description: "An IoT-based healthcare monitoring system that collects health parameters using sensors and provides real-time monitoring through ESP32.",
    image: healthcareImg,
    tech: ["ESP32", "IoT", "Sensors", "Embedded C"],
    icons: [FaTools, FaCloud, FaDatabase],
    code: "",
  },
  {
    title: "Smart Dustbin",
    description: "An automated smart dustbin that uses sensors to detect nearby objects and open the lid automatically for touch-free waste disposal.",
    image: dustbinImg,
    tech: ["Arduino", "Ultrasonic Sensor", "Servo Motor", "Embedded C"],
    icons: [FaTools, FaCode],
    code: "",
  },
  {
    title: "Smart Water Pump for Agriculture",
    description: "An automated agricultural irrigation system that monitors soil conditions and controls the water pump to improve water usage efficiency.",
    image: pumpImg,
    tech: ["Arduino", "Soil Moisture Sensor", "Relay", "Embedded C"],
    icons: [FaTools, FaCloud],
    code: "",
  },
  {
    title: "Smart Blind Stick",
    description: "An assistive smart stick that uses sensors to detect obstacles and provide alerts to help visually impaired users navigate safely.",
    image: blindImg,
    tech: ["Arduino", "Ultrasonic Sensor", "Buzzer", "Embedded C"],
    icons: [FaTools, FaCode],
    code: "",
  },
  {
    title: "Railway Accident Prevention System",
    description: "An embedded railway safety solution designed to detect dangerous conditions and provide warnings to reduce the possibility of railway accidents.",
    image: railwayHardwareImg,
    tech: ["Arduino", "Sensors", "Embedded C", "IoT"],
    icons: [FaTools, FaCloud],
    code: "",
  },
  {
    title: "Smart Home",
    description: "An IoT-based smart home system that enables automated monitoring and control of household appliances using sensors and connected devices.",
    image: homeImg,
    tech: ["Arduino", "ESP32", "IoT", "Sensors", "Embedded C"],
    icons: [FaTools, FaCloud],
    code: "",
  },
];

const Projects = () => {
    return (
        <Motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.1 }}
            id='projects'
            className='py-16 md:py-24 bg-dark-200 overflow-hidden'
        >
            <div className='container mx-auto px-4 md:px-6'>
                <h2 className='text-3xl md:text-5xl font-bold mb-4 text-center'>
                    My <span className='text-purple-100'>Projects</span>
                </h2>

                <p className='text-gray-400 text-center text-sm md:text-base max-w-2xl mx-auto mb-12 md:mb-16'>
                    A selection of my recent work.
                </p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto justify-items-center'>
                    {Array.isArray(projects) && projects.length > 0 ? (
                        projects.map((project, index) => (
                            <div key={index} className="w-full max-w-100 md:max-w-none">
                                <ProjectCard {...project} />
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500 col-span-full">No projects found.</p>
                    )}
                </div>
            </div>
        </Motion.div>
    )
}

export default Projects