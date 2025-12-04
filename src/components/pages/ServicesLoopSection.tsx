"use client";

import CircularText from "@/components/mvpblocks/circular-text";
import { Section } from "@/components/ui/Section";
import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import { useTranslations } from "next-intl";

interface ServicesLoopSectionProps {
  data?: {
    text?: string;
    quote?: string;
    author?: string;
    subtext?: PortableTextBlock[];
  };
}

export function ServicesLoopSection({ data }: ServicesLoopSectionProps) {
  const t = useTranslations("services");

  return (
    <Section spacing="md" className="bg-black">
      <div className="mx-auto max-w-4xl px-4">
        <div className="text-center">
          <div className="flex items-center justify-center">
            <CircularText
              text={t("loop.text")}
              spinDuration={20}
              onHover="speedUp"
              className="text-white"
              textSize="text-sm"
            />
          </div>
          {(data?.quote || data?.author) && (
            <div className="mt-8 rounded-lg bg-gray-50/10 px-6 py-6 font-bold">
              {data.quote && (
                <blockquote className="text-lg italic leading-relaxed text-white sm:text-xl">
                  {data.quote}
                </blockquote>
              )}
              {data.author && (
                <p className="mt-4 text-sm text-white">{data.author}</p>
              )}
            </div>
          )}
          {data?.subtext && (
            <div className="mt-8 text-base leading-relaxed text-white">
              <PortableText value={data.subtext} />
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
