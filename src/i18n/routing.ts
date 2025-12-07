import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // Liste de toutes les locales supportées
  locales: ["en", "fr"],

  // Locale utilisée par défaut quand aucune locale ne correspond
  defaultLocale: "fr",

  // Toujours afficher la locale dans l'URL pour une meilleure cohérence
  localePrefix: "always",
});

// Wrappers légers autour des APIs de navigation de Next.js
// qui prennent en compte la configuration de routage
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
