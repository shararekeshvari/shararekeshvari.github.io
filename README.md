# Sharare Keshvari Portfolio

A responsive multilingual portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. It features a circular project carousel and mobile bottom navigation.

Live site: `https://shararekeshvari.github.io/`

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

The portfolio is exported to `out/` by `npm run build`. Pushing to `main` runs
`.github/workflows/deploy-pages.yml`, which builds and deploys `out/` to GitHub
Pages.

## Updating content

Project content and contact links live in `src/data/portfolio.ts` and
`src/data/featured-projects.ts`. The public profile copy for all seven languages
lives in `src/data/editorial-copy.ts`.

Add new public links only when the URL is verified. Project buttons should appear only when real URLs are available.

`NEXT_PUBLIC_SITE_URL` defaults to `https://shararekeshvari.github.io` so
canonical and social metadata resolve to the live site.
