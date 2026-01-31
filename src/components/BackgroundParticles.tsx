import React from 'react'

type P = {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  size: number
  a: number
}

function isCoarsePointer() {
  if (typeof window === 'undefined') return true
  return window.matchMedia?.('(pointer: coarse)')?.matches ?? true
}

function hexToRgb(hex: string) {
  const h = hex.replace('#', '').trim()
  const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h
  const n = parseInt(full, 16)
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 }
}

export default function BackgroundParticles() {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null)
  const particlesRef = React.useRef<P[]>([])
  const pointerRef = React.useRef({ x: -9999, y: -9999, active: false })

  React.useEffect(() => {
    if (isCoarsePointer()) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    let w = 1
    let h = 1
    let dpr = 1
    let raf = 0

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = Math.max(1, window.innerWidth)
      h = Math.max(1, window.innerHeight)
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const getAccent = () => {
      const v = getComputedStyle(document.documentElement).getPropertyValue('--accent') || '#2563EB'
      return v.trim()
    }

    let accent = getAccent()
    let rgb = hexToRgb(accent)

    const mo = new MutationObserver(() => {
      accent = getAccent()
      rgb = hexToRgb(accent)
    })
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })

    resize()
    window.addEventListener('resize', resize, { passive: true })

    const addParticles = (x: number, y: number) => {
      const arr = particlesRef.current
      // keep it subtle
      const count = 2
      for (let i = 0; i < count; i++) {
        const a = Math.random() * Math.PI * 2
        const sp = 0.12 + Math.random() * 0.25
        arr.push({
          x,
          y,
          vx: Math.cos(a) * sp,
          vy: Math.sin(a) * sp,
          life: 1,
          size: 1.4 + Math.random() * 1.9,
          a: 0.22 + Math.random() * 0.18,
        })
      }
      // cap
      if (arr.length > 180) arr.splice(0, arr.length - 180)
    }

    const onMove = (e: PointerEvent) => {
      pointerRef.current.x = e.clientX
      pointerRef.current.y = e.clientY
      pointerRef.current.active = true
      addParticles(e.clientX, e.clientY)
    }

    const onLeave = () => {
      pointerRef.current.active = false
      pointerRef.current.x = -9999
      pointerRef.current.y = -9999
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('pointerleave', onLeave, { passive: true })

    const tick = () => {
      raf = window.requestAnimationFrame(tick)

      ctx.clearRect(0, 0, w, h)

      const arr = particlesRef.current

      // faint “cursor aura” behind everything (not on cards/buttons because this canvas is behind content)
      if (pointerRef.current.active) {
        const x = pointerRef.current.x
        const y = pointerRef.current.y
        const g = ctx.createRadialGradient(x, y, 0, x, y, 120)
        g.addColorStop(0, `rgba(${rgb.r},${rgb.g},${rgb.b},0.12)`)
        g.addColorStop(1, `rgba(${rgb.r},${rgb.g},${rgb.b},0)`)
        ctx.fillStyle = g
        ctx.fillRect(x - 120, y - 120, 240, 240)
      }

      for (let i = arr.length - 1; i >= 0; i--) {
        const p = arr[i]
        p.life -= 0.014
        if (p.life <= 0) {
          arr.splice(i, 1)
          continue
        }
        p.x += p.vx
        p.y += p.vy
        p.vx *= 0.985
        p.vy *= 0.985

        const alpha = p.a * p.life
        ctx.beginPath()
        ctx.fillStyle = `rgba(${rgb.r},${rgb.g},${rgb.b},${alpha})`
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    tick()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerleave', onLeave)
      mo.disconnect()
      if (raf) window.cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="bg-particles"
      aria-hidden="true"
    />
  )
}
