# Cuarto y Mitá

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)

Sitio web oficial de Cuarto y Mitá, cafetería y tienda en el centro de Oviedo.

## Páginas

- `/` — Landing
- `/menu` — Carta con tabs por categoría (cafés, infusiones, embutidos, quesos)
- `/cuartoymita` — Quiénes somos, valores, testimonios
- `/contacto` — Mapa, dirección, teléfono y correo
- `/politica-cookies` — Política de cookies (no indexada)

## Estructura

```
src/
  app/                  # App Router (páginas, layout, sitemap, robots)
  components/
    layout/             # Header, Footer, Logo, CookiesBanner
    menu/               # MenuTabs
  data/                 # menu.ts, testimonials.ts
  hooks/                # useScrolled
  lib/                  # site.ts (constantes globales)
public/                 # Imágenes optimizadas (WebP) y favicon
Diseño/                 # HTML de referencia del diseño original
Docs/                   # Documentación interna
```

## Desarrollo

```bash
npm install
npm run dev
```

Servidor en [http://localhost:3000](http://localhost:3000).

### Otros comandos

```bash
npm run build   # Build de producción
npm run start   # Servir build de producción
npm run lint    # ESLint
```

## Características

- App Router con generación estática (SSG) en todas las rutas
- Tipografías servidas con `next/font` (Cormorant Garamond + DM Sans)
- Imágenes optimizadas con `next/image` y formato WebP
- Layout responsive con menú móvil tipo hamburguesa
- Banner de cookies persistente en `localStorage` y reabrible desde el footer
- Cabeceras de seguridad (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`)
- SEO: metadata por página, Open Graph, Twitter Card, canonical URLs, `sitemap.xml` y `robots.txt` autogenerados
- Accesibilidad: roles ARIA, focus visible, navegación por teclado

## Despliegue

Pensado para [Vercel](https://vercel.com). Solo conectar el repositorio: el build (`next build`) y el sirviente estático se configuran automáticamente.

## Licencia

[MIT](./LICENSE)
