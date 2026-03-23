import { motion } from 'framer-motion'
import { Briefcase, GraduationCap } from 'lucide-react'
import { timeline } from '@/lib/data'

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 bg-[var(--bg-secondary)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="text-center mb-14"
        >
          <span className="section-label">// experience</span>
          <h2 className="section-title">Journey So Far</h2>
          <p className="mt-3 text-[var(--text-muted)] max-w-md mx-auto text-sm">
            Work experience, education, and the path that got me here.
          </p>
        </motion.div>

        {/* Two columns: Work | Education */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Work */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center">
                <Briefcase size={15} className="text-teal-500" />
              </div>
              <h3 className="font-display font-bold text-base">Work Experience</h3>
            </div>

            <div className="relative pl-6 border-l-2 border-[var(--border)] space-y-8">
              {timeline.filter(t => t.type === 'work').map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[33px] w-6 h-6 rounded-full bg-[var(--bg-secondary)] border-2 border-teal-500 flex items-center justify-center text-sm">
                    {item.icon}
                  </div>

                  <div className="card card-hover p-5">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                      <h4 className="font-display font-bold text-sm">{item.title}</h4>
                      <span className="text-[10px] font-mono text-[var(--text-muted)] bg-[var(--bg)] px-2 py-0.5 rounded-md border border-[var(--border)] whitespace-nowrap">
                        {item.period}
                      </span>
                    </div>
                    <div className="text-xs font-semibold text-teal-500 mb-2">
                      {item.org} · {item.location}
                    </div>
                    <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-3">{item.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map(t => <span key={t} className="tag">{t}</span>)}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center">
                <GraduationCap size={15} className="text-orange-500" />
              </div>
              <h3 className="font-display font-bold text-base">Education</h3>
            </div>

            <div className="relative pl-6 border-l-2 border-[var(--border)] space-y-8">
              {timeline.filter(t => t.type === 'education').map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[33px] w-6 h-6 rounded-full bg-[var(--bg-secondary)] border-2 border-orange-500 flex items-center justify-center text-sm">
                    {item.icon}
                  </div>

                  <div className="card card-hover p-5">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                      <h4 className="font-display font-bold text-sm">{item.title}</h4>
                      <span className="text-[10px] font-mono text-[var(--text-muted)] bg-[var(--bg)] px-2 py-0.5 rounded-md border border-[var(--border)] whitespace-nowrap">
                        {item.period}
                      </span>
                    </div>
                    <div className="text-xs font-semibold text-orange-500 mb-2">
                      {item.org} · {item.location}
                    </div>
                    <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-3">{item.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map(t => <span key={t} className="tag">{t}</span>)}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
