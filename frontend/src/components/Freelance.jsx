import React from 'react'
import { motion as Motion } from 'framer-motion'
import { 
  FaReact, FaNodeJs, FaPython, FaCode, FaRobot, FaServer,
  FaMicrochip, FaWifi, FaCogs, FaBolt, FaTools, FaCube
} from 'react-icons/fa'
import TiltCard from './3d/TiltCard'

const softwareServices = [
  {
    icon: FaCode,
    title: 'Full-Stack Web Development',
    description: 'End-to-end web applications with React, Node.js, and modern frameworks.',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    icon: FaReact,
    title: 'React & JavaScript',
    description: 'Dynamic, responsive SPAs with cutting-edge React ecosystem.',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    icon: FaServer,
    title: 'API & Backend Development',
    description: 'Scalable RESTful APIs with Node.js, Express, Flask & databases.',
    gradient: 'from-emerald-500 to-green-600',
  },
  {
    icon: FaRobot,
    title: 'AI/ML & Chatbot Solutions',
    description: 'Intelligent chatbots, NLP tools, and machine learning integrations.',
    gradient: 'from-pink-500 to-rose-600',
  },
  {
    icon: FaPython,
    title: 'Python Development',
    description: 'Automation scripts, data analysis, and backend services in Python.',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: FaCube,
    title: 'Website Development & Maintenance',
    description: 'Building, updating, and maintaining professional websites for businesses.',
    gradient: 'from-indigo-500 to-blue-500',
  },
]

const hardwareServices = [
  {
    icon: FaMicrochip,
    title: 'Arduino & ESP32 Projects',
    description: 'Custom microcontroller solutions for automation and monitoring.',
    gradient: 'from-teal-500 to-cyan-600',
  },
  {
    icon: FaWifi,
    title: 'IoT Solutions',
    description: 'Connected devices with cloud integration and real-time dashboards.',
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    icon: FaCogs,
    title: 'Sensor & Microcontroller Integration',
    description: 'Seamless sensor integration with embedded processing and output systems.',
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    icon: FaBolt,
    title: 'Basic Circuit Design & Testing',
    description: 'Prototype circuits, PCB design basics, and hardware debugging.',
    gradient: 'from-red-500 to-pink-600',
  },
  {
    icon: FaTools,
    title: 'Embedded Systems Prototyping',
    description: 'Rapid prototyping of embedded hardware with proof-of-concept builds.',
    gradient: 'from-purple-500 to-violet-600',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { 
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  },
}

const ServiceCard = ({ service }) => (
  <Motion.div variants={cardVariants}>
    <TiltCard maxTilt={14} className='h-full'>
      <div className='group relative bg-dark-200/80 border border-white/5 hover:border-purple-100/40 rounded-2xl p-6 transition-all duration-500 shadow-lg hover:shadow-[0_15px_35px_rgba(139,92,246,0.25)] flex flex-col h-full preserve-3d overflow-hidden'>
        
        {/* Animated background gradient orb */}
        <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-15 blur-2xl transition-opacity duration-700`} />
        
        {/* Icon */}
        <div className='relative z-10 translate-z-20 mb-4'>
          <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} shadow-lg`}>
            <service.icon className='text-white text-2xl' />
          </div>
        </div>

        {/* Content */}
        <h4 className='text-lg font-semibold text-white mb-2 translate-z-10 group-hover:text-purple-100 transition-colors duration-300'>
          {service.title}
        </h4>
        <p className='text-gray-400 text-sm leading-relaxed translate-z-10 flex-grow'>
          {service.description}
        </p>

        {/* Bottom accent line */}
        <div className={`mt-4 h-0.5 w-0 group-hover:w-full bg-gradient-to-r ${service.gradient} transition-all duration-500 rounded-full`} />
      </div>
    </TiltCard>
  </Motion.div>
)

const Freelance = ({ onStartProject }) => {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      id='freelance'
      className='py-20 bg-dark-100 relative overflow-hidden'
    >
      {/* Decorative background elements */}
      <div className='absolute top-20 left-0 w-72 h-72 bg-purple-100/5 rounded-full blur-3xl' />
      <div className='absolute bottom-20 right-0 w-96 h-96 bg-blue-100/5 rounded-full blur-3xl' />

      <div className='container mx-auto px-6 relative z-10'>
        {/* Section Header */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center mb-6'
        >
          <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100/10 border border-purple-100/30 text-purple-100 text-sm font-medium mb-6 backdrop-blur-md'>
            <span className='w-2 h-2 rounded-full bg-green-400 animate-pulse'></span>
            Available for Freelance Work
          </div>
          <h2 className='text-3xl md:text-5xl font-bold mb-4'>
            Freelance{' '}
            <span className='text-purple-100 drop-shadow-[0_0_20px_rgba(139,92,246,0.4)]'>
              Services
            </span>
          </h2>
          <p className='text-gray-400 max-w-2xl mx-auto mb-4'>
            I work as a freelance professional in both Software Development and Hardware/Electronics — building websites, web applications, AI-based solutions, and IoT/embedded projects for clients and organizations.
          </p>
        </Motion.div>

        {/* Software Freelancing */}
        <div className='mb-16'>
          <Motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='flex items-center gap-3 mb-8'
          >
            <div className='w-1.5 h-10 bg-gradient-to-b from-purple-100 to-blue-100 rounded-full' />
            <h3 className='text-2xl md:text-3xl font-bold text-white'>
              💻 Software Freelancing
            </h3>
          </Motion.div>

          <Motion.div
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.1 }}
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto'
          >
            {softwareServices.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </Motion.div>
        </div>

        {/* Hardware Freelancing */}
        <div>
          <Motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='flex items-center gap-3 mb-8'
          >
            <div className='w-1.5 h-10 bg-gradient-to-b from-teal-400 to-green-500 rounded-full' />
            <h3 className='text-2xl md:text-3xl font-bold text-white'>
              🔧 Hardware Freelancing
            </h3>
          </Motion.div>

          <Motion.div
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.1 }}
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto'
          >
            {hardwareServices.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </Motion.div>
        </div>

        {/* Bottom CTA */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className='text-center mt-16'
        >
          <div className='inline-block p-px rounded-2xl bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100'>
            <div className='bg-dark-200 rounded-2xl px-8 py-6'>
              <p className='text-gray-300 mb-4 text-lg'>
                I work with clients to understand their requirements, develop practical solutions, and provide ongoing technical support.
              </p>
              <button
                type='button'
                onClick={onStartProject}
                className='inline-flex items-center gap-2 px-8 py-3 bg-purple-100 hover:bg-purple-700 text-white rounded-xl font-medium shadow-md shadow-purple-100/20 hover:shadow-purple-100/40 transition-all duration-300 hover:-translate-y-0.5'
              >
                Let's Work Together
                <span className='text-lg'>→</span>
              </button>
            </div>
          </div>
        </Motion.div>
      </div>
    </Motion.div>
  )
}

export default Freelance
