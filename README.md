La Roche Restaurant Website (React + Node)

A full-stack restaurant website inspired by the common BBQ-Bites structure:
- client/ (React + Vite frontend)
- server/ (Node + Express API)

Business profile used for content (best-effort web research):
- Name: La Roche / La Rouche Lebanese Restaurant
- Area: Sydney, NSW (Greenacre/Guildford references)
- Style: Lebanese charcoal grill, family dining

Features
- Hero section, menu cards, contact/location, reservation form
- API endpoints:
  - GET /api/health
  - GET /api/business
  - GET /api/menu
  - POST /api/reservations

Run locally
1) Server
   cd server
   npm install
   npm run dev

2) Client (new terminal)
   cd client
   cp .env.example .env
   npm install
   npm run dev

Then open http://localhost:5173

Notes
- Reservation endpoint currently returns confirmation JSON (no database/email yet).
- You can replace menu items and branding assets easily in:
  - server/index.js (business/menu data)
  - client/src/App.jsx + client/src/App.css
