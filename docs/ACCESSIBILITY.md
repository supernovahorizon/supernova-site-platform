# Accessibility

Landscaping demos target **WCAG 2.2 AA** where practical.

## Implemented

- Skip-to-content link
- Landmarks: `header`, `nav`, `main`, `footer`
- Visible `:focus-visible` outlines on interactive controls
- Mobile menu: `aria-expanded`, Escape to close, focus on open, body scroll lock
- Quote form: persistent labels, error summary (`role="alert"`), step progress (`aria-current="step"`)
- Before/after: range slider plus **Show before** / **Show after** buttons; side-by-side layout when `prefers-reduced-motion: reduce`
- Testimonials: fictional demonstration badges; no star ratings
- Touch targets ≥ 44px on primary buttons and mobile nav links
- `prefers-reduced-motion` respected in `@supernova/accessibility` and component CSS

## Testing

- Keyboard navigation exercised in Playwright smoke tests
- Automated overflow checks at mobile and desktop viewports
- Run: `pnpm --dir tests/landscaping-demos test` after building demos

## Known exceptions

- Google Fonts loaded from CDN with preconnect; self-hosting recommended for stricter privacy policies.
