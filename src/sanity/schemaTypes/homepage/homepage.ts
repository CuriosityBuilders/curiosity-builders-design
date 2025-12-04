import { defineField, defineType } from "sanity";

export default defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    defineField({
      name: "language",
      type: "string",
      readOnly: true,
      hidden: true,
    }),
    // Hero Section
    defineField({
      name: "hero",
      type: "object",
      title: "Hero Section",
      fields: [
        defineField({
          name: "title",
          type: "string",
          title: "Title",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "subtitleLine1",
          type: "string",
          title: "Subtitle Line 1",
        }),
        defineField({
          name: "subtitleLine2",
          type: "string",
          title: "Subtitle Line 2",
        }),
        defineField({
          name: "cta",
          type: "string",
          title: "Call to Action Text",
        }),
      ],
    }),
    // Intro Section
    defineField({
      name: "intro",
      type: "object",
      title: "Intro Section",
      fields: [
        defineField({
          name: "title",
          type: "string",
          title: "Title",
          validation: (Rule) => Rule.required(),
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
          name: "cta1",
          type: "string",
          title: "Call to Action 1 Text",
        }),
        defineField({
          name: "cta2",
          type: "string",
          title: "Call to Action 2 Text",
        }),
      ],
    }),
    // Mission Section
    defineField({
      name: "mission",
      type: "object",
      title: "Mission Section",
      fields: [
        defineField({
          name: "title",
          type: "string",
          title: "Title",
          validation: (Rule) => Rule.required(),
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
          name: "tagline",
          type: "string",
          title: "Tagline",
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
      ],
    }),
    // Tiers Section
    defineField({
      name: "tiers",
      type: "object",
      title: "Tiers Section",
      fields: [
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
    }),
    // Key Metrics Section
    defineField({
      name: "keyMetrics",
      type: "object",
      title: "Key Metrics Section",
      fields: [
        defineField({
          name: "metrics",
          type: "array",
          title: "Metrics",
          of: [
            {
              type: "object",
              fields: [
                defineField({
                  name: "number",
                  type: "number",
                  title: "Number",
                  validation: (Rule) => Rule.required().min(0),
                }),
                defineField({
                  name: "prefix",
                  type: "string",
                  title: "Prefix",
                  description: "Optional prefix (e.g., '+', '%', etc.)",
                  options: {
                    list: [
                      { title: "None", value: "" },
                      { title: "Plus (+)", value: "+" },
                      { title: "Percent (%)", value: "%" },
                      { title: "Euro (€)", value: "€" },
                      { title: "Dollar ($)", value: "$" },
                    ],
                  },
                }),
                defineField({
                  name: "label",
                  type: "string",
                  title: "Label",
                  validation: (Rule) => Rule.required(),
                }),
              ],
              preview: {
                select: {
                  number: "number",
                  prefix: "prefix",
                  label: "label",
                },
                prepare({ number, prefix, label }) {
                  return {
                    title: `${prefix || ""}${number || 0}`,
                    subtitle: label || "No label",
                  };
                },
              },
            },
          ],
        }),
      ],
    }),
    // Projects Section
    defineField({
      name: "projects",
      type: "object",
      title: "Projects Section",
      fields: [
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
    }),
    // Book Section
    defineField({
      name: "book",
      type: "object",
      title: "Book Section",
      fields: [
        defineField({
          name: "title",
          type: "string",
          title: "Title",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "description",
          type: "array",
          title: "Description",
          of: [
            {
              type: "block",
            },
          ],
        }),
        defineField({
          name: "quote",
          type: "string",
          title: "Quote",
        }),
        defineField({
          name: "cta",
          type: "string",
          title: "Call to Action Text",
        }),
        defineField({
          name: "imageRef",
          type: "reference",
          title: "Book Cover",
          description:
            "Référence vers l'image partagée (même image pour toutes les langues)",
          to: [{ type: "bookImage" }],
          weak: true,
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "link",
          type: "url",
          title: "Purchase Link",
        }),
      ],
    }),
    // Cases Section
    defineField({
      name: "cases",
      type: "object",
      title: "Cases Section",
      fields: [
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
    }),
    // Footer CTA Section
    defineField({
      name: "footerCTA",
      type: "object",
      title: "Footer CTA Section",
      fields: [
        defineField({
          name: "title",
          type: "string",
          title: "Title",
          validation: (Rule) => Rule.required(),
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
          name: "cta3",
          type: "string",
          title: "Call to Action 3 Text",
        }),
      ],
    }),
    // Newsletter Section
    defineField({
      name: "newsletter",
      type: "object",
      title: "Newsletter Section",
      fields: [
        defineField({
          name: "title",
          type: "string",
          title: "Title",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "description",
          type: "array",
          title: "Description",
          of: [
            {
              type: "block",
            },
          ],
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
          name: "link",
          type: "url",
          title: "Newsletter Link",
        }),
      ],
    }),
  ],
  preview: {
    select: {
      language: "language",
    },
    prepare(selection) {
      const getIcon = () => {
        if (selection.language === "fr") return "🇫🇷";
        if (selection.language === "en") return "🇬🇧";
        return "";
      };
      return {
        title: `Homepage (${selection.language?.toUpperCase() || "N/A"})`,
        icon: () => getIcon(),
      };
    },
  },
});
