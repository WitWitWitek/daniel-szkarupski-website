import {defineField, Rule} from 'sanity'
import {PlayIcon} from '@sanity/icons'
import {getExtension, getImageDimensions, getImageAsset} from '@sanity/asset-utils'

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
      title: 'Obrazk główny',
      description: 'W celu optymalizacji obrazków należy użyc strny https://tinypng.com/',
      validation: (Rule) =>
        Rule.custom((value) => {
          if (!value) {
            return true
          }

          const filetype = getExtension(value.asset?._ref ?? '')

          if (
            filetype !== 'jpg' &&
            filetype !== 'jpeg' &&
            filetype !== 'png' &&
            filetype !== 'webp'
          ) {
            return 'Obrazem musi mieć rozszerzenie JPG/JPEG/PNG/WEBP'
          }

          const {width} = getImageDimensions(value.asset?._ref ?? '')

          if (width > 2048) {
            return 'Obrazek może mieć maksymalną szerokość 2048'
          }

          return true
        }),
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
          description: 'W celu optymalizacji obrazków należy użyc strny https://tinypng.com/',
          options: {hotspot: true},
          validation: (Rule) =>
            Rule.custom((value) => {
              if (!value) {
                return true
              }

              const filetype = getExtension(value.asset?._ref ?? '')

              if (
                filetype !== 'jpg' &&
                filetype !== 'jpeg' &&
                filetype !== 'png' &&
                filetype !== 'webp'
              ) {
                return 'Obrazem musi mieć rozszerzenie JPG/JPEG/PNG/WEBP'
              }

              const {width} = getImageDimensions(value.asset?._ref ?? '')

              if (width > 2048) {
                return 'Obrazek może mieć maksymalną szerokość 2048'
              }

              return true
            }),
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Tytuł obrazu (wymagany)',
              validation: (Rule) => Rule.required(),
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'gallery',
      type: 'array',
      title: 'Galeria',
      of: [
        {
          type: 'image',
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Tytuł obrazu (wymagany)',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    }),
  ],
}
