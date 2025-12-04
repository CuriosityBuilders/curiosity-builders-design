import { defineField, defineType } from "sanity";

export default defineType({
  name: "logos",
  title: "Logos",
  type: "document",
  fields: [
    defineField({
      name: "clients",
      type: "array",
      title: "Client Logos",
      description: "Logos des clients (partagés entre toutes les langues)",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "name",
              type: "string",
              title: "Client Name",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "logo",
              type: "image",
              title: "Logo",
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: "name",
              media: "logo",
            },
          },
        },
      ],
    }),
    defineField({
      name: "press",
      type: "array",
      title: "Press Logos",
      description: "Logos de la presse (partagés entre toutes les langues)",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "name",
              type: "string",
              title: "Press Name",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "logo",
              type: "image",
              title: "Logo",
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: "name",
              media: "logo",
            },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Logos (Clients & Press)",
      };
    },
  },
});
