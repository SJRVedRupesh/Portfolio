import { motion } from 'framer-motion'
import { timeline } from '@/lib/data'

export default function Experience() {
  const education = timeline.filter(t => t.type === 'education')

  return (
    <section id="experience" className="py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="section-label">// journey</span>
          <h2 className="section-title">Education Journey</h2>
          <p className="mt-3 text-[var(--text-muted)] max-w-md mx-auto text-sm">
            My academic background and learning path that shaped my skills.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l border-[var(--border)] pl-6 space-y-8">

          {education.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >

              {/* Dot */}
              <div className="absolute -left-[11px] top-2 w-5 h-5 rounded-full bg-teal-500 border-4 border-black"></div>

              {/* Card */}
              <div className="card p-5 hover:shadow-lg transition">

                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-sm">
                    {item.title}
                  </h3>
                  <span className="text-[10px] text-[var(--text-muted)]">
                    {item.period}
                  </span>
                </div>

                <p className="text-xs text-teal-500 mb-1">
                  {item.org}
                </p>

                <p className="text-xs text-[var(--text-muted)] mb-3">
                  {item.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {item.tags.map(tag => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}

        </div>

        {/* Bottom Highlight */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-[var(--text-muted)]">
            Continuously learning and building skills in
            <span className="text-teal-500 font-medium"> Cloud Computing, DevOps, Data Structures & Algorithm</span>.
          </p>
        </motion.div>

      </div>
    </section>
  )
}