import './Certifications.css'

const certs = [
  {
    id: 'rhcsa',
    title: 'Red Hat Certified System Administrator',
    short: 'RHCSA',
    issuer: 'Red Hat / United International University',
    date: 'July 2025',
    skills: ['RHEL Administration', 'User Management', 'Storage Config', 'Security Hardening'],
    color: '#ee0000',
    // Replace with your actual image path after uploading to public/
    image: null,
  },
  {
    id: 'devops',
    title: 'DevOps Career Path Certification',
    short: 'DevOps',
    issuer: 'Interactive Cares',
    date: 'June 2025',
    skills: ['Containerization', 'CI/CD', 'Orchestration', 'Cloud Deployment'],
    color: '#00d4ff',
    image: null,
  },
]

export default function Certifications() {
  return (
    <section className="certs-section" id="certifications">
      <div className="container">
        <div className="section-header">
          <p className="section-label"><span className="prompt">$</span> cat certifications.yaml</p>
          <h2 className="section-title">Certifications</h2>
          <p className="section-sub">Professional credentials and training</p>
        </div>

        <div className="certs-grid">
          {certs.map(cert => (
            <div className="cert-card" key={cert.id} style={{ '--cert-color': cert.color }}>
              <div className="cert-card-inner">

                {/* Badge / photo area */}
                <div className="cert-badge-wrap">
                  {cert.image ? (
                    <img src={cert.image} alt={cert.short} className="cert-photo" />
                  ) : (
                    <div className="cert-badge-placeholder">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"/>
                      </svg>
                      <span>Add Photo</span>
                    </div>
                  )}
                  <div className="cert-short-badge">{cert.short}</div>
                </div>

                {/* Content */}
                <div className="cert-content">
                  <div className="cert-header">
                    <h3 className="cert-title">{cert.title}</h3>
                    <span className="cert-date">{cert.date}</span>
                  </div>
                  <p className="cert-issuer">
                    <svg viewBox="0 0 16 16" fill="currentColor" width="12" height="12">
                      <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/><path fillRule="evenodd" d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"/>
                    </svg>
                    {cert.issuer}
                  </p>
                  <div className="cert-skills">
                    {cert.skills.map(s => (
                      <span key={s} className="cert-skill-tag">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
              {/* Accent top bar */}
              <div className="cert-accent-bar" />
            </div>
          ))}
        </div>

        <p className="cert-photo-hint">
          <svg viewBox="0 0 16 16" fill="currentColor" width="12" height="12"><path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm6.5-.25A.75.75 0 017.25 7h1a.75.75 0 01.75.75v2.75h.25a.75.75 0 010 1.5h-2a.75.75 0 010-1.5h.25v-2h-.25a.75.75 0 01-.75-.75zM8 6a1 1 0 110-2 1 1 0 010 2z"/></svg>
          To add certificate photos: place images in <code>public/certs/</code> and update the <code>image</code> field in <code>Certifications.jsx</code>
        </p>
      </div>
    </section>
  )
}
