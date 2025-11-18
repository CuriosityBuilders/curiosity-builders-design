"use client";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { BookSection } from "@/components/sections/BookSection";
import { CasesSection } from "@/components/sections/CasesSection";
import { FooterCTASection } from "@/components/sections/FooterCTASection";
import { HeroSection } from "@/components/sections/HeroSection";
import { IntroSection } from "@/components/sections/IntroSection";
import { KeyMetricsSection } from "@/components/sections/KeyMetricsSection";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { TiersSection } from "@/components/sections/TiersSection";
import { BlueprintGrid } from "@/components/ui/BlueprintGrid";
import { FilmGrain } from "@/components/ui/FilmGrain";

export default function Home() {
  const clients = [
    { name: "Aken Écosystèmes", logo: "/logos/aken.png" },
    { name: "Nhood", logo: "/logos/nhood.png" },
    { name: "Keys REIM", logo: "/logos/keys-reim.png" },
    { name: "Pardi!", logo: "/logos/pardi.png" },
    { name: "Archipel & Co", logo: "/logos/archipelco.png" },
    { name: "MIPIM", logo: "/logos/mipim.png" },
    { name: "Carbon13", logo: "/logos/carbon13.png" },
  ];

  const projects = ["Bas-Chantenay (Nantes)", "Halle G1 (Lille)", "Neoz BTR"];

  const press = [
    { name: "Le Monde", logo: "/logos/lemonde.png" },
    { name: "IEIF", logo: "/logos/ieif.png" },
    { name: "ULI", logo: "/logos/uli.png" },
    { name: "L'Agefi", logo: "/logos/agefi.png" },
    { name: "Les Échos", logo: "/logos/lesechos.png" },
    { name: "Le Moniteur", logo: "/logos/lemoniteur.png" },
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
