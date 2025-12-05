import { defineField, defineType } from "sanity";

export default defineType({
  name: "logo",
  title: "Logo",
  type: "document",
  fields: [
    defineField({
      name: "logo",
      type: "image",
      title: "Logo",
      description: "Logo displayed in the header (shared for all languages)",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alt Text",
          description: "Alternative text for the logo",
          initialValue: "Curiosity.Builders",
        }),
      ],
    }),
  ],
  preview: {
    select: {
      logo: "logo",
    },
    prepare(selection) {
      return {
        title: "Logo",
        subtitle: "Header logo (shared for all languages)",
      };
    },
  },
});
