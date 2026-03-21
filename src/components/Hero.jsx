import { useEffect, useState } from 'react'
import './Hero.css'

const roles = [ 
  'Cloud Infrastructure',
  'CI/CD Automation',
  'Container Orchestration',
  'Observability & Monitoring',
  'Secret Management',

]

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [charIdx, setCharIdx] = useState(0)

  useEffect(() => {
    const current = roles[roleIdx]
    let timeout

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx + 1))
        setCharIdx(c => c + 1)
      }, 70)
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx - 1))
        setCharIdx(c => c - 1)
      }, 35)
    } else if (deleting && charIdx === 0) {
      setDeleting(false)
      setRoleIdx(i => (i + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [charIdx, deleting, roleIdx])

  return (
    <section className="hero" id="about">
      <div className="hero-glow" />
      <div className="container hero-inner">
        <div className="hero-text">
          <p className="hero-greeting">
            <span className="prompt">$</span> whoami
          </p>
          <div className="hero-open-badge">
            <span className="hero-open-dot" />
            Open to Work
          </div>
          <h1 className="hero-name">
            Md Nafis<br />
            <span className="hero-name-accent">Rahman</span>
          </h1>
          <p className="hero-role">
            <span className="prompt">&gt;</span>&nbsp;
            <span className="typewriter">{displayed}</span>
            <span className="cursor">▋</span>
          </p>
          <p className="hero-bio">
            Electronics &amp; Telecommunication Engineering graduate building
            <span className="highlight"> secure, scalable</span> infrastructure.
            Specializing in containerization, observability, and automation pipelines.
          </p>
          <div className="hero-badges">
            {['Docker', 'Kubernetes', 'Prometheus', 'Ansible', 'Terraform', 'GitHub Actions'].map(b => (
              <span key={b} className="badge">{b}</span>
            ))}
          </div>
          <div className="hero-ctas">
            <a
              href="https://github.com/nafisrahman006"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/nfsr"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
            {/* Drop your CV PDF as public/nafis-cv.pdf — it will be served at /nafis-cv.pdf */}
            <a href="/portfolio/nafis-cv.pdf" download="Nafis_Rahman_CV.pdf" className="btn-cv">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download CV
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="terminal-card">
            <div className="terminal-header">
              <span className="t-dot red" /><span className="t-dot yellow" /><span className="t-dot green" />
              <span className="t-title"></span>
            </div>
            <div className="terminal-body">
              <div className="t-line"><span className="t-prompt">$</span> cat about.yaml</div>
              <div className="t-line t-key">name: <span className="t-val">"Md Nafis Rahman"</span></div>
              {/* <div className="t-line t-key">role: <span className="t-val">"DevOps Engineer"</span></div> */}
              <div className="t-line t-key">location: <span className="t-val">"Dhaka, Bangladesh"</span></div>
              <div className="t-line t-key">education: <span className="t-val">"B.Sc Electronics & Telecommunication Engineering, EWU"</span></div>
              <div className="t-line t-key">certifications:</div>
              <div className="t-line t-indent"><span className="t-dash">-</span> <span className="t-val">"RHCSA"</span></div>
              <div className="t-line t-indent"><span className="t-dash">-</span> <span className="t-val">"DevOps Career Path"</span></div>
              <div className="t-line t-key">stack:</div>
              <div className="t-line t-indent"><span className="t-dash">-</span> <span className="t-val">"Docker / K8s / Helm"</span></div>
              <div className="t-line t-indent"><span className="t-dash">-</span> <span className="t-val">"Prometheus / Grafana"</span></div>
              <div className="t-line t-indent"><span className="t-dash">-</span> <span className="t-val">"Ansible / Terraform"</span></div>
              <div className="t-line t-indent"><span className="t-dash">-</span> <span className="t-val">"GitHub Actions / Jenkins"</span></div>
              {/* <div className="t-line"><span className="t-prompt">$</span> <span className="cursor-sm">▋</span></div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}