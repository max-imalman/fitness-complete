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
- Never use em dashes (—), en dashes (–), or hyphens used as dashes in any website content, product descriptions, or page text. Rewrite sentences to flow naturally without dashes.
- Never include general consumer electronics (headphones, smartwatches, fitness trackers) in starter kits. These are personal choices that exist outside the sport-specific gear decision.
- Always check for product recalls before recommending fitness equipment. The Bowflex SelectTech 552 original model was recalled June 2025. We recommend the replacement Results Series 552 instead.

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

## Product Scoring System

Every product recommendation is scored out of 100 points across three criteria:

### Amazon Verified Purchase Reviews (50 points)
- 40-50: Strong positive pattern in reviews written 6+ months after purchase, high volume of verified reviews, no recurring quality complaints
- 25-39: Decent reviews but some durability concerns or low volume
- 0-24: Mixed or poor long-term reviews

### Independent Physical Tests (35 points)
- 30-35: Tested and recommended by 2+ independent sources (Wirecutter, Garage Gym Reviews, CNN Underscored, OutdoorGearLab, GearJunkie)
- 15-29: Recommended by 1 independent source
- 0-14: No independent test found, or tested but not recommended

### Beginner Failure Prevention (15 points)
- 12-15: Product design actively prevents common beginner mistakes
- 6-11: Neutral, does not cause or prevent beginner mistakes
- 0-5: Product design could lead beginners into common mistakes

### Commission rule
Commission rate is never a scoring factor. If two products score identically, the one with lower commission wins our recommendation to prove independence.

### Score thresholds for tier placement
- Budget pick: Best scoring product under $30
- Mid-Range pick: Best scoring product $30-80
- Premium pick: Best scoring product over $80
- Minimum score to be included: 45/100

For each product on the site, store the score breakdown in a comment in the .astro file directly above the product recommendation, like this:
<!-- SCORE: Amazon=45/50 (1200+ verified reviews, strong 6mo+ pattern) | Tests=30/35 (Wirecutter #1, GGR recommended) | Beginner=14/15 (FreeSip spout solves one-handed drinking) | TOTAL=89/100 -->

## YouTube video IDs to replace

Each sport page has a placeholder video ID in its "See it in action" section. To replace:
Search YouTube for each sport + "beginner honest review no sponsorship 2025". Pick a channel with under 500k subscribers and no disclosed sponsorship for the products being reviewed. Replace the placeholder in the `src` attribute of the iframe.

- gym-starter-set.astro: `VIDEO_ID_GYM`
- pilates-starter-set.astro: `VIDEO_ID_PILATES`
- running-starter-set.astro: `VIDEO_ID_RUNNING`
- home-gym-starter-set.astro: `VIDEO_ID_HOMEGYM`
- boxing-starter-set.astro: `VIDEO_ID_BOXING`

## Monthly Link Maintenance Checklist

Check every Amazon product link once per month (approx. 20 minutes total).
Open each link and verify the product is still available and the price is roughly accurate.

If a product is unavailable:
1. Search Amazon for the closest replacement with same specs
2. Update the ASIN in the link
3. Update the product name and price if changed
4. Commit with message "Monthly link check - updated [product name]"

Products to check by page:

GYM: FocusGear Gym Bag, Owala FreeSip, Nalgene 32oz, YETI Rambler, Ihuan Gloves, Harbinger Gloves, BlenderBottle Classic, Hydra Cup, Rainleaf Towel

PILATES: Gaiam Mat, Manduka PRO Lite, Tavi Noir Socks, ToeSox, Fit Simplify Bands, Theraband Loops, Hydro Flask

RUNNING: ASICS Gel-Contend 8, Brooks Ghost 17, HOKA Clifton 10, Balega Socks, Darn Tough Socks, FlipBelt, Nathan SpeedShot, Nike Dri-FIT

HOME GYM: Amazon Basics Dumbbell, Bowflex 552, Fit Simplify Bands, Bodylastics Bands, Iron Gym Bar, Perfect Fitness Bar, Gaiam Mat, TriggerPoint Foam Roller

PICKLEBALL: Niupipo Paddle, Vatic Pro Prism Flash, Franklin X-40 Balls, Skechers Viper Court Pro, K-Swiss Supreme, Babolat Jet Mach 3, Mangrove Bag, CRBN Backpack, HEAD Impulse Eyewear, Oakley Flak 2.0

Last checked: March 2026
