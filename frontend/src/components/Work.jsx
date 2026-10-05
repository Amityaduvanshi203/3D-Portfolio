import React from 'react'
import { motion as Motion } from 'framer-motion'
import TiltCard from './3d/TiltCard'

const workData = [
  {
    role: "Web Developer / Team Leader",
    company: "INTACH Solapur",
    duration: "2026 – Present",
    description:
      "Working on the official INTACH Solapur heritage website and digital heritage initiatives. Developed and maintained the React-based frontend, contributed to backend integration, and worked on a Python-based chatbot for providing information about Solapur's heritage and historical places.",
    color: "purple",
  },
  {
    role: "Web Developer & Website Maintenance",
    company: "Kishor Chandak / Mantri Chandak",
    duration: "2026",
    description:
      "Developed and maintained web pages for real-estate related business activities. Worked on responsive UI development, website updates, content management, debugging, and improving the overall website experience.",
    color: "purple",
  },
  {
    role: "Electronics & Hardware Intern",
    company: "Sathe Engineering",
    duration: "Dec 2025 – Jan 2026",
    description:
      "Worked with electronics and electrical systems including UPS, servo stabilizers, and microcontroller-based systems. Gained practical experience in hardware troubleshooting, circuit understanding, testing, and basic embedded system applications.",
    color: "purple",
  },
]

const Work = () => {
  return (
    <Motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.1 }}
      id="experience"
      className="py-12 sm:py-16 md:py-20 bg-dark-100 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 relative z-10">

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 text-center">
          Work{' '}
          <span className="text-purple-100 drop-shadow-[0_0_20px_rgba(139,92,246,0.4)]">
            Experience
          </span>
        </h1>

        <p className="text-gray-400 text-center text-sm sm:text-base max-w-2xl mx-auto mb-10 sm:mb-16">
          A brief overview of my professional journey.
        </p>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8 sm:space-y-12">

            {workData.map((data, index) => (
              <div
                key={index}
                className="relative pl-8 sm:pl-12 before:content-[''] before:absolute before:left-0 before:top-0 before:w-0.5 before:h-full before:bg-purple-100"
              >

                {/* Timeline Point */}
                <div className="absolute -left-1.5 sm:-left-2 top-0 w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-purple-100 shadow-[0_0_15px_rgba(139,92,246,0.8)]" />

                {/* 3D Tilt Card */}
                <TiltCard maxTilt={10}>
                  <div className="bg-dark-300/90 border border-white/5 hover:border-purple-100/40 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-[0_10px_25px_rgba(139,92,246,0.2)] preserve-3d transition-all duration-300">

                    {/* Role + Duration */}
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2 translate-z-20">
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white">
                        {data.role}
                      </h3>

                      <span className="text-purple-100 px-3 py-1 bg-purple-100/10 border border-purple-100/20 rounded-full text-xs font-medium w-fit whitespace-nowrap">
                        {data.duration}
                      </span>
                    </div>

                    {/* Company */}
                    <p className="text-purple-100/80 text-xs sm:text-sm mb-2 sm:mb-3 translate-z-10">
                      {data.company}
                    </p>

                    {/* Description */}
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed translate-z-10">
                      {data.description}
                    </p>

                  </div>
                </TiltCard>

              </div>
            ))}

          </div>
        </div>

      </div>
    </Motion.div>
  )
}

export default Work