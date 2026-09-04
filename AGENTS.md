# Base44 Dev Environment

## Project Overview
- **Millennium Investigations, Inc.** — a React + Vite frontend (no backend, no database, no external credentials).
- React 18 + Vite 6, React Router, Tailwind CSS, Radix UI, Framer Motion, Recharts, Leaflet maps.

## Running the App
```bash
docker compose -f docker-compose.base44.yml up -d
```
- Web entry point: http://localhost:3000
- Vite dev server runs inside a `node:22-alpine` container with the source bind-mounted; live reload is active.
- `npm install` runs automatically on container start; `node_modules` is in a named volume.

## Key Dev Adjustments
- **Base path**: The app originally used `base: "/millennium/"` (for subpath production deployment) and `Router basename="/millennium"`. Both now fall back to that default but read `VITE_BASE` env var — set to `/` in the compose so the app serves at root for the preview.
- **Vite server**: `server.host: true` and `server.allowedHosts: true` added so the preview's external proxy hostname is accepted.

## Verification
- `curl -sf http://localhost:3000/` returns the app's HTML.
- `curl -sf -H "Host: external-preview.example.com" http://localhost:3000/src/main.jsx` returns transformed JS (modules load through the proxy).
