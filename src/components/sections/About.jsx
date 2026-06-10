import { motion } from 'framer-motion'
import { User, Target, BookOpen, Code2 } from 'lucide-react'
import { personal } from '@/lib/data'

const cards = [
  { icon: User,      label: 'Introduction',  key: 'bio1' },
  { icon: BookOpen,  label: 'Background',    key: 'bio2' },
  { icon: Target,    label: 'Career Goal',   key: 'objective' },
]

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="text-center mb-14"
        >
          <h2 className="section-title">About Me</h2>
          <p className="mt-3 text-[var(--text-muted)] max-w-2xl mx-auto text-sm sm:text-base leading-7">
            I am a Cloud Engineering student with strong technical foundations in AWS, Azure, automation, and frontend development. I enjoy solving complex problems with scalable, secure, and maintainable solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.3fr_0.9fr] gap-8 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <div className="card p-8 bg-slate-900/95 border-slate-800">
              <h3 className="font-display font-semibold text-xl text-slate-100 mb-4">Professional Overview</h3>
              <p className="text-[var(--text-muted)] leading-relaxed">
                {personal.bio1}
              </p>
              <p className="text-[var(--text-muted)] leading-relaxed mt-4">
                {personal.bio2}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="card p-6 bg-slate-900/95 border-slate-800">
                <p className="text-xs uppercase tracking-[0.28em] text-teal-400 mb-3">Core Strength</p>
                <p className="font-display font-semibold text-lg text-slate-100">Cloud automation and deployment.</p>
              </div>
              <div className="card p-6 bg-slate-900/95 border-slate-800">
                <p className="text-xs uppercase tracking-[0.28em] text-teal-400 mb-3">Career Focus</p>
                <p className="font-display font-semibold text-lg text-slate-100">Building scalable SaaS-ready systems.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="card p-8 bg-slate-900/95 border-slate-800"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-teal-400 mb-4">Highlights</p>
            <div className="space-y-4">
              <div className="rounded-3xl bg-slate-950/80 border border-slate-800 p-4">
                <p className="text-xs text-teal-300 uppercase tracking-[0.25em] mb-2">Academic Performance</p>
                <p className="font-display font-semibold text-2xl text-slate-100">CGPA 6.92</p>
              </div>
              <div className="rounded-3xl bg-slate-950/80 border border-slate-800 p-4">
                <p className="text-xs text-teal-300 uppercase tracking-[0.25em] mb-2">Ongoing Projects</p>
                <p className="font-display font-semibold text-2xl text-slate-100">4+ delivered</p>
              </div>
              <div className="rounded-3xl bg-slate-950/80 border border-slate-800 p-4">
                <p className="text-xs text-teal-300 uppercase tracking-[0.25em] mb-2">Certifications</p>
                <p className="font-display font-semibold text-2xl text-slate-100">6+ achieved</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {cards.map(({ icon: Icon, label, key }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="card card-hover p-6 bg-slate-900/95 border-slate-800"
            >
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center mb-4">
                <Icon size={18} className="text-teal-400" />
              </div>
              <h3 className="font-display font-semibold text-xs uppercase tracking-wider text-teal-300 mb-2">
                {label}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                {personal[key]}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.3 }}
          className="mt-8 card p-6 bg-slate-900/95 border-slate-800 flex flex-wrap items-center gap-3"
        >
          <div className="flex items-center gap-2 mr-2">
            <Code2 size={15} className="text-teal-500" />
            <span className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wide">Quick Stack</span>
          </div>
          {['TypeScript', 'React.js', 'Python', 'Docker', 'AWS', 'Azure', 'HTML', 'CSS'].map(t => (
            <span key={t} className="tag">{t}</span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
