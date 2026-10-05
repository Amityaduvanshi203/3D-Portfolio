import React from 'react'
import { motion as Motion } from 'framer-motion'
import { FaReact, FaServer, FaDatabase, FaRobot, FaCloud, FaTools } from 'react-icons/fa'
import TiltCard from './3d/TiltCard'

const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['React', 'HTML', 'CSS', 'JavaScript', 'Tailwind CSS']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Node.js', 'Express', 'Flask']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['MongoDB', 'PostgreSQL', 'MySQL']
  },
  {
    title: 'Machine Learning & AI',
    icon: FaRobot,
    description: 'Building intelligent applications using machine learning and artificial intelligence.',
    tags: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn']
  },
  {
    title: 'Cloud & DevOps',
    icon: FaCloud,
    description: 'Deploying and managing applications in cloud environments.',
    tags: ['AWS', 'Docker', 'Kubernetes']
  },
  {
    title: 'Tools & Programming Languages',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['Git & GitHub', 'Webpack', 'Figma', 'Java', 'Python', 'C']
  }
];


const Skills = () => {
    return (
        <Motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.1 }}
            id='skills'
            className='py-12 sm:py-16 md:py-20 bg-dark-100 relative overflow-hidden'
        >
            <div className='container mx-auto px-4 sm:px-6 relative z-10'>
                <h2 className='text-2xl sm:text-3xl md:text-5xl font-bold mb-4 text-center'>
                    My <span className='text-purple-100 drop-shadow-[0_0_20px_rgba(139,92,246,0.4)]'>Skills</span>
                </h2>
                <p className='text-gray-400 text-center text-sm sm:text-base max-w-2xl mx-auto mb-10 sm:mb-16'>
                    Technologies I work with to bring ideas to life
                </p>
                
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto'>
                    {
                        skills.map((skill, index) => (
                            <TiltCard key={index} maxTilt={14} className='h-full'>
                                <div className='bg-dark-200/90 border border-white/5 hover:border-purple-100/40 rounded-2xl p-4 sm:p-6 transition-all duration-300 shadow-lg hover:shadow-[0_10px_25px_rgba(139,92,246,0.25)] flex flex-col h-full preserve-3d'>
                                    <div className='flex items-center mb-3 sm:mb-4 translate-z-20'>
                                        <div className='p-2.5 sm:p-3 rounded-xl bg-purple-100/10 text-purple-100 mr-3 sm:mr-4 shadow-[0_0_15px_rgba(139,92,246,0.3)]'>
                                            <skill.icon className='w-6 h-6 sm:w-8 sm:h-8' />
                                        </div>
                                        <h3 className='text-base sm:text-lg md:text-xl font-semibold text-white'>{skill.title}</h3>
                                    </div>
                                    <p className='text-gray-400 mb-4 sm:mb-6 text-xs sm:text-sm flex-grow translate-z-10 leading-relaxed'>
                                        {skill.description}
                                    </p>
                                    <div className='flex flex-wrap gap-1.5 sm:gap-2 mt-auto translate-z-10'>
                                        {
                                            skill.tags.map((tech) => (
                                                <span 
                                                    key={tech} 
                                                    className='px-2 sm:px-3 py-1 bg-dark-400/80 border border-white/5 rounded-full text-[10px] sm:text-xs text-gray-300 font-medium'
                                                >
                                                    {tech}
                                                </span>
                                            ))
                                        }
                                    </div>
                                </div>
                            </TiltCard>
                        ))
                    }
                </div>
            </div>
        </Motion.div>
    )
}

export default Skills
