"use client";

import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";

interface ContactUnsureSectionProps {
  data?: {
    title?: string;
    body?: PortableTextBlock[];
    button1?: string;
    button1Url?: string;
    button2?: string;
    button2Url?: string;
    button3?: string;
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
        <div className="mt-12 grid sm:grid-cols-2 gap-4 md:flex md:flex-wrap md:justify-center md:gap-4">
          {/* Button Newsletter */}
          {data.button1 && data.button1Url && (
            <Button
              variant="secondary"
              onClick={() => window.open(data.button1Url, "_blank")}
            >
              {data.button1}
            </Button>
          )}

          {/* Button Rendez-vous */}
          {data.button2 && data.button2Url && (
            <Button
              variant="secondary"
              onClick={() => window.open(data.button2Url, "_blank")}
            >
              {data.button2}
            </Button>
          )}

          {/* Button Brochure */}
          {data.button3 && (
            <Button
              variant="primary"
              onClick={() => {
                if (onRequestBrochure) {
                  onRequestBrochure();
                }
              }}
            >
              {data.button3}
            </Button>
          )}

          {/* Button Extrait du livre */}
          {data.button4 && data.button4Pdf?.asset?.url && (
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
            >
              {data.button4}
            </Button>
          )}
        </div>
      </div>
    </Section>
  );
}
