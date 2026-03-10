import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { SectionLabel, FadeIn } from './SectionLabel'
import { experience } from '../data/portfolio'
import { FiBriefcase, FiMapPin, FiCalendar } from 'react-icons/fi'

export default function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="experience" className="relative py-28 border-t border-border">
      <div className="section-container">
        <SectionLabel label="work history" title="Experience" />

        <div className="relative max-w-3xl">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />

          {experience.map((exp, i) => (
            <FadeIn key={i} delay={0.1} direction="left">
              <div className="relative pl-10 pb-12">
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: 0.3, type: 'spring' }}
                  className="absolute left-0 top-1 w-3 h-3 rounded-full bg-accent -translate-x-1/2 border-2 border-bg"
                  style={{ boxShadow: '0 0 12px #00ff88' }}
                />

                <motion.div
                  whileHover={{ borderColor: '#00ff88' }}
                  className="bg-card border border-border rounded-xl p-8 transition-colors duration-300"
                  style={{ borderLeft: '3px solid #00ff88' }}
                >
                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                    <div className="flex flex-wrap gap-4 mt-2">
                      <div className="flex items-center gap-1.5 font-mono text-xs text-accent">
                        <FiBriefcase size={12} />
                        {exp.company}
                      </div>
                      <div className="flex items-center gap-1.5 font-mono text-xs text-muted">
                        <FiMapPin size={12} />
                        {exp.location}
                      </div>
                      <div className="flex items-center gap-1.5 font-mono text-xs text-blue">
                        <FiCalendar size={12} />
                        {exp.period}
                      </div>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-3">
                    {exp.bullets.map((b, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + j * 0.07 }}
                        className="flex gap-3 text-sm text-muted leading-relaxed"
                      >
                        <span className="text-accent font-mono mt-0.5 shrink-0">→</span>
                        {b}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
