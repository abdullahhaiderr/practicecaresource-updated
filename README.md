# CareSource

CareSource is a medical billing and practice support website for US healthcare providers.

## Technology

- Next.js 15 App Router
- React 19 and TypeScript
- Tailwind CSS
- Framer Motion with reduced motion support
- Lucide icons
- React Hook Form and Zod
- Resend for contact and review notification emails

## Existing routes

- `/` Home
- `/about` About CareSource
- `/services` Services directory
- `/services/[slug]` Individual service pages
- `/resources` Resource library
- `/resources/[slug]` Individual articles
- `/contact` Contact form

## Form endpoints

- `POST /api/contact` validates a practice inquiry and sends it through Resend.
- `POST /api/testimonial` validates a client review submission and emails it to the configured review inbox for approval.

Review submissions are not stored in a database and are not published automatically. A real client must approve the final wording before publication. Do not add invented testimonials or client identities.

The contact and review forms are for general business inquiries only. Visitors are asked not to submit patient names or protected health information.

## Local setup

Use Node.js 20.9 or newer.

```bash
npm ci
cp .env.example .env.local
npm run dev
```

Add the required values to `.env.local` before testing form delivery.

## Environment variables

- `RESEND_API_KEY` Resend API key used by the server.
- `CONTACT_TO_EMAIL` verified business inbox that receives contact and review submissions.
- `CONTACT_FROM_EMAIL` verified Resend sender address.
- `NEXT_PUBLIC_SITE_URL` optional canonical production URL. Set this to the verified production domain in Vercel. When unset, the app uses Vercel's production URL when available, then the current Vercel project domain as a fallback.
- `NEXT_PUBLIC_CONTACT_PHONE` optional phone number for `tel:` links. Leave blank until verified.
- `NEXT_PUBLIC_CONTACT_PHONE_DISPLAY` optional formatted phone number shown on the site. Leave blank until verified.

Never commit real API keys or secrets.

## Quality commands

```bash
npm run typecheck
npm run lint
npm run build
npm run start
```

The TypeScript check is available as `npm run typecheck`. The lint command currently needs its ESLint configuration and dependency availability verified before it can be treated as a release gate. There is not yet a dedicated automated test suite.

## Content and launch requirements

Confirm the business name, public phone number, contact inbox, sender address, and production domain with the business owner before launch. Publish only approved service details and client feedback. Do not invent founder details, certifications, numerical claims, payer relationships, privacy assurances, or performance results.

See `docs/audit-remediation.md` for the current audit findings and launch checks.
