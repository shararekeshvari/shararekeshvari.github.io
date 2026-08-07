# Sharare Keshvari — Frontend Developer Portfolio

A responsive, accessible portfolio presenting verified frontend experience and
product case studies. Built with Next.js, React, TypeScript, Tailwind CSS,
Framer Motion, and a small set of reusable components.

Production site: `https://shararekeshvari.github.io`

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
npm run lint
npm run typecheck
npm run build
```

Run all three with `npm run check`.

The production build generates a fully static export in `out/`.

## Project structure

- `src/app/` contains the App Router entry points and metadata routes.
- `src/components/sections/` contains the portfolio’s major page sections.
- `src/components/` contains shared interactive and presentation components.
- `src/data/portfolio.ts` is the source of verified skills, experience, projects,
  languages, and contact details.
- `src/lib/site.ts` centralizes the production URL and site description.

The main navigation follows the page order, and the quick-navigation menu opens
with `Ctrl+K` or `Command+K`.

## Content and deployment

Keep unavailable personal details, metrics, and links omitted or clearly marked
as unavailable. Do not add placeholders that could be mistaken for verified
experience.

`NEXT_PUBLIC_SITE_URL` controls canonical, Open Graph, sitemap, robots, and
structured-data URLs. It defaults to the GitHub Pages production origin. The
included GitHub Actions workflow publishes the static `out/` directory.
