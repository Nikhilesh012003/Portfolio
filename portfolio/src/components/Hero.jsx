import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import { personalInfo } from "../data/portfolio";
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from "react-icons/fi";

const floatVariants = {
  animate: {
    y: [0, -18, 0],
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
  },
};

const orbitVariants = (duration) => ({
  animate: {
    rotate: [0, 360],
    transition: { duration, repeat: Infinity, ease: "linear" },
  },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Grid bg */}
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* Radial glow */}
      <motion.div
        className="absolute left-1/4 top-1/3 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,255,136,0.06) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="section-container relative z-10 flex flex-col lg:flex-row items-center gap-16 py-20">
        {/* LEFT — text */}
        <div className="flex-1 max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-accent mb-8"
          >
            <span className="w-8 h-px bg-accent" />
            Available for opportunities
            <motion.span
              className="w-2 h-2 rounded-full bg-accent"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(4rem,10vw,8rem)] leading-none mb-4 tracking-wider"
          >
            <span
              className="glitch text-white"
              data-text={personalInfo.firstName.toUpperCase()}
            >
              {personalInfo.firstName.toUpperCase()}
            </span>
            <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1px rgba(232,232,240,0.2)" }}
            >
              {personalInfo.lastName.toUpperCase()}
            </span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="font-mono text-base text-muted mb-6 flex items-center gap-2"
          >
            <span className="text-blue">&gt;</span>
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                1800,
                "MERN Stack Engineer",
                1800,
                "API Architect",
                1800,
                "AI-Assisted Developer",
                1800,
                "Cloud Deployment Enthusiast",
                1800,
              ]}
              repeat={Infinity}
              className="text-white"
            />
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="text-muted leading-relaxed max-w-lg mb-10 text-sm"
          >
            {personalInfo.bio}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <Link to="projects" spy smooth duration={700} offset={-70}>
              <motion.button
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 0 30px rgba(0,255,136,0.3)",
                }}
                whileTap={{ scale: 0.97 }}
                className="px-7 py-3 bg-accent text-bg font-mono text-xs uppercase tracking-widest font-bold rounded-sm"
              >
                View Projects →
              </motion.button>
            </Link>
            <Link to="contact" spy smooth duration={700} offset={-70}>
              <motion.button
                whileHover={{
                  scale: 1.04,
                  borderColor: "#00c8ff",
                  color: "#00c8ff",
                }}
                whileTap={{ scale: 0.97 }}
                className="px-7 py-3 border border-border text-muted font-mono text-xs uppercase tracking-widest rounded-sm transition-colors"
              >
                Get in Touch
              </motion.button>
            </Link>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex gap-5"
          >
            {[
              { icon: FiGithub, href: personalInfo.github, label: "GitHub" },
              {
                icon: FiLinkedin,
                href: personalInfo.linkedin,
                label: "LinkedIn",
              },
              {
                icon: FiMail,
                href: `mailto:${personalInfo.email}`,
                label: "Email",
              },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, color: "#00ff88" }}
                className="text-muted transition-colors"
                aria-label={label}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — floating visual */}
        <div className="hidden lg:flex flex-1 items-center justify-center relative">
          <motion.div
            variants={floatVariants}
            animate="animate"
            className="relative w-72 h-72"
          >
            {/* Center blob */}
            <div
              className="absolute inset-8 rounded-full blob"
              style={{
                background:
                  "radial-gradient(135deg, rgba(0,255,136,0.15), rgba(0,200,255,0.1))",
              }}
            />

            {/* Code card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute inset-0 m-8 rounded-xl bg-card border border-border backdrop-blur-sm flex flex-col overflow-hidden"
            >
              {/* Terminal header */}
              <div className="flex items-center gap-1.5 px-3 py-2.5 border-b border-border bg-surface">
                <div className="w-2.5 h-2.5 rounded-full bg-red" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-accent" />
                <span className="font-mono text-[10px] text-muted ml-2">
                  dev.js
                </span>
              </div>
              {/* Code */}
              <div className="p-4 font-mono text-[11px] leading-relaxed flex-1">
                <div>
                  <span className="text-blue">const</span>{" "}
                  <span className="text-accent">dev</span>{" "}
                  <span className="text-white">= {"{"}</span>
                </div>
                <div className="ml-3">
                  <span className="text-white">name:</span>{" "}
                  <span className="text-yellow-300">"Nikhilesh Raut"</span>
                  <span className="text-white">,</span>
                </div>
                <div className="ml-3">
                  <span className="text-white">stack:</span>{" "}
                  <span className="text-yellow-300">"MERN"</span>
                  <span className="text-white">,</span>
                </div>
                <div className="ml-3">
                  <span className="text-white">ai:</span>{" "}
                  <span className="text-yellow-300">"Claude"</span>
                  <span className="text-white">,</span>
                </div>
                <div className="ml-3">
                  <span className="text-white">open:</span>{" "}
                  <span className="text-accent">true</span>
                </div>
                <div>
                  <span className="text-white">{"}"}</span>
                </div>
                <div className="mt-2">
                  <motion.span
                    className="text-muted"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1.2, repeat: Infinity }}
                  >
                    █
                  </motion.span>
                </div>
              </div>
            </motion.div>

            {/* Orbiting dots */}
            {[
              { color: "#00ff88", duration: 5, size: 8, radius: 130 },
              {
                color: "#00c8ff",
                duration: 8,
                size: 6,
                radius: 150,
                reverse: true,
              },
              { color: "#ff4d6d", duration: 12, size: 5, radius: 165 },
            ].map(({ color, duration, size, radius, reverse }, i) => (
              <motion.div
                key={i}
                className="absolute inset-0 flex items-center justify-center"
                animate={{ rotate: reverse ? [0, -360] : [0, 360] }}
                transition={{ duration, repeat: Infinity, ease: "linear" }}
                style={{ margin: `calc(50% - ${radius / 2}px)` }}
              >
                <div
                  className="absolute rounded-full"
                  style={{
                    width: size,
                    height: size,
                    background: color,
                    boxShadow: `0 0 ${size * 2}px ${color}`,
                    top: -radius,
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                />
              </motion.div>
            ))}

            {/* Spinning ring */}
            <motion.div
              className="absolute inset-0 m-2 rounded-full border border-dashed border-accent/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-0 m-6 rounded-full border border-dashed border-blue/10"
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-accent"
        >
          <FiArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
