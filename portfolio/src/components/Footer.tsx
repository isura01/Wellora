import { GitBranch, Link2, MessageSquare, Mail, Heart } from 'lucide-react'
import { personalInfo } from '../data/portfolio'
import { cn } from '../lib/utils'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const { name, social } = personalInfo

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-1">
            <a href="#" className="text-xl font-semibold text-gray-900 dark:text-white hover:opacity-80 transition-opacity">
              {name}
            </a>
            <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Building accessible, performant, and beautiful web experiences.
            </p>
          </div>

          <nav aria-label="Quick links">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors text-sm">About Me</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors text-sm">Projects</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors text-sm">Contact</a>
              </li>
              <li>
                <a href={social.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors text-sm">GitHub</a>
              </li>
            </ul>
          </nav>

          <nav aria-label="Social links">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Connect</h3>
            <ul className="space-y-3">
              <li>
                <a href={social.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors text-sm">
                  <GitBranch className="h-4 w-4" aria-hidden="true" />
                  GitHub
                </a>
              </li>
              <li>
                <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors text-sm">
                  <Link2 className="h-4 w-4" aria-hidden="true" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={social.twitter} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors text-sm">
                  <MessageSquare className="h-4 w-4" aria-hidden="true" />
                  Twitter
                </a>
              </li>
              <li>
                <a href={social.email} className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors text-sm">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Email
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Newsletter</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              Occasional updates on new projects, articles, and learnings. No spam.
            </p>
            <form className="flex gap-2" action="#" method="POST">
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                type="email"
                id="newsletter-email"
                name="email"
                placeholder="Enter your email"
                className={cn(
                  'flex-1 px-4 py-2 rounded-lg border text-sm',
                  'bg-white dark:bg-gray-900',
                  'text-gray-900 dark:text-white',
                  'placeholder-gray-400 dark:placeholder-gray-600',
                  'focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent',
                  'border-gray-300 dark:border-gray-700'
                )}
              />
              <button
                type="submit"
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-medium',
                  'bg-primary text-white hover:bg-primary-hover transition-colors',
                  'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900'
                )}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              &copy; {currentYear} {name}. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Built with{' '}
                <span className="flex items-center gap-1">
                  <Heart className="h-3.5 w-3.5 text-red-500" aria-hidden="true" />
                  <span>React</span>
                </span>{' '}
                &{' '}
                <span className="flex items-center gap-1">
                  <span className="text-gray-900 dark:text-white font-mono text-xs">Vite</span>
                </span>{' '}
                &{' '}
                <span className="flex items-center gap-1">
                  <span className="text-cyan-500 font-mono text-xs">Tailwind</span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}