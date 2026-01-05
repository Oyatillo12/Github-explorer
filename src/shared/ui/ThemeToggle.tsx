import { useTheme } from '../hooks/useTheme'
import { Button } from './button'
import { Moon, Sun } from 'lucide-react'

export function ThemeToggle() {
  const { toggleTheme, theme } = useTheme()

  const isDark = theme === 'dark'

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative w-16 h-8 rounded-full bg-muted dark:bg-muted/60 p-0 transition-colors"
      aria-label="Toggle Theme"
    >
      <span
        className={`
          absolute
          top-0.5 left-0.5
          h-7 w-7
          rounded-full
          bg-background
          shadow-md
          transition-transform
          duration-300
          ${isDark ? 'translate-x-8' : ''}
        `}
      />
      <Sun
        className={`
          absolute left-2
          transition-opacity duration-300
          ${isDark ? 'opacity-40' : 'opacity-100 text-yellow-500'}
        `}
      />

      {/* Moon icon */}
      <Moon
        className={`
          absolute right-2
          transition-opacity duration-300
          ${isDark ? 'opacity-100 text-blue-400' : 'opacity-40'}
        `}
      />
    </Button>
  )
}
