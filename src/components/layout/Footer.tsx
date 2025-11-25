import { Link } from "@/i18n/routing";
import { Linkedin } from "lucide-react";
import { getTranslations } from "next-intl/server";

// Substack icon component
function SubstackIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Substack"
      role="img"
    >
      <title>Substack</title>
      <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V22.5h21.08V10.812H1.46zm2.836 2.836h15.408v1.688H4.296v-1.688z" />
    </svg>
  );
}

interface FooterProps {
  locale: string;
}

export async function Footer({ locale }: FooterProps) {
  const t = await getTranslations({ locale, namespace: "footer" });

  return (
    <footer className="relative z-10 w-full overflow-hidden border-t">
      <div className="pointer-events-none absolute top-0 left-1/2 z-0 h-full w-full -translate-x-1/2 select-none">
        <div className="absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-gray-400/20 blur-3xl"></div>
        <div className="absolute right-1/4 -bottom-24 h-80 w-80 rounded-full bg-gray-400/20 blur-3xl"></div>
      </div>
      <div className="glass relative mx-auto flex w-full flex-col gap-12 py-16">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between md:items-start">
          <div className="flex flex-col">
            <Link href="/" className="mb-4">
              <h2 className="font-heading text-3xl font-extrabold text-black">
                Curiosity.Builders
              </h2>
            </Link>
            <p className="mt-2 text-sm text-black whitespace-pre-line">
              {t("description")}
            </p>
            <div className="mt-4 flex flex-col gap-6 text-sm">
              <div className="flex flex-col gap-2">
                <h3 className="font-heading text-xs font-semibold uppercase tracking-wide text-black">
                  {t("followUs")}
                </h3>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://fr.linkedin.com/in/claireflurin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-black transition-colors hover:text-gray-700"
                  >
                    <Linkedin className="h-5 w-5" />
                    LinkedIn
                  </a>
                  <a
                    href="https://substack.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-black transition-colors hover:text-gray-700"
                  >
                    <SubstackIcon className="h-5 w-5" />
                    Substack
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-heading text-xs font-semibold uppercase tracking-wide text-black">
                  {t("privacy")}
                </h3>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/mentions-legales"
                    className="text-black transition-colors hover:text-gray-700"
                  >
                    {t("legalNotice")}
                  </Link>
                  <Link
                    href="/politique-confidentialite"
                    className="text-black transition-colors hover:text-gray-700"
                  >
                    {t("privacyPolicy")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-2">
            <p className="text-md text-black italic">{t("tagline")}</p>
            <p className="text-sm text-black">{t("copyright")}</p>
          </div>
        </div>
        <div className="w-full relative z-10 border-t border-gray-200 pt-4"></div>
      </div>
    </footer>
  );
}
