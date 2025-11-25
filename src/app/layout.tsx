import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Curiosity.Builders - Plateforme d'accélération de vos projets de lieux",
  description:
    "Plateforme d'accélération de vos projets de lieux. Centrée sur l'humain, guidée par la donnée, augmentée par l'IA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
