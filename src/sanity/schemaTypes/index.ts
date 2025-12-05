import { type SchemaTypeDefinition } from "sanity";

// Homepage - Single document
import homepage from "./pages/homepage";
// Layout
import header from "./layout/header";
import footer from "./layout/footer";
import navigation from "./layout/navigation";
// Shared
import bookImage from "./shared/bookImage";
import logos from "./shared/logos";
import projectImages from "./shared/projectImages";
// Pages
import signalsPage from "./pages/signalsPage";
import contactPage from "./pages/contactPage";
import methodePage from "./pages/methodePage";
import servicesPage from "./pages/servicesPage";
import legalNoticePage from "./legale-pages/legalNoticePage";
import privacyPolicyPage from "./legale-pages/privacyPolicyPage";

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
    // Pages
    signalsPage,
    servicesPage,
    methodePage,
    contactPage,
    legalNoticePage,
    privacyPolicyPage,
  ],
};
