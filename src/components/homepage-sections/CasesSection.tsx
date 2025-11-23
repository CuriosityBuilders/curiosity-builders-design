"use client";

import { Section } from "@/components/ui/Section";
import { ClientsSection } from "./ClientsSection";
import { PressSection } from "./PressSection";

interface Company {
  name: string;
  logo?: string;
}

const clients: Company[] = [
  {
    name: "Aken Écosystèmes",
    logo: "/logos/logo partenaires & clients/LOGO_AKENECOSYSTEMES_COULEUR_RVB.png",
  },
  { name: "Nhood", logo: "/logos/logo partenaires & clients/Nhood.png" },
  {
    name: "Keys REIM",
    logo: "/logos/logo partenaires & clients/keys reim.svg",
  },
  {
    name: "Archipel & Co",
    logo: "/logos/logo partenaires & clients/Archipel.svg",
  },
  {
    name: "MIPIM",
    logo: "/logos/logo partenaires & clients/MIPIM_DIGI_N_PNG.png",
  },
  {
    name: "Carbon13",
    logo: "/logos/logo partenaires & clients/Carbon13_logo.webp",
  },
  {
    name: "Bouygues Immobilier",
    logo: "/logos/logo partenaires & clients/Logo_Bouygues_Immobilier.png",
  },
  { name: "ULI", logo: "/logos/logo partenaires & clients/ULI.png" },
];

const press: Company[] = [
  { name: "Le Monde", logo: "/logos/logos presse/Le_monde_logo.svg" },
  { name: "Les Échos", logo: "/logos/logos presse/Les_echos_(logo).svg.png" },
  {
    name: "Le Moniteur",
    logo: "/logos/logos presse/Le_Moniteur_logo_rouge.svg.png",
  },
  {
    name: "Le Parisien",
    logo: "/logos/logos presse/Le_Parisien_logo.svg.png",
  },
  { name: "L'Agefi", logo: "/logos/logos presse/agefi.png" },
  {
    name: "Business Immo",
    logo: "/logos/logos presse/Business-Immo-Logo.svg",
  },
  {
    name: "ID Info Durable",
    logo: "/logos/logos presse/ID info durable.svg",
  },
  { name: "Radio Immo", logo: "/logos/logos presse/radio immo.svg" },
  {
    name: "Maison & Objet",
    logo: "/logos/logos presse/maisonobjet-2lines-logotype_black-553x410.png",
  },
  { name: "Profession CGP", logo: "/logos/logos presse/profession-cgp.jpg" },
];

export function CasesSection() {
  return (
    <Section id="cases" spacing="md" className="bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <ClientsSection companies={clients} />
        <PressSection companies={press} />
      </div>
    </Section>
  );
}
