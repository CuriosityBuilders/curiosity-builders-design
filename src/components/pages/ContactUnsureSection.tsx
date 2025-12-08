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
    button2?: string;
    button3?: string;
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
        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
          {data.button1 && (
            <Button
              variant="primary"
              onClick={() =>
                window.open("https://substack.com/@curiositybuilders", "_blank")
              }
            >
              {data.button1}
            </Button>
          )}
          {data.button2 && (
            <Button
              variant="primary"
              onClick={() => window.open("https://calendly.com", "_blank")}
            >
              {data.button2}
            </Button>
          )}
          {data.button3 && (
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
            >
              <span className="flex items-center">
                {data.button3}
                <svg
                  className="ml-2 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <title>Arrow down</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </Button>
          )}
        </div>
      </div>
    </Section>
  );
}
