import { urlFor } from "@/sanity/lib/image";
import { getLogo } from "@/sanity/lib/queries";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

interface StructuredDataProps {
  locale?: string;
}

export async function StructuredData({ locale = "fr" }: StructuredDataProps) {
  // Fetch logo for organization schema
  let logoUrl: string | undefined;
  try {
    const logoData = await getLogo();
    if (logoData?.logo?.asset) {
      logoUrl = urlFor(logoData.logo)
        .width(600)
        .height(240)
        .fit("max")
        .quality(90)
        .auto("format")
        .url();
    }
  } catch (error) {
    console.warn("Failed to fetch logo for structured data:", error);
  }

  // Organization schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Curiosity.Builders",
    url: siteUrl,
    logo: logoUrl
      ? {
          "@type": "ImageObject",
          url: logoUrl,
        }
      : undefined,
    description:
      locale === "fr"
        ? "Plateforme d'accélération de vos projets de lieux. Centrée sur l'humain, guidée par la donnée, augmentée par l'IA."
        : "A creativity and productivity accelerator for the built environment. Human-centered, data-driven, AI-enhanced.",
    sameAs: [], // Add social media URLs here if available
  };

  // Website schema with search action
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Curiosity.Builders",
    url: siteUrl,
    description:
      locale === "fr"
        ? "Plateforme d'accélération de vos projets de lieux. Centrée sur l'humain, guidée par la donnée, augmentée par l'IA."
        : "A creativity and productivity accelerator for the built environment. Human-centered, data-driven, AI-enhanced.",
    inLanguage: locale === "fr" ? "fr-FR" : "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/${locale}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  // Remove undefined logo property if not available
  if (!organizationSchema.logo) {
    delete organizationSchema.logo;
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}
