import {defineField} from 'sanity'

export default {
  name: 'about',
  type: 'document',
  title: 'Sekcja O mnie',
  fields: [
    defineField({
      name: 'content',
      type: 'array',
      title: 'Treść sekcji O mnie',
      of: [
        {
          type: 'block',
        },
      ],
    }),
  ],
}
