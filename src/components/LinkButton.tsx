import React from 'react'
import { cn } from '../lib/utils'

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: 'primary' | 'ghost'
}

export default function LinkButton({ variant='primary', className, ...props }: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-medium transition will-change-transform active:scale-[0.98]"

  const styles =
    variant === 'primary'
      ? "shadow-soft hover:-translate-y-[1px] shine text-[var(--accent-ink)] bg-[var(--accent)]"
      : "border border-black/10 bg-black/5 text-ink/80 hover:bg-black/7 hover:-translate-y-[1px] dark:border-white/12 dark:bg-white/5 dark:text-fog/90 dark:hover:bg-white/7"

  return <a className={cn(base, styles, className)} {...props} />
}
