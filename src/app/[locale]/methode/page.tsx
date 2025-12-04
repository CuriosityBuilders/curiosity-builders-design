import DotCard from "@/components/mvpblocks/dot-card";
import { MethodeFinalCta } from "@/components/pages/MethodeFinalCta";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { getMethodePage } from "@/sanity/lib/queries";
import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";

export default async function MethodePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const data = await getMethodePage(locale);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <Section spacing="lg" className="bg-black">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="font-heading text-5xl font-bold leading-tight text-white sm:text-6xl">
            {data?.hero?.title ?? ""}
          </h1>
          <div className="mt-6 text-lg leading-relaxed text-white">
            {data?.hero?.body1 && <PortableText value={data.hero.body1} />}
            {data?.hero?.body2 && (
              <>
                <br />
                <PortableText value={data.hero.body2} />
              </>
            )}
          </div>
        </div>
      </Section>

      {/* Curiosity Loop */}
      {data?.curiosityLoop && (
        <Section spacing="md">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="font-heading text-3xl font-bold text-black sm:text-4xl">
              {data.curiosityLoop.title}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-black">
              {data.curiosityLoop.subtitle}
            </p>

            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {data.curiosityLoop.steps?.map(
                (step: {
                  _key: string;
                  number: number;
                  title: string;
                  description: PortableTextBlock[];
                  tools?: string;
                }) => (
                  <DotCard key={step._key}>
                    <div className="mb-6 flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-2xl font-heading font-bold text-white">
                        {step.number}
                      </div>
                    </div>
                    <h3 className="font-heading text-xl font-bold text-black">
                      {step.title}
                    </h3>
                    <div className="mt-4 text-sm leading-relaxed text-black">
                      {step.description && (
                        <PortableText value={step.description} />
                      )}
                    </div>
                    {step.tools && (
                      <p className="mt-4 text-xs italic text-black">
                        {step.tools}
                      </p>
                    )}
                  </DotCard>
                )
              )}
            </div>
          </div>
        </Section>
      )}

      {/* Impact-first */}
      {data?.impact && (
        <Section spacing="md" className="bg-gray-100">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="font-heading text-3xl font-bold text-black sm:text-4xl">
              {data.impact.title}
            </h2>
            <div className="mt-6 text-lg leading-relaxed text-black">
              {data.impact.body && <PortableText value={data.impact.body} />}
            </div>
          </div>
        </Section>
      )}

      {/* Singularité */}
      {data?.singularity && (
        <Section spacing="md">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="font-heading text-3xl font-bold text-black sm:text-4xl">
              {data.singularity.title}
            </h2>
            <div className="mt-6 text-lg leading-relaxed text-black">
              {data.singularity.body1 && (
                <PortableText value={data.singularity.body1} />
              )}
              {data.singularity.body2 && (
                <>
                  <br />
                  <PortableText value={data.singularity.body2} />
                </>
              )}
              {data.singularity.body3 && (
                <>
                  <br />
                  <PortableText value={data.singularity.body3} />
                </>
              )}
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {data.singularity.cards?.map(
                (card: {
                  _key: string;
                  title: string;
                  description: string;
                }) => (
                  <Card key={card._key}>
                    <h3 className="font-heading text-lg font-semibold text-black">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-black">
                      {card.description}
                    </p>
                  </Card>
                )
              )}
            </div>
          </div>
        </Section>
      )}

      {/* Citations */}
      {data?.proofs && (
        <Section spacing="md" className="bg-white">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="font-heading text-2xl font-bold text-black">
              {data.proofs.title}
            </h2>
            <div className="mt-8 space-y-6">
              {data.proofs.quotes?.map(
                (quote: { _key: string; text: string; author?: string }) => (
                  <blockquote
                    key={quote._key}
                    className="border-l-4 border-black pl-4"
                  >
                    <p className="text-lg italic text-black">{quote.text}</p>
                    {quote.author && (
                      <p className="mt-2 text-sm text-black">{quote.author}</p>
                    )}
                  </blockquote>
                )
              )}
            </div>
            {data.proofs.button && (
              <div className="mt-8">
                <Button href="/contact">{data.proofs.button}</Button>
              </div>
            )}
          </div>
        </Section>
      )}

      {/* Page Footer CTA */}
      <MethodeFinalCta data={data?.finalCta} />
    </div>
  );
}
