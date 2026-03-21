import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from './ThemeContext.jsx'
import './index.css'

// Global scroll reveal for section headers
const observer = new IntersectionObserver(
  entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in-view'); observer.unobserve(e.target) } }),
  { threshold: 0.15 }
)

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.section-header').forEach(el => observer.observe(el))
})

// Also observe after React renders
setTimeout(() => {
  document.querySelectorAll('.section-header').forEach(el => observer.observe(el))
}, 500)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
