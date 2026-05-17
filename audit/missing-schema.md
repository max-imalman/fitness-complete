# Missing Structured Data — fitness-complete.com
> Audit date: 2026-05-17

## Current state

| Page | Has JSON-LD | Schema type(s) present |
|------|-------------|----------------------|
| `/` | No | — |
| `/gym-starter-set` | Yes (partial) | ItemList with 5 ListItems (name + description only) |
| `/pilates-starter-set` | No | — |
| `/running-starter-set` | No | — |
| `/home-gym-starter-set` | No | — |
| `/pickleball-starter-set` | Yes (partial) | ItemList with 5 ListItems (name + description only) |
| `/gifts` | No | — |
| `/about` | No | — |
| `/how-we-pick` | No | — |
| `/privacy-policy` | No | — |
| `/blog` | No | — |
| `/blog/how-many-days-per-week-gym-beginner` | No | — |
| `/blog/how-long-to-see-results-from-pilates` | No | — |
| `/blog/home-gym-apartment-under-500` | No | — |
| `/blog/how-to-start-playing-pickleball` | No | — |

The two existing ItemList schemas are missing Product details (price, URL, image, offers). They are not eligible for Google Rich Results in their current form.

---

## Required schema additions

### All pages — sitewide

**Organization** (once, on homepage or via Layout)
```json
{
  "@type": "Organization",
  "name": "fitness-complete",
  "url": "https://www.fitness-complete.com",
  "logo": "https://www.fitness-complete.com/favicon.svg",
  "contactPoint": { "@type": "ContactPoint", "email": "hello@fitness-complete.com" }
}
```

**WebSite** with SearchAction (homepage)
```json
{
  "@type": "WebSite",
  "name": "fitness-complete",
  "url": "https://www.fitness-complete.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.fitness-complete.com/?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```
Note: SearchAction only makes sense if site search exists. If not implemented, omit.

**BreadcrumbList** — all non-homepage pages
```json
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.fitness-complete.com/" },
    { "@type": "ListItem", "position": 2, "name": "Gym Starter Kit", "item": "https://www.fitness-complete.com/gym-starter-set" }
  ]
}
```

---

### Starter kit pages (/gym-starter-set, /pilates-starter-set, etc.)

**Replace existing ItemList with full Product + Offer schema per product.**

Each product needs:
```json
{
  "@type": "Product",
  "name": "BlenderBottle Classic V2",
  "description": "...",
  "image": "...",
  "brand": { "@type": "Brand", "name": "BlenderBottle" },
  "offers": {
    "@type": "AggregateOffer",
    "lowPrice": "9.99",
    "highPrice": "49.99",
    "priceCurrency": "USD",
    "offerCount": 3,
    "availability": "https://schema.org/InStock"
  },
  "review": {
    "@type": "Review",
    "reviewRating": { "@type": "Rating", "ratingValue": "82", "bestRating": "100" },
    "author": { "@type": "Person", "name": "TODO[operator]: real author name" }
  }
}
```

**IMPORTANT:** Do not add `AggregateRating` until real aggregated data is wired in. Fabricated ratings violate Google guidelines and may trigger manual penalties.

---

### Blog posts

**BlogPosting** schema for each article:
```json
{
  "@type": "BlogPosting",
  "headline": "How Many Days a Week Should a Beginner Go to the Gym?",
  "datePublished": "2026-03-01",
  "dateModified": "2026-03-01",
  "author": {
    "@type": "Person",
    "name": "TODO[operator]: real author name",
    "url": "https://www.fitness-complete.com/authors/[slug]"
  },
  "publisher": {
    "@type": "Organization",
    "name": "fitness-complete",
    "logo": { "@type": "ImageObject", "url": "https://www.fitness-complete.com/favicon.svg" }
  },
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.fitness-complete.com/blog/how-many-days-per-week-gym-beginner" },
  "image": "TODO[operator]: hero image URL"
}
```

**HowTo** is also applicable for:
- `/blog/home-gym-apartment-under-500` (step-by-step buying)
- `/blog/how-to-start-playing-pickleball` (getting-started steps)

---

### /about

**AboutPage** + **Organization**

---

### /how-we-pick

**FAQPage** — the methodology sections (Reddit community, independent tests, Amazon reviews, YouTube) can be reformatted as Q&A pairs eligible for FAQ rich results.

---

### /blog (index)

**Blog** type with `hasPart` pointing to each BlogPosting.

---

## Implementation priority

1. BreadcrumbList (all pages) — quick win, no operator data needed
2. BlogPosting on all 4 blog posts — needs real author name (operator blocker) and image
3. Organization + WebSite on homepage — no operator data needed
4. Product schema on starter kit pages — needs affiliate URLs first (Phase 1.1 blocker)
5. FAQPage on /how-we-pick — requires content restructure
6. AboutPage on /about

---

## Validation checklist (run after each schema addition)

- [ ] https://validator.schema.org — paste JSON-LD, check for errors
- [ ] https://search.google.com/test/rich-results — test by URL (requires live deployment)
- [ ] No fabricated `AggregateRating` without real data
- [ ] All `image` fields point to crawlable, non-Unsplash URLs
