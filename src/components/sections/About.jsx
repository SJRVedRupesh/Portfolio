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
          <span className="section-label">// about me</span>
          <h2 className="section-title">Who I Am</h2>
          <p className="mt-3 text-[var(--text-muted)] max-w-md mx-auto text-sm">
            A passionate Cloud Engineer focused on building scalable and efficient solutions using AWS and modern technologies..
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10"
        >
          {[
            { value: '6.92',  label: 'CGPA',            icon: '🎓' },
            { value: '3+',   label: 'Projects Built',   icon: '💻' },
            { value: '0',    label: 'Internships',       icon: '💼' },
            { value: '6+',   label: 'Certifications',   icon: '🏅' },
          ].map(({ value, label, icon }) => (
            <div key={label} className="card text-center py-5 px-3">
              <div className="text-2xl mb-1">{icon}</div>
              <div className="font-display font-bold text-2xl gradient-text">{value}</div>
              <div className="text-xs text-[var(--text-muted)] mt-0.5">{label}</div>
            </div>
          ))}
        </motion.div>

        {/* Bio cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {cards.map(({ icon: Icon, label, key }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="card card-hover p-6"
            >
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center mb-4">
                <Icon size={18} className="text-teal-500" />
              </div>
              <h3 className="font-display font-semibold text-xs uppercase tracking-wider text-[var(--text-muted)] mb-2">
                {label}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                {personal[key]}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Tech stack quick view */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.3 }}
          className="mt-8 card p-6 flex flex-wrap items-center gap-3"
        >
          <div className="flex items-center gap-2 mr-2">
            <Code2 size={15} className="text-teal-500" />
            <span className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wide">Quick Stack</span>
          </div>
          {['TypeScript', 'React.js', 'Python', 'Docker', 'AWS','Azure','HTML', 'CSS'].map(t => (
            <span key={t} className="tag">{t}</span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
