import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { LocaleHtml } from "@/components/LocaleHtml";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { routing } from "@/i18n/routing";

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

  return (
    <NextIntlClientProvider messages={messages}>
      <LocaleHtml />
      <Header />
      {children}
      <Footer locale={locale} />
    </NextIntlClientProvider>
  );
}
