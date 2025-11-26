"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { GridBackground } from "@/components/ui/GridBackground";
import { Section } from "@/components/ui/Section";

export function NewsletterSection() {
  const t = useTranslations("newsletter");
  return (
    <Section
      id="newsletter"
      spacing="md"
      className="relative bg-white text-center overflow-hidden"
    >
      <GridBackground size={200} opacity={0.05} />

      <div className="relative mx-auto max-w-4xl px-4 py-8">
        {/* Horizontal lines extending full width */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
          style={{ width: "100vw" }}
        >
          <div className="h-px bg-zinc-400" />
        </div>
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
          style={{ width: "100vw" }}
        >
          <div className="h-px bg-zinc-400" />
        </div>

        {/* Vertical lines extending full height */}
        <div
          className="absolute left-0 pointer-events-none"
          style={{ height: "200vh", top: "-50vh" }}
        >
          <div className="w-px bg-zinc-400 h-full" />
        </div>
        <div
          className="absolute right-0 pointer-events-none"
          style={{ height: "200vh", top: "-50vh" }}
        >
          <div className="w-px bg-zinc-400 h-full" />
        </div>

        {/* Corner dots */}
        <div className="absolute left-0 top-0 z-10 bg-black size-1 -translate-x-1/2 rounded-full ring-8 ring-white" />
        <div className="absolute right-0 top-0 z-10 bg-black size-1 translate-x-1/2 rounded-full ring-8 ring-white" />
        <div className="absolute left-0 bottom-0 z-10 bg-black size-1 -translate-x-1/2 rounded-full ring-8 ring-white" />
        <div className="absolute right-0 bottom-0 z-10 bg-black size-1 translate-x-1/2 rounded-full ring-8 ring-white" />

        {/* Content */}
        <div className="relative z-20">
          <h2 className="font-heading text-3xl font-bold text-black sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-black">
            {t("description")}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contact">{t("cta1")}</Button>
            <Button href="/signals" variant="secondary">
              {t("cta2")}
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
