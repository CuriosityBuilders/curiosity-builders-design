"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { Particles } from "@/components/ui/particles";
import { Section } from "@/components/ui/Section";

export function MissionTaglineSection() {
  const t = useTranslations("mission");
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
        <motion.p
          className="font-heading text-xl font-bold text-white sm:text-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {t("tagline")}
        </motion.p>
        <motion.div
          className="mt-8 flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <Button href="/services" variant="inverted">
              {t("cta1")}
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.6,
              delay: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <Button href="/contact" variant="secondary-inverted">
              {t("cta2")}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
