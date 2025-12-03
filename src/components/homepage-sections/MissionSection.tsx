"use client";

import { Section } from "@/components/ui/Section";
import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import { motion } from "framer-motion";

interface MissionSectionProps {
  data?: {
    title?: string;
    body?: PortableTextBlock[];
    tagline?: string;
    cta1?: string;
    cta2?: string;
  };
}

export function MissionSection({ data }: MissionSectionProps) {
  return (
    <Section id="mission" spacing="md" className="bg-white">
      <div className="mx-auto max-w-4xl px-4">
        <motion.h2
          className="font-heading text-3xl font-bold text-black sm:text-4xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {data?.title ?? ""}
        </motion.h2>
        <motion.div
          className="mt-6 text-lg leading-relaxed text-black"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {data?.body && <PortableText value={data.body} />}
        </motion.div>
      </div>
    </Section>
  );
}
