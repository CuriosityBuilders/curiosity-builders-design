"use client";

import { BookSection } from "@/components/homepage-sections/BookSection";
import { CasesSection } from "@/components/homepage-sections/CasesSection";
import { FooterCTASection } from "@/components/homepage-sections/FooterCTASection";
import { HeroSection } from "@/components/homepage-sections/HeroSection";
import { IntroSection } from "@/components/homepage-sections/IntroSection";
import { KeyMetricsSection } from "@/components/homepage-sections/KeyMetricsSection";
import { NewsletterSection } from "@/components/homepage-sections/NewsletterSection";
import { TiersSection } from "@/components/homepage-sections/TiersSection";
import { FilmGrain } from "@/components/ui/FilmGrain";
import { ProjectsPhotosSection } from "@/components/homepage-sections/ProjectsPhotosSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <FilmGrain intensity={0.1} />
      {/* <ProgressLine /> */}

      <HeroSection />
      <IntroSection />
      <TiersSection />
      <KeyMetricsSection />
      <ProjectsPhotosSection />
      <BookSection />
      <CasesSection />
      <FooterCTASection />
      <NewsletterSection />
    </div>
  );
}
