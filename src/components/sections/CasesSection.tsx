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
        <ClientsSection companies={clients} />
        <ProjectsSection projects={projects} />
        <PressSection companies={press} />
      </div>
    </Section>
  );
}
