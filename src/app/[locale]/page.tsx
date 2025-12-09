import { generatePageMetadata } from "@/app/metadata";
import { FilmGrain } from "@/components/ui/FilmGrain";
import { getHomepage } from "@/sanity/lib/queries";
import dynamic from "next/dynamic";

// Lazy load HeroSection - above the fold but code-split for better performance
const HeroSection = dynamic(
  () =>
    import("@/components/homepage-sections/HeroSection").then(
      (mod) => mod.HeroSection
    ),
  {
    // Load immediately but in a separate chunk
    loading: () => (
      <div className="min-h-[calc(100vh-200px)] sm:min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-white">Loading...</div>
      </div>
    ),
  }
);

// Lazy load below-the-fold sections to improve initial bundle size and LCP
const IntroSection = dynamic(() =>
  import("@/components/homepage-sections/IntroSection").then(
    (mod) => mod.IntroSection
  )
);

const MissionSection = dynamic(() =>
  import("@/components/homepage-sections/MissionSection").then(
    (mod) => mod.MissionSection
  )
);

// MissionTaglineSection uses Particles - lazy loaded for better performance
const MissionTaglineSection = dynamic(() =>
  import("@/components/homepage-sections/MissionTaglineSection").then(
    (mod) => mod.MissionTaglineSection
  )
);

const TiersSection = dynamic(() =>
  import("@/components/homepage-sections/TiersSection").then(
    (mod) => mod.TiersSection
  )
);

// KeyMetricsSection uses Particles - lazy loaded for better performance
const KeyMetricsSection = dynamic(() =>
  import("@/components/homepage-sections/KeyMetricsSection").then(
    (mod) => mod.KeyMetricsSection
  )
);

const ProjectsPhotosSection = dynamic(() =>
  import("@/components/homepage-sections/ProjectsPhotosSection").then(
    (mod) => mod.ProjectsPhotosSection
  )
);

const BookSection = dynamic(() =>
  import("@/components/homepage-sections/BookSection").then(
    (mod) => mod.BookSection
  )
);

const CasesSection = dynamic(() =>
  import("@/components/homepage-sections/CasesSection").then(
    (mod) => mod.CasesSection
  )
);

// FooterCTASection uses Particles - lazy loaded for better performance
const FooterCTASection = dynamic(() =>
  import("@/components/homepage-sections/FooterCTASection").then(
    (mod) => mod.FooterCTASection
  )
);

const NewsletterSection = dynamic(() =>
  import("@/components/homepage-sections/NewsletterSection").then(
    (mod) => mod.NewsletterSection
  )
);

// Increase revalidate to 1 hour for better caching and reduced server load
export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return generatePageMetadata(locale, {
    currentPath: "",
  });
}

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
      <MissionTaglineSection data={homepageData?.mission} />
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
