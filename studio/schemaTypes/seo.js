export const seo = {
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    {
      name: 'metaTitle',
      title: 'Titulo SEO (Meta Title)',
      type: 'string',
      description: 'Titulo que aparece nos resultados de busca'
    },
    {
      name: 'metaDescription',
      title: 'Descricao SEO (Meta Description)',
      type: 'text',
      description: 'Descricao que aparece nos resultados de busca'
    },
    {
      name: 'ogTitle',
      title: 'Titulo OG (Open Graph)',
      type: 'string',
      description: 'Titulo quando compartilhado em redes sociais (Facebook, WhatsApp, etc.)'
    },
    {
      name: 'ogDescription',
      title: 'Descricao OG (Open Graph)',
      type: 'text',
      description: 'Descricao quando compartilhado em redes sociais'
    },
    {
      name: 'ogImage',
      title: 'Imagem OG (Open Graph)',
      type: 'image',
      options: { hotspot: true },
      description: 'Imagem quando compartilhado em redes sociais (recomendado: 1200x630px)',
      fields: [{ name: 'alt', title: 'Texto alternativo', type: 'string' }],
    },
  ],
};
