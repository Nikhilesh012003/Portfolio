import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { SectionLabel, FadeIn } from './SectionLabel'
import { education } from '../data/portfolio'
import { FiAward } from 'react-icons/fi'

export default function Education() {
  return (
    <section id="education" className="relative py-28 border-t border-border">
      <div className="section-container">
        <SectionLabel label="academic background" title="Education" />
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {education.map((edu, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -5, borderColor: '#ff4d6d' }}
                className="bg-card border border-border rounded-xl p-6 transition-colors duration-300 group h-full flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-red">{edu.year}</div>
                  <FiAward size={14} className="text-muted group-hover:text-red transition-colors" />
                </div>
                <div className="font-bold text-lg text-white mb-1">{edu.degree}</div>
                <div className="text-muted text-xs leading-relaxed flex-1 mb-5">{edu.school}</div>
                <div className="pt-4 border-t border-border">
                  <div className="font-display text-4xl text-accent tracking-wider">
                    {edu.score}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted mt-0.5">percentage</div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
