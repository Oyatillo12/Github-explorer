import { ThemeToggle } from '@/shared/ui/ThemeToggle'
import { Link } from 'react-router'

export const Header = () => (
  <header className="w-full border-b border-border p-(--space-md) flex justify-between items-center">
    <Link to="/" className="text-primary font-bold text-xl">
      GitHub Explorer
    </Link>

    <ThemeToggle />
  </header>
)
