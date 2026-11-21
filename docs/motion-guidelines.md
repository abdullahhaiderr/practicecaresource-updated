# CareSource motion guidelines

## General approach

Use motion only when it helps explain a state change or supports navigation. The page should remain clear and complete when all motion is disabled.

## Allowed motion

- Use short transitions for menus, buttons, and focus feedback.
- Use modest opacity transitions for section entrances where they do not delay access to content.
- Keep card hover states restrained and avoid large movement.

## Avoid

- Continuous decorative animation.
- Floating cards, orbs, cursor effects, or simulated interface panels.
- Parallax effects and movement that distracts from reading.
- Glass style surfaces or gradient backgrounds.

## Accessibility and performance

- Respect prefers-reduced-motion in CSS and Framer Motion.
- Reduced motion must not hide content.
- Keep keyboard focus visible and preserve normal tab order.
- Avoid layout shifting transforms.
