---
name: Yorkshire Coasting deployment model
description: How publishing works — every GitHub push costs Netlify build credits; never push without explicit user instruction.
---

## Rule: Never push to GitHub without explicit user instruction

Every `git push` to the `contactpaulasmith/yorkshirecoasting` GitHub repo immediately triggers a Netlify build. Netlify builds consume monthly build-minute credits. Exhausting these credits prevents the live site from deploying until they renew.

**Why:** The user's Netlify credits were consumed (and Replit credits exceeded) in one session because pushes were used as a diagnostic tool during a build-failure investigation. Each push = one Netlify build = credits spent.

**How to apply:**
- Make all code changes locally and verify them with `pnpm --filter @workspace/holiday-let run build` first.
- Only push when the user explicitly says "publish", "push", "deploy", or similar.
- Never push diagnostic or "trigger" commits — if a build is failing and you can't diagnose it locally, stop and ask the user to check the Netlify dashboard (app.netlify.com → Deploys → click the failed deploy → read the build log).
- If the user asks why the live site hasn't updated, explain the Netlify build credit model before taking any action.

## Deployment chain summary

```
Code change (local) → git push main → GitHub → Netlify builds → live site updates
```

- Host: **Netlify** (confirmed via `server: Netlify` response header)
- Repo: `contactpaulasmith/yorkshirecoasting` (GitHub)
- Netlify connected via GitHub App (not a traditional webhook — doesn't appear in repo webhook list)
- Build command: `pnpm --filter @workspace/holiday-let run build`
- Publish dir: `artifacts/holiday-let/dist/public`
- Credits renew: end of August 2026

## Current state (as of August 6 2026)

All changes are committed to `main` (commit `06f6dfc`, DATA_VERSION v49) but NOT yet live — Netlify credits exhausted. Site currently serves v47. Will deploy automatically when credits renew and the next push is made.
