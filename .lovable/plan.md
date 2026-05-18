## What's wrong

The GitHub Actions deploy is failing for two reasons:

1. **Node version mismatch** — the workflow uses Node 18, but `@supabase/supabase-js@2.106.0` (and friends) require Node ≥ 20.
2. **Lockfile out of sync** — `package.json` lists newer Supabase packages (2.106.0, plus `iceberg-js`, updated `tslib`) that aren't in `package-lock.json`, so `npm ci` refuses to install.

Lovable bumped the Supabase SDK in the repo, but the lockfile and the CI Node version never caught up. Until this is fixed, **no Lovable change will ever reach aiethicsuxr.org** — every push will fail at the install step.

## Fix (2 small changes)

### 1. Update `.github/workflows/deploy.yml`
Change `node-version: '18'` → `node-version: '20'`.

### 2. Regenerate `package-lock.json`
Run `npm install` locally (or I can do it here in the sandbox) to sync the lockfile with the new Supabase versions, then commit the updated `package-lock.json`.

## Order of operations

1. I update the workflow file (Node 20).
2. I run `npm install` in the sandbox to regenerate `package-lock.json`.
3. You publish in Lovable → both files land on GitHub `main` → Actions re-runs → site deploys successfully.
4. We verify `aiethicsuxr.org` shows today's `last-modified` and `/llms.txt` returns 200.
5. I retry Google Search Console verification + sitemap submission.

## Notes

- Nothing about this touches GoDaddy, DNS, or the GitHub Pages setup itself — just the build config.
- This is the root cause of why your earlier "GitHub looks up to date" check showed commits landing but the live site never updated: the commits arrived, but every deploy job has been red.
