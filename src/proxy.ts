import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Matcher pour toutes les routes sauf les fichiers statiques et les routes API
  matcher: ["/((?!api|_next|_vercel|studio|.*\\..*).*)"],
};
