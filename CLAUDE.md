@AGENTS.md

# 7Mountain Poker - Marketing Website

## Project Overview
Marketing landing page for the 7Mountain Poker Tournament Timer webapp.

- **Website (this project):** https://7mountain-poker.vercel.app
- **Webapp:** https://7mountainpoker.vercel.app
- **GitHub:** https://github.com/rdzdbpsgct-max/7mountain-poker
- **Contact:** sevenmountainpoker@icloud.com

## Key Conventions
- Dark poker theme: background #0f1923, emerald #10b981 accent, gold #f59e0b secondary
- All text content in `src/lib/i18n.ts` (bilingual DE/EN)
- Components use `useLanguage()` hook from LanguageContext
- Screenshots of the real webapp stored in `public/screenshots/`
- ImageLightbox component uses React Portal for click-to-zoom
- AnimatedSection uses IntersectionObserver for scroll animations
- Logo: white card suits (♠ ♥ ♦ ♣) — never colored

## Commands
- `npm run dev` — Start dev server on port 3000
- `npm run build` — Production build
- `git push origin main` — Auto-deploys to Vercel

## Legal Pages
- `/impressum` — German legal notice (§ 5 DDG)
- `/datenschutz` — DSGVO privacy policy
- Both are server-rendered (no client-side language switching)
