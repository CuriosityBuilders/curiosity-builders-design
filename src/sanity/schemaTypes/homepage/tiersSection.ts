import { defineField, defineType } from "sanity";

export default defineType({
  name: "tiersSection",
  title: "Tiers Section",
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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "cards",
      type: "array",
      title: "Tier Cards",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "number",
              type: "number",
              title: "Card Number",
            }),
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
              name: "description",
              type: "text",
              title: "Description",
            }),
            defineField({
              name: "tagline",
              type: "string",
              title: "Tagline",
            }),
            defineField({
              name: "cta",
              type: "string",
              title: "Call to Action Text",
            }),
            defineField({
              name: "cta1",
              type: "string",
              title: "Call to Action 1 Text",
            }),
            defineField({
              name: "cta2",
              type: "string",
              title: "Call to Action 2 Text",
            }),
            defineField({
              name: "href",
              type: "string",
              title: "Link URL",
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
        title: `${selection.title} (${selection.language?.toUpperCase() || "N/A"})`,
      };
    },
  },
});
