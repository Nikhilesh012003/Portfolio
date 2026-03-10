import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { SectionLabel, FadeIn } from './SectionLabel'
import { personalInfo } from '../data/portfolio'
import { FiMapPin } from 'react-icons/fi'

const stats = [
  { value: 'MCA', sub: '2025 · 79.8%', label: 'Graduate' },
  { value: '6mo', sub: 'Internship', label: 'Experience' },
  { value: '3+', sub: 'Shipped', label: 'Projects' },
  { value: '10+', sub: 'Mastered', label: 'Technologies' },
]

export default function About() {
  return (
    <section id="about" className="relative py-28 border-t border-border">
      <div className="section-container">
        <SectionLabel label="about me" title="Who I Am" />

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <div className="space-y-6">
            <FadeIn direction="left" delay={0.1}>
              <p className="text-muted leading-relaxed text-sm">
                I'm a <span className="text-accent font-medium">Full Stack Developer</span> and MCA 2025 graduate from G.H. Raisoni College of Engineering, Nagpur. My core stack is MERN — MongoDB, Express.js, React, and Node.js — with a strong foundation in Data Structures, Algorithms, DBMS, Networking, and OS.
              </p>
            </FadeIn>
            <FadeIn direction="left" delay={0.2}>
              <p className="text-muted leading-relaxed text-sm">
                I actively leverage AI tools like <span className="text-blue font-medium">GitHub Copilot</span> and <span className="text-blue font-medium">ChatGPT</span> throughout the development lifecycle — from prototyping to code generation, debugging, and documentation. I believe in writing code that is not just functional, but maintainable, secure, and well-documented.
              </p>
            </FadeIn>
            <FadeIn direction="left" delay={0.3}>
              <p className="text-muted leading-relaxed text-sm">
                Currently seeking a <span className="text-accent font-medium">Project Trainee</span> or full-time developer role where I can contribute to AI-driven enterprise application development.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="flex items-center gap-2 font-mono text-xs text-muted pt-2">
                <FiMapPin size={13} className="text-accent" />
                {personalInfo.location}
              </div>
            </FadeIn>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <FadeIn key={s.label} delay={0.1 + i * 0.08} direction="right">
                <motion.div
                  whileHover={{ scale: 1.03, borderColor: '#00ff88' }}
                  className="bg-card border border-border rounded-lg p-6 transition-colors duration-300 group"
                >
                  <div className="font-display text-5xl text-accent tracking-wider group-hover:glow-text transition-all">
                    {s.value}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-blue mt-1 mb-0.5">{s.sub}</div>
                  <div className="font-mono text-xs text-muted">{s.label}</div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
