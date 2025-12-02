import {
  BarChartIcon,
  BookIcon,
  ComposeIcon,
  DocumentIcon,
  DocumentTextIcon,
  FilterIcon,
  HomeIcon,
  ImageIcon,
  RocketIcon,
  StackIcon,
  UsersIcon,
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

// Helper function to create direct document lists (no language grouping)
const createDirectList = (
  S: Parameters<StructureResolver>[0],
  schemaType: string,
  title: string,
  icon: React.ComponentType | (() => string)
) => {
  return S.listItem()
    .title(title)
    .icon(icon)
    .child(
      S.documentList()
        .title(`All ${title}`)
        .filter(`_type == $schemaType`)
        .params({ schemaType })
    );
};

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      // Layout Section

      // Homepage Section
      S.listItem()
        .title("Homepage")
        .icon(HomeIcon)
        .child(
          S.list()
            .title("Homepage Sections")
            .items([
              createDirectList(S, "heroSection", "Hero Section", RocketIcon),
              createDirectList(
                S,
                "introSection",
                "Intro Section",
                DocumentIcon
              ),
              createDirectList(
                S,
                "missionSection",
                "Mission Section",
                StackIcon
              ),
              createDirectList(
                S,
                "tiersSection",
                "Tiers Section",
                BarChartIcon
              ),
              createDirectList(
                S,
                "keyMetricsSection",
                "Key Metrics Section",
                BarChartIcon
              ),
              createDirectList(
                S,
                "projectsSection",
                "Projects Section",
                ImageIcon
              ),
              createDirectList(S, "bookSection", "Book Section", BookIcon),
              createDirectList(
                S,
                "casesSection",
                "Cases Section",
                UsersIcon
              ),
              createDirectList(
                S,
                "footerCTASection",
                "Footer CTA Section",
                DocumentTextIcon
              ),
              createDirectList(
                S,
                "newsletterSection",
                "Newsletter Section",
                DocumentTextIcon
              ),
            ])
        ),

      // Pages
      S.listItem()
        .title("Pages")
        .icon(DocumentTextIcon)
        .child(
          S.list()
            .title("Pages")
            .items([
              createDirectList(S, "signalsPage", "Signals", DocumentTextIcon),
              createDirectList(S, "servicesPage", "Services", DocumentTextIcon),
              createDirectList(S, "methodePage", "Méthode", DocumentTextIcon),
              createDirectList(S, "contactPage", "Contact", DocumentTextIcon),
            ])
        ),

      // Divider
      S.divider(),

      S.listItem()
        .title("Layout")
        .icon(StackIcon)
        .child(
          S.list()
            .title("Layout")
            .items([
              createDirectList(S, "navigation", "Navigation", ComposeIcon),
              createDirectList(S, "header", "Header", FilterIcon),
              createDirectList(S, "footer", "Footer", FilterIcon),
            ])
        ),

      // Divider
      S.divider(),

      // All other documents (fallback for any schemas not explicitly listed above)
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            "navigation",
            "header",
            "footer",
            "heroSection",
            "introSection",
            "missionSection",
            "tiersSection",
            "keyMetricsSection",
            "projectsSection",
            "bookSection",
            "casesSection",
            "footerCTASection",
            "newsletterSection",
            "signalsPage",
            "servicesPage",
            "methodePage",
            "contactPage",
          ].includes(listItem.getId() || "")
      ),
    ]);
