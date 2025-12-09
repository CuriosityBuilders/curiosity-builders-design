"use client";

import { Button } from "@/components/ui/Button";
import { Particles } from "@/components/ui/particles";
import { Section } from "@/components/ui/Section";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface FooterCTASectionProps {
  data?: {
    title?: string;
    cta1?: string;
    cta2?: string;
    cta3?: string;
  };
}

export function FooterCTASection({ data }: FooterCTASectionProps) {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: "-100px",
  });
  const { ref: ctasRef, isVisible: ctasVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: "-100px",
  });

  return (
    <Section spacing="md" className="relative bg-black text-center">
      {/* Particles Background */}
      <Particles
        className="absolute inset-0"
        quantity={40}
        ease={80}
        color="#ffffff"
        refresh
      />
      <div className="relative z-10 mx-auto max-w-4xl px-4">
        <h2
          ref={titleRef as React.RefObject<HTMLHeadingElement>}
          className={`font-heading text-3xl font-bold text-white sm:text-4xl scroll-animate scroll-animate-up ${
            titleVisible ? "is-visible" : ""
          }`}
        >
          {data?.title ?? ""}
        </h2>
        <div
          ref={ctasRef as React.RefObject<HTMLDivElement>}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          {data?.cta1 && (
            <div
              className={`scroll-animate scroll-animate-up ${
                ctasVisible ? "is-visible" : ""
              }`}
              style={{ transitionDelay: "0.2s" }}
            >
              <Button href="/contact" variant="inverted">
                {data.cta1}
              </Button>
            </div>
          )}
          {data?.cta2 && (
            <div
              className={`scroll-animate scroll-animate-up ${
                ctasVisible ? "is-visible" : ""
              }`}
              style={{ transitionDelay: "0.3s" }}
            >
              <Button href="/services" variant="secondary-inverted">
                {data.cta2}
              </Button>
            </div>
          )}
          {data?.cta3 && (
            <div
              className={`scroll-animate scroll-animate-up ${
                ctasVisible ? "is-visible" : ""
              }`}
              style={{ transitionDelay: "0.4s" }}
            >
              <Button href="/contact" variant="secondary-inverted">
                {data.cta3}
              </Button>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
