"use client";

import ShinyText from "@/components/ShinyText";
import { FloatingPaths } from "@/components/ui/background-paths";
import { FilmGrain } from "@/components/ui/FilmGrain";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { Particles } from "@/components/ui/particles";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <Section
      id="hero"
      spacing="lg"
      className="relative py-24 sm:py-32 lg:py-40 min-h-screen"
      style={{ backgroundColor: "#08090B" }}
    >
      {/* Background Layers */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Base gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, #08090B, #08090B, #08090B)`,
          }}
        />

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
        <div
          className="absolute inset-x-0 bottom-0 h-1/3"
          style={{
            background: `linear-gradient(to top, #08090B, transparent)`,
          }}
        />

        {/* Film Grain Texture */}
        <FilmGrain intensity={0.05} />

        {/* Particles Background */}
        <Particles
          className="absolute inset-0"
          quantity={20}
          ease={80}
          color="#ffffff"
          refresh
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <h1 className="font-heading text-4xl font-black leading-tight sm:text-6xl md:text-7xl lg:text-8xl drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            <ShinyText text="Curiosity.Builders" speed={5} />
          </h1>
        </motion.div>
        <motion.p
          className="mt-8 text-lg font-bold leading-relaxed text-white sm:text-xl lg:text-3xl drop-shadow-[0_2px_20px_rgba(255,255,255,0.2)]"
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
          className="text-lg font-bold leading-relaxed text-white sm:text-xl lg:text-3xl drop-shadow-[0_2px_20px_rgba(255,255,255,0.2)]"
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
          <MovingBorderButton
            as="a"
            href="/services"
            borderRadius="9999px"
            duration={4000}
            containerClassName="group w-auto h-auto inline-block"
            borderClassName="bg-[radial-gradient(rgba(255,255,255,0.9)_40%,transparent_60%)] opacity-90"
            className="bg-black hover:bg-black/90 text-white border-white/20 backdrop-blur-md px-6 py-3 text-base font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
          >
            Découvrir nos services
          </MovingBorderButton>
        </motion.div>
      </div>
    </Section>
  );
}
