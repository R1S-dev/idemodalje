import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '../lib/utils'

export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className={cn(className)}
      initial={reduce ? { opacity: 1 } : { opacity: 0, y: 14, filter: 'blur(6px)' }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}
