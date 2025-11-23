"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Company {
  name: string;
  logo?: string;
}

interface ClientsSectionProps {
  companies: Company[];
}

export function ClientsSection({ companies }: ClientsSectionProps) {
  // Duplicate companies array for seamless infinite scroll
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <motion.div
      className="mt-6"
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
          className="animate-scroll flex items-center gap-8 opacity-70 grayscale transition-opacity group-hover:opacity-100 group-hover:grayscale-0"
          style={{
            width: "fit-content",
          }}
        >
          {duplicatedCompanies.map((company, index) =>
            company.logo ? (
              <div
                key={`${company.name}-${index}`}
                className="flex h-16 w-32 shrink-0 items-center justify-center"
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={128}
                  height={64}
                  className="h-full w-full object-contain"
                />
              </div>
            ) : (
              <div
                key={`${company.name}-${index}`}
                className="flex h-16 w-32 shrink-0 items-center justify-center text-sm text-black/60"
              >
                {company.name}
              </div>
            )
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
