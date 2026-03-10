import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { personalInfo } from '../data/portfolio'
import { FiArrowUp } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg py-8 relative z-10">
      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-mono text-xs text-muted">
          Built by <span className="text-accent">{personalInfo.name}</span> · {new Date().getFullYear()}
        </div>
        <div className="font-mono text-xs text-muted">
          React · Vite · Tailwind · Framer Motion
        </div>
        <Link to="hero" spy smooth duration={800}>
          <motion.button
            whileHover={{ y: -3, borderColor: '#00ff88', color: '#00ff88' }}
            className="flex items-center gap-2 font-mono text-xs text-muted border border-border px-4 py-2 rounded-sm transition-colors duration-200"
          >
            <FiArrowUp size={12} /> Back to top
          </motion.button>
        </Link>
      </div>
    </footer>
  )
}
