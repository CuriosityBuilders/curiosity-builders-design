"use client";

import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import dynamic from "next/dynamic";
import Image from "next/image";

// Lazy load SparklesCore (heavy @tsparticles dependency) only when needed
const SparklesCore = dynamic(
  () =>
    import("@/components/ui/sparkles").then((mod) => ({
      default: mod.SparklesCore,
    })),
  { ssr: false }
);

interface Company {
  name: string;
  logo?: {
    asset?: {
      _id?: string;
      url?: string;
      metadata?: {
        dimensions?: {
          width?: number;
          height?: number;
        };
      };
    };
    hotspot?: { x: number; y: number };
    crop?: { top: number; bottom: number; left: number; right: number };
  };
}

interface MethodeFinalCtaProps {
  data?: {
    title?: string;
    body?: PortableTextBlock[];
    button?: string;
    clients?: Company[];
  };
}

export function MethodeFinalCta({ data }: MethodeFinalCtaProps) {
  const { ref: logosRef, isVisible: logosVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: "-100px",
  });

  if (!data) return null;

  return (
    <Section spacing="md" className="bg-black">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
          {data.title}
        </h2>
        <div className="mt-6 text-lg leading-relaxed text-white">
          {data.body && <PortableText value={data.body} />}
        </div>
        {data.clients && data.clients.length > 0 && (
          <div
            ref={logosRef as React.RefObject<HTMLDivElement>}
            className="relative mt-8 overflow-hidden rounded-lg"
          >
            <div className="relative z-10 flex flex-wrap items-center justify-center gap-6 py-8 md:gap-8">
              {data.clients.map((company: Company, index: number) => {
                const logoSrc = company.logo?.asset?.url
                  ? urlFor(company.logo)
                      .width(256)
                      .height(128)
                      .fit("max")
                      .quality(100)
                      .auto("format")
                      .url()
                  : null;

                return logoSrc ? (
                  <div
                    key={`${company.name}-${index}`}
                    className={`flex h-10 w-20 shrink-0 items-center justify-center opacity-90 grayscale-50 transition-all hover:opacity-100 hover:grayscale-0 md:h-14 md:w-28 scroll-animate scroll-animate-up ${
                      logosVisible ? "is-visible" : ""
                    }`}
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  >
                    <Image
                      src={logoSrc}
                      alt={company.name}
                      width={112}
                      height={56}
                      className="max-h-full max-w-full object-contain brightness-0 invert opacity-70"
                    />
                  </div>
                ) : null;
              })}
            </div>
            <div className="absolute inset-0 z-0 mask-[radial-gradient(50%_50%,white,transparent_70%)]">
              <SparklesCore
                id="tsparticles-logos"
                background="transparent"
                particleDensity={150}
                particleColor="#ffffff"
                minSize={0.5}
                maxSize={1.5}
                speed={1.5}
                className="absolute inset-0 h-full w-full opacity-60"
              />
            </div>
          </div>
        )}
        {data.button && (
          <div className="mt-8">
            <Button href="/contact" variant="inverted">
              {data.button}
            </Button>
          </div>
        )}
      </div>
    </Section>
  );
}
