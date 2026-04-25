# Cuarto y Mitá

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)

Official website for Cuarto y Mitá, a coffee shop and store in the heart of Oviedo, Spain.

**Live Site**: [https://www.cuartoymita.com/](https://www.cuartoymita.com/)

## Pages

- `/` — Landing
- `/menu` — Menu with tabs by category (coffees, teas, cured meats, cheeses)
- `/cuartoymita` — About us, values, testimonials
- `/contacto` — Map, address, phone and email
- `/politica-cookies` — Cookie policy (not indexed)

## Features

### Architecture & Performance
- App Router with **fully static generation (SSG)** on every route — CDN-servable with no SSR runtime
- **Server Components by default**, Client Components only where interaction requires (`Header`, `MenuTabs`, `CookiesBanner`)
- **Strict TypeScript** end-to-end with typed data sources (`MenuCategory`, `Testimonial`)
- **Tailwind CSS v4** with design tokens declared via `@theme` (no `tailwind.config.ts`)
- **Turbopack** as bundler
- Path aliases (`@/*`) for clean imports
- Fonts served via `next/font` (Cormorant Garamond + DM Sans), self-hosted and preloaded
- Images optimized with `next/image` and WebP format

### UX
- Responsive layout with mobile hamburger menu (body scroll-lock when open)
- Header transparent over the hero, switches to solid on scroll via custom `useScrolled` hook
- Menu tabs synced with `window.location.hash` — deep-linkable and reactive to `hashchange`
- Selective smooth scroll using Next.js 16 `data-scroll-behavior="smooth"`
- Cookie banner persisted in `localStorage` and reopenable from the footer

### Accessibility
- `role="tablist"` / `role="tab"` / `role="tabpanel"` with `aria-selected` and `aria-controls` on menu tabs
- `aria-current="page"` on active navigation links
- `aria-expanded` and `aria-controls` on mobile hamburger button
- `role="dialog"` on cookie banner
- Visible `focus-visible` outlines on all interactive elements
- Semantic landmarks (`<header>`, `<main>`, `<nav>`, `<footer>`) and descriptive `alt` text

### Security
- **Security Headers**: `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy` and `Permissions-Policy` configured for all routes via `next.config.ts`
- **Cookie Policy**: GDPR-compliant cookie consent management with reopen flow

### SEO
- **Metadata**: Unique title and description for each page, with template fallback in root layout
- **Social Sharing**: Site-wide OpenGraph and Twitter Card (`summary_large_image`) with per-page overrides
- **Sitemap & Robots**: Auto-generated `sitemap.xml` (with `priority` and `changeFrequency`) and `robots.txt`
- **Canonical URLs**: Defined on every page
- **Selective indexing**: `noindex` on `/politica-cookies` plus explicit disallow in `robots.txt`


## License

[MIT](./LICENSE)


## Contributions

Contributions are welcome! Feel free to open an issue or submit a pull request.
