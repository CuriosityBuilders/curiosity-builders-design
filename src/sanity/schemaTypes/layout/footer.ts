import { defineField, defineType } from "sanity";

export default defineType({
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    defineField({
      name: "language",
      type: "string",
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: "brandName",
      type: "string",
      title: "Brand Name (H2)",
      description: "Titre du logo/brand dans le footer",
      initialValue: "Curiosity.Builders",
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
      name: "tagline",
      type: "string",
      title: "Tagline",
    }),
    defineField({
      name: "copyright",
      type: "string",
      title: "Copyright Text",
    }),
    defineField({
      name: "followUs",
      type: "string",
      title: "Follow Us Text",
    }),
    defineField({
      name: "privacy",
      type: "string",
      title: "Privacy Text",
    }),
    defineField({
      name: "legalNotice",
      type: "string",
      title: "Legal Notice Text",
    }),
    defineField({
      name: "privacyPolicy",
      type: "string",
      title: "Privacy Policy Text",
    }),
    defineField({
      name: "linkedin",
      type: "object",
      title: "LinkedIn",
      fields: [
        defineField({
          name: "label",
          type: "string",
          title: "Label",
          description: "Texte affiché pour le lien LinkedIn",
          initialValue: "LinkedIn",
        }),
        defineField({
          name: "url",
          type: "url",
          title: "URL",
          description: "URL du profil LinkedIn",
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: "substack",
      type: "object",
      title: "Substack",
      fields: [
        defineField({
          name: "label",
          type: "string",
          title: "Label",
          description: "Texte affiché pour le lien Substack",
          initialValue: "Substack",
        }),
        defineField({
          name: "url",
          type: "url",
          title: "URL",
          description: "URL du profil Substack",
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ],
  preview: {
    select: {
      language: "language",
    },
    prepare(selection) {
      const flag = selection.language === "fr" ? "🇫🇷" : selection.language === "en" ? "🇬🇧" : "";
      return {
        title: ` ${flag} Footer (${selection.language?.toUpperCase() || "N/A"})`,
      };
    },
  },
});
