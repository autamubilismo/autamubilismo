// src/lib/queries.js

// 🔹 Notas:
// - usa `publishedAt` (quando tiver) ou `_createdAt` como fallback
// - já devolve `image` como URL pronta
// - já devolve `slug` como string simples

export const NEWS_WIDGET_QUERY = `
  *[_type == "news"] 
    | order(coalesce(publishedAt, _createdAt) desc)[0...5]{
      _id,
      title,
      // ISO datetime – você pode formatar no front depois
      "time": coalesce(publishedAt, _createdAt),
      "image": image.asset->url,
      "slug": slug.current
    }
`;

// Lista de artigos para a página Articles.jsx
export const ARTICLES_LIST_QUERY = `
  *[_type == "article"]
    | order(coalesce(publishedAt, _createdAt) desc){
      _id,
      title,
      excerpt,
      category,
      author,
      "time": coalesce(publishedAt, _createdAt),
      "image": image.asset->url,
      "slug": slug.current
    }
`;

// Detalhe de um artigo pelo slug (ArticleDetail.jsx)
export const ARTICLE_DETAIL_QUERY = `
  *[_type == "article" && slug.current == $slug][0]{
    _id,
    title,
    category,
    author,
    "time": coalesce(publishedAt, _createdAt),
    "image": image.asset->url,
    slug,
    body
  }
`;

// Manifesto específico (pra caixa "Correndo como uma garota.")
export const MANIFESTO_POST_QUERY = `
  *[_type == "article" && slug.current == "manifesto"][0]{
    _id,
    title,
    category,
    author,
    "time": coalesce(publishedAt, _createdAt),
    "image": image.asset->url,
    slug,
    body
  }
`;
