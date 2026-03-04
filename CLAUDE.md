# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
npm run dev        # Start dev server with Turbo mode

# Production
npm run build      # Build for production
npm run export     # Export as static site (output: /out/)
npm run start      # Start production server

# Code Quality
npm run lint       # ESLint with auto-fix
```

No test suite exists in this project.

## Architecture

This is a **Next.js 15 static-export website** for Perla AI (a software company in Tunis). The site uses `output: "export"` in `next.config.js`, generating a static `/out/` directory.

### Key Tech

- **UI**: HeroUI component library + Tailwind CSS + Framer Motion
- **i18n**: Custom `useTranslations()` hook (`/hooks/use-translation.ts`) backed by `/i18n/translations.ts`. Supports English, French, Arabic, Dutch.
- **Theming**: `next-themes` for dark/light mode, class-based
- **Fonts**: Inter (default), Fira Code (mono), Cairo (Arabic)

### Page Structure

Pages live in `/pages/` and are organized into subdirectories by section. `pages/index.tsx` is the main entry point — it composes section components from these subdirectories:

```
pages/
├── _app.tsx                  # Providers: HeroUIProvider, NextThemesProvider, I18nProvider
├── _document.tsx             # JSON-LD structured data, meta/OG tags, font preloads
├── index.tsx                 # Homepage — assembles all sections
├── hero/                     # Hero section variants
├── services/                 # Services section
├── technologies/             # Tech stack section
├── testimonials/             # Testimonials section
├── projects/                 # Project showcase variants
├── additional-details/       # Additional info sections
├── footer/                   # Footer variants
└── brand-scrooling-banner/   # Scrolling logo banner
```

### RTL / Arabic Support

- `_app.tsx` detects locale and sets `dir="rtl"` on the document when Arabic is active
- Dedicated CSS: `styles/arabic-font.css`, `styles/arabic-rtl.css`
- `isRTL` flag available in components for conditional styling

### Site Config

`/config/site.ts` holds all company metadata (name, contact, services, SEO data). This is the single source of truth for site-wide content and is used in `_document.tsx` for structured data and meta tags.

### ESLint Rules

The project enforces `no-console` and strict import ordering. Run `npm run lint` before committing. The ESLint config disables checks during `next build` (configured in `next.config.js`).
