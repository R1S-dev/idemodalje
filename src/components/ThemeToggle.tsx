import React from 'react'
import { Moon, Sun } from 'lucide-react'

type Theme = 'dark' | 'light'

function readTheme(): Theme {
  const saved = localStorage.getItem('idemodalje_theme')
  if (saved === 'dark' || saved === 'light') return saved
  const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)')?.matches
  return prefersDark ? 'dark' : 'light'
}

function setTheme(next: Theme) {
  document.documentElement.classList.toggle('dark', next === 'dark')
  localStorage.setItem('idemodalje_theme', next)
}

export default function ThemeToggle() {
  const [theme, setThemeState] = React.useState<Theme>(() => {
    const isDark = document.documentElement.classList.contains('dark')
    return isDark ? 'dark' : 'light'
  })

  React.useEffect(() => {
    const t = readTheme()
    setThemeState(t)
    setTheme(t)
  }, [])

  function toggle() {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'

    // enable smooth transitions briefly
    document.documentElement.classList.add('theme-anim')
    window.setTimeout(() => document.documentElement.classList.remove('theme-anim'), 320)

    setThemeState(next)
    setTheme(next)
  }

  return (
    <button
      onClick={toggle}
      className="inline-flex items-center justify-center rounded-2xl border border-black/10 bg-white/70 px-3 py-2 text-sm transition hover:bg-black/5 active:scale-[0.98]
                 dark:border-white/12 dark:bg-white/5 dark:hover:bg-white/7"
      aria-label="Promeni temu"
      type="button"
    >
      {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  )
}
