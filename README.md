# Curiosity.Builders - Site Web

Plateforme d'accélération de vos projets de lieux. Centrée sur l'humain, guidée par la donnée, augmentée par l'IA.

## Vue d'ensemble

Site web pour Curiosity.Builders construit avec Next.js 16, React 19, TypeScript et Tailwind CSS v4.

## Stack technique

- **Framework**: Next.js 16 (App Router)
- **React**: v19.2.0
- **TypeScript**: v5
- **Styling**: Tailwind CSS v4
- **Linter/Formatter**: Biome

## Design System

### Inspiration

Le design s'inspire de [Subrequest](https://subrequest.com/fr) : épuré, moderne, avec un espacement généreux, des sections bien délimitées, une navigation simple, une typographie claire et des CTAs bien visibles.

### Typographie

- **Titres**: Oswald (Google Fonts)
  - Tailles généreuses : `text-4xl` à `text-6xl` pour H1, `text-2xl` à `text-4xl` pour H2
  - Espacement de ligne confortable : `leading-relaxed` à `leading-loose`
- **Texte**: Inter (Google Fonts)
  - Espacement de ligne : `leading-relaxed` pour une lisibilité optimale

### Palette de couleurs

- **Noir**: `#000000` - Textes principaux
- **Blanc**: `#FFFFFF` - Fonds principaux
- **Gris clair**: `#F9F9F9` - Fonds alternatifs (bandeaux off-white)
- **Couleur d'accent**: Optionnelle, à définir si nécessaire

**Principes**: Contrastes nets, fonds blancs purs, textes noirs pour un design épuré et professionnel.

### Images

- **Règle générale**: Images en noir et blanc
- **Exception**: Cas clients réels → en couleur (ils incarnent la mise en œuvre de la vision)

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

### Espacement (inspiration Subrequest)

- **Sections**: Espacement vertical généreux
  - Hero sections: `py-24`
  - Sections principales: `py-20`
  - Sections secondaires: `py-16`
  - Bandeaux: `py-12`
- **Padding horizontal**: Confortable (`px-4` à `px-8` selon le breakpoint)
- **Cards**: Espacement interne généreux (`p-6` à `p-8`)
- **CTAs**: Padding confortable (`px-6 py-3`)

### Composants UI

#### Button

- Style épuré inspiré Subrequest
- Bordures arrondies
- Padding généreux
- Variantes: primaire et secondaire

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

## Règles importantes

### ❌ Interdictions

- **PAS de dark mode**: Aucune classe `dark:` ne doit être utilisée
- **PAS de Geist**: Utiliser uniquement Oswald et Inter

### ✅ Obligations

- Utiliser React 19
- TypeScript strict
- Tailwind CSS v4 uniquement
- Respecter l'espacement généreux (inspiration Subrequest)
- Images N&B sauf cas clients réels

## Développement

### Installation

```bash
npm install
```

### Développement

```bash
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000)

### Build

```bash
npm run build
```

### Linting & Formatting

```bash
npm run lint
npm run format
```

## Structure des dossiers

```
src/
├── app/
│   ├── layout.tsx          # Layout principal avec fonts
│   ├── page.tsx            # Page Home
│   ├── globals.css         # Styles globaux
│   ├── signals/
│   │   └── page.tsx
│   ├── services/
│   │   └── page.tsx
│   ├── methode/
│   │   └── page.tsx
│   └── contact/
│       └── page.tsx
└── components/
    ├── layout/
    │   ├── Header.tsx
    │   ├── Footer.tsx
    │   └── ProgressLine.tsx
    └── ui/
        ├── Button.tsx
        ├── Card.tsx
        ├── Section.tsx
        └── Accordion.tsx
```

## Conventions de nommage

- **Composants**: PascalCase (`Button.tsx`, `Header.tsx`)
- **Fichiers**: kebab-case pour les pages (`page.tsx`)
- **Classes CSS**: Tailwind utilities uniquement
- **Variables**: camelCase

## Notes

- Le site doit donner une impression de "blueprint vivant"
- Identité visuelle immédiatement reconnaissable, entre tech et architecture
- Continuité visuelle entre les sections (fil conducteur rappelant la rigueur méthodologique)
