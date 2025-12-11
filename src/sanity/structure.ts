import type { StructureResolver } from "sanity/structure";

import { DocumentationPage } from "./components/DocumentationPage";

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
        .title(`${title} par langue`)
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
    .title("Curiosity Builders - Contenu")
    .items([
      // ========================================
      // 📚 DOCUMENTATION
      // ========================================
      S.listItem()
        .title("Guide d'utilisation")
        .icon(() => "📚")
        .child(
          S.component()
            .component(DocumentationPage)
            .title("Guide d'utilisation")
        ),

      // Layout
      S.divider().title("Layout"),

      // ========================================
      // LAYOUT & NAVIGATION
      // ========================================
      S.listItem()
        .title("Layout & Navigation")
        .icon(() => "🧭")
        .child(
          S.list()
            .title("Layout & Navigation")
            .items([
              createGlobalSingleton(S, "logo", "Logo", () => "🎨"),
              createSingleton(
                S,
                "navigation",
                "Menu de navigation",
                () => "🧭"
              ),
              createSingleton(S, "footer", "Footer (Pied de page)", () => "📄"),
            ])
        ),

      // ========================================
      // PAGES DU SITE
      // ========================================
      S.divider().title("Pages"),
      S.listItem()
        .title("Pages principales")
        .icon(() => "📄")
        .child(
          S.list()
            .title("Pages")
            .items([
              createSingleton(S, "homepage", "Page d'accueil", () => "🏠"),
              createSingleton(S, "signalsPage", "Signals", () => "📡"),
              createSingleton(S, "servicesPage", "Services", () => "🛠️"),
              createSingleton(S, "methodePage", "Méthode", () => "📐"),
              createSingleton(S, "contactPage", "Contact", () => "📞"),
            ])
        ),

      // ========================================
      // PAGES LÉGALES
      // ========================================
      S.divider(),
      S.listItem()
        .title("Pages légales")
        .icon(() => "📄")
        .child(
          S.list()
            .title("Pages légales")
            .items([
              createSingleton(
                S,
                "legalNoticePage",
                "Mentions légales",
                () => "📋"
              ),
              createSingleton(
                S,
                "privacyPolicyPage",
                "Politique de confidentialité",
                () => "🔒"
              ),
            ])
        ),
      // S.divider().title("Contenu partagé"),
      // S.listItem()
      //   .title("Images & Médias")
      //   .icon(ImageIcon)
      //   .child(
      //     S.list()
      //       .title("Médias partagés (FR + EN)")
      //       .items([
      //         createGlobalSingleton(
      //           S,
      //           "bookImage",
      //           "Couverture du livre",
      //           BookIcon
      //         ),
      //         createGlobalSingleton(
      //           S,
      //           "projectImages",
      //           "Images des projets",
      //           ImageIcon
      //         ),
      //         createGlobalSingleton(
      //           S,
      //           "logos",
      //           "Logos (Clients & Presse)",
      //           FilterIcon
      //         ),
      //         createGlobalSingleton(
      //           S,
      //           "signalsPdfs",
      //           "PDFs Signals",
      //           DocumentTextIcon
      //         ),
      //       ])
      //   ),
      // ========================================
      // PARAMÈTRES
      // ========================================
      S.divider().title("Settings"),
      S.listItem()
        .title("SEO")
        .icon(() => "🔍")
        .child(
          S.list()
            .title("Paramètres")
            .items([
              createGlobalSingleton(
                S,
                "seoSettings",
                "SEO (Référencement global)",
                () => "🔍"
              ),
            ])
        ),

      // ========================================
      // AUTRES
      // ========================================
      S.divider().title("Others"),

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
