import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function SectionLabel({ label, title }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="mb-14"
    >
      <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent mb-3">
        <span className="text-muted">//</span>
        {label}
      </div>
      <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] tracking-wider text-white leading-none">
        {title}
      </h2>
    </motion.div>
  )
}

export function FadeIn({ children, delay = 0, direction = 'up' }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const dirs = {
    up: { y: 30, x: 0 },
    left: { x: -30, y: 0 },
    right: { x: 30, y: 0 },
    none: { x: 0, y: 0 },
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...dirs[direction] }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}
