import { type SchemaTypeDefinition } from "sanity";
import bookSection from "./homepage/bookSection";
import casesSection from "./homepage/casesSection";
import footerCTASection from "./homepage/footerCTASection";

// Homepage
import heroSection from "./homepage/heroSection";
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
// Pages
import signalsPage from "./signals/signalsPage";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Layout
    navigation,
    header,
    footer,
    // Homepage
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
