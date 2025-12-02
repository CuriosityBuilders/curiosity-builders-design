import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'signalsPage',
  title: 'Signals Page',
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
          name: 'subtitle',
          type: 'string',
          title: 'Subtitle',
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
    defineField({
      name: 'cards',
      type: 'array',
      title: 'Cards',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              type: 'string',
              title: 'Title',
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
              name: 'tagline',
              type: 'string',
              title: 'Tagline',
            }),
          ],
        },
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
        title: `${selection.title || 'Signals Page'} (${selection.language?.toUpperCase() || 'N/A'})`,
      }
    },
  },
})
