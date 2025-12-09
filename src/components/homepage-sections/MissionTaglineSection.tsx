"use client";

import { Button } from "@/components/ui/Button";
import { Particles } from "@/components/ui/particles";
import { Section } from "@/components/ui/Section";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface MissionTaglineSectionProps {
  data?: {
    tagline?: string;
    cta1?: string;
    cta2?: string;
  };
}

export function MissionTaglineSection({ data }: MissionTaglineSectionProps) {
  const { ref: taglineRef, isVisible: taglineVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: "-100px",
  });
  const { ref: buttonsRef, isVisible: buttonsVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: "-100px",
  });

  return (
    <Section id="mission-tagline" spacing="md" className="relative bg-black">
      {/* Particles Background */}
      <Particles
        className="absolute inset-0"
        quantity={40}
        ease={80}
        color="#ffffff"
        refresh
      />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <p
          ref={taglineRef as React.RefObject<HTMLParagraphElement>}
          className={`font-heading text-3xl font-bold text-white sm:text-4xl scroll-animate scroll-animate-up ${
            taglineVisible ? "is-visible" : ""
          }`}
        >
          {data?.tagline ?? ""}
        </p>
        <div
          ref={buttonsRef as React.RefObject<HTMLDivElement>}
          className={`mt-8 flex flex-wrap gap-4 justify-center scroll-animate scroll-animate-fade ${
            buttonsVisible ? "is-visible" : ""
          }`}
        >
          <div
            className={`scroll-animate scroll-animate-up ${
              buttonsVisible ? "is-visible" : ""
            }`}
            style={{ transitionDelay: "0.1s" }}
          >
            <Button href="/services" variant="inverted">
              {data?.cta1 ?? ""}
            </Button>
          </div>
          <div
            className={`scroll-animate scroll-animate-up ${
              buttonsVisible ? "is-visible" : ""
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            <Button href="/contact" variant="secondary-inverted">
              {data?.cta2 ?? ""}
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
