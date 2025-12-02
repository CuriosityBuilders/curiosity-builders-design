import { defineField, defineType } from "sanity";

export default defineType({
  name: "contactPage",
  title: "Contact Page",
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
      ],
    }),
    defineField({
      name: "contactSection",
      type: "object",
      title: "Contact Section",
      fields: [
        defineField({
          name: "workWithUs",
          type: "object",
          title: "Work With Us",
          fields: [
            defineField({
              name: "title",
              type: "string",
              title: "Title",
            }),
            defineField({
              name: "body",
              type: "string",
              title: "Body",
            }),
            defineField({
              name: "email",
              type: "string",
              title: "Email",
            }),
          ],
        }),
        defineField({
          name: "press",
          type: "object",
          title: "Press",
          fields: [
            defineField({
              name: "title",
              type: "string",
              title: "Title",
            }),
            defineField({
              name: "body",
              type: "string",
              title: "Body",
            }),
            defineField({
              name: "email",
              type: "string",
              title: "Email",
            }),
          ],
        }),
        defineField({
          name: "newsletter",
          type: "object",
          title: "Newsletter",
          fields: [
            defineField({
              name: "title",
              type: "string",
              title: "Title",
            }),
            defineField({
              name: "body",
              type: "string",
              title: "Body",
            }),
            defineField({
              name: "link",
              type: "string",
              title: "Link Text",
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "unsure",
      type: "object",
      title: "Unsure Section",
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
      name: "form",
      type: "object",
      title: "Form Section",
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
        defineField({
          name: "brochureLabel",
          type: "string",
          title: "Brochure Label",
        }),
        defineField({
          name: "bookExtractLabel",
          type: "string",
          title: "Book Extract Label",
        }),
        defineField({
          name: "bookTitle",
          type: "string",
          title: "Book Title",
        }),
        defineField({
          name: "nameLabel",
          type: "string",
          title: "Name Label",
        }),
        defineField({
          name: "organizationLabel",
          type: "string",
          title: "Organization Label",
        }),
        defineField({
          name: "emailLabel",
          type: "string",
          title: "Email Label",
        }),
        defineField({
          name: "interestLabel",
          type: "string",
          title: "Interest Label",
        }),
        defineField({
          name: "interestPlaceholder",
          type: "string",
          title: "Interest Placeholder",
        }),
        defineField({
          name: "consentLabel",
          type: "string",
          title: "Consent Label",
        }),
        defineField({
          name: "submitButton",
          type: "string",
          title: "Submit Button Text",
        }),
        defineField({
          name: "successMessage",
          type: "string",
          title: "Success Message",
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
      const flag = selection.language === "fr" ? "🇫🇷" : selection.language === "en" ? "🇬🇧" : "";
      return {
        title: ` ${flag} Contact Page (${selection.language?.toUpperCase() || "N/A"})`,
      };
    },
  },
});
