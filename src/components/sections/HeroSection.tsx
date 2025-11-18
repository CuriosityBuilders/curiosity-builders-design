"use client";

import { BlurText } from "@/components/ui/BlurText";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
  return (
    <Section
      id="hero"
      spacing="lg"
      className="relative overflow-hidden py-32 text-center sm:py-40 lg:py-48"
    >
      {/* Animated Background Image */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 1.5,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        <Image
          src="/hero-background.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>
      {/* Dark Overlay with gradient for better contrast */}
      <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/70 to-black/90" />
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4">
        <BlurText
          as="h1"
          className="font-heading text-5xl font-bold leading-[1.1] text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.2),0_0_30px_rgba(255,255,255,0.3),0_0_60px_rgba(255,255,255,0.2)] sm:text-7xl lg:text-9xl"
          delay={0.1}
          duration={0.5}
        >
          Curiosity.Builders
        </BlurText>
        <motion.p
          className="mt-12 text-2xl leading-relaxed text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] sm:text-3xl lg:text-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          Plateforme d'accélération de vos projets de lieux.
        </motion.p>
        <motion.p
          className="mt-6 text-xl leading-relaxed text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)] sm:text-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          Centrée sur l'humain, guidée par la donnée, augmentée par l'IA.
        </motion.p>
      </div>
    </Section>
  );
}
