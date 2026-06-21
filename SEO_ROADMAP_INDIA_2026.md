# SEO Roadmap — India's #1 Image Compressor Website
**Site:** imageformatconverter.in  
**Updated:** 21 June 2026

---

## Strategic Goal

Dominate **India image compressor** searches while expanding into **AI tool keywords** and **related tool clusters** — without touching the proven 100KB and 20KB compressor pages.

---

## Phase 1 — Completed (this update)

| Task | Status | URLs |
|------|--------|------|
| Fix domain/branding to imageformatconverter.in | Done | Site-wide |
| Align 20KB canonical slug | Done | `/image-compressor-to-20kb` |
| AI image compressor pages | Done | 6 intent pages |
| India keyword intent pages | Done | 4 pages |
| AI blog content | Done | 3 posts |
| Homepage India optimization | Done | `/` |
| Footer AI tools section | Done | Site-wide |

---

## Phase 2 — Tool Ranking Pages (next 2–4 weeks)

### Priority A — High impressions, poor position

| Planned page | Target query | Current gap | Action |
|--------------|--------------|-------------|--------|
| Improve 50KB page | compress image to 50kb | Pos 30.81 | Add India exam copy, internal links from blog |
| PNG to JPG hub | png to jpg | Pos 35.28 | Strengthen `/png-to-jpg-converter` + redirect `/png-to-jpg` |
| 80KB preset page | 80 kb photo size | Pos 8.5 (0 clicks) | Already exists — add blog links + homepage card |

### Priority B — Exact KB expansion

Add via `buildExactKbTool()` in `pageBuilders.ts`:

| KB target | Search signal | Slug |
|-----------|---------------|------|
| 25KB | Between 20–30KB forms | `/compress-image-to-25kb` |
| 70KB | Between 50–80KB | `/compress-image-to-70kb` |
| 120KB | Near 100KB portals | `/compress-image-to-120kb` |
| 250KB | CMS uploads | `/compress-image-to-250kb` |

### Priority C — Signature & ID cluster

| Page | Target query |
|------|--------------|
| `/resize-signature-to-20kb` | signature 20kb |
| `/passport-photo-compressor-20kb` | passport photo 20kb |
| `/aadhaar-photo-compressor` | aadhaar photo size |
| `/pan-card-photo-compressor` | pan card photo upload |

---

## Phase 3 — AI SEO Cluster (ongoing)

### Intent pages (live)

- `/ai-image-compressor`
- `/free-ai-image-compressor`
- `/ai-photo-compressor-online`
- `/ai-background-remover-online`
- `/ai-image-enhancer-online`
- `/chatgpt-image-compressor-alternative`

### Planned AI pages (Phase 3b)

| Slug | Target keywords |
|------|-----------------|
| `/ai-passport-photo-maker` | ai passport photo, passport photo online |
| `/ai-signature-compressor` | ai signature compressor 20kb |
| `/ai-image-resizer-online` | ai image resizer, ai photo resize |
| `/gemini-image-compressor-alternative` | gemini image compress |
| `/ai-photo-enhancer-free-india` | ai photo enhancer free |

### AI blog topics (SEO automation pipeline)

1. "Best AI background remover free India 2026"
2. "How to compress photo for SSC form using AI tools"
3. "AI vs manual image compression for KYC uploads"
4. "Remove background from passport photo online free"

Run via: `python -m backend.scripts.run_pipeline` with seed keywords.

---

## Phase 4 — Related Tool Clusters for Rankings

Build topical authority with siloed clusters linked from homepage footer:

### Cluster 1: Image compression (core — protected)

```
/compress-image-to-100kb  ← DO NOT MODIFY
/image-compressor-to-20kb ← DO NOT MODIFY
/compress-image-to-{N}kb
/photo-compressor-to-100kb
/signature-compressor-to-20kb
```

### Cluster 2: Format conversion

```
/png-to-jpg-converter
/jpg-to-png-converter
/heic-to-jpg-converter
/webp-to-jpg-converter
/jpg-to-webp-converter
/png-to-webp-converter
```

### Cluster 3: Platform-specific

```
/compress-image-for-instagram
/compress-image-for-whatsapp
/compress-image-for-wordpress
/compress-image-for-shopify
/compress-image-for-amazon
```

### Cluster 4: AI & enhancement

```
/ai-image-compressor
/background-remover
/image-upscaler
/ai-background-remover-online
/ai-image-enhancer-online
```

### Cluster 5: PDF tools (lower priority — positions 44–51)

```
/file-digital-tools/compress-pdf-to-100kb
/file-digital-tools/compress-pdf-to-200kb
/file-digital-tools/compress-pdf-to-500kb
```

Improve PDF cluster only after image compression gaps close.

### Cluster 6: Education calculators (existing traffic)

```
/education-calculators/rank-calculator  (41 clicks)
/education-calculators/marks-percentage-calculator
```

Keep but reduce cross-linking from image pages to avoid topical dilution.

---

## Phase 5 — Technical SEO

| Task | Priority |
|------|----------|
| Fix sitemap 500 errors if recurring | High |
| Update all blog links to imageformatconverter.in | High |
| Submit new URLs via IndexNow | High |
| Add `SoftwareApplication` schema per AI page | Medium |
| Core Web Vitals audit on mobile | Medium |
| Add FAQ schema to AI intent pages | Medium |
| Create `/llms.txt` for AI crawler discovery | Low |

---

## Internal Linking Rules

1. **Every new page** links to 100KB and 20KB tools (when relevant)
2. **AI pages** link to background remover + upscaler + KB compressors
3. **Blog posts** use 3–5 internal links minimum
4. **Never** link away from 100KB/20KB pages to unrelated calculators
5. **Footer** maintains Exact KB + AI Tools columns

---

## KPI Dashboard (monthly review)

Track in Google Search Console:

- Impressions & clicks for `ai image compressor*` queries
- Position for `/compress-image-to-50kb`
- Position stability for 100KB (≤10) and 20KB (≤8)
- India vs global click share
- Mobile CTR vs desktop CTR
- New page indexing status (Coverage report)

---

## How to Add a New Ranking Page (developer guide)

```typescript
// Option A: Exact KB tool (pageBuilders.ts)
export const extraExactKbTools = [
  buildExactKbTool(70, "Between 50KB and 80KB exam form limits."),
  // ...
];

// Option B: AI intent page (pageBuilders.ts → aiIntentPages)
buildAiIntent({
  slug: "ai-passport-photo-maker",
  title: "...",
  toolHref: "/background-remover",
  // ...
});

// Option C: Blog post (src/content/blog/new-post.md)
// Frontmatter: title, description, keywords, date
```

No new `page.tsx` needed — `[slug]/page.tsx` handles routing automatically.  
Sitemap updates via `indexableUrls.ts` automatically.

---

## Do-Not-Touch List

These pages drive 55%+ of site clicks. **No content, metadata, or tool logic changes:**

- `/compress-image-to-100kb`
- `/image-compressor-to-20kb`

Allowed: internal links **pointing to** these pages from new content.

---

*Roadmap aligned with Search Console data through 21 June 2026*
