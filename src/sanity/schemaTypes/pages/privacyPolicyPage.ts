import { DocumentTextIcon, SparklesIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "privacyPolicyPage",
  title: "Privacy Policy Page",
  type: "document",
  groups: [
    { name: "hero", title: "Hero", icon: SparklesIcon, default: true },
    { name: "content", title: "Content", icon: DocumentTextIcon },
  ],
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
      group: "hero",
      fields: [
        defineField({
          name: "title",
          type: "string",
          title: "Titre",
        }),
        defineField({
          name: "subtitle",
          type: "string",
          title: "Sous-titre",
        }),
      ],
    }),
    defineField({
      name: "content",
      type: "array",
      title: "Contenu",
      group: "content",
      of: [
        {
          type: "block",
          marks: {
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [
                  {
                    name: "href",
                    type: "url",
                    title: "URL",
                  },
                ],
              },
            ],
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              { title: "Code", value: "code" },
            ],
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      language: "language",
      title: "hero.title",
    },
    prepare(selection) {
      const flag = selection.language === "fr" ? "🇫🇷" : selection.language === "en" ? "🇬🇧" : "";
      return {
        title: ` ${flag} Privacy Policy (${selection.language?.toUpperCase() || "N/A"})`,
        subtitle: selection.title || "Politique de confidentialité",
      };
    },
  },
});
