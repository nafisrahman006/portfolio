import { useEffect, useState, useRef } from 'react'
import './GitHubRepos.css'

const GITHUB_USERNAME = 'nafisrahman006'
const SHOW_COUNT = 6

const langColors = {
  JavaScript:'#f1e05a', TypeScript:'#3178c6', Python:'#3572A5',
  Go:'#00ADD8', Shell:'#89e051', Dockerfile:'#384d54',
  HTML:'#e34c26', CSS:'#563d7c', Java:'#b07219', Rust:'#dea584',
  Vue:'#41b883', React:'#61dafb',
}

function RepoCard({ repo }) {
  const color = langColors[repo.language] || '#00d4ff'
  const updated = new Date(repo.updated_at).toLocaleDateString('en-GB', { month:'short', year:'numeric' })
  return (
    <div className="ticker-card">
      <div className="tc-top">
        <div className="tc-title-row">
          <svg className="tc-icon" viewBox="0 0 16 16" fill="currentColor">
            <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8z"/>
          </svg>
          <span className="tc-name">{repo.name}</span>
        </div>
        <p className="tc-desc">{repo.description || <span className="tc-nodesc">No description</span>}</p>
      </div>
      <div className="tc-bottom">
        <div className="tc-meta">
          {repo.language && (
            <span className="tc-lang">
              <span className="tc-dot" style={{ background: color }} />
              {repo.language}
            </span>
          )}
          {repo.stargazers_count > 0 && (
            <span className="tc-stars">
              <svg viewBox="0 0 16 16" fill="currentColor" width="11" height="11">
                <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"/>
              </svg>
              {repo.stargazers_count}
            </span>
          )}
          <span className="tc-updated">{updated}</span>
        </div>
        <a href={repo.html_url} target="_blank" rel="noreferrer" className="tc-link" onClick={e => e.stopPropagation()}>
          <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
          </svg>
          Source
        </a>
      </div>
    </div>
  )
}

export default function GitHubRepos() {
  const [repos, setRepos]     = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState(null)
  const [paused, setPaused]   = useState(false)
  const trackRef              = useRef(null)
  const animRef               = useRef(null)
  const posRef                = useRef(0)

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`)
      .then(r => { if (!r.ok) throw new Error('GitHub API error'); return r.json() })
      .then(data => {
        setRepos(data.filter(r => !r.private).sort((a,b) => new Date(b.updated_at) - new Date(a.updated_at)).slice(0, SHOW_COUNT))
        setLoading(false)
      })
      .catch(e => { setError(e.message); setLoading(false) })
  }, [])

  // Continuous CSS scroll animation — no JS loop needed
  // We duplicate the cards so the loop is seamless
  const doubled = [...repos, ...repos]

  return (
    <section className="gh-repos-section" id="github">
      <div className="container">
        <div className="section-header">
          <p className="section-label">
            <span className="prompt">$</span> gh repo list {GITHUB_USERNAME} --public --limit {SHOW_COUNT}
          </p>
          <h2 className="section-title">
            <span className="gh-live-dot" />
            GitHub Repositories
          </h2>
          <p className="section-sub">
            Live feed · auto-scrolls · updates on every push
          </p>
        </div>

        {loading && (
          <div className="cr-loading">
            <div className="cr-spinner" />
            <span>Fetching from GitHub API...</span>
          </div>
        )}

        {error && (
          <div className="cr-error">
            <svg viewBox="0 0 16 16" fill="currentColor" width="14"><path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm8-3.25a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 018 4.75zm0 7a1 1 0 110-2 1 1 0 010 2z"/></svg>
            Failed: {error}
          </div>
        )}

        {!loading && !error && repos.length > 0 && (
          <>
            {/* Ticker wrapper — fade edges */}
            <div
              className="ticker-wrapper"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <div className="ticker-fade-left" />
              <div className="ticker-fade-right" />

              <div className={`ticker-track ${paused ? 'ticker-track--paused' : ''}`}>
                {doubled.map((repo, i) => (
                  <div className="ticker-item" key={`${repo.id}-${i}`}>
                    <RepoCard repo={repo} />
                  </div>
                ))}
              </div>
            </div>

            <div className="ticker-footer">
              <span className="ticker-hint">
                {paused
                  ? <><span className="accent">⏸</span> Paused — hover to pause, move away to resume</>
                  : <><span className="accent">▶</span> Auto-scrolling · hover to pause</>
                }
              </span>
              <a
                href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
                target="_blank"
                rel="noreferrer"
                className="cr-cta"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
                View all on GitHub
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
