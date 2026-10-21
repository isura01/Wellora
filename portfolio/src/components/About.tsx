import { Code, Server, Wrench, Palette } from 'lucide-react'
import { personalInfo, skills, type Skill } from '../data/portfolio'
import { cn } from '../lib/utils'

const skillCategories = [
  { key: 'frontend' as const, label: 'Frontend', icon: Code, color: 'text-blue-500' },
  { key: 'backend' as const, label: 'Backend', icon: Server, color: 'text-green-500' },
  { key: 'tools' as const, label: 'Tools & DevOps', icon: Wrench, color: 'text-orange-500' },
  { key: 'design' as const, label: 'Design', icon: Palette, color: 'text-purple-500' },
]

function SkillBar({ skill }: { skill: Skill }) {
  const Icon = skillCategories.find(c => c.key === skill.category)?.icon || Code
  const color = skillCategories.find(c => c.key === skill.category)?.color || 'text-blue-500'

  return (
    <div className="group">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Icon className={cn('h-4 w-4', color)} aria-hidden="true" />
          <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
        </div>
        <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}/5</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div
          className={cn(
            'h-full rounded-full transition-all duration-1000 ease-out',
            'bg-primary',
            color.replace('text-', 'bg-').replace('-500', '-500')
          )}
          style={{ width: '0%' }}
          data-level={skill.level * 20}
          role="progressbar"
          aria-valuenow={skill.level * 20}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${skill.name} proficiency`}
        />
      </div>
    </div>
  )
}

export function About() {
  const { name, bio, location } = personalInfo

  return (
    <section
      id="about"
      className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h2 id="about-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get to know me better — my background, skills, and what drives me as a developer.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Hello, I&apos;m {name}
            </h3>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">{bio.split('\n\n')[0]}</p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">{bio.split('\n\n')[1]}</p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{location}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Available for freelance</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">Skills & Technologies</h3>
            <div className="space-y-8" role="list" aria-label="Skills by category">
              {skillCategories.map((category) => {
                const categorySkills = skills.filter(s => s.category === category.key)
                if (categorySkills.length === 0) return null

                return (
                  <div key={category.key} className="animate-slide-up">
                    <h4 className="flex items-center gap-2 text-lg font-medium text-gray-900 dark:text-white mb-4">
                      <category.icon className={cn('h-5 w-5', category.color)} aria-hidden="true" />
                      {category.label}
                    </h4>
                    <div className="space-y-4" role="listitem">
                      {categorySkills.map((skill) => (
                        <SkillBar key={skill.name} skill={skill} />
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}