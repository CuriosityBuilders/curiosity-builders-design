"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export function BookSection() {
  return (
    <Section id="book" spacing="md" className="bg-black">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
          {/* Image à gauche */}
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <div className="relative w-full max-w-64">
              <Image
                src="/Livre Claire Version Downloaded.webp"
                alt="Changer l'Immobilier : de l'Utopie à la Réalité"
                width={256}
                height={384}
                className="h-auto w-full object-contain"
              />
            </div>
          </motion.div>

          {/* Contenu à droite */}
          <div className="flex flex-col justify-center">
            <motion.h2
              className="font-heading text-3xl font-bold text-white sm:text-4xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              Changer l'Immobilier : de l'Utopie à la Réalité
            </motion.h2>
            <motion.p
              className="mt-6 text-lg leading-relaxed text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              Écrit par Claire Flurin Bellec et Fanny Costes, publié aux
              Éditions de l'Aube, cet ouvrage rassemble les réflexions de plus
              de cinquante acteurs du secteur autour d'une conviction :
              l'immobilier est en pleine transformation.
            </motion.p>
            <motion.blockquote
              className="mt-6 border-l-4 border-white pl-4 italic text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              "Travailler dès aujourd'hui à la construction d'un futur désirable
              et rentable n'est pas un rêve — c'est un impératif business."
            </motion.blockquote>
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <Button href="/contact" variant="inverted">
                Commander l'ouvrage
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
}
