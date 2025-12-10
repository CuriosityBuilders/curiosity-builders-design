import { metadata } from "@/app/metadata";
import { Epilogue } from "next/font/google";
import "./globals.css";

export const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  preload: true,
});

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Root layout only imports global styles and fonts
  // Each route group (locale, studio) provides its own <html> and <body> tags
  return children;
}
