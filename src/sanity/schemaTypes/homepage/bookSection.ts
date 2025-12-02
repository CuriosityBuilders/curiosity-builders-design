import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'bookSection',
  title: 'Book Section',
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
      name: 'quote',
      type: 'string',
      title: 'Quote',
    }),
    defineField({
      name: 'cta',
      type: 'string',
      title: 'Call to Action Text',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Book Cover',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'link',
      type: 'url',
      title: 'Purchase Link',
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
