"use client";

import { motion } from "framer-motion";
import { useId } from "react";

interface DynamicGridProps {
  className?: string;
  opacity?: number;
  spacing?: number;
}

export function DynamicGrid({
  className = "",
  opacity = 0.15,
  spacing = 40,
}: DynamicGridProps) {
  const patternId = useId();
  const lineColor = `rgba(255, 255, 255, ${opacity})`;

  return (
    <div
      className={`absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <motion.svg
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        aria-hidden="true"
      >
        <title>Dynamic grid background pattern</title>
        <defs>
          <pattern
            id={patternId}
            x="0"
            y="0"
            width={spacing}
            height={spacing}
            patternUnits="userSpaceOnUse"
          >
            <motion.line
              x1="0"
              y1="0"
              x2={spacing}
              y2="0"
              stroke={lineColor}
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <motion.line
              x1="0"
              y1="0"
              x2="0"
              y2={spacing}
              stroke={lineColor}
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.2, ease: "easeInOut" }}
            />
          </pattern>
        </defs>
        <motion.rect
          width="100%"
          height="100%"
          fill={`url(#${patternId})`}
          animate={{
            x: [0, spacing, 0],
            y: [0, spacing, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.svg>

      {/* Animated gradient overlay for depth */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, transparent 0%, rgba(0, 0, 0, 0.3) 100%)`,
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
