import React from 'react'
import { motion as Motion } from 'framer-motion'
import { FaLightbulb, FaPaintBrush, FaCode } from 'react-icons/fa'
import sanket from '../assets/Amit.jpeg'
import TiltCard from './3d/TiltCard'

const aboutInfo = [
  {
    icon: FaLightbulb,
    title: 'Innovative',
    description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
    color: 'text-purple'
  },
  {
    icon: FaPaintBrush,
    title: 'Design Oriented',
    description: 'Beautiful design and user experience are at the heart of everything I create.',
    color: 'text-pink'
  },
  {
    icon: FaCode,
    title: 'Clean Code',
    description: 'I write maintainable, efficient code following best practices and modern patterns.',
    color: 'text-blue'
  }
];


const About = () => {
    return (
        <Motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            id='about'
            className='py-20 bg-dark-200 relative overflow-hidden'
        >
            <div className='container mx-auto px-6 relative z-10'>
                <h2 className='text-3xl md:text-5xl font-bold mb-4 text-center'>
                    About <span className='text-purple-100 drop-shadow-[0_0_20px_rgba(139,92,246,0.4)]'>Me</span>
                </h2>
                <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>
                    Get to know more about my background and passion
                </p>

                <div className='flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto'>
                    {/* Left: 3D Tilting Image */}
                    <div className='md:w-1/2 w-full flex justify-center'>
                        <TiltCard maxTilt={10} className='w-full max-w-md'>
                            <div className='relative rounded-3xl p-1 bg-gradient-to-tr from-purple-100/60 via-pink-100/30 to-blue-100/40 shadow-[0_15px_35px_rgba(139,92,246,0.25)] preserve-3d overflow-hidden'>
                                <Motion.img
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.8, ease: 'easeOut' }}
                                    viewport={{ once: true, amount: 0.1 }}
                                    className='w-full h-auto rounded-3xl object-cover transition-transform duration-500 hover:scale-105'
                                    src={sanket} 
                                    alt='Profile Img'
                                />
                                <div className='absolute inset-0 bg-gradient-to-t from-dark-200/80 via-transparent to-transparent pointer-events-none' />
                            </div>
                        </TiltCard>
                    </div>

                    {/* Right: Content & 3D Info Cards */}
                    <Motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        viewport={{ once: true, amount: 0.1 }}
                        className='md:w-1/2'
                    >
                        <div className='rounded-2xl mb-8'>
                            <h3 className='text-2xl font-semibold mb-4 text-white'>My Journey</h3>
                            <p className='text-gray-300 mb-4 leading-relaxed'>
                                I am an Electronics and Telecommunication Engineering student with a strong interest in technology and problem-solving. Alongside my academic foundation in core engineering subjects, I have developed solid programming skills in Python, JavaScript, and full-stack web development.
                            </p>
                            <p className='text-gray-300 leading-relaxed'>
                                Through project-based learning and hackathons, I focus on building efficient, user-centric, and scalable applications combining hardware innovation with modern 3D web interfaces.
                            </p>
                        </div>

                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                            {
                                aboutInfo.map((data, index) => (
                                    <TiltCard key={index} maxTilt={15}>
                                        <div className='bg-dark-300/80 border border-white/5 hover:border-purple-100/40 duration-300 rounded-2xl p-5 shadow-md hover:shadow-[0_10px_25px_rgba(139,92,246,0.2)] preserve-3d flex flex-col h-full'>
                                            <div className='text-purple-100 text-3xl mb-3 translate-z-20 p-2.5 rounded-xl bg-purple-100/10 w-fit'>
                                                <data.icon />
                                            </div>
                                            <h4 className='text-lg font-semibold mb-1 text-white translate-z-10'>{data.title}</h4>
                                            <p className='text-gray-400 text-xs leading-relaxed translate-z-10'>{data.description}</p>
                                        </div>
                                    </TiltCard>
                                ))
                            }
                        </div>
                    </Motion.div>
                </div>
            </div>
        </Motion.div>
    )
}

export default About
