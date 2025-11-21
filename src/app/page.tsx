"use client";

import { BookSection } from "@/components/homepage-sections/BookSection";
import { CasesSection } from "@/components/homepage-sections/CasesSection";
import { FooterCTASection } from "@/components/homepage-sections/FooterCTASection";
import { HeroSection } from "@/components/homepage-sections/HeroSection";
import { IntroSection } from "@/components/homepage-sections/IntroSection";
import { KeyMetricsSection } from "@/components/homepage-sections/KeyMetricsSection";
import { NewsletterSection } from "@/components/homepage-sections/NewsletterSection";
import { TiersSection } from "@/components/homepage-sections/TiersSection";
import { BlueprintGrid } from "@/components/ui/BlueprintGrid";
import { FilmGrain } from "@/components/ui/FilmGrain";

export default function Home() {
  return (
    <div className="min-h-screen">
      <FilmGrain intensity={0.1} />
      <BlueprintGrid spacing={120} opacity={0.03} />
      {/* <ProgressLine /> */}

      <HeroSection />
      <IntroSection />
      <TiersSection />
      <KeyMetricsSection />
      <CasesSection />
      <BookSection />
      <NewsletterSection />
      <FooterCTASection />
    </div>
  );
}
