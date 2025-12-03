// src/pages/News.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { sanityClient as client } from "../lib/sanityClient.js";
import { BackButton, BentoCard } from "../components/UI";

// --- Formatação bonita da data (igual Articles/Textos & Manifestos) ---
const formatDate = (dateString) => {
  if (!dateString) return "";

  const date = new Date(dateString);

  let formatted = date
    .toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
    .replace(".", "") // tira ponto de "nov."
    .toUpperCase();   // deixa igual ao layout

  return formatted;
};

const News = ({ theme }) => {
  const isLight = theme === "light";
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await client.fetch(
          `*[_type == "news"] | order(publishedAt desc){
            _id,
            title,
            "slug": slug.current,
            "imageUrl": image.asset->url,
            excerpt,
            publishedAt,
            category,
            author
          }`
        );
        setNews(data);
      } catch (err) {
        console.error("Erro ao buscar notícias do Sanity:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const openNews = (item) => {
    const slug = item.slug || item._id;
    navigate(`/news/${slug}`);
  };

  return (
    <div className="animate-in fade-in">
      <BackButton to="/" theme={theme} />

      {/* HEADER */}
      <header className="mb-8">
        <h1
          className={`text-4xl md:text-5xl font-black mb-2 ${
            isLight ? "text-gray-900" : "text-white"
          }`}
        >
          Últimas Notícias
        </h1>
        <p
          className={`max-w-2xl ${
            isLight ? "text-gray-600" : "text-gray-400"
          }`}
        >
          Atualizações do paddock, bastidores, mercado de pilotos e tudo que
          está mexendo com o grid.
        </p>
      </header>

      {loading && !news.length ? (
        <p className={isLight ? "text-gray-500" : "text-gray-400"}>
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
                
                {/* THUMB */}
                {item.imageUrl && (
                  <div className="w-full md:w-40 h-40 rounded-2xl overflow-hidden bg-gray-200 shrink-0">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}

                {/* TEXTO */}
                <div className="flex flex-col flex-1 min-w-0">
                  
                  {/* BADGE + DATA */}
                  <div className="flex items-center gap-2 text-[11px] font-bold uppercase mb-1">
                    <span
                      className={
                        isLight
                          ? "px-2 py-0.5 rounded-full bg-[#F7B8C8] text-white"
                          : "px-2 py-0.5 rounded-full border border-[#ab0eff] text-[#ab0eff]"
                      }
                    >
                      {item.category || "Notícia"}
                    </span>

                    {item.publishedAt && (
                      <span
                        className={`tracking-wider ${
                          isLight ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        {formatDate(item.publishedAt)}
                      </span>
                    )}
                  </div>

                  {/* TÍTULO */}
                  <h2
                    className={`text-lg md:text-xl font-black mb-1 line-clamp-2 ${
                      isLight ? "text-gray-900" : "text-white"
                    }`}
                  >
                    {item.title}
                  </h2>

                  {/* RESUMO */}
                  {item.excerpt && (
                    <p
                      className={`text-sm line-clamp-3 ${
                        isLight ? "text-gray-600" : "text-gray-400"
                      }`}
                    >
                      {item.excerpt}
                    </p>
                  )}

                  {/* AUTOR */}
                  {item.author && (
                    <p
                      className={`mt-auto pt-3 text-xs font-medium ${
                        isLight ? "text-gray-500" : "text-gray-500"
                      }`}
                    >
                      por {item.author}
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
