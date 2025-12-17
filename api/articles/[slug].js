// api/articles/[slug].js
import { createClient } from '@sanity/client'

const sanityClient = createClient({
  projectId: 'c7nvssn2',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-05-03'
})

export default async function handler(req, res) {
  const { slug } = req.query
  
  const article = await sanityClient.fetch(
    `*[_type == "article" && slug.current == $slug][0]{
      title,
      excerpt,
      "imageUrl": mainImage.asset->url,
      "slug": slug.current
    }`,
    { slug }
  )
  
  if (!article) {
    return res.status(404).send('Article not found')
  }
  
  res.setHeader('Content-Type', 'text/html')
  res.send(`
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${article.title} - Autamubilismo</title>
    
    <!-- Open Graph -->
    <meta property="og:title" content="${article.title}" />
    <meta property="og:description" content="${article.excerpt}" />
    <meta property="og:image" content="${article.imageUrl}" />
    <meta property="og:url" content="https://autamubilismo.com/articles/${article.slug}" />
    <meta property="og:type" content="article" />
    <meta property="og:site_name" content="Autamubilismo" />
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${article.title}" />
    <meta name="twitter:description" content="${article.excerpt}" />
    <meta name="twitter:image" content="${article.imageUrl}" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
  `)
}