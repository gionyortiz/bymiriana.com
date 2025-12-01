import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'export', // Enable static export for GitHub Pages
  images: {
    unoptimized: true, // Required for static export
  },
  // basePath can be set for GitHub Pages repo deployment
  // basePath: '/repo-name',
};

export default nextConfig;
