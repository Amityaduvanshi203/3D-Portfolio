import React from 'react'

const Footer = () => {
  return (
    <div className='py-6 sm:py-8 bg-dark-400'>
      <div className='container mx-auto px-4 sm:px-6 text-center'>
        <p className='text-gray-400 text-xs sm:text-sm md:text-base'> © {new Date().getFullYear()} Created By Amit Yadav. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
