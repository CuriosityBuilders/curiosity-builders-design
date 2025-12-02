import {
  ApiIcon,
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
const createLanguageGroup = (
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
              S.documentList()
                .title(`${title} (FR)`)
                .filter(`_type == $schemaType && language == $fr`)
                .params({ schemaType, fr: "fr" })
            ),
          S.listItem()
            .title("English")
            .icon(() => "🇬🇧")
            .child(
              S.documentList()
                .title(`${title} (EN)`)
                .filter(`_type == $schemaType && language == $en`)
                .params({ schemaType, en: "en" })
            ),
          S.listItem()
            .title("All Languages")
            .icon(() => "🌐")
            .child(
              S.documentList()
                .title(`All ${title}`)
                .filter(`_type == $schemaType`)
                .params({ schemaType })
            ),
        ])
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
              createLanguageGroup(S, "heroSection", "Hero Section", RocketIcon),
              createLanguageGroup(
                S,
                "introSection",
                "Intro Section",
                DocumentIcon
              ),
              createLanguageGroup(
                S,
                "missionSection",
                "Mission Section",
                StackIcon
              ),
              createLanguageGroup(
                S,
                "tiersSection",
                "Tiers Section",
                BarChartIcon
              ),
              createLanguageGroup(
                S,
                "keyMetricsSection",
                "Key Metrics Section",
                BarChartIcon
              ),
              createLanguageGroup(
                S,
                "projectsSection",
                "Projects Section",
                ImageIcon
              ),
              createLanguageGroup(S, "bookSection", "Book Section", BookIcon),
              createLanguageGroup(
                S,
                "casesSection",
                "Cases Section",
                UsersIcon
              ),
              createLanguageGroup(
                S,
                "footerCTASection",
                "Footer CTA Section",
                ApiIcon
              ),
              createLanguageGroup(
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
        .icon(DocumentIcon)
        .child(
          S.list()
            .title("Pages")
            .items([
              createLanguageGroup(S, "signalsPage", "Signals", DocumentIcon),
              createLanguageGroup(S, "servicesPage", "Services", DocumentIcon),
              createLanguageGroup(S, "methodePage", "Méthode", DocumentIcon),
              createLanguageGroup(S, "contactPage", "Contact", DocumentIcon),
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
              createLanguageGroup(S, "navigation", "Navigation", ComposeIcon),
              createLanguageGroup(S, "header", "Header", FilterIcon),
              createLanguageGroup(S, "footer", "Footer", FilterIcon),
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
