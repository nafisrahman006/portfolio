import { useState, useEffect } from 'react'
import './Loader.css'

const lines = [
  '> initializing nafis.portfolio...',
  '> loading DevOps stack...',
  '> mounting components...',
  '> ready.',
]

export default function Loader({ onDone }) {
  const [lineIdx, setLineIdx] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (lineIdx < lines.length - 1) {
      const t = setTimeout(() => setLineIdx(i => i + 1), 320)
      return () => clearTimeout(t)
    } else {
      // After last line, fade out
      const t = setTimeout(() => {
        setVisible(false)
        setTimeout(onDone, 400)
      }, 400)
      return () => clearTimeout(t)
    }
  }, [lineIdx, onDone])

  return (
    <div className={`loader-overlay ${!visible ? 'loader-out' : ''}`}>
      <div className="loader-inner">
        <div className="loader-logo">&gt;_</div>
        <div className="loader-lines">
          {lines.slice(0, lineIdx + 1).map((l, i) => (
            <p key={i} className={`loader-line ${i === lineIdx ? 'loader-line--active' : ''}`}>
              {l}{i === lineIdx && <span className="loader-cursor">▋</span>}
            </p>
          ))}
        </div>
        <div className="loader-bar">
          <div
            className="loader-bar-fill"
            style={{ width: `${((lineIdx + 1) / lines.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  )
}
