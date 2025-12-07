import DotCard from "@/components/mvpblocks/dot-card";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { urlFor } from "@/sanity/lib/image";
import { getSignalsPage } from "@/sanity/lib/queries";
import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import Image from "next/image";

export default async function SignalsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const data = await getSignalsPage(locale);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      {data?.hero && (
        <Section spacing="lg" className="bg-black">
          <div className="mx-auto max-w-4xl px-4">
            <h1 className="font-heading text-5xl font-bold leading-tight text-white sm:text-6xl">
              {data.hero.title}
            </h1>
            {data.hero.subtitle && (
              <p className="mt-6 text-xl leading-relaxed text-white sm:text-2xl">
                {data.hero.subtitle}
              </p>
            )}
            <div className="mt-4 text-xl leading-relaxed text-white">
              {data.hero.body && <PortableText value={data.hero.body} />}
            </div>
          </div>
        </Section>
      )}

      {/* 3 Cards */}
      {data?.cards && (
        <Section spacing="md">
          <div className="mx-auto max-w-7xl px-4">
            {data.cards.items && data.cards.items.length > 0 && (
              <div className="grid gap-8 md:grid-cols-3">
                {data.cards.items.map(
                  (
                    card: {
                      _key: string;
                      title: string;
                      description: PortableTextBlock[];
                      tagline?: string;
                    },
                    index: number
                  ) => (
                    <DotCard key={card._key}>
                      <div className="mb-6 flex items-start justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-2xl font-heading font-bold text-white">
                          {index + 1}
                        </div>
                      </div>
                      <h3 className="font-heading text-xl font-bold text-black">
                        {card.title}
                      </h3>
                      <div className="mt-4 text-sm leading-relaxed text-black">
                        {card.description && (
                          <PortableText value={card.description} />
                        )}
                      </div>
                      {card.tagline && (
                        <p className="mt-4 text-sm italic text-black">
                          {card.tagline}
                        </p>
                      )}
                    </DotCard>
                  )
                )}
              </div>
            )}
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {data.cards.button1 && (
                <Button href="/contact">{data.cards.button1}</Button>
              )}
              {data.cards.button2 && (
                <Button href="/contact" variant="secondary">
                  {data.cards.button2}
                </Button>
              )}
            </div>
          </div>
        </Section>
      )}

      {/* Studies Gallery */}
      {data?.studies && (
        <Section spacing="md" className="bg-gray-100">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="font-heading text-3xl font-bold text-black sm:text-4xl">
              {data.studies.title}
            </h2>
            <div className="mt-6 text-lg leading-relaxed text-black">
              {data.studies.body1 && (
                <PortableText value={data.studies.body1} />
              )}
              {data.studies.body2 && (
                <>
                  <br />
                  <PortableText value={data.studies.body2} />
                </>
              )}
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {data.studies.pdfs?.pdfs && data.studies.pdfs.pdfs.length > 0
                ? data.studies.pdfs.pdfs.map(
                    (pdf: {
                      _key: string;
                      title: { fr: string; en: string };
                      coverImage: { asset: { url: string }; alt?: string };
                      file: {
                        asset: { url: string; originalFilename?: string };
                      };
                      theme?: string;
                      summary?: string;
                    }) => {
                      const title =
                        locale === "fr" ? pdf.title.fr : pdf.title.en;
                      const coverImageUrl = pdf.coverImage?.asset?.url
                        ? urlFor(pdf.coverImage)
                            .width(800)
                            .height(600)
                            .fit("max")
                            .quality(85)
                            .auto("format")
                            .url()
                        : null;
                      const pdfUrl = pdf.file?.asset?.url;

                      return (
                        <Card key={pdf._key}>
                          {coverImageUrl && (
                            <div className="relative mb-4 aspect-[4/3] w-full overflow-hidden rounded-lg">
                              <Image
                                src={coverImageUrl}
                                alt={pdf.coverImage?.alt || title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                quality={85}
                              />
                            </div>
                          )}
                          <h3 className="font-heading text-lg font-semibold text-black">
                            {title}
                          </h3>
                          {pdf.theme && (
                            <p className="mt-2 text-sm text-black">
                              {pdf.theme}
                            </p>
                          )}
                          {pdf.summary && (
                            <p className="mt-4 text-sm leading-relaxed text-black">
                              {pdf.summary}
                            </p>
                          )}
                          {pdfUrl && data.studies.downloadButton && (
                            <div className="mt-6">
                              <a
                                href={pdfUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                download
                                className="inline-flex items-center justify-center rounded-full border border-black/90 bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:border-black hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                              >
                                {data.studies.downloadButton}
                              </a>
                            </div>
                          )}
                        </Card>
                      );
                    }
                  )
                : // Fallback to placeholder if no PDFs are available
                  [1, 2, 3].map((num) => (
                    <Card key={num}>
                      <h3 className="font-heading text-lg font-semibold text-black">
                        {data.studies.exampleTitle} {num}
                      </h3>
                      <p className="mt-2 text-sm text-black">
                        {data.studies.exampleTheme}
                      </p>
                      <p className="mt-4 text-sm leading-relaxed text-black">
                        {data.studies.exampleSummary}
                      </p>
                      {data.studies.downloadButton && (
                        <div className="mt-6">
                          <Button variant="secondary" className="text-sm">
                            {data.studies.downloadButton}
                          </Button>
                        </div>
                      )}
                    </Card>
                  ))}
            </div>
            {data.studies.cta && (
              <div className="mt-8 text-center">
                <Button href="/contact">{data.studies.cta}</Button>
              </div>
            )}
          </div>
        </Section>
      )}

      {/* Book */}
      {data?.book && (
        <Section spacing="md">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="font-heading text-3xl font-bold text-black sm:text-4xl">
              {data.book.title}
            </h2>
            <div className="mt-6 text-lg leading-relaxed text-black">
              {data.book.description && (
                <PortableText value={data.book.description} />
              )}
            </div>
            {data.book.quote && (
              <blockquote className="mt-6 border-l-4 border-black pl-4 italic text-black">
                {data.book.quote}
              </blockquote>
            )}
            {data.book.cta && (
              <div className="mt-8">
                <Button href="/contact">{data.book.cta}</Button>
              </div>
            )}
          </div>
        </Section>
      )}

      {/* Page Footer CTA */}
      {data?.finalCta && (
        <Section spacing="md" className="bg-black">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
              {data.finalCta.titleEmphasis ? (
                <>
                  {data.finalCta.title} <em>{data.finalCta.titleEmphasis}</em>
                </>
              ) : (
                data.finalCta.title
              )}
            </h2>
            <div className="mt-6 text-lg leading-relaxed text-white">
              {data.finalCta.body && (
                <PortableText value={data.finalCta.body} />
              )}
            </div>
            {data.finalCta.button && (
              <div className="mt-8">
                <Button href="/contact" variant="inverted">
                  {data.finalCta.button}
                </Button>
              </div>
            )}
          </div>
        </Section>
      )}
    </div>
  );
}
