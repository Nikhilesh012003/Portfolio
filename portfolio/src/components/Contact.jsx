import { motion } from 'framer-motion'
import { SectionLabel, FadeIn } from './SectionLabel'
import { personalInfo } from '../data/portfolio'
import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight } from 'react-icons/fi'

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 border-t border-border bg-surface overflow-hidden">
      {/* Glow */}
      <motion.div
        className="absolute right-0 bottom-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,200,255,0.06) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      <div className="section-container relative z-10 text-center">
        <FadeIn>
          <div className="flex items-center justify-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
            <span className="text-muted">//</span>
            get in touch
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="font-display text-[clamp(3rem,8vw,7rem)] tracking-wider leading-none mb-6 text-white">
            LET'S BUILD<br />
            <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(232,232,240,0.25)' }}>
              TOGETHER
            </span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="font-mono text-sm text-muted max-w-sm mx-auto mb-12 leading-relaxed">
            Open to full-time roles, internships, and freelance projects. Let's create something great.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <motion.a
            href={`mailto:${personalInfo.email}`}
            whileHover={{ scale: 1.04, boxShadow: '0 0 40px rgba(0,255,136,0.2)' }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 font-mono text-sm px-10 py-5 border border-accent text-accent rounded-sm hover:bg-accent hover:text-bg transition-colors duration-200 mb-14 group"
          >
            <FiMail size={16} />
            {personalInfo.email}
            <motion.span
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            >
              <FiArrowUpRight size={14} />
            </motion.span>
          </motion.a>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="flex items-center justify-center gap-6">
            {[
              { icon: FiGithub, href: personalInfo.github, label: 'GitHub' },
              { icon: FiLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, color: '#00ff88' }}
                className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted border border-border px-5 py-3 rounded-sm hover:border-accent transition-all duration-200"
              >
                <Icon size={14} />
                {label}
              </motion.a>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
