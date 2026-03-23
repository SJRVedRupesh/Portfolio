import { motion } from 'framer-motion'
import { achievements } from '@/lib/data'

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="text-center mb-14"
        >
          <span className="section-label">// achievements</span>
          <h2 className="section-title">Awards &amp; Certifications</h2>
          <p className="mt-3 text-[var(--text-muted)] max-w-md mx-auto text-sm">
            Milestones, recognitions, and credentials I&apos;ve earned along the way.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, scale: 0.93 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ y: -4 }}
              className="card card-hover p-5 flex items-start gap-4"
            >
              {/* Icon badge */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${a.gradient} flex items-center justify-center text-2xl flex-shrink-0 shadow-md`}>
                {a.emoji}
              </div>

              {/* Text */}
              <div className="min-w-0">
                <h3 className="font-display font-semibold text-sm leading-snug mb-1">
                  {a.title}
                </h3>
                <div className="text-xs font-medium text-teal-500 mb-0.5">{a.issuer}</div>
                <div className="text-[10px] font-mono text-[var(--text-muted)]">{a.date}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.4 }}
          className="mt-12 card p-6 text-center"
        >
          <p className="text-sm text-[var(--text-muted)] mb-1">
            Always learning, always growing.
          </p>
          <p className="text-xs text-[var(--text-muted)]/70">
            Currently preparing for <span className="text-teal-500 font-medium">AWS Solutions Architect</span> and <span className="text-teal-500 font-medium">Google Cloud Professional</span> certifications.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
