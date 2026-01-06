// api/og.js
import fetch from 'node-fetch';

export default async function handler(req, res) {
  const { slug, type = 'news' } = req.query;
  
  if (!slug) {
    return res.status(400).json({ error: 'Slug required' });
  }

  try {
    // Buscar dados do Sanity
    const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
    const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
    
    const query = encodeURIComponent(`
      *[_type == "${type}" && slug.current == "${slug}"][0]{
        title,
        excerpt,
        "image": image.asset->url
      }
    `);
    
    const url = `https://${projectId}.api.sanity.io/v2021-10-21/data/query/${dataset}?query=${query}`;
    const response = await fetch(url);
    const data = await response.json();
    const content = data.result;
    
    if (!content) {
      return res.status(404).json({ error: 'Not found' });
    }

    // Gerar HTML com meta tags
    const siteUrl = 'https://autamubilismo.com';
    const pageUrl = `${siteUrl}/${type}/${slug}`;
    
    const html = `
      <!DOCTYPE html>
      <html lang="pt-BR">
        <head>
          <meta charset="UTF-8" />
          <title>${content.title}</title>
          <meta name="description" content="${content.excerpt || ''}" />
          
          <!-- Open Graph -->
          <meta property="og:title" content="${content.title}" />
          <meta property="og:description" content="${content.excerpt || ''}" />
          <meta property="og:image" content="${content.image}?w=1200&h=630" />
          <meta property="og:url" content="${pageUrl}" />
          <meta property="og:type" content="article" />
          
          <!-- Twitter -->
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="${content.title}" />
          <meta name="twitter:description" content="${content.excerpt || ''}" />
          <meta name="twitter:image" content="${content.image}?w=1200&h=630" />
          
          <!-- Script do seu app -->
          <script type="module" src="/src/main.jsx"></script>
        </head>
        <body>
          <div id="root"></div>
        </body>
      </html>
    `;
    
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(html);
    
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal error' });
  }
}