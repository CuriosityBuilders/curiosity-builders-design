import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'newsletterSection',
  title: 'Newsletter Section',
  type: 'document',
  fields: [
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'array',
      title: 'Description',
      of: [
        {
          type: 'block',
        },
      ],
    }),
    defineField({
      name: 'cta1',
      type: 'string',
      title: 'Call to Action 1 Text',
    }),
    defineField({
      name: 'cta2',
      type: 'string',
      title: 'Call to Action 2 Text',
    }),
    defineField({
      name: 'link',
      type: 'url',
      title: 'Newsletter Link',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      language: 'language',
    },
    prepare(selection) {
      return {
        title: `${selection.title} (${selection.language?.toUpperCase() || 'N/A'})`,
      }
    },
  },
})
