import { generatePageMetadata } from "@/app/metadata";
import DotCard from "@/components/mvpblocks/dot-card";
import { BookExtractButton } from "@/components/pages/BookExtractButton";
import { BookImage3D } from "@/components/pages/BookImage3D";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { urlFor } from "@/sanity/lib/image";
import { getContactPage, getSignalsPage } from "@/sanity/lib/queries";
import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import type { Metadata } from "next";
import Image from "next/image";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const signalsData = await getSignalsPage(locale);
  return generatePageMetadata(locale, {
    ...signalsData,
    currentPath: "/signals",
  });
}

export default async function SignalsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const data = await getSignalsPage(locale);
  const contactData = await getContactPage(locale);

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
              <p className="mt-6 text-lg leading-relaxed text-white">
                {data.hero.subtitle}
              </p>
            )}
            <div className="mt-4 text-lg leading-relaxed text-white">
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
            {data.cards.button1 && (
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button href="/contact">{data.cards.button1}</Button>
              </div>
            )}
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
                      theme?: { fr?: string; en?: string };
                      summary?: { fr?: string; en?: string };
                    }) => {
                      const title =
                        locale === "fr" ? pdf.title.fr : pdf.title.en;
                      const theme = pdf.theme
                        ? locale === "fr"
                          ? pdf.theme.fr
                          : pdf.theme.en
                        : undefined;
                      const summary = pdf.summary
                        ? locale === "fr"
                          ? pdf.summary.fr
                          : pdf.summary.en
                        : undefined;
                      const coverImageUrl = pdf.coverImage?.asset?.url
                        ? urlFor(pdf.coverImage)
                            .width(600)
                            .height(900)
                            .fit("crop")
                            .crop("center")
                            .quality(85)
                            .auto("format")
                            .url()
                        : null;
                      const pdfUrl = pdf.file?.asset?.url;

                      return (
                        <div
                          key={pdf._key}
                          className="group relative w-full overflow-hidden rounded-2xl bg-gray-200 shadow-sm transition-all hover:shadow-xl"
                          style={{ paddingBottom: "150%" }}
                        >
                          {coverImageUrl ? (
                            <>
                              {/* Image de fond qui remplit toute la card */}
                              <Image
                                src={coverImageUrl}
                                alt={pdf.coverImage?.alt || title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                quality={85}
                                priority={false}
                              />

                              {/* Gradient overlay pour la lisibilité */}
                              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent" />

                              {/* Badge thème en haut à droite */}
                              {theme && (
                                <div className="absolute right-4 top-4 z-10 rounded-full bg-white px-3 py-1.5 shadow-lg">
                                  <span className="text-xs font-bold uppercase tracking-wider text-black">
                                    {theme}
                                  </span>
                                </div>
                              )}

                              {/* Contenu en bas avec backdrop blur */}
                              <div className="absolute inset-x-0 bottom-0 z-10 backdrop-blur-xl bg-black/20 p-6">
                                <div className="h-[180px] flex flex-col">
                                  <h3 className="font-heading text-2xl font-black text-white drop-shadow-lg line-clamp-2">
                                    {title}
                                  </h3>
                                  {summary && (
                                    <p className="mt-2 text-sm leading-relaxed text-white drop-shadow-md line-clamp-2">
                                      {summary}
                                    </p>
                                  )}
                                  <div className="grow"></div>
                                  {pdfUrl && data.studies.downloadButton && (
                                    <div className="mt-4">
                                      <a
                                        href={pdfUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        download
                                        className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black shadow-lg transition-all hover:bg-gray-100 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                                      >
                                        {data.studies.downloadButton}
                                      </a>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </>
                          ) : (
                            // Fallback si pas d'image
                            <div className="flex h-full flex-col justify-between p-6">
                              {theme && (
                                <div className="self-end rounded-full bg-black px-3 py-1">
                                  <span className="text-xs font-medium uppercase tracking-wide text-white">
                                    {theme}
                                  </span>
                                </div>
                              )}
                              <div>
                                <h3 className="font-heading text-xl font-black text-black">
                                  {title}
                                </h3>
                                {summary && (
                                  <p className="mt-4 text-sm leading-relaxed text-black">
                                    {summary}
                                  </p>
                                )}
                                {pdfUrl && data.studies.downloadButton && (
                                  <div className="mt-6">
                                    <a
                                      href={pdfUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      download
                                      className="flex w-full items-center justify-center rounded-full border border-black/90 bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:border-black hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                                    >
                                      {data.studies.downloadButton}
                                    </a>
                                  </div>
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    }
                  )
                : // Fallback to placeholder if no PDFs are available
                  [1, 2, 3].map((num) => (
                    <div
                      key={num}
                      className="relative w-full overflow-hidden rounded-2xl bg-gray-100 p-6 shadow-sm transition-all hover:shadow-xl flex flex-col justify-end"
                      style={{ paddingBottom: "150%" }}
                    >
                      <h3 className="font-heading text-lg font-bold text-black">
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
                    </div>
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
        <Section spacing="md" className="bg-white">
          <div className="mx-auto max-w-5xl px-4">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-8">
              {/* Contenu à gauche */}
              <div className="flex flex-col justify-center">
                <h2 className="font-heading text-3xl font-bold text-black sm:text-4xl">
                  {data.book.title}
                </h2>
                <div className="mt-6 text-lg leading-relaxed text-black">
                  {data.book.description && (
                    <PortableText value={data.book.description} />
                  )}
                </div>
                {data.book.quote && (
                  <blockquote className="mt-8 border-l-8 border-black bg-gray-100 pl-6 py-6 px-2 italic text-black">
                    <p className="font-heading text-xl font-bold leading-relaxed">
                      "{data.book.quote}"
                    </p>
                  </blockquote>
                )}
                {(data.book.cta || data.book.extractPdf) && (
                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    {data.book.cta && (
                      <Button href="/contact">{data.book.cta}</Button>
                    )}
                    {data.book.extractPdf?.asset?.url && (
                      <BookExtractButton
                        pdfUrl={data.book.extractPdf.asset.url}
                        pdfFilename={
                          data.book.extractPdf.asset.originalFilename ||
                          "extrait-livre.pdf"
                        }
                        buttonText={
                          data.book.extractButtonText || "Télécharger l'extrait"
                        }
                        formData={contactData?.form}
                      />
                    )}
                  </div>
                )}
              </div>

              {/* Image à droite */}
              {data.book.image?.asset?.url && (
                <BookImage3D image={data.book.image} title={data.book.title} />
              )}
            </div>
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
                <Button href="/methode" variant="secondary-inverted">
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
