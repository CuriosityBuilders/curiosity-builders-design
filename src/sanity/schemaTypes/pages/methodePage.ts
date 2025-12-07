import {
  DocumentTextIcon,
  SearchIcon,
  SparklesIcon,
  StackIcon,
  TargetIcon,
} from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "methodePage",
  title: "Méthode Page",
  type: "document",
  groups: [
    { name: "seo", title: "SEO", icon: SearchIcon },
    { name: "hero", title: "Hero", icon: SparklesIcon, default: true },
    { name: "curiosityLoop", title: "Curiosity Loop", icon: TargetIcon },
    { name: "impact", title: "Impact", icon: DocumentTextIcon },
    { name: "singularity", title: "Singularity", icon: StackIcon },
    { name: "proofs", title: "Proofs", icon: DocumentTextIcon },
    { name: "finalCta", title: "Final CTA", icon: DocumentTextIcon },
  ],
  fields: [
    defineField({
      name: "language",
      type: "string",
      readOnly: true,
      hidden: true,
    }),
    // SEO Fields
    defineField({
      name: "seoTitle",
      type: "string",
      title: "SEO Title",
      description:
        "Page title for SEO (appears in browser tabs and search results). If empty, uses the hero title. (Optimal length is 50-60 characters)",
      group: "seo",
    }),
    defineField({
      name: "seoDescription",
      type: "text",
      title: "SEO Description",
      description:
        "Meta description for SEO (appears in search results). If empty, uses a default description. (150-160 characters recommended)",
      group: "seo",
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
          name: "body1",
          type: "array",
          title: "Body 1",
          of: [
            {
              type: "block",
            },
          ],
        }),
        defineField({
          name: "body2",
          type: "array",
          title: "Body 2",
          of: [
            {
              type: "block",
            },
          ],
        }),
      ],
    }),
    defineField({
      name: "curiosityLoop",
      type: "object",
      title: "Curiosity Loop Section",
      group: "curiosityLoop",
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
          name: "steps",
          type: "array",
          title: "Steps",
          of: [
            {
              type: "object",
              fields: [
                defineField({
                  name: "number",
                  type: "number",
                  title: "Step Number",
                }),
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
                  name: "tools",
                  type: "string",
                  title: "Tools",
                }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: "impact",
      type: "object",
      title: "Impact Section",
      group: "impact",
      fields: [
        defineField({
          name: "title",
          type: "string",
          title: "Title",
        }),
        defineField({
          name: "body",
          type: "array",
          title: "Body",
          of: [{ type: "block" }],
        }),
      ],
    }),
    defineField({
      name: "singularity",
      type: "object",
      title: "Singularity Section",
      group: "singularity",
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
          name: "body3",
          type: "array",
          title: "Body 3",
          of: [{ type: "block" }],
        }),
        defineField({
          name: "cards",
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
                  type: "string",
                  title: "Description",
                }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: "proofs",
      type: "object",
      title: "Proofs Section",
      group: "proofs",
      fields: [
        defineField({
          name: "title",
          type: "string",
          title: "Title",
        }),
        defineField({
          name: "quotes",
          type: "array",
          title: "Quotes",
          of: [
            {
              type: "object",
              fields: [
                defineField({
                  name: "text",
                  type: "string",
                  title: "Quote Text",
                }),
                defineField({
                  name: "author",
                  type: "string",
                  title: "Author",
                }),
              ],
            },
          ],
        }),
        defineField({
          name: "button",
          type: "string",
          title: "Button Text",
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
        defineField({
          name: "logosRef",
          type: "reference",
          title: "Logos",
          description:
            "Reference to the shared logos document (clients & press)",
          to: [{ type: "logos" }],
          weak: true,
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
        title: ` ${flag} Méthode Page (${selection.language?.toUpperCase() || "N/A"})`,
      };
    },
  },
});
