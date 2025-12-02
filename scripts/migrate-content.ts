/**
 * Migration script to import content from JSON files to Sanity
 *
 * Usage:
 * 1. Set SANITY_API_WRITE_TOKEN in .env.local
 * 2. Run: npx tsx scripts/migrate-content.ts
 */

import { createClient } from "@sanity/client";
import { config } from "dotenv";
import fs from "fs";
import path from "path";

// Load environment variables from .env.local
config({ path: path.join(process.cwd(), ".env.local") });

const __dirname = process.cwd();

// Load environment variables
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId) {
  throw new Error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID");
}

if (!token) {
  throw new Error(
    "Missing SANITY_API_WRITE_TOKEN. Get it from https://sanity.io/manage"
  );
}

// Create write client
const client = createClient({
  projectId,
  dataset,
  apiVersion: "2025-12-02",
  useCdn: false,
  token,
});

// Helper to convert plain text to Portable Text blocks
function textToBlocks(text: string): Array<{
  _type: string;
  _key: string;
  style: string;
  children: Array<{ _type: string; text: string }>;
  markDefs: unknown[];
}> {
  if (!text) return [];

  // Split by newlines and create paragraphs
  const paragraphs = text.split("\n").filter((p) => p.trim());

  if (paragraphs.length === 0) {
    return [
      {
        _type: "block",
        _key: "block1",
        style: "normal",
        children: [{ _type: "span", text: text.trim() }],
        markDefs: [],
      },
    ];
  }

  return paragraphs.map((para, index) => ({
    _type: "block",
    _key: `block${index + 1}`,
    style: "normal",
    children: [{ _type: "span", text: para.trim() }],
    markDefs: [],
  }));
}

// Load JSON files
const frData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "messages/fr.json"), "utf-8")
);
const enData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "messages/en.json"), "utf-8")
);

async function migrateContent() {
  console.log("🚀 Starting content migration to Sanity...\n");

  try {
    // 1. Hero Section
    console.log("📝 Migrating Hero Section...");
    await client.createOrReplace({
      _type: "heroSection",
      _id: "heroSection-fr",
      language: "fr",
      title: frData.hero.title,
      subtitleLine1: frData.hero.subtitleLine1,
      subtitleLine2: frData.hero.subtitleLine2,
      cta: frData.hero.cta,
    });
    await client.createOrReplace({
      _type: "heroSection",
      _id: "heroSection-en",
      language: "en",
      title: enData.hero.title,
      subtitleLine1: enData.hero.subtitleLine1,
      subtitleLine2: enData.hero.subtitleLine2,
      cta: enData.hero.cta,
    });
    console.log("✅ Hero Section migrated\n");

    // 2. Intro Section
    console.log("📝 Migrating Intro Section...");
    await client.createOrReplace({
      _type: "introSection",
      _id: "introSection-fr",
      language: "fr",
      title: frData.intro.title,
      body: textToBlocks(frData.intro.body),
      cta1: frData.intro.cta1,
      cta2: frData.intro.cta2,
    });
    await client.createOrReplace({
      _type: "introSection",
      _id: "introSection-en",
      language: "en",
      title: enData.intro.title,
      body: textToBlocks(enData.intro.body),
      cta1: enData.intro.cta1,
      cta2: enData.intro.cta2,
    });
    console.log("✅ Intro Section migrated\n");

    // 3. Mission Section
    console.log("📝 Migrating Mission Section...");
    await client.createOrReplace({
      _type: "missionSection",
      _id: "missionSection-fr",
      language: "fr",
      title: frData.mission.title,
      body: textToBlocks(frData.mission.body),
      tagline: frData.mission.tagline,
      cta1: frData.mission.cta1,
      cta2: frData.mission.cta2,
    });
    await client.createOrReplace({
      _type: "missionSection",
      _id: "missionSection-en",
      language: "en",
      title: enData.mission.title,
      body: textToBlocks(enData.mission.body),
      tagline: enData.mission.tagline,
      cta1: enData.mission.cta1,
      cta2: enData.mission.cta2,
    });
    console.log("✅ Mission Section migrated\n");

    // 4. Tiers Section
    console.log("📝 Migrating Tiers Section...");
    await client.createOrReplace({
      _type: "tiersSection",
      _id: "tiersSection-fr",
      language: "fr",
      title: frData.tiers.title,
      cards: [
        {
          _key: "card1",
          number: 1,
          title: frData.tiers.card1.title,
          subtitle: frData.tiers.card1.subtitle,
          description: frData.tiers.card1.description,
          tagline: frData.tiers.card1.tagline,
          cta: frData.tiers.card1.cta,
          href: "/signals",
        },
        {
          _key: "card2",
          number: 2,
          title: frData.tiers.card2.title,
          subtitle: frData.tiers.card2.subtitle,
          description: frData.tiers.card2.description,
          tagline: frData.tiers.card2.tagline,
          cta: frData.tiers.card2.cta,
          href: "/contact",
        },
        {
          _key: "card3",
          number: 3,
          title: frData.tiers.card3.title,
          subtitle: frData.tiers.card3.subtitle,
          description: frData.tiers.card3.description,
          tagline: frData.tiers.card3.tagline,
          cta1: frData.tiers.card3.cta1,
          cta2: frData.tiers.card3.cta2,
          href: "/services",
        },
      ],
    });
    await client.createOrReplace({
      _type: "tiersSection",
      _id: "tiersSection-en",
      language: "en",
      title: enData.tiers.title,
      cards: [
        {
          _key: "card1",
          number: 1,
          title: enData.tiers.card1.title,
          subtitle: enData.tiers.card1.subtitle,
          description: enData.tiers.card1.description,
          tagline: enData.tiers.card1.tagline,
          cta: enData.tiers.card1.cta,
          href: "/signals",
        },
        {
          _key: "card2",
          number: 2,
          title: enData.tiers.card2.title,
          subtitle: enData.tiers.card2.subtitle,
          description: enData.tiers.card2.description,
          tagline: enData.tiers.card2.tagline,
          cta: enData.tiers.card2.cta,
          href: "/contact",
        },
        {
          _key: "card3",
          number: 3,
          title: enData.tiers.card3.title,
          subtitle: enData.tiers.card3.subtitle,
          description: enData.tiers.card3.description,
          tagline: enData.tiers.card3.tagline,
          cta1: enData.tiers.card3.cta1,
          cta2: enData.tiers.card3.cta2,
          href: "/services",
        },
      ],
    });
    console.log("✅ Tiers Section migrated\n");

    // 5. Key Metrics Section
    console.log("📝 Migrating Key Metrics Section...");
    await client.createOrReplace({
      _type: "keyMetricsSection",
      _id: "keyMetricsSection-fr",
      language: "fr",
      metrics: [
        { _key: "m1", value: "", label: frData.keyMetrics.metric1 },
        { _key: "m2", value: "", label: frData.keyMetrics.metric2 },
        { _key: "m3", value: "", label: frData.keyMetrics.metric3 },
        { _key: "m4", value: "", label: frData.keyMetrics.metric4 },
      ],
    });
    await client.createOrReplace({
      _type: "keyMetricsSection",
      _id: "keyMetricsSection-en",
      language: "en",
      metrics: [
        { _key: "m1", value: "", label: enData.keyMetrics.metric1 },
        { _key: "m2", value: "", label: enData.keyMetrics.metric2 },
        { _key: "m3", value: "", label: enData.keyMetrics.metric3 },
        { _key: "m4", value: "", label: enData.keyMetrics.metric4 },
      ],
    });
    console.log("✅ Key Metrics Section migrated\n");

    // 6. Book Section
    console.log("📝 Migrating Book Section...");
    await client.createOrReplace({
      _type: "bookSection",
      _id: "bookSection-fr",
      language: "fr",
      title: frData.book.title,
      description: textToBlocks(frData.book.description),
      quote: frData.book.quote,
      cta: frData.book.cta,
    });
    await client.createOrReplace({
      _type: "bookSection",
      _id: "bookSection-en",
      language: "en",
      title: enData.book.title,
      description: textToBlocks(enData.book.description),
      quote: enData.book.quote,
      cta: enData.book.cta,
    });
    console.log("✅ Book Section migrated\n");

    // 7. Footer CTA Section
    console.log("📝 Migrating Footer CTA Section...");
    await client.createOrReplace({
      _type: "footerCTASection",
      _id: "footerCTASection-fr",
      language: "fr",
      title: frData.footerCTA.title,
      cta1: frData.footerCTA.cta1,
      cta2: frData.footerCTA.cta2,
      cta3: frData.footerCTA.cta3,
    });
    await client.createOrReplace({
      _type: "footerCTASection",
      _id: "footerCTASection-en",
      language: "en",
      title: enData.footerCTA.title,
      cta1: enData.footerCTA.cta1,
      cta2: enData.footerCTA.cta2,
      cta3: enData.footerCTA.cta3,
    });
    console.log("✅ Footer CTA Section migrated\n");

    // 8. Newsletter Section
    console.log("📝 Migrating Newsletter Section...");
    await client.createOrReplace({
      _type: "newsletterSection",
      _id: "newsletterSection-fr",
      language: "fr",
      title: frData.newsletter.title,
      description: textToBlocks(frData.newsletter.description),
      cta1: frData.newsletter.cta1,
      cta2: frData.newsletter.cta2,
    });
    await client.createOrReplace({
      _type: "newsletterSection",
      _id: "newsletterSection-en",
      language: "en",
      title: enData.newsletter.title,
      description: textToBlocks(enData.newsletter.description),
      cta1: enData.newsletter.cta1,
      cta2: enData.newsletter.cta2,
    });
    console.log("✅ Newsletter Section migrated\n");

    // 9. Signals Page
    console.log("📝 Migrating Signals Page...");
    await client.createOrReplace({
      _type: "signalsPage",
      _id: "signalsPage-fr",
      language: "fr",
      hero: {
        title: frData.signals.hero.title,
        subtitle: frData.signals.hero.subtitle,
        body: textToBlocks(frData.signals.hero.body),
      },
      cards: [
        {
          _key: "card1",
          title: frData.signals.cards.card1.title,
          description: textToBlocks(frData.signals.cards.card1.description),
          tagline: frData.signals.cards.card1.tagline,
        },
        {
          _key: "card2",
          title: frData.signals.cards.card2.title,
          description: textToBlocks(frData.signals.cards.card2.description),
          tagline: frData.signals.cards.card2.tagline,
        },
        {
          _key: "card3",
          title: frData.signals.cards.card3.title,
          description: textToBlocks(frData.signals.cards.card3.description),
          tagline: frData.signals.cards.card3.tagline,
        },
      ],
    });
    await client.createOrReplace({
      _type: "signalsPage",
      _id: "signalsPage-en",
      language: "en",
      hero: {
        title: enData.signals.hero.title,
        subtitle: enData.signals.hero.subtitle,
        body: textToBlocks(enData.signals.hero.body),
      },
      cards: [
        {
          _key: "card1",
          title: enData.signals.cards.card1.title,
          description: textToBlocks(enData.signals.cards.card1.description),
          tagline: enData.signals.cards.card1.tagline,
        },
        {
          _key: "card2",
          title: enData.signals.cards.card2.title,
          description: textToBlocks(enData.signals.cards.card2.description),
          tagline: enData.signals.cards.card2.tagline,
        },
        {
          _key: "card3",
          title: enData.signals.cards.card3.title,
          description: textToBlocks(enData.signals.cards.card3.description),
          tagline: enData.signals.cards.card3.tagline,
        },
      ],
    });
    console.log("✅ Signals Page migrated\n");

    // 10. Services Page
    console.log("📝 Migrating Services Page...");
    await client.createOrReplace({
      _type: "servicesPage",
      _id: "servicesPage-fr",
      language: "fr",
      hero: {
        title: frData.services.hero.title,
        body: textToBlocks(frData.services.hero.body),
        button1: frData.services.hero.button1,
        button2: frData.services.hero.button2,
        button3: frData.services.hero.button3,
      },
      overview: {
        title: frData.services.overview.title,
        body1: textToBlocks(frData.services.overview.body1),
        body2: textToBlocks(frData.services.overview.body2),
        cta: frData.services.overview.cta,
      },
    });
    await client.createOrReplace({
      _type: "servicesPage",
      _id: "servicesPage-en",
      language: "en",
      hero: {
        title: enData.services.hero.title,
        body: textToBlocks(enData.services.hero.body),
        button1: enData.services.hero.button1,
        button2: enData.services.hero.button2,
        button3: enData.services.hero.button3,
      },
      overview: {
        title: enData.services.overview.title,
        body1: textToBlocks(enData.services.overview.body1),
        body2: textToBlocks(enData.services.overview.body2),
        cta: enData.services.overview.cta,
      },
    });
    console.log("✅ Services Page migrated\n");

    // 11. Méthode Page
    console.log("📝 Migrating Méthode Page...");
    await client.createOrReplace({
      _type: "methodePage",
      _id: "methodePage-fr",
      language: "fr",
      hero: {
        title: frData.methode.hero.title,
        body1: textToBlocks(frData.methode.hero.body1),
        body2: textToBlocks(frData.methode.hero.body2),
      },
    });
    await client.createOrReplace({
      _type: "methodePage",
      _id: "methodePage-en",
      language: "en",
      hero: {
        title: enData.methode.hero.title,
        body1: textToBlocks(enData.methode.hero.body1),
        body2: textToBlocks(enData.methode.hero.body2),
      },
    });
    console.log("✅ Méthode Page migrated\n");

    // 12. Contact Page
    console.log("📝 Migrating Contact Page...");
    await client.createOrReplace({
      _type: "contactPage",
      _id: "contactPage-fr",
      language: "fr",
      hero: {
        title: frData.contact.hero.title,
        body: textToBlocks(frData.contact.hero.body),
      },
    });
    await client.createOrReplace({
      _type: "contactPage",
      _id: "contactPage-en",
      language: "en",
      hero: {
        title: enData.contact.hero.title,
        body: textToBlocks(enData.contact.hero.body),
      },
    });
    console.log("✅ Contact Page migrated\n");

    // 13. Projects Section (empty, will be filled with images later)
    console.log("📝 Creating Projects Section...");
    await client.createOrReplace({
      _type: "projectsSection",
      _id: "projectsSection-fr",
      language: "fr",
      images: [],
    });
    await client.createOrReplace({
      _type: "projectsSection",
      _id: "projectsSection-en",
      language: "en",
      images: [],
    });
    console.log("✅ Projects Section created\n");

    // 14. Cases Section (empty, will be filled with clients/press later)
    console.log("📝 Creating Cases Section...");
    await client.createOrReplace({
      _type: "casesSection",
      _id: "casesSection-fr",
      language: "fr",
      title: frData.projects?.title || "NOS RÉALISATIONS",
      clients: [],
      press: [],
    });
    await client.createOrReplace({
      _type: "casesSection",
      _id: "casesSection-en",
      language: "en",
      title: enData.projects?.title || "OUR PROJECTS",
      clients: [],
      press: [],
    });
    console.log("✅ Cases Section created\n");

    console.log("🎉 Migration completed successfully!");
    console.log("\n📌 Next steps:");
    console.log("1. Go to /studio in your Sanity Studio");
    console.log('2. Use "Manage translations" to link FR and EN versions');
    console.log("3. Verify all content is correctly imported");
  } catch (error) {
    console.error("❌ Migration failed:", error);
    process.exit(1);
  }
}

migrateContent();
