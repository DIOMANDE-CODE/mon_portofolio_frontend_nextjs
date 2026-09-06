# Architecture — Portofolio Frontend

## Principe

Site **statique / lecture seule**. Aucune donnée serveur sensible, aucun secret
dans le bundle. Toutes les données viennent de l'API backend via `NEXT_PUBLIC_API_URL`.

```
Navigateur ──▶ Next.js (Vercel)
                 │  pages client : hook useFetch (axios + cache mémoire)
                 │  /projet/[id] : Server Component, fetch ISR (revalidate 300 s)
                 └──▶ API Django ──▶ (PostgreSQL, Cloudinary)
```

## Arborescence

```
portofolio_frontend/
├── src/
│   ├── app/                  # App Router (pages, layouts, robots.ts, sitemap.ts,
│   │   │                     #   loading.tsx, error.tsx, not-found.tsx)
│   │   ├── projet/[id]/      # détail projet (Server Component, ISR)
│   │   ├── profil/ visuel/ contact/
│   │   └── globals.css
│   ├── components/           # composants UI réutilisables (header, footer, sliders…)
│   ├── hooks/                # useFetch (cache mémoire par URL), useMutation
│   ├── lib/                  # helpers purs : dateUtils.ts, media.ts
│   ├── services/             # api.ts — instance axios (baseURL = NEXT_PUBLIC_API_URL)
│   └── types/                # déclarations .d.ts (css modules, swiper/css)
├── public/                   # assets servis tels quels (vendor CSS/JS, images, favicons)
│   └── assets/               # Bootstrap, AOS, Swiper, GLightbox, main.css…
├── docs/                     # ARCHITECTURE, RUNBOOK, SECURITY
├── next.config.ts            # headers de sécurité, remotePatterns images, standalone
├── eslint.config.mjs         # flat config (eslint-config-next 16)
├── tsconfig.json             # alias "@/*" -> "./src/*"
└── Dockerfile                # build standalone (alternative à Vercel)
```

> `public/` reste à la **racine** (exigence Next). `src/app/layout.tsx` importe
> les CSS de `public/` en relatif (`../../public/assets/...`) car `@/` pointe
> désormais vers `src/`.

## Récupération des données

- **Composants client** (`"use client"`) → `useFetch(url)` :
  - cache mémoire partagé (`Map` module-level), clé = URL, vidé au rechargement complet ;
  - `AbortController` sur démontage ;
  - retourne `{ data, loading, error }`.
- **`/projet/[id]`** → Server Component `async`, `fetch(..., { next: { revalidate: 300 } })`.
  `generateMetadata` et le rendu partagent le même fetch (dédoublonné par le cache Next).

## Médias

`src/lib/media.ts::mediaUrl(path)` :
- URL déjà absolue (`http(s)://`) ou `data:` → renvoyée telle quelle
  (les valeurs par défaut des modèles Django sont des URLs Cloudinary complètes) ;
- sinon → préfixée par `NEXT_PUBLIC_CLOUDINARY_BASE_URL`.

Toujours passer par `mediaUrl()` — ne jamais concaténer `base + valeur` à la main
(double préfixe garanti sur les valeurs par défaut).

## Sécurité & en-têtes

`next.config.ts` : `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`,
`Referrer-Policy: strict-origin-when-cross-origin`, `poweredByHeader: false`,
`remotePatterns` limité à Cloudinary + backend. Détail : [`SECURITY.md`](SECURITY.md).

## Choix structurants

- **`src/` + couches minimales** (`app`, `components`, `hooks`, `lib`, `services`,
  `types`). Pas de `store/`, `features/`, `providers/`, `schemas/` : le site n'a
  ni état global ni logique métier côté client.
- **`useFetch` maison** plutôt que React Query : une seule forme de requête
  (GET simple), pas besoin d'invalidation fine ni de mutations optimistes.
- **ISR sur `/projet/[id]`** plutôt que `no-store` : le backend a déjà son cache,
  300 s de fraîcheur suffisent pour un portfolio.
- **`--max-warnings 0`** au lint : les 3 exceptions `react-hooks/set-state-in-effect`
  restantes sont désactivées ligne par ligne avec justification.
