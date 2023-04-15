/**
 * @type {import('next').NextConfig}
 **/
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  // Enable the bundle analyzer plugin when ANALYZE environment variable is set to true
  enabled: process.env.ANALYZE === "true",
});

// Next.js configuration options
const nextConfig = {
  // Enable React strict mode for improved error handling
  reactStrictMode: true,

  // Compiler configuration
  compiler: {
    // Remove console logs when building for production, except for errors
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error"] } : false,
  },

  // Image optimization options
  images: {
    // Define the formats to be used for optimized images
    formats: ['image/avif', 'image/webp'],
  },
  // Languages
  i18n: {
    locales: ["fr"],
    defaultLocale: "fr",
  },
  experimental: {
    appDir: true,
  },
};

// Export the Next.js config with the bundle analyzer plugin enabled
module.exports = withBundleAnalyzer(nextConfig);