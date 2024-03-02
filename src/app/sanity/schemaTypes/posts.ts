import {defineField, Rule} from 'sanity'
import {PlayIcon} from '@sanity/icons'

export default {
  name: 'posts',
  type: 'document',
  title: 'Artykuły',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Tytuł',
      validation: (Rule) => Rule.required().max(50),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Link do artykułu',
      options: {
        source: 'title',
      },
    }),
    defineField({
      title: 'Data publikacji',
      type: 'datetime',
      name: 'releaseDate',
    }),
    defineField({
      name: 'coverImage',
      type: 'image',
      title: 'Cover Image',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Opis',
      validation: (Rule) => Rule.min(1).max(156),
    }),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Treść',
      of: [
        {
          type: 'block',
        },
        defineField({
          type: 'object',
          name: 'youtube',
          icon: PlayIcon,
          fields: [
            defineField({
              name: 'url',
              type: 'url',
              title: 'YouTube wideo URL',
            }),
          ],
        }),
        defineField({
          type: 'image',
          name: 'image',
          options: {hotspot: true},
          fields: [
            {
              name: 'alt',
              type: 'string',
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'gallery',
      type: 'array',
      title: 'Galeria',
      of: [{type: 'image'}],
    }),
  ],
}
