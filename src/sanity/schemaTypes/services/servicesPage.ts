import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'servicesPage',
  title: 'Services Page',
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
        defineField({
          name: 'button1',
          type: 'string',
          title: 'Button 1 Text',
        }),
        defineField({
          name: 'button2',
          type: 'string',
          title: 'Button 2 Text',
        }),
        defineField({
          name: 'button3',
          type: 'string',
          title: 'Button 3 Text',
        }),
      ],
    }),
    defineField({
      name: 'overview',
      type: 'object',
      title: 'Overview Section',
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
        defineField({
          name: 'cta',
          type: 'string',
          title: 'Call to Action Text',
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
        title: `${selection.title || 'Services Page'} (${selection.language?.toUpperCase() || 'N/A'})`,
      }
    },
  },
})
