import { generatePageMetadata } from "@/app/metadata";
import { portableTextComponents } from "@/components/ui/PortableTextComponents";
import { Section } from "@/components/ui/Section";
import { getLegalNoticePage } from "@/sanity/lib/queries";
import { PortableText } from "@portabletext/react";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const data = await getLegalNoticePage(locale);

  return generatePageMetadata(locale, {
    seoTitle: data?.seoTitle,
    seoDescription: data?.seoDescription,
    hero: data?.hero,
  });
}

export default async function MentionsLegalesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const data = await getLegalNoticePage(locale);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Fond noir */}
      <Section spacing="lg" className="bg-black">
        <div className="mx-auto max-w-4xl px-4">
          {data?.hero?.title && (
            <h1 className="font-heading text-5xl font-bold leading-tight text-white sm:text-6xl">
              {data.hero.title}
            </h1>
          )}
          {data?.hero?.subtitle && (
            <p className="mt-6 text-lg leading-relaxed text-white">
              {data.hero.subtitle}
            </p>
          )}
        </div>
      </Section>

      {/* Content Section - Fond blanc */}
      {data?.content && (
        <Section spacing="md" className="bg-white">
          <div className="mx-auto max-w-4xl px-4">
            <div className="space-y-12 text-lg leading-relaxed text-black">
              <PortableText
                value={data.content}
                components={portableTextComponents}
              />
            </div>
          </div>
        </Section>
      )}
    </div>
  );
}
