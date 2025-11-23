"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";

const projectPhotos = [
  {
    src: "/photos projets/bas chantenay.png",
    alt: "Bas Chantenay",
    title: "Bas Chantenay",
  },
  {
    src: "/photos projets/bas chantenay usine élec.png",
    alt: "Bas Chantenay - Usine électrique",
    title: "Bas Chantenay - Usine électrique",
  },
  {
    src: "/photos projets/parcours UX bas chantenay.png",
    alt: "Parcours UX Bas Chantenay",
    title: "Parcours UX Bas Chantenay",
  },
  {
    src: "/photos projets/Ref Neoz.png",
    alt: "Référence Neoz",
    title: "Référence Neoz",
  },
  {
    src: "/photos projets/Screenshot 2025-11-19 at 17.48.55.png",
    alt: "Projet Screenshot",
    title: "Projet Coliving",
  },
];

export function ProjectsPhotosSection() {
  // Convert photos to the format expected by InfiniteMovingCards
  const cardItems = projectPhotos.map((photo) => ({
    quote: photo.title,
    name: photo.alt,
    title: photo.title,
    src: photo.src,
    alt: photo.alt,
  }));

  return (
    <Section id="projects" spacing="md" className="bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <motion.h2
          className="font-heading text-center text-3xl font-bold text-black sm:text-4xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          Photos projets
        </motion.h2>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <InfiniteMovingCards
            items={cardItems}
            direction="left"
            speed="slow"
            pauseOnHover={true}
          />
        </motion.div>
      </div>
    </Section>
  );
}
