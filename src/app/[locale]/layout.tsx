import { DisableDraftMode } from "@/components/DisableDraftMode";
import { LocaleHtml } from "@/components/LocaleHtml";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { routing } from "@/i18n/routing";
import { urlFor } from "@/sanity/lib/image";
import { SanityLive } from "@/sanity/lib/live";
import { getLogo, getNavigation } from "@/sanity/lib/queries";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { VisualEditing } from "next-sanity/visual-editing";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // S'assurer que la locale entrante est valide
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  // Fournir tous les messages au côté client pour la locale actuelle
  const messages = await getMessages({ locale });

  // Fetch navigation and logo data from Sanity
  const navigationData = await getNavigation(locale);
  const logoData = await getLogo();

  // Get logo URL from logo document (shared for all languages)
  const logoUrl = logoData?.logo?.asset
    ? urlFor(logoData.logo)
        .width(160)
        .height(64)
        .fit("max")
        .quality(100)
        .auto("format")
        .url()
    : undefined;

  const logoAlt = logoData?.logo?.alt || "Curiosity.Builders";

  return (
    <NextIntlClientProvider messages={messages}>
      <LocaleHtml />
      <Header
        navigationItems={navigationData?.items || []}
        logoUrl={logoUrl}
        logoAlt={logoAlt}
      />
      {children}
      <SanityLive />
      {(await draftMode()).isEnabled && (
        <>
          <DisableDraftMode />
          <VisualEditing />
        </>
      )}
      <Footer locale={locale} />
    </NextIntlClientProvider>
  );
}
