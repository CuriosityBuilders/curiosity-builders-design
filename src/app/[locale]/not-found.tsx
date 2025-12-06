"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white px-4">
      <div className="relative mx-auto max-w-2xl py-8 px-4 text-center">
        {/* Horizontal lines extending full width */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
          style={{ width: "100vw" }}
        >
          <div className="h-px bg-zinc-300/30" />
        </div>
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
          style={{ width: "100vw" }}
        >
          <div className="h-px bg-zinc-300/30" />
        </div>

        {/* Vertical lines extending full height */}
        <div
          className="absolute left-0 pointer-events-none"
          style={{ height: "200vh", top: "-50vh" }}
        >
          <div className="w-px bg-zinc-300/30 h-full" />
        </div>
        <div
          className="absolute right-0 pointer-events-none"
          style={{ height: "200vh", top: "-50vh" }}
        >
          <div className="w-px bg-zinc-300/30 h-full" />
        </div>

        {/* Corner dots */}
        <div className="absolute left-0 top-0 z-10 bg-black/20 size-1 -translate-x-1/2 rounded-full ring-8 ring-white" />
        <div className="absolute right-0 top-0 z-10 bg-black/20 size-1 translate-x-1/2 rounded-full ring-8 ring-white" />
        <div className="absolute left-0 bottom-0 z-10 bg-black/20 size-1 -translate-x-1/2 rounded-full ring-8 ring-white" />
        <div className="absolute right-0 bottom-0 z-10 bg-black/20 size-1 translate-x-1/2 rounded-full ring-8 ring-white" />

        {/* Content */}
        <div className="relative z-20 p-4">

          {/* 404 Title */}
          <motion.h1
            className="font-heading text-6xl font-bold text-black sm:text-7xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            404
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            className="mt-6 font-heading text-2xl font-bold text-black sm:text-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {t("title")}
          </motion.h2>

          {/* Description */}
          <motion.p
            className="mt-6 text-lg leading-relaxed text-black sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {t("description")}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <Button href="/" variant="primary">
              {t("backToHome")}
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
