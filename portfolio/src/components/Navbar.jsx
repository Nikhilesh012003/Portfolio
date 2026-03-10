import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-scroll'

const navItems = ['about', 'skills', 'experience', 'projects', 'education', 'contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-bg/90 backdrop-blur-xl border-b border-border' : 'bg-transparent'
        }`}
      >
        <div className="section-container flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="font-mono text-sm text-accent"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-muted">~/</span>portfolio<span className="cursor-blink text-accent">_</span>
          </motion.div>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
              >
                <Link
                  to={item}
                  spy smooth duration={600}
                  offset={-70}
                  className="font-mono text-xs uppercase tracking-widest text-muted hover:text-accent transition-colors duration-200 cursor-pointer"
                  activeClass="!text-accent"
                >
                  {item}
                </Link>
              </motion.li>
            ))}
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <a
                href="/resume.pdf"
                download
                className="font-mono text-xs uppercase tracking-widest px-4 py-2 border border-accent text-accent hover:bg-accent hover:text-bg transition-all duration-200 rounded-sm"
              >
                Resume ↓
              </a>
            </motion.li>
          </ul>

          {/* Mobile menu btn */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <motion.span
              className="block w-6 h-0.5 bg-accent"
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
            />
            <motion.span
              className="block w-6 h-0.5 bg-accent"
              animate={{ opacity: menuOpen ? 0 : 1 }}
            />
            <motion.span
              className="block w-6 h-0.5 bg-accent"
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-bg/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            {navItems.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                <Link
                  to={item}
                  spy smooth duration={600}
                  offset={-70}
                  className="font-display text-5xl text-muted hover:text-accent transition-colors cursor-pointer tracking-wider uppercase"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
