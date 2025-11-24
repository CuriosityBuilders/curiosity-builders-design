"use client";

import DotCard from "@/components/mvpblocks/dot-card";
import { Button } from "@/components/ui/Button";
import { GridBackground } from "@/components/ui/GridBackground";
import { Section } from "@/components/ui/Section";

export function NewsletterSection() {
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
            Signals & Intelligence
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-black">
            La veille stratégique de Curiosity.Builders pour anticiper les
            mutations de l'immobilier et des territoires.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contact">S'abonner</Button>
            <Button href="/signals" variant="secondary">
              En savoir plus
            </Button>
          </div>
        </DotCard>
      </div>
    </Section>
  );
}
