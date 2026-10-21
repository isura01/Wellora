import { ArrowRight, GitBranch, Link2, Mail, MessageSquare } from 'lucide-react'
import { personalInfo } from '../data/portfolio'
import { cn } from '../lib/utils'

export function Hero() {
  const { name, title, tagline, social } = personalInfo

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" aria-hidden="true" />
      
      <div className="relative max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Open to opportunities
            </div>

            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 animate-slide-up"
              style={{ animationDelay: '100ms' }}
            >
              Hi, I&apos;m <span className="text-primary">{name}</span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-4 animate-slide-up" style={{ animationDelay: '200ms' }}>
              {title}
            </p>

            <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto lg:mx-0 mb-10 animate-slide-up" style={{ animationDelay: '300ms' }}>
              {tagline}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-slide-up" style={{ animationDelay: '400ms' }}>
              <a
                href="#projects"
                className={cn(
                  'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium text-sm',
                  'bg-primary text-white hover:bg-primary-hover transition-colors',
                  'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900'
                )}
              >
                View Projects
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#contact"
                className={cn(
                  'inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium text-sm',
                  'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white',
                  'hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors',
                  'focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:focus:ring-offset-gray-900'
                )}
              >
                Get In Touch
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-6 mt-10 animate-fade-in" style={{ animationDelay: '500ms' }}>
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'p-2 rounded-lg transition-colors',
                  'text-gray-400 hover:text-primary dark:hover:text-primary',
                  'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900'
                )}
                aria-label="GitHub"
              >
                <GitBranch className="h-5 w-5" />
              </a>
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'p-2 rounded-lg transition-colors',
                  'text-gray-400 hover:text-primary dark:hover:text-primary',
                  'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900'
                )}
                aria-label="LinkedIn"
              >
                <Link2 className="h-5 w-5" />
              </a>
              <a
                href={social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'p-2 rounded-lg transition-colors',
                  'text-gray-400 hover:text-primary dark:hover:text-primary',
                  'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900'
                )}
                aria-label="Twitter"
              >
                <MessageSquare className="h-5 w-5" />
              </a>
              <a
                href={social.email}
                className={cn(
                  'p-2 rounded-lg transition-colors',
                  'text-gray-400 hover:text-primary dark:hover:text-primary',
                  'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900'
                )}
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="relative animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" aria-hidden="true" />
              <div className="relative bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-2xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="grid grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">5+</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Years Experience</div>
                    </div>
                    <div className="border-l border-gray-200 dark:border-gray-700 pl-6">
                      <div className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">50+</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Projects Completed</div>
                    </div>
                    <div>
                      <div className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">20+</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Technologies</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" aria-hidden="true" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/20 rounded-full blur-3xl" aria-hidden="true" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}