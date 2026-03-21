import './Skills.css'

const CDN = 'https://cdn.simpleicons.org'

// VirtualBox icon for Development Tools card header
const VirtualBoxIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.488 5.463l-9.256-5.346a.453.453 0 00-.453 0L2.52 5.463a.453.453 0 00-.226.392v10.69c0 .162.086.311.226.392l9.259 5.346a.453.453 0 00.453 0l9.256-5.346a.453.453 0 00.226-.392V5.855a.453.453 0 00-.226-.392zM12 2.046l7.907 4.565L12 11.175 4.093 6.611zm-8.8 5.144L11 11.566v9.13L3.2 16.13zm9.6 13.506v-9.13l7.8-4.376v9.13z" fill="#183A61"/>
  </svg>
)

const skillGroups = [
  { iconUrl: `${CDN}/githubactions/2088FF`,  title: 'Cloud & DevOps',             items: ['AWS', 'GitHub Actions', 'Jenkins'] },
  { iconUrl: `${CDN}/docker/2496ED`,          title: 'Containerization',           items: ['Docker', 'Docker Compose', 'Kubernetes (K8s)', 'Helm'] },
  { iconUrl: `${CDN}/ansible/EE0000`,         title: 'Infrastructure & Config',    items: ['Ansible', 'Terraform', 'Server Provisioning'] },
  { iconUrl: `${CDN}/prometheus/E6522C`,      title: 'Monitoring & Observability', items: ['Prometheus', 'Grafana', 'Loki', 'Promtail', 'cAdvisor'] },
  { iconUrl: `${CDN}/wireguard/88171A`,       title: 'VPN & Secure Tunneling',     items: ['WireGuard', 'OpenVPN','Firewall Rules'] },
  { iconUrl: `${CDN}/nginx/009639`,           title: 'Networking & Proxy',         items: ['Nginx', 'TCP/IP', 'DNS & DHCP', 'Load Balancing', 'Reverse Proxy'] },
  { iconUrl: `${CDN}/postgresql/336791`,      title: 'Databases',                  items: ['PostgreSQL', 'MySQL', 'Redis'] },
  { iconUrl: `${CDN}/linux/FCC624`,           title: 'Operating Systems',          items: ['Linux (Ubuntu, RHEL)', 'Windows'] },
  { iconUrl: `${CDN}/python/3776AB`,          title: 'Programming & Scripting',    items: ['C','Python', 'Go', 'Bash'] },
  { iconEl: <VirtualBoxIcon />,               title: 'Development Tools',          items: ['VS Code', 'VirtualBox', 'VMware Workstation'] },
]

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <div className="section-header">
          <p className="section-label"><span className="prompt">$</span> ls skills/</p>
          <h2 className="section-title">Technical Skills</h2>
          {/* <p className="section-sub">Tools and technologies I work with daily</p> */}
        </div>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-card" key={group.title}>
              <div className="skill-card-header">
                <span className="skill-logo">
                  {group.iconEl
                    ? group.iconEl
                    : <img src={group.iconUrl} alt={group.title} width={22} height={22} style={{ objectFit:'contain' }} />
                  }
                </span>
                <h3 className="skill-title">{group.title}</h3>
              </div>
              <ul className="skill-items">
                {group.items.map(item => (
                  <li key={item}><span className="skill-dot" />{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
