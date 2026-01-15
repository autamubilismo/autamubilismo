import React from 'react';
import { Helmet } from 'react-helmet';

/**
 * Componente SEO para Meta Tags Dinâmicas
 * COMPATÍVEL COM REACT 19
 * 
 * Uso:
 * <SEO 
 *   title="Título da Notícia"
 *   description="Descrição curta"
 *   image="https://url-da-imagem.jpg"
 *   url="https://autamubilismo.com/news/slug"
 *   type="article"
 * />
 */
const SEO = ({ 
  title, 
  description, 
  image, 
  url, 
  type = 'article',
  publishedTime,
  author,
  category 
}) => {
  // ⚠️ MUDE AQUI - Configure seus valores
  const siteUrl = 'https://autamubilismo.com';
  const siteName = 'Autamubilismo';
  const twitterHandle = '@autamubilismo';
  
  // Valores padrão
  const defaultTitle = 'Autamubilismo - F1 com Estilo';
  const defaultDescription = 'As últimas notícias de Fórmula 1 com aquela vibe única.';
  const defaultImage = `${siteUrl}/og-default-v2.png`;
  
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: image || defaultImage,
    url: url || siteUrl,
  };

  return (
    <Helmet>
      {/* ===== BASIC META TAGS ===== */}
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      
      {/* ===== OPEN GRAPH (Facebook, WhatsApp, LinkedIn) ===== */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="pt_BR" />
      
      {/* Dimensões da imagem OG */}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={seo.title} />
      
      {/* ===== TWITTER CARD ===== */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      
      {/* ===== ARTICLE SPECIFIC ===== */}
      {type === 'article' && (
        <>
          {publishedTime && (
            <meta property="article:published_time" content={publishedTime} />
          )}
          {author && (
            <meta property="article:author" content={author} />
          )}
          {category && (
            <meta property="article:section" content={category} />
          )}
          <meta property="article:tag" content="Fórmula 1" />
          <meta property="article:tag" content="F1" />
        </>
      )}
      
      {/* ===== CANONICAL URL ===== */}
      <link rel="canonical" href={seo.url} />
      
      {/* ===== ROBOTS ===== */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
    </Helmet>
  );
};

export default SEO;