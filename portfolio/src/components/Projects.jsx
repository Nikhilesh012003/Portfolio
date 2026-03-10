import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { SectionLabel, FadeIn } from './SectionLabel'
import { projects } from '../data/portfolio'
import { FiExternalLink, FiGithub, FiPlus } from 'react-icons/fi'

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -8 }}
      className="group relative bg-card border border-border rounded-xl overflow-hidden flex flex-col transition-colors duration-300"
      style={{ borderColor: hovered ? project.color : '' }}
    >
      {/* Color stripe */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-0.5"
        style={{ background: project.color }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Glow bg */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${project.color}08 0%, transparent 60%)`,
        }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      <div className="p-8 flex flex-col flex-1 relative">
        {/* Number & Category */}
        <div className="flex items-center justify-between mb-5">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
            {project.id} · {project.category}
          </span>
          {project.featured && (
            <span
              className="font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-full border"
              style={{ color: project.color, borderColor: project.color + '40', background: project.color + '10' }}
            >
              Featured
            </span>
          )}
        </div>

        {/* Title */}
        <h3
          className="text-lg font-bold mb-3 transition-colors duration-200 group-hover:text-white"
          style={{ color: hovered ? project.color : '#e8e8f0' }}
        >
          {project.name}
        </h3>

        {/* Description */}
        <p className="text-muted text-sm leading-relaxed flex-1 mb-6">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map(tech => (
            <span
              key={tech}
              className="font-mono text-[10px] px-2.5 py-1 rounded-sm border"
              style={{
                color: project.color,
                borderColor: project.color + '30',
                background: project.color + '08',
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-5 pt-4 border-t border-border">
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 2 }}
            className="flex items-center gap-1.5 font-mono text-xs text-muted hover:text-accent transition-colors uppercase tracking-wider"
          >
            <FiExternalLink size={13} /> Live Demo
          </motion.a>
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 2 }}
            className="flex items-center gap-1.5 font-mono text-xs text-muted hover:text-blue transition-colors uppercase tracking-wider"
          >
            <FiGithub size={13} /> Source
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}

function AddProjectCard() {
  return (
    <motion.div
      whileHover={{ borderColor: '#00ff8840', scale: 1.01 }}
      className="border border-dashed border-border rounded-xl p-8 flex flex-col items-center justify-center gap-4 min-h-[280px] transition-colors duration-300"
    >
      <motion.div
        whileHover={{ rotate: 90, scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="w-12 h-12 rounded-full border border-muted flex items-center justify-center text-muted"
      >
        <FiPlus size={20} />
      </motion.div>
      <div className="text-center">
        <div className="font-mono text-xs uppercase tracking-widest text-muted">Add your project</div>
        <div className="font-mono text-[10px] text-muted/50 mt-1">Edit src/data/portfolio.js</div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 border-t border-border bg-surface">
      <div className="section-container">
        <SectionLabel label="what I've built" title="Projects" />
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
          <AddProjectCard />
        </div>
      </div>
    </section>
  )
}
