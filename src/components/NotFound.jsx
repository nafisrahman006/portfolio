import { useEffect, useState } from 'react'
import './NotFound.css'

export default function NotFound() {
  const [tick, setTick] = useState(true)

  useEffect(() => {
    const t = setInterval(() => setTick(v => !v), 500)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="notfound">
      <div className="nf-terminal">
        <div className="nf-bar">
          <span className="nf-dot red" /><span className="nf-dot yellow" /><span className="nf-dot green" />
          <span className="nf-title">bash — nafis@portfolio</span>
        </div>
        <div className="nf-body">
          <p className="nf-line nf-dim">$ cd /page-you-were-looking-for</p>
          <p className="nf-line nf-err">bash: cd: No such file or directory</p>
          <p className="nf-line nf-dim">$ ls /</p>
          <p className="nf-line nf-out">about/  skills/  projects/  github/  contact/</p>
          <p className="nf-line nf-dim">$ echo $?</p>
          <p className="nf-line nf-accent">404</p>
          <p className="nf-line">
            <span className="nf-prompt">$</span>
            <span style={{ color: '#e8f4fd' }}> </span>
            {tick && <span className="nf-cursor">▋</span>}
          </p>
        </div>

        <div className="nf-content">
          <h1 className="nf-code">404</h1>
          <p className="nf-message">Page not found</p>
          <p className="nf-sub">The route you requested doesn't exist on this server.</p>
          <a href="/portfolio/" className="nf-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
            </svg>
            Back to home
          </a>
        </div>
      </div>
    </div>
  )
}
