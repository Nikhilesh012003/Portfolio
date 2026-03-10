# 🚀 Portfolio — React + Vite + Tailwind + Framer Motion

A stunning, production-grade developer portfolio with cool motion graphics.

## ✨ Features

- **Framer Motion** — smooth page loader, scroll-triggered animations, hover effects, magnetic buttons
- **Custom Particle Field** — interactive canvas with mouse-repulsion particles + connecting lines
- **Glitch effect** on hero name
- **TypeAnimation** — typewriter role cycling
- **Custom cursor** — spring-physics dot + ring with hover scaling
- **Orbiting rings** — animated 3D-feel orbit in hero
- **Scroll reveal** — every section fades in on enter
- **Timeline** — animated experience section
- **Mobile responsive** — hamburger menu with animated overlay
- **Noise texture** — subtle grain overlay

## 🛠 Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI |
| Vite | Build tool |
| Tailwind CSS | Styling |
| framer-motion | Animations |
| react-type-animation | Typewriter effect |
| react-intersection-observer | Scroll triggers |
| react-scroll | Smooth nav scroll |
| react-icons | Icons |

## 🚦 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open in browser
# http://localhost:5173
```

## 🎨 Customization

### Personal Info
Edit `src/data/portfolio.js`:

```js
export const personalInfo = {
  name: "Your Name",          // ← Change this
  email: "your@email.com",    // ← Change this
  github: "https://github.com/yourusername",  // ← Change this
  linkedin: "...",            // ← Change this
}
```

### Add a Project
In `src/data/portfolio.js`, add to the `projects` array:

```js
{
  id: "04",
  category: "Your Category",
  name: "Project Name",
  description: "What it does...",
  stack: ["React", "Node.js", "MongoDB"],
  color: "#your-color",    // hex color for this card's accent
  demo: "https://...",
  github: "https://...",
  featured: false,
}
```

### Add a Skill Group
In `src/data/portfolio.js`, add to the `skills` array:

```js
{
  category: "Category Name",
  icon: "🔥",
  color: "#hexcolor",
  items: ["Skill 1", "Skill 2", "Skill 3"],
}
```

## 📦 Build for Production

```bash
npm run build
# Output in /dist — deploy to Vercel, Netlify, or GitHub Pages
```

## 🌐 Deploy to Vercel (Recommended)

```bash
npm i -g vercel
vercel
```
