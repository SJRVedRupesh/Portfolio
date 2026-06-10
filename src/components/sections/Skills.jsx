import { motion } from 'framer-motion'
import { skillCategories } from '@/lib/data'

function SkillBar({ name, level, delay }) {
  const strength = level >= 85 ? 'Advanced' : level >= 70 ? 'Proficient' : level >= 55 ? 'Competent' : 'Familiar'

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-xs uppercase tracking-[0.24em] text-teal-400 font-semibold">
          {strength}
        </span>
      </div>
      <div className="h-2.5 rounded-full bg-slate-800 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 bg-[var(--bg-secondary)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="text-center mb-14"
        >
          <h2 className="section-title">What I Work With</h2>
          <p className="mt-3 text-[var(--text-muted)] max-w-md mx-auto text-sm">
            Technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Category cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: ci * 0.1 }}
              className="card card-hover p-6"
            >
              {/* Card header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center text-xl">
                  {cat.icon}
                </div>
                <h3 className="font-display font-bold text-base">{cat.label}</h3>
              </div>

              {/* Skill bars */}
              {cat.skills.map((s, si) => (
                <SkillBar key={s.name} name={s.name} level={s.level} delay={si * 0.08} />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Badge cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.3 }}
          className="mt-10 text-center"
        >
          <p className="text-xs text-[var(--text-muted)] mb-4 uppercase tracking-wider font-medium">Also familiar with</p>
          <div className="flex flex-wrap justify-center gap-2">
            {['Docker','Git', 'Linux', 'Jenkins', 'VS Code'].map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
