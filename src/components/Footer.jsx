import './Footer.css'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {year} Md Nafis Rahman · All rights reserved</p>
          <p className="footer-built">Built with React + Vite </p>
        </div>
      </div>
    </footer>
  )
}
