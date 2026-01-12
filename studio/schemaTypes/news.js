const sharedBodyField = {
  name: 'body',
  title: 'Conteudo',
  type: 'array',
  of: [
    { type: 'block' },
    {
      type: 'image',
      options: { hotspot: true },
      fields: [
        { name: 'alt', title: 'Texto alternativo', type: 'string' },
        { name: 'caption', title: 'Legenda', type: 'string' },
      ],
    },
  ],
};

const sharedFields = [
  { name: 'title', title: 'Titulo', type: 'string' },
  {
    name: 'slug',
    title: 'Slug',
    type: 'slug',
    options: { source: 'title', maxLength: 96 },
  },
  { name: 'excerpt', title: 'Resumo', type: 'text' },
  { name: 'publishedAt', title: 'Data de publicacao', type: 'datetime' },
  { name: 'author', title: 'Autor', type: 'string' },
  { name: 'category', title: 'Categoria', type: 'string' },
  {
    name: 'image',
    title: 'Imagem',
    type: 'image',
    options: { hotspot: true },
    fields: [{ name: 'alt', title: 'Texto alternativo', type: 'string' }],
  },
  {
    name: 'mainImage',
    title: 'Imagem principal',
    type: 'image',
    options: { hotspot: true },
    fields: [{ name: 'alt', title: 'Texto alternativo', type: 'string' }],
  },
  sharedBodyField,
  { name: 'sourceLabel', title: 'Nome da fonte', type: 'string' },
  {
    name: 'sourceUrl',
    title: 'Link da fonte',
    type: 'url',
    validation: (Rule) => Rule.uri({ allowRelative: false, scheme: ['http', 'https'] }),
  },
  { name: 'seo', title: 'SEO', type: 'seo' },
];

export const news = {
  name: 'news',
  title: 'Noticias',
  type: 'document',
  fields: sharedFields,
};
