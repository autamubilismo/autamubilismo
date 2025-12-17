import { createClient } from '@sanity/client'

const sanityClient = createClient({
  projectId: 'c7nvssn2',
  dataset: 'production',
  apiVersion: '2025-01-01',
  useCdn: true,
})

export default async function handler(req, res) {
  const { slug } = req.query
  
  try {
    const article = await sanityClient.fetch(
      `*[_type == "article" && slug.current == $slug][0]{
        title,
        excerpt,
        "imageUrl": coalesce(seo.ogImage.asset->url, image.asset->url),
        "slug": slug.current,
        "metaTitle": seo.metaTitle,
        "metaDescription": seo.metaDescription
      }`,
      { slug }
    )
    
    if (!article) {
      return res.status(404).send('Article not found')
    }

    const ogTitle = (article.metaTitle || article.title || 'Autamubilismo').replace(/"/g, '&quot;')
    const ogDescription = (article.metaDescription || article.excerpt || '').replace(/"/g, '&quot;')
    const ogImage = article.imageUrl || ''
    
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.send(`<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${ogTitle} - Autamubilismo</title>
    
    <meta property="og:title" content="${ogTitle}" />
    <meta property="og:description" content="${ogDescription}" />
    <meta property="og:image" content="${ogImage}" />
    <meta property="og:url" content="https://www.autamubilismo.com/articles/${article.slug}" />
    <meta property="og:type" content="article" />
    <meta property="og:site_name" content="Autamubilismo" />
    
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${ogTitle}" />
    <meta name="twitter:description" content="${ogDescription}" />
    <meta name="twitter:image" content="${ogImage}" />
    
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" crossorigin src="/assets/index.js"></script>
  </body>
</html>`)
  } catch (error) {
    console.error('Erro ao buscar artigo:', error)
    return res.status(500).send(`Error: ${error.message}`)
  }
}