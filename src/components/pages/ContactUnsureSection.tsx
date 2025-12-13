"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import { BookOpenText, CalendarCheck, Mailbox, Send } from "lucide-react";

interface ContactUnsureSectionProps {
  data?: {
    title?: string;
    body?: PortableTextBlock[];
    card1Title?: string;
    button1?: string;
    button1Url?: string;
    card2Title?: string;
    button2?: string;
    button2Url?: string;
    card3Title?: string;
    button3?: string;
    card4Title?: string;
    button4?: string;
    button4Pdf?: {
      asset?: {
        url?: string;
        originalFilename?: string;
      };
    };
  };
  onRequestBrochure?: () => void;
}

export function ContactUnsureSection({
  data,
  onRequestBrochure,
}: ContactUnsureSectionProps) {
  if (!data) return null;

  return (
    <Section spacing="md" className="bg-gray-50">
      <div className="mx-auto max-w-4xl px-4 text-center">
        {data.title && (
          <h2 className="font-heading text-3xl font-bold text-black sm:text-4xl">
            {data.title}
          </h2>
        )}
        <div className="mt-6 text-lg leading-relaxed text-black">
          {data.body && <PortableText value={data.body} />}
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 items-stretch">
          {/* Card Newsletter */}
          {data.button1 && data.button1Url && (
            <Card className="flex flex-col items-center text-center p-6 h-full">
              <Mailbox className="h-8 w-8 text-black mb-4" />
              <h3 className="font-heading text-xl font-bold text-black mb-6">
                {data.card1Title}
              </h3>
              <div className="mt-auto w-full flex justify-center">
                <Button
                  variant="secondary"
                  onClick={() => window.open(data.button1Url, "_blank")}
                  className="w-2/3 min-w-[180px] gap-2"
                >
                  {data.button1}
                </Button>
              </div>
            </Card>
          )}

          {/* Card Rendez-vous */}
          {data.button2 && data.button2Url && (
            <Card className="flex flex-col items-center text-center p-6 h-full">
              <CalendarCheck className="h-8 w-8 text-black mb-4" />
              <h3 className="font-heading text-xl font-bold text-black mb-6">
                {data.card2Title}
              </h3>
              <div className="mt-auto w-full flex justify-center">
                <Button
                  variant="secondary"
                  onClick={() => window.open(data.button2Url, "_blank")}
                  className="w-2/3 min-w-[180px] gap-2"
                >
                  {data.button2}
                </Button>
              </div>
            </Card>
          )}

          {/* Card Brochure - Mise en évidence */}
          {data.button3 && (
            <Card className="flex flex-col items-center text-center p-6 border-2 border-black shadow-lg h-full">
              <Send className="h-8 w-8 text-black mb-4" />
              <h3 className="font-heading text-xl font-bold text-black mb-6">
                {data.card3Title}
              </h3>
              <div className="mt-auto w-full flex justify-center">
                <Button
                  variant="primary"
                  onClick={() => {
                    if (onRequestBrochure) {
                      onRequestBrochure();
                    } else {
                      // Fallback si onRequestBrochure n'est pas fourni
                      const formElement = document.getElementById(
                        "contact-form-section"
                      );
                      if (formElement) {
                        const elementPosition =
                          formElement.getBoundingClientRect().top;
                        const offsetPosition =
                          elementPosition + window.pageYOffset - 100;

                        window.scrollTo({
                          top: offsetPosition,
                          behavior: "smooth",
                        });
                      }
                    }
                  }}
                  className="w-2/3 min-w-[180px] gap-2"
                >
                  <span className="flex items-center gap-2">
                    {data.button3}
                  </span>
                </Button>
              </div>
            </Card>
          )}

          {/* Card Extrait du livre */}
          {data.button4 && data.button4Pdf?.asset?.url && (
            <Card className="flex flex-col items-center text-center p-6 h-full">
              <BookOpenText className="h-8 w-8 text-black mb-4" />
              <h3 className="font-heading text-xl font-bold text-black mb-6">
                {data.card4Title}
              </h3>
              <div className="mt-auto w-full flex justify-center">
                <Button
                  variant="primary"
                  onClick={() => {
                    if (data.button4Pdf?.asset?.url) {
                      const link = document.createElement("a");
                      link.href = data.button4Pdf.asset.url;
                      link.download =
                        data.button4Pdf.asset.originalFilename ||
                        "extrait-livre.pdf";
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }
                  }}
                  className="w-2/3 min-w-[180px] gap-2"
                >
                  {data.button4}
                </Button>
              </div>
            </Card>
          )}
        </div>
      </div>
    </Section>
  );
}
