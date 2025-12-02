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
      cards: {
        items: [
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
        button1: frData.signals.cards.button1,
        button2: frData.signals.cards.button2,
      },
      studies: {
        title: frData.signals.studies.title,
        body1: textToBlocks(frData.signals.studies.body1),
        body2: textToBlocks(frData.signals.studies.body2),
        exampleTitle: frData.signals.studies.exampleTitle,
        exampleTheme: frData.signals.studies.exampleTheme,
        exampleSummary: frData.signals.studies.exampleSummary,
        downloadButton: frData.signals.studies.downloadButton,
        cta: frData.signals.studies.cta,
      },
      book: {
        title: frData.signals.book.title,
        description: textToBlocks(frData.signals.book.description),
        quote: frData.signals.book.quote,
        cta: frData.signals.book.cta,
      },
      finalCta: {
        title: frData.signals.finalCta.title,
        titleEmphasis: frData.signals.finalCta.titleEmphasis,
        body: textToBlocks(frData.signals.finalCta.body),
        button: frData.signals.finalCta.button,
      },
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
      cards: {
        items: [
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
        button1: enData.signals.cards.button1,
        button2: enData.signals.cards.button2,
      },
      studies: {
        title: enData.signals.studies.title,
        body1: textToBlocks(enData.signals.studies.body1),
        body2: textToBlocks(enData.signals.studies.body2),
        exampleTitle: enData.signals.studies.exampleTitle,
        exampleTheme: enData.signals.studies.exampleTheme,
        exampleSummary: enData.signals.studies.exampleSummary,
        downloadButton: enData.signals.studies.downloadButton,
        cta: enData.signals.studies.cta,
      },
      book: {
        title: enData.signals.book.title,
        description: textToBlocks(enData.signals.book.description),
        quote: enData.signals.book.quote,
        cta: enData.signals.book.cta,
      },
      finalCta: {
        title: enData.signals.finalCta.title,
        titleEmphasis: enData.signals.finalCta.titleEmphasis || "",
        body: textToBlocks(enData.signals.finalCta.body),
        button: enData.signals.finalCta.button,
      },
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
      diagnostics: {
        title: frData.services.diagnostics.title,
        subtitle: frData.services.diagnostics.subtitle,
        body1: textToBlocks(frData.services.diagnostics.body1),
        body2: textToBlocks(frData.services.diagnostics.body2),
        bullets: [
          frData.services.diagnostics.bullet1,
          frData.services.diagnostics.bullet2,
          frData.services.diagnostics.bullet3,
        ],
        deliverablesTitle: frData.services.diagnostics.deliverablesTitle,
        cards: [
          {
            _key: "card1",
            title: frData.services.diagnostics.card1.title,
            description: frData.services.diagnostics.card1.description,
          },
          {
            _key: "card2",
            title: frData.services.diagnostics.card2.title,
            description: frData.services.diagnostics.card2.description,
          },
          {
            _key: "card3",
            title: frData.services.diagnostics.card3.title,
            description: frData.services.diagnostics.card3.description,
          },
          {
            _key: "card4",
            title: frData.services.diagnostics.card4.title,
            description: frData.services.diagnostics.card4.description,
          },
        ],
      },
      rndStudio: {
        title: frData.services.rndStudio.title,
        subtitle: frData.services.rndStudio.subtitle,
        body1: textToBlocks(frData.services.rndStudio.body1),
        body2: textToBlocks(frData.services.rndStudio.body2),
        deliverablesTitle: frData.services.rndStudio.deliverablesTitle,
        cards: [
          {
            _key: "card1",
            title: frData.services.rndStudio.card1.title,
            description: frData.services.rndStudio.card1.description,
          },
          {
            _key: "card2",
            title: frData.services.rndStudio.card2.title,
            description: frData.services.rndStudio.card2.description,
          },
          {
            _key: "card3",
            title: frData.services.rndStudio.card3.title,
            description: frData.services.rndStudio.card3.description,
          },
          {
            _key: "card4",
            title: frData.services.rndStudio.card4.title,
            description: frData.services.rndStudio.card4.description,
          },
        ],
      },
      loop: {
        text: frData.services.loop.text,
        quote: frData.services.loop.quote,
        author: frData.services.loop.author,
        subtext: textToBlocks(frData.services.loop.subtext),
      },
      ventureDev: {
        title: frData.services.ventureDev.title,
        subtitle: frData.services.ventureDev.subtitle,
        body1: textToBlocks(frData.services.ventureDev.body1),
        body2: textToBlocks(frData.services.ventureDev.body2),
        body3: textToBlocks(frData.services.ventureDev.body3),
        deliverablesTitle: frData.services.ventureDev.deliverablesTitle,
        cards: [
          {
            _key: "card1",
            title: frData.services.ventureDev.card1.title,
            description: frData.services.ventureDev.card1.description,
          },
          {
            _key: "card2",
            title: frData.services.ventureDev.card2.title,
            description: frData.services.ventureDev.card2.description,
          },
          {
            _key: "card3",
            title: frData.services.ventureDev.card3.title,
            description: frData.services.ventureDev.card3.description,
          },
        ],
      },
      impact: {
        title: frData.services.impact.title,
        body1: textToBlocks(frData.services.impact.body1),
        body2: textToBlocks(frData.services.impact.body2),
      },
      finalCta: {
        title: frData.services.finalCta.title,
        body1: textToBlocks(frData.services.finalCta.body1),
        body2: textToBlocks(frData.services.finalCta.body2),
        button1: frData.services.finalCta.button1,
        button2: frData.services.finalCta.button2,
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
      diagnostics: {
        title: enData.services.diagnostics.title,
        subtitle: enData.services.diagnostics.subtitle,
        body1: textToBlocks(enData.services.diagnostics.body1),
        body2: textToBlocks(enData.services.diagnostics.body2),
        bullets: [
          enData.services.diagnostics.bullet1,
          enData.services.diagnostics.bullet2,
          enData.services.diagnostics.bullet3,
        ],
        deliverablesTitle: enData.services.diagnostics.deliverablesTitle,
        cards: [
          {
            _key: "card1",
            title: enData.services.diagnostics.card1.title,
            description: enData.services.diagnostics.card1.description,
          },
          {
            _key: "card2",
            title: enData.services.diagnostics.card2.title,
            description: enData.services.diagnostics.card2.description,
          },
          {
            _key: "card3",
            title: enData.services.diagnostics.card3.title,
            description: enData.services.diagnostics.card3.description,
          },
          {
            _key: "card4",
            title: enData.services.diagnostics.card4.title,
            description: enData.services.diagnostics.card4.description,
          },
        ],
      },
      rndStudio: {
        title: enData.services.rndStudio.title,
        subtitle: enData.services.rndStudio.subtitle,
        body1: textToBlocks(enData.services.rndStudio.body1),
        body2: textToBlocks(enData.services.rndStudio.body2),
        deliverablesTitle: enData.services.rndStudio.deliverablesTitle,
        cards: [
          {
            _key: "card1",
            title: enData.services.rndStudio.card1.title,
            description: enData.services.rndStudio.card1.description,
          },
          {
            _key: "card2",
            title: enData.services.rndStudio.card2.title,
            description: enData.services.rndStudio.card2.description,
          },
          {
            _key: "card3",
            title: enData.services.rndStudio.card3.title,
            description: enData.services.rndStudio.card3.description,
          },
          {
            _key: "card4",
            title: enData.services.rndStudio.card4.title,
            description: enData.services.rndStudio.card4.description,
          },
        ],
      },
      loop: {
        text: enData.services.loop.text,
        quote: enData.services.loop.quote,
        author: enData.services.loop.author,
        subtext: textToBlocks(enData.services.loop.subtext),
      },
      ventureDev: {
        title: enData.services.ventureDev.title,
        subtitle: enData.services.ventureDev.subtitle,
        body1: textToBlocks(enData.services.ventureDev.body1),
        body2: textToBlocks(enData.services.ventureDev.body2),
        body3: textToBlocks(enData.services.ventureDev.body3),
        deliverablesTitle: enData.services.ventureDev.deliverablesTitle,
        cards: [
          {
            _key: "card1",
            title: enData.services.ventureDev.card1.title,
            description: enData.services.ventureDev.card1.description,
          },
          {
            _key: "card2",
            title: enData.services.ventureDev.card2.title,
            description: enData.services.ventureDev.card2.description,
          },
          {
            _key: "card3",
            title: enData.services.ventureDev.card3.title,
            description: enData.services.ventureDev.card3.description,
          },
        ],
      },
      impact: {
        title: enData.services.impact.title,
        body1: textToBlocks(enData.services.impact.body1),
        body2: textToBlocks(enData.services.impact.body2),
      },
      finalCta: {
        title: enData.services.finalCta.title,
        body1: textToBlocks(enData.services.finalCta.body1),
        body2: textToBlocks(enData.services.finalCta.body2),
        button1: enData.services.finalCta.button1,
        button2: enData.services.finalCta.button2,
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
      curiosityLoop: {
        title: frData.methode.curiosityLoop.title,
        subtitle: frData.methode.curiosityLoop.subtitle,
        steps: [
          {
            _key: "step1",
            number: 1,
            title: frData.methode.curiosityLoop.step1.title,
            description: textToBlocks(
              frData.methode.curiosityLoop.step1.description
            ),
            tools: frData.methode.curiosityLoop.step1.tools,
          },
          {
            _key: "step2",
            number: 2,
            title: frData.methode.curiosityLoop.step2.title,
            description: textToBlocks(
              frData.methode.curiosityLoop.step2.description
            ),
            tools: frData.methode.curiosityLoop.step2.tools,
          },
          {
            _key: "step3",
            number: 3,
            title: frData.methode.curiosityLoop.step3.title,
            description: textToBlocks(
              frData.methode.curiosityLoop.step3.description
            ),
            tools: frData.methode.curiosityLoop.step3.tools,
          },
          {
            _key: "step4",
            number: 4,
            title: frData.methode.curiosityLoop.step4.title,
            description: textToBlocks(
              frData.methode.curiosityLoop.step4.description
            ),
            tools: frData.methode.curiosityLoop.step4.tools,
          },
          {
            _key: "step5",
            number: 5,
            title: frData.methode.curiosityLoop.step5.title,
            description: textToBlocks(
              frData.methode.curiosityLoop.step5.description
            ),
            tools: frData.methode.curiosityLoop.step5.tools,
          },
        ],
      },
      impact: {
        title: frData.methode.impact.title,
        body: textToBlocks(frData.methode.impact.body),
      },
      singularity: {
        title: frData.methode.singularity.title,
        body1: textToBlocks(frData.methode.singularity.body1),
        body2: textToBlocks(frData.methode.singularity.body2),
        body3: textToBlocks(frData.methode.singularity.body3),
        cards: [
          {
            _key: "card1",
            title: frData.methode.singularity.card1.title,
            description: frData.methode.singularity.card1.description,
          },
          {
            _key: "card2",
            title: frData.methode.singularity.card2.title,
            description: frData.methode.singularity.card2.description,
          },
          {
            _key: "card3",
            title: frData.methode.singularity.card3.title,
            description: frData.methode.singularity.card3.description,
          },
          {
            _key: "card4",
            title: frData.methode.singularity.card4.title,
            description: frData.methode.singularity.card4.description,
          },
          {
            _key: "card5",
            title: frData.methode.singularity.card5.title,
            description: frData.methode.singularity.card5.description,
          },
        ],
      },
      proofs: {
        title: frData.methode.proofs.title,
        quotes: [
          {
            _key: "quote1",
            text: frData.methode.proofs.quote1.text,
            author: frData.methode.proofs.quote1.author,
          },
          {
            _key: "quote2",
            text: frData.methode.proofs.quote2.text,
            author: frData.methode.proofs.quote2.author,
          },
          {
            _key: "quote3",
            text: frData.methode.proofs.quote3.text,
            author: frData.methode.proofs.quote3.author,
          },
        ],
        button: frData.methode.proofs.button,
      },
      finalCta: {
        title: frData.methode.finalCta.title,
        body: textToBlocks(frData.methode.finalCta.body),
        button: frData.methode.finalCta.button,
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
      curiosityLoop: {
        title: enData.methode.curiosityLoop.title,
        subtitle: enData.methode.curiosityLoop.subtitle,
        steps: [
          {
            _key: "step1",
            number: 1,
            title: enData.methode.curiosityLoop.step1.title,
            description: textToBlocks(
              enData.methode.curiosityLoop.step1.description
            ),
            tools: enData.methode.curiosityLoop.step1.tools,
          },
          {
            _key: "step2",
            number: 2,
            title: enData.methode.curiosityLoop.step2.title,
            description: textToBlocks(
              enData.methode.curiosityLoop.step2.description
            ),
            tools: enData.methode.curiosityLoop.step2.tools,
          },
          {
            _key: "step3",
            number: 3,
            title: enData.methode.curiosityLoop.step3.title,
            description: textToBlocks(
              enData.methode.curiosityLoop.step3.description
            ),
            tools: enData.methode.curiosityLoop.step3.tools,
          },
          {
            _key: "step4",
            number: 4,
            title: enData.methode.curiosityLoop.step4.title,
            description: textToBlocks(
              enData.methode.curiosityLoop.step4.description
            ),
            tools: enData.methode.curiosityLoop.step4.tools,
          },
          {
            _key: "step5",
            number: 5,
            title: enData.methode.curiosityLoop.step5.title,
            description: textToBlocks(
              enData.methode.curiosityLoop.step5.description
            ),
            tools: enData.methode.curiosityLoop.step5.tools,
          },
        ],
      },
      impact: {
        title: enData.methode.impact.title,
        body: textToBlocks(enData.methode.impact.body),
      },
      singularity: {
        title: enData.methode.singularity.title,
        body1: textToBlocks(enData.methode.singularity.body1),
        body2: textToBlocks(enData.methode.singularity.body2),
        body3: textToBlocks(enData.methode.singularity.body3),
        cards: [
          {
            _key: "card1",
            title: enData.methode.singularity.card1.title,
            description: enData.methode.singularity.card1.description,
          },
          {
            _key: "card2",
            title: enData.methode.singularity.card2.title,
            description: enData.methode.singularity.card2.description,
          },
          {
            _key: "card3",
            title: enData.methode.singularity.card3.title,
            description: enData.methode.singularity.card3.description,
          },
          {
            _key: "card4",
            title: enData.methode.singularity.card4.title,
            description: enData.methode.singularity.card4.description,
          },
          {
            _key: "card5",
            title: enData.methode.singularity.card5.title,
            description: enData.methode.singularity.card5.description,
          },
        ],
      },
      proofs: {
        title: enData.methode.proofs.title,
        quotes: [
          {
            _key: "quote1",
            text: enData.methode.proofs.quote1.text,
            author: enData.methode.proofs.quote1.author,
          },
          {
            _key: "quote2",
            text: enData.methode.proofs.quote2.text,
            author: enData.methode.proofs.quote2.author,
          },
          {
            _key: "quote3",
            text: enData.methode.proofs.quote3.text,
            author: enData.methode.proofs.quote3.author,
          },
        ],
        button: enData.methode.proofs.button,
      },
      finalCta: {
        title: enData.methode.finalCta.title,
        body: textToBlocks(enData.methode.finalCta.body),
        button: enData.methode.finalCta.button,
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
      contactSection: {
        workWithUs: {
          title: frData.contact.contactSection.workWithUs.title,
          body: frData.contact.contactSection.workWithUs.body,
          email: frData.contact.contactSection.workWithUs.email,
        },
        press: {
          title: frData.contact.contactSection.press.title,
          body: frData.contact.contactSection.press.body,
          email: frData.contact.contactSection.press.email,
        },
        newsletter: {
          title: frData.contact.contactSection.newsletter.title,
          body: frData.contact.contactSection.newsletter.body,
          link: frData.contact.contactSection.newsletter.link,
        },
      },
      unsure: {
        title: frData.contact.unsure.title,
        body: textToBlocks(frData.contact.unsure.body),
        button1: frData.contact.unsure.button1,
        button2: frData.contact.unsure.button2,
        button3: frData.contact.unsure.button3,
      },
      form: {
        title: frData.contact.form.title,
        description: frData.contact.form.description,
        brochureLabel: frData.contact.form.brochureLabel,
        bookExtractLabel: frData.contact.form.bookExtractLabel,
        bookTitle: frData.contact.form.bookTitle,
        nameLabel: frData.contact.form.nameLabel,
        organizationLabel: frData.contact.form.organizationLabel,
        emailLabel: frData.contact.form.emailLabel,
        interestLabel: frData.contact.form.interestLabel,
        interestPlaceholder: frData.contact.form.interestPlaceholder,
        consentLabel: frData.contact.form.consentLabel,
        submitButton: frData.contact.form.submitButton,
        successMessage: frData.contact.form.successMessage,
      },
      finalCta: {
        title: frData.contact.finalCta.title,
        body1: textToBlocks(frData.contact.finalCta.body1),
        body2: textToBlocks(frData.contact.finalCta.body2),
        button1: frData.contact.finalCta.button1,
        button2: frData.contact.finalCta.button2,
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
      contactSection: {
        workWithUs: {
          title: enData.contact.contactSection.workWithUs.title,
          body: enData.contact.contactSection.workWithUs.body,
          email: enData.contact.contactSection.workWithUs.email,
        },
        press: {
          title: enData.contact.contactSection.press.title,
          body: enData.contact.contactSection.press.body,
          email: enData.contact.contactSection.press.email,
        },
        newsletter: {
          title: enData.contact.contactSection.newsletter.title,
          body: enData.contact.contactSection.newsletter.body,
          link: enData.contact.contactSection.newsletter.link,
        },
      },
      unsure: {
        title: enData.contact.unsure.title,
        body: textToBlocks(enData.contact.unsure.body),
        button1: enData.contact.unsure.button1,
        button2: enData.contact.unsure.button2,
        button3: enData.contact.unsure.button3,
      },
      form: {
        title: enData.contact.form.title,
        description: enData.contact.form.description,
        brochureLabel: enData.contact.form.brochureLabel,
        bookExtractLabel: enData.contact.form.bookExtractLabel,
        bookTitle: enData.contact.form.bookTitle,
        nameLabel: enData.contact.form.nameLabel,
        organizationLabel: enData.contact.form.organizationLabel,
        emailLabel: enData.contact.form.emailLabel,
        interestLabel: enData.contact.form.interestLabel,
        interestPlaceholder: enData.contact.form.interestPlaceholder,
        consentLabel: enData.contact.form.consentLabel,
        submitButton: enData.contact.form.submitButton,
        successMessage: enData.contact.form.successMessage,
      },
      finalCta: {
        title: enData.contact.finalCta.title,
        body1: textToBlocks(enData.contact.finalCta.body1),
        body2: textToBlocks(enData.contact.finalCta.body2 || ""),
        button1: enData.contact.finalCta.button1,
        button2: enData.contact.finalCta.button2,
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

    // 15. Navigation
    console.log("📝 Migrating Navigation...");
    if (frData.common && enData.common) {
      await client.createOrReplace({
        _type: "navigation",
        _id: "navigation-fr",
        language: "fr",
        items: [
          {
            _key: "home",
            label: frData.common.home || "Accueil",
            href: "/",
          },
          {
            _key: "method",
            label: frData.common.method || "Méthode",
            href: "/methode",
          },
          {
            _key: "services",
            label: frData.common.services || "Services",
            href: "/services",
          },
          {
            _key: "signals",
            label: frData.common.signals || "Signals",
            href: "/signals",
          },
          {
            _key: "contact",
            label: frData.common.contact || "Contact",
            href: "/contact",
          },
        ],
      });
      await client.createOrReplace({
        _type: "navigation",
        _id: "navigation-en",
        language: "en",
        items: [
          {
            _key: "home",
            label: enData.common.home || "Home",
            href: "/",
          },
          {
            _key: "method",
            label: enData.common.method || "Method",
            href: "/methode",
          },
          {
            _key: "services",
            label: enData.common.services || "Services",
            href: "/services",
          },
          {
            _key: "signals",
            label: enData.common.signals || "Signals",
            href: "/signals",
          },
          {
            _key: "contact",
            label: enData.common.contact || "Contact",
            href: "/contact",
          },
        ],
      });
      console.log("✅ Navigation migrated\n");
    } else {
      // Create default navigation if JSON data doesn't exist
      await client.createOrReplace({
        _type: "navigation",
        _id: "navigation-fr",
        language: "fr",
        items: [
          { _key: "home", label: "Accueil", href: "/" },
          { _key: "method", label: "Méthode", href: "/methode" },
          { _key: "services", label: "Services", href: "/services" },
          { _key: "signals", label: "Signals", href: "/signals" },
          { _key: "contact", label: "Contact", href: "/contact" },
        ],
      });
      await client.createOrReplace({
        _type: "navigation",
        _id: "navigation-en",
        language: "en",
        items: [
          { _key: "home", label: "Home", href: "/" },
          { _key: "method", label: "Method", href: "/methode" },
          { _key: "services", label: "Services", href: "/services" },
          { _key: "signals", label: "Signals", href: "/signals" },
          { _key: "contact", label: "Contact", href: "/contact" },
        ],
      });
      console.log("✅ Navigation created (with defaults)\n");
    }

    // 16. Header (empty, logo can be added manually in Sanity Studio)
    console.log("📝 Creating Header...");
    await client.createOrReplace({
      _type: "header",
      _id: "header-fr",
      language: "fr",
    });
    await client.createOrReplace({
      _type: "header",
      _id: "header-en",
      language: "en",
    });
    console.log("✅ Header created\n");

    // 17. Footer
    console.log("📝 Migrating Footer...");
    if (frData.footer && enData.footer) {
      await client.createOrReplace({
        _type: "footer",
        _id: "footer-fr",
        language: "fr",
        description: textToBlocks(frData.footer.description || ""),
        tagline: frData.footer.tagline || "",
        copyright: frData.footer.copyright || "",
        followUs: frData.footer.followUs || "",
        privacy: frData.footer.privacy || "",
        legalNotice: frData.footer.legalNotice || "",
        privacyPolicy: frData.footer.privacyPolicy || "",
      });
      await client.createOrReplace({
        _type: "footer",
        _id: "footer-en",
        language: "en",
        description: textToBlocks(enData.footer.description || ""),
        tagline: enData.footer.tagline || "",
        copyright: enData.footer.copyright || "",
        followUs: enData.footer.followUs || "",
        privacy: enData.footer.privacy || "",
        legalNotice: enData.footer.legalNotice || "",
        privacyPolicy: enData.footer.privacyPolicy || "",
      });
      console.log("✅ Footer migrated\n");
    } else {
      // Create empty footer documents if JSON data doesn't exist
      await client.createOrReplace({
        _type: "footer",
        _id: "footer-fr",
        language: "fr",
        description: [],
        tagline: "",
        copyright: "",
        followUs: "",
        privacy: "",
        legalNotice: "",
        privacyPolicy: "",
      });
      await client.createOrReplace({
        _type: "footer",
        _id: "footer-en",
        language: "en",
        description: [],
        tagline: "",
        copyright: "",
        followUs: "",
        privacy: "",
        legalNotice: "",
        privacyPolicy: "",
      });
      console.log("✅ Footer created (empty - fill in Sanity Studio)\n");
    }

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
