# Cini Laki — Portfolio (Assignment 14)

Create React App portfolio that highlights coursework and projects, with a Dockerized production build served on **localhost:5575**.

## Run (Dev)
```bash
npm install
npm start        # opens http://localhost:5575
```

## Run (Docker, Production)
```bash
docker build -t laki_cini_portfolio:latest .
docker run --rm -p 5575:5575 --name Laki_Cini_coding_assignment14 laki_cini_portfolio:latest
# open http://127.0.0.1:5575
```

## Requirements Checklist
- **Dockerfile** hosts a production build of CRA ✅
- **Runs at 127.0.0.1:5575** (NGINX `listen 5575`; dev server uses PORT=5575) ✅
- **Container name**: run as `Laki_Cini_coding_assignment14` ✅
- **Working dir in image**: `Laki_Cini_final_site` ✅
- **Sections**: Basic information; Work (Title, Description, Image, Link, Tech list); Skills (Description, Languages/Frameworks, Tools); Resources (Title, Image/Icon, Summary, Link) ✅

## CI/CD Summary (what I'd write up)
- **Continuous Integration**: On every push, run `npm ci`, `npm test`, `npm run build` (optionally via GitHub Actions). This verifies the app builds and tests pass.
- **Continuous Delivery**: Build a Docker image from the production build and push to a container registry (GHCR/Docker Hub). On the server, pull the new image and restart the container exposing port 5575. This pipeline ensures repeatable, reliable deployments.

---

### Component Library
All sections use reusable components from `src/components/UI.jsx`:
- Layout: `Header`, `Section`, `Footer`
- Navigation: `Nav`
- UI atoms: `Card`, `Grid`, `Badge`

