import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY })
    const down = () => setClicked(true)
    const up = () => setClicked(false)

    window.addEventListener('mousemove', move)
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup', up)

    const links = document.querySelectorAll('a, button, [data-hover]')
    links.forEach(el => {
      el.addEventListener('mouseenter', () => setHovered(true))
      el.addEventListener('mouseleave', () => setHovered(false))
    })

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousedown', down)
      window.removeEventListener('mouseup', up)
    }
  }, [])

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed z-[9999] pointer-events-none rounded-full bg-accent mix-blend-difference"
        style={{ width: 10, height: 10 }}
        animate={{
          x: pos.x - 5,
          y: pos.y - 5,
          scale: clicked ? 0.5 : hovered ? 0 : 1,
        }}
        transition={{ type: 'spring', stiffness: 1000, damping: 40, mass: 0.1 }}
      />
      {/* Ring */}
      <motion.div
        className="fixed z-[9998] pointer-events-none rounded-full border border-accent"
        style={{ width: 36, height: 36 }}
        animate={{
          x: pos.x - 18,
          y: pos.y - 18,
          scale: clicked ? 0.8 : hovered ? 2 : 1,
          opacity: hovered ? 0.4 : 0.6,
          borderColor: hovered ? '#00c8ff' : '#00ff88',
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 25, mass: 0.5 }}
      />
    </>
  )
}
