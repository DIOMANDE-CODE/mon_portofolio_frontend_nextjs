# Runbook — Portofolio Frontend

Next.js 16 (App Router). Hébergement : **Vercel** (déploiement sur push).
Une image Docker `standalone` existe aussi (`Dockerfile`).

## Développement local

```bash
npm ci
cp .env.local.example .env.local   # si présent ; sinon créer .env.local
npm run dev                        # http://localhost:3000
```

Variables (`.env.local`, non versionné) :

| Variable | Rôle |
|---|---|
| `NEXT_PUBLIC_API_URL` | URL du backend, **slash final** (`http://localhost:8000/`) |
| `NEXT_PUBLIC_CLOUDINARY_BASE_URL` | base des médias (`https://res.cloudinary.com/<cloud>/`) |
| `NEXT_PUBLIC_SITE_URL` | URL publique du site (canonical, sitemap, OG) |

## Contrôles avant push / déploiement

```bash
npm run verify     # type-check (tsc --noEmit) + lint (0 warning) + build
npm audit          # aucune nouvelle vulnérabilité
```

`next build` ne lance PAS ESLint (Next 16) : `npm run lint` est le garde-fou.

## Déploiement (Vercel)

1. `git push` sur la branche suivie → build + déploiement.
2. Variables `NEXT_PUBLIC_*` définies dans le dashboard Vercel (valeurs de prod).
3. Vérifier après déploiement : page d'accueil, `/projet`, `/projet/<id>`,
   `/visuel`, `/profil`, `/robots.txt`, `/sitemap.xml`.

## Rollback

Dashboard Vercel → onglet *Deployments* → *Promote to Production* sur un
déploiement antérieur. Ou `git revert <sha>` puis push.

## Pannes courantes

| Symptôme | Cause probable |
|---|---|
| Images cassées (`.../https://res.cloudinary...`) | valeur d'image déjà absolue préfixée deux fois — passer par `src/lib/media.ts::mediaUrl()` |
| Build KO sur `Dockerfile` en CI Linux | casse du nom de fichier (`dockerfile` vs `Dockerfile`) |
| `/projet/<id>` en 404 permanent | backend injoignable au build/ISR — vérifier `NEXT_PUBLIC_API_URL` |
| Données figées | cache mémoire de `useFetch` (vidé au rechargement complet de page) |
