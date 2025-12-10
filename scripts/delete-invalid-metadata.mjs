import { createClient } from "@sanity/client";
import { config } from "dotenv";

config({ path: ".env.local" });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_WRITE_TOKEN,
  apiVersion: "2025-12-02",
  useCdn: false,
});

async function deleteInvalidMetadata() {
  console.log("🔍 Searching for invalid translation.metadata documents...\n");

  // Récupérer tous les translation.metadata
  const allMetadata = await client.fetch(`
    *[_type == "translation.metadata"] {
      _id,
      _createdAt,
      "hasTranslations": defined(translations),
      "translationCount": count(translations),
      translations
    } | order(_createdAt desc)
  `);

  console.log(
    `📊 Found ${allMetadata.length} translation.metadata documents\n`
  );

  // Identifier les invalides
  const invalid = allMetadata.filter(
    (doc) => !doc.hasTranslations || doc.translationCount === 0
  );

  const valid = allMetadata.filter(
    (doc) => doc.hasTranslations && doc.translationCount > 0
  );

  console.log("✅ Valid documents:", valid.length);
  console.log("❌ Invalid documents:", invalid.length);

  if (invalid.length === 0) {
    console.log("\n✨ No invalid documents found! Everything is clean.");
    return;
  }

  console.log("\n📋 Invalid documents to delete:");
  invalid.forEach((doc, i) => {
    console.log(`  ${i + 1}. ${doc._id} (created: ${doc._createdAt})`);
  });

  console.log("\n⚠️  Deleting in 3 seconds... Press Ctrl+C to cancel");
  await new Promise((resolve) => setTimeout(resolve, 3000));

  console.log("\n🗑️  Deleting...");

  for (const doc of invalid) {
    try {
      await client.delete(doc._id);
      console.log(`  ✅ Deleted: ${doc._id}`);
    } catch (error) {
      console.error(`  ❌ Error deleting ${doc._id}:`, error.message);
    }
  }

  console.log("\n✨ Done! Deleted", invalid.length, "invalid documents.");
}

if (!process.env.SANITY_API_WRITE_TOKEN) {
  console.error("❌ Error: SANITY_API_WRITE_TOKEN not set in .env.local");
  process.exit(1);
}

deleteInvalidMetadata().catch((error) => {
  console.error("❌ Fatal error:", error);
  process.exit(1);
});
