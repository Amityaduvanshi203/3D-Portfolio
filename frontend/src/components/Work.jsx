import React from 'react'
import { motion as Motion } from 'framer-motion'
import TiltCard from './3d/TiltCard'

const workData = [
  {
    role: "Data Analyst",
    company: "Skillified Mentor",
    duration: "2025",
    description:
      "Analyzed bank marketing data using Python (Pandas, NumPy, Matplotlib) to identify key factors influencing customer term deposit decisions. Built and evaluated predictive ML models to enhance campaign success insights and support data-driven marketing strategies.",
    color: "purple"
  },
];


const Work = () => {
    return (
        <Motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.1 }}
            id='experience'
            className='py-20 bg-dark-100 relative overflow-hidden'
        >
            <div className='container mx-auto px-6 relative z-10'>
                <h1 className='text-3xl md:text-5xl font-bold mb-4 text-center'>
                    Work <span className='text-purple-100 drop-shadow-[0_0_20px_rgba(139,92,246,0.4)]'>Experience</span>
                </h1>
                <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>A brief overview of my professional journey.</p>
                <div className='max-w-3xl mx-auto'>
                    <div className='space-y-12'>
                        {
                            workData.map((data, index) => (
                                <div key={index} className="relative pl-12 before:content-[''] before:absolute before:left-0 before:top-0 before:w-0.5 before:h-full before:bg-purple-100">
                                    {/* timeline point with glow */}
                                    <div className='absolute -left-2 top-0 w-6 h-6 rounded-full bg-purple-100 shadow-[0_0_15px_rgba(139,92,246,0.8)]' />
                                    
                                    {/* 3D tilt box */}
                                    <TiltCard maxTilt={10}>
                                        <div className='bg-dark-300/90 border border-white/5 hover:border-purple-100/40 rounded-2xl p-6 shadow-lg hover:shadow-[0_10px_25px_rgba(139,92,246,0.2)] preserve-3d transition-all duration-300'>
                                            <div className='flex justify-between items-start mb-2 translate-z-20'>
                                                <h3 className='text-xl font-semibold text-white'>{data.role}</h3>
                                                <span className='text-purple-100 px-3 py-1 bg-purple-100/10 border border-purple-100/20 rounded-full text-xs md:text-sm font-medium'>
                                                    {data.duration}
                                                </span>
                                            </div>
                                            <p className='text-purple-100/80 text-sm mb-3 translate-z-10'>{data.company}</p>
                                            <p className='text-gray-300 leading-relaxed translate-z-10'>{data.description}</p>
                                        </div>
                                    </TiltCard>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </Motion.div>
    )
}

export default Work
