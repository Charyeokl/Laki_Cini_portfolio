# Cini Laki — Portfolio (Assignment 14)

Create React App portfolio that highlights coursework and projects, with a Dockerized production build served on **localhost:5575**.

---

## Prerequisites
- **Node.js 18+** and **npm**
- **Docker** (for the production container)

---

## Run (Docker, Production)
docker build -t laki_cini_portfolio:latest .
docker run --rm -p 5575:5575 --name laki_cini_coding_assignment14 laki_cini_portfolio:latest
# open http://127.0.0.1:5575

---

## Quality Gates (local commands)
npm run format:check   # Prettier verification
npm run lint           # ESLint (fails on errors)
npm test               # Unit tests
npm run build          # Production build to /build

## Run (Dev)
```bash
npm install
npm start        # opens http://localhost:5575
