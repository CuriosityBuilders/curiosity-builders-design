"use client";

import { motion } from "framer-motion";
import { useId } from "react";

interface BlueprintGridProps {
  spacing?: number;
  opacity?: number;
  className?: string;
}

export function BlueprintGrid({
  spacing = 120,
  opacity = 0.1,
  className = "",
}: BlueprintGridProps) {
  const patternId = useId();
  const lineColor = `rgba(0,0,0,${opacity})`;

  return (
    <motion.div
      className={`pointer-events-none fixed inset-0 z-0 ${className}`}
      aria-hidden="true"
      style={{ zIndex: 0 }}
      animate={{
        x: [0, 4, 6, 4, 0],
        y: [0, 1, -1, 1, 0],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Blueprint grid pattern</title>
        <defs>
          <pattern
            id={patternId}
            x="0"
            y="0"
            width={spacing}
            height={spacing}
            patternUnits="userSpaceOnUse"
          >
            {/* Horizontal line */}
            <line
              x1="0"
              y1="0"
              x2={spacing}
              y2="0"
              stroke={lineColor}
              strokeWidth="1"
            />
            {/* Vertical line */}
            <line
              x1="0"
              y1="0"
              x2="0"
              y2={spacing}
              stroke={lineColor}
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
    </motion.div>
  );
}
