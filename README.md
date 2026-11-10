# CareSource

This is the medical billing website which I am building for my client.

## Sprint 1 — Part A: Foundation

This repository currently contains the design foundation and reusable components. The Home hero and remaining Home sections are intentionally deferred to Parts B and C.

## Stack

- Next.js App Router with TypeScript
- Tailwind CSS design tokens
- Framer Motion with reduced-motion support
- lucide-react icons
- Next Image for local and approved remote images

## Getting started

Use Node.js 20 or newer, then run `npm install` and `npm run dev`.

## Project structure

- `src/app/`: App Router layout, global styles, and the temporary Home placeholder
- `src/components/`: reusable layout, navigation, motion, and service components
- `src/lib/site.ts`: navigation and service content
- `public/logo.png`: supplied, unmodified CareSource logo
- `docs/motion-guidelines.md`: motion and accessibility rules

## Brand system

Authoritative colors are orange `#FF771C`, warm cream `#F5EDE0`, dark `#161311`, and slate `#546877`. Derived shades are documented in Tailwind tokens. Orange buttons use dark text for contrast.

## Sprint boundaries

Part A provides the design foundation and shared components. Build the Home hero only after Part B is requested, then add the remaining Home sections in Part C. Services, About, Resources, and Contact remain placeholder routes; no Sprint 2 pages are included.