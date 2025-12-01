# Copilot Instructions for bymiriana.com

## Project Overview
Modern, clean photography portfolio website for Miriana. Focus: **short, personal, artsy brand** that people trust and click immediately.

Primary domain: **bymiriana.com** (expandable to art, video, blog beyond just photos)

## Design Philosophy
- **Simple & modern** - people should like it right away
- **Clean aesthetic** - showcase photos, not clutter
- **Personal brand feel** - "by Miriana" positioning
- **Mobile-first** - most viewers will be on phones
- **Fast loading** - optimize images without quality loss

## Architecture
**Next.js 16** (React 19) with TypeScript and Tailwind CSS v4
- App Router for file-based routing
- Server Components by default for optimal performance
- Built-in Image component for automatic optimization
- `/src/app` - pages and layouts
- `/public` - static assets (photos, favicon)

## Development Workflow
```bash
npm run dev        # Start dev server (http://localhost:3000)
npm run build      # Production build
npm run start      # Run production server
npm run lint       # ESLint checks
```

**GitHub Pages deployment**: Use `next export` or deploy to Vercel/Netlify

## Code Conventions
- **TypeScript** for type safety
- **Tailwind CSS v4** for styling (utility-first)
- Use `next/image` for all photos (automatic optimization)
- Server Components by default, Client Components only when needed (`'use client'`)
- File naming: kebab-case for routes, PascalCase for components
- Mobile-first responsive breakpoints (`sm:`, `md:`, `lg:`, `xl:`)

## Key Files & Directories
- `/src/app/page.tsx` - Homepage
- `/src/app/layout.tsx` - Root layout (header/footer)
- `/src/components/` - Reusable React components
- `/public/` - Images and static assets
- `tailwind.config.ts` - Theme customization
- `next.config.ts` - Next.js configuration

## Content Strategy
- Easy to update: "Check my photos at bymiriana dot com"
- Header/footer customized to domain name
- Portfolio categories/collections
- Contact/booking flow

## Future Expansion
Site architecture supports adding:
- Blog/articles
- Video portfolio
- Art/illustration work
- Online booking system

---
*Last updated: December 1, 2025*
