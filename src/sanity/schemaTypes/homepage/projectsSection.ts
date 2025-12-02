import { defineField, defineType } from "sanity";

export default defineType({
  name: "projectsSection",
  title: "Projects Section",
  type: "document",
  fields: [
    defineField({
      name: "language",
      type: "string",
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: "images",
      type: "array",
      title: "Project Images",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
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
        title: `Projects (${selection.language?.toUpperCase() || "N/A"})`,
      };
    },
  },
});
