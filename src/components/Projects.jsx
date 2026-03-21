import './Projects.css'

const projects = [
  {
    title: 'Lumina Learning',
    subtitle: 'EdTech Platform',
    description:
      'Full-stack educational platform engineered with cloud-native DevOps practices, end-to-end observability and AI-driven log intelligence. Features an AI-powered sidecar container using Gemini API for autonomous error detection and Slack notifications.',
    tags: ['React 19', 'Express.js', 'PostgreSQL', 'Redis', 'Docker Compose', 'GitHub Actions', 'Prometheus', 'Grafana', 'Loki', 'Trivy'],
    github: 'https://github.com/nafisrahman006/lumina-ed',
    repo: 'lumina-ed',
    highlight: true,
  },
  {
    title: 'Go CRUD CI/CD K8s',
    subtitle: 'Container Deployment',
    description:
      'A Go-based CRUD application with containerized deployment and full CI/CD automation. Multi-stage Docker builds, Kubernetes manifests, Helm charts, and GitHub Actions pipeline with automated linting, testing and security scanning.',
    tags: ['Go', 'Docker', 'Kubernetes', 'Helm', 'GitHub Actions', 'Multi-stage Build'],
    github: 'https://github.com/nafisrahman006/go-crud-ci-cd-k8s',
    repo: 'go-crud-ci-cd-k8s',
  },
  {
    title: 'Jenkins-Docker Ansible',
    subtitle: 'Automation Framework',
    description:
      'Enterprise-grade infrastructure automation framework for server provisioning and deployment orchestration. Modular, reusable Ansible playbooks and roles with idempotent operations ensuring consistent state management.',
    tags: ['Ansible', 'Jenkins', 'Docker', 'Playbooks', 'IaC', 'Server Provisioning'],
    github: 'https://github.com/nafisrahman006/Jenkins-Docker-AnsiblePlaybook',
    repo: 'Jenkins-Docker-AnsiblePlaybook',
  },
]

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <div className="section-header">
          <p className="section-label"><span className="prompt">$</span> git log --oneline projects/</p>
          <h2 className="section-title">Projects</h2>
          <p className="section-sub">Things I've built and shipped</p>
        </div>

        <div className="projects-list">
          {projects.map((p, i) => (
            <div className={`project-card ${p.highlight ? 'featured' : ''}`} key={p.title}>
              {p.highlight && <span className="featured-badge">Featured</span>}
              <div className="project-card-inner">
                <div className="project-meta">
                  <a href={p.github} target="_blank" rel="noreferrer" className="project-gh-badge" title="View on GitHub">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                    </svg>
                  </a>
                  <div>
                    <h3 className="project-title">{p.title}</h3>
                    <p className="project-subtitle">{p.subtitle}</p>
                  </div>
                </div>
                <p className="project-desc">{p.description}</p>
                <div className="project-tags">
                  {p.tags.map(t => (
                    <span key={t} className="project-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
