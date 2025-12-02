import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'heroSection',
  title: 'Hero Section',
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
      name: 'subtitleLine1',
      type: 'string',
      title: 'Subtitle Line 1',
    }),
    defineField({
      name: 'subtitleLine2',
      type: 'string',
      title: 'Subtitle Line 2',
    }),
    defineField({
      name: 'cta',
      type: 'string',
      title: 'Call to Action Text',
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
