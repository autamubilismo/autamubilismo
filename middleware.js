import { NextResponse } from 'next/server';

export const config = {
  matcher: ['/news/:slug*', '/articles/:slug*'],
};

export async function middleware(request) {
  const { pathname } = request.nextUrl;
  const userAgent = request.headers.get('user-agent') || '';
  
  // Detectar se é um bot de rede social
  const isBot = /facebookexternalhit|twitterbot|whatsapp|linkedinbot|telegrambot|slackbot/i.test(userAgent);
  
  if (!isBot) {
    // Usuário normal: deixa passar
    return NextResponse.next();
  }
  
  // É um bot: buscar dados e retornar HTML com meta tags
  try {
    const slug = pathname.split('/').pop();
    const type = pathname.includes('/news') ? 'news' : 'article';
    
    // Buscar dados do Sanity
    const sanityData = await fetchSanityData(slug, type);
    
    if (!sanityData) {
      return NextResponse.next();
    }
    
    // Gerar HTML com meta tags
    const html = generateOGHtml(sanityData, pathname);
    
    return new NextResponse(html, {
      headers: {
        'content-type': 'text/html',
      },
    });
  } catch (error) {
    console.error('Erro no middleware:', error);
    return NextResponse.next();
  }
}

// Função para buscar dados do Sanity
async function fetchSanityData(slug, type) {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
  
  const query = encodeURIComponent(`
    *[_type == "${type}" && slug.current == "${slug}"][0]{
      title,
      excerpt,
      "image": image.asset->url,
      publishedAt
    }
  `);
  
  const url = `https://${projectId}.api.sanity.io/v2021-10-21/data/query/${dataset}?query=${query}`;
  
  const response = await fetch(url);
  const data = await response.json();
  
  return data.result;
}

// Função para gerar HTML com OG tags
function generateOGHtml(data, pathname) {
  const siteUrl = 'https://autamubilismo.com'; // ← MUDE AQUI
  const url = `${siteUrl}${pathname}`;
  
  return `
    <!DOCTYPE html>
    <html lang="pt-BR">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        <!-- Title -->
        <title>${data.title}</title>
        <meta name="description" content="${data.excerpt || ''}" />
        
        <!-- Open Graph -->
        <meta property="og:type" content="article" />
        <meta property="og:title" content="${data.title}" />
        <meta property="og:description" content="${data.excerpt || ''}" />
        <meta property="og:image" content="${data.image}?w=1200&h=630&fit=crop" />
        <meta property="og:url" content="${url}" />
        <meta property="og:site_name" content="Autamubilismo" />
        <meta property="og:locale" content="pt_BR" />
        
        <!-- Twitter Card -->
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="${data.title}" />
        <meta name="twitter:description" content="${data.excerpt || ''}" />
        <meta name="twitter:image" content="${data.image}?w=1200&h=630&fit=crop" />
        
        <!-- Redirect para o app real -->
        <meta http-equiv="refresh" content="0;url=${url}" />
      </head>
      <body>
        <h1>${data.title}</h1>
        <p>Redirecionando...</p>
      </body>
    </html>
  `;
}