// src/pages/News.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// IMPORT CORRETO DO SANITY
import { sanityClient as client } from '../lib/sanityClient.js';

import { BackButton, BentoCard } from '../components/UI';

const News = ({ theme }) => {
  const isLight = theme === 'light';
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    client.fetch(
      `*[_type == "news"] | order(publishedAt desc){
        _id,
        title,
        "slug": slug.current,
        excerpt,
        "image": image.asset->url,
        category,
        author,
        publishedAt
      }`
    )
    .then(setNews)
    .finally(() => setLoading(false));
  }, []);

  const openNews = (item) => {
    navigate(`/news/${item.slug}`);
  };

  return (
    <div className="animate-in fade-in">
      <BackButton to="/" theme={theme} />

      <h1 className={`text-4xl font-black mb-6 ${
        isLight ? 'text-gray-900' : 'text-white'
      }`}>
        Últimas Notícias
      </h1>

      {loading ? (
        <p className={isLight ? 'text-gray-700' : 'text-gray-300'}>
          Carregando notícias…
        </p>
      ) : (
        <div className="grid gap-4 md:gap-6 md:grid-cols-2">
          {news.map((item) => (
            <BentoCard
              key={item._id}
              theme={theme}
              onClick={() => openNews(item)}
              className="cursor-pointer group"
            >
              <div className="flex flex-col md:flex-row gap-4 h-full">
                
                {item.image && (
                  <div className="w-full md:w-40 h-40 rounded-2xl overflow-hidden bg-gray-200 shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}

                <div className="flex flex-col flex-1 min-w-0">
                  <h2 className={`text-lg md:text-xl font-black mb-1 line-clamp-2 ${
                    isLight ? 'text-gray-900' : 'text-white'
                  }`}>
                    {item.title}
                  </h2>

                  {item.excerpt && (
                    <p className={`text-sm line-clamp-3 ${
                      isLight ? 'text-gray-600' : 'text-gray-400'
                    }`}>
                      {item.excerpt}
                    </p>
                  )}

                  {item.publishedAt && (
                    <p className={`mt-auto pt-3 text-xs font-medium ${
                      isLight ? 'text-gray-500' : 'text-gray-500'
                    }`}>
                      {new Date(item.publishedAt).toLocaleDateString('pt-BR')}
                    </p>
                  )}
                </div>
              </div>
            </BentoCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default News;
