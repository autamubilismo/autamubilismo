// schemaTypes/article.ts
import { defineType, defineField } from 'sanity'
import { ComposeIcon } from '@sanity/icons'

export default defineType({
  name: 'article',
  title: 'Artigo / Editorial',
  type: 'document',
  icon: ComposeIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (rule) => rule.required().min(10),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Categoria',
      type: 'string',
      options: {
        list: [
          { title: 'Análise', value: 'analise' },
          { title: 'Opinião', value: 'opiniao' },
          { title: 'Crônica', value: 'cronica' },
          { title: 'Psicologia', value: 'psicologia' },
          { title: 'Estética', value: 'estetica' },
        ],
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Data de publicação',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Autor(a)',
      type: 'string',
      initialValue: 'Tamu',
    }),
    defineField({
      name: 'image',
      title: 'Imagem de capa',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Texto alternativo',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'excerpt',
      title: 'Resumo / Lide',
      type: 'text',
      rows: 3,
      description: 'Primeiro parágrafo de impacto, que aparece na home.',
    }),
    defineField({
      name: 'content',
      title: 'Conteúdo',
      type: 'blockContent',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'featured',
      title: 'Destaque editorial?',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'image',
    },
  },
  orderings: [
    {
      title: 'Mais recentes',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
})
