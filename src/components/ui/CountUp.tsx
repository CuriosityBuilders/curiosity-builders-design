"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export function CountUp({
  value,
  prefix = "",
  suffix = "",
  duration = 1,
  className = "",
}: CountUpProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const startTime = Date.now();
      const startValue = 0;
      const endValue = value;

      const animate = () => {
        const now = Date.now();
        const elapsed = (now - startTime) / 1000;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function (ease-out)
        const easeOut = 1 - (1 - progress) ** 3;

        const currentValue = Math.floor(
          startValue + (endValue - startValue) * easeOut
        );
        setCount(currentValue);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(endValue);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, value, duration]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {prefix}
      {count}
      {suffix}
    </motion.span>
  );
}
