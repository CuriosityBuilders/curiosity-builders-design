# Content Migration Script

This script migrates all content from the JSON translation files (`messages/fr.json` and `messages/en.json`) to Sanity CMS.

## Prerequisites

1. **Sanity API Write Token**: You need a write token to create documents in Sanity.
   - Go to https://sanity.io/manage
   - Select your project
   - Go to API → Tokens
   - Create a new token with "Editor" permissions
   - Copy the token

2. **Environment Variables**: Add the token to your `.env.local` file:
   ```bash
   SANITY_API_WRITE_TOKEN=your-token-here
   ```

## Usage

Run the migration script:

```bash
npm run migrate:content
```

Or directly with tsx:

```bash
npx tsx scripts/migrate-content.ts
```

## What it does

The script will:
1. Read content from `messages/fr.json` and `messages/en.json`
2. Convert plain text to Portable Text format (for rich text fields)
3. Create all documents in Sanity for both French and English
4. Create documents for:
   - Hero Section
   - Intro Section
   - Mission Section
   - Tiers Section
   - Key Metrics Section
   - Book Section
   - Footer CTA Section
   - Newsletter Section
   - Signals Page
   - Services Page
   - Méthode Page
   - Contact Page
   - Projects Section (empty, for images)
   - Cases Section (empty, for clients/press)

## After Migration

1. Go to `/studio` in your Sanity Studio
2. Use the "Manage translations" button on each document to link FR and EN versions together
3. Verify all content is correctly imported
4. You can now edit all content directly in Sanity Studio!

## Notes

- The script uses `createOrReplace`, so you can run it multiple times safely
- Documents are created with fixed IDs (e.g., `heroSection-fr`, `heroSection-en`)
- Plain text with newlines is automatically converted to Portable Text blocks
- Some sections (Projects, Cases) are created empty and need to be filled manually with images/media
