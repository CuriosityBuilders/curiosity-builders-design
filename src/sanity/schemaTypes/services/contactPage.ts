import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  fields: [
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'hero',
      type: 'object',
      title: 'Hero Section',
      fields: [
        defineField({
          name: 'title',
          type: 'string',
          title: 'Title',
        }),
        defineField({
          name: 'body',
          type: 'array',
          title: 'Body',
          of: [
            {
              type: 'block',
            },
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'hero.title',
      language: 'language',
    },
    prepare(selection) {
      return {
        title: `${selection.title || 'Contact Page'} (${selection.language?.toUpperCase() || 'N/A'})`,
      }
    },
  },
})
