import { defineField, defineType } from "sanity";

export default defineType({
  name: "signalsPdfs",
  title: "Signals PDFs",
  type: "document",
  fields: [
    defineField({
      name: "pdfs",
      type: "array",
      title: "PDFs",
      description: "PDFs partagés entre toutes les langues",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              type: "object",
              title: "Title",
              description: "Titre multilingue du PDF",
              fields: [
                defineField({
                  name: "fr",
                  type: "string",
                  title: "Titre (Français)",
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: "en",
                  type: "string",
                  title: "Title (English)",
                  validation: (Rule) => Rule.required(),
                }),
              ],
            }),
            defineField({
              name: "coverImage",
              type: "image",
              title: "Cover Image",
              description: "Image de couverture (première page du PDF)",
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "file",
              type: "file",
              title: "PDF File",
              description: "Fichier PDF à télécharger",
              options: {
                accept: ".pdf",
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "theme",
              type: "object",
              title: "Theme",
              description: "Thème du PDF (optionnel)",
              fields: [
                defineField({
                  name: "fr",
                  type: "string",
                  title: "Thème (Français)",
                }),
                defineField({
                  name: "en",
                  type: "string",
                  title: "Theme (English)",
                }),
              ],
            }),
            defineField({
              name: "summary",
              type: "object",
              title: "Summary",
              description: "Résumé du PDF (optionnel)",
              fields: [
                defineField({
                  name: "fr",
                  type: "string",
                  title: "Résumé (Français)",
                }),
                defineField({
                  name: "en",
                  type: "string",
                  title: "Summary (English)",
                }),
              ],
            }),
          ],
          preview: {
            select: {
              titleFr: "title.fr",
              titleEn: "title.en",
              media: "coverImage",
            },
            prepare({ titleFr, titleEn, media }) {
              return {
                title: titleFr || titleEn || "Untitled PDF",
                subtitle: titleFr && titleEn ? `${titleFr} / ${titleEn}` : "",
                media,
              };
            },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Signals PDFs",
      };
    },
  },
});
