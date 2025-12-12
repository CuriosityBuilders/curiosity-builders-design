"use client";

import { Section } from "@/components/ui/Section";
import { TierCard } from "./TierCard";

interface TiersSectionProps {
  data?: {
    title?: string;
    cards?: Array<{
      _key?: string;
      number?: number;
      title?: string;
      subtitle?: string;
      description?: string;
      tagline?: string;
      cta?: string;
      cta1?: string;
      href?: string;
    }>;
  };
}

export function TiersSection({ data }: TiersSectionProps) {
  const tiers =
    data?.cards?.map((card) => {
      const buttons = [];
      if (card.cta && card.href) {
        buttons.push({
          href: card.href,
          variant: "primary" as const,
          label: card.cta,
          className: "w-full text-center",
        });
      } else if (card.cta1 && card.href) {
        buttons.push({
          href: card.href,
          variant: "primary" as const,
          label: card.cta1,
          className: "w-full text-center",
        });
      }

      return {
        number: card.number || 0,
        title: card.title || "",
        subtitle: card.subtitle || "",
        description: card.description || "",
        tagline: card.tagline || "",
        buttons,
      };
    }) || [];

  return (
    <Section id="tiers" spacing="md" className="relative bg-white">
      <div className="relative mx-auto max-w-7xl px-4">
        <h2 className="font-heading text-center text-3xl font-extrabold text-black sm:text-4xl py-2 tracking-wide uppercase">
          {data?.title ?? ""}
        </h2>
        <div className="mt-12 sm:mt-16 grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          {tiers.map((tier, index) => (
            <TierCard key={tier.number} {...tier} delay={0.1 + index * 0.1} />
          ))}
        </div>
      </div>
    </Section>
  );
}
