"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { ProjectsSection } from "./ProjectsSection";

const projects: string[] = [
  "Bas-Chantenay (Nantes)",
  "Halle G1 (Lille)",
  "Neoz BTR",
];

export function ProjectsPhotosSection() {
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
          Photos projets (à venir)
        </motion.h2>
        <ProjectsSection projects={projects} />
      </div>
    </Section>
  );
}
