# Mitiga

AI-native security for modern infrastructure — static marketing site (Next.js App Router).

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

**Zero environment variables required.**

## Deploy on Vercel

1. Push this repo to GitHub.
2. Import the project in Vercel (root directory: `apni-sec` if the repo parent is the workspace).
3. Clear any leftover env vars from the previous full-stack app (database, JWT, email provider keys, etc.).
4. Build command: `npm run build` — Next.js static export (`output: "export"`).
5. Deploy and crawl nav/footer/contact links on the preview URL.

## Founder TODOs

Editable in `content/site.ts` and legal pages:

- Real team bios / photos
- Real LinkedIn, X, GitHub URLs
- Real Cal.com (or equivalent) scheduling link
- Verified metrics or design-partner names (only if true)
- Legal review of Privacy / Terms

Forms use mailto today; swap transport in `lib/forms.ts` for Formspree/Resend later.
