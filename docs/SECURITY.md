# Sécurité — Portofolio Frontend

## Signaler une faille

Écrire à **diomandedrohmartial01@gmail.com** (objet : `SECURITY`).

## Périmètre

Site Next.js **statique / lecture seule** : consomme l'API publique du
backend, ne détient aucun secret serveur. Seules variables exposées :
`NEXT_PUBLIC_*` (URL d'API, base Cloudinary, URL du site) — non sensibles
par conception.

## Mesures en place

| Domaine | Mesure |
|---|---|
| En-têtes | `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, `Referrer-Policy: strict-origin-when-cross-origin`, `X-DNS-Prefetch-Control` (`next.config.ts::headers()`) |
| `X-Powered-By` | désactivé (`poweredByHeader: false`) |
| Images distantes | `remotePatterns` restreint (Cloudinary + backend) |
| Secrets | aucun `.env` versionné ; pas de clé serveur dans le bundle |
| Dépendances | `package-lock.json` versionné ; `npm audit` ; `overrides` pour les CVE transitives (`sharp`) |
| Lint | `eslint . --max-warnings 0` ; `npm run verify` = type-check + lint + build |

## `npm audit` — état

`npm run verify` **n'inclut pas** `npm audit` (il resterait bloqué en
permanence, voir ci-dessous). Le lancer manuellement avant chaque release et
traiter ce qui a un correctif disponible.

- **`sharp`** : CVE libvips corrigées via `overrides` (`sharp: ^0.35.0`
  dans `package.json`). ✅
- **`swiper`** (dépendance directe, `^11`) : advisory GHSA-hmx5-qpq5-p643
  (prototype pollution). Correctif = migration vers `swiper@14` (breaking :
  API des modules d'effets modifiée, `visuel/page.tsx` + `SwiperSlider.tsx`
  à adapter). **Tâche dédiée**, pas via `overrides`.
- **Chaîne Next.js** (`next`, `axios`, `postcss`, `nanoid`, `form-data`,
  `follow-redirects`) : `npm audit` remonte de nombreux avis pour lesquels
  **aucune version corrigée n'est encore publiée** (toutes déjà à la
  dernière version). Rien à faire tant qu'un patch amont n'existe pas ;
  ajouter un `overrides` dès qu'une version corrigée sort.

## Autres points ouverts

- Pas de CSP. Envisageable via `next.config.ts::headers()` en
  `Content-Security-Policy-Report-Only` d'abord (images Cloudinary,
  polices `next/font` auto-hébergées, scripts vendor locaux).

## Avant déploiement

```bash
npm run verify        # type-check + lint (0 warning) + build
npm audit             # vérifier qu'aucune NOUVELLE vuln n'est apparue
```
