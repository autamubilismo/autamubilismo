'use client';

import dynamic from 'next/dynamic';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';

const NextStudio = dynamic(
  () => import('next-sanity/studio').then((mod) => mod.NextStudio),
  { ssr: false }
);

// Schema SEO
const seo = {
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

// Schema News
const news = {
  name: 'news',
  title: 'Noticias',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titulo',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: (Rule) => Rule.required()
    },
    {
      name: 'excerpt',
      title: 'Resumo',
      type: 'text',
      rows: 4
    },
    {
      name: 'publishedAt',
      title: 'Data de Publicacao',
      type: 'datetime'
    },
    {
      name: 'author',
      title: 'Autor',
      type: 'string'
    },
    {
      name: 'category',
      title: 'Categoria',
      type: 'string',
      options: {
        list: [
          { title: 'Formula 1', value: 'f1' },
          { title: 'Formula E', value: 'fe' },
          { title: 'Formula 2', value: 'f2' },
          { title: 'Formula 3', value: 'f3' },
          { title: 'Stock Car', value: 'stockcar' },
          { title: 'Endurance', value: 'endurance' },
          { title: 'WEC', value: 'wec' },
          { title: 'Le Mans', value: 'lemans' },
          { title: 'Rally', value: 'rally' },
          { title: 'WRC', value: 'wrc' },
          { title: 'IndyCar', value: 'indycar' },
          { title: 'NASCAR', value: 'nascar' },
          { title: 'MotoGP', value: 'motogp' },
          { title: 'F-Trucks', value: 'ftrucks' },
          { title: 'Kart', value: 'kart' },
          { title: 'Outros', value: 'outros' }
        ]
      }
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      },
      description: 'Tags para facilitar a busca (ex: verstappen, ferrari, brasileiro)'
    },
    {
      name: 'mainImage',
      title: 'Imagem Principal',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          title: 'Texto Alternativo',
          type: 'string'
        }
      ]
    },
    {
      name: 'body',
      title: 'Conteudo',
      type: 'array',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image',
          fields: [
            {
              name: 'alt',
              title: 'Texto Alternativo',
              type: 'string'
            }
          ]
        }
      ]
    },
    {
      name: 'sources',
      title: 'Fontes',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Nome da Fonte',
              type: 'string'
            },
            {
              name: 'url',
              title: 'Link da Fonte',
              type: 'url',
              description: 'Link para a materia original'
            }
          ]
        }
      ]
    },
    {
      name: 'sourceLabel',
      title: 'Nome da Fonte (legacy)',
      type: 'string',
      hidden: true
    },
    {
      name: 'sourceUrl',
      title: 'Link da Fonte (legacy)',
      type: 'url',
      hidden: true
    },
    {
      name: 'seo',
      title: 'SEO & Open Graph',
      type: 'seo'
    }
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author',
      media: 'mainImage'
    }
  }
};

// Schema Article (mesma estrutura de News)
const article = {
  name: 'article',
  title: 'Artigo',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titulo',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: (Rule) => Rule.required()
    },
    {
      name: 'excerpt',
      title: 'Resumo',
      type: 'text',
      rows: 4
    },
    {
      name: 'publishedAt',
      title: 'Data de Publicacao',
      type: 'datetime'
    },
    {
      name: 'author',
      title: 'Autor',
      type: 'string'
    },
    {
      name: 'category',
      title: 'Categoria',
      type: 'string',
      options: {
        list: [
          { title: 'Formula 1', value: 'f1' },
          { title: 'Formula E', value: 'fe' },
          { title: 'Formula 2', value: 'f2' },
          { title: 'Formula 3', value: 'f3' },
          { title: 'Stock Car', value: 'stockcar' },
          { title: 'Endurance', value: 'endurance' },
          { title: 'WEC', value: 'wec' },
          { title: 'Le Mans', value: 'lemans' },
          { title: 'Rally', value: 'rally' },
          { title: 'WRC', value: 'wrc' },
          { title: 'IndyCar', value: 'indycar' },
          { title: 'NASCAR', value: 'nascar' },
          { title: 'MotoGP', value: 'motogp' },
          { title: 'F-Trucks', value: 'ftrucks' },
          { title: 'Kart', value: 'kart' },
          { title: 'Outros', value: 'outros' }
        ]
      }
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      },
      description: 'Tags para facilitar a busca (ex: verstappen, ferrari, brasileiro)'
    },
    {
      name: 'mainImage',
      title: 'Imagem Principal',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          title: 'Texto Alternativo',
          type: 'string'
        }
      ]
    },
    {
      name: 'body',
      title: 'Conteudo',
      type: 'array',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image',
          fields: [
            {
              name: 'alt',
              title: 'Texto Alternativo',
              type: 'string'
            }
          ]
        }
      ]
    },
    {
      name: 'sources',
      title: 'Fontes',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Nome da Fonte',
              type: 'string'
            },
            {
              name: 'url',
              title: 'Link da Fonte',
              type: 'url',
              description: 'Link para a materia original'
            }
          ]
        }
      ]
    },
    {
      name: 'sourceLabel',
      title: 'Nome da Fonte (legacy)',
      type: 'string',
      hidden: true
    },
    {
      name: 'sourceUrl',
      title: 'Link da Fonte (legacy)',
      type: 'url',
      hidden: true
    },
    {
      name: 'seo',
      title: 'SEO & Open Graph',
      type: 'seo'
    }
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author',
      media: 'mainImage'
    }
  }
};

const config = {
  name: 'autamubilismo',
  title: 'Autamubilismo',
  projectId: 'c7nvssn2',
  dataset: 'production',
  basePath: '/studio',
  plugins: [
    structureTool(),
    visionTool()
  ],
  schema: {
    types: [seo, news, article],
  },
};

export default function StudioPage() {
  return <NextStudio config={config} />;
}
