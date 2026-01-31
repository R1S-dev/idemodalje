import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function useFirstLoad(): boolean {
  const key = "idemodalje_loaded"
  const [first, setFirst] = useState(false)
  useEffect(() => {
    const already = sessionStorage.getItem(key)
    if (!already) {
      setFirst(true)
      sessionStorage.setItem(key, "1")
    }
  }, [])
  return first
}

export default function Loader() {
  const show = useFirstLoad()
  const [open, setOpen] = useState(show)

  useEffect(() => {
    if (!show) return
    const t = window.setTimeout(() => setOpen(false), 1100)
    return () => window.clearTimeout(t)
  }, [show])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] bg-fog text-ink dark:bg-ink dark:text-fog"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: .35 } }}
        >
          <div className="absolute inset-0 gridfade" />
          <div className="absolute inset-0 noise" />
          <div className="flex h-full items-center justify-center">
            <motion.div
              className="flex flex-col items-center gap-5"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0, transition: { duration: .45 } }}
            >
              <motion.div
                className="relative h-14 w-14 rounded-3xl border border-black/10 bg-black/5 shadow-soft
                           dark:border-white/10 dark:bg-white/5 dark:shadow-glow"
                animate={{ rotate: [0, 10, -8, 0] }}
                transition={{ duration: 1.05, ease: "easeInOut" }}
              >
                <motion.div
                  className="absolute inset-0 rounded-3xl"
                  style={{ background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,.18), transparent 55%)" }}
                  animate={{ opacity: [0.6, 1, 0.7] }}
                  transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ember"
                  animate={{ scale: [1, 1.6, 1] }}
                  transition={{ duration: .85, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>

              <div className="text-center">
                <div className="text-xs tracking-[0.35em] opacity-70">IDEMO DALJE</div>
                <div className="mt-1 text-[11px] opacity-45">creative • performance • ai</div>
              </div>

              <div className="h-1 w-44 overflow-hidden rounded-full bg-black/10 dark:bg-white/6">
                <motion.div
                  className="h-full w-1/3 bg-black/40 dark:bg-white/70"
                  initial={{ x: "-120%" }}
                  animate={{ x: "220%" }}
                  transition={{ duration: 0.85, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
