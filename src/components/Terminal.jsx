import { useState, useEffect, useRef } from 'react'
import './Terminal.css'

const COMMANDS = {
  whoami: () => `Md Nafis Rahman
Role    : DevOps Engineer
Location: Dhaka, Bangladesh
Email   : nafisewu1@gmail.com
GitHub  : github.com/nafisrahman006`,

  help: () => `Available commands:
  whoami          — About me
  ls projects     — List projects
  ls skills       — List skills
  cat cv.pdf      — Download CV info
  cat rhcsa       — RHCSA certification
  ping            — Check availability
  clear           — Clear terminal
  exit            — Close terminal`,

  'ls projects': () => `drwxr-xr-x  lumina-ed/           EdTech platform · React + Docker + Prometheus
drwxr-xr-x  go-crud-ci-cd-k8s/   Go CRUD · K8s + Helm + GitHub Actions
drwxr-xr-x  Jenkins-Docker-AnsiblePlaybook/  Automation framework`,

  'ls skills': () => `Cloud & DevOps     : AWS, GitHub Actions, Jenkins
Containers         : Docker, Kubernetes, Helm
Infrastructure     : Ansible, Terraform
Monitoring         : Prometheus, Grafana, Loki
VPN                : WireGuard, OpenVPN
Databases          : PostgreSQL, MySQL, Redis
Languages          : Python, Go, Bash, C`,

  'cat cv.pdf': () => `nafis-cv.pdf — Md Nafis Rahman
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
To download: scroll to hero section
and click the "Download CV" button.`,

  'cat rhcsa': () => `Red Hat Certified System Administrator
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Issued  : July 2025
Issuer  : CENTeR, United International University
Topics  : RHEL admin, user mgmt, storage,
          network services, security hardening`,

  ping: () => `PING nafis@devops ~
64 bytes: seq=0 ttl=64 time=<24h
64 bytes: seq=1 ttl=64 time=<24h
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Status: AVAILABLE for opportunities
Contact: nafisewu1@gmail.com`,

  clear: () => '__CLEAR__',
  exit:  () => '__EXIT__',
}

const PROMPT = 'nafis@portfolio:~$'

export default function Terminal({ onClose }) {
  const [lines, setLines]   = useState([
    { type: 'system', text: 'nafis-portfolio terminal v1.0.0' },
    { type: 'system', text: 'Type "help" for available commands.' },
    { type: 'system', text: '─────────────────────────────────' },
  ])
  const [input, setInput]   = useState('')
  const [history, setHistory] = useState([])
  const [histIdx, setHistIdx] = useState(-1)
  const bottomRef = useRef(null)
  const inputRef  = useRef(null)

  useEffect(() => {
    inputRef.current?.focus()
    bottomRef.current?.scrollIntoView()
  }, [lines])

  const run = (cmd) => {
    const trimmed = cmd.trim().toLowerCase()
    if (!trimmed) return

    setHistory(h => [trimmed, ...h])
    setHistIdx(-1)

    const newLines = [...lines, { type: 'input', text: `${PROMPT} ${cmd}` }]

    const handler = COMMANDS[trimmed]
    if (handler) {
      const out = handler()
      if (out === '__CLEAR__') { setLines([]); setInput(''); return }
      if (out === '__EXIT__')  { onClose(); return }
      setLines([...newLines, { type: 'output', text: out }])
    } else {
      setLines([...newLines, { type: 'error', text: `command not found: ${trimmed}\nType "help" for available commands.` }])
    }
    setInput('')
  }

  const onKey = (e) => {
    if (e.key === 'Enter') { run(input); return }
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      const idx = Math.min(histIdx + 1, history.length - 1)
      setHistIdx(idx)
      setInput(history[idx] || '')
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      const idx = Math.max(histIdx - 1, -1)
      setHistIdx(idx)
      setInput(idx === -1 ? '' : history[idx])
    }
  }

  return (
    <div className="terminal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="terminal-window">
        <div className="terminal-titlebar">
          <div className="terminal-dots">
            <button className="t-btn red"   onClick={onClose} title="Close" />
            <button className="t-btn yellow" title="Minimize" />
            <button className="t-btn green"  title="Maximize" />
          </div>
          <span className="terminal-title">nafis@portfolio: ~</span>
          <span className="terminal-hint">Ctrl+` to toggle</span>
        </div>

        <div className="terminal-output" onClick={() => inputRef.current?.focus()}>
          {lines.map((l, i) => (
            <div key={i} className={`tl tl-${l.type}`}>
              <pre>{l.text}</pre>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        <div className="terminal-input-row">
          <span className="ti-prompt">{PROMPT}</span>
          <input
            ref={inputRef}
            className="ti-input"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={onKey}
            spellCheck={false}
            autoComplete="off"
          />
          <span className="ti-cursor">▋</span>
        </div>
      </div>
    </div>
  )
}
