import React from 'react'
import { cn } from '../lib/utils'

export default function Badge({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs tracking-wide",
        "border-black/10 bg-white/70 text-ink/70",
        "dark:border-white/10 dark:bg-white/5 dark:text-fog/75",
        className
      )}
    >
      {children}
    </span>
  )
}
