import React, { useState } from 'react'
import axios from 'axios'
import { motion as Motion } from 'framer-motion'
import { FaMapMarker, FaPhone, FaTwitter } from 'react-icons/fa'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

const API_URL = import.meta.env.VITE_API_URL || '/api'

const Contact = () => {

    // ✅ State
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const [isSubmitting, setIsSubmitting] = useState(false)

    // ✅ Handle Input Change
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    // ✅ Handle Submit
    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const res = await axios.post(`${API_URL}/contact`, formData)
            alert(res.data.message)
            setFormData({ name: "", email: "", message: "" })
        } catch {
            alert("Error sending message")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <Motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            id='contact'
            className='py-12 sm:py-16 md:py-20 bg-dark-100'
        >
            <div className='container mx-auto px-4 sm:px-6'>
                <h2 className='text-2xl sm:text-3xl md:text-5xl font-bold mb-4 text-center'>
                    Get in <span className='text-purple-100'>Touch</span>
                </h2>

                <p className='text-gray-400 text-center text-sm sm:text-base max-w-2xl mx-auto mb-10 sm:mb-16'>
                    Feel free to reach out for collaborations or just a friendly chat!
                </p>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto'>

                    {/* FORM SECTION */}
                    <div>
                        <form className='space-y-4 sm:space-y-6' onSubmit={handleSubmit}>

                            <div>
                                <label className='block text-gray-300 mb-1.5 sm:mb-2 text-sm sm:text-base'>Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className='w-full bg-dark-400 border border-dark-400 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 outline-none text-sm sm:text-base text-white focus:border-purple-100/60 transition-colors duration-300'
                                />
                            </div>

                            <div>
                                <label className='block text-gray-300 mb-1.5 sm:mb-2 text-sm sm:text-base'>Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className='w-full bg-dark-400 border border-dark-400 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 outline-none text-sm sm:text-base text-white focus:border-purple-100/60 transition-colors duration-300'
                                />
                            </div>

                            <div>
                                <label className='block text-gray-300 mb-1.5 sm:mb-2 text-sm sm:text-base'>Your Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    required
                                    className='w-full bg-dark-400 border border-dark-400 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 outline-none text-sm sm:text-base text-white resize-none focus:border-purple-100/60 transition-colors duration-300'
                                />
                            </div>

                            <button
                                type='submit'
                                disabled={isSubmitting}
                                className='w-full px-6 py-2.5 sm:py-3 bg-purple-100 rounded-lg font-semibold text-sm sm:text-base hover:bg-purple-700 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-white'
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>

                        </form>
                    </div>

                    {/* CONTACT INFO SECTION */}
                    <div className='space-y-6 sm:space-y-8'>

                        <div className='flex items-start'>
                            <div className='text-purple-100 text-xl sm:text-2xl mr-3 sm:mr-4 mt-0.5'>
                                <FaMapMarker />
                            </div>
                            <div>
                                <h3 className='text-lg sm:text-xl font-semibold mb-1 sm:mb-2'>Location</h3>
                                <p className='text-gray-400 text-sm sm:text-base'>Azamgarh, Uttar Pradesh</p>
                            </div>
                        </div>

                        <div className='flex items-start'>
                            <div className='text-purple-100 text-xl sm:text-2xl mr-3 sm:mr-4 mt-0.5'>
                                <FaEnvelope />
                            </div>
                            <div>
                                <h3 className='text-lg sm:text-xl font-semibold mb-1 sm:mb-2'>Email</h3>
                                <p className='text-gray-400 text-sm sm:text-base break-all'>amityaduvanshi203@gmail.com</p>
                            </div>
                        </div>

                        <div className='flex items-start'>
                            <div className='text-purple-100 text-xl sm:text-2xl mr-3 sm:mr-4 mt-0.5'>
                                <FaPhone />
                            </div>
                            <div>
                                <h3 className='text-lg sm:text-xl font-semibold mb-1 sm:mb-2'>Phone</h3>
                                <p className='text-gray-400 text-sm sm:text-base'>+91 8318241112</p>
                            </div>
                        </div>

                        <div>
                            <h3 className='text-base sm:text-lg font-semibold mb-3 sm:mb-4'>Follow Me</h3>
                            <div className='flex space-x-3 sm:space-x-4'>
                                <a href="https://github.com/Amityaduvanshi203a"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className='w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-dark-400 flex items-center justify-center text-purple-100 hover:bg-purple-100/20 hover:scale-110 transition-all duration-300'>
                                    <FaGithub className='text-lg sm:text-xl' />
                                </a>

                                <a href="https://www.linkedin.com/in/amit-yadav-ab16392a9"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className='w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-dark-400 flex items-center justify-center text-blue-100 hover:bg-blue-100/20 hover:scale-110 transition-all duration-300'>
                                    <FaLinkedin className='text-lg sm:text-xl' />
                                </a>

                                <a href="https://x.com/AmitYadav6013"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className='w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-dark-400 flex items-center justify-center text-blue-100 hover:bg-blue-100/20 hover:scale-110 transition-all duration-300'>
                                    <FaTwitter className='text-lg sm:text-xl' />
                                </a>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </Motion.div>
    )
}

export default Contact
