import { defineField, defineType } from "sanity";

export default defineType({
  name: "navigation",
  title: "Navigation",
  type: "document",
  fields: [
    defineField({
      name: "language",
      type: "string",
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: "items",
      type: "array",
      title: "Navigation Items",
      description: "Drag and drop to reorder items",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "label",
              type: "string",
              title: "Label",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "href",
              type: "string",
              title: "URL",
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: "label",
              subtitle: "href",
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      language: "language",
    },
    prepare(selection) {
      return {
        title: `Navigation (${selection.language?.toUpperCase() || "N/A"})`,
      };
    },
  },
});
