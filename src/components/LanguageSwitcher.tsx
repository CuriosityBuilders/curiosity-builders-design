"use client";

import { usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";

export function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();

  // Calculate target locale (the language we'll switch to)
  const targetLocale = locale === "fr" ? "en" : "fr";

  const handleToggle = () => {
    router.replace(pathname, { locale: targetLocale });
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors sm:px-4 sm:py-2 sm:text-sm bg-black text-white hover:bg-gray-800"
      aria-label={`Switch to ${targetLocale === "en" ? "English" : "Français"}`}
    >
      {targetLocale.toUpperCase()}
    </button>
  );
}
