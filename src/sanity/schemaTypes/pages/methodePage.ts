import { defineField, defineType } from "sanity";

export default defineType({
  name: "methodePage",
  title: "Méthode Page",
  type: "document",
  fields: [
    defineField({
      name: "language",
      type: "string",
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: "hero",
      type: "object",
      title: "Hero Section",
      fields: [
        defineField({
          name: "title",
          type: "string",
          title: "Title",
        }),
        defineField({
          name: "body1",
          type: "array",
          title: "Body 1",
          of: [
            {
              type: "block",
            },
          ],
        }),
        defineField({
          name: "body2",
          type: "array",
          title: "Body 2",
          of: [
            {
              type: "block",
            },
          ],
        }),
      ],
    }),
    defineField({
      name: "curiosityLoop",
      type: "object",
      title: "Curiosity Loop Section",
      fields: [
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
          name: "steps",
          type: "array",
          title: "Steps",
          of: [
            {
              type: "object",
              fields: [
                defineField({
                  name: "number",
                  type: "number",
                  title: "Step Number",
                }),
                defineField({
                  name: "title",
                  type: "string",
                  title: "Title",
                }),
                defineField({
                  name: "description",
                  type: "array",
                  title: "Description",
                  of: [{ type: "block" }],
                }),
                defineField({
                  name: "tools",
                  type: "string",
                  title: "Tools",
                }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: "impact",
      type: "object",
      title: "Impact Section",
      fields: [
        defineField({
          name: "title",
          type: "string",
          title: "Title",
        }),
        defineField({
          name: "body",
          type: "array",
          title: "Body",
          of: [{ type: "block" }],
        }),
      ],
    }),
    defineField({
      name: "singularity",
      type: "object",
      title: "Singularity Section",
      fields: [
        defineField({
          name: "title",
          type: "string",
          title: "Title",
        }),
        defineField({
          name: "body1",
          type: "array",
          title: "Body 1",
          of: [{ type: "block" }],
        }),
        defineField({
          name: "body2",
          type: "array",
          title: "Body 2",
          of: [{ type: "block" }],
        }),
        defineField({
          name: "body3",
          type: "array",
          title: "Body 3",
          of: [{ type: "block" }],
        }),
        defineField({
          name: "cards",
          type: "array",
          title: "Cards",
          of: [
            {
              type: "object",
              fields: [
                defineField({
                  name: "title",
                  type: "string",
                  title: "Title",
                }),
                defineField({
                  name: "description",
                  type: "string",
                  title: "Description",
                }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: "proofs",
      type: "object",
      title: "Proofs Section",
      fields: [
        defineField({
          name: "title",
          type: "string",
          title: "Title",
        }),
        defineField({
          name: "quotes",
          type: "array",
          title: "Quotes",
          of: [
            {
              type: "object",
              fields: [
                defineField({
                  name: "text",
                  type: "string",
                  title: "Quote Text",
                }),
                defineField({
                  name: "author",
                  type: "string",
                  title: "Author",
                }),
              ],
            },
          ],
        }),
        defineField({
          name: "button",
          type: "string",
          title: "Button Text",
        }),
      ],
    }),
    defineField({
      name: "finalCta",
      type: "object",
      title: "Final CTA Section",
      fields: [
        defineField({
          name: "title",
          type: "string",
          title: "Title",
        }),
        defineField({
          name: "body",
          type: "array",
          title: "Body",
          of: [{ type: "block" }],
        }),
        defineField({
          name: "button",
          type: "string",
          title: "Button Text",
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "hero.title",
      language: "language",
    },
    prepare(selection) {
      const flag = selection.language === "fr" ? "🇫🇷" : selection.language === "en" ? "🇬🇧" : "";
      return {
        title: ` ${flag} Méthode Page (${selection.language?.toUpperCase() || "N/A"})`,
      };
    },
  },
});
