'use client'

import { useState } from 'react'
import { Mail, MessageSquare, Send, Check, Loader2 } from 'lucide-react'
import { personalInfo } from '../data/portfolio'
import { cn } from '../lib/utils'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // In a real app, you'd send this to your backend or form service
    console.log('Form submitted:', formData)
    
    setStatus('success')
    setFormData({ name: '', email: '', subject: '', message: '' })
    
    setTimeout(() => setStatus('idle'), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section
      id="contact"
      className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h2 id="contact-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? I&apos;d love to hear from you.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Let&apos;s start a conversation
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              Whether you have a question about my work, want to collaborate on a project, or just want to chat about technology, feel free to reach out. I typically respond within 24 hours.
            </p>

            <div className="space-y-6">
              <a
                href={personalInfo.social.email}
                className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-primary/50 dark:hover:border-primary/50 transition-colors group"
              >
                <div className={cn('p-3 rounded-lg bg-primary/10 text-primary', 'group-hover:bg-primary/20 transition-colors')}>
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                  <p className="font-medium text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                    {personalInfo.email}
                  </p>
                </div>
              </a>

              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-primary/50 dark:hover:border-primary/50 transition-colors group"
              >
                <div className={cn('p-3 rounded-lg bg-primary/10 text-primary', 'group-hover:bg-primary/20 transition-colors')}>
                  <MessageSquare className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">LinkedIn</p>
                  <p className="font-medium text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                    Connect with me
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                  <p className="font-medium text-gray-900 dark:text-white">{personalInfo.location}</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                  Name <span className="text-primary" aria-hidden="true">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  className={cn(
                    'w-full px-4 py-3 rounded-lg border',
                    'bg-white dark:bg-gray-900',
                    'text-gray-900 dark:text-white',
                    'placeholder-gray-400 dark:placeholder-gray-600',
                    'focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent',
                    'disabled:opacity-50 disabled:cursor-not-allowed',
                    'border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600'
                  )}
                  placeholder="John Doe"
                  aria-required="true"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                  Email <span className="text-primary" aria-hidden="true">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  className={cn(
                    'w-full px-4 py-3 rounded-lg border',
                    'bg-white dark:bg-gray-900',
                    'text-gray-900 dark:text-white',
                    'placeholder-gray-400 dark:placeholder-gray-600',
                    'focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent',
                    'disabled:opacity-50 disabled:cursor-not-allowed',
                    'border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600'
                  )}
                  placeholder="john@example.com"
                  aria-required="true"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                Subject <span className="text-primary" aria-hidden="true">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                disabled={status === 'submitting'}
                className={cn(
                  'w-full px-4 py-3 rounded-lg border',
                  'bg-white dark:bg-gray-900',
                  'text-gray-900 dark:text-white',
                  'placeholder-gray-400 dark:placeholder-gray-600',
                  'focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent',
                  'disabled:opacity-50 disabled:cursor-not-allowed',
                  'border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600'
                )}
                placeholder="Project inquiry"
                aria-required="true"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                Message <span className="text-primary" aria-hidden="true">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                disabled={status === 'submitting'}
                className={cn(
                  'w-full px-4 py-3 rounded-lg border resize-y min-h-[120px]',
                  'bg-white dark:bg-gray-900',
                  'text-gray-900 dark:text-white',
                  'placeholder-gray-400 dark:placeholder-gray-600',
                  'focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent',
                  'disabled:opacity-50 disabled:cursor-not-allowed',
                  'border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600'
                )}
                placeholder="Tell me about your project..."
                aria-required="true"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className={cn(
                'w-full sm:w-auto px-8 py-3 rounded-lg font-medium',
                'bg-primary text-white hover:bg-primary-hover transition-colors',
                'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900',
                'disabled:opacity-50 disabled:cursor-not-allowed',
                'flex items-center justify-center gap-2'
              )}
            >
              {status === 'submitting' && <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />}
              {status === 'success' && <Check className="h-5 w-5" aria-hidden="true" />}
              {status !== 'submitting' && status !== 'success' && <Send className="h-5 w-5" aria-hidden="true" />}
              <span>
                {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Sent!' : 'Send Message'}
              </span>
            </button>

            {status === 'success' && (
              <p className="text-green-600 dark:text-green-400 text-sm text-center animate-fade-in" role="alert">
                Thanks for reaching out! I&apos;ll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="text-red-600 dark:text-red-400 text-sm text-center animate-fade-in" role="alert">
                Something went wrong. Please try again or email me directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}