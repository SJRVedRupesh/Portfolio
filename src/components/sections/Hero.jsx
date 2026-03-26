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

            <motion.h1 variants={fadeUp} className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl mb-4">
              Hi, I&apos;m <span className="gradient-text">{personal.name}</span>
            </motion.h1>

            <motion.div variants={fadeUp} className="h-8 mb-5 flex items-center">
              <span className="font-mono text-lg sm:text-xl text-teal-500">
                {typed}<span className="animate-blink">|</span>
              </span>
            </motion.div>

            <motion.p variants={fadeUp} className="text-[var(--text-muted)] mb-8 max-w-lg">
              {personal.tagline} A aspiring Cloud Engineer focused on AWS and scalable systems.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-10">
              <a href="#projects" className="btn-primary">
                View Projects <ArrowRight size={15} />
              </a>
              <a href="#contact" className="btn-outline">Contact Me</a>
              <a href={personal.resumeUrl} download className="btn-outline">
                <Download size={15} /> Resume
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="flex items-center gap-3">
              {[{ Icon: Github, href: personal.github },
                { Icon: Linkedin, href: personal.linkedin },
                { Icon: Mail, href: `mailto:${personal.email}` }
              ].map(({ Icon, href }) => (
                <a key={href} href={href} target="_blank"
                  className="w-9 h-9 rounded-xl card flex items-center justify-center hover:text-teal-500">
                  <Icon size={15} />
                </a>
              ))}
            </motion.div>

          </motion.div>

          {/* ── RIGHT ── (FIXED PREMIUM IMAGE) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative flex items-center justify-center">

              {/* Blur bg */}
              <img
                src="/Rk.jpg"
                className="absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-30 scale-150"
              />

              {/* Main image */}
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden border border-teal-500/30 shadow-xl">
                <img src="/Rk.jpg" className="w-full h-full object-cover" />
              </div>

              {/* Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                className="absolute w-[320px] h-[320px] rounded-full border border-dashed border-teal-500/30"
              />

              {/* Stats */}
              <div className="absolute top-2 right-[-30px] card px-3 py-2 text-xs">
                <div className="text-teal-500 font-bold">6.92 CGPA</div>
                <div className="text-[10px]">LPU</div>
              </div>

              <div className="absolute bottom-2 left-[-30px] card px-3 py-2 text-xs">
                <div className="text-orange-500 font-bold">3+ Projects</div>
              </div>

            </div>
          </motion.div>

        </div> {/* ✅ FIXED: CLOSED GRID */}

        {/* Scroll */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs">
          Scroll ↓
        </div>

      </div>
    </section>
  )
}