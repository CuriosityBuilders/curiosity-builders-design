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
import { getHomepage } from "@/sanity/lib/queries";

// Revalidate toutes les minutes pour optimiser le LCP et mettre en cache agressivement
export const revalidate = 60;

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const homepageData = await getHomepage(locale);

  return (
    <div className="min-h-screen">
      <FilmGrain intensity={0.1} />

      <HeroSection data={homepageData?.hero} />
      <IntroSection data={homepageData?.intro} />
      <MissionSection data={homepageData?.mission} />
      <MissionTaglineSection />
      <TiersSection data={homepageData?.tiers} />
      <KeyMetricsSection data={homepageData?.keyMetrics} />
      <ProjectsPhotosSection data={homepageData?.projects} />
      <BookSection data={homepageData?.book} />
      <CasesSection data={homepageData?.cases} />
      <FooterCTASection data={homepageData?.footerCTA} />
      <NewsletterSection data={homepageData?.newsletter} />
    </div>
  );
}
