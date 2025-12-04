import { type SchemaTypeDefinition } from "sanity";

// Homepage - Single document
import homepage from "./homepage/homepage";
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
    // Pages
    signalsPage,
    servicesPage,
    methodePage,
    contactPage,
  ],
};
