import React from 'react'
import { motion as Motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaPython, FaDatabase } from 'react-icons/fa'
import sanket from '../assets/Amit.jpeg'
import ThreeCanvas from './3d/ThreeCanvas'

const Hero = () => {
    return (
        <Motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            id='home'
            className='relative min-h-screen flex items-center pt-20 pb-16 bg-linear-to-r from-dark-100 via-[#1f1a2e] to-dark-100 overflow-hidden'
        >
            {/* 3D Interactive Three.js Background Scene */}
            <div className='absolute inset-0 z-0 pointer-events-none opacity-60'>
                <ThreeCanvas />
            </div>

            <div className='container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between'>
                {/* Left Side */}
                <div className='md:w-1/2 mb-12 md:mb-0'>
                    <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100/10 border border-purple-100/30 text-purple-100 text-sm font-medium mb-6 backdrop-blur-md'>
                        <span className='w-2 h-2 rounded-full bg-purple-100 animate-ping'></span>
                        Interactive 3D Experience
                    </div>
                    <h1 className='text-4xl md:text-6xl font-bold mb-4 tracking-tight'>
                        Hi, I'm <span className='text-purple-100 drop-shadow-[0_0_25px_rgba(139,92,246,0.6)]'>Amit yadav</span>
                    </h1>
                    <h2 className='text-2xl md:text-4xl font-semibold mb-6 typewriter text-gray-200'>Full Stack Developer</h2>
                    <p className='text-lg text-gray-300 mb-8 max-w-lg leading-relaxed'>
                        I create stunning, high-performance web experiences with modern technologies, immersive 3D interactions, and innovative design.
                    </p>
                    <div className='flex flex-wrap gap-4'>
                        <a 
                            href='#projects' 
                            className='px-6 py-3 bg-purple-100 text-white rounded-xl font-medium hover:bg-purple-700 hover:shadow-[0_0_20px_rgba(139,92,246,0.6)] hover:-translate-y-0.5 transition duration-300'
                        >
                            View Work
                        </a>
                        <a 
                            href='#contact' 
                            className='px-6 py-3 border border-purple-100/60 rounded-xl font-medium hover:bg-purple-100/20 hover:-translate-y-0.5 transition duration-300 backdrop-blur-sm'
                        >
                            Contact Me
                        </a>
                        <a 
                            href='https://drive.google.com/file/d/1nLD83jfNBnD7C78U5mNy7MlJmoK0BQTV/view?usp=drive_link' 
                            className='px-6 py-3 bg-dark-400/80 border border-white/10 rounded-xl font-medium hover:bg-dark-400 hover:border-purple-100/50 hover:-translate-y-0.5 transition duration-300 backdrop-blur-sm'
                        >
                            Resume
                        </a>
                    </div>
                </div>

                {/* Right Side - 3D Floating Avatar with Orbital Rings & Floating Tech Badges */}
                <div className='md:w-1/2 flex justify-center items-center relative'>
                    <div className='relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center'>
                        
                        {/* 3D Orbital Glow Ring 1 */}
                        <div 
                            className='absolute inset-0 rounded-full border border-purple-100/40 animate-spin-slow-3d pointer-events-none'
                            style={{ boxShadow: '0 0 35px rgba(139,92,246,0.35)' }}
                        />

                        {/* 3D Orbital Glow Ring 2 (Opposite Angle) */}
                        <div 
                            className='absolute inset-4 rounded-full border border-blue-100/30 pointer-events-none'
                            style={{ 
                                transform: 'rotateX(65deg) rotateY(25deg)',
                                animation: 'spin-slow-3d 15s linear infinite reverse'
                            }}
                        />

                        {/* Ambient Backlight Glow */}
                        <div className='absolute w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-purple-100/40 via-pink-100/30 to-blue-100/40 blur-2xl animate-pulse-slow' />

                        {/* Profile Image with 3D Float */}
                        <Motion.div
                            animate={{ y: [0, -15, 0], rotateZ: [0, 1, -1, 0] }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                repeatType: 'loop',
                                ease: 'easeInOut'
                            }}
                            className='relative z-10 w-56 h-56 md:w-72 md:h-72 rounded-full p-1.5 bg-gradient-to-tr from-purple-100 via-pink-100 to-blue-100 shadow-[0_0_40px_rgba(139,92,246,0.5)]'
                        >
                            <img 
                                src={sanket} 
                                alt='Profile Img' 
                                className='w-full h-full rounded-full object-cover'
                            />
                        </Motion.div>

                        {/* 3D Floating Tech Badge 1: React */}
                        <Motion.div
                            animate={{ y: [0, -14, 0], x: [0, 6, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                            className='absolute -top-2 left-6 z-20 flex items-center gap-2 px-3 py-2 bg-dark-200/90 border border-purple-100/40 rounded-xl backdrop-blur-md shadow-lg shadow-purple-100/20'
                        >
                            <FaReact className='text-cyan-400 text-xl animate-spin-slow' />
                            <span className='text-xs font-semibold text-white'>React</span>
                        </Motion.div>

                        {/* 3D Floating Tech Badge 2: Python */}
                        <Motion.div
                            animate={{ y: [0, 16, 0], x: [0, -8, 0] }}
                            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                            className='absolute top-1/4 -right-4 z-20 flex items-center gap-2 px-3 py-2 bg-dark-200/90 border border-blue-100/40 rounded-xl backdrop-blur-md shadow-lg shadow-blue-100/20'
                        >
                            <FaPython className='text-yellow-400 text-xl' />
                            <span className='text-xs font-semibold text-white'>Python</span>
                        </Motion.div>

                        {/* 3D Floating Tech Badge 3: Node.js */}
                        <Motion.div
                            animate={{ y: [0, -12, 0], x: [0, -6, 0] }}
                            transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                            className='absolute -bottom-2 left-10 z-20 flex items-center gap-2 px-3 py-2 bg-dark-200/90 border border-green-500/40 rounded-xl backdrop-blur-md shadow-lg shadow-green-500/20'
                        >
                            <FaNodeJs className='text-green-400 text-xl' />
                            <span className='text-xs font-semibold text-white'>Node.js</span>
                        </Motion.div>

                        {/* 3D Floating Tech Badge 4: Database / AI */}
                        <Motion.div
                            animate={{ y: [0, 14, 0], x: [0, 8, 0] }}
                            transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                            className='absolute bottom-16 -right-2 z-20 flex items-center gap-2 px-3 py-2 bg-dark-200/90 border border-pink-100/40 rounded-xl backdrop-blur-md shadow-lg shadow-pink-100/20'
                        >
                            <FaDatabase className='text-pink-400 text-lg' />
                            <span className='text-xs font-semibold text-white'>Database</span>
                        </Motion.div>

                    </div>
                </div>
            </div>
        </Motion.div>
    )
}

export default Hero