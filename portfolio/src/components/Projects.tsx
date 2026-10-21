'use client'

import { useState } from 'react'
import { GitBranch, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react'
import { projects, type Project, personalInfo } from '../data/portfolio'
import { cn } from '../lib/utils'

const techColors: Record<string, string> = {
  React: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  TypeScript: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  'Next.js': 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
  'Node.js': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  PostgreSQL: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  MongoDB: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  Tailwind: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400',
  GraphQL: 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400',
  Vue: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  Docker: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  AWS: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
  default: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
}

function TechTag({ tech }: { tech: string }) {
  return (
    <span
      className={cn(
        'px-2.5 py-1 text-xs font-medium rounded-full',
        techColors[tech] || techColors.default
      )}
    >
      {tech}
    </span>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <article className="group relative bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-primary/20 dark:hover:border-primary/20 animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 line-clamp-2">{project.shortDescription}</p>
          </div>
          {project.featured && (
            <span className="flex-shrink-0 px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 rounded-full">
              Featured
            </span>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mb-4" role="list" aria-label="Technologies used">
          {project.technologies.slice(0, 6).map((tech) => (
            <TechTag key={tech} tech={tech} />
          ))}
          {project.technologies.length > 6 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="px-2.5 py-1 text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
              aria-expanded={expanded}
              aria-label={expanded ? 'Show fewer technologies' : `Show ${project.technologies.length - 6} more technologies`}
            >
              +{project.technologies.length - 6} {expanded ? <ChevronUp className="h-3 w-3 inline" /> : <ChevronDown className="h-3 w-3 inline" />}
            </button>
          )}
        </div>

        {expanded && (
          <div className="flex flex-wrap gap-2 mb-4 animate-slide-down" role="list" aria-label="Additional technologies">
            {project.technologies.slice(6).map((tech) => (
              <TechTag key={tech} tech={tech} />
            ))}
          </div>
        )}

        <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-3">{project.description}</p>

        <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100 dark:border-gray-800">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg',
                'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white',
                'hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors',
                'focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:focus:ring-offset-gray-900'
              )}
              aria-label={`View ${project.title} on GitHub`}
            >
              <GitBranch className="h-4 w-4" aria-hidden="true" />
              Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg',
                'bg-primary text-white hover:bg-primary-hover transition-colors',
                'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900'
              )}
              aria-label={`View ${project.title} live demo`}
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export function Projects() {
  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section
      id="projects"
      className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h2 id="projects-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Selected Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A collection of projects I&apos;ve worked on, showcasing different technologies and problem-solving approaches.
          </p>
        </header>

        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">Featured</span>
              Highlighted Work
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        )}

        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">More Projects</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium',
              'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white',
              'hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors',
              'focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:focus:ring-offset-gray-900'
            )}
          >
            <GitBranch className="h-5 w-5" aria-hidden="true" />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}