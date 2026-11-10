# CareSource motion guidelines

## Timing and easing

- Use 180–240 ms for hover, focus, and menu transitions.
- Use 450–600 ms for scroll reveal and first-load entrance motion.
- Use the shared brand-out easing: cubic-bezier(0.22, 1, 0.36, 1).
- Keep stagger intervals near 100 ms and limit them to small groups.

## What may move

- Reveal section content with a modest 14–18 px upward shift and a fade.
- Lift service cards slightly on hover; gently zoom their image and shift the arrow.
- Animate dropdowns and mobile navigation with short opacity and height changes.
- Reserve continuous motion for the later hero artwork and keep it subtle.

## Accessibility and performance

- Respect prefers-reduced-motion in CSS and Framer Motion.
- Reduced motion should remove entrance travel and continuous movement, not hide content.
- Keep keyboard focus visible and preserve normal tab order.
- Avoid layout-shifting transforms on content. Animate opacity and transforms only.
- Do not animate every paragraph, icon, or decoration independently.