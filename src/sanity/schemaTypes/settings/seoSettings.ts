import { SearchIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "seoSettings",
  title: "SEO Settings",
  type: "document",
  icon: SearchIcon,
  fields: [
    defineField({
      name: "title",
      type: "object",
      title: "Page Title",
      description:
        "The title that appears in browser tabs and search results. (Optimal length is 50-60 characters)",
      fields: [
        defineField({
          name: "fr",
          type: "string",
          title: "Titre (Français)",
          validation: (Rule) => Rule.required().max(60),
        }),
        defineField({
          name: "en",
          type: "string",
          title: "Title (English)",
          validation: (Rule) => Rule.required().max(60),
        }),
      ],
    }),
    defineField({
      name: "description",
      type: "object",
      title: "Meta Description",
      description:
        "A brief description of the site (150-160 characters recommended)",
      fields: [
        defineField({
          name: "fr",
          type: "text",
          title: "Description (Français)",
          validation: (Rule) => Rule.required().max(160),
        }),
        defineField({
          name: "en",
          type: "text",
          title: "Description (English)",
          validation: (Rule) => Rule.required().max(160),
        }),
      ],
    }),
    defineField({
      name: "ogImage",
      type: "image",
      title: "Open Graph Image",
      description:
        "Image displayed when sharing on social media (recommended: 1200x630px). Shared across all languages.",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          type: "object",
          title: "Alt Text",
          description: "Alternative text for the image",
          fields: [
            defineField({
              name: "fr",
              type: "string",
              title: "Alt Text (Français)",
            }),
            defineField({
              name: "en",
              type: "string",
              title: "Alt Text (English)",
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "SEO Settings",
        subtitle: "Global SEO configuration for all languages",
      };
    },
  },
});
