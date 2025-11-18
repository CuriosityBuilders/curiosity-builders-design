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
      <h3 className="font-heading text-center text-3xl font-semibold text-black">
        Clients & partenaires
      </h3>
      <motion.div
        className="mt-6 flex flex-wrap items-center justify-center gap-8 opacity-70 grayscale transition-opacity hover:opacity-100 hover:grayscale-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          duration: 0.6,
          delay: 0.4,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        {companies.map((company) =>
          company.logo ? (
            <div
              key={company.name}
              className="flex h-12 items-center justify-center"
            >
              <Image
                src={company.logo}
                alt={company.name}
                width={120}
                height={48}
                className="h-auto max-h-12 w-auto object-contain"
              />
            </div>
          ) : (
            <div
              key={company.name}
              className="flex h-12 items-center justify-center text-sm text-black/60"
            >
              {company.name}
            </div>
          ),
        )}
      </motion.div>
    </motion.div>
  );
}
