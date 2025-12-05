import type { MetadataRoute } from "next";

/**
 * Robots.txt configuration
 * Controls search engine crawler access to the site
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/studio/", // Sanity Studio - should not be indexed
          "/api/", // API routes - should not be indexed
          "/_next/", // Next.js internal files
          "/_vercel/", // Vercel internal files
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
