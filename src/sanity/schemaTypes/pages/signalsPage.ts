import {
  BookIcon,
  DocumentTextIcon,
  ImageIcon,
  SparklesIcon,
  StackIcon,
} from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "signalsPage",
  title: "Signals Page",
  type: "document",
  groups: [
    { name: "hero", title: "Hero", icon: SparklesIcon, default: true },
    { name: "cards", title: "Cards", icon: StackIcon },
    { name: "studies", title: "Studies", icon: ImageIcon },
    { name: "book", title: "Book", icon: BookIcon },
    { name: "finalCta", title: "Final CTA", icon: DocumentTextIcon },
  ],
  fields: [
    defineField({
      name: "language",
      type: "string",
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: "hero",
      type: "object",
      title: "Hero Section",
      group: "hero",
      fields: [
        defineField({
          name: "title",
          type: "string",
          title: "Title",
        }),
        defineField({
          name: "subtitle",
          type: "string",
          title: "Subtitle",
        }),
        defineField({
          name: "body",
          type: "array",
          title: "Body",
          of: [
            {
              type: "block",
            },
          ],
        }),
      ],
    }),
    defineField({
      name: "cards",
      type: "object",
      title: "Cards Section",
      group: "cards",
      fields: [
        defineField({
          name: "items",
          type: "array",
          title: "Cards",
          of: [
            {
              type: "object",
              fields: [
                defineField({
                  name: "title",
                  type: "string",
                  title: "Title",
                }),
                defineField({
                  name: "description",
                  type: "array",
                  title: "Description",
                  of: [
                    {
                      type: "block",
                    },
                  ],
                }),
                defineField({
                  name: "tagline",
                  type: "string",
                  title: "Tagline",
                }),
              ],
            },
          ],
        }),
        defineField({
          name: "button1",
          type: "string",
          title: "Button 1 Text",
        }),
        defineField({
          name: "button2",
          type: "string",
          title: "Button 2 Text",
        }),
      ],
    }),
    defineField({
      name: "studies",
      type: "object",
      title: "Studies Section",
      group: "studies",
      fields: [
        defineField({
          name: "title",
          type: "string",
          title: "Title",
        }),
        defineField({
          name: "body1",
          type: "array",
          title: "Body 1",
          of: [{ type: "block" }],
        }),
        defineField({
          name: "body2",
          type: "array",
          title: "Body 2",
          of: [{ type: "block" }],
        }),
        defineField({
          name: "exampleTitle",
          type: "string",
          title: "Example Title",
        }),
        defineField({
          name: "exampleTheme",
          type: "string",
          title: "Example Theme",
        }),
        defineField({
          name: "exampleSummary",
          type: "string",
          title: "Example Summary",
        }),
        defineField({
          name: "downloadButton",
          type: "string",
          title: "Download Button Text",
        }),
        defineField({
          name: "cta",
          type: "string",
          title: "Call to Action Text",
        }),
        defineField({
          name: "pdfs",
          type: "reference",
          title: "PDFs",
          description: "Référence au document contenant les PDFs téléchargeables",
          to: [{ type: "signalsPdfs" }],
        }),
      ],
    }),
    defineField({
      name: "book",
      type: "object",
      title: "Book Section",
      group: "book",
      fields: [
        defineField({
          name: "title",
          type: "string",
          title: "Title",
        }),
        defineField({
          name: "description",
          type: "array",
          title: "Description",
          of: [{ type: "block" }],
        }),
        defineField({
          name: "quote",
          type: "string",
          title: "Quote",
        }),
        defineField({
          name: "cta",
          type: "string",
          title: "Call to Action Text",
        }),
      ],
    }),
    defineField({
      name: "finalCta",
      type: "object",
      title: "Final CTA Section",
      group: "finalCta",
      fields: [
        defineField({
          name: "title",
          type: "string",
          title: "Title",
        }),
        defineField({
          name: "titleEmphasis",
          type: "string",
          title: "Title Emphasis",
        }),
        defineField({
          name: "body",
          type: "array",
          title: "Body",
          of: [{ type: "block" }],
        }),
        defineField({
          name: "button",
          type: "string",
          title: "Button Text",
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "hero.title",
      language: "language",
    },
    prepare(selection) {
      const flag =
        selection.language === "fr"
          ? "🇫🇷"
          : selection.language === "en"
            ? "🇬🇧"
            : "";
      return {
        title: ` ${flag} Signals Page (${selection.language?.toUpperCase() || "N/A"})`,
      };
    },
  },
});
