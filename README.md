# Logo Marquee Section

A responsive logo marquee section built with React, TypeScript, Vite, semantic HTML, and CSS animations.

## Live Demo

[https://wildchopper.github.io/logo-marquee-section/](https://wildchopper.github.io/logo-marquee-section/)

## Features

- Responsive logo marquee section with a centered headline and continuous scrolling logo row
- Logo data stored in a shared data module so the public app composition stays simple
- Logos rendered from a typed data collection
- Component-based structure with separated app composition and marquee rendering
- Duplicated logo track for a seamless looping animation
- CSS-only marquee animation with stable track sizing
- Reduced-motion support through `prefers-reduced-motion`
- Decorative logo images hidden from assistive technology
- Screen-reader-only list with readable logo names
- Semantic section, heading, list, list item, and image markup

## Implementation Details

- Main app composition lives in `src/App.tsx`
- Logo marquee rendering lives in `src/components/LogoMarquee.tsx`
- Logo data lives in `src/data/logos.ts`
- Global CSS and base font styles live in `src/index.css`
- Section layout, marquee animation, and accessibility utility styles live in `src/App.css`
- Logo SVG assets live in `src/assets`
- Vite is configured with the React plugin
- Vite uses `base: '/logo-marquee-section/'` so built assets resolve correctly on GitHub Pages
- GitHub Pages deployment lives in `.github/workflows/deploy.yml`

## UX Notes

The section is designed as a focused brand strip: a compact headline sits above a horizontally scrolling logo collection, with the marquee clipped inside the available section width.

The logo row uses two repeated copies of the same logo collection. The animation moves by one copy of the collection so the loop can restart without a visible jump.

## Accessibility

- The section is labelled by its visible heading with `aria-labelledby`
- The animated visual logo track is marked with `aria-hidden`
- Decorative logo images use empty `alt` text
- A screen-reader-only list exposes the unique logo names once
- The logo collection is rendered as a list for assistive technology
- The animation stops for users who prefer reduced motion
- The page does not rely on hover-only interaction or hidden controls

## Edge Cases

- Logo images should keep their intrinsic proportions inside the marquee track
- The scrolling track should not shrink logo images inside flex layout
- The marquee should restart cleanly without jumping at the loop point
- The section should clip overflow so logos enter and exit through the visible viewport
- Long logo collections should continue rendering from the shared data source
- Reduced-motion users should see a static logo row instead of an animated track
- GitHub Pages builds should resolve assets under `/logo-marquee-section/`

## Tech Stack

- React
- TypeScript
- Vite
- CSS3
- ESLint
- GitHub Pages

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Run lint:

```bash
npm run lint
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Deployment

The project is configured for GitHub Pages. The deploy workflow runs on pushes to `main`, installs dependencies with `npm ci`, runs lint, builds the app, uploads `dist`, and deploys it through GitHub Pages.

Vite uses `base: '/logo-marquee-section/'` so built assets resolve correctly at:

[https://wildchopper.github.io/logo-marquee-section/](https://wildchopper.github.io/logo-marquee-section/)
