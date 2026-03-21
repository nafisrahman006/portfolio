import { useScrollReveal } from '../hooks/useScrollReveal'
import './Timeline.css'

const events = [
  {
    year: '2023',
    month: 'Nov',
    type: 'education',
    title: 'B.Sc in Electronics & Telecommunication Engineering',
    org: 'East West University, Dhaka',
    desc: 'Graduated with focus on networking, signal processing and embedded systems.',
    icon: '🎓',
    color: '#1e3a8a',
    logo: 'ewu-logo.png',
  },
  {
    year: '2025',
    month: 'Jun',
    type: 'certification',
    title: 'DevOps Career Path Certification',
    org: 'Interactive Cares',
    desc: 'Completed intensive program covering containerization, CI/CD, IaC and cloud deployment.',
    icon: '📜',
    color: '#00d4ff',
    logo: null,
  },
  {
    year: '2025',
    month: 'Jul',
    type: 'certification',
    title: 'Red Hat Certified System Administrator (RHCSA)',
    org: 'CENTeR, United International University',
    desc: 'Certified in RHEL administration — user management, storage, network services and security hardening.',
    icon: '🏆',
    color: '#ee0000',
    logo: null,
  },
]

const typeLabel = { education: 'Education', certification: 'Certification', project: 'Project', open: 'Available' }

export default function Timeline() {
  const ref = useScrollReveal()

  return (
    <section className="timeline-section" id="timeline">
      <div className="container">
        <div className="section-header reveal" ref={ref}>
          <p className="section-label"><span className="prompt">$</span> cat education-and-certs.yaml</p>
          <h2 className="section-title">Education & Certifications</h2>
          <p className="section-sub">Academic background and professional credentials</p>
        </div>

        <div className="timeline">
          <div className="timeline-line" />
          {events.map((e, i) => (
            <TimelineItem key={i} event={e} idx={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TimelineItem({ event: e, idx }) {
  const ref = useScrollReveal()
  const isRight = idx % 2 === 0

  return (
    <div
      ref={ref}
      className={`timeline-item reveal reveal-delay-${(idx % 3) + 1} ${isRight ? 'timeline-item--right' : 'timeline-item--left'}`}
    >
      <div className="timeline-dot" style={{ background: e.color, boxShadow: `0 0 12px ${e.color}80` }}>
        <span>{e.icon}</span>
      </div>

      <div className="timeline-card" style={{ '--tl-color': e.color }}>
        <div className="tl-card-top">
          <span className="tl-type" style={{ color: e.color, borderColor: e.color + '40', background: e.color + '15' }}>
            {typeLabel[e.type]}
          </span>
          <span className="tl-date">{e.month} {e.year}</span>
        </div>
        <div className="tl-title-row">
          <h3 className="tl-title">{e.title}</h3>
          {e.logo && (
            <a href="https://www.ewubd.edu/" target="_blank" rel="noreferrer" className="tl-org-logo-link" title="East West University">
              <img src={e.logo} alt={e.org} className="tl-org-logo" />
            </a>
          )}
        </div>
        <p className="tl-org">{e.org}</p>
        <p className="tl-desc">{e.desc}</p>
      </div>
    </div>
  )
}
