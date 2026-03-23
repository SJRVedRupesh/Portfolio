import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail, Download, MapPin } from 'lucide-react'
import { personal } from '@/lib/data'
import { useTypingEffect } from '@/hooks/useTypingEffect'

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }
const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }

export default function Hero() {
  const typed = useTypingEffect(personal.typingWords)

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Grid bg */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      {/* Glow blobs */}
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -right-48 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* ── LEFT ── */}
          <motion.div variants={stagger} initial="hidden" animate="show">

            {/* Badges */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-6">
              <span className="flex items-center gap-1.5 text-xs font-medium text-[var(--text-muted)] bg-[var(--bg-secondary)] border border-[var(--border)] px-3 py-1.5 rounded-full">
                <MapPin size={10} className="text-teal-500" />
                {personal.location}
              </span>
              <span className="flex items-center gap-1.5 text-xs font-medium text-green-500 bg-green-500/10 border border-green-500/20 px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Open to work
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1 variants={fadeUp} className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-4">
              Hi, I&apos;m{' '}
              <span className="gradient-text">{personal.name}</span>
            </motion.h1>

            {/* Typing */}
            <motion.div variants={fadeUp} className="h-8 mb-5 flex items-center">
              <span className="font-mono text-lg sm:text-xl text-teal-500 font-medium">
                {typed}
                <span className="animate-blink">|</span>
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p variants={fadeUp} className="text-[var(--text-muted)] text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
              {personal.tagline} A aspiring Cloud Engineer focused on building scalable and efficient solutions using AWS and modern technologies.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-10">
              <a href="#projects" className="btn-primary">
                View Projects <ArrowRight size={15} />
              </a>
              <a href="#contact" className="btn-outline">
                Contact Me
              </a>
              <a href={personal.resumeUrl} download className="btn-outline">
                <Download size={15} /> Resume
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <span className="text-xs text-[var(--text-muted)]">Find me on</span>
              <div className="h-px w-8 bg-[var(--border)]" />
              {[
                { Icon: Github,   href: personal.github },
                { Icon: Linkedin, href: personal.linkedin },
                { Icon: Mail,     href: `mailto:${personal.email}` },
              ].map(({ Icon, href }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl card flex items-center justify-center text-[var(--text-muted)] hover:text-teal-500 hover:border-teal-500/40 transition-all">
                  <Icon size={15} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT ── Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Spinning dashed ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-teal-500/30"
                style={{ margin: '-20px' }}
              />

              {/* Avatar circle */}
              <div className="relative w-60 h-60 sm:w-72 sm:h-72 rounded-full overflow-hidden border-2 border-teal-500/30 shadow-2xl shadow-teal-500/10">
  
              <img 
              src="/Rk.jpg" 
              alt="Rupesh Kumar"
              className="w-full h-full object-cover"
              />

            </div>

              {/* Floating stat cards */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-3 -right-6 card px-3 py-2 shadow-lg"
              >
                <div className="text-xs font-mono font-bold text-teal-500">6.92 CGPA</div>
                <div className="text-[10px] text-[var(--text-muted)]">Lovely Professional University</div>
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4.5, repeat: Infinity }}
                className="absolute -bottom-3 -left-6 card px-3 py-2 shadow-lg"
              >
                <div className="text-xs font-mono font-bold text-orange-500">3+ Projects</div>
                <div className="text-[10px] text-[var(--text-muted)]">Production Ready</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-widest uppercase text-[var(--text-muted)]">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity }}
            className="w-5 h-8 rounded-full border-2 border-[var(--border)] flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-1.5 rounded-full bg-teal-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
