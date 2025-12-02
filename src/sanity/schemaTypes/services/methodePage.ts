import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'methodePage',
  title: 'Méthode Page',
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
          name: 'body1',
          type: 'array',
          title: 'Body 1',
          of: [
            {
              type: 'block',
            },
          ],
        }),
        defineField({
          name: 'body2',
          type: 'array',
          title: 'Body 2',
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
        title: `${selection.title || 'Méthode Page'} (${selection.language?.toUpperCase() || 'N/A'})`,
      }
    },
  },
})
