"use client";

import { GridBackground } from "@/components/ui/GridBackground";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Section } from "@/components/ui/Section";
import { urlFor } from "@/sanity/lib/image";
import { motion } from "framer-motion";

interface ProjectsPhotosSectionProps {
  data?: {
    title?: string;
    images?: Array<{
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
      title?: string;
      alt?: string;
      objectPosition?: string;
    }>;
  };
}

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
    src: "/photos projets/parcours UX bas chantenay 2.png",
    alt: "Parcours UX Bas Chantenay",
    title: "Parcours UX Bas Chantenay",
    objectPosition: "top",
  },
  {
    src: "/photos projets/Ref Neoz.png",
    alt: "Référence Neoz",
    title: "Référence Neoz",
  },
  {
    src: "/photos projets/Screenshot 2025-11-19 at 17.48.55.png",
    alt: "Projet Coliving",
    title: "Projet Coliving",
  },
];

export function ProjectsPhotosSection({ data }: ProjectsPhotosSectionProps) {
  // Use Sanity data if available, otherwise fallback to static images
  const cardItems =
    data?.images && data.images.length > 0
      ? data.images.map((item) => {
          const imageUrl = item.image?.asset?.url
            ? urlFor(item.image)
                .width(1920)
                .height(1280)
                .fit("max")
                .quality(100)
                .auto("format")
                // .ignoreImageParams()
                .url()
            : null;

          return {
            quote: item.title || "Project",
            name: item.alt || "Project",
            title: item.title || "Project",
            src: imageUrl || undefined,
            alt: item.alt || "Project image",
            objectPosition: item.objectPosition,
          };
        })
      : projectPhotos.map((photo) => ({
          quote: photo.title,
          name: photo.alt,
          title: photo.title,
          src: photo.src,
          alt: photo.alt,
          objectPosition: photo.objectPosition,
        }));

  return (
    <Section id="projects" spacing="md" className="relative bg-white">
      <GridBackground size={200} opacity={0.1} />
      <div className="relative mx-auto max-w-7xl px-4">
        {data?.title && (
          <motion.h2
            className="font-heading text-center text-3xl font-extrabold text-black sm:text-4xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {data.title}
          </motion.h2>
        )}

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
