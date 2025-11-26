"use client";

import { routing, usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";

export function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();

  const handleLocaleChange = (newLocale: string) => {
    // Use next-intl router to navigate with locale preservation
    router.replace(pathname, { locale: newLocale });
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
