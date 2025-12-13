import {
  DocumentTextIcon,
  SearchIcon,
  SparklesIcon,
  UsersIcon,
} from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "contactPage",
  title: "Contact Page",
  type: "document",
  groups: [
    { name: "seo", title: "SEO", icon: SearchIcon },
    { name: "hero", title: "Hero", icon: SparklesIcon, default: true },
    { name: "contactSection", title: "Contact Section", icon: UsersIcon },
    { name: "unsure", title: "Unsure", icon: DocumentTextIcon },
    { name: "form", title: "Form", icon: DocumentTextIcon },
    { name: "finalCta", title: "Final CTA", icon: DocumentTextIcon },
  ],
  fields: [
    defineField({
      name: "language",
      type: "string",
      readOnly: true,
      hidden: true,
    }),
    // SEO Fields
    defineField({
      name: "seoTitle",
      type: "string",
      title: "SEO Title",
      description:
        "Page title for SEO (appears in browser tabs and search results). If empty, uses the hero title. (Optimal length is 50-60 characters)",
      group: "seo",
    }),
    defineField({
      name: "seoDescription",
      type: "text",
      title: "SEO Description",
      description:
        "Meta description for SEO (appears in search results). If empty, uses a default description. (150-160 characters recommended)",
      group: "seo",
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
      group: "contactSection",
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
            defineField({
              name: "url",
              type: "url",
              title: "Newsletter URL",
              description:
                "URL pour rejoindre la newsletter (ex: https://substack.com/@curiositybuilders)",
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "unsure",
      type: "object",
      title: "Unsure Section",
      group: "unsure",
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
          name: "card1Title",
          type: "string",
          title: "Card 1 Title",
          description:
            "Titre de la card Newsletter (ex: Recevez nos insights et analyses)",
        }),
        defineField({
          name: "button1",
          type: "string",
          title: "Button 1 Text",
          description: "Texte du bouton (ex: Join newsletter)",
        }),
        defineField({
          name: "button1Url",
          type: "url",
          title: "Button 1 URL",
          description: "URL du bouton 1",
        }),
        defineField({
          name: "card2Title",
          type: "string",
          title: "Card 2 Title",
          description:
            "Titre de la card Rendez-vous (ex: Discutons de votre projet)",
        }),
        defineField({
          name: "button2",
          type: "string",
          title: "Button 2 Text",
          description: "Texte du bouton (ex: Book a call)",
        }),
        defineField({
          name: "button2Url",
          type: "url",
          title: "Button 2 URL",
          description: "URL du bouton 2",
        }),
        defineField({
          name: "card3Title",
          type: "string",
          title: "Card 3 Title",
          description:
            "Titre de la card Brochure (ex: Recevez notre documentation)",
        }),
        defineField({
          name: "button3",
          type: "string",
          title: "Button 3 Text",
        }),
        defineField({
          name: "card4Title",
          type: "string",
          title: "Card 4 Title",
          description:
            "Titre de la card Extrait (ex: Découvrez un extrait de notre livre)",
        }),
        defineField({
          name: "button4",
          type: "string",
          title: "Button 4 Text",
          description: "Texte du bouton (ex: Extrait du livre)",
        }),
        defineField({
          name: "button4Pdf",
          type: "file",
          title: "Button 4 PDF",
          description:
            "Fichier PDF de l'extrait du livre à télécharger (configurer pour les 2 langues car il n'est pas partagé)",
          options: {
            accept: ".pdf",
          },
        }),
      ],
    }),
    defineField({
      name: "form",
      type: "object",
      title: "Form Section",
      group: "form",
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
      group: "finalCta",
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
      const flag =
        selection.language === "fr"
          ? "🇫🇷"
          : selection.language === "en"
            ? "🇬🇧"
            : "";
      return {
        title: ` ${flag} Contact Page (${selection.language?.toUpperCase() || "N/A"})`,
      };
    },
  },
});
