# Lighthouse Baseline — fitness-complete.com
> Template created: 2026-05-17
> TODO[operator]: Run Lighthouse on mobile for the three pages below and fill in scores. Use Chrome DevTools > Lighthouse tab, or `npx lighthouse <url> --view --preset=mobile` after running `npm run preview`.

---

## How to run

```bash
# In repo root
npm run build && npm run preview
# Then in Chrome: DevTools > Lighthouse > Mobile > Analyze page load
```

Or with CLI:
```bash
npm install -g lighthouse
lighthouse http://localhost:4321 --preset mobile --output html --output-path ./audit/lighthouse-homepage.html
lighthouse http://localhost:4321/gym-starter-set --preset mobile --output html --output-path ./audit/lighthouse-gym.html
lighthouse http://localhost:4321/blog/how-many-days-per-week-gym-beginner --preset mobile --output html --output-path ./audit/lighthouse-blog.html
```

---

## Baseline scores (FILL IN)

### Homepage — `/`

| Category | Score | Notes |
|----------|-------|-------|
| Performance | — | Target: ≥ 90 |
| Accessibility | — | Target: ≥ 95 |
| Best Practices | — | Target: ≥ 95 |
| SEO | — | Target: ≥ 95 |
| LCP | — | Target: < 2.5s |
| INP | — | Target: < 200ms |
| CLS | — | Target: < 0.1 |

### Starter kit page — `/gym-starter-set`

| Category | Score | Notes |
|----------|-------|-------|
| Performance | — | |
| Accessibility | — | |
| Best Practices | — | |
| SEO | — | |
| LCP | — | |
| INP | — | |
| CLS | — | |

### Blog post — `/blog/how-many-days-per-week-gym-beginner`

| Category | Score | Notes |
|----------|-------|-------|
| Performance | — | |
| Accessibility | — | |
| Best Practices | — | |
| SEO | — | |
| LCP | — | |
| INP | — | |
| CLS | — | |

---

## Known issues to investigate (pre-run predictions)

Based on code review:

- **SEO will likely flag:** missing og:image, no twitter:card, missing author meta, no BlogPosting schema on blog posts, missing datePublished/dateModified
- **Accessibility likely flags:** images loaded with `<img>` not Astro `<Image>`, some alt text may be generic, no skip-to-content link in layout
- **Performance likely flags:** Unsplash images not optimized (no srcset, WebP, or AVIF), external image CDN adds DNS lookup time, images in hero loaded with `loading="lazy"` (hero image should be eager/preloaded)
- **Best Practices:** Vercel Analytics loads async, cookie banner JS may have issues

---

## Measurements after Phase 1 (FILL IN after shipping Phase 1)

| Page | Category | Before | After | Delta |
|------|----------|--------|-------|-------|
| `/` | SEO | — | — | — |
| `/gym-starter-set` | SEO | — | — | — |
| `/blog/how-many-days-per-week-gym-beginner` | SEO | — | — | — |
