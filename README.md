# Practice Care Source

A Next.js website for Practice Care Source, a medical billing and practice support business serving US healthcare providers.

## Technology

- Next.js App Router and TypeScript
- React and Tailwind CSS
- Framer Motion for controlled motion
- Lucide icons
- React Hook Form and Zod for form validation
- Resend for contact and review email delivery

## Local development

Use Node.js 20 or newer.

```bash
npm ci
npm run dev
```

Available checks:

```bash
npm run typecheck
npm run build
```

## Public routes

- `/` Home
- `/services` Services overview
- `/services/[slug]` Service detail pages
- `/about` About Practice Care Source
- `/resources` Searchable resource library
- `/resources/[slug]` Resource articles
- `/contact` Contact form and contact information

The contact and review forms use server routes and Resend. They are not front end only simulations. The contact form should only collect general business information. Visitors are asked not to submit patient names or protected health information.

## Brand and design system

The production brand palette is the source of truth. Keep the existing navy, blue, teal, and pale neutral colors, logo, and homepage hero. Do not introduce a replacement palette or orange redesign.

Current design tokens are defined in `src/app/globals.css` and extended in `tailwind.config.ts`:

| Token | Value |
| --- | --- |
| Primary | `#0653C7` |
| Primary hover | `#05419E` |
| Primary ink | `#073074` |
| Page background | `#FFFFFF` |
| Soft background | `#F8FBFC` |
| Main text | `#161311` |
| Muted text | `#546877` |
| Border | `#DCE6E8` |
| Soft teal tint | `#D9F1F4` |

The current font pairing uses Barlow Condensed for display headings, Manrope for body text, and Caveat for the limited script accent. Fonts load from Google Fonts with local system fallbacks.

## SEO

The App Router includes canonical metadata, Open Graph metadata, a generated social image, Organization and WebSite structured data, Service and Article structured data, `robots.txt`, and an XML sitemap.

Set `NEXT_PUBLIC_SITE_URL` to the official HTTPS production origin when a custom production domain is confirmed. If it is not set, the site uses the current Vercel production URL as its fallback. Preview deployments are configured not to be indexed.

## Environment variables

Contact and review email delivery requires the Resend configuration used by the API routes:

- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL`
- `CONTACT_FROM_EMAIL`

The public site URL can be configured with `NEXT_PUBLIC_SITE_URL`. Do not commit secrets to the repository.

## Project structure

- `src/app/` App Router pages, API routes, metadata, sitemap, and robots
- `src/components/` Shared navigation, layout, cards, forms, and page sections
- `src/data/` Service and resource content
- `src/lib/` Site configuration, SEO helpers, and validation schemas
- `public/` Brand assets and approved public images
- `.github/workflows/quality.yml` TypeScript and production build checks

Production changes should be reviewed through a pull request and preview before merging. The homepage hero and existing production color theme must remain unchanged unless explicitly approved.
