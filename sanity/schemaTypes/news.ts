import { defineType, defineField } from "sanity";

const news = defineType({
  name: "news",
  title: "Notícia",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "excerpt",
      title: "Resumo curto",
      type: "text",
      rows: 3,
    }),

    defineField({
      name: "image",
      title: "Imagem de capa",
      type: "image",
      options: { hotspot: true },
    }),

    defineField({
      name: "category",
      title: "Categoria",
      type: "string",
    }),

    defineField({
      name: "author",
      title: "Autor",
      type: "string",
      initialValue: "Tamu",
    }),

    defineField({
      name: "publishedAt",
      title: "Publicado em",
      type: "datetime",
    }),

    defineField({
      name: "sourceLabel",
      title: "Fonte (ex: Fórmula 1, Motorsport...)",
      type: "string",
    }),

    defineField({
      name: "sourceUrl",
      title: "Link da fonte",
      type: "url",
    }),

    // ✅ SEO / OG (Open Graph)
    defineField({
      name: "seo",
      title: "SEO / Open Graph",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({
          name: "metaTitle",
          title: "Título OG/SEO (opcional)",
          type: "string",
          description: "Se vazio, usamos o Título do post.",
        }),
        defineField({
          name: "metaDescription",
          title: "Descrição OG/SEO (opcional)",
          type: "text",
          rows: 3,
          description: "Se vazio, usamos o Resumo curto.",
        }),
        defineField({
          name: "ogImage",
          title: "Imagem OG (opcional)",
          type: "image",
          options: { hotspot: true },
          description: "Se vazio, usamos a Imagem de capa.",
        }),
      ],
    }),

    defineField({
      name: "body",
      title: "Conteúdo",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    }),
  ],
});

export default news;
