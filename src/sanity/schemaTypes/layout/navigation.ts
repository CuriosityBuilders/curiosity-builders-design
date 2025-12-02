import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  fields: [
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'items',
      type: 'array',
      title: 'Navigation Items',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              type: 'string',
              title: 'Label',
            }),
            defineField({
              name: 'href',
              type: 'string',
              title: 'URL',
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      language: 'language',
    },
    prepare(selection) {
      return {
        title: `Navigation (${selection.language?.toUpperCase() || 'N/A'})`,
      }
    },
  },
})
