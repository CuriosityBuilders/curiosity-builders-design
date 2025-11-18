"use client";

import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { ClientsSection } from "./ClientsSection";
import { PressSection } from "./PressSection";
import { ProjectsSection } from "./ProjectsSection";

interface Company {
  name: string;
  logo?: string;
}

interface CasesSectionProps {
  clients: Company[];
  projects: string[];
  press: Company[];
}

export function CasesSection({
  clients,
  projects,
  press,
}: CasesSectionProps) {
  return (
    <Section id="cases" spacing="md" className="bg-white">
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
          Références & cas
        </motion.h2>

        <ClientsSection companies={clients} />
        <ProjectsSection projects={projects} />
        <PressSection companies={press} />
      </div>
    </Section>
  );
}
