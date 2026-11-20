# Mitiga

AI native security for modern infrastructure. Static marketing site (Next.js App Router).

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint
npm run typecheck
npm run build
```

Static export output lands in `out/`. Preview with any static server, e.g. `npx serve out`.

No environment variables required.

## Deploy on Vercel

1. Push this repo to GitHub.
2. Import the project in Vercel (root directory: `apni-sec` if the repo parent is the workspace).
3. Clear any leftover env vars from the previous full-stack app.
4. Build command: `npm run build`.
5. Deploy and check nav, footer, and contact links on the preview URL.

## Notes

- Edit site copy in `content/site.ts` and research articles in `content/research.ts`.
- LinkedIn URL is still a standing link to update when the company page is live.
- Contact and newsletter forms use mailto today; swap transport in `lib/forms.ts` when you add a form provider.
