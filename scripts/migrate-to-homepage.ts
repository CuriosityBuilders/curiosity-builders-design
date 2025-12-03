import { createClient } from "@sanity/client";
import { config } from "dotenv";
import path from "path";

// Load environment variables from .env.local
config({ path: path.join(process.cwd(), ".env.local") });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !token) {
  throw new Error(
    "Missing required environment variables: NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_API_WRITE_TOKEN"
  );
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-01-01",
  useCdn: false,
  token,
});

async function migrateToHomepage() {
  console.log("🚀 Starting migration to Homepage document...\n");

  try {
    // Fetch all existing sections for each language
    const languages = ["fr", "en"];

    for (const lang of languages) {
      console.log(`\n📝 Migrating ${lang.toUpperCase()} homepage...`);

      // Fetch all sections
      const [
        heroSection,
        introSection,
        missionSection,
        tiersSection,
        keyMetricsSection,
        projectsSection,
        bookSection,
        casesSection,
        footerCTASection,
        newsletterSection,
      ] = await Promise.all([
        client.fetch(
          `*[_type == "heroSection" && language == $lang][0]`,
          { lang }
        ),
        client.fetch(
          `*[_type == "introSection" && language == $lang][0]`,
          { lang }
        ),
        client.fetch(
          `*[_type == "missionSection" && language == $lang][0]`,
          { lang }
        ),
        client.fetch(
          `*[_type == "tiersSection" && language == $lang][0]`,
          { lang }
        ),
        client.fetch(
          `*[_type == "keyMetricsSection" && language == $lang][0]`,
          { lang }
        ),
        client.fetch(
          `*[_type == "projectsSection" && language == $lang][0]`,
          { lang }
        ),
        client.fetch(
          `*[_type == "bookSection" && language == $lang][0]`,
          { lang }
        ),
        client.fetch(
          `*[_type == "casesSection" && language == $lang][0]`,
          { lang }
        ),
        client.fetch(
          `*[_type == "footerCTASection" && language == $lang][0]`,
          { lang }
        ),
        client.fetch(
          `*[_type == "newsletterSection" && language == $lang][0]`,
          { lang }
        ),
      ]);

      // Create homepage document with all sections
      const homepageData: any = {
        _type: "homepage",
        _id: `homepage-${lang}`,
        language: lang,
      };

      // Map sections to homepage structure
      if (heroSection) {
        homepageData.hero = {
          title: heroSection.title,
          subtitleLine1: heroSection.subtitleLine1,
          subtitleLine2: heroSection.subtitleLine2,
          cta: heroSection.cta,
        };
      }

      if (introSection) {
        homepageData.intro = {
          title: introSection.title,
          body: introSection.body || [],
          cta1: introSection.cta1,
          cta2: introSection.cta2,
        };
      }

      if (missionSection) {
        homepageData.mission = {
          title: missionSection.title,
          body: missionSection.body || [],
          tagline: missionSection.tagline,
          cta1: missionSection.cta1,
          cta2: missionSection.cta2,
        };
      }

      if (tiersSection) {
        homepageData.tiers = {
          title: tiersSection.title,
          cards: tiersSection.cards || [],
        };
      }

      if (keyMetricsSection) {
        // Convert old format (value as string) to new format (number + prefix)
        homepageData.keyMetrics = {
          metrics:
            keyMetricsSection.metrics?.map((metric: any) => {
              // If it's already in new format, keep it
              if (metric.number !== undefined) {
                return metric;
              }
              // Otherwise, parse the old string format
              const valueStr = metric.value || "0";
              const match = valueStr.match(/^(\+?)(\d+)$/);
              const prefix = match?.[1] || "";
              const number = parseInt(match?.[2] || "0", 10);

              return {
                number,
                prefix: prefix || undefined,
                label: metric.label || "",
              };
            }) || [],
        };
      }

      if (projectsSection) {
        homepageData.projects = {
          images: projectsSection.images || [],
        };
      }

      if (bookSection) {
        homepageData.book = {
          title: bookSection.title,
          description: bookSection.description || [],
          quote: bookSection.quote,
          cta: bookSection.cta,
          image: bookSection.image,
          link: bookSection.link,
        };
      }

      if (casesSection) {
        homepageData.cases = {
          title: casesSection.title,
          clients: casesSection.clients || [],
          press: casesSection.press || [],
        };
      }

      if (footerCTASection) {
        homepageData.footerCTA = {
          title: footerCTASection.title,
          cta1: footerCTASection.cta1,
          cta2: footerCTASection.cta2,
          cta3: footerCTASection.cta3,
        };
      }

      if (newsletterSection) {
        homepageData.newsletter = {
          title: newsletterSection.title,
          description: newsletterSection.description || [],
          cta1: newsletterSection.cta1,
          cta2: newsletterSection.cta2,
          link: newsletterSection.link,
        };
      }

      // Create or replace the homepage document
      await client.createOrReplace(homepageData);
      console.log(`✅ Homepage (${lang.toUpperCase()}) created successfully`);
    }

    console.log("\n🎉 Migration completed successfully!");
    console.log(
      "\n⚠️  Note: Old section documents are still in Sanity. You can delete them manually after verifying the homepage works correctly."
    );
  } catch (error) {
    console.error("❌ Migration failed:", error);
    throw error;
  }
}

migrateToHomepage()
  .then(() => {
    console.log("\n✅ Migration script completed");
    process.exit(0);
  })
  .catch((error) => {
    console.error("\n❌ Migration script failed:", error);
    process.exit(1);
  });
