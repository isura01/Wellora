export interface Project {
  id: string
  title: string
  description: string
  shortDescription: string
  technologies: string[]
  image?: string
  githubUrl?: string
  liveUrl?: string
  featured: boolean
}

export interface Skill {
  name: string
  category: 'frontend' | 'backend' | 'tools' | 'design'
  level: number // 1-5
}

export interface Experience {
  id: string
  role: string
  company: string
  period: string
  description: string[]
  technologies: string[]
}

export const personalInfo = {
  name: 'Alex Chen',
  title: 'Full Stack Developer',
  tagline: 'Building accessible, performant, and beautiful web experiences.',
  email: 'alex.chen@example.com',
  location: 'San Francisco, CA',
  bio: `I'm a passionate full-stack developer with 5+ years of experience crafting web applications that make a difference. My journey started with a curiosity for how things work on the web, and it's evolved into a career focused on building intuitive, accessible, and scalable digital products.

When I'm not coding, you'll find me contributing to open-source projects, writing technical articles, or exploring new technologies. I believe in clean code, thoughtful design, and the power of collaboration to create amazing things.`,
  social: {
    github: 'https://github.com/alexchen',
    linkedin: 'https://linkedin.com/in/alexchen',
    twitter: 'https://twitter.com/alexchen',
    email: 'mailto:alex.chen@example.com',
  },
}

export const skills: Skill[] = [
  // Frontend
  { name: 'React', category: 'frontend', level: 5 },
  { name: 'TypeScript', category: 'frontend', level: 5 },
  { name: 'Next.js', category: 'frontend', level: 4 },
  { name: 'Vue.js', category: 'frontend', level: 3 },
  { name: 'Tailwind CSS', category: 'frontend', level: 5 },
  { name: 'HTML/CSS', category: 'frontend', level: 5 },
  // Backend
  { name: 'Node.js', category: 'backend', level: 4 },
  { name: 'Express', category: 'backend', level: 4 },
  { name: 'PostgreSQL', category: 'backend', level: 4 },
  { name: 'MongoDB', category: 'backend', level: 3 },
  { name: 'GraphQL', category: 'backend', level: 3 },
  { name: 'REST APIs', category: 'backend', level: 5 },
  // Tools
  { name: 'Git', category: 'tools', level: 5 },
  { name: 'Docker', category: 'tools', level: 3 },
  { name: 'AWS', category: 'tools', level: 3 },
  { name: 'CI/CD', category: 'tools', level: 4 },
  { name: 'Testing (Jest/Vitest)', category: 'tools', level: 4 },
  { name: 'Figma', category: 'design', level: 3 },
]

export const projects: Project[] = [
  {
    id: '1',
    title: 'TaskFlow',
    description: `A comprehensive project management application built with React, Node.js, and PostgreSQL. Features real-time collaboration, drag-and-drop task boards, team workspaces, and detailed analytics dashboards. Implemented WebSocket connections for live updates and used Redis for caching.`,
    shortDescription: 'Real-time project management with collaboration features',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'WebSocket', 'Redis', 'Tailwind CSS'],
    githubUrl: 'https://github.com/alexchen/taskflow',
    liveUrl: 'https://taskflow.example.com',
    featured: true,
  },
  {
    id: '2',
    title: 'ShopEase',
    description: `A modern e-commerce platform with a headless CMS architecture. Built with Next.js 14, featuring server-side rendering for SEO optimization, Stripe integration for payments, and a custom admin dashboard for inventory management.`,
    shortDescription: 'Headless e-commerce with Next.js and Stripe',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
    githubUrl: 'https://github.com/alexchen/shopease',
    liveUrl: 'https://shopease.example.com',
    featured: true,
  },
  {
    id: '3',
    title: 'DevMetrics',
    description: `An open-source developer productivity dashboard that integrates with GitHub, GitLab, and Jira APIs to provide insights into team velocity, code review metrics, and deployment frequency. Built as a learning project for GraphQL subscriptions.`,
    shortDescription: 'Developer productivity analytics dashboard',
    technologies: ['React', 'GraphQL', 'Apollo', 'Node.js', 'TypeScript', 'D3.js'],
    githubUrl: 'https://github.com/alexchen/devmetrics',
    liveUrl: 'https://devmetrics.example.com',
    featured: true,
  },
  {
    id: '4',
    title: 'WeatherNow',
    description: `A beautiful weather application with location-based forecasts, interactive maps, and severe weather alerts. Uses the OpenWeatherMap API and features offline support with service workers.`,
    shortDescription: 'Weather app with offline support and maps',
    technologies: ['Vue.js', 'TypeScript', 'Vite', 'OpenWeatherMap API', 'PWA'],
    githubUrl: 'https://github.com/alexchen/weathernow',
    liveUrl: 'https://weathernow.example.com',
    featured: false,
  },
  {
    id: '5',
    title: 'CodeSnippet',
    description: `A VS Code extension for managing and sharing code snippets across teams. Features syntax highlighting, tag-based organization, and team synchronization via a backend API.`,
    shortDescription: 'VS Code extension for team code snippets',
    technologies: ['TypeScript', 'VS Code API', 'Node.js', 'Electron', 'SQLite'],
    githubUrl: 'https://github.com/alexchen/codesnippet',
    featured: false,
  },
  {
    id: '6',
    title: 'MarkdownBlog',
    description: `A static site generator for technical blogs built with Astro. Supports MDX, syntax highlighting, automatic RSS feed generation, and optimized image handling. Deployed on Vercel with edge functions.`,
    shortDescription: 'Fast static blog generator with Astro',
    technologies: ['Astro', 'TypeScript', 'MDX', 'Tailwind CSS', 'Vercel'],
    githubUrl: 'https://github.com/alexchen/markdownblog',
    liveUrl: 'https://markdownblog.example.com',
    featured: false,
  },
]

export const experiences: Experience[] = [
  {
    id: '1',
    role: 'Senior Full Stack Developer',
    company: 'TechCorp Inc.',
    period: '2022 – Present',
    description: [
      'Lead development of customer-facing web applications serving 100k+ users',
      'Architected migration from legacy monolith to microservices using Node.js and React',
      'Mentored 5 junior developers and established code review practices',
      'Reduced page load times by 40% through optimization and caching strategies',
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'Kubernetes'],
  },
  {
    id: '2',
    role: 'Full Stack Developer',
    company: 'StartupXYZ',
    period: '2020 – 2022',
    description: [
      'Built and maintained the core product: a B2B SaaS platform for workflow automation',
      'Implemented real-time features using WebSockets and Server-Sent Events',
      'Designed RESTful APIs and database schemas for multi-tenant architecture',
      'Collaborated with design team to implement pixel-perfect responsive UIs',
    ],
    technologies: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
  },
  {
    id: '3',
    role: 'Frontend Developer',
    company: 'Digital Agency',
    period: '2019 – 2020',
    description: [
      'Developed responsive websites and web applications for diverse clients',
      'Implemented complex animations and interactions using GSAP and CSS',
      'Ensured WCAG 2.1 AA accessibility compliance across all projects',
      'Optimized Core Web Vitals scores for improved SEO performance',
    ],
    technologies: ['Vue.js', 'JavaScript', 'SASS', 'GSAP', 'Webpack', 'Netlify'],
  },
]