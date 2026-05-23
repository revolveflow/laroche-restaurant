La Roche Restaurant (Frontend Only)

This repository is a frontend-only React landing page, structured to align with the BBQ-Bites layout for Azure Static Web Apps hosting.

Tech
- React + Vite
- React Router
- Framer Motion
- Lucide Icons

Structure (BBQ-Bites aligned)
- src/
  - components/bbq/
  - pages/
  - App.jsx
  - main.jsx
  - index.css
- public/
- index.html
- vite.config.js
- package.json

No backend
- No API routes
- No Node/Express server
- Fully static landing page

Local dev
1) npm install
2) npm run dev

Production build
- npm run build
- output: dist/

Azure Static Web Apps
- app_location: /
- output_location: dist
- Node build command: npm run build
