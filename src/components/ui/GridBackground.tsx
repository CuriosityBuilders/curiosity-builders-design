"use client";

import { useId } from "react";

interface GridBackgroundProps {
  className?: string;
  size?: number;
  lineWidth?: number;
  opacity?: number;
}

export function GridBackground({
  className = "",
  size = 60,
  lineWidth = 1,
  opacity = 0.1,
}: GridBackgroundProps) {
  const patternId = useId();
  const lineColor = `rgba(0, 0, 0, ${opacity})`;

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <svg
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Grid background pattern</title>
        <defs>
          <pattern
            id={patternId}
            x="0"
            y="0"
            width={size}
            height={size}
            patternUnits="userSpaceOnUse"
          >
            <line
              x1="0"
              y1="0"
              x2={size}
              y2="0"
              stroke={lineColor}
              strokeWidth={lineWidth}
            />
            <line
              x1="0"
              y1="0"
              x2="0"
              y2={size}
              stroke={lineColor}
              strokeWidth={lineWidth}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
    </div>
  );
}
