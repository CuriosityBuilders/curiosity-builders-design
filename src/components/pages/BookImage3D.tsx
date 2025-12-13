"use client";

import { urlFor } from "@/sanity/lib/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface BookImage3DProps {
  image: {
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
  title?: string;
}

export function BookImage3D({ image, title }: BookImage3DProps) {
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
    <motion.div
      ref={containerRef}
      className="flex items-center justify-center md:justify-end"
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: "1000px",
      }}
    >
      <motion.div
        className="relative w-full max-w-xs"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        {image?.asset?.url ? (
          <Image
            src={urlFor(image)
              .width(800)
              .height(1200)
              .fit("max")
              .quality(100)
              .auto("format")
              .url()}
            alt={title ? `${title} - Book cover` : "Book cover"}
            width={320}
            height={480}
            className="h-auto w-full object-contain drop-shadow-lg"
            loading="lazy"
          />
        ) : null}
      </motion.div>
    </motion.div>
  );
}
