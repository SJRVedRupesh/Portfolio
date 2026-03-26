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
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-black to-slate-900">

      {/* 🔥 Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-teal-500 z-50 transition-all duration-200"
        style={{ width: `${scroll}%` }}
      />

      {/* 💎 Background Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

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