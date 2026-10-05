import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { motion as Motion } from 'framer-motion'

const API_URL = import.meta.env.VITE_API_URL || '/api'

const projectTypes = [
  'Software Development',
  'Full-Stack Web Development',
  'AI / ML',
  'IoT / Hardware',
  'Embedded Systems',
  'Website Development',
  'Website Maintenance',
  'Custom Project / Custom Solution',
  'Other',
]

const budgets = [
  'Not decided yet',
  'Under ₹5,000',
  '₹5,000 – ₹15,000',
  '₹15,000 – ₹30,000',
  '₹30,000 – ₹50,000',
  '₹50,000+',
]

const timelines = [
  'Urgent',
  'Within 1 week',
  '1–2 weeks',
  '2–4 weeks',
  '1–2 months',
  'Flexible',
]

const fieldClassName =
  'w-full rounded-xl border border-white/10 bg-dark-400/80 px-4 py-3 text-white outline-none transition-colors placeholder:text-gray-500 focus:border-purple-100/70 focus:ring-2 focus:ring-purple-100/20'

const ProjectRequest = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState({ type: '', message: '' })

  useEffect(() => {
    document.getElementById('project-request')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (isSubmitting) return

    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    const form = event.currentTarget
    const formData = new FormData(form)
    const payload = Object.fromEntries(formData.entries())

    try {
      await axios.post(`${API_URL}/project-request`, payload)
      form.reset()
      setStatus({
        type: 'success',
        message: "Project request sent successfully! I'll get back to you soon.",
      })
    } catch {
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please try again or contact me directly by email.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Motion.section
      id='project-request'
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.1 }}
      className='relative scroll-mt-20 overflow-hidden bg-dark-200 py-16 sm:py-20'
    >
      <div className='pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-purple-100/10 blur-3xl' />
      <div className='pointer-events-none absolute -right-24 bottom-8 h-72 w-72 rounded-full bg-blue-100/10 blur-3xl' />

      <div className='container relative z-10 mx-auto px-4 sm:px-6'>
        <div className='mx-auto mb-10 max-w-3xl text-center sm:mb-12'>
          <span className='mb-4 inline-flex items-center rounded-full border border-purple-100/30 bg-purple-100/10 px-4 py-2 text-sm font-medium text-purple-100'>
            Let&apos;s build something meaningful
          </span>
          <h2 className='mb-4 text-3xl font-bold sm:text-4xl md:text-5xl'>
            Start a <span className='text-purple-100'>Project</span>
          </h2>
          <p className='leading-relaxed text-gray-400'>
            Have an idea, business requirement, or a custom technical problem?
            <br className='hidden sm:block' />
            Tell me what you need, whether it&apos;s a website, software application, AI solution, IoT device, embedded system, or a completely custom project. I&apos;ll review your requirements and get back to you with a suitable approach.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className='mx-auto max-w-4xl rounded-2xl border border-white/10 bg-dark-100/90 p-5 shadow-2xl shadow-purple-100/5 backdrop-blur sm:p-8 md:p-10'
        >
          <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6'>
            <div>
              <label htmlFor='project-name' className='mb-2 block text-sm font-medium text-gray-200'>
                Name <span className='text-purple-100'>*</span>
              </label>
              <input
                id='project-name'
                name='name'
                type='text'
                autoComplete='name'
                maxLength={120}
                required
                className={fieldClassName}
                placeholder='Your name'
              />
            </div>

            <div>
              <label htmlFor='project-email' className='mb-2 block text-sm font-medium text-gray-200'>
                Email <span className='text-purple-100'>*</span>
              </label>
              <input
                id='project-email'
                name='email'
                type='email'
                autoComplete='email'
                maxLength={254}
                required
                className={fieldClassName}
                placeholder='you@example.com'
              />
            </div>

            <div>
              <label htmlFor='project-type' className='mb-2 block text-sm font-medium text-gray-200'>
                Project Type <span className='text-purple-100'>*</span>
              </label>
              <select id='project-type' name='projectType' required defaultValue='' className={fieldClassName}>
                <option value='' disabled className='bg-dark-200'>Select a project type</option>
                {projectTypes.map((type) => (
                  <option key={type} value={type} className='bg-dark-200'>{type}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor='project-company' className='mb-2 block text-sm font-medium text-gray-200'>
                Company / Organization <span className='text-gray-500'>(optional)</span>
              </label>
              <input
                id='project-company'
                name='company'
                type='text'
                autoComplete='organization'
                maxLength={160}
                className={fieldClassName}
                placeholder='Company or organization'
              />
            </div>

            <div className='sm:col-span-2'>
              <label htmlFor='project-details' className='mb-2 block text-sm font-medium text-gray-200'>
                Project Details / Requirements <span className='text-purple-100'>*</span>
              </label>
              <textarea
                id='project-details'
                name='details'
                rows={6}
                maxLength={5000}
                required
                className={`${fieldClassName} resize-y`}
                placeholder='Describe what you would like to build, the problem to solve, and any important requirements...'
              />
            </div>

            <div>
              <label htmlFor='project-budget' className='mb-2 block text-sm font-medium text-gray-200'>
                Budget <span className='text-gray-500'>(optional)</span>
              </label>
              <select id='project-budget' name='budget' defaultValue='' className={fieldClassName}>
                <option value='' className='bg-dark-200'>Choose a budget</option>
                {budgets.map((budget) => (
                  <option key={budget} value={budget} className='bg-dark-200'>{budget}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor='project-timeline' className='mb-2 block text-sm font-medium text-gray-200'>
                Timeline <span className='text-gray-500'>(optional)</span>
              </label>
              <select id='project-timeline' name='timeline' defaultValue='' className={fieldClassName}>
                <option value='' className='bg-dark-200'>Choose a timeline</option>
                {timelines.map((timeline) => (
                  <option key={timeline} value={timeline} className='bg-dark-200'>{timeline}</option>
                ))}
              </select>
            </div>

            <div className='sm:col-span-2'>
              <label htmlFor='project-additional' className='mb-2 block text-sm font-medium text-gray-200'>
                Additional Information <span className='text-gray-500'>(optional)</span>
              </label>
              <textarea
                id='project-additional'
                name='additionalInfo'
                rows={4}
                maxLength={3000}
                className={`${fieldClassName} resize-y`}
                placeholder='Anything else that would help me understand your project?'
              />
            </div>
          </div>

          <div className='absolute -left-[9999px]' aria-hidden='true'>
            <label htmlFor='project-website'>Leave this field empty</label>
            <input id='project-website' name='website' type='text' tabIndex={-1} autoComplete='off' />
          </div>

          {status.message && (
            <p
              role={status.type === 'error' ? 'alert' : 'status'}
              aria-live='polite'
              className={`mt-6 rounded-lg border px-4 py-3 text-sm ${
                status.type === 'success'
                  ? 'border-green-400/30 bg-green-400/10 text-green-300'
                  : 'border-red-400/30 bg-red-400/10 text-red-300'
              }`}
            >
              {status.message}
            </p>
          )}

          <button
            type='submit'
            disabled={isSubmitting}
            className='mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-purple-100 px-6 py-3.5 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-purple-700 hover:shadow-[0_0_24px_rgba(139,92,246,0.35)] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto'
          >
            {isSubmitting ? 'Sending Request...' : 'Send Project Request →'}
          </button>
        </form>
      </div>
    </Motion.section>
  )
}

export default ProjectRequest
