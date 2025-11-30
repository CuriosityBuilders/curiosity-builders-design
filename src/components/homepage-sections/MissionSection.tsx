"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Section } from "@/components/ui/Section";

export function MissionSection() {
  const t = useTranslations("mission");
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
          {t("title")}
        </motion.h2>
        <motion.p
          className="mt-6 text-lg leading-relaxed text-black whitespace-pre-line"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {t("body")}
        </motion.p>
      </div>
    </Section>
  );
}
