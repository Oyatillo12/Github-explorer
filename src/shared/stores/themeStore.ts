type Theme = 'light' | 'dark'

function getInitialTheme(): Theme {
  const saved = localStorage.getItem('theme') as Theme | null

  if (saved) return saved

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

let theme: Theme = getInitialTheme()
const listeners = new Set<VoidFunction>()

function emitChange() {
  listeners.forEach(listener => listener())
}

function applyTheme(t: Theme) {
  document.documentElement.classList.toggle('dark', t === 'dark')
}

applyTheme(theme)

export const themeStore = {
  getSnapshot: () => theme,

  subscribe: (listener: VoidFunction) => {
    listeners.add(listener)

    return () => listeners.delete(listener)
  },

  toggleTheme: () => {
    theme = theme === 'light' ? 'dark' : 'light'
    localStorage.setItem('theme', theme)

    applyTheme(theme)
    emitChange()
  },
}
