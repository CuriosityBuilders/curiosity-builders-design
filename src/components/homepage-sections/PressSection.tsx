"use client";

import { urlFor } from "@/sanity/lib/image";
import { motion } from "framer-motion";
import Image from "next/image";

interface Company {
  name: string;
  logo?:
    | string
    | {
        asset?: {
          _id?: string;
          url?: string;
          metadata?: {
            dimensions?: {
              width?: number;
              height?: number;
            };
          };
        };
        hotspot?: { x: number; y: number };
        crop?: { top: number; bottom: number; left: number; right: number };
      };
}

interface PressSectionProps {
  companies: Company[];
}

export function PressSection({ companies }: PressSectionProps) {
  // Duplicate companies array for seamless infinite scroll
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <motion.div
      className="mt-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <motion.div
        className="mt-6 overflow-hidden group"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          duration: 0.6,
          delay: 0.4,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        <div
          className="animate-scroll-reverse flex items-center gap-8 opacity-70 grayscale transition-opacity group-hover:opacity-100 group-hover:grayscale-0"
          style={{
            width: "fit-content",
          }}
        >
          {duplicatedCompanies.map((company, index) => {
            const logoSrc =
              typeof company.logo === "string"
                ? company.logo
                : company.logo?.asset?.url
                  ? urlFor(company.logo)
                      .width(256)
                      .height(128)
                      .fit("max")
                      .quality(100)
                      .auto("format")
                      .ignoreImageParams()
                      .url()
                  : null;

            return logoSrc ? (
              <div
                key={`${company.name}-${index}`}
                className="flex h-16 w-28 shrink-0 items-center justify-center p-1"
              >
                <Image
                  src={logoSrc}
                  alt={company.name}
                  width={112}
                  height={64}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ) : (
              <div
                key={`${company.name}-${index}`}
                className="flex h-16 w-32 shrink-0 items-center justify-center text-sm text-black/60"
              >
                {company.name}
              </div>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
}
