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
      options: {
        hotspot: true,
      },
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

    // ⭐ NOVOS CAMPOS DE FONTE ⭐
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

    defineField({
      name: "body",
      title: "Conteúdo",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    }),
  ],
});

export default news;
