import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Exclure sitemap.xml et robots.txt du matcher
  matcher: [
    // Toutes les routes SAUF :
    // - /api, /_next, /_vercel, /studio
    // - Les fichiers avec extension (images, fonts, etc.)
    // - sitemap.xml et robots.txt
    "/((?!api|_next|_vercel|studio|sitemap\\.xml|robots\\.txt|.*\\..*).*)"],
};
