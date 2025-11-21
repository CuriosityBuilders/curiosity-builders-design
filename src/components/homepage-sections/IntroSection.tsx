"use client";

import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { ShinyButton } from "@/components/ui/shiny-button";
import { motion } from "framer-motion";
import Link from "next/link";

export function IntroSection() {
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
          L'immobilier a changé d'ère
        </motion.h2>
        <motion.p
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
          Plutôt que de ne parler que de mètres carrés, nous aidons nos clients
          à concevoir, développer, financer et gérer des lieux vivants —
          désirables, durables et performants.
          <br />
          <br />
          Car pour rester pertinent, il faut reconnecter stratégie immobilière,
          territoire et impact.
        </motion.p>
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
            <Link href="/services">
              <ShinyButton className="bg-white border-white/20 text-black hover:bg-white/90 px-6 py-3">
                Découvrir nos offres
              </ShinyButton>
            </Link>
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
              S'abonner à la newsletter
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
