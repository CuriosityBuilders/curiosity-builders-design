"use client";

import { routing, usePathname } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";

export function LanguageSwitcher() {
  const pathname = usePathname();
  const localeFromHook = useLocale();

  // Track the current locale from the URL to ensure button state is correct
  const [currentLocale, setCurrentLocale] = useState(localeFromHook);

  useEffect(() => {
    // Update locale from URL on mount and when it changes
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      const match = path.match(/^\/(fr|en)(\/|$)/);
      if (
        match &&
        routing.locales.includes(match[1] as (typeof routing.locales)[number])
      ) {
        setCurrentLocale(match[1]);
      } else {
        setCurrentLocale(localeFromHook);
      }
    }
  }, [localeFromHook]);

  const locale = currentLocale;

  const handleLocaleChange = (newLocale: string) => {
    // pathname from next-intl already excludes the locale prefix
    // Remove any existing locale prefix from pathname if present
    let targetPath = pathname || "/";

    // Remove locale prefix if it exists (e.g., "/en" or "/fr")
    routing.locales.forEach((loc) => {
      if (targetPath.startsWith(`/${loc}/`)) {
        targetPath = targetPath.slice(`/${loc}`.length);
      } else if (targetPath === `/${loc}`) {
        targetPath = "/";
      }
    });

    // Build the new URL with the new locale
    const newUrl = `/${newLocale}${targetPath === "/" ? "" : targetPath}`;
    window.location.href = newUrl;
  };

  return (
    <div className="flex gap-1 items-center">
      {routing.locales.map((loc) => {
        const isActive = locale === loc;
        return (
          <button
            key={loc}
            type="button"
            onClick={() => handleLocaleChange(loc)}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors sm:px-4 sm:py-2 sm:text-sm ${
              isActive
                ? "bg-black text-white"
                : "bg-transparent text-black hover:text-gray-700"
            }`}
            aria-label={`Switch to ${loc.toUpperCase()}`}
          >
            {loc.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
