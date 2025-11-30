"use client";

import DotCard from "@/components/mvpblocks/dot-card";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SparklesCore } from "@/components/ui/sparkles";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function MethodePage() {
  const t = useTranslations("methode");

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <Section spacing="lg" className="bg-black">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="font-heading text-5xl font-bold leading-tight text-white sm:text-6xl">
            {t("hero.title")}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white">
            {t("hero.body1")}
            <br />
            <br />
            {t("hero.body2")}
          </p>
        </div>
      </Section>

      {/* Curiosity Loop */}
      <Section spacing="md">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-heading text-3xl font-bold text-black sm:text-4xl">
            {t("curiosityLoop.title")}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-black">
            {t("curiosityLoop.subtitle")}
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <DotCard>
              <div className="mb-6 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-2xl font-heading font-bold text-white">
                  1
                </div>
              </div>
              <h3 className="font-heading text-xl font-bold text-black">
                {t("curiosityLoop.step1.title")}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-black">
                {t("curiosityLoop.step1.description")}
              </p>
              <p className="mt-4 text-xs italic text-black">
                {t("curiosityLoop.step1.tools")}
              </p>
            </DotCard>

            <DotCard>
              <div className="mb-6 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-2xl font-heading font-bold text-white">
                  2
                </div>
              </div>
              <h3 className="font-heading text-xl font-bold text-black">
                {t("curiosityLoop.step2.title")}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-black">
                {t("curiosityLoop.step2.description")}
              </p>
              <p className="mt-4 text-xs italic text-black">
                {t("curiosityLoop.step2.tools")}
              </p>
            </DotCard>

            <DotCard>
              <div className="mb-6 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-2xl font-heading font-bold text-white">
                  3
                </div>
              </div>
              <h3 className="font-heading text-xl font-bold text-black">
                {t("curiosityLoop.step3.title")}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-black">
                {t("curiosityLoop.step3.description")}
              </p>
              <p className="mt-4 text-xs italic text-black">
                {t("curiosityLoop.step3.tools")}
              </p>
            </DotCard>

            <DotCard>
              <div className="mb-6 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-2xl font-heading font-bold text-white">
                  4
                </div>
              </div>
              <h3 className="font-heading text-xl font-bold text-black">
                {t("curiosityLoop.step4.title")}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-black">
                {t("curiosityLoop.step4.description")}
              </p>
              <p className="mt-4 text-xs italic text-black">
                {t("curiosityLoop.step4.tools")}
              </p>
            </DotCard>

            <DotCard>
              <div className="mb-6 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-2xl font-heading font-bold text-white">
                  5
                </div>
              </div>
              <h3 className="font-heading text-xl font-bold text-black">
                {t("curiosityLoop.step5.title")}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-black">
                {t("curiosityLoop.step5.description")}
              </p>
              <p className="mt-4 text-xs italic text-black">
                {t("curiosityLoop.step5.tools")}
              </p>
            </DotCard>
          </div>
        </div>
      </Section>

      {/* Impact-first */}
      <Section spacing="md" className="bg-gray-100">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="font-heading text-3xl font-bold text-black sm:text-4xl">
            {t("impact.title")}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-black">
            {t("impact.body")}
          </p>
        </div>
      </Section>

      {/* Singularité */}
      <Section spacing="md">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-heading text-3xl font-bold text-black sm:text-4xl">
            {t("singularity.title")}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-black">
            {t("singularity.body1")}
            <br />
            <br />
            {t("singularity.body2")}
            <br />
            <br />
            {t("singularity.body3")}
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <h3 className="font-heading text-lg font-semibold text-black">
                {t("singularity.card1.title")}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-black">
                {t("singularity.card1.description")}
              </p>
            </Card>
            <Card>
              <h3 className="font-heading text-lg font-semibold text-black">
                {t("singularity.card2.title")}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-black">
                {t("singularity.card2.description")}
              </p>
            </Card>
            <Card>
              <h3 className="font-heading text-lg font-semibold text-black">
                {t("singularity.card3.title")}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-black">
                {t("singularity.card3.description")}
              </p>
            </Card>
            <Card>
              <h3 className="font-heading text-lg font-semibold text-black">
                {t("singularity.card4.title")}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-black">
                {t("singularity.card4.description")}
              </p>
            </Card>
            <Card>
              <h3 className="font-heading text-lg font-semibold text-black">
                {t("singularity.card5.title")}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-black">
                {t("singularity.card5.description")}
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Citations */}
      <Section spacing="md" className="bg-white">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="font-heading text-2xl font-bold text-black">
            {t("proofs.title")}
          </h2>
          <div className="mt-8 space-y-6">
            <blockquote className="border-l-4 border-black pl-4">
              <p className="text-lg italic text-black">
                {t("proofs.quote1.text")}
              </p>
              {t("proofs.quote1.author") && (
                <p className="mt-2 text-sm text-black">
                  {t("proofs.quote1.author")}
                </p>
              )}
            </blockquote>
            <blockquote className="border-l-4 border-black pl-4">
              <p className="text-lg italic text-black">
                {t("proofs.quote2.text")}
              </p>
              {t("proofs.quote2.author") && (
                <p className="mt-2 text-sm text-black">
                  {t("proofs.quote2.author")}
                </p>
              )}
            </blockquote>
            <blockquote className="border-l-4 border-black pl-4">
              <p className="text-lg italic text-black">
                {t("proofs.quote3.text")}
              </p>
              {t("proofs.quote3.author") && (
                <p className="mt-2 text-sm text-black">
                  {t("proofs.quote3.author")}
                </p>
              )}
            </blockquote>
          </div>
          <div className="mt-8">
            <Button href="/contact">{t("proofs.button")}</Button>
          </div>
        </div>
      </Section>

      {/* Page Footer CTA */}
      <Section spacing="md" className="bg-black">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            {t("finalCta.title")}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white">
            {t("finalCta.body")}
          </p>
          <div className="relative mt-8 overflow-hidden rounded-lg">
            <div className="relative z-10 flex flex-wrap items-center justify-center gap-6 py-8 md:gap-8">
              <motion.div
                className="flex h-10 w-20 shrink-0 items-center justify-center opacity-90 grayscale-50 transition-all hover:opacity-100 hover:grayscale-0 md:h-14 md:w-28"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Image
                  src="/logos/logo partenaires & clients/LOGO_AKENECOSYSTEMES_COULEUR_RVB.png"
                  alt="Aken Écosystèmes"
                  width={112}
                  height={56}
                  className="h-full w-full object-contain brightness-0 invert opacity-70"
                />
              </motion.div>
              <motion.div
                className="flex h-10 w-20 shrink-0 items-center justify-center opacity-90 grayscale-50 transition-all hover:opacity-100 hover:grayscale-0 md:h-14 md:w-28"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Image
                  src="/logos/logo partenaires & clients/Nhood.png"
                  alt="Nhood"
                  width={112}
                  height={56}
                  className="h-full w-full object-contain brightness-0 invert opacity-70"
                />
              </motion.div>
              <motion.div
                className="flex h-10 w-20 shrink-0 items-center justify-center opacity-90 grayscale-50 transition-all hover:opacity-100 hover:grayscale-0 md:h-14 md:w-28"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Image
                  src="/logos/logo partenaires & clients/keys reim.svg"
                  alt="Keys REIM"
                  width={112}
                  height={56}
                  className="h-full w-full object-contain brightness-0 invert opacity-70"
                />
              </motion.div>
              <motion.div
                className="flex h-10 w-20 shrink-0 items-center justify-center opacity-90 grayscale-50 transition-all hover:opacity-100 hover:grayscale-0 md:h-14 md:w-28"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Image
                  src="/logos/logo partenaires & clients/Archipel.svg"
                  alt="Archipel & Co"
                  width={112}
                  height={56}
                  className="h-full w-full object-contain brightness-0 invert opacity-70"
                />
              </motion.div>
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
          <div className="mt-8">
            <Button href="/contact" variant="inverted">
              {t("finalCta.button")}
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
