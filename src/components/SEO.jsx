import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, image, url, type = 'article' }) => {
  const siteTitle = "Autamubilismo"; // Nome padrão do seu site
  
  // Imagem padrão caso o post não tenha uma (ex: logo do site ou banner padrão)
  const defaultImage = "https://seusite.com/imagem-padrao-compartilhamento.jpg"; 
  const metaImage = image || defaultImage;

  return (
    <Helmet>
      {/* --- Tags Básicas --- */}
      <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
      <meta name="description" content={description} />

      {/* --- Open Graph (Facebook, WhatsApp, LinkedIn, etc.) --- */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:title" content={title || siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={metaImage} />
      {/* Tamanhos recomendados para melhor exibição */}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      {url && <meta property="og:url" content={url} />}

      {/* --- Twitter Cards --- */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={metaImage} />
    </Helmet>
  );
};

export default SEO; // Exportação padrão para usar com 'import SEO from ...'