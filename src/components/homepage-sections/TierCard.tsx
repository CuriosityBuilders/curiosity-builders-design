"use client";

import { motion } from "framer-motion";
import DotCard from "@/components/mvpblocks/dot-card";
import { Button } from "@/components/ui/Button";

interface TierCardProps {
  number: number;
  title: string;
  subtitle: string;
  description: string;
  tagline: string;
  delay?: number;
  buttons: Array<{
    href: string;
    variant: "primary" | "secondary";
    label: string;
    className?: string;
  }>;
}

export function TierCard({
  number,
  title,
  subtitle,
  description,
  tagline,
  delay = 0,
  buttons,
}: TierCardProps) {
  return (
    <motion.div
      className="relative h-full flex"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <DotCard>
        <div className="flex h-full min-h-[400px] flex-col">
          <div className="mb-6 flex items-start justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-2xl font-heading font-bold text-white">
              {number}
            </div>
          </div>
          <h3 className="font-heading text-2xl font-bold leading-tight text-black">
            {title}
          </h3>
          <p className="mt-3 text-base font-medium text-black/80">{subtitle}</p>
          <p className="mt-6 grow text-base leading-relaxed text-black/70">
            {description}
          </p>
          <div className="mt-auto pt-6">
            <p className="text-base font-medium italic text-black/60">
              {tagline}
            </p>
            <div
              className={`mt-6 ${
                buttons.length > 1
                  ? "grid grid-cols-1 gap-3 sm:grid-cols-2"
                  : ""
              }`}
            >
              {buttons.map((button) => (
                <Button
                  key={`${button.href}-${button.label}`}
                  href={button.href}
                  variant={button.variant}
                  className={button.className || "w-full"}
                >
                  {button.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </DotCard>
    </motion.div>
  );
}
