
import { motion } from 'framer-motion'
import { achievements } from '@/lib/data'
import { useState } from 'react'

export default function Achievements() {
  const [selectedCert, setSelectedCert] = useState(null)
  
  const [zoom, setZoom] = useState(1)
  const zoomIn = () => setZoom((z) => Math.min(z + 0.2, 3))
  const zoomOut = () => setZoom((z) => Math.max(z - 0.2, 0.6))
  const resetZoom = () => setZoom(1)

  return (
    <section id="achievements" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
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
              onClick={() => setSelectedCert(a.link)}
              initial={{ opacity: 0, scale: 0.93 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ y: -4 }}
              className="card card-hover p-5 flex items-start gap-4 cursor-pointer hover:shadow-xl transition"
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
                <div className="text-xs font-medium text-teal-500 mb-0.5">
                  {a.issuer}
                </div>
                <div className="text-[10px] font-mono text-[var(--text-muted)]">
                  {a.date}
                </div>

                <p className="text-[10px] text-cyan-400 mt-1">
                  View Certificate →
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Viewer */}
        {selectedCert && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    onClick={() => setSelectedCert(null)}
    className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4"
  >
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 120 }}
      onClick={(e) => e.stopPropagation()}
      className="relative w-full max-w-6xl h-[90vh] rounded-2xl overflow-hidden 
                 bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl"
    >

      {/* Controls */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">

        <h3 className="text-sm font-semibold text-white">
          Certificate 
        </h3>

        <div className="flex items-center gap-2">

          <button onClick={zoomOut} className="btn">-</button>
          <button onClick={resetZoom} className="btn">Reset</button>
          <button onClick={zoomIn} className="btn">+</button>

          <a href={selectedCert} download className="btn bg-teal-500 text-white">
            Download
          </a>

          <button onClick={() => setSelectedCert(null)} className="btn bg-red-500 text-white">
            Close
          </button>
        </div>
      </div>

      {/* Viewer */}
      <div className="w-full h-full overflow-hidden flex items-center justify-center bg-black">

  <div
    style={{ transform: `scale(${zoom})` }}
    className="w-full h-full flex items-center justify-center transition-transform duration-200"
  >
    <iframe
      src={`${selectedCert}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
      className="w-full h-full bg-white rounded-xl"
    />
  </div>

</div>
    </motion.div>
  </motion.div>
)}

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
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