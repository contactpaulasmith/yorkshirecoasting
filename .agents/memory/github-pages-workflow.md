---
name: Netlify + GitHub publish workflow
description: www.yorkshirecoasting.co.uk is hosted on Netlify, connected to the GitHub repo contactpaulasmith/yorkshirecoasting. Pushing to main triggers a Netlify build and deploy automatically.
---

## Rule
Publishing = pushing source changes to the `main` branch on GitHub. Netlify is connected to the repo and auto-builds on every push using the command in `netlify.toml`.

**Do NOT:**
- Commit built dist files to the repo (Netlify builds from source)
- Remove the build command from netlify.toml
- Set up GitHub Pages (the domain is served by Netlify, not GitHub Pages)
- Create a gh-pages branch

**netlify.toml must always contain:**
```toml
[build]
  command = "pnpm --filter @workspace/holiday-let run build"
  publish = "artifacts/holiday-let/dist/public"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

**Why:** The user's site at www.yorkshirecoasting.co.uk is served by Netlify, which is connected to the GitHub repo contactpaulasmith/yorkshirecoasting and builds automatically on push to main. The user refers to this as "publishing to GitHub."

**How to apply:** After every source change, simply push to the main branch on GitHub. No build step needed locally.
