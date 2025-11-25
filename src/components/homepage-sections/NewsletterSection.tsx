"use client";

import { useTranslations } from "next-intl";
import DotCard from "@/components/mvpblocks/dot-card";
import { Button } from "@/components/ui/Button";
import { GridBackground } from "@/components/ui/GridBackground";
import { Section } from "@/components/ui/Section";

export function NewsletterSection() {
  const t = useTranslations("newsletter");
  return (
    <Section
      id="newsletter"
      spacing="md"
      className="relative bg-white text-center"
    >
      <GridBackground size={150} opacity={0.1} />
      <div className="relative mx-auto max-w-4xl px-4">
        <DotCard>
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
        </DotCard>
      </div>
    </Section>
  );
}
