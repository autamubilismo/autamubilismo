export const seo = {
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    { name: 'metaTitle', title: 'Titulo SEO', type: 'string' },
    { name: 'metaDescription', title: 'Descricao SEO', type: 'text' },
    {
      name: 'ogImage',
      title: 'Imagem OG',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', title: 'Texto alternativo', type: 'string' }],
    },
  ],
};
