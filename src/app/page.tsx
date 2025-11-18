"use client";

import { BookSection } from "@/components/homepage-sections/BookSection";
import { CasesSection } from "@/components/homepage-sections/CasesSection";
import { FooterCTASection } from "@/components/homepage-sections/FooterCTASection";
import { HeroSection } from "@/components/homepage-sections/HeroSection";
import { IntroSection } from "@/components/homepage-sections/IntroSection";
import { KeyMetricsSection } from "@/components/homepage-sections/KeyMetricsSection";
import { NewsletterSection } from "@/components/homepage-sections/NewsletterSection";
import { TiersSection } from "@/components/homepage-sections/TiersSection";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { BlueprintGrid } from "@/components/ui/BlueprintGrid";
import { FilmGrain } from "@/components/ui/FilmGrain";

export default function Home() {
  const clients = [
    {
      name: "Aken Écosystèmes",
      logo: "/logos/logo partenaires & clients/LOGO_AKENECOSYSTEMES_COULEUR_RVB.png",
    },
    { name: "Nhood", logo: "/logos/logo partenaires & clients/Nhood.png" },
    {
      name: "Keys REIM",
      logo: "/logos/logo partenaires & clients/keys reim.png",
    },
    {
      name: "Archipel & Co",
      logo: "/logos/logo partenaires & clients/Archipel.webp",
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

  const projects = ["Bas-Chantenay (Nantes)", "Halle G1 (Lille)", "Neoz BTR"];

  const press = [
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
      logo: "/logos/logos presse/Business-Immo-Logo.png",
    },
    {
      name: "ID Info Durable",
      logo: "/logos/logos presse/ID info durable.png",
    },
    { name: "Radio Immo", logo: "/logos/logos presse/radio immo.png" },
    {
      name: "Maison & Objet",
      logo: "/logos/logos presse/maisonobjet-2lines-logotype_black-553x410.png",
    },
    { name: "Profession CGP", logo: "/logos/logos presse/profession-cgp.jpg" },
  ];

  return (
    <div className="min-h-screen">
      <FilmGrain intensity={0.2} />
      <BlueprintGrid spacing={120} opacity={0.03} />
      <Header />
      {/* <ProgressLine /> */}

      <HeroSection />
      <IntroSection />
      <TiersSection />
      <KeyMetricsSection />
      <CasesSection clients={clients} projects={projects} press={press} />
      <BookSection />
      <NewsletterSection />
      <FooterCTASection />

      <Footer />
    </div>
  );
}
