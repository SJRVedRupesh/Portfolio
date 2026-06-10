import { useTheme } from './hooks/useTheme'
import { useEffect, useState } from 'react'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/ui/ScrollToTop'

import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import Achievements from './components/sections/Achievements'
import Contact from './components/sections/Contact'

export default function App() {
  const { theme, toggle } = useTheme()

  // 🔥 Scroll Progress
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const total =
        document.documentElement.scrollHeight - window.innerHeight
      setScroll((window.scrollY / total) * 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-950 text-slate-100">

      {/* 🔥 Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-teal-400 z-50 transition-all duration-200"
        style={{ width: `${scroll}%` }}
      />

      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.14),transparent_20%),radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.08),transparent_18%)] pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-slate-950 via-slate-950/75 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent pointer-events-none" />

      {/* 🌐 Content */}
      <div className="relative z-10">
        <Navbar theme={theme} toggleTheme={toggle} />

        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Achievements />
          <Contact />
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    </div>
  )
}