# Plan d'implémentation i18n avec next-intl

Ce document décrit toutes les étapes nécessaires pour implémenter l'internationalisation (i18n) avec `next-intl` dans une application Next.js. Ce plan est conçu pour être compréhensible par une IA et peut être réutilisé dans d'autres projets.

## Vue d'ensemble

`next-intl` est une bibliothèque qui permet d'ajouter l'internationalisation à une application Next.js en utilisant l'App Router. Elle gère automatiquement le routage basé sur les locales, le chargement des messages traduits, et fournit des hooks et composants pour utiliser les traductions.

## Prérequis

- Next.js 13+ (App Router)
- TypeScript (recommandé)
- Node.js 18+

## Étapes d'implémentation

### 1. Installation des dépendances

Installer `next-intl` via npm :

```bash
npm install next-intl
```

### 2. Structure des fichiers de messages

Créer un dossier `messages/` à la racine du projet (ou dans `src/` selon votre structure) et créer un fichier JSON pour chaque locale supportée.

**Structure recommandée :**
```
messages/
  ├── en.json
  ├── fr.json
  └── [autres-locales].json
```

**Exemple de contenu pour `messages/en.json` :**
```json
{
  "common": {
    "home": "Home",
    "about": "About",
    "contact": "Contact",
    "readMore": "Read more",
    "back": "Back",
    "notFound": "Page not found",
    "goHome": "Go home",
    "language": "Language"
  },
  "home": {
    "title": "Welcome",
    "description": "This is the home page"
  }
}
```

**Exemple de contenu pour `messages/fr.json` :**
```json
{
  "common": {
    "home": "Accueil",
    "about": "À propos",
    "contact": "Contact",
    "readMore": "Lire la suite",
    "back": "Retour",
    "notFound": "Page non trouvée",
    "goHome": "Retour à l'accueil",
    "language": "Langue"
  },
  "home": {
    "title": "Bienvenue",
    "description": "Ceci est la page d'accueil"
  }
}
```

**Points importants :**
- Les fichiers JSON doivent être valides
- Utiliser des namespaces (comme `common`, `home`) pour organiser les traductions
- Les clés peuvent être imbriquées pour une meilleure organisation
- Utiliser la même structure dans tous les fichiers de messages

### 3. Configuration du routage i18n

Créer un fichier `src/i18n/routing.ts` (ou `i18n/routing.ts` selon votre structure) :

```typescript
import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  // Liste de toutes les locales supportées
  locales: ["en", "fr"], // Ajouter d'autres locales selon vos besoins

  // Locale utilisée par défaut quand aucune locale ne correspond
  defaultLocale: "en",
});

// Wrappers légers autour des APIs de navigation de Next.js
// qui prennent en compte la configuration de routage
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
```

**Explications :**
- `locales` : Tableau des codes de langue supportés (ISO 639-1)
- `defaultLocale` : Locale par défaut si aucune n'est détectée
- `createNavigation` : Crée des composants et hooks qui gèrent automatiquement le préfixe de locale dans les URLs

### 4. Configuration de la requête i18n

Créer un fichier `src/i18n/request.ts` (ou `i18n/request.ts`) :

```typescript
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  // Cela correspond typiquement au segment `[locale]`
  let locale = await requestLocale;

  // S'assurer qu'une locale valide est utilisée
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
```

**Explications :**
- `getRequestConfig` : Fonction qui configure next-intl pour chaque requête
- `requestLocale` : La locale extraite de l'URL (segment `[locale]`)
- Validation de la locale : Si la locale n'est pas valide, utiliser la locale par défaut
- Chargement des messages : Importer dynamiquement le fichier JSON correspondant à la locale

**Note importante :** Ajuster le chemin d'import des messages selon votre structure de projet (`../../messages/` ou `../../../messages/`).

### 5. Configuration Next.js

Modifier `next.config.ts` (ou `next.config.js`) pour intégrer le plugin next-intl :

```typescript
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  /* vos options de configuration ici */
};

export default withNextIntl(nextConfig);
```

**Explications :**
- `createNextIntlPlugin` : Crée un plugin Next.js qui intègre next-intl
- Le chemin vers `request.ts` doit être correct selon votre structure
- Le plugin doit envelopper votre configuration Next.js

### 6. Restructuration de l'App Router

Next.js avec next-intl nécessite une structure spécifique pour l'App Router. Toutes les pages doivent être dans un dossier `[locale]`.

**Structure avant :**
```
app/
  ├── layout.tsx
  ├── page.tsx
  └── about/
      └── page.tsx
```

**Structure après :**
```
app/
  ├── layout.tsx (root layout, minimal)
  └── [locale]/
      ├── layout.tsx (layout avec next-intl)
      ├── page.tsx
      └── about/
          └── page.tsx
```

### 7. Root Layout (app/layout.tsx)

Le root layout doit être minimal et ne pas inclure de logique i18n :

```typescript
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My App",
  description: "My App Description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}
```

**Points importants :**
- Ne pas mettre d'attribut `lang` sur `<html>` ici (sera géré par le layout de locale)
- `suppressHydrationWarning` est recommandé pour éviter les warnings lors du changement de locale

### 8. Layout de locale (app/[locale]/layout.tsx)

Créer un layout spécifique pour les locales qui configure next-intl :

```typescript
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // S'assurer que la locale entrante est valide
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  // Fournir tous les messages au côté client
  // C'est la façon la plus simple de commencer
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
```

**Explications :**
- `params` est maintenant une Promise dans Next.js 15+ (utiliser `await params`)
- Validation de la locale : Si la locale n'est pas valide, afficher une 404
- `getMessages()` : Récupère les messages pour la locale actuelle
- `NextIntlClientProvider` : Fournit les messages aux composants clients

### 9. Composant pour mettre à jour l'attribut lang (optionnel mais recommandé)

Créer un composant client pour mettre à jour dynamiquement l'attribut `lang` de l'élément `<html>` :

**Fichier : `src/components/LocaleHtml.tsx`**

```typescript
"use client";

import { useLocale } from "next-intl";
import { useEffect } from "react";

export function LocaleHtml() {
  const locale = useLocale();

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
```

**Utilisation dans `app/[locale]/layout.tsx` :**
```typescript
import { LocaleHtml } from "@/components/LocaleHtml";

// ... dans le return
<NextIntlClientProvider messages={messages}>
  <LocaleHtml />
  {children}
</NextIntlClientProvider>
```

### 10. Utilisation dans les pages (Server Components)

Dans les Server Components, utiliser `getTranslations` :

```typescript
import { getTranslations } from "next-intl/server";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });

  return (
    <div>
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
    </div>
  );
}
```

**Explications :**
- `getTranslations` : Hook serveur pour obtenir les traductions
- `namespace` : Le namespace à utiliser (correspond à une clé de premier niveau dans les JSON)
- `t("key")` : Récupère la traduction pour la clé spécifiée

**Pour les traductions avec du contenu riche (HTML) :**
```typescript
const t = await getTranslations({ locale, namespace: "home" });

// Dans le JSX
<p>
  {t.rich("description", {
    templates: (chunks) => (
      <a href="/templates" className="font-medium">
        {chunks}
      </a>
    ),
  })}
</p>
```

### 11. Utilisation dans les composants clients

Dans les Client Components, utiliser `useTranslations` :

```typescript
"use client";

import { useTranslations } from "next-intl";

export function MyComponent() {
  const t = useTranslations("common");

  return (
    <div>
      <button>{t("home")}</button>
      <button>{t("about")}</button>
    </div>
  );
}
```

**Explications :**
- `useTranslations` : Hook client pour obtenir les traductions
- Le namespace est passé comme argument
- Utiliser `"use client"` en haut du fichier

### 12. Navigation avec les locales

Utiliser les composants de navigation exportés depuis `routing.ts` au lieu de ceux de Next.js :

**Au lieu de :**
```typescript
import Link from "next/link";
```

**Utiliser :**
```typescript
import { Link } from "@/i18n/routing";
```

**Exemple d'utilisation :**
```typescript
import { Link } from "@/i18n/routing";

export function Navbar() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </nav>
  );
}
```

**Pour les redirections :**
```typescript
import { redirect } from "@/i18n/routing";

// Dans un Server Component ou Server Action
redirect("/about");
```

**Pour la navigation programmatique côté client :**
```typescript
"use client";

import { useRouter } from "@/i18n/routing";

export function MyComponent() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/about");
  };

  return <button onClick={handleClick}>Go to About</button>;
}
```

### 13. Création d'un sélecteur de langue

Créer un composant pour changer de langue :

**Fichier : `src/components/LanguageSwitcher.tsx`**

```typescript
"use client";

import { routing, usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleLocaleChange = (newLocale: string) => {
    // pathname de next-intl exclut déjà le préfixe de locale
    // router.replace gérera automatiquement le remplacement de la locale
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex gap-2">
      {routing.locales.map((loc) => {
        const isActive = locale === loc;
        return (
          <button
            key={loc}
            type="button"
            onClick={() => handleLocaleChange(loc)}
            className={isActive ? "active" : ""}
          >
            {loc.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
```

**Explications :**
- `useLocale()` : Hook pour obtenir la locale actuelle
- `usePathname()` : Retourne le pathname sans le préfixe de locale
- `router.replace()` : Remplace l'URL actuelle en changeant la locale

### 14. Génération de métadonnées avec i18n

Pour les pages avec métadonnées dynamiques :

```typescript
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "page" });

  return {
    title: t("title"),
    description: t("description"),
  };
}
```

### 15. Routes dynamiques avec locales

Pour les routes dynamiques comme `app/[locale]/[slug]/page.tsx` :

```typescript
export default async function DynamicPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: "page" });

  // Votre logique ici
  return (
    <div>
      <h1>{t("title")}</h1>
      <p>Slug: {slug}</p>
    </div>
  );
}
```

**Points importants :**
- `params` contient à la fois `locale` et les autres paramètres dynamiques
- Toujours extraire `locale` en premier pour l'utiliser avec `getTranslations`

### 16. Configuration TypeScript (optionnel mais recommandé)

Ajouter des types pour améliorer l'autocomplétion dans `tsconfig.json` :

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

Et créer un fichier `src/types/next-intl.d.ts` :

```typescript
type Messages = typeof import("../messages/en.json");

declare global {
  // Use type safe message keys with `next-intl`
  interface IntlMessages extends Messages {}
}
```

## Checklist de vérification

- [ ] `next-intl` installé
- [ ] Fichiers de messages créés pour chaque locale
- [ ] `src/i18n/routing.ts` créé et configuré
- [ ] `src/i18n/request.ts` créé et configuré
- [ ] `next.config.ts` modifié avec le plugin next-intl
- [ ] Structure `app/[locale]/` créée
- [ ] Root layout (`app/layout.tsx`) minimal
- [ ] Layout de locale (`app/[locale]/layout.tsx`) créé
- [ ] Composant `LocaleHtml` créé (optionnel)
- [ ] Toutes les pages déplacées dans `app/[locale]/`
- [ ] `Link` et `redirect` importés depuis `@/i18n/routing`
- [ ] `getTranslations` utilisé dans les Server Components
- [ ] `useTranslations` utilisé dans les Client Components
- [ ] Sélecteur de langue créé (optionnel)
- [ ] Métadonnées configurées avec i18n (si nécessaire)

## Points d'attention

1. **Structure des routes** : Toutes les pages doivent être dans `app/[locale]/`, pas directement dans `app/`

2. **Import des messages** : Vérifier que le chemin dans `request.ts` correspond à votre structure de fichiers

3. **Navigation** : Toujours utiliser les composants de `@/i18n/routing` au lieu de ceux de Next.js

4. **Params dans Next.js 15+** : `params` est maintenant une Promise, toujours utiliser `await params`

5. **Namespaces** : Organiser les traductions en namespaces pour une meilleure maintenabilité

6. **Fallback** : Toujours prévoir une locale par défaut et des valeurs de fallback dans les traductions

7. **SEO** : Mettre à jour l'attribut `lang` de l'élément `<html>` pour le SEO

8. **Performance** : Les messages sont chargés côté serveur et passés au client, ce qui est optimal pour le SEO

## Exemples de cas d'usage

### Traduction avec interpolation

**Dans `messages/en.json` :**
```json
{
  "greeting": "Hello, {name}!"
}
```

**Dans le code :**
```typescript
const t = await getTranslations("common");
t("greeting", { name: "John" }); // "Hello, John!"
```

### Traduction avec pluriel

**Dans `messages/en.json` :**
```json
{
  "items": "{count, plural, =0 {No items} one {# item} other {# items}}"
}
```

**Dans le code :**
```typescript
const t = await getTranslations("common");
t("items", { count: 0 }); // "No items"
t("items", { count: 1 }); // "1 item"
t("items", { count: 5 }); // "5 items"
```

### Redirection vers la locale par défaut

Pour rediriger automatiquement `/` vers `/en` (ou la locale par défaut), créer `app/page.tsx` :

```typescript
import { redirect } from "next/navigation";
import { routing } from "@/i18n/routing";

export default function RootPage() {
  redirect(`/${routing.defaultLocale}`);
}
```

## Ressources

- [Documentation officielle next-intl](https://next-intl-docs.vercel.app/)
- [Guide de migration](https://next-intl-docs.vercel.app/docs/getting-started/app-router)
- [Exemples GitHub](https://github.com/amannn/next-intl/tree/main/examples)

## Notes finales

Ce plan couvre l'implémentation complète de i18n avec next-intl. Chaque étape est nécessaire pour que le système fonctionne correctement. L'ordre des étapes est important, notamment la configuration avant la restructuration des routes.

Pour une IA qui doit implémenter cela, suivre les étapes dans l'ordre et vérifier chaque point de la checklist avant de passer à l'étape suivante.
