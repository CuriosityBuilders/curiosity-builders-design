/**
 * Route catch-all pour les pages non trouvées dans [locale]
 *
 * Cette route intercepte toutes les URLs non définies sous [locale] (ex: /fr/unknown-page)
 * et appelle explicitement notFound() pour afficher la page not-found.tsx localisée.
 *
 * Nécessaire car avec next-intl et la structure [locale], Next.js ne détecte pas
 * automatiquement le not-found.tsx dans [locale] pour les routes inconnues.
 */
import { notFound } from "next/navigation";

export default function CatchAllPage() {
  notFound();
}
