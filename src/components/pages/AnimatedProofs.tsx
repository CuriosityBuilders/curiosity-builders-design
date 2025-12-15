"use client";

import { motion } from "framer-motion";

interface Quote {
  _key: string;
  text: string;
  author?: string;
}

interface AnimatedProofsProps {
  quotes?: Quote[];
}

export function AnimatedProofs({ quotes }: AnimatedProofsProps) {
  if (!quotes || quotes.length === 0) return null;

  return (
    <div className="space-y-6">
      {quotes.map((quote, index) => (
        <AnimatedQuote key={quote._key} quote={quote} index={index} />
      ))}
    </div>
  );
}

interface AnimatedQuoteProps {
  quote: Quote;
  index: number;
}

function AnimatedQuote({ quote, index }: AnimatedQuoteProps) {
  const delay = index * 0.15; // Stagger delay: 150ms per quote

  return (
    <motion.blockquote
      className="relative rounded-lg border-l-4 border-black bg-gray-100 p-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <motion.p
        className="text-lg italic font-semibold leading-relaxed text-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: delay + 0.1,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        {quote.text}
      </motion.p>
      {quote.author && (
        <motion.p
          className="mt-2 text-sm font-medium text-black"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: delay + 0.3,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          — {quote.author}
        </motion.p>
      )}
    </motion.blockquote>
  );
}
