import { generatePageMetadata } from "@/app/metadata";
import { ContactFormWrapper } from "@/components/pages/ContactFormWrapper";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { getContactPage } from "@/sanity/lib/queries";
import { PortableText } from "@portabletext/react";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const contactData = await getContactPage(locale);
  return generatePageMetadata(locale, contactData);
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const data = await getContactPage(locale);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      {data?.hero && (
        <Section spacing="lg" className="bg-black">
          <div className="mx-auto max-w-4xl px-4">
            <h1 className="font-heading text-5xl font-bold leading-tight text-white sm:text-6xl">
              {data.hero.title}
            </h1>
            <div className="mt-6 text-lg leading-relaxed text-white">
              {data.hero.body && <PortableText value={data.hero.body} />}
            </div>
          </div>
        </Section>
      )}

      {/* Section Contact */}
      {data?.contactSection && (
        <Section spacing="md" className="bg-white">
          <div className="mx-auto max-w-4xl px-4">
            <div className="space-y-16">
              {/* Travaillons ensemble */}
              {data.contactSection.workWithUs && (
                <div>
                  <h2 className="font-heading text-3xl font-bold text-black sm:text-4xl">
                    {data.contactSection.workWithUs.title}
                  </h2>
                  <p className="mt-6 text-lg leading-relaxed text-black">
                    {data.contactSection.workWithUs.body}
                  </p>
                  {data.contactSection.workWithUs.email && (
                    <p className="mt-4">
                      <a
                        href={`mailto:${data.contactSection.workWithUs.email}`}
                        className="text-lg text-black underline transition-colors hover:text-gray-700"
                      >
                        {data.contactSection.workWithUs.email}
                      </a>
                    </p>
                  )}
                </div>
              )}

              {/* Presse & interventions */}
              {data.contactSection.press && (
                <div>
                  <h2 className="font-heading text-3xl font-bold text-black sm:text-4xl">
                    {data.contactSection.press.title}
                  </h2>
                  <p className="mt-6 text-lg leading-relaxed text-black">
                    {data.contactSection.press.body}
                  </p>
                  {data.contactSection.press.email && (
                    <p className="mt-4">
                      <a
                        href={`mailto:${data.contactSection.press.email}`}
                        className="text-lg text-black underline transition-colors hover:text-gray-700"
                      >
                        {data.contactSection.press.email}
                      </a>
                    </p>
                  )}
                </div>
              )}

              {/* S'abonner à la newsletter */}
              {data.contactSection.newsletter && (
                <div>
                  <h2 className="font-heading text-3xl font-bold text-black sm:text-4xl">
                    {data.contactSection.newsletter.title}
                  </h2>
                  <p className="mt-6 text-lg leading-relaxed text-black">
                    {data.contactSection.newsletter.body}
                  </p>
                  {data.contactSection.newsletter.link && (
                    <p className="mt-4">
                      <a
                        href="https://substack.com/@curiositybuilders"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg text-black underline transition-colors hover:text-gray-700"
                      >
                        {data.contactSection.newsletter.link}
                      </a>
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </Section>
      )}

      {/* Section Vous ne savez pas par où commencer ? + Formulaire Brochure */}
      <ContactFormWrapper unsureData={data?.unsure} formData={data?.form} />

      {/* Final CTA */}
      {data?.finalCta && (
        <Section spacing="md" className="bg-black">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
              {data.finalCta.title}
            </h2>
            <div className="mt-6 text-lg leading-relaxed text-white">
              {data.finalCta.body1 && (
                <PortableText value={data.finalCta.body1} />
              )}
            </div>
            {data.finalCta.body2 && (
              <div className="mt-4 text-lg leading-relaxed text-white">
                <PortableText value={data.finalCta.body2} />
              </div>
            )}
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              {data.finalCta.button1 && (
                <Button
                  href="mailto:contact@curiosity.builders"
                  variant="inverted"
                >
                  {data.finalCta.button1}
                </Button>
              )}
              {data.finalCta.button2 && (
                <Button href="/methode" variant="secondary-inverted">
                  {data.finalCta.button2}
                </Button>
              )}
            </div>
          </div>
        </Section>
      )}
    </div>
  );
}
