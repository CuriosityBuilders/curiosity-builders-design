import {
  DocumentTextIcon,
  FilterIcon,
  HomeIcon,
  ImageIcon,
  MenuIcon,
  SearchIcon,
} from "@sanity/icons";
import type { StructureResolver } from "sanity/structure";

// Helper function to create language-filtered lists
// const createLanguageGroup = (
//   S: Parameters<StructureResolver>[0],
//   schemaType: string,
//   title: string,
//   icon: React.ComponentType | (() => string)
// ) => {
//   return S.listItem()
//     .title(title)
//     .icon(icon)
//     .child(
//       S.list()
//         .title(`${title} by Language`)
//         .items([
//           S.listItem()
//             .title("Français")
//             .icon(() => "🇫🇷")
//             .child(
//               S.documentList()
//                 .title(`${title} (FR)`)
//                 .filter(`_type == $schemaType && language == $fr`)
//                 .params({ schemaType, fr: "fr" })
//             ),
//           S.listItem()
//             .title("English")
//             .icon(() => "🇬🇧")
//             .child(
//               S.documentList()
//                 .title(`${title} (EN)`)
//                 .filter(`_type == $schemaType && language == $en`)
//                 .params({ schemaType, en: "en" })
//             ),
//           S.listItem()
//             .title("All Languages")
//             .icon(() => "🌐")
//             .child(
//               S.documentList()
//                 .title(`All ${title}`)
//                 .filter(`_type == $schemaType`)
//                 .params({ schemaType })
//             ),
//         ])
//     );
// };

// Helper function to create singleton documents (one per language)
const createSingleton = (
  S: Parameters<StructureResolver>[0],
  schemaType: string,
  title: string,
  icon: React.ComponentType | (() => string)
) => {
  return S.listItem()
    .title(title)
    .icon(icon)
    .child(
      S.list()
        .title(`${title} by Language`)
        .items([
          S.listItem()
            .title("Français")
            .icon(() => "🇫🇷")
            .child(
              S.document()
                .schemaType(schemaType)
                .documentId(`${schemaType}-fr`)
                .title(`${title} (FR)`)
            ),
          S.listItem()
            .title("English")
            .icon(() => "🇬🇧")
            .child(
              S.document()
                .schemaType(schemaType)
                .documentId(`${schemaType}-en`)
                .title(`${title} (EN)`)
            ),
        ])
    );
};

// Helper function to create a global singleton (not language-specific)
const createGlobalSingleton = (
  S: Parameters<StructureResolver>[0],
  schemaType: string,
  title: string,
  icon: React.ComponentType | (() => string)
) => {
  return S.listItem()
    .title(title)
    .icon(icon)
    .child(
      S.document().schemaType(schemaType).documentId(schemaType).title(title)
    );
};

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      // Layout
      S.divider().title("Layout"),
      S.listItem()
        .title("Header")
        .icon(MenuIcon)
        .child(
          S.list()
            .title("Header")
            .items([
              createGlobalSingleton(S, "logo", "Logo", FilterIcon),
              createSingleton(S, "navigation", "Navigation", MenuIcon),
            ])
        ),
      createSingleton(S, "footer", "Footer", FilterIcon),

      // Pages - Each page as a singleton with language grouping
      S.divider().title("Pages"),
      // Homepage - Single document (new approach)
      createSingleton(S, "homepage", "Homepage", HomeIcon),
      createSingleton(S, "signalsPage", "Signals", DocumentTextIcon),
      createSingleton(S, "servicesPage", "Services", DocumentTextIcon),
      createSingleton(S, "methodePage", "Méthode", DocumentTextIcon),
      createSingleton(S, "contactPage", "Contact", DocumentTextIcon),

      // Legal - Grouped together
      S.divider().title("Legal"),
      S.listItem()
        .title("Legal Pages")
        .icon(DocumentTextIcon)
        .child(
          S.list()
            .title("Legal Pages")
            .items([
              createSingleton(
                S,
                "legalNoticePage",
                "Mentions légales",
                DocumentTextIcon
              ),
              createSingleton(
                S,
                "privacyPolicyPage",
                "Politique de confidentialité",
                DocumentTextIcon
              ),
            ])
        ),

      // Settings
      S.divider().title("Settings"),
      createGlobalSingleton(S, "seoSettings", "SEO Settings", SearchIcon),

      // Shared Assets
      S.divider().title("Shared Assets"),
      S.listItem()
        .title("Shared Content")
        .icon(ImageIcon)
        .child(
          S.list()
            .title("Shared Content")
            .items([
              createGlobalSingleton(S, "bookImage", "Book Image", ImageIcon),
              createGlobalSingleton(S, "logos", "Logos", ImageIcon),
              createGlobalSingleton(
                S,
                "projectImages",
                "Project Images",
                ImageIcon
              ),
              createGlobalSingleton(
                S,
                "signalsPdfs",
                "Signals PDFs",
                DocumentTextIcon
              ),
            ])
        ),

      // Divider
      S.divider().title("Other"),

      // All other documents (fallback for any schemas not explicitly listed above)
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            "logo",
            "navigation",
            "footer",
            "homepage",
            "signalsPage",
            "servicesPage",
            "methodePage",
            "contactPage",
            "legalNoticePage",
            "privacyPolicyPage",
            "seoSettings",
            "bookImage",
            "logos",
            "projectImages",
            "signalsPdfs",
          ].includes(listItem.getId() || "")
      ),
    ]);
