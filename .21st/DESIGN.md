# Practice Care Source design context

## Brand identity

Practice Care Source provides medical billing and practice support for US healthcare providers. The website should feel dependable, clear, professional, and human.

The existing production website is the visual source of truth. Preserve its logo, navy and blue palette, teal accents, pale neutral surfaces, and homepage hero. Do not introduce orange, a replacement palette, or an unrelated visual identity.

## Color system

The current CSS custom properties in `src/app/globals.css` are authoritative:

- Primary blue: #0653C7
- Primary hover: #05419E
- Primary ink: #073074
- White surface: #FFFFFF
- Soft background: #F8FBFC
- Main text: #161311
- Muted text: #546877
- Border: #DCE6E8
- Soft teal tint: #D9F1F4

Do not change these values without explicit approval. Use solid color surfaces and avoid introducing gradients.

## Typography

Use Barlow Condensed for display headings, Manrope for body copy and controls, and Caveat only for the existing limited script accent. Keep body copy comfortably readable and maintain a consistent heading hierarchy.

## Layout and interaction

Use a consistent container and spacing system, aligned grids, predictable card heights, carefully cropped images, refined borders, and restrained shadows. Inner pages should have their own art direction while remaining part of the same brand.

Keep desktop, tablet, and mobile layouts intentional. Prevent horizontal overflow, text collisions, clipped controls, uneven card alignment, and accidental image overlap. Preserve visible keyboard focus and respect reduced motion.

## Content integrity

Do not invent testimonials, customer identities, founder credentials, addresses, office hours, certifications, privacy promises, performance statistics, or downloadable resources. Use only verified business information. Keep existing forms connected to their real server routes and email delivery. Never ask visitors to submit patient information.

## Page scope

Keep the production homepage hero and brand theme unchanged. Improve the wireframing and presentation of About, Services, service detail, Resources, article, and Contact pages without replacing the existing Next.js application.
