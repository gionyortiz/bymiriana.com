# Copilot Instructions for bymiriana.com

## Project Overview
Personal photography portfolio website emphasizing **nature, moments, and meaning**. Brand voice: intimate, artsy, patient—capturing what others pass by (roses, light, street corners, quiet beauty).

**Tech Stack**: Next.js 16 (React 19) + TypeScript + Tailwind CSS v4 + React Compiler enabled

## Architecture & Key Patterns

### App Router Structure
- **Server Components by default** - all pages are RSC unless marked `'use client'`
- **Client Components** only when needed: `Header.tsx` (menu state), `contact/page.tsx` (form state)
- Path aliasing: `@/*` maps to `./src/*` (see `tsconfig.json`)

### Layout System
Root layout (`src/app/layout.tsx`) includes:
- Google Fonts: Inter (body) + Playfair Display (serif/accent)
- CSS variables: `--font-inter`, `--font-playfair` applied via `className`
- `<Header>` + `{children}` + `<Footer>` wrapper
- `main` has `padding-top: 4rem` to offset fixed header (see `globals.css`)

### Design System (globals.css)
**Brand Colors** (CSS variables):
```css
--primary: #d4a574      /* Warm gold */
--primary-dark: #b88b5f /* Darker gold */
--secondary: #8b9dc3    /* Cool blue */
--accent: #e8d5c4       /* Light cream */
```

**Custom Gradient Utilities**:
- `.gradient-warm` - gold tones (hero CTAs)
- `.gradient-cool` - blue tones
- `.gradient-soft` - triple gradient for hero sections

### Page Metadata
Every page exports `Metadata` object for SEO:
```tsx
export const metadata: Metadata = {
  title: 'About - byMiriana',
  description: '...',
};
```

## Development Workflow

### Commands
```bash
npm run dev    # Dev server (localhost:3000)
npm run build  # Production build
npm run lint   # ESLint (uses flat config in eslint.config.mjs)
```

### Build Configuration
- **React Compiler**: Enabled in `next.config.ts` (`reactCompiler: true`)
- **PostCSS**: Tailwind v4 via `@tailwindcss/postcss` plugin
- **No static export** configured yet—add `output: 'export'` for GitHub Pages

## Code Conventions

### Component Style
- **Styling**: Tailwind utilities inline, no CSS modules
- **Responsive**: Mobile-first (`md:`, `lg:` breakpoints)
- **Hover states**: `hover:bg-[color]`, `hover:shadow-xl`, `group-hover:` patterns
- **Transitions**: Always add `transition-all` or specific property for smooth UX

### Typography
- Headings: `font-light` (or no weight) + large text sizes
- Body: Inter font stack
- Accents: `font-serif italic` for Playfair Display
- Brand name: `by<span className="...">Miriana</span>` pattern

### Color Usage Examples
```tsx
// Buttons (primary action)
className="bg-[#d4a574] hover:bg-[#b88b5f]"

// Borders/accents
className="border-[#e8d5c4]"

// Secondary buttons
className="bg-[#8b9dc3]"
```

### Navigation Links
Use Next.js `<Link>` from `next/link`:
```tsx
<Link href="/portfolio" className="...">Portfolio</Link>
```

## Component Patterns

### Header (`src/components/Header.tsx`)
- **Fixed positioning**: `fixed top-0 z-50`
- **Mobile menu**: Toggle state with hamburger animation
- **Styling**: White background with blur (`bg-white/95 backdrop-blur-sm`)

### Forms (`contact/page.tsx`)
- **Client Component**: Form state requires `'use client'`
- Success message with auto-dismiss (5s timeout)
- Submit simulation (replace with actual API endpoint)
- Gradient backgrounds on form container for visual interest

### Image Placeholders
Current portfolio uses gradient divs as placeholders:
```tsx
<div className="relative aspect-[3/4] bg-gradient-to-br from-[#e8d5c4] to-[#d4a574]">
```
**To add real photos**: Replace with `<Image>` component from `next/image`

## Critical Files

- `src/app/globals.css` - Brand colors, gradients, typography
- `src/app/layout.tsx` - Root layout with fonts + metadata
- `src/components/Header.tsx` - Navigation (client component)
- `src/app/page.tsx` - Homepage (hero, featured work, services, CTA sections)

## SEO & Metadata

- `robots.ts` - Dynamic robots.txt generation
- `sitemap.ts` - Dynamic sitemap (update with actual routes)
- `opengraph-image.tsx` - OG image generator
- Root metadata in `layout.tsx` with full OpenGraph tags

## Common Tasks

**Add a new page**:
1. Create `src/app/[route]/page.tsx`
2. Export `Metadata` object
3. Add link in `Header.tsx` and `Footer.tsx`

**Update brand colors**: Edit CSS variables in `src/app/globals.css`

**Add photos**: Use `next/image` with images in `/public` folder:
```tsx
<Image src="/photo.jpg" alt="..." width={800} height={600} />
```

## Email Setup (Zoho Mail Free)

**Free email**: 1 account with 5GB storage at contact@bymiriana.com

**Setup Steps**:
1. Go to [Zoho Mail](https://www.zoho.com/mail/) → Sign up for Free plan
2. Add domain: bymiriana.com
3. Create email: contact@bymiriana.com
4. **Add DNS records in Cloudflare**:
   ```
   MX Records:
   Priority 10: mx.zoho.com
   Priority 20: mx2.zoho.com
   Priority 50: mx3.zoho.com
   
   TXT Record (SPF):
   Name: @
   Value: v=spf1 include:zoho.com ~all
   
   TXT Record (DMARC):
   Name: _dmarc
   Value: v=DMARC1; p=none; rua=mailto:contact@bymiriana.com
   
   CNAME Record (Domain verification):
   Name: zb[uniquecode] (Zoho provides this)
   Target: zmverify.zoho.com
   ```
5. Verify domain in Zoho dashboard
6. Access webmail: https://mail.zoho.com

**Contact Form Integration**: Update form submission to send via Zoho SMTP or use Web3Forms/Formspree

---
*Last updated: December 1, 2025*
