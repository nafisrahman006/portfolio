import { useState, useEffect } from 'react'
import PipelineBg     from './components/PipelineBg'
import Navbar         from './components/Navbar'
import Hero           from './components/Hero'
import Skills         from './components/Skills'
import Timeline       from './components/Timeline'
import Projects       from './components/Projects'
import GitHubRepos    from './components/GitHubRepos'
import Contact        from './components/Contact'
import Footer         from './components/Footer'
import Loader         from './components/Loader'
import NotFound       from './components/NotFound'

function ScrollProgress() {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement
      const scrolled = el.scrollTop || document.body.scrollTop
      const total = el.scrollHeight - el.clientHeight
      setPct(total > 0 ? (scrolled / total) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return <div className="scroll-progress" style={{ width: `${pct}%` }} />
}

export default function App() {
  const [loading, setLoading] = useState(true)
  const is404 = window.location.pathname !== '/portfolio/' &&
                window.location.pathname !== '/portfolio/index.html' &&
                window.location.pathname !== '/'

  if (is404) return <NotFound />

  return (
    <>
      {loading && <Loader onDone={() => setLoading(false)} />}
      <ScrollProgress />
      <PipelineBg />
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Timeline />
        <Projects />
        <GitHubRepos />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
