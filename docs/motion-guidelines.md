# Practice Care Source motion guidelines

## Timing and easing

- Use 180 to 240 ms for hover, focus, and menu transitions.
- Use 450 to 600 ms for scroll reveal and first load entrance motion.
- Use the shared brand easing: cubic-bezier(0.22, 1, 0.36, 1).
- Keep stagger intervals near 100 ms and limit them to small groups.

## What may move

- Reveal section content with a modest 14 to 18 px upward shift and a fade.
- Lift service and resource cards slightly on hover.
- Use small image scale changes only when they do not crop important content.
- Animate dropdowns and mobile navigation with short opacity and height changes.
- Do not use continuous marquee motion for unverified testimonials or decorative floating elements.

## Accessibility and performance

- Respect prefers-reduced-motion in CSS and Framer Motion.
- Reduced motion should remove entrance travel and continuous movement, not hide content.
- Keep keyboard focus visible and preserve normal tab order.
- Avoid layout shifting transforms on content. Animate opacity and transforms only.
- Do not animate every paragraph, icon, or decoration independently.
