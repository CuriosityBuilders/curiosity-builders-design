import { defineField, defineType } from "sanity";

export default defineType({
  name: "projectImages",
  title: "Project Images",
  type: "document",
  fields: [
    defineField({
      name: "images",
      type: "array",
      title: "Project Images",
      description: "Project images with metadata (shared across all languages)",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "image",
              type: "image",
              title: "Image",
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "title",
              type: "string",
              title: "Title",
              description: "Title displayed on the image",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "alt",
              type: "string",
              title: "Alt Text",
              description: "Alternative text for accessibility",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "objectPosition",
              type: "string",
              title: "Object Position",
              description:
                "CSS object-position (e.g., 'top', 'center', 'bottom')",
              options: {
                list: [
                  { title: "Center", value: "center" },
                  { title: "Top", value: "top" },
                  { title: "Bottom", value: "bottom" },
                  { title: "Left", value: "left" },
                  { title: "Right", value: "right" },
                ],
              },
              initialValue: "center",
            }),
            defineField({
              name: "captionFr",
              type: "string",
              title: "Légende (Français)",
              description: "Légende subtile en français (optionnel)",
            }),
            defineField({
              name: "captionEn",
              type: "string",
              title: "Caption (English)",
              description: "Subtle caption in English (optional)",
            }),
          ],
          preview: {
            select: {
              title: "title",
              media: "image",
            },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Project Images",
      };
    },
  },
});
