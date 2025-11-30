"use client";

import CircularText from "@/components/mvpblocks/circular-text";
import DotCard from "@/components/mvpblocks/dot-card";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { useTranslations } from "next-intl";

export default function ServicesPage() {
  const t = useTranslations("services");

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <Section spacing="lg" className="bg-black">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="font-heading text-5xl font-bold leading-tight text-white sm:text-6xl">
            {t("hero.title")}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white">
            {t("hero.body")}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="#diagnostics" variant="inverted">
              {t("hero.button1")}
            </Button>
            <Button href="#r-d-studio" variant="inverted">
              {t("hero.button2")}
            </Button>
            <Button href="#venture-dev" variant="inverted">
              {t("hero.button3")}
            </Button>
          </div>
        </div>
      </Section>

      {/* Overview */}
      <Section spacing="md" className="relative bg-gray-50">
        <div className="relative mx-auto max-w-7xl px-4">
          <h2 className="font-heading text-3xl font-bold text-black sm:text-4xl">
            {t("overview.title")}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-black">
            {t("overview.body1")}
          </p>
          <p className="mt-4 text-lg leading-relaxed text-black">
            {t("overview.body2")}
          </p>
          <div className="mt-8">
            <Button href="/methode">{t("overview.cta")}</Button>
          </div>
        </div>
      </Section>

      {/* Diagnostics et tests */}
      <Section id="diagnostics" spacing="md" className="relative bg-white">
        {/* <GridBackground size={350} opacity={0.1} /> */}
        <div className="relative mx-auto max-w-7xl px-4">
          <h2 className="font-heading text-3xl font-bold text-black sm:text-4xl">
            {t("diagnostics.title")}
          </h2>
          <p className="mt-2 font-heading text-xl font-semibold text-black">
            {t("diagnostics.subtitle")}
          </p>
          <p className="mt-6 text-lg leading-relaxed text-black">
            {t("diagnostics.body1")}
          </p>
          <p className="mt-4 text-lg leading-relaxed text-black">
            {t("diagnostics.body2")}
          </p>
          <ul className="mt-4 space-y-3 text-lg leading-relaxed text-black">
            <li className="flex items-start gap-4">
              <span className="mt-0.5 shrink-0 font-black text-xl">→</span>
              <span>{t("diagnostics.bullet1")}</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-0.5 shrink-0 font-black text-xl">→</span>
              <span>{t("diagnostics.bullet2")}</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-0.5 shrink-0 font-black text-xl">→</span>
              <span>{t("diagnostics.bullet3")}</span>
            </li>
          </ul>

          <div className="mt-12 bg-gray-50 -mx-4 px-4 py-8">
            <h3 className="font-heading text-2xl font-bold text-black sm:text-3xl">
              {t("diagnostics.deliverablesTitle")}
            </h3>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <DotCard>
                <h4 className="font-heading text-lg font-bold text-black">
                  {t("diagnostics.card1.title")}
                </h4>
                <p className="mt-4 text-sm leading-relaxed text-black">
                  {t("diagnostics.card1.description")}
                </p>
              </DotCard>
              <DotCard>
                <h4 className="font-heading text-lg font-bold text-black">
                  {t("diagnostics.card2.title")}
                </h4>
                <p className="mt-4 text-sm leading-relaxed text-black">
                  {t("diagnostics.card2.description")}
                </p>
              </DotCard>
              <DotCard>
                <h4 className="font-heading text-lg font-bold text-black">
                  {t("diagnostics.card3.title")}
                </h4>
                <p className="mt-4 text-sm leading-relaxed text-black">
                  {t("diagnostics.card3.description")}
                </p>
              </DotCard>
              <DotCard>
                <h4 className="font-heading text-lg font-bold text-black">
                  {t("diagnostics.card4.title")}
                </h4>
                <p className="mt-4 text-sm leading-relaxed text-black">
                  {t("diagnostics.card4.description")}
                </p>
              </DotCard>
            </div>
          </div>
        </div>
      </Section>

      {/* R&D Studio */}
      <Section id="r-d-studio" spacing="md" className="relative bg-white">
        {/* <GridBackground size={300} opacity={0.1} /> */}
        <div className="relative mx-auto max-w-7xl px-4">
          <h2 className="font-heading text-3xl font-bold text-black sm:text-4xl">
            {t("rndStudio.title")}
          </h2>
          <p className="mt-2 font-heading text-xl font-semibold text-black">
            {t("rndStudio.subtitle")}
          </p>
          <p className="mt-6 text-lg leading-relaxed text-black">
            {t("rndStudio.body1")}
          </p>
          <p className="mt-4 text-lg leading-relaxed text-black">
            {t("rndStudio.body2")}
          </p>

          <div className="mt-12 bg-gray-50 -mx-4 px-4 py-8">
            <h3 className="font-heading text-2xl font-bold text-black sm:text-3xl">
              {t("rndStudio.deliverablesTitle")}
            </h3>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <DotCard>
                <h4 className="font-heading text-lg font-bold text-black">
                  {t("rndStudio.card1.title")}
                </h4>
                <p className="mt-4 text-sm leading-relaxed text-black">
                  {t("rndStudio.card1.description")}
                </p>
              </DotCard>
              <DotCard>
                <h4 className="font-heading text-lg font-bold text-black">
                  {t("rndStudio.card2.title")}
                </h4>
                <p className="mt-4 text-sm leading-relaxed text-black">
                  {t("rndStudio.card2.description")}
                </p>
              </DotCard>
              <DotCard>
                <h4 className="font-heading text-lg font-bold text-black">
                  {t("rndStudio.card3.title")}
                </h4>
                <p className="mt-4 text-sm leading-relaxed text-black">
                  {t("rndStudio.card3.description")}
                </p>
              </DotCard>
              <DotCard>
                <h4 className="font-heading text-lg font-bold text-black">
                  {t("rndStudio.card4.title")}
                </h4>
                <p className="mt-4 text-sm leading-relaxed text-black">
                  {t("rndStudio.card4.description")}
                </p>
              </DotCard>
            </div>
          </div>
        </div>
      </Section>

      {/* Bannière Le Loop */}
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
            <div className="mt-8 rounded-lg bg-gray-50/10 px-6 py-6 font-bold">
              <blockquote className="text-lg italic leading-relaxed text-white sm:text-xl">
                {t("loop.quote")}
              </blockquote>
              <p className="mt-4 text-sm text-white">{t("loop.author")}</p>
            </div>
            <p className="mt-8 text-base leading-relaxed text-white">
              {t("loop.subtext")}
            </p>
          </div>
        </div>
      </Section>

      {/* Venture Development */}
      <Section id="venture-dev" spacing="md" className="relative bg-white">
        {/* <GridBackground size={300} opacity={0.1} /> */}
        <div className="relative mx-auto max-w-7xl px-4">
          <h2 className="font-heading text-3xl font-bold text-black sm:text-4xl">
            {t("ventureDev.title")}
          </h2>
          <p className="mt-2 font-heading text-xl font-semibold text-black">
            {t("ventureDev.subtitle")}
          </p>
          <p className="mt-6 text-lg leading-relaxed text-black">
            {t("ventureDev.body1")}
          </p>
          <p className="mt-4 text-lg leading-relaxed text-black">
            {t("ventureDev.body2")}
          </p>
          {t("ventureDev.body3") && (
            <p className="mt-4 text-lg leading-relaxed text-black">
              {t("ventureDev.body3")}
            </p>
          )}

          <div className="mt-12 bg-gray-50 -mx-4 px-4 py-8">
            <h3 className="font-heading text-2xl font-bold text-black sm:text-3xl">
              {t("ventureDev.deliverablesTitle")}
            </h3>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <DotCard>
                <h4 className="font-heading text-lg font-bold text-black">
                  {t("ventureDev.card1.title")}
                </h4>
                <p className="mt-4 text-sm leading-relaxed text-black">
                  {t("ventureDev.card1.description")}
                </p>
              </DotCard>
              <DotCard>
                <h4 className="font-heading text-lg font-bold text-black">
                  {t("ventureDev.card2.title")}
                </h4>
                <p className="mt-4 text-sm leading-relaxed text-black">
                  {t("ventureDev.card2.description")}
                </p>
              </DotCard>
              <DotCard>
                <h4 className="font-heading text-lg font-bold text-black">
                  {t("ventureDev.card3.title")}
                </h4>
                <p className="mt-4 text-sm leading-relaxed text-black">
                  {t("ventureDev.card3.description")}
                </p>
              </DotCard>
            </div>
          </div>
        </div>
      </Section>

      {/* Section Impact */}
      <Section spacing="md" className="relative bg-gray-50">
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-black sm:text-4xl">
            {t("impact.title")}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-black">
            {t("impact.body1")}
          </p>
          <p className="mt-4 text-lg leading-relaxed text-black">
            {t("impact.body2")}
          </p>
        </div>
      </Section>

      {/* Final CTA */}
      <Section spacing="md" className="bg-black">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            {t("finalCta.title")}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white">
            {t("finalCta.body1")}
          </p>
          <p className="mt-4 text-lg leading-relaxed text-white">
            {t("finalCta.body2")}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="/contact" variant="inverted">
              {t("finalCta.button1")}
            </Button>
            <Button href="/methode" variant="secondary-inverted">
              {t("finalCta.button2")}
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
