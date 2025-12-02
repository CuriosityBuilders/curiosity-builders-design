import { BookSection } from "@/components/homepage-sections/BookSection";
import { CasesSection } from "@/components/homepage-sections/CasesSection";
import { FooterCTASection } from "@/components/homepage-sections/FooterCTASection";
import { HeroSection } from "@/components/homepage-sections/HeroSection";
import { IntroSection } from "@/components/homepage-sections/IntroSection";
import { KeyMetricsSection } from "@/components/homepage-sections/KeyMetricsSection";
import { MissionSection } from "@/components/homepage-sections/MissionSection";
import { MissionTaglineSection } from "@/components/homepage-sections/MissionTaglineSection";
import { NewsletterSection } from "@/components/homepage-sections/NewsletterSection";
import { ProjectsPhotosSection } from "@/components/homepage-sections/ProjectsPhotosSection";
import { TiersSection } from "@/components/homepage-sections/TiersSection";
import { FilmGrain } from "@/components/ui/FilmGrain";
import { getHeroSection, getIntroSection } from "@/sanity/lib/queries";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const heroData = await getHeroSection(locale);
  const introData = await getIntroSection(locale);

  return (
    <div className="min-h-screen">
      <FilmGrain intensity={0.1} />

      <HeroSection data={heroData} />
      <IntroSection data={introData} />
      <MissionSection />
      <MissionTaglineSection />
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
