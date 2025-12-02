import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'keyMetricsSection',
  title: 'Key Metrics Section',
  type: 'document',
  fields: [
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'metrics',
      type: 'array',
      title: 'Metrics',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'value',
              type: 'string',
              title: 'Value',
            }),
            defineField({
              name: 'label',
              type: 'string',
              title: 'Label',
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
        title: `Key Metrics (${selection.language?.toUpperCase() || 'N/A'})`,
      }
    },
  },
})
