import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { SectionLabel, FadeIn } from './SectionLabel'
import { skills } from '../data/portfolio'

function SkillGroup({ group, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4, borderColor: group.color }}
      className="bg-card border border-border rounded-xl p-6 transition-colors duration-300 group"
      style={{ '--group-color': group.color }}
    >
      <div className="flex items-center gap-3 mb-5">
        <span className="text-2xl">{group.icon}</span>
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] mb-0.5" style={{ color: group.color }}>
            &gt; {group.category}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {group.items.map((item, i) => (
          <motion.span
            key={item}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: index * 0.07 + i * 0.04 }}
            whileHover={{ scale: 1.08, color: group.color, borderColor: group.color }}
            className="font-mono text-[11px] px-3 py-1.5 rounded-sm bg-faint border border-border text-muted transition-all duration-200 cursor-default"
          >
            {item}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 border-t border-border bg-surface">
      <div className="section-container">
        <SectionLabel label="what I know" title="Technical Skills" />
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {skills.map((group, i) => (
            <SkillGroup key={group.category} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
