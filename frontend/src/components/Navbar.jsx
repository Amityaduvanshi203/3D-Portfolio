import React, { useState } from 'react'
import { FaBars, FaXmark } from 'react-icons/fa6'

const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#freelance', label: 'Freelance' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
]

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className='fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm py-4 px-8 shadow-lg'>
            <div className='container mx-auto flex justify-between items-center'>
                <div>
                    <a href='#' className='text-2xl'>
                        Amit
                        <span className='text-purple-100 text-2xl'>Yadav</span>
                        <div className='w-4 h-4 bg-purple-100 rounded-full'></div>
                    </a>
                </div>
                <div className='hidden md:flex space-x-10'>
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} className="relative text-white/80 transition duration-300 hover:text-purple-100 group">
                            <span>{link.label}</span>
                            <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-100 transition-all duration-300 group-hover:w-full'></span>
                        </a>
                    ))}
                </div>
                {/* Mobile View */}
                <div className='md:hidden'>
                    {
                        showMenu ? <FaXmark onClick={() => setShowMenu(!showMenu)} className='text-2xl cursor-pointer' /> : <FaBars onClick={() => setShowMenu(!showMenu)} className='text-2xl cursor-pointer' />
                    }

                </div>
            </div>

            {/* Mobile Menus */}

            {
                showMenu && (
                    <div className='md:hidden mt-4 bg-dark-200 h-screen rounded-lg p-4 flex flex-col space-y-4 text-center justify-center'>
                        {navLinks.map((link) => (
                            <a key={link.href} onClick={() => setShowMenu(false)} href={link.href} className="relative text-white/80 transition duration-300 hover:text-purple-100 group">
                                <span>{link.label}</span>
                                <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-100 transition-all duration-300 group-hover:w-full'></span>
                            </a>
                        ))}
                    </div>
                )
            }
        </nav>
    )
}

export default Navbar