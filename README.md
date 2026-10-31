# Sharare Keshvari Portfolio

A responsive multilingual portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. It features a circular project carousel and mobile bottom navigation.

Primary site: `https://shararekeshvari.ir/`

GitHub Pages mirror: `https://shararekeshvari.github.io/`

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
`.github/workflows/deploy-pages.yml`, which builds the static site once and
deploys it to both GitHub Pages and the production server. The server uses an
isolated Caddy container and a restricted `portfolio-deploy` account; see
`deploy/server/` for its configuration.

The server job uses the `PORTFOLIO_DEPLOY_KEY` repository secret and the pinned
SSH host key in `deploy/known_hosts`. Each push creates a release under
`/srv/sharare-portfolio/releases/` and switches the `current` symlink only after
the upload is complete.

## Updating content

Project content and contact links live in `src/data/portfolio.ts` and
`src/data/featured-projects.ts`. The public profile copy for all seven languages
lives in `src/data/editorial-copy.ts`.

Add new public links only when the URL is verified. Project buttons should appear only when real URLs are available.

`NEXT_PUBLIC_SITE_URL` defaults to `https://shararekeshvari.ir` so canonical
and social metadata resolve to the primary domain.
