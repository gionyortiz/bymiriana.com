# byMiriana Photography Portfolio

Modern, professional photography portfolio website built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

## 🚀 Features

- **Modern Design** - Clean, minimalist aesthetic that showcases photography
- **Fully Responsive** - Mobile-first design optimized for all devices
- **SEO Optimized** - Meta tags, Open Graph, sitemap, and robots.txt
- **Fast Performance** - Next.js App Router with Server Components
- **Type Safe** - Full TypeScript support
- **Easy Deployment** - Static export ready for GitHub Pages, Vercel, or Netlify

## 📁 Project Structure

```
src/
├── app/
│   ├── about/         # About page
│   ├── contact/       # Contact form
│   ├── portfolio/     # Portfolio gallery
│   ├── layout.tsx     # Root layout with Header/Footer
│   ├── page.tsx       # Homepage
│   ├── globals.css    # Global styles
│   ├── loading.tsx    # Loading state
│   ├── error.tsx      # Error boundary
│   ├── not-found.tsx  # 404 page
│   ├── robots.ts      # Robots.txt
│   ├── sitemap.ts     # Dynamic sitemap
│   └── opengraph-image.tsx  # OG image
├── components/
│   ├── Header.tsx     # Navigation header
│   └── Footer.tsx     # Site footer
└── public/            # Static assets (add your photos here)
```

## 🛠️ Development

### Prerequisites

- Node.js 20+ installed
- npm, yarn, pnpm, or bun

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

This generates a static export in the `out/` directory.

## 📸 Adding Your Photos

1. Place your photos in the `/public` folder
2. Update image references in the components
3. Use Next.js `<Image>` component for automatic optimization

## 🌐 Deployment

### GitHub Pages

1. Update `next.config.ts` with your repo name if needed:
   ```typescript
   basePath: '/your-repo-name'
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. Deploy the `out/` folder to GitHub Pages

### Vercel (Recommended)

1. Push code to GitHub
2. Import repository in Vercel
3. Deploy automatically

### Netlify

1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `out`

## 🎨 Customization

### Update Content

- **Homepage Hero**: Edit `src/app/page.tsx`
- **About Page**: Edit `src/app/about/page.tsx`
- **Portfolio**: Edit `src/app/portfolio/page.tsx`
- **Contact Info**: Edit `src/app/contact/page.tsx`
- **Header/Footer**: Edit `src/components/Header.tsx` and `src/components/Footer.tsx`

### Update Colors/Fonts

Edit `src/app/globals.css` and `src/app/layout.tsx`

### Update SEO

Edit metadata in `src/app/layout.tsx` and individual page files

## 📝 License

© 2025 byMiriana. All rights reserved.

## 📧 Contact

For inquiries: contact@bymiriana.com
