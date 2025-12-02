import { defineField, defineType } from "sanity";

export default defineType({
  name: "casesSection",
  title: "Cases Section",
  type: "document",
  fields: [
    defineField({
      name: "language",
      type: "string",
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: "title",
      type: "string",
      title: "Title",
    }),
    defineField({
      name: "clients",
      type: "array",
      title: "Clients",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "name",
              type: "string",
              title: "Client Name",
            }),
            defineField({
              name: "logo",
              type: "image",
              title: "Logo",
              options: {
                hotspot: true,
              },
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "press",
      type: "array",
      title: "Press",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "name",
              type: "string",
              title: "Press Name",
            }),
            defineField({
              name: "logo",
              type: "image",
              title: "Logo",
              options: {
                hotspot: true,
              },
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      language: "language",
    },
    prepare(selection) {
      return {
        title: `${selection.title || "Cases"} (${selection.language?.toUpperCase() || "N/A"})`,
      };
    },
  },
});
