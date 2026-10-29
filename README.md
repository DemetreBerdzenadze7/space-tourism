# Space Tourism — Multi-page Website

A solution to the [Space tourism multi-page website](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3) challenge on Frontend Mentor, built with **Next.js 16**, **React 19** and **Tailwind CSS 4**.

The site has four pages — Home, Destination, Crew and Technology — each with a responsive layout for mobile, tablet and desktop, and animated transitions between pages and between tabs.

<!-- Add a screenshot: save it as public/screenshot.png and uncomment the line below -->
<!-- ![Space tourism website preview](./public/screenshot.png) -->

**Live site:** _add link_ · **Solution:** _add Frontend Mentor link_

## Features

- **Responsive, mobile-first layout** for 375px, 768px and 1440px designs
- **Four pages**: Home, Destination, Crew and Technology
- **Tabbed content** on Destination (planets), Crew (slider dots) and Technology (numbered steps)
- **Animated transitions** using React's `<ViewTransition>`:
  - pages fade between each other when navigating from the header
  - the active underline / dot / step slides to the newly selected item
  - planets spin, portraits rise and text slides when switching tabs
- **Active navigation link** detected from the current URL
- **Mobile menu** with a slide-in panel
- **Art-directed images** on Technology: landscape on mobile/tablet, portrait on desktop, via `<picture>` and `getImageProps`
- **Accessibility**: semantic headings, `aria-label` / `aria-pressed` on tab buttons, visible focus states, and `prefers-reduced-motion` support
- **Static rendering**: every page is prerendered at build time

## Tech stack

| Tool | Version | Purpose |
| --- | --- | --- |
| [Next.js](https://nextjs.org/) (App Router, Turbopack) | 16.4 | Framework, routing, image optimization |
| [React](https://react.dev/) | 19.3 | UI, `ViewTransition`, `startTransition` |
| [Tailwind CSS](https://tailwindcss.com/) | 4 | Styling with `@theme` design tokens |
| [TypeScript](https://www.typescriptlang.org/) | 5 | Type safety |
| `next/font` | — | Bellefair, Barlow and Barlow Condensed |

## Getting started

**Requirements:** Node.js 20 or newer.

```bash
# install dependencies
npm install

# start the dev server at http://localhost:3000
npm run dev
```

Visiting `/` redirects to `/home`.

| Script | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

> **Note:** after adding or changing tokens inside `@theme` in `app/globals.css`, restart the dev server — new tokens are not picked up by hot reload.

## Project structure

```
app/
├── layout.tsx            # Root layout: fonts, header, global styles
├── globals.css           # Design tokens (@theme), view-transition animations
├── home/page.tsx
├── destination/page.tsx
├── crew/page.tsx
└── technology/page.tsx
components/
├── Header.tsx            # Logo, desktop nav, mobile menu
├── NavLinks.tsx          # Nav links with active state (usePathname)
├── PageTransition.tsx    # Page-level fade between routes
├── DestinationTabs.tsx   # Planet tabs
├── CrewSlider.tsx        # Crew member slider
└── TechnologySlider.tsx  # Technology steps
data/                     # Page content (destinations, crew, technology)
hooks/selectHooks.ts      # useSelectNext — tab state wrapped in startTransition
types/types.ts            # Destination, CrewMember and Technology types
public/                   # Backgrounds, images and icons
```

## Design system

All design values live as Tailwind tokens in the `@theme` block of [`app/globals.css`](app/globals.css), so components use names like `text-heading`, `bg-dark` or `size-planet` instead of raw values.

| Group | Examples |
| --- | --- |
| Colors | `dark` `#0B0D17`, `light` `#D0D6F9`, `white` |
| Fonts | `heading` (Bellefair), `nav` (Barlow Condensed), `body` (Barlow) |
| Breakpoints | `md` 768px (tablet), `lg` 1024px (desktop) |
| Type scale | `display`, `heading`, `name`, `role`, `subheading`, `body`, `nav` — each with mobile / tablet / desktop sizes |
| Sizes | `container` (1110px), `planet`, `portrait`, `dot`, `explore` |

Styles are written mobile-first: base classes target mobile, and `md:` / `lg:` layer on the tablet and desktop layouts.

## How the animations work

Next.js runs every navigation inside a React transition, so wrapping elements in `<ViewTransition>` is enough to animate route changes. Header links pass `transitionTypes={["nav-page"]}`, which `PageTransition` maps to a fade-and-blur animation.

Tab switches are local state, and a plain `setState` does not trigger view transitions. The `useSelectNext` hook wraps the update in `startTransition`:

```ts
const handleSelect = (name: string) => {
  startTransition(() => setSelectNext(name));
};
```

Each switchable element (planet, portrait, text, indicator) gets a `key` and a shared `name`, so React pairs the old and new versions and the CSS in `globals.css` animates between them. Browsers without the View Transitions API simply switch content without animation.

## Author

**Demetre Berdzenadze**

- Frontend Mentor: _add profile link_
- GitHub: _add profile link_

## Acknowledgments

Design and assets by [Frontend Mentor](https://www.frontendmentor.io).
