import { urlFor } from "@/sanity/lib/image";
import { getSEOSettings } from "@/sanity/lib/queries";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

// Default fallback values
const defaultTitle =
  "Curiosity.Builders - Plateforme d'accélération de vos projets de lieux";
const defaultDescription =
  "Plateforme d'accélération de vos projets de lieux. Centrée sur l'humain, guidée par la donnée, augmentée par l'IA.";
const defaultOgImage = "/LOGO CURIOSITY HD_Balloons_Deep Black.png";

/**
 * Generates metadata from Sanity SEO settings
 * Falls back to default values if Sanity data is not available
 */
export async function generateMetadata(
  locale: string = "fr"
): Promise<Metadata> {
  let seoSettings: Awaited<ReturnType<typeof getSEOSettings>> | undefined;

  try {
    seoSettings = await getSEOSettings(locale);
  } catch (error: unknown) {
    console.warn(
      "Failed to fetch SEO settings from Sanity, using defaults:",
      error
    );
  }

  const title = seoSettings?.title || defaultTitle;
  const description = seoSettings?.description || defaultDescription;

  // Build Open Graph image URL
  let ogImageUrl = defaultOgImage;
  let ogImageWidth = 1200;
  let ogImageHeight = 630;
  let ogImageAlt = "Curiosity.Builders";

  if (seoSettings?.ogImage?.asset) {
    try {
      ogImageUrl = urlFor(seoSettings.ogImage)
        .width(1200)
        .height(630)
        .fit("max")
        .quality(90)
        .auto("format")
        .url();

      ogImageWidth =
        seoSettings.ogImage.asset.metadata?.dimensions?.width || 1200;
      ogImageHeight =
        seoSettings.ogImage.asset.metadata?.dimensions?.height || 630;
      ogImageAlt = seoSettings.ogImage.alt || "Curiosity.Builders";
    } catch (error) {
      console.warn("Failed to generate OG image URL, using default:", error);
    }
  }

  // Build favicon URL
  let faviconUrl: string | undefined;
  if (seoSettings?.favicon?.asset) {
    try {
      faviconUrl = urlFor(seoSettings.favicon)
        .width(32)
        .height(32)
        .fit("max")
        .quality(100)
        .auto("format")
        .url();
    } catch (error) {
      console.warn("Failed to generate favicon URL:", error);
    }
  }

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    icons: faviconUrl
      ? {
          icon: faviconUrl,
          shortcut: faviconUrl,
          apple: faviconUrl,
        }
      : undefined,
    openGraph: {
      title,
      description,
      images: [
        {
          url: ogImageUrl,
          width: ogImageWidth,
          height: ogImageHeight,
          alt: ogImageAlt,
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
    },
    other: {
      "dns-prefetch": "https://cdn.sanity.io",
    },
  };
}

// Export default metadata for root layout (uses default locale)
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: defaultTitle,
  description: defaultDescription,
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: "Curiosity.Builders",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "dns-prefetch": "https://cdn.sanity.io",
  },
};
