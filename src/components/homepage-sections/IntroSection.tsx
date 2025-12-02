"use client";

import { Button } from "@/components/ui/Button";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { Section } from "@/components/ui/Section";
import { Link } from "@/i18n/routing";
import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import { motion } from "framer-motion";

interface IntroSectionProps {
  data?: {
    title?: string;
    body?: PortableTextBlock[];
    cta1?: string;
    cta2?: string;
  };
}

export function IntroSection({ data }: IntroSectionProps) {
  return (
    <Section id="intro" spacing="md" className="bg-black">
      <div className="mx-auto max-w-4xl px-4">
        <motion.h2
          className="font-heading text-3xl font-bold text-white sm:text-4xl"
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
          className="mt-6 text-lg leading-relaxed text-white"
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
        <motion.div
          className="mt-8 flex flex-wrap gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.6,
            delay: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.6,
              delay: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <MovingBorderButton
              as={Link}
              href="/services"
              borderRadius="9999px"
              duration={4000}
              containerClassName="group w-auto h-auto inline-block"
              borderClassName="bg-[radial-gradient(rgba(255,255,255,0.9)_40%,transparent_60%)] opacity-90"
              className="bg-white hover:bg-white/90 text-black border-white/20 backdrop-blur-md px-6 py-3 text-base font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
            >
              {data?.cta1 ?? ""}
            </MovingBorderButton>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.6,
              delay: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <Button href="/contact" variant="secondary-inverted">
              {data?.cta2 ?? ""}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
