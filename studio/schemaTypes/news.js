const sharedBodyField = {
  name: 'body',
  title: 'Conteudo',
  type: 'array',
  of: [
    {
      type: 'block',
      // Estilos de bloco (aplica ao bloco inteiro - parágrafo)
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
      ],
      // Listas
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' },
      ],
      // Marcações inline (aplica só ao texto selecionado)
      marks: {
        // Decoradores (simples)
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Code', value: 'code' },
          { title: 'Underline', value: 'underline' },
          { title: 'Strike', value: 'strike-through' },
        ],
        // Anotações (com dados)
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'Link',
            fields: [
              {
                name: 'href',
                type: 'url',
                title: 'URL',
                validation: Rule => Rule.uri({
                  allowRelative: true,
                  scheme: ['http', 'https', 'mailto', 'tel']
                })
              },
              {
                name: 'blank',
                type: 'boolean',
                title: 'Abrir em nova aba',
                initialValue: true
              }
            ]
          }
        ]
      }
    },
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
  {
    name: 'content',
    title: 'Conteudo (Legacy - nao usar)',
    type: 'array',
    hidden: true,
    of: [{ type: 'block' }],
  },
  {
    name: 'sources',
    title: 'Fontes',
    type: 'array',
    of: [
      {
        type: 'object',
        fields: [
          { name: 'label', title: 'Nome da fonte', type: 'string' },
          {
            name: 'url',
            title: 'Link da fonte',
            type: 'url',
            validation: (Rule) => Rule.uri({ allowRelative: false, scheme: ['http', 'https'] }),
          },
        ],
      },
    ],
  },
  { name: 'sourceLabel', title: 'Nome da fonte (legacy)', type: 'string', hidden: true },
  {
    name: 'sourceUrl',
    title: 'Link da fonte (legacy)',
    type: 'url',
    hidden: true,
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
