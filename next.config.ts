import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  compiler: {
    // Remove console.log in production
    removeConsole:
      process.env.NODE_ENV === "production"
        ? {
            exclude: ["error", "warn"], // Keep console.error and console.warn
          }
        : false,
  },
  experimental: {
    // Optimize package imports for better tree-shaking
    // Only loads the modules you actually use, reducing bundle size
    optimizePackageImports: [
      "framer-motion", // Heavy animation library
      "@sanity/icons", // Icon library
      "@tsparticles/react", // Particle library
      "@tsparticles/engine", // Particle engine
      "@tsparticles/slim", // Slim particle library
      // Note: @tabler/icons-react and lucide-react are already optimized by default
      // but can be explicitly added if needed
    ],
    // Exclure les packages Sanity du bundle des pages publiques
    serverComponentsExternalPackages: [
      "@sanity/client",
      "@sanity/vision", // Vision seulement dans Studio
    ],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/images/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // Cache 30 jours
    qualities: [100, 90, 85, 80, 70],
  },
  compress: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
        ],
      },
    ];
  },
};

export default withNextIntl(nextConfig);
