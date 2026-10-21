import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'
import { cn } from '../lib/utils'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        'relative p-2 rounded-lg transition-colors',
        'hover:bg-gray-100 dark:hover:bg-gray-800',
        'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900'
      )}
      aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      <span className="sr-only">{theme === 'light' ? 'Dark mode' : 'Light mode'}</span>
      <Sun className={cn('h-5 w-5 transition-all duration-300', theme === 'dark' ? 'rotate-90 scale-0' : 'rotate-0 scale-100')} />
      <Moon className={cn('absolute top-2 left-2 h-5 w-5 transition-all duration-300', theme === 'light' ? '-rotate-90 scale-0' : 'rotate-0 scale-100')} />
    </button>
  )
}