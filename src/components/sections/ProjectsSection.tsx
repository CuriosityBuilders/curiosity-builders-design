"use client";

import { motion } from "framer-motion";

interface ProjectsSectionProps {
  projects: string[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <motion.div
      className="mt-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <h3 className="font-heading text-center text-3xl font-semibold text-black">
        Projets
      </h3>
      <motion.div
        className="mt-4 grid gap-4 md:grid-cols-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          duration: 0.6,
          delay: 0.4,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project}
            className="text-center text-sm text-black"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.5,
              delay: 0.5 + index * 0.1,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {project}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
