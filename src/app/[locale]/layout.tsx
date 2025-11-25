import { LocaleHtml } from "@/components/LocaleHtml";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Epilogue, Inter, Manrope, Oswald } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Curiosity.Builders - Plateforme d'accélération de vos projets de lieux",
  description:
    "Plateforme d'accélération de vos projets de lieux. Centrée sur l'humain, guidée par la donnée, augmentée par l'IA.",
};

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
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${oswald.variable} ${inter.variable} ${manrope.variable} ${epilogue.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <LocaleHtml />
          <Header />
          {children}
          <Footer locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
