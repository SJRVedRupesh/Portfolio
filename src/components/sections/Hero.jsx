import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react'
import { personal } from '@/lib/data'
import { useTypingEffect } from '@/hooks/useTypingEffect'

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }
const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }

export default function Hero() {
  const typed = useTypingEffect(personal.typingWords)

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.14),transparent_18%),radial-gradient(circle_at_bottom_left,_rgba(16,185,129,0.1),transparent_20%)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-20 w-full">

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">

          <motion.div variants={stagger} initial="hidden" animate="show">

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-6">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-teal-400 uppercase">
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" /> Cloud & DevOps Focused
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-tight mb-6 text-slate-100">
              Crafting dependable cloud solutions for modern businesses.
            </motion.h1>

            <motion.div variants={fadeUp} className="h-8 mb-5 flex items-center">
              <span className="font-mono text-lg sm:text-xl text-teal-400">
                {typed}<span className="animate-blink">|</span>
              </span>
            </motion.div>

            <motion.p variants={fadeUp} className="text-slate-300 mb-8 max-w-2xl text-lg leading-8">
              {personal.tagline} I build scalable systems, automate deployments, and deliver polished web experiences using AWS, Azure, and modern frontend technology.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-10">
              <a href="#projects" className="btn-primary">
                View Projects <ArrowRight size={15} />
              </a>
              <a href="#contact" className="btn-outline">Let&apos;s Talk</a>
              <a href={personal.resumeUrl} download className="btn-outline">
                <Download size={15} /> Resume
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="grid sm:grid-cols-3 gap-4">
              {[
                { label: 'Infrastructure', value: 'AWS & Azure', icon: '☁️' },
                { label: 'Delivery', value: '3+ Projects', icon: '🚀' },
                { label: 'Expertise', value: 'Automation', icon: '⚙️' },
              ].map((item) => (
                <div key={item.label} className="card p-5 bg-slate-900/95 border-slate-800">
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <p className="text-xs uppercase tracking-[0.28em] text-teal-400 mb-2">{item.label}</p>
                  <p className="font-display font-semibold text-lg text-slate-100">{item.value}</p>
                </div>
              ))}
            </motion.div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="card p-6 bg-slate-900/95 border-slate-800">
              <div className="relative overflow-hidden rounded-[32px] border border-slate-800 shadow-2xl shadow-slate-950/20 mb-6">
                <img src="/Rk.jpg" alt="Rupesh" className="w-full h-[420px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-teal-400">Professional Snapshot</p>
                  <h2 className="font-display font-semibold text-2xl text-slate-100 mt-2">Building reliable cloud systems and secure applications.</h2>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-slate-950/80 border border-slate-800 p-4">
                    <p className="text-xs text-teal-300 uppercase tracking-[0.25em] mb-2">Academic Focus</p>
                    <p className="font-display font-semibold text-slate-100">Cloud & DevOps</p>
                  </div>
                  <div className="rounded-3xl bg-slate-950/80 border border-slate-800 p-4">
                    <p className="text-xs text-teal-300 uppercase tracking-[0.25em] mb-2">Current Goal</p>
                    <p className="font-display font-semibold text-slate-100">AWS & Azure Certification</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a href={personal.github} target="_blank" rel="noreferrer" className="btn-outline">
                    GitHub
                  </a>
                  <a href={personal.linkedin} target="_blank" rel="noreferrer" className="btn-outline">
                    LinkedIn
                  </a>
                </div>
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