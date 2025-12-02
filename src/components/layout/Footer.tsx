import { Link } from "@/i18n/routing";
import { getFooter } from "@/sanity/lib/queries";
import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import { Linkedin } from "lucide-react";

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
  const footerData = await getFooter(locale);

  return (
    <footer className="relative z-10 w-full overflow-hidden border-t">
      <div className="pointer-events-none absolute top-0 left-1/2 z-0 h-full w-full -translate-x-1/2 select-none">
        <div className="absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-gray-400/20 blur-3xl"></div>
        <div className="absolute right-1/4 -bottom-24 h-80 w-80 rounded-full bg-gray-400/20 blur-3xl"></div>
      </div>
      <div className="glass relative mx-auto flex w-full  flex-col gap-12 px-4 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          {/* Colonne 1 : Logo + Description */}
          <div className="flex flex-col">
            <Link href="/" className="mb-4">
              <h2 className="font-heading text-3xl font-extrabold text-black">
                Curiosity.Builders
              </h2>
            </Link>
            <div className="mt-2 text-sm text-black">
              {footerData?.description && (
                <PortableText
                  value={footerData.description as PortableTextBlock[]}
                />
              )}
            </div>
          </div>

          {/* Colonne 2 : Tagline */}
          <div className="flex flex-col items-start gap-2 md:items-end">
            <p className="text-md font-bold text-black italic">
              {footerData?.tagline || ""}
            </p>
          </div>
        </div>

        {/* Ligne de liens horizontale */}
        <div className="flex flex-wrap justify-center gap-4 md:justify-start md:gap-6">
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
            href="https://substack.com/@curiositybuilders"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-black transition-colors hover:text-gray-700"
          >
            <SubstackIcon className="h-5 w-5" />
            Substack
          </a>
          <Link
            href="/mentions-legales"
            className="text-black transition-colors hover:text-gray-700"
          >
            {footerData?.legalNotice || ""}
          </Link>
          <Link
            href="/politique-confidentialite"
            className="text-black transition-colors hover:text-gray-700"
          >
            {footerData?.privacyPolicy || ""}
          </Link>
        </div>

        <div className="w-full relative z-10 border-t border-gray-200 pt-4">
          <p className="text-center text-sm text-black">
            {footerData?.copyright || ""}
          </p>
        </div>
      </div>
    </footer>
  );
}
