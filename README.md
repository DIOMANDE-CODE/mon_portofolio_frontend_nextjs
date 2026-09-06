# Portofolio Frontend — Next.js

Site vitrine du portfolio de Diomande Droh Martial. Next.js 16 (App Router),
React 19, TypeScript. Consomme l'API du backend Django. Déployé sur **Vercel**.

- **Architecture** : [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md)
- **Exploitation (dev, build, déploiement, rollback)** : [`docs/RUNBOOK.md`](docs/RUNBOOK.md)
- **Sécurité** : [`docs/SECURITY.md`](docs/SECURITY.md)

## Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack en dev) |
| UI | React 19, Bootstrap 5 (CSS), CSS maison (`public/assets/css`, `src/app/globals.css`) |
| Data | `axios` + hook maison `useFetch` (cache mémoire par URL) |
| Carrousels | `swiper` 12 |
| Analytics | `@vercel/analytics`, `@vercel/speed-insights` |
| Qualité | ESLint (flat config, `--max-warnings 0`), `tsc --noEmit` |

## Démarrage

```bash
npm ci
# créer .env.local (non versionné) :
#   NEXT_PUBLIC_API_URL=http://localhost:8000/          (slash final requis)
#   NEXT_PUBLIC_CLOUDINARY_BASE_URL=https://res.cloudinary.com/<cloud>/
#   NEXT_PUBLIC_SITE_URL=https://diomandedroh.vercel.app
npm run dev            # http://localhost:3000
```

## Scripts

| Script | Effet |
|---|---|
| `npm run dev` | Serveur de dev (Turbopack) |
| `npm run build` | Build de production |
| `npm run start` | Sert le build |
| `npm run type-check` | `tsc --noEmit` |
| `npm run lint` | ESLint, **0 warning toléré** |
| `npm run lint:fix` | ESLint avec correction auto |
| `npm run verify` | `type-check` + `lint` + `build` — à lancer avant chaque push |

> `next build` **ne lance pas** ESLint (Next 16) : `npm run lint` est le garde-fou.

## Pages

| Route | Rendu | Contenu |
|---|---|---|
| `/` | statique | Hero, expertises (slider), quelques projets |
| `/projet` | client | Catalogue + filtre par catégorie |
| `/projet/[id]` | serveur (ISR 300 s) | Détail d'un projet |
| `/visuel` | client | Galerie (coverflow + grille + lightbox) |
| `/profil` | client | Bio, compétences, expériences (expériences en dur) |
| `/contact` | client | Formulaire (POST vers l'API) |
| `/robots.txt`, `/sitemap.xml` | statique | SEO (sitemap dynamique via l'API) |

## Variables d'environnement (`NEXT_PUBLIC_*`)

Toutes exposées au navigateur — **aucun secret ici**.

| Variable | Rôle |
|---|---|
| `NEXT_PUBLIC_API_URL` | Base de l'API backend, **slash final** |
| `NEXT_PUBLIC_CLOUDINARY_BASE_URL` | Base des médias Cloudinary |
| `NEXT_PUBLIC_SITE_URL` | URL publique (canonical, OpenGraph, sitemap) |
