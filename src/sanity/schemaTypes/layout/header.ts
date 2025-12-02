import { defineField, defineType } from "sanity";

export default defineType({
  name: "header",
  title: "Header",
  type: "document",
  fields: [
    defineField({
      name: "language",
      type: "string",
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: "logo",
      type: "image",
      title: "Logo",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alt Text",
          description: "Alternative text for the logo",
        }),
      ],
    }),
  ],
  preview: {
    select: {
      language: "language",
    },
    prepare(selection) {
      return {
        title: `Header (${selection.language?.toUpperCase() || "N/A"})`,
      };
    },
  },
});
