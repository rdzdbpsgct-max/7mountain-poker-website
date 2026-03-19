# 7Mountain Poker - Marketing Website

Marketing- und Landing-Page for the [7Mountain Poker Tournament Timer](https://7mountainpoker.vercel.app).

**Live:** https://7mountain-poker.vercel.app

## Tech Stack

- **Framework:** Next.js 16.2 (App Router, Turbopack)
- **Styling:** Tailwind CSS 4, custom dark poker theme
- **Animations:** Framer Motion, CSS IntersectionObserver scroll animations
- **Language:** TypeScript, bilingual (DE/EN) with runtime i18n
- **Hosting:** Vercel (auto-deploy via GitHub)
- **OG Image:** Dynamic Edge-generated Open Graph image

## Project Structure

```
src/
  app/
    page.tsx              # Main landing page (client-side, LanguageProvider)
    layout.tsx            # Root layout with SEO metadata + JSON-LD
    globals.css           # Tailwind theme, animations, poker-themed utilities
    opengraph-image.tsx   # Dynamic OG image (Edge runtime)
    impressum/page.tsx    # Legal notice (Impressum, § 5 DDG)
    datenschutz/page.tsx  # Privacy policy (DSGVO-compliant)
  components/
    Navigation.tsx        # Fixed header with nav links, language switcher, CTA
    HeroSection.tsx       # Hero with badge, headline, CTAs, app screenshot
    FeaturesSection.tsx   # 4 core + 4 advanced features grid
    TVRemoteSection.tsx   # TV mode screenshot + phone remote mockup
    DemoSection.tsx       # 3-step "How it works" + screenshot gallery
    ProFeaturesSection.tsx # 6 pro features (voice, templates, keyboard, etc.)
    PowerToolsSection.tsx # 12 power tools (ICM, side pot, bounty, etc.)
    QuickStartSection.tsx # 3 quick start modes (Turbo/Standard/Deep Stack)
    TestimonialsSection.tsx # 3 testimonial cards
    CTASection.tsx        # Final call-to-action
    Footer.tsx            # Footer with product/legal links
    ImageLightbox.tsx     # Click-to-zoom lightbox with React Portal
    AnimatedSection.tsx   # IntersectionObserver scroll-triggered animations
    LanguageContext.tsx    # React Context for DE/EN language switching
  lib/
    i18n.ts               # All translations (DE + EN)
public/
  screenshots/            # Real app screenshots (timer, TV mode, liga, etc.)
  robots.txt              # Crawler rules
  sitemap.xml             # Sitemap for SEO
```

## Sections on the Landing Page

1. **Hero** - Headline, "Kostenlos & ohne Anmeldung" badge, app screenshot
2. **Features** - 4 core + 4 advanced features
3. **TV & Remote** - TV mode screenshot + smartphone remote mockup
4. **How It Works** - 3-step setup process with screenshot gallery
5. **Pro Features** - 6 professional features
6. **Power Tools** - 12 advanced tools (ICM, Side Pot, Bounty, etc.)
7. **Quick Start** - 3 preset tournament modes
8. **Testimonials** - User quotes
9. **CTA** - Final call-to-action with trust badges

## SEO

- Open Graph + Twitter Card meta tags with dynamic OG image
- JSON-LD structured data (WebApplication schema)
- Canonical URL, sitemap.xml, robots.txt
- Expanded keywords for poker timer search queries

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # Production build
```

## Contact

Michael Prill - sevenmountainpoker@icloud.com
