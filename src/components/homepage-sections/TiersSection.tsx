"use client";

import { Section } from "@/components/ui/Section";
import { GridBackground } from "@/components/ui/GridBackground";
import { TierCard } from "./TierCard";

export function TiersSection() {
  const tiers = [
    {
      number: 1,
      title: "Signaux & Intelligence",
      subtitle: "Voir, comprendre, anticiper",
      description:
        "Veille stratégique, études, capital watch, partenaires & tendances.",
      tagline: "Pour nourrir la vision et orienter les décisions.",
      buttons: [
        {
          href: "/signals",
          variant: "secondary" as const,
          label: "Accéder aux insights",
          className: "w-full",
        },
      ],
    },
    {
      number: 2,
      title: "Diagnostiques & Tests",
      subtitle: "Analyser, tester, décider vite",
      description: "Audits, diagnostiques contextuels et pitches.",
      tagline: "Pour adapter vos usages, montages et levées de fonds.",
      buttons: [
        {
          href: "/contact",
          variant: "secondary" as const,
          label: "Nous écrire",
          className: "w-full",
        },
      ],
    },
    {
      number: 3,
      title: "R&D Studio & Strategic Advisory",
      subtitle: "Concevoir, financer, scaler",
      description:
        "R&D externalisée, Fractional Chief R&D Officer, Senior Advisory sur vos startups, scale-ups, spin-off ou nouvelles BU.",
      tagline: "Pour passer du test à l'exécution et au changement d'échelle.",
      buttons: [
        {
          href: "/services",
          variant: "primary" as const,
          label: "Demander la présentation",
          className: "w-full py-1 text-sm text-center",
        },
        {
          href: "/contact",
          variant: "secondary" as const,
          label: "Nous écrire",
          className: "w-full py-1 text-sm",
        },
      ],
    },
  ];

  return (
    <Section id="tiers" spacing="md" className="relative bg-white">
      <GridBackground size={100} opacity={0.05} />
      <div className="relative mx-auto max-w-7xl px-4">
        <h2 className="font-heading text-center text-3xl font-bold text-black sm:text-4xl">
          3 leviers pour accélérer vos projets
        </h2>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {tiers.map((tier, index) => (
            <TierCard key={tier.number} {...tier} delay={0.1 + index * 0.1} />
          ))}
        </div>
      </div>
    </Section>
  );
}
