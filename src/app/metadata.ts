import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title:
    "Curiosity.Builders - Plateforme d'accélération de vos projets de lieux",
  description:
    "Plateforme d'accélération de vos projets de lieux. Centrée sur l'humain, guidée par la donnée, augmentée par l'IA.",
  openGraph: {
    title:
      "Curiosity.Builders - Plateforme d'accélération de vos projets de lieux",
    description:
      "Plateforme d'accélération de vos projets de lieux. Centrée sur l'humain, guidée par la donnée, augmentée par l'IA.",
    images: [
      {
        url: "/LOGO CURIOSITY HD_Balloons_Deep Black.png",
      },
    ],
  },
};
