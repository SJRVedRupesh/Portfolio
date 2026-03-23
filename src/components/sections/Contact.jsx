import { useState } from 'react'
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Twitter, Send, CheckCircle, MapPin, Clock } from 'lucide-react'
import { personal } from '@/lib/data'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim())           e.name    = 'Name is required'
    if (!form.email.trim())          e.email   = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.message.trim())        e.message = 'Message is required'
    return e
  }

  const handleSubmit = (e) => {
  e.preventDefault();

  const validationErrors = validate();
  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }

  setLoading(true);

  emailjs.send(
    "service_gq5mqki",   // 🔥 FIX THIS
    "template_grp3r4t",
    {
      name: form.name,
      email: form.email,
      message: form.message,
    },
    "-HJQkfpIuViv90XMb"
  )
  .then(() => {
    setLoading(false);
    setSent(true);   // ✅ use your UI
  })
  .catch((error) => {
    setLoading(false);
    console.log(error);
    alert("Failed to send ❌");
  });
};

  const set = (field) => (e) => {
    setForm(f => ({ ...f, [field]: e.target.value }))
    if (errors[field]) setErrors(er => ({ ...er, [field]: '' }))
  }

  const socials = [
    { Icon: Github,   href: personal.github,            label: 'GitHub',   color: 'hover:text-white hover:bg-slate-700' },
    { Icon: Linkedin, href: personal.linkedin,          label: 'LinkedIn', color: 'hover:text-white hover:bg-blue-600' },
    { Icon: Twitter,  href: personal.twitter,           label: 'Twitter',  color: 'hover:text-white hover:bg-sky-500' },
    { Icon: Mail,     href: `mailto:${personal.email}`, label: 'Email',    color: 'hover:text-white hover:bg-teal-500' },
  ]

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[var(--bg-secondary)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="text-center mb-14"
        >
          <span className="section-label">// contact</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="mt-3 text-[var(--text-muted)] max-w-md mx-auto text-sm">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">

          {/* ── LEFT: Info ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-8">
            I&apos;m currently open to <span className="text-teal-500 font-medium">Cloud Engineering & DevOps</span> roles
            and opportunities to work on scalable cloud-based projects. Whether it&apos;s a quick question or
            a discussion about cloud solutions — feel free to reach out!
            </p>

            {/* Info rows */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-teal-500/10 flex items-center justify-center">
                  <Mail size={14} className="text-teal-500" />
                </div>
                <div>
                  <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wide mb-0.5">Email</div>
                  <a href={`mailto:${personal.email}`} className="text-sm font-medium hover:text-teal-500 transition-colors">
                    {personal.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-teal-500/10 flex items-center justify-center">
                  <MapPin size={14} className="text-teal-500" />
                </div>
                <div>
                  <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wide mb-0.5">Location</div>
                  <span className="text-sm font-medium">{personal.location}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-teal-500/10 flex items-center justify-center">
                  <Clock size={14} className="text-teal-500" />
                </div>
                <div>
                  <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wide mb-0.5">Response Time</div>
                  <span className="text-sm font-medium">Within 24 hours</span>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div>
              <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-medium mb-3">Connect with me</p>
              <div className="flex gap-2">
                {socials.map(({ Icon, href, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className={`w-10 h-10 rounded-xl card flex items-center justify-center text-[var(--text-muted)] transition-all duration-200 ${color}`}
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card p-6"
          >
            {sent ? (
              /* Success state */
              <div className="h-full min-h-[320px] flex flex-col items-center justify-center text-center gap-3 py-8">
                <motion.div
                  initial={{ scale: 0 }} animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  <CheckCircle size={48} className="text-teal-500 mx-auto" />
                </motion.div>
                <h3 className="font-display font-bold text-lg mt-2">Message Sent!</h3>
                <p className="text-sm text-[var(--text-muted)] max-w-xs">
                  Thanks for reaching out, {form.name.split(' ')[0]}! I&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }) }}
                  className="mt-3 text-xs text-teal-500 hover:underline font-medium"
                >
                  Send another message
                </button>
              </div>
            ) : (
              /* Form */
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <h3 className="font-display font-bold text-base mb-4">Send a Message</h3>

                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold text-[var(--text-muted)] mb-1.5 uppercase tracking-wide">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={set('name')}
                    placeholder="John Doe"
                    className={`input ${errors.name ? 'border-red-500/60 focus:border-red-500/60 focus:ring-red-500/20' : ''}`}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-[var(--text-muted)] mb-1.5 uppercase tracking-wide">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={set('email')}
                    placeholder="john@example.com"
                    className={`input ${errors.email ? 'border-red-500/60 focus:border-red-500/60 focus:ring-red-500/20' : ''}`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-[var(--text-muted)] mb-1.5 uppercase tracking-wide">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={set('message')}
                    placeholder="Tell me about your project or just say hi..."
                    className={`input resize-none ${errors.message ? 'border-red-500/60 focus:border-red-500/60 focus:ring-red-500/20' : ''}`}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <><Send size={14} /> Send Message</>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
