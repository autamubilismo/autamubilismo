// src/pages/Articles.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BackButton, BentoCard } from '../components/UI';
import { client } from '../sanityClient';
import { ARTICLES_DATA, MANIFESTO_POST } from '../data';

const ArticlesPage = ({ theme }) => {
  const isLight = theme === 'light';
  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // --- Fetch do Sanity ---
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await client.fetch(
          `*[_type == "article"] | order(publishedAt desc){
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
        setPosts(data);
      } catch (err) {
        console.error("Erro ao buscar posts do Sanity:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // --- Fallback local para artigos + manifesto ---
  const fallbackPosts = [...ARTICLES_DATA, MANIFESTO_POST].map((item) => ({
    _id: item.id,
    slug: item.id,
    title: item.title,
    imageUrl: item.image,
    excerpt: item.excerpt,
    category: item.category || item.categoryLabel || "Editorial",
    author: item.author || "Tamu",
    publishedAt: item.time || null,
    contentHtml: item.content,
  }));

  const list = posts && posts.length ? posts : fallbackPosts;

  const handleOpen = (post) => {
    const slug = post.slug || post._id;
    navigate(`/articles/${slug}`);
  };

  return (
    <div className="animate-in fade-in">
      <BackButton to="/" theme={theme} />

      <header className="mb-8">
        <h1
          className={`text-4xl md:text-5xl font-black mb-2 ${
            isLight ? "text-gray-900" : "text-white"
          }`}
        >
          Textos & Manifestos
        </h1>
        <p
          className={`max-w-2xl ${
            isLight ? "text-gray-600" : "text-gray-400"
          }`}
        >
          Análises, opiniões, surtos controlados e tudo que não cabe em um
          simples tweet.
        </p>
      </header>

      {loading && !list.length ? (
        <p className={isLight ? "text-gray-500" : "text-gray-400"}>
          Carregando posts…
        </p>
      ) : (
        <div className="grid gap-4 md:gap-6 md:grid-cols-2">
          {list.map((post) => (
            <BentoCard
              key={post._id}
              theme={theme}
              className="cursor-pointer group"
              onClick={() => handleOpen(post)}
            >
              <div className="flex flex-col md:flex-row gap-4 h-full">
                
                {/* --- Thumbnail (AGORA FUNCIONA) --- */}
                {post.imageUrl && (
                  <div className="w-full md:w-40 h-40 rounded-2xl overflow-hidden bg-gray-200 shrink-0">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}

                {/* --- Texto do Card --- */}
                <div className="flex flex-col flex-1 min-w-0">
                  
                  {/* Categoria + Data */}
                  <div className="flex items-center gap-2 text-[11px] font-bold uppercase mb-1">
                    <span
                      className={
                        isLight
                          ? "px-2 py-0.5 rounded-full bg-[#F7B8C8] text-white"
                          : "px-2 py-0.5 rounded-full border border-[#ab0eff] text-[#ab0eff]"
                      }
                    >
                      {post.category || "Artigo"}
                    </span>

                    {/* --- Data formatada --- */}
                    {post.publishedAt && (
                      <span
                        className={
                          isLight ? "text-gray-400" : "text-gray-500"
                        }
                      >
                        {new Date(post.publishedAt).toLocaleDateString(
                          "pt-BR",
                          {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          }
                        )}
                      </span>
                    )}
                  </div>

                  {/* Título */}
                  <h2
                    className={`text-lg md:text-xl font-black mb-1 line-clamp-2 ${
                      isLight ? "text-gray-900" : "text-white"
                    }`}
                  >
                    {post.title}
                  </h2>

                  {/* Resumo */}
                  {post.excerpt && (
                    <p
                      className={`text-sm line-clamp-3 ${
                        isLight ? "text-gray-600" : "text-gray-400"
                      }`}
                    >
                      {post.excerpt}
                    </p>
                  )}

                  {/* Autor */}
                  {post.author && (
                    <p
                      className={`mt-auto pt-3 text-xs font-medium ${
                        isLight ? "text-gray-500" : "text-gray-500"
                      }`}
                    >
                      por {post.author}
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

export default ArticlesPage;
