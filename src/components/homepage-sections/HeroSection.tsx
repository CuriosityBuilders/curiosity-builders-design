"use client";

import { Section } from "@/components/ui/Section";
import { ShinyButton } from "@/components/ui/shiny-button";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

import { FilmGrain } from "@/components/ui/FilmGrain";

// Lazy-load non-critical background elements for better LCP
const FloatingPaths = dynamic(
  () =>
    import("@/components/ui/background-paths").then((mod) => ({
      default: mod.FloatingPaths,
    })),
  { ssr: false }
);

interface HeroSectionProps {
  data?: {
    title?: string;
    subtitleLine1?: string;
    subtitleLine2?: string;
    cta?: string;
  };
}

export function HeroSection({ data }: HeroSectionProps) {
  return (
    <Section
      id="hero"
      spacing="lg"
      className="relative py-24 sm:py-32 lg:py-40 min-h-[calc(100vh-200px)] sm:min-h-screen"
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

        {/* Radial gradient overlay for depth - Static on mobile for performance */}
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background: `radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.03) 0%, transparent 50%)`,
          }}
        />
        <motion.div
          className="absolute inset-0 hidden md:block"
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
        <div className="absolute inset-0 pointer-events-none hidden md:block">
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
              duration: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <h1 className="font-epilogue text-4xl md:text-5xl lg:text-[84px] max-w-4xl font-bold text-white tracking-medium">
              {data?.title ?? ""}
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
              {data?.subtitleLine1 ?? ""} <br /> {data?.subtitleLine2 ?? ""}
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
              {data?.cta ?? ""}
            </ShinyButton>
          </Link>
        </motion.div>
      </div>
    </Section>
  );
}
