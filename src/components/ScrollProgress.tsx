import React from 'react'
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll()

  const spring = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 30,
    mass: 0.22,
  })

  return (
    <div className="scrollbar-wrap" aria-hidden="true">
      <motion.div
        className="scrollbar-bar"
        style={{ scaleX: reduce ? scrollYProgress : spring }}
      />
    </div>
  )
}
