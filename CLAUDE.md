# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Next.js 15** portfolio website for Metta Legita (pianist, composer, educator). Built on the Rivor template with **Decap CMS** for content management.

- **Framework:** Next.js 15.1.7 with App Router, React 19, TypeScript
- **Styling:** Tailwind CSS + SCSS, dark/light mode via next-themes
- **Animation:** GSAP with ScrollTrigger, Lenis smooth scrolling
- **CMS:** Decap CMS (formerly Netlify CMS) with local test-repo backend
- **Media:** Cloudinary for image hosting

## Commands

```bash
npm run dev          # Start Next.js with Turbopack (http://localhost:3000)
npm run dev:cms      # Start Next.js + Decap CMS server concurrently
npm run build        # Production build
npm run lint         # ESLint check
npm run lint:fix     # Auto-fix lint issues
npm run format       # Prettier formatting
```

CMS admin interface: `http://localhost:3000/admin/`

## Architecture

### Directory Structure

- `app/` - Next.js App Router pages (65+ routes including homepage variants)
- `components/` - React components organized by page/feature
  - `homepage-01` to `homepage-25/` - Homepage template variants
  - `shared/` - Common components (Navbar, Footer, LayoutOne, CTA, FaqV2)
  - `animation/` - Animation components (CursorPointer)
- `hooks/` - Custom hooks for animations (`useRevealAnimation`, `useRevealAnimationV2`, `useHorizontalScroll`)
- `utils/` - Utilities (`cn.ts` for classnames, `GetMarkDownData.ts`, `Providers.tsx`)
- `data/` - JSON and Markdown content files
  - `homepage.json`, `clients.json`, `testimonials.json` - Main content
  - `marketing/blog/` - Blog posts (Markdown with frontmatter)
  - `servicesV2/` - Service pages (Markdown)
- `scss/` - Global SCSS styles (`main.scss` as entry point)
- `public/admin/` - Decap CMS configuration (`config.yml`, `index.html`)

### Key Patterns

- Components use `"use client"` directive for interactivity
- Animation hooks wrap GSAP/ScrollTrigger logic (`useGSAP` from @gsap/react)
- Content loaded from JSON files in `data/` or parsed from Markdown via `getMarkDownData()`
- `cn()` utility (in `utils/cn.ts`) merges classnames with clsx + tailwind-merge
- Theme provider wraps app with `ThemeModeProvider` and `SmoothScrollProvider`

### CMS Content Editing

- Edit `data/*.json` files directly or use CMS at `/admin/`
- Markdown files use YAML frontmatter parsed by gray-matter
- CMS config: `public/admin/config.yml`
- **Local dev:** Uses `test-repo` backend (no auth needed)
- **Production:** Switch to `github` backend with OAuth

## Environment Variables

Cloudinary credentials required in `.env.local`:
```
CLOUDINARY_URL=cloudinary://...
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
```

## Code Style

- ESLint extends `next/core-web-vitals` + Prettier
- Tailwind class ordering enforced
- Print width: 120, single quotes, no semicolons
- `@next/next/no-img-element` is disabled (uses native img with Cloudinary)
