# Sharare Keshvari Portfolio

A responsive, dark-first personal portfolio built with Next.js, TypeScript, Tailwind CSS, Framer Motion, Radix UI, and Shadcn-style components.

Production domain: `https://shararekeshvari.ir`

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

The portfolio is exported to `out/` by `npm run build`. Upload the contents of
`out/` to the web root of any static host, such as `public_html` on cPanel or
DirectAdmin. No Node.js server is required.

For `shararekeshvari.ir`, configure the domain provider's DNS records or
nameservers to point to the selected host before enabling HTTPS.

## Updating content

Verified skills, project content, contact links, experience, and education content live in `src/data/portfolio.ts` and `src/components/portfolio.tsx`.

Add new public links only when the URL is verified. Project buttons should appear only when real URLs are available.

`NEXT_PUBLIC_SITE_URL` defaults to `https://shararekeshvari.ir` so canonical and social metadata resolve to the production domain. Override it only for a different deployment origin.
