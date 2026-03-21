# Nafis Rahman — Portfolio

Personal portfolio website built with **React + Vite**, deployed on **GitHub Pages**.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## 📦 Deploy to GitHub Pages

### One-time setup:
1. Create a new GitHub repo (e.g. `portfolio`)
2. In `vite.config.js`, set `base` to your repo name:
   ```js
   base: '/portfolio/',   // must match your repo name exactly
   ```
3. Push your code to the `main` branch
4. Go to repo **Settings → Pages → Source → GitHub Actions**
5. The workflow in `.github/workflows/deploy.yml` will auto-deploy on every push

Your site will be live at:
```
https://<your-github-username>.github.io/portfolio/
```

## 🗂 Project Structure

```
portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / .css
│   │   ├── Hero.jsx   / .css
│   │   ├── Skills.jsx / .css
│   │   ├── Projects.jsx / .css
│   │   └── Contact.jsx / .css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

## ✏️ Customization

| What | Where |
|---|---|
| Your name / bio | `src/components/Hero.jsx` |
| Skills list | `src/components/Skills.jsx` |
| Projects | `src/components/Projects.jsx` |
| Contact links | `src/components/Contact.jsx` |
| Colors / fonts | `src/index.css` (CSS variables) |
| Repo base path | `vite.config.js` → `base` |
