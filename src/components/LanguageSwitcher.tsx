"use client";

import { usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";

export function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();

  const handleToggle = () => {
    // Get the other locale (toggle between en and fr)
    const otherLocale = locale === "fr" ? "en" : "fr";
    router.replace(pathname, { locale: otherLocale });
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors sm:px-4 sm:py-2 sm:text-sm bg-black text-white hover:bg-gray-800"
      aria-label={`Switch to ${locale === "fr" ? "English" : "Français"}`}
    >
      {locale.toUpperCase()}
    </button>
  );
}
