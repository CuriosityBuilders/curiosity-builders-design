import DotCard from "@/components/mvpblocks/dot-card";
import { ServicesLoopSection } from "@/components/pages/ServicesLoopSection";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { getServicesPage } from "@/sanity/lib/queries";
import { PortableText } from "@portabletext/react";

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const data = await getServicesPage(locale);

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
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              {data.hero.button1 && (
                <Button href="#diagnostics" variant="inverted">
                  {data.hero.button1}
                </Button>
              )}
              {data.hero.button2 && (
                <Button href="#r-d-studio" variant="inverted">
                  {data.hero.button2}
                </Button>
              )}
              {data.hero.button3 && (
                <Button href="#venture-dev" variant="inverted">
                  {data.hero.button3}
                </Button>
              )}
            </div>
          </div>
        </Section>
      )}

      {/* Overview */}
      {data?.overview && (
        <Section spacing="md" className="relative bg-gray-50">
          <div className="relative mx-auto max-w-7xl px-4">
            <h2 className="font-heading text-3xl font-bold text-black sm:text-4xl">
              {data.overview.title}
            </h2>
            <div className="mt-6 text-lg leading-relaxed text-black">
              {data.overview.body1 && (
                <PortableText value={data.overview.body1} />
              )}
            </div>
            <div className="mt-4 text-lg leading-relaxed text-black">
              {data.overview.body2 && (
                <PortableText value={data.overview.body2} />
              )}
            </div>
            {data.overview.cta && (
              <div className="mt-8">
                <Button href="/methode">{data.overview.cta}</Button>
              </div>
            )}
          </div>
        </Section>
      )}

      {/* Diagnostics et tests */}
      {data?.diagnostics && (
        <Section id="diagnostics" spacing="md" className="relative bg-white">
          <div className="relative mx-auto max-w-7xl px-4">
            <h2 className="font-heading text-3xl font-bold text-black sm:text-4xl">
              {data.diagnostics.title}
            </h2>
            {data.diagnostics.subtitle && (
              <p className="mt-2 font-heading text-xl font-semibold text-black">
                {data.diagnostics.subtitle}
              </p>
            )}
            <div className="mt-6 text-lg leading-relaxed text-black">
              {data.diagnostics.body1 && (
                <PortableText value={data.diagnostics.body1} />
              )}
            </div>
            <div className="mt-4 text-lg leading-relaxed text-black">
              {data.diagnostics.body2 && (
                <PortableText value={data.diagnostics.body2} />
              )}
            </div>
            {data.diagnostics.bullets &&
              data.diagnostics.bullets.length > 0 && (
                <ul className="mt-4 space-y-3 text-lg leading-relaxed text-black">
                  {data.diagnostics.bullets.map((bullet: string) => (
                    <li key={bullet} className="flex items-start gap-4">
                      <span className="mt-0.5 shrink-0 font-black text-xl">
                        →
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}

            {data.diagnostics.deliverablesTitle && (
              <div className="mt-12 bg-gray-50 -mx-4 px-4 py-8">
                <h3 className="font-heading text-2xl font-bold text-black sm:text-3xl">
                  {data.diagnostics.deliverablesTitle}
                </h3>
                {data.diagnostics.cards &&
                  data.diagnostics.cards.length > 0 && (
                    <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                      {data.diagnostics.cards.map(
                        (card: {
                          _key: string;
                          title: string;
                          description: string;
                        }) => (
                          <DotCard key={card._key}>
                            <h4 className="font-heading text-lg font-bold text-black">
                              {card.title}
                            </h4>
                            <p className="mt-4 text-sm leading-relaxed text-black">
                              {card.description}
                            </p>
                          </DotCard>
                        )
                      )}
                    </div>
                  )}
              </div>
            )}
          </div>
        </Section>
      )}

      {/* R&D Studio */}
      {data?.rndStudio && (
        <Section id="r-d-studio" spacing="md" className="relative bg-white">
          <div className="relative mx-auto max-w-7xl px-4">
            <h2 className="font-heading text-3xl font-bold text-black sm:text-4xl">
              {data.rndStudio.title}
            </h2>
            {data.rndStudio.subtitle && (
              <p className="mt-2 font-heading text-xl font-semibold text-black">
                {data.rndStudio.subtitle}
              </p>
            )}
            <div className="mt-6 text-lg leading-relaxed text-black">
              {data.rndStudio.body1 && (
                <PortableText value={data.rndStudio.body1} />
              )}
            </div>
            <div className="mt-4 text-lg leading-relaxed text-black">
              {data.rndStudio.body2 && (
                <PortableText value={data.rndStudio.body2} />
              )}
            </div>

            {data.rndStudio.deliverablesTitle && (
              <div className="mt-12 bg-gray-50 -mx-4 px-4 py-8">
                <h3 className="font-heading text-2xl font-bold text-black sm:text-3xl">
                  {data.rndStudio.deliverablesTitle}
                </h3>
                {data.rndStudio.cards && data.rndStudio.cards.length > 0 && (
                  <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {data.rndStudio.cards.map(
                      (card: {
                        _key: string;
                        title: string;
                        description: string;
                      }) => (
                        <DotCard key={card._key}>
                          <h4 className="font-heading text-lg font-bold text-black">
                            {card.title}
                          </h4>
                          <p className="mt-4 text-sm leading-relaxed text-black">
                            {card.description}
                          </p>
                        </DotCard>
                      )
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </Section>
      )}

      {/* Bannière Le Loop */}
      <ServicesLoopSection data={data?.loop} />

      {/* Venture Development */}
      {data?.ventureDev && (
        <Section id="venture-dev" spacing="md" className="relative bg-white">
          <div className="relative mx-auto max-w-7xl px-4">
            <h2 className="font-heading text-3xl font-bold text-black sm:text-4xl">
              {data.ventureDev.title}
            </h2>
            {data.ventureDev.subtitle && (
              <p className="mt-2 font-heading text-xl font-semibold text-black">
                {data.ventureDev.subtitle}
              </p>
            )}
            <div className="mt-6 text-lg leading-relaxed text-black">
              {data.ventureDev.body1 && (
                <PortableText value={data.ventureDev.body1} />
              )}
            </div>
            <div className="mt-4 text-lg leading-relaxed text-black">
              {data.ventureDev.body2 && (
                <PortableText value={data.ventureDev.body2} />
              )}
            </div>
            {data.ventureDev.body3 && (
              <div className="mt-4 text-lg leading-relaxed text-black">
                <PortableText value={data.ventureDev.body3} />
              </div>
            )}

            {data.ventureDev.deliverablesTitle && (
              <div className="mt-12 bg-gray-50 -mx-4 px-4 py-8">
                <h3 className="font-heading text-2xl font-bold text-black sm:text-3xl">
                  {data.ventureDev.deliverablesTitle}
                </h3>
                {data.ventureDev.cards && data.ventureDev.cards.length > 0 && (
                  <div className="mt-8 grid gap-6 md:grid-cols-3">
                    {data.ventureDev.cards.map(
                      (card: {
                        _key: string;
                        title: string;
                        description: string;
                      }) => (
                        <DotCard key={card._key}>
                          <h4 className="font-heading text-lg font-bold text-black">
                            {card.title}
                          </h4>
                          <p className="mt-4 text-sm leading-relaxed text-black">
                            {card.description}
                          </p>
                        </DotCard>
                      )
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </Section>
      )}

      {/* Section Impact */}
      {data?.impact && (
        <Section spacing="md" className="relative bg-gray-50">
          <div className="relative mx-auto max-w-4xl px-4 text-center">
            <h2 className="font-heading text-3xl font-bold text-black sm:text-4xl">
              {data.impact.title}
            </h2>
            <div className="mt-6 text-lg leading-relaxed text-black">
              {data.impact.body1 && <PortableText value={data.impact.body1} />}
            </div>
            <div className="mt-4 text-lg leading-relaxed text-black">
              {data.impact.body2 && <PortableText value={data.impact.body2} />}
            </div>
          </div>
        </Section>
      )}

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
            <div className="mt-4 text-lg leading-relaxed text-white">
              {data.finalCta.body2 && (
                <PortableText value={data.finalCta.body2} />
              )}
            </div>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              {data.finalCta.button1 && (
                <Button href="/contact" variant="inverted">
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
