import { LocaleHtml } from "@/components/LocaleHtml";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { routing } from "@/i18n/routing";
import { urlFor } from "@/sanity/lib/image";
import { getHeader, getNavigation } from "@/sanity/lib/queries";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
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

  // Fetch navigation and header data from Sanity
  const navigationData = await getNavigation(locale);
  const headerData = await getHeader(locale);

  // Get logo URL if available
  const logoUrl = headerData?.logo?.asset
    ? urlFor(headerData.logo)
        .width(160)
        .height(64)
        .fit("max")
        .auto("format")
        .url()
    : undefined;

  const logoAlt = headerData?.logo?.alt || "Curiosity.Builders";

  return (
    <NextIntlClientProvider messages={messages}>
      <LocaleHtml />
      <Header
        navigationItems={navigationData?.items || []}
        logoUrl={logoUrl}
        logoAlt={logoAlt}
      />
      {children}
      <Footer locale={locale} />
    </NextIntlClientProvider>
  );
}
