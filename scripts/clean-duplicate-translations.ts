import { createClient } from "@sanity/client";
import * as dotenv from "dotenv";
import * as path from "path";

// Charger les variables d'environnement
dotenv.config({ path: path.resolve(__dirname, "../.env.local") });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

interface TranslationMetadata {
  _id: string;
  _createdAt: string;
  translationIds: string[];
}

async function cleanDuplicateTranslations() {
  console.log("🔍 Fetching all translation metadata...");

  const allMetadata = await client.fetch<TranslationMetadata[]>(`
    *[_type == "translation.metadata"] {
      _id,
      _createdAt,
      "translationIds": translations[]._ref
    } | order(_createdAt asc)
  `);

  console.log(`Found ${allMetadata.length} translation metadata documents`);

  const seen = new Map<string, string>();
  const toDelete: string[] = [];

  for (const meta of allMetadata) {
    // Vérifier si translationIds existe et n'est pas null
    if (!meta.translationIds || meta.translationIds.length === 0) {
      console.log(`⚠️  Skipping ${meta._id}: no translation IDs`);
      toDelete.push(meta._id); // Supprimer les metadata vides/invalides
      continue;
    }

    // Créer une clé unique basée sur les IDs de traduction triés
    const key = meta.translationIds
      .filter((id) => id)
      .sort()
      .join(",");

    if (!key) {
      console.log(`⚠️  Skipping ${meta._id}: invalid translation IDs`);
      toDelete.push(meta._id);
      continue;
    }

    if (seen.has(key)) {
      // C'est un doublon, on le marque pour suppression
      toDelete.push(meta._id);
      console.log(
        `❌ Duplicate found: ${meta._id} (original: ${seen.get(key)})`
      );
    } else {
      // Premier document avec cette combinaison, on le garde
      seen.set(key, meta._id);
      console.log(`✅ Keeping: ${meta._id}`);
    }
  }

  console.log(`\n📊 Summary:`);
  console.log(`   Total documents: ${allMetadata.length}`);
  console.log(`   Unique documents: ${seen.size}`);
  console.log(`   Duplicates to delete: ${toDelete.length}`);

  if (toDelete.length === 0) {
    console.log("\n✨ No duplicates found! Your database is clean.");
    return;
  }

  console.log("\n🗑️  Deleting duplicates...");

  for (const id of toDelete) {
    try {
      await client.delete(id);
      console.log(`   Deleted: ${id}`);
    } catch (error) {
      console.error(`   Error deleting ${id}:`, error);
    }
  }

  console.log("\n✅ Cleanup complete!");
}

// Exécuter le script
cleanDuplicateTranslations()
  .then(() => {
    console.log("\n🎉 All done!");
    process.exit(0);
  })
  .catch((error) => {
    console.error("\n❌ Error:", error);
    process.exit(1);
  });
