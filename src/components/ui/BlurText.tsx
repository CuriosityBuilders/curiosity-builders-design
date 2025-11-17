"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface BlurTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div" | "p" | "span";
}

export function BlurText({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
  as: Component = "div",
}: BlurTextProps) {
  const text = String(children);
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: delay },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
    hidden: {
      opacity: 0,
      filter: "blur(10px)",
    },
  };

  // Create motion component based on the element type
  let MotionComponent: typeof motion.div;
  switch (Component) {
    case "h1":
      MotionComponent = motion.h1;
      break;
    case "h2":
      MotionComponent = motion.h2;
      break;
    case "h3":
      MotionComponent = motion.h3;
      break;
    case "h4":
      MotionComponent = motion.h4;
      break;
    case "h5":
      MotionComponent = motion.h5;
      break;
    case "h6":
      MotionComponent = motion.h6;
      break;
    case "p":
      MotionComponent = motion.p;
      break;
    case "span":
      MotionComponent = motion.span;
      break;
    default:
      MotionComponent = motion.div;
  }

  return (
    <MotionComponent
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, wordIndex) => (
        <span key={`word-${wordIndex}-${word}`} className="inline-block">
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={`char-${wordIndex}-${charIndex}-${char}`}
              className="inline-block"
              variants={child}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
          {wordIndex < words.length - 1 && "\u00A0"}
        </span>
      ))}
    </MotionComponent>
  );
}
