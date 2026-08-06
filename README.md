# Sharare Keshvari Portfolio

A responsive personal portfolio built with Next.js, TypeScript, Tailwind CSS,
Framer Motion, Radix UI, and reusable UI components.

Production site: `https://shararekeshvari.github.io`

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production checks

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Static deployment

`npm run build` exports the portfolio to `out/`. The included GitHub Actions
workflow publishes that directory to GitHub Pages. No Node.js server is required
at runtime.

## Updating verified content

Skills, project case studies, experience, and contact links live in
`src/data/portfolio.ts`. Keep unavailable personal details and links omitted
instead of adding disabled controls or placeholder copy.

`NEXT_PUBLIC_SITE_URL` controls canonical, Open Graph, sitemap, robots, and
structured-data URLs. It defaults to the GitHub Pages production origin.
