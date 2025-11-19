"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { FloatingPaths } from "@/components/ui/background-paths";
import { FilmGrain } from "@/components/ui/FilmGrain";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Section } from "@/components/ui/Section";

export function HeroSection() {
  return (
    <Section
      id="hero"
      spacing="lg"
      className="relative bg-neutral-950 py-24 sm:py-32 lg:py-40 min-h-screen"
    >
      {/* Background Layers */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-linear-to-b from-neutral-950 via-neutral-950 to-neutral-900" />

        {/* Floating Paths Background */}
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />

        {/* Radial gradient overlay for depth */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.03) 0%, transparent 50%)`,
          }}
          animate={{
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Subtle bottom gradient fade */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-neutral-950 to-transparent" />

        {/* Film Grain Texture */}
        <FilmGrain intensity={0.05} />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4">
        <motion.h1
          className="font-heading text-4xl font-black leading-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          Curiosity.Builders
        </motion.h1>
        <motion.p
          className="mt-8 text-lg font-bold leading-relaxed text-white sm:text-xl lg:text-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          Plateforme d'accélération de vos projets de lieux.
        </motion.p>

        <motion.p
          className="text-lg font-bold leading-relaxed text-white sm:text-xl lg:text-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          Centrée sur l'humain, guidée par la donnée, augmentée par l'IA.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="mt-12"
        >
          <div className="inline-block group relative rounded-full">
            <div className="relative bg-linear-to-b from-white/10 to-white/5 p-px rounded-full backdrop-blur-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <GlowingEffect
                variant="default"
                blur={0}
                borderWidth={4}
                spread={60}
                glow={true}
                disabled={false}
                proximity={48}
                inactiveZone={0.3}
              />
              <Button
                variant="inverted"
                className="rounded-full px-4 py-2 text-sm font-medium backdrop-blur-md bg-white/95 hover:bg-white text-black transition-all duration-300 border border-white/20 hover:shadow-md hover:shadow-white/20"
              >
                <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                  Découvrir nos services
                </span>
                <span className="ml-2 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                  →
                </span>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
