import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'copyright',
      type: 'string',
      title: 'Copyright Text',
    }),
  ],
  preview: {
    select: {
      language: 'language',
    },
    prepare(selection) {
      return {
        title: `Footer (${selection.language?.toUpperCase() || 'N/A'})`,
      }
    },
  },
})
