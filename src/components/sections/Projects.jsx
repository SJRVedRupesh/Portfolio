import { motion } from 'framer-motion'
import { ExternalLink, Github, Star } from 'lucide-react'
import { projects } from '@/lib/data'

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="text-center mb-14"
        >
          <span className="section-label">// projects</span>
          <h2 className="section-title">Things I&apos;ve Built</h2>
          <p className="mt-3 text-[var(--text-muted)] max-w-md mx-auto text-sm">
            A selection of personal and internship projects I&apos;m proud of.
          </p>
        </motion.div>

        {/* Featured projects (first 2) */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {projects.filter(p => p.featured).map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="card card-hover group flex flex-col overflow-hidden"
            >
              {/* Banner */}
              <div className={`h-36 bg-gradient-to-br ${p.gradient} flex items-center justify-center relative overflow-hidden`}>
                <span className="text-6xl">{p.emoji}</span>
                <div className="absolute inset-0 bg-black/10" />
                <span className="absolute top-3 right-3 flex items-center gap-1 text-[10px] font-bold text-white bg-white/20 px-2 py-0.5 rounded-full backdrop-blur-sm">
                  <Star size={9} fill="white" /> Featured
                </span>
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-display font-bold text-base mb-1.5">{p.title}</h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4 flex-1">{p.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>

                <div className="flex gap-4 pt-3 border-t border-[var(--border)]">
                  <a href={p.liveUrl} target="_blank" rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs font-semibold text-teal-500 hover:text-teal-400 transition-colors">
                    <ExternalLink size={12} /> Live Demo
                  </a>
                  <a href={p.githubUrl} target="_blank" rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs font-semibold text-[var(--text-muted)] hover:text-[var(--text)] transition-colors">
                    <Github size={12} /> View Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other projects (remaining) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.filter(p => !p.featured).map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="card card-hover group flex flex-col overflow-hidden"
            >
              {/* Banner */}
              <div className={`h-24 bg-gradient-to-br ${p.gradient} flex items-center justify-center`}>
                <span className="text-4xl">{p.emoji}</span>
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-display font-bold text-sm mb-1.5">{p.title}</h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-3 flex-1">{p.description}</p>

                <div className="flex flex-wrap gap-1 mb-3">
                  {p.tags.slice(0, 3).map(t => <span key={t} className="tag">{t}</span>)}
                  {p.tags.length > 3 && <span className="tag">+{p.tags.length - 3}</span>}
                </div>

                <div className="flex gap-3 pt-3 border-t border-[var(--border)]">
                  <a href={p.liveUrl} target="_blank" rel="noreferrer"
                    className="flex items-center gap-1 text-xs font-semibold text-teal-500 hover:text-teal-400 transition-colors">
                    <ExternalLink size={11} /> Demo
                  </a>
                  <a href={p.githubUrl} target="_blank" rel="noreferrer"
                    className="flex items-center gap-1 text-xs font-semibold text-[var(--text-muted)] hover:text-[var(--text)] transition-colors">
                    <Github size={11} /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ delay: 0.3 }}
          className="mt-10 text-center"
        >
          <a href="https://github.com/SJRVedRupesh" target="_blank" rel="noreferrer"
            className="btn-outline mx-auto">
            <Github size={15} /> See all projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
