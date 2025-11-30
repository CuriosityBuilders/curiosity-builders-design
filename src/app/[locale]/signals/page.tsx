"use client";

import DotCard from "@/components/mvpblocks/dot-card";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { useTranslations } from "next-intl";

export default function SignalsPage() {
  const t = useTranslations("signals");

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <Section spacing="lg" className="bg-black">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="font-heading text-5xl font-bold leading-tight text-white sm:text-6xl">
            {t("hero.title")}
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-white sm:text-2xl">
            {t("hero.subtitle")}
          </p>
          <p className="mt-4 text-xl leading-relaxed text-white">
            {t("hero.body")}
          </p>
        </div>
      </Section>

      {/* 3 Cards */}
      <Section spacing="md">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <DotCard>
              <div className="mb-6 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-2xl font-heading font-bold text-white">
                  1
                </div>
              </div>
              <h3 className="font-heading text-xl font-bold text-black">
                {t("cards.card1.title")}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-black">
                {t("cards.card1.description")}
              </p>
              <p className="mt-4 text-sm italic text-black">
                {t("cards.card1.tagline")}
              </p>
            </DotCard>

            <DotCard>
              <div className="mb-6 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-2xl font-heading font-bold text-white">
                  2
                </div>
              </div>
              <h3 className="font-heading text-xl font-bold text-black">
                {t("cards.card2.title")}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-black">
                {t("cards.card2.description")}
              </p>
              <p className="mt-4 text-sm italic text-black">
                {t("cards.card2.tagline")}
              </p>
            </DotCard>

            <DotCard>
              <div className="mb-6 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-2xl font-heading font-bold text-white">
                  3
                </div>
              </div>
              <h3 className="font-heading text-xl font-bold text-black">
                {t("cards.card3.title")}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-black">
                {t("cards.card3.description")}
              </p>
              <p className="mt-4 text-sm italic text-black">
                {t("cards.card3.tagline")}
              </p>
            </DotCard>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contact">{t("cards.button1")}</Button>
            <Button href="/contact" variant="secondary">
              {t("cards.button2")}
            </Button>
          </div>
        </div>
      </Section>

      {/* Studies Gallery */}
      <Section spacing="md" className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-heading text-3xl font-bold text-black sm:text-4xl">
            {t("studies.title")}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-black">
            {t("studies.body1")}
            <br />
            <br />
            {t("studies.body2")}
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {/* Placeholder pour les études - à remplacer par un CMS */}
            <Card>
              <h3 className="font-heading text-lg font-semibold text-black">
                {t("studies.exampleTitle")} 1
              </h3>
              <p className="mt-2 text-sm text-black">
                {t("studies.exampleTheme")}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-black">
                {t("studies.exampleSummary")}
              </p>
              <div className="mt-6">
                <Button variant="secondary" className="text-sm">
                  {t("studies.downloadButton")}
                </Button>
              </div>
            </Card>
            <Card>
              <h3 className="font-heading text-lg font-semibold text-black">
                {t("studies.exampleTitle")} 2
              </h3>
              <p className="mt-2 text-sm text-black">
                {t("studies.exampleTheme")}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-black">
                {t("studies.exampleSummary")}
              </p>
              <div className="mt-6">
                <Button variant="secondary" className="text-sm">
                  {t("studies.downloadButton")}
                </Button>
              </div>
            </Card>
            <Card>
              <h3 className="font-heading text-lg font-semibold text-black">
                {t("studies.exampleTitle")} 3
              </h3>
              <p className="mt-2 text-sm text-black">
                {t("studies.exampleTheme")}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-black">
                {t("studies.exampleSummary")}
              </p>
              <div className="mt-6">
                <Button variant="secondary" className="text-sm">
                  {t("studies.downloadButton")}
                </Button>
              </div>
            </Card>
          </div>
          <div className="mt-8 text-center">
            <Button href="/contact">{t("studies.cta")}</Button>
          </div>
        </div>
      </Section>

      {/* Book */}
      <Section spacing="md">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-black sm:text-4xl">
            {t("book.title")}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-black">
            {t("book.description")}
          </p>
          <blockquote className="mt-6 border-l-4 border-black pl-4 italic text-black">
            {t("book.quote")}
          </blockquote>
          <div className="mt-8">
            <Button href="/contact">{t("book.cta")}</Button>
          </div>
        </div>
      </Section>

      {/* Page Footer CTA */}
      <Section spacing="md" className="bg-black">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            {t("finalCta.titleEmphasis") ? (
              <>
                {t("finalCta.title")}{" "}
                <em>{t("finalCta.titleEmphasis")}</em>
              </>
            ) : (
              t("finalCta.title")
            )}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white">
            {t("finalCta.body")}
          </p>
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
