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
