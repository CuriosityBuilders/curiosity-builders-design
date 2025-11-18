"use client";

import { motion } from "framer-motion";

interface BlueprintLinesProps {
  opacity?: number;
  className?: string;
  variant?: "horizontal" | "vertical" | "both";
  spacing?: number;
  count?: number;
}

export function BlueprintLines({
  opacity = 0.05,
  className = "",
  variant = "both",
  count = 8,
}: BlueprintLinesProps) {
  const lineColor = `rgba(0,0,0,${opacity})`;

  return (
    <div
      className={`pointer-events-none absolute inset-0 ${className}`}
      aria-hidden="true"
    >
      <svg
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Blueprint construction lines</title>
        {(variant === "horizontal" || variant === "both") &&
          Array.from({ length: count }).map((_, i) => {
            const lineId = `h-${i}-${(i * 100) / count}`;
            return (
              <motion.line
                key={lineId}
                x1="0%"
                y1={`${(i * 100) / count}%`}
                x2="100%"
                y2={`${(i * 100) / count}%`}
                stroke={lineColor}
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  pathLength: {
                    duration: 1.5,
                    delay: i * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  },
                  opacity: {
                    duration: 0.8,
                    delay: i * 0.1,
                  },
                }}
              />
            );
          })}
        {(variant === "vertical" || variant === "both") &&
          Array.from({ length: count }).map((_, i) => {
            const lineId = `v-${i}-${(i * 100) / count}`;
            return (
              <motion.line
                key={lineId}
                x1={`${(i * 100) / count}%`}
                y1="0%"
                x2={`${(i * 100) / count}%`}
                y2="100%"
                stroke={lineColor}
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  pathLength: {
                    duration: 1.5,
                    delay: (variant === "both" ? count : 0) + i * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  },
                  opacity: {
                    duration: 0.8,
                    delay: (variant === "both" ? count : 0) + i * 0.1,
                  },
                }}
              />
            );
          })}
      </svg>
    </div>
  );
}
