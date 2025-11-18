"use client";

import { Button } from "@/components/ui/Button";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { motion } from "framer-motion";

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
      className="relative h-full rounded-2xl border border-black/10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <GlowingEffect
        blur={0}
        borderWidth={2}
        spread={number === 1 ? 100 : 80}
        glow={false}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        variant="white"
      />
      <div className="relative flex h-full flex-col overflow-hidden rounded-xl border-0 bg-white p-8 transition-all duration-300 hover:shadow-xl">
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
          <p className="text-sm font-medium italic text-black/60">{tagline}</p>
          <div
            className={`mt-6 ${buttons.length > 1 ? "grid grid-cols-1 gap-3 sm:grid-cols-2" : ""}`}
          >
            {buttons.map((button, index) => (
              <Button
                key={index}
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
    </motion.div>
  );
}
