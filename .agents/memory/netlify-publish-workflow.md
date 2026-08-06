---
name: Netlify publish workflow
description: How the Yorkshire Coasting site is deployed to Netlify — pre-built dist committed to GitHub, no Netlify build command.
---

## Rule
After every source change, always: (1) run `pnpm --filter @workspace/holiday-let run build`, (2) force-add the dist with `git add -f artifacts/holiday-let/dist/public/`, (3) commit and push to GitHub. Netlify serves the pre-built files directly.

**Why:** Netlify was not reliably running its own build from source (builds were failing or stale). The fix was to remove the build command from `netlify.toml` and commit the pre-built `artifacts/holiday-let/dist/public/` directory. A `_headers` file was added to prevent `index.html` from being CDN-cached.

**How to apply:** Every push to GitHub must include an updated dist — never push source changes alone or the live site will lag behind. The root `.gitignore` has `dist` listed, so always use `git add -f` for the dist folder.
