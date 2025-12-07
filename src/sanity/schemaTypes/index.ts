import type { SchemaTypeDefinition } from "sanity";
import footer from "./layout/footer";
// Layout
import logo from "./layout/logo";
import navigation from "./layout/navigation";
import legalNoticePage from "./legale-pages/legalNoticePage";
import privacyPolicyPage from "./legale-pages/privacyPolicyPage";
import contactPage from "./pages/contactPage";
// Homepage - Single document
import homepage from "./pages/homepage";
import methodePage from "./pages/methodePage";
import servicesPage from "./pages/servicesPage";
// Pages
import signalsPage from "./pages/signalsPage";
// Shared
import bookImage from "./shared/bookImage";
import logos from "./shared/logos";
import projectImages from "./shared/projectImages";
import signalsPdfs from "./shared/signalsPdfs";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Layout
    logo,
    navigation,
    footer,
    // Shared (not internationalized)
    bookImage,
    logos,
    projectImages,
    signalsPdfs,
    // Homepage - Single document (new)
    homepage,
    // Pages
    signalsPage,
    servicesPage,
    methodePage,
    contactPage,
    legalNoticePage,
    privacyPolicyPage,
  ],
};
