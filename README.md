# German Village Columbus

A modern, SEO-optimized news and information website for German Village in Columbus, Ohio. Part of the Columbus Trend network.

## Tech Stack

- **Framework**: Next.js 14 (App Router, Static Export)
- **Styling**: Tailwind CSS with custom warm color palette
- **Deployment**: Vercel (via GitHub)
- **Content**: TypeScript content modules (no CMS dependency)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & Deploy

```bash
npm run build
```

Static export outputs to `/out` directory, ready for Vercel deployment.

## Content Structure

- `src/content/articles.ts` — 10 data-driven articles
- `src/content/condos.ts` — 10 condo complex profiles
- `src/content/neighborhoods.ts` — 8 neighboring community guides
- `src/content/favorites.ts` — 10 local restaurant/coffee/bar picks
- `src/content/parks.ts` — 4 park profiles

## Deploy to Vercel

1. Push to GitHub
2. Import project in Vercel
3. Framework preset: Next.js
4. Deploy

No environment variables required for static export.
