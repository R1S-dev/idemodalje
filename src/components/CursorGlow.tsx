import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

function isCoarsePointer() {
  if (typeof window === 'undefined') return true
  return window.matchMedia?.('(pointer: coarse)')?.matches ?? true
}

export default function CursorGlow() {
  const reduce = useReducedMotion()
  const [enabled, setEnabled] = React.useState(false)
  const [pos, setPos] = React.useState({ x: -9999, y: -9999 })

  React.useEffect(() => {
    if (isCoarsePointer()) {
      setEnabled(false)
      return
    }
    setEnabled(true)

    let raf = 0
    let latest = { x: -9999, y: -9999 }

    const onMove = (e: PointerEvent) => {
      latest = { x: e.clientX, y: e.clientY }
      if (raf) return
      raf = window.requestAnimationFrame(() => {
        raf = 0
        setPos(latest)
      })
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      if (raf) window.cancelAnimationFrame(raf)
    }
  }, [])

  if (!enabled) return null

  const anim = reduce
    ? { x: '-50%', y: '-50%', opacity: 1 }
    : { x: '-50%', y: '-50%', opacity: 1 }

  const trans = reduce
    ? { duration: 0 }
    : { type: 'spring', stiffness: 320, damping: 28, mass: 0.35 }

  return (
    <>
      {/* tight “energy” halo */}
      <motion.div
        className="cursor-halo"
        aria-hidden="true"
        style={{ left: pos.x, top: pos.y }}
        animate={anim}
        transition={trans}
      />
      {/* small core dot */}
      <motion.div
        className="cursor-core"
        aria-hidden="true"
        style={{ left: pos.x, top: pos.y }}
        animate={anim}
        transition={trans}
      />
    </>
  )
}
