import { Github, Linkedin, Mail, Twitter, ArrowUp } from 'lucide-react'
import { personal, navLinks } from '@/lib/data'

export default function Footer() {
  const socials = [
    { Icon: Github,   href: personal.github,               label: 'GitHub' },
    { Icon: Linkedin, href: personal.linkedin,             label: 'LinkedIn' },
    { Icon: Twitter,  href: personal.twitter,              label: 'Twitter' },
    { Icon: Mail,     href: `mailto:${personal.email}`,    label: 'Email' },
  ]

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-secondary)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="font-display font-bold text-lg gradient-text">{personal.name}</div>
            <p className="text-xs text-[var(--text-muted)] mt-0.5">{personal.title} · {personal.location}</p>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap justify-center gap-4">
            {navLinks.map(l => (
              <a key={l.href} href={l.href} className="text-xs text-[var(--text-muted)] hover:text-teal-500 transition-colors font-medium">
                {l.label}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex items-center gap-2">
            {socials.map(({ Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-[var(--text-muted)] hover:text-teal-500 hover:bg-teal-500/10 transition-all">
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-[var(--text-muted)]">
            © {new Date().getFullYear()} {personal.name}. Built with React + Vite + Tailwind CSS
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] hover:text-teal-500 transition-colors"
          >
            Back to top <ArrowUp size={11} />
          </button>
        </div>
      </div>
    </footer>
  )
}
