/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove output: export to allow normal development
  output: "export",

  // Disable ESLint during builds
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Image optimization
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Compression
  compress: true,

  // PoweredByHeader
  poweredByHeader: false,

  // Environment variables for SEO
  env: {
    SITE_URL: "https://perla-it.com",
    SITE_NAME: "PERLA Code Innovators",
  },
};

module.exports = nextConfig;
