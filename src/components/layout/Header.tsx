"use client";

import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Link } from "@/i18n/routing";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface NavigationItem {
  _key: string;
  label: string;
  href: string;
}

interface HeaderProps {
  navigationItems?: NavigationItem[];
  logoUrl?: string;
  logoAlt?: string;
}

export function Header({
  navigationItems = [],
  logoUrl,
  logoAlt = "Curiosity.Builders",
}: HeaderProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Fallback to default navigation if no items from Sanity
  const navigation =
    navigationItems && navigationItems.length > 0
      ? navigationItems
      : [
          { _key: "home", label: "Accueil", href: "/" },
          { _key: "method", label: "Méthode", href: "/methode" },
          { _key: "services", label: "Services", href: "/services" },
          { _key: "signals", label: "Signals", href: "/signals" },
          { _key: "contact", label: "Contact", href: "/contact" },
        ];

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
            {logoUrl ? (
              <Image
                src={logoUrl}
                alt={logoAlt}
                width={120}
                height={40}
                className="relative h-10 w-full sm:h-12 md:h-16"
                priority
                onLoad={() => setImageLoaded(true)}
              />
            ) : (
              <Image
                src="/Logo Curiosity Builders V2.svg"
                alt={logoAlt}
                width={120}
                height={40}
                className="relative h-10 w-full sm:h-12 md:h-16"
                priority
                onLoad={() => setImageLoaded(true)}
              />
            )}
          </motion.div>
        </Link>

        {/* Right Side - Navigation Links, Language Toggle & Mobile Menu */}
        <div className="flex items-center gap-3 sm:gap-12">
          {/* Navigation Links - Desktop & Tablet */}
          <div className="hidden items-center space-x-4 md:space-x-6 md:flex lg:space-x-10">
            {navigation.map((item) => (
              <Link
                key={item._key || item.href}
                href={item.href}
                className="text-sm font-semibold text-black transition-colors duration-200 hover:text-gray-600 lg:text-base"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Language Toggle - Desktop */}
          <div className="hidden md:flex">
            <LanguageSwitcher />
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
                    key={item._key || item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-lg px-4 py-3 text-base font-semibold text-black transition-colors hover:bg-black/5"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* Language Toggle - Mobile */}
              <div className="mt-4 flex items-center justify-center border-t border-black/10 pt-4">
                <LanguageSwitcher />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
