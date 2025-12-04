import { type SchemaTypeDefinition } from "sanity";
// Keep old sections for backward compatibility (can be removed later)
import bookSection from "./homepage/bookSection";
import casesSection from "./homepage/casesSection";
import footerCTASection from "./homepage/footerCTASection";
import heroSection from "./homepage/heroSection";
// Homepage - Single document
import homepage from "./homepage/homepage";
import introSection from "./homepage/introSection";
import keyMetricsSection from "./homepage/keyMetricsSection";
import missionSection from "./homepage/missionSection";
import newsletterSection from "./homepage/newsletterSection";
import projectsSection from "./homepage/projectsSection";
import tiersSection from "./homepage/tiersSection";
import footer from "./layout/footer";
import header from "./layout/header";
// Layout
import navigation from "./layout/navigation";
import contactPage from "./services/contactPage";
import methodePage from "./services/methodePage";
import servicesPage from "./services/servicesPage";
// Shared
import bookImage from "./shared/bookImage";
import logos from "./shared/logos";
import projectImages from "./shared/projectImages";
// Pages
import signalsPage from "./signals/signalsPage";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Layout
    navigation,
    header,
    footer,
    // Shared (not internationalized)
    bookImage,
    logos,
    projectImages,
    // Homepage - Single document (new)
    homepage,
    // Old homepage sections (kept for migration, can be removed later)
    heroSection,
    introSection,
    missionSection,
    tiersSection,
    keyMetricsSection,
    projectsSection,
    bookSection,
    casesSection,
    footerCTASection,
    newsletterSection,
    // Pages
    signalsPage,
    servicesPage,
    methodePage,
    contactPage,
  ],
};
