"use client";

import { FloatingPaths } from "@/components/ui/background-paths";
import { FilmGrain } from "@/components/ui/FilmGrain";
import { Section } from "@/components/ui/Section";
import { ShinyButton } from "@/components/ui/shiny-button";
import { motion } from "framer-motion";
import Link from "next/link";

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
        {/* <Particles
          className="absolute inset-0"
          quantity={100}
          ease={80}
          color="#ffffff"
          refresh
        /> */}

        {/* Decorative Lines */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[10%] top-0 bottom-0 w-px bg-white/10" />
          <div className="absolute left-[30%] top-0 bottom-0 w-px bg-white/10" />
          <div className="absolute left-[50%] top-0 bottom-0 w-px bg-white/10" />
          <div className="absolute left-[70%] top-0 bottom-0 w-px bg-white/10" />
          <div className="absolute left-[90%] top-0 bottom-0 w-px bg-white/10" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 ml-0 mr-auto max-w-4xl pl-4 pr-4 md:pl-8 lg:pl-44">
        <div className="flex flex-col gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <h1 className="font-epilogue text-4xl md:text-5xl lg:text-[84px] max-w-4xl font-bold text-white tracking-medium">
              Stimulateur de créativité et de productivité pour le bâti.
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <p className="font-epilogue text-2xl font-extrabold leading-relaxed text-white">
              Centré sur l'humain, guidé par la donnée, <br /> augmenté par
              l'IA.
            </p>
          </motion.div>
        </div>

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
          <Link href="/methode">
            <ShinyButton className="font-epilogue bg-white border-white/20 text-black hover:bg-white/90 px-6 py-3">
              Découvrir notre méthode
            </ShinyButton>
          </Link>
        </motion.div>
      </div>
    </Section>
  );
}
