# Mitiga Marketing Site — Execution Plan

## Design direction

Dark-first, typography-led marketing site for **Mitiga**: AI-native security for modern infrastructure.

Inspired by Mavence Lab’s rhythm (left-aligned hero, near-black canvas, hairline borders, mono labels, deep whitespace, honest tone) — not copied. Mitiga diverges with AI-native visuals: attack-graph hero, detection feed, bento micro-animations, electric teal accent.

| Token | Value |
|-------|-------|
| Base | `#0B0D10` |
| Accent | `#2EE6A6` |
| Type | Geist + Geist Mono (`next/font`) |
| Motion | `framer-motion` only; respect `prefers-reduced-motion` |
| Forms | Client validation → mailto:contact@mitiga.io (Formspree swap commented) |
| Deploy | Static export, zero env vars |

## Sitemap

| Route | Purpose |
|-------|---------|
| `/` | Landing (12 sections) |
| `/about` | Mission, principles, team placeholders |
| `/contact` | Form + mailto + schedule CTA |
| `/services/cloud-security` | Scope, methodology, deliverables |
| `/services/red-team` | Same |
| `/services/vapt` | Same |
| `/research` | Article index |
| `/research/[slug]` | 3 research articles |
| `/privacy`, `/terms`, `/security` | Legal + disclosure |
| `not-found` | Branded 404 |

Landing anchors: `#platform`, `#services`, `#approach`, `#research`, `#company`, `#contact`, `#faq`.

## Component inventory

- Shell: SiteHeader, SiteFooter, PageShell
- Landing: Hero, AttackGraph, ProblemStrip, PlatformBento, ServicesGrid, MethodologyStepper, FrameworksRow, AboutPreview, ResearchCards, FaqAccordion, FinalCta, ContactSection, DetectionFeed
- UI: Button, MagneticButton, BorderBeamCard, SectionHeading, Accordion, Logo, icons
- Forms: ContactForm, NewsletterForm
- Content: `content/site.ts`, `content/research/*`

## Animation inventory

Staggered reveals, scroll fade/translate, attack-graph pulse, detection-feed typing, methodology scroll progress, magnetic buttons, border-beam hover, honest number counters, nav blur, FAQ accordion — transform/opacity only, gated by reduced motion.

## File change list

**Delete:** login/register/verify/dashboard/profile, `app/api/**`, `app/lib/**` (backend), old components, `prisma/`, unused public SVGs, backend npm deps.

**Add:** design system, all marketing routes, content layer, framer-motion, static favicon/OG, sitemap/robots, rewritten README.

## Verification checklist

- [ ] lint / tsc / build clean
- [ ] Zero ApniSec / prisma / bcrypt / JWT / RESEND / DATABASE_URL references
- [ ] Every link and CTA resolves
- [ ] Forms validate + mailto path
- [ ] Reduced motion respected
- [ ] Metadata, OG, JSON-LD, sitemap, robots
- [ ] README with Vercel redeploy (zero env)

## Founder TODOs (also marked in content)

- Real team bios and photos
- Real LinkedIn / X / GitHub URLs
- Real Cal.com (or equivalent) scheduling link
- Any verified metrics or design-partner names
- Legal review of privacy/terms
