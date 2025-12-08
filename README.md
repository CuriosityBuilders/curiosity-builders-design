# Curiosity.Builders - Site Web

Plateforme d'accélération de vos projets de lieux. Centrée sur l'humain, guidée par la donnée, augmentée par l'IA.

## Vue d'ensemble

Site web pour Curiosity.Builders construit avec Next.js 16, React 19, TypeScript, Tailwind CSS v4, Sanity CMS et next-intl pour l'internationalisation.

## Tone and Style

Ce site se situe à l'intersection entre **boutique consultancy** et **innovation lab**. Le choix de la stack technique affecte non seulement le design mais aussi la crédibilité et l'image moderne que nous projetons.

Le site doit refléter :

- Une approche haut de gamme et stratégique
- Une capacité d'innovation et d'expérimentation
- Une crédibilité technique et méthodologique
- Une vision tournée vers l'avenir (IA, données, innovation urbaine)

## Architecture Overview - Curiosity.Builders Offering

### Tiers de services

| Tier       | Purpose                                                   | URL                   |
| ---------- | --------------------------------------------------------- | --------------------- |
| **Tier 0** | Awareness & intelligence (newsletter, thought leadership) | `/` (Home) + Substack |
| **Tier 1** | Diagnostics & applied intelligence                        | `/services`           |
| **Tier 2** | Externalized R&D & Innovation Program                     | `/services`           |
| **Tier 3** | Venture Development & Pilots                              | `/services`           |

### Pages complémentaires

- **Cases & credibility**: Références et études de cas intégrées dans les pages
- **Contact**: `/contact`
- **Méthode**: `/methode` - Présentation de la méthode Curiosity Loop
- **Signals**: `/signals` - Veille stratégique, études, livre

## Stack technique

- **Framework**: Next.js 16 (App Router)
- **React**: v19.2.0
- **TypeScript**: v5 (strict mode)
- **Styling**: Tailwind CSS v4
- **CMS**: Sanity v4.19.0
- **Internationalisation**: next-intl v4.5.5
- **Linter/Formatter**: Biome v2.2.0

### CMS & Contenu

- **Sanity Studio**: Accessible via `/studio`
- **Document Internationalization**: Gestion des traductions FR/EN
- **Visual Editing**: Édition visuelle avec next-sanity
- **Draft Mode**: Prévisualisation des contenus en brouillon

### Besoins techniques

#### Phase actuelle

- Site web haut de gamme, orienté contenu (visual storytelling, portfolio, service tiers clairs)
- CMS Sanity pour les études de cas, insights et toutes les pages
- Internationalisation FR/EN avec next-intl
- Intégration newsletter avec Substack
- Automations optionnelles :
  - Formulaires → Notion/Zapier
  - Tracking de téléchargement PDF
  - Analytics

#### Extensibilité future

- Plateforme AI-agent en version bêta

## Design System

### Inspirations

Le design s'inspire de plusieurs références pour créer une identité unique :

1. **Minimalist studio** - Design épuré, espacement généreux
2. **Experimental lab** - Innovation, expérimentation visuelle
3. **AI agencies** - Modernité, crédibilité tech
4. **Strategic consulting agencies** - Professionnalisme, expertise

Référence principale : [Subrequest](https://subrequest.com/fr) - épuré, moderne, avec un espacement généreux, des sections bien délimitées, une navigation simple, une typographie claire et des CTAs bien visibles.

### Typographie

- **Titres**: Epilogue (Google Fonts)
  - Tailles généreuses : `text-4xl` à `text-6xl` pour H1, `text-2xl` à `text-4xl` pour H2
  - Espacement de ligne confortable : `leading-relaxed` à `leading-loose`
- **Texte**: Helvetica (police système)
  - Espacement de ligne : `leading-relaxed` pour une lisibilité optimale
  - Fallback : Arial, sans-serif

### Palette de couleurs

**Direction** : Fond blanc, texte noir, accents discrets.

- **Noir**: `#000000` - Textes principaux
- **Blanc**: `#FFFFFF` - Fonds principaux
- **Gris clair**: `#F9F9F9` - Fonds alternatifs (bandeaux off-white)

**Principes**: Contrastes nets, fonds blancs purs, textes noirs pour un design épuré et professionnel. Alternance de sections noir/blanc pour créer du rythme visuel.

### Images

**Direction** : Renders architecturaux, vie urbaine, scènes communautaires, visualisations de données. Préférer grayscale avec une couleur d'accent.

- **Règle générale**: Images en noir et blanc / grayscale
- **Exception**: Cas clients réels → en couleur (ils incarnent la mise en œuvre de la vision)
- **Types d'images**:
  - Renders architecturaux
  - Scènes de vie urbaine
  - Scènes communautaires
  - Visualisations de données

### Animations

- **Scroll effects**: Fade-in par sections (latence max 1-2 secondes)
- **Scroll reveal**: Apparition progressive des cards au scroll
- **Hover effects**:
  - Soulignés au hover pour les liens
  - Transitions subtiles sur les cards
  - Effets hover sur les CTAs
- **Ligne de progression**: Ligne verticale animée (1px, marge gauche 10%) avec pastilles aux sections clés

### Icons & lignes

- **Style**: SVG monochrome
- **Trait**: Ligne fine architecturale (blueprint)
- **Ligne verticale de progression**:
  - 1px de largeur
  - Position: marge gauche 10%
  - Visible sur desktop, discrète sur mobile
  - Animation: "pousse" lentement au scroll
  - Pastilles animées à chaque section clé

### Layout

**Direction** : Blocs modulaires pleine largeur, beaucoup d'espace blanc, révélations douces au scroll.

- **Sections**: Espacement vertical généreux
  - Hero sections: `py-24` à `py-48` (responsive)
  - Sections principales: `py-20`
  - Sections secondaires: `py-16`
  - Bandeaux: `py-12`
- **Padding horizontal**: Confortable (`px-4` à `px-8` selon le breakpoint)
- **Cards**: Espacement interne généreux (`p-6` à `p-8`)
- **CTAs**: Padding confortable (`px-6 py-3`)
- **Blocs modulaires**: Pleine largeur avec conteneurs max-width pour le contenu

### Composants UI

#### Button

**Style CTA** : Boutons texte (outlined ou underline au hover), lowercase pour un ton minimaliste.

- Style épuré inspiré Subrequest
- Bordures arrondies (`rounded-full`)
- Padding généreux
- Variantes:
  - `primary`: Fond noir, texte blanc
  - `secondary`: Bordure, fond blanc
  - `inverted`: Fond blanc, texte noir (pour fonds sombres)
  - `secondary-inverted`: Bordure blanche, fond transparent (pour fonds sombres)

#### Card

- Espacement généreux
- Bordures subtiles
- Ombres légères
- Transitions au hover

#### Section

- Wrapper de sections avec espacement vertical généreux
- Classes utilitaires: `py-16`, `py-20`, `py-24`

#### Accordion

- Pour la page Contact
- Style épuré

### Principes de design Subrequest

- Design minimaliste efficace
- Espacement vertical généreux entre sections
- Padding horizontal confortable
- Cards avec bordures subtiles
- Footer structuré avec colonnes de liens
- Navigation simple et claire
- Header minimaliste

## Structure des pages

1. **Home** (`/`) - Page d'accueil avec hero, intro, 3 leviers, métriques, cas clients, livre, newsletter
2. **Méthode** (`/methode`) - Présentation de la méthode Curiosity Loop
3. **Services** (`/services`) - Diagnostics, R&D Studio, Venture Development
4. **Signals** (`/signals`) - Veille stratégique, études, livre
5. **Contact** (`/contact`) - Formulaires avec accordéons
6. **Mentions légales** (`/mentions-legales`) - Page légale
7. **Politique de confidentialité** (`/politique-confidentialite`) - Page légale

## Règles importantes

### ❌ Interdictions

- **PAS de dark mode**: Aucune classe `dark:` ne doit être utilisée
- **PAS de Geist**: Utiliser uniquement Epilogue (titres) et Helvetica (body)
- **PAS de CSS modules**: Tailwind CSS v4 uniquement
- **PAS de yarn**: Utiliser npm uniquement

### ✅ Obligations

- Utiliser React 19
- TypeScript strict
- Tailwind CSS v4 uniquement
- Respecter l'espacement généreux (inspiration Subrequest)
- Images N&B sauf cas clients réels
- Server Components par défaut (Next.js App Router)

## Développement

### Prérequis

- Node.js 18+
- npm
- Compte Sanity (pour le CMS)

### Installation

```bash
npm install
```

### Variables d'environnement

Créer un fichier `.env.local` avec :

```bash
# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=your-token-here

# Pour les scripts de migration
SANITY_API_WRITE_TOKEN=your-write-token-here

# Resend (pour les emails de contact)
RESEND_API_KEY=your-resend-api-key
FROM_EMAIL=onboarding@resend.dev  # Email d'envoi (doit être vérifié dans Resend)
CONTACT_EMAIL=contact@curiosity.builders  # Email de destination pour recevoir les demandes
```

### Développement

```bash
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000)

### Sanity Studio

Le studio Sanity est accessible via [http://localhost:3000/studio](http://localhost:3000/studio)

### Preview Email (React Email)

Pour prévisualiser les emails React Email avec l'interface de développement :

```bash
npm run email:dev
```

Cela lancera le serveur de développement React Email qui scanne le dossier `src/emails/` et crée automatiquement une interface de prévisualisation interactive. Ouvrez [http://localhost:3001](http://localhost:3001) pour voir l'interface de prévisualisation.

**Note** : Le serveur React Email utilise le port 3001 pour éviter les conflits avec Next.js (port 3000). Vous pouvez lancer les deux serveurs en parallèle dans des terminaux différents.

### Build

```bash
npm run build
```

### Linting & Formatting

```bash
npm run lint
npm run lint:fix
npm run format
```

## Structure des dossiers

```
src/
├── app/
│   ├── [locale]/              # Routes internationalisées (fr, en)
│   │   ├── layout.tsx         # Layout avec i18n
│   │   ├── page.tsx           # Page Home
│   │   ├── signals/
│   │   ├── services/
│   │   ├── methode/
│   │   ├── contact/
│   │   └── (legal)/           # Pages légales
│   ├── api/                   # API routes (draft mode)
│   ├── studio/                # Sanity Studio
│   ├── layout.tsx             # Root layout
│   ├── globals.css            # Styles globaux
│   └── metadata.ts            # Métadonnées SEO
├── components/
│   ├── layout/                # Header, Footer
│   ├── ui/                    # Composants UI réutilisables
│   ├── homepage-sections/     # Sections de la homepage
│   └── pages/                 # Composants spécifiques aux pages
├── sanity/
│   ├── schemaTypes/           # Schémas Sanity
│   ├── lib/                   # Client Sanity, queries, image utils
│   └── structure.ts           # Structure du studio
├── i18n/                      # Configuration next-intl
│   ├── routing.ts
│   └── request.ts
└── lib/
    └── utils.ts               # Utilitaires
```

## Scripts disponibles

- `npm run dev` - Démarre le serveur de développement
- `npm run build` - Build de production
- `npm run start` - Démarre le serveur de production
- `npm run lint` - Vérifie le code avec Biome
- `npm run lint:fix` - Corrige automatiquement les erreurs
- `npm run format` - Formate le code

## Conventions de nommage

- **Composants**: PascalCase (`Button.tsx`, `Header.tsx`)
- **Fichiers de pages**: `page.tsx` (convention Next.js)
- **Variables**: camelCase
- **Constantes**: UPPER_SNAKE_CASE
- **Types/Interfaces**: PascalCase avec préfixe si nécessaire

## SEO Focus Keywords

Mots-clés stratégiques pour le référencement :

- externalized R&D
- real estate innovation
- AI in urban development
- impact-driven investment
- circular retrofit
- venture studio
- UX Immo

## Notes

- Le site doit donner une impression de "blueprint vivant"
- Identité visuelle immédiatement reconnaissable, entre tech et architecture
- Continuité visuelle entre les sections (fil conducteur rappelant la rigueur méthodologique)
- Design qui reflète la position à l'intersection boutique consultancy / innovation lab
- Crédibilité technique et modernité au cœur de l'identité visuelle
- Tous les contenus sont gérés via Sanity CMS avec support FR/EN
