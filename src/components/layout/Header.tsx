"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "Méthode", href: "/methode" },
  { name: "Services", href: "/services" },
  { name: "Signals", href: "/signals" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [language, setLanguage] = useState<"EN" | "FR">("FR");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <nav className="mx-auto flex items-center justify-between border border-black/10 bg-white/50 px-4 py-2 shadow-sm backdrop-blur-xl backdrop-saturate-200 sm:px-8 md:px-16 lg:px-24">
        {/* Logo - Left */}
        <Link href="/" className="flex items-center">
          <motion.div
            className="relative h-10 w-[100px] sm:h-12 sm:w-[120px] md:h-16 md:w-[160px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {/* Skeleton placeholder to prevent layout shift */}
            {!imageLoaded && (
              <div className="absolute inset-0 animate-pulse bg-gray-200" />
            )}
            <Image
              src="/Logo Curiosity V2.svg"
              alt="Curiosity.Builders"
              width={120}
              height={40}
              className="relative h-10 w-full sm:h-12 md:h-16"
              priority
              onLoad={() => setImageLoaded(true)}
            />
          </motion.div>
        </Link>

        {/* Navigation Links - Center (Desktop & Tablet) */}
        <div className="hidden items-center space-x-4 md:space-x-6 md:flex lg:space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-black transition-colors duration-200 hover:text-gray-600 lg:text-base"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right Side - Language Toggle & Mobile Menu */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Language Toggle - Desktop */}
          <div className="hidden items-center gap-1 md:flex">
            <button
              type="button"
              onClick={() => setLanguage("EN")}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors sm:px-4 sm:py-2 sm:text-sm ${
                language === "EN"
                  ? "bg-black text-white"
                  : "bg-transparent text-black hover:text-gray-700"
              }`}
              aria-label="Switch to English"
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLanguage("FR")}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors sm:px-4 sm:py-2 sm:text-sm ${
                language === "FR"
                  ? "bg-black text-white"
                  : "bg-transparent text-black hover:text-gray-700"
              }`}
              aria-label="Switch to French"
            >
              FR
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center justify-center rounded-lg p-2 text-black transition-colors hover:bg-black/5 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <title>{mobileMenuOpen ? "Close menu" : "Open menu"}</title>
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden border-t border-black/10 bg-white/95 backdrop-blur-xl md:hidden"
          >
            <div className="px-4 py-4">
              {/* Mobile Navigation Links */}
              <nav className="space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-lg px-4 py-3 text-base font-medium text-black transition-colors hover:bg-black/5"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              {/* Language Toggle - Mobile */}
              <div className="mt-4 flex items-center justify-center gap-1 border-t border-black/10 pt-4">
                <button
                  type="button"
                  onClick={() => setLanguage("EN")}
                  className={`rounded-lg px-4 py-1.5 text-sm font-medium transition-colors ${
                    language === "EN"
                      ? "bg-black text-white"
                      : "bg-transparent text-black hover:text-gray-700"
                  }`}
                  aria-label="Switch to English"
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage("FR")}
                  className={`rounded-lg px-4 py-1.5 text-sm font-medium transition-colors ${
                    language === "FR"
                      ? "bg-black text-white"
                      : "bg-transparent text-black hover:text-gray-700"
                  }`}
                  aria-label="Switch to French"
                >
                  FR
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
