## Context

Your site is published on the custom domain **aiethicsuxr.org**. The SEO scanner doesn't know that and keeps flagging the sitemap/robots/canonical for pointing to aiethicsuxr.org instead of the Lovable preview URL. Those findings are **false positives** — your setup is correct. I'll mark them resolved (no code change) once you approve.

Below is what actually needs attention, ranked. Nothing here requires uploading assets or replacing anything on the domain unless flagged "critical".

---

## 🔴 Critical (do these)

**1. Google Search Console verification + sitemap submission**
The verification meta tag is already in `index.html`. Once you confirm the latest version is published on aiethicsuxr.org, I run the verification + submit `https://aiethicsuxr.org/sitemap.xml`. No file changes, no uploads — just two API calls. This is the highest-value SEO action available.

**2. Unique meta description for `/about`**
About page currently inherits the homepage description. One-line fix: add `useSEO({...})` to `src/pages/About.tsx`. Pure code, no asset/domain changes.

---

## 🟡 Worth doing (low effort, real SEO value)

**3. Per-route canonical + og:url**
Every page currently advertises `https://aiethicsuxr.org/` as its canonical URL. Search engines may collapse all your pages into one. Fix by extending the `useSEO` hook to also set `<link rel="canonical">` and `og:url` based on the current route. Pure code.

**4. Heading hierarchy on `/phases`**
`ResearchPhases.tsx` jumps from `<h1>` to `<h3>` inside the phase cards. Change those `<h3>` to `<h2>`. Trivial, no visual change.

**5. Accessible labels for sidebar toggle buttons**
`AppSidebar.tsx` collapse/expand triggers have no accessible name. Add `aria-label`. Trivial.

**6. Structured data (JSON-LD)**
Add an `Organization` + `WebSite` JSON-LD block inline in `index.html`, and `Article` schema per content page via the SEO hook. Helps Google show richer results. Pure code, no assets.

**7. `/llms.txt`**
Small static markdown file at `public/llms.txt` describing the site for AI crawlers (ChatGPT, Perplexity, Claude). New file in the repo only — not an "upload to the domain", it ships with the next publish.

---

## ⚪ Skip for now (matches your constraint)

**8. Custom og:image (social preview)**
Currently uses the default Lovable placeholder. Fixing this means generating a branded image and shipping it as an asset. You said no uploads/replacements unless critical — social previews are nice-to-have, not critical, so I'd skip until you want it.

---

## ✅ False positives I'll mark resolved (no code change)

- "Sitemap/robots point to aiethicsuxr.org not the lovable.app preview" → aiethicsuxr.org **is** your production domain. Scanner is wrong.

---

## Suggested next step

Approve this plan, and on implementation I'll do items **1–7** in one pass (skipping #8). All changes are code-only, nothing gets uploaded to or replaced on aiethicsuxr.org beyond the next normal publish.
