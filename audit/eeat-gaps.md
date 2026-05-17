# E-E-A-T Gaps — fitness-complete.com
> Audit date: 2026-05-17
> E-E-A-T = Experience, Expertise, Authoritativeness, Trustworthiness (Google's quality evaluator guidelines)

---

## Sitewide gaps (affect every page)

| Signal | Status | Impact | Fix |
|--------|--------|--------|-----|
| Named author on any page | MISSING | Critical | Phase 2.1 — operator must provide real person |
| Author photo | MISSING | High | Phase 2.1 — operator must provide |
| Author credentials/bio | MISSING | High | Phase 2.1 — operator must provide |
| Author social profiles (X/LinkedIn) | MISSING | Medium | Phase 2.1 |
| `/authors/[slug]` page | MISSING | High | Phase 2.1 |
| `meta name="author"` tag | MISSING | Low-Medium | Phase 1.3 (unblocked once author exists) |
| Affiliate disclosure above fold | MISSING on 13/15 pages | High (FTC + trust) | Phase 1.6 — code change, unblocked |
| "Last reviewed" date on commercial pages | MISSING | Medium | Phase 2.3 — unblocked |
| Organization schema (sitewide) | MISSING | Medium | Phase 1.2 — unblocked |

---

## Per-page E-E-A-T checklist

### `/` — Homepage
- [ ] Named author or editorial team mentioned
- [ ] Credentials or methodology summary visible (only linked to /how-we-pick, not summarized)
- [ ] Affiliate disclosure above fold
- [x] Research sources cited (footer links to Reddit, Wirecutter, Garage Gym Reviews)
- [x] How-we-pick link in body
- [ ] Original photography (all 6 images are Unsplash stock)
- [ ] Organization schema

### `/gym-starter-set`
- [ ] Named author with byline
- [ ] "Last reviewed" date visible on page
- [ ] Affiliate disclosure above fold
- [x] Product scoring rubric present (inline tooltips)
- [x] Reddit quotes present (direct community consensus reference)
- [x] Independent test sources cited (Wirecutter, CNN Underscored references)
- [ ] Original product photos (all Unsplash)
- [ ] Real testing notes ("I measured", "I wore this for 6 weeks")
- [ ] Author linked to JSON-LD schema

### `/pilates-starter-set`
- [ ] Named author with byline
- [ ] "Last reviewed" date visible on page
- [ ] Affiliate disclosure above fold
- [ ] JSON-LD schema (missing entirely)
- [ ] Original product photos (hero is Unsplash)
- [ ] Real testing notes

### `/running-starter-set`
- [ ] Named author with byline
- [ ] "Last reviewed" date visible on page
- [ ] Affiliate disclosure above fold
- [ ] JSON-LD schema (missing)
- [ ] Original product photos
- [ ] Real testing notes
- [ ] Note: shoe fitting advice without author credentials could seem unqualified

### `/home-gym-starter-set`
- [ ] Named author with byline
- [ ] "Last reviewed" date visible on page
- [ ] Affiliate disclosure above fold
- [x] Safety callouts present (Bowflex recall warning, pull-up bar doorframe note)
- [ ] JSON-LD schema (missing)
- [ ] Original product photos

### `/pickleball-starter-set`
- [ ] Named author with byline
- [ ] "Last reviewed" date visible on page
- [ ] Affiliate disclosure above fold
- [x] JSON-LD schema present (partial)
- [x] Eye protection safety note present
- [ ] Original product photos

### `/gifts`
- [ ] Named author or editorial perspective
- [ ] Affiliate disclosure above fold
- [ ] "Last updated" date visible on page
- [ ] JSON-LD schema

### `/about`
- [x] Affiliate disclosure above fold (the "How we make money" section serves this role)
- [ ] Real name of founder/editor
- [ ] Real photo
- [ ] Real location
- [ ] Credentials of person doing the picks
- [ ] Contact email visible (present in privacy policy but not about page)

### `/how-we-pick`
- [x] Affiliate disclosure visible (commission section)
- [ ] Named reviewer
- [ ] Specific Reddit threads with permalinks (methodology describes Reddit but doesn't link to specific threads)
- [ ] Specific test dates ("we tested in March 2026")
- [ ] Specific exclusion thresholds (score system is described in CLAUDE.md but not on the page itself)
- [ ] "Last reviewed" date for the methodology itself
- [ ] Update log

### Blog posts (all 4)
- [x] "Last updated: March 2026" visible at top
- [x] Research citations present (studies, data sources)
- [ ] Named author with byline
- [ ] Author credentials relevant to fitness content
- [ ] Affiliate disclosure above fold (blog posts link to starter kits)
- [ ] JSON-LD BlogPosting schema with datePublished
- [ ] Original images (all blog posts have no images at all — text only)

---

## Priority ranking of gaps by SEO impact

### Tier 1 — Blocks everything else
1. **Real author identity** — Google's QRGs explicitly downgrade anonymous commercial content. This is the single most important fix. Operator must decide who the author is before any E-E-A-T work can land.

### Tier 2 — High-impact, some are code-only
2. **Affiliate disclosure above fold** — FTC compliance + trust signal. Code-only fix, unblocked.
3. **"Last reviewed" date** on all starter kit pages — signals freshness. Code-only once operator confirms dates.
4. **BlogPosting schema** on all blog posts — enables rich results and signals structure to Google.
5. **BreadcrumbList schema** on all pages — quick win for navigation structure.

### Tier 3 — Requires operator content
6. **About page with real details** — name, photo, credentials.
7. **Methodology page specifics** — specific Reddit threads, real test dates, exclusion thresholds.
8. **Author pages** — full bio, credentials, article list.

### Tier 4 — Longer term
9. **Original photography** — every Unsplash image is a negative signal. Replace as fast as operator can produce originals.
10. **Real testing notes** — "I wore this" language that signals first-hand experience.
11. **Backlinks** — no on-page E-E-A-T improvement compensates for zero domain authority. Operator needs outreach strategy.

---

## What Claude Code cannot do (operator must provide)

These items cannot be invented or generated. The site must not publish them until the operator provides them:

1. Real author name + credentials + photo
2. Real publication dates for each piece of content
3. Specific Reddit thread permalinks referenced in research
4. Original product photos or lifestyle images
5. First-hand testing observations ("I used this for X weeks and found...")
6. Any claim that a product was "tested" — this cannot be fabricated
