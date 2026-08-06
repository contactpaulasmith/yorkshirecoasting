---
name: GitHub Pages publish workflow
description: How the Yorkshire Coasting site is deployed — built locally then pushed to the gh-pages branch, served by GitHub Pages.
---

## Rule
After every source change, publish with these steps:
1. `BASE_PATH=/yorkshirecoasting/ NODE_ENV=production pnpm --filter @workspace/holiday-let run build`
2. Switch to gh-pages branch: `git checkout gh-pages` (orphan branch — only built files)
3. Copy dist to root: `cp -r artifacts/holiday-let/dist/public/. .`
4. Force-add and commit: `git add -f index.html assets/ favicon.png favicon.svg opengraph.jpg images/ architecture.html 404.html && git commit -m "Deploy"`
5. Push: `git push ... gh-pages --force`
6. Switch back to main: `git checkout -f main`

**Why:** The site uses GitHub Pages served from the `gh-pages` branch root. The GitHub PAT does not have `workflow` scope so GitHub Actions cannot be used. BASE_PATH must be `/yorkshirecoasting/` to match the GitHub Pages subpath. The wouter router reads `import.meta.env.BASE_URL` so it works automatically. A `404.html` in the branch handles SPA deep-link routing.

**How to apply:** Every time source changes are made and pushed to main, also run the build and push to gh-pages. The live site URL is https://contactpaulasmith.github.io/yorkshirecoasting/
