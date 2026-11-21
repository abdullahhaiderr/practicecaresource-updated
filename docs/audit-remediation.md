# Website audit and remediation

## Source of truth

Repository: `abdullahhaiderr/practicecaresource-updated`

Production branch: `main`

Working branch: `audit/brand-accessibility-seo`

The implementation work in this branch is isolated from production. The Vercel project dashboard shows the selected repository connected to the project and identifies `main` as the production branch.

## Confirmed application structure

The repository contains the Home, About, Services, individual service, Resources, individual article, and Contact routes. It also contains a contact API, a review submission API, reusable navigation and footer components, service data, article data, and shared form validation.

The project is a Next.js application. It does not currently use Supabase or another database for the review submission flow.

## Findings addressed in this branch

- Replaced the conflicting blue and cyan CSS tokens with the documented orange, warm cream, dark ink, and slate palette.
- Changed display and body fonts to Inter and Manrope.
- Replaced the simulated homepage billing dashboard with a professional healthcare photograph.
- Removed the hardcoded client names, portraits, and review quotations from the homepage because their authenticity and publication approval were not established in the repository.
- Removed unsupported numerical homepage claims about specialty counts, nationwide coverage, and dedicated billing managers.
- Replaced large dark content panels with light surfaces.
- Removed gradient overlays and continuous decorative animation styles.
- Improved keyboard focus behavior and removed the pointer gap in the Services dropdown.
- Corrected the compact contact form phone number regular expression.
- Removed unverified founder attribution from the About page and article author display.
- Removed the unverified office address and made public phone details opt in through verified environment variables.
- Suppressed article publication dates while the source data still contains placeholder dates.
- Added a shared canonical site URL helper, page canonical metadata, sitemap, robots rules, Organization and WebSite structured data, Service structured data, an Open Graph image, and a site icon.
- Prevented non production deployments from being indexed.
- Added a TypeScript check script and updated the design documentation.

## Remaining release checks

### Business approval

- Confirm the exact public business name and logo treatment.
- Confirm the public phone number and business contact email.
- Confirm the Resend sender address and the inbox that should receive contact and review submissions.
- Confirm any founder or owner information before adding it back to public pages.
- Obtain client approval for any testimonial before publication.
- Replace placeholder article dates with approved publication dates when dates are available.

### Form and API verification

- Configure the Resend environment variables in the correct Vercel project and environments.
- Submit a real test contact form and confirm delivery and reply routing.
- Submit a test review and confirm it is received for manual approval.
- The current rate limiter is held in process memory. It is not a shared or durable rate limit across serverless instances.
- Review submissions are emailed only. There is no database persistence, admin moderation queue, or automatic publishing flow.

### Build and deployment verification

- Run `npm ci`, `npm run typecheck`, `npm run lint`, and `npm run build` against this branch.
- The lint script still needs a verified ESLint installation and configuration.
- Check the Vercel preview build and inspect its logs before merging.
- Confirm that `NEXT_PUBLIC_SITE_URL` resolves to the approved production domain.
- Confirm production indexing, canonical tags, `/robots.txt`, and `/sitemap.xml` after deployment.
- Run mobile and desktop checks, keyboard navigation, reduced motion checks, and a production Lighthouse review.
- Connect Google Search Console and submit the production sitemap after the domain is verified.

## Deployment boundary

No changes have been made to the production branch or production environment variables in this audit branch. Do not merge or promote until the preview build, business details, form delivery, and production domain have been verified.
