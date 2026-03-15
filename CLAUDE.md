# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# Fitness-Complete.com — Project Context

## What this project is
Affiliate website for fitness starter sets, targeting the US market (English).
Primary audience: beginners starting a sport, and people gifting a gym membership to a friend.
Domain: fitness-complete.com

## Business model
- Affiliate commissions via Amazon Associates US (primary), Impact.com (Transparent Labs, TRX, Onnit)
- No physical products, no user accounts, no payment processing on this site
- Revenue comes from outbound affiliate links only

## Target sports (in priority order)
1. Gym / Weightlifting (strongest gift angle)
2. Pilates (fastest growing, strong female audience)
3. Running (largest total user base)
4. Home Gym
5. Boxing

## Content philosophy
- Every product recommendation must have a clear "why this makes sense for a beginner" rationale
- Product selection based on Reddit community consensus (r/fitness, r/xxfitness, r/beginnerfitness) + Amazon bestseller reviews
- Three-tier comparison per product category: Budget / Mid-Range / Premium
- Transparency about methodology builds trust and differentiates from generic AI content
- Never recommend a product because of commission rate — commission is a tiebreaker only
- Never include general consumer electronics (headphones, smartwatches, fitness trackers) in starter kits. These are personal choices that exist outside the sport-specific gear decision.

## Tech stack
- Astro (static site generator)
- Tailwind CSS for styling
- No backend, no database, no user data collected
- Deployed on Vercel

## Security rules
- Affiliate link IDs and API keys always in .env files, never hardcoded
- .env is in .gitignore — never commit secrets
- No user input fields that could be vectors for injection
- No dynamic content rendered from external sources without sanitization

## Affiliate programs (to be activated when site is live)
- Amazon Associates US: partners.amazon.com (needs live site for approval)
- Impact.com: Transparent Labs, TRX, Onnit
- Awin US: secondary, for any relevant US programs

## Affiliate retailer strategy
Never use only Amazon for all products. Distribute links across specialist US retailers where appropriate:
- Dick's Sporting Goods (dicks.com) — apparel, bags, general sports gear, has affiliate program via Impact.com
- REI (rei.com) — outdoor, running, quality gear, affiliate via Impact.com
- Rogue Fitness (roguefitness.com) — serious gym equipment, lifting gear, affiliate via Impact.com
- YETI (yeti.com) — premium drinkware, direct affiliate program
- Transparent Labs (transparentlabs.com) — supplements, via Impact.com
- TRX Training (trxtraining.com) — suspension training, via Impact.com
- Onnit (onnit.com) — supplements and functional fitness gear, via Impact.com
- Amazon Associates US — fallback for everything else, and for budget tier options
Rule: Premium tier products should ideally link to the brand's own site or a specialist retailer, not Amazon.

## Site structure
- / (homepage with sport category overview)
- /gym-starter-set
- /pilates-starter-set
- /running-starter-set
- /home-gym-starter-set
- /boxing-starter-set
- /gifts (gift-focused landing page)
- /blog (SEO and LLM-optimized articles)

## Tone of voice
- Direct and opinionated — real recommendations, not "it depends"
- Explains the why behind every product choice
- Mentions tradeoffs honestly (e.g. "this is cheaper but the quality shows")
- Not corporate, not overly enthusiastic — like advice from a friend who goes to the gym

## Development commands
```bash
npm run dev      # Start local dev server at localhost:4321
npm run build    # Build production site to ./dist/
npm run preview  # Preview production build locally
```

## Architecture
- `src/pages/` — File-based routing; each .astro file is a route
- `src/layouts/` — Shared HTML document wrappers (Layout.astro)
- `src/components/` — Reusable Astro components
- `src/assets/` — Images and SVGs imported and optimized by Astro
- `public/` — Static files served as-is (favicon, etc.)
- TypeScript strict mode enabled via `astro/tsconfigs/strict`
