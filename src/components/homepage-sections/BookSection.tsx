"use client";

import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface BookSectionProps {
  data?: {
    title?: string;
    description?: PortableTextBlock[];
    quote?: string;
    cta?: string;
    image?: {
      asset?: {
        _id?: string;
        url?: string;
        metadata?: {
          dimensions?: {
            width?: number;
            height?: number;
          };
        };
      };
      hotspot?: { x: number; y: number };
      crop?: { top: number; bottom: number; left: number; right: number };
    };
    link?: string;
  };
}

export function BookSection({ data }: BookSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, {
    stiffness: 500,
    damping: 100,
  });
  const mouseYSpring = useSpring(y, {
    stiffness: 500,
    damping: 100,
  });

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <Section id="book" spacing="md" className="bg-black">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-10 md:gap-2 md:grid-cols-2 ">
          {/* Image à gauche */}
          <motion.div
            ref={containerRef}
            className="flex items-center justify-center md:justify-end md:pr-20"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              perspective: "1000px",
            }}
          >
            <motion.div
              className="relative w-full max-w-76"
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
            >
              {data?.image?.asset?.url ? (
                <Image
                  src={urlFor(data.image)
                    .width(1024)
                    .height(1536)
                    .fit("max")
                    .quality(85)
                    .auto("format")
                    .url()}
                  alt={data.title || "Book cover"}
                  quality={85}
                  width={256}
                  height={384}
                  loading="lazy"
                  className="relative h-auto w-full object-contain"
                />
              ) : (
                <Image
                  src="/images livre/cover_texture.jpg"
                  alt="Changer l'Immobilier : de l'Utopie à la Réalité"
                  width={256}
                  height={384}
                  loading="lazy"
                  className="relative h-auto w-full object-contain"
                />
              )}
            </motion.div>
          </motion.div>

          {/* Contenu à droite */}
          <div className="flex flex-col justify-center">
            <motion.h2
              className="font-heading text-3xl font-bold text-white sm:text-4xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              {data?.title ?? ""}
            </motion.h2>
            <motion.div
              className="mt-6 text-lg leading-relaxed text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              {data?.description && <PortableText value={data.description} />}
            </motion.div>
            {data?.quote && (
              <motion.blockquote
                className="mt-12 rounded-lg bg-white/10 px-6 py-6 italic text-white backdrop-blur-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.8,
                  delay: 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <p className="font-heading text-xl font-bold leading-relaxed">
                  "{data.quote}"
                </p>
              </motion.blockquote>
            )}
            {data?.cta && (
              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                {data.link ? (
                  <Button href={data.link} variant="inverted">
                    {data.cta}
                  </Button>
                ) : (
                  <Button href="/contact" variant="inverted">
                    {data.cta}
                  </Button>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}
