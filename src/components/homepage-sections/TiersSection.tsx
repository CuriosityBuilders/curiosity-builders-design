"use client";

import { useTranslations } from "next-intl";
import { Section } from "@/components/ui/Section";
import { TierCard } from "./TierCard";

export function TiersSection() {
  const t = useTranslations("tiers");

  const tiers = [
    {
      number: 1,
      title: t("card1.title"),
      subtitle: t("card1.subtitle"),
      description: t("card1.description"),
      tagline: t("card1.tagline"),
      buttons: [
        {
          href: "/signals",
          variant: "primary" as const,
          label: t("card1.cta"),
          className: "w-full",
        },
      ],
    },
    {
      number: 2,
      title: t("card2.title"),
      subtitle: t("card2.subtitle"),
      description: t("card2.description"),
      tagline: t("card2.tagline"),
      buttons: [
        {
          href: "/contact",
          variant: "primary" as const,
          label: t("card2.cta"),
          className: "w-full",
        },
      ],
    },
    {
      number: 3,
      title: t("card3.title"),
      subtitle: t("card3.subtitle"),
      description: t("card3.description"),
      tagline: t("card3.tagline"),
      buttons: [
        {
          href: "/services",
          variant: "primary" as const,
          label: t("card3.cta1"),
          className: "w-full py-1 text-sm text-center",
        },
        {
          href: "/contact",
          variant: "secondary" as const,
          label: t("card3.cta2"),
          className: "w-full py-1 text-sm",
        },
      ],
    },
  ];

  return (
    <Section id="tiers" spacing="md" className="relative bg-white">
      <div className="relative mx-auto max-w-7xl px-4">
        <h2 className="font-heading text-center text-3xl font-extrabold text-black sm:text-4xl py-2 tracking-wide uppercase">
          {t("title")}
        </h2>
        <div className="mt-16 grid gap-8 md:grid-cols-3 items-stretch">
          {tiers.map((tier, index) => (
            <TierCard key={tier.number} {...tier} delay={0.1 + index * 0.1} />
          ))}
        </div>
      </div>
    </Section>
  );
}
