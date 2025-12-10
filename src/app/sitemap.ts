import { routing } from "@/i18n/routing";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  // Pages principales du site
  const routes = [
    "", // Homepage
    "signals",
    "services",
    "methode",
    "contact",
    "mentions-legales",
    "politique-confidentialite",
  ];

  // Générer les URLs pour chaque locale
  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    for (const route of routes) {
      let url = baseUrl;

      // Toutes les locales sont maintenant dans l'URL (localePrefix: "always")
      url += `/${locale}`;

      if (route) {
        url += `/${route}`;
      }

      // Priorité et fréquence selon le type de page
      let priority = 0.8;
      let changeFrequency:
        | "always"
        | "hourly"
        | "daily"
        | "weekly"
        | "monthly"
        | "yearly"
        | "never" = "weekly";

      if (route === "") {
        // Homepage - priorité maximale
        priority = 1.0;
        changeFrequency = "daily";
      } else if (route === "signals" || route === "services") {
        // Pages importantes - haute priorité
        priority = 0.9;
        changeFrequency = "weekly";
      } else if (
        route === "mentions-legales" ||
        route === "politique-confidentialite"
      ) {
        // Pages légales - basse priorité, changent rarement
        priority = 0.3;
        changeFrequency = "monthly";
      }

      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency,
        priority,
      });
    }
  }

  return sitemapEntries;
}
