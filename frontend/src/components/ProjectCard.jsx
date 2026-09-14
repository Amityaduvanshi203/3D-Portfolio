import React from 'react'
import TiltCard from './3d/TiltCard'

const ProjectCard = ({ title, description, image, tech, code }) => {
  return (
    <TiltCard maxTilt={12} className='h-full'>
      <div className='bg-dark-200/90 border border-white/5 hover:border-purple-100/40 rounded-2xl overflow-hidden transition-all duration-300 shadow-xl hover:shadow-[0_15px_30px_rgba(139,92,246,0.25)] flex flex-col h-full preserve-3d'>
        
        {/* Image with zoom effect */}
        <div className='relative overflow-hidden h-60'>
          <img 
            src={image} 
            alt={title} 
            className='w-full h-full object-cover transition-transform duration-500 hover:scale-110'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-dark-200 via-transparent to-transparent opacity-60' />
        </div>

        <div className='p-6 flex flex-col flex-grow preserve-3d'>
          
          <h3 className='text-xl font-semibold mb-2 text-white group-hover:text-purple-100 transition-colors duration-300 translate-z-20'>
            {title}
          </h3>
          
          <p className='text-gray-400 mb-4 text-sm leading-relaxed flex-grow translate-z-10'>
            {description}
          </p>

          <div className='flex flex-wrap gap-2 mb-6 translate-z-10'>
            {/* Safe tech map */}
            {Array.isArray(tech) &&
              tech.map((item, index) => (
                <span
                  key={index}
                  className='bg-dark-400/80 border border-white/5 px-3 py-1 rounded-full text-xs text-gray-300 font-medium'
                >
                  {item}
                </span>
              ))
            }
          </div>

          <div className='flex gap-2 mt-auto translate-z-20'>
            {code ? (
              <a
                href={code}
                target='_blank'
                rel='noopener noreferrer'
                className='flex-1 text-center px-4 py-2.5 bg-purple-100 hover:bg-purple-700 text-white rounded-xl font-medium shadow-md shadow-purple-100/20 hover:shadow-purple-100/40 transition-all duration-300'
              >
                Source Code
              </a>
            ) : (
              <span className='flex-1 text-center px-4 py-2.5 bg-dark-400/50 text-gray-400 rounded-xl text-sm'>
                Internal / Hardware Demo
              </span>
            )}
          </div>
        </div>
      </div>
    </TiltCard>
  )
}

export default ProjectCard

