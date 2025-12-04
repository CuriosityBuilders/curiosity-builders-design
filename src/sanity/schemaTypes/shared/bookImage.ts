import { defineField, defineType } from "sanity";

export default defineType({
  name: "bookImage",
  title: "Book Image",
  type: "document",
  fields: [
    defineField({
      name: "image",
      type: "image",
      title: "Book Cover",
      description: "Image partagée entre toutes les langues",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      media: "image",
    },
    prepare({ media }) {
      return {
        title: "Book Cover Image",
        media,
      };
    },
  },
});
