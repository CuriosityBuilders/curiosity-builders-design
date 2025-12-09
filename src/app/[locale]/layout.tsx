import { generateMetadata as generateSEOMetadata } from "@/app/metadata";
import { DisableDraftMode } from "@/components/DisableDraftMode";
import { LocaleHtml } from "@/components/LocaleHtml";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { StructuredData } from "@/components/seo/StructuredData";
import { routing } from "@/i18n/routing";
import { urlFor } from "@/sanity/lib/image";
import { SanityLive } from "@/sanity/lib/live";
import { getLogo, getNavigation } from "@/sanity/lib/queries";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { VisualEditing } from "next-sanity/visual-editing";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateSEOMetadata(locale);
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  // Paralléliser les requêtes pour améliorer les performances
  const [messages, navigationData, logoData, isDraftMode] = await Promise.all([
    getMessages({ locale }),
    getNavigation(locale),
    getLogo(),
    draftMode().then((dm) => dm.isEnabled),
  ]);

  // Generate logo URL with maximum quality for crisp display on all devices
  // Using 3x dimensions for ultra-high DPI displays (540x192 = 3x of 180x64 desktop)
  // Aspect ratio: 2.8125:1 (matches container: 180px × 64px)
  const logoUrl = logoData?.logo?.asset
    ? urlFor(logoData.logo)
        .width(540)
        .height(192)
        .fit("max")
        .quality(100)
        .auto("format")
        .url()
    : undefined;

  return (
    <NextIntlClientProvider messages={messages}>
      <StructuredData locale={locale} />
      <LocaleHtml />
      <Header
        navigationItems={navigationData?.items || []}
        logoUrl={logoUrl}
        logoAlt={logoData?.logo?.alt || "Curiosity.Builders"}
      />
      {children}
      {isDraftMode && (
        <>
          <SanityLive />
          <DisableDraftMode />
          <VisualEditing />
        </>
      )}
      <Footer locale={locale} />
    </NextIntlClientProvider>
  );
}
