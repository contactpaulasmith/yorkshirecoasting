# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Artifacts

### Holiday Let Website (`artifacts/holiday-let`)
- **Type**: react-vite, frontend-only (no backend)
- **Preview**: served at `/`
- **Brand**: "Shoreline Stays" — premium Cornwall coastal holiday properties
- **Features (Phase 1)**:
  - Homepage with hero image, CTAs, featured properties grid
  - Properties listing page with property cards
  - Property detail pages with image gallery, benefit badges, "Check Availability" (Airbnb link), Things to Do & See (with category filter tabs), guest reviews (star ratings), FAQs accordion
  - Contact page with enquiry form
  - Admin area (password: `admin2024`) with:
    - Properties management (add/edit/view)
    - Things to Do & See management (add/edit/delete, assign to properties)
    - Reviews moderation (approve/pending toggle)
- **State**: React Context + localStorage (versioned with `DATA_VERSION = "v2"`)
- **Images**: Unsplash CDN URLs
- **Dummy data**: 3 Cornwall properties (Lighthouse Cottage, Harbour House, Cliff Retreat), 9 Things To Do, 6 reviews
- **Design**: Playfair Display + Inter fonts, warm beige/brown palette, framer-motion animations

### API Server (`artifacts/api-server`)
- Express 5 server at `/api`
- Only has health check endpoint for now
- Phase 2+ will add backend for auth, bookings, etc.
