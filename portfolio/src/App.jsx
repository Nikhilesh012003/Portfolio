import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ParticleField from './components/ParticleField'

function Loader({ onDone }) {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-bg flex items-center justify-center"
      exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
    >
      <div className="text-center">
        <motion.div
          className="font-display text-6xl text-accent tracking-widest mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          &lt;DEV/&gt;
        </motion.div>
        <div className="w-56 h-px bg-border mx-auto overflow-hidden mb-4">
          <motion.div
            className="h-full bg-gradient-to-r from-accent via-blue to-accent"
            initial={{ x: '-100%' }}
            animate={{ x: '0%' }}
            transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onAnimationComplete={onDone}
          />
        </div>
        <motion.p
          className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Initializing portfolio...
        </motion.p>
      </div>
    </motion.div>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <div className="relative noise">
      <ParticleField />
      <AnimatePresence mode="wait">
        {loading && (
          <Loader key="loader" onDone={() => setLoading(false)} />
        )}
      </AnimatePresence>
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Cursor />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </div>
  )
}
