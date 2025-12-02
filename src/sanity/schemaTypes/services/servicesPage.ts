import { defineField, defineType } from "sanity";

export default defineType({
  name: "servicesPage",
  title: "Services Page",
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
          name: "body",
          type: "array",
          title: "Body",
          of: [
            {
              type: "block",
            },
          ],
        }),
        defineField({
          name: "button1",
          type: "string",
          title: "Button 1 Text",
        }),
        defineField({
          name: "button2",
          type: "string",
          title: "Button 2 Text",
        }),
        defineField({
          name: "button3",
          type: "string",
          title: "Button 3 Text",
        }),
      ],
    }),
    defineField({
      name: "overview",
      type: "object",
      title: "Overview Section",
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
        defineField({
          name: "cta",
          type: "string",
          title: "Call to Action Text",
        }),
      ],
    }),
    defineField({
      name: "diagnostics",
      type: "object",
      title: "Diagnostics Section",
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
          name: "bullets",
          type: "array",
          title: "Bullet Points",
          of: [{ type: "string" }],
        }),
        defineField({
          name: "deliverablesTitle",
          type: "string",
          title: "Deliverables Title",
        }),
        defineField({
          name: "cards",
          type: "array",
          title: "Deliverable Cards",
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
      name: "rndStudio",
      type: "object",
      title: "R&D Studio Section",
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
          name: "deliverablesTitle",
          type: "string",
          title: "Deliverables Title",
        }),
        defineField({
          name: "cards",
          type: "array",
          title: "Deliverable Cards",
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
      name: "loop",
      type: "object",
      title: "Loop Section",
      fields: [
        defineField({
          name: "text",
          type: "string",
          title: "Loop Text",
        }),
        defineField({
          name: "quote",
          type: "string",
          title: "Quote",
        }),
        defineField({
          name: "author",
          type: "string",
          title: "Author",
        }),
        defineField({
          name: "subtext",
          type: "array",
          title: "Subtext",
          of: [{ type: "block" }],
        }),
      ],
    }),
    defineField({
      name: "ventureDev",
      type: "object",
      title: "Venture Development Section",
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
          name: "deliverablesTitle",
          type: "string",
          title: "Deliverables Title",
        }),
        defineField({
          name: "cards",
          type: "array",
          title: "Deliverable Cards",
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
          name: "button1",
          type: "string",
          title: "Button 1 Text",
        }),
        defineField({
          name: "button2",
          type: "string",
          title: "Button 2 Text",
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
      return {
        title: `${selection.title || "Services Page"} (${selection.language?.toUpperCase() || "N/A"})`,
      };
    },
  },
});
