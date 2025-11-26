// src/pages/ArticleDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, User, Clock, Share2 } from 'lucide-react';
import { PortableText } from "@portabletext/react";

import { BackButton } from '../components/UI';
import { client } from '../sanityClient';
import { NEWS_DATA, ARTICLES_DATA, MANIFESTO_POST } from '../data';

const ArticleDetail = ({ theme = "light" }) => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  const isLight = theme === "light";

  // Cores dinâmicas
  const textPrimary = isLight ? 'text-gray-800' : 'text-white';
  const textSecondary = isLight ? 'text-gray-500' : 'text-gray-400';
  const accentColor = isLight ? 'text-[#D8C4F0]' : 'text-[#fe88dd]';
  const cardBg = isLight ? 'bg-white shadow-xl' : 'bg-[#121217] border border-[#333]';
  const badgeBg = isLight ? 'bg-[#F7B8C8] text-white' : 'bg-[#fe88dd]/20 text-[#fe88dd] border border-[#fe88dd]/50';

  // Busca no Sanity
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await client.fetch(
          `*[_type == "article" && slug.current == $slug][0]{
            _id,
            title,
            "slug": slug.current,
            "image": image.asset->url,
            excerpt,
            category,
            author,
            publishedAt,
            content[]{
              ...,
              _type == "image" => {
                ...,
                "url": asset->url
              }
            }
          }`,
          { slug: id }
        );

        console.log("DEBUG SANITY >>>", data);  // 🔥 ADICIONA ISSO

      if (data) {
        setPost(data);
        return;
      }
      
        if (data) {
          setPost(data);
          return;
        }

        // fallback local
        const allLocal = [...NEWS_DATA, ...ARTICLES_DATA, MANIFESTO_POST];
        const found = allLocal.find((a) => a.id === id);

        if (found) {
          setPost({
            ...found,
            image: found.image,
            contentHtml: found.content,
          });
        }
      } catch (err) {
        console.error("Erro ao carregar artigo:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  // Loading
  if (loading) {
    return (
      <div className={`min-h-screen flex flex-col items-center justify-center ${isLight ? 'bg-[#FFF5F8]' : 'bg-[#050505]'}`}>
         <div className={`animate-spin rounded-full h-12 w-12 border-t-4 ${isLight ? 'border-[#F7B8C8]' : 'border-[#fe88dd]'}`}></div>
         <p className={`mt-4 font-bold ${textSecondary}`}>Carregando artigo...</p>
      </div>
    );
  }

  // Não encontrado
  if (!post) {
    return (
      <div className={`min-h-screen flex flex-col items-center justify-center text-center px-6 ${isLight ? 'bg-[#FFF5F8]' : 'bg-[#050505]'}`}>
        <BackButton to="/articles" theme={theme} />
        <h1 className={`text-3xl font-black mb-2 ${textPrimary}`}>
          Artigo não encontrado. 📄
        </h1>
        <p className={textSecondary}>Esse artigo pode ter sido removido ou o link está incorreto.</p>
      </div>
    );
  }

  return (
    <div className={`min-h-screen pb-20 transition-colors duration-500 ${isLight ? 'bg-[#FFF5F8]' : 'bg-[#050505]'}`}>

      <div className="max-w-4xl mx-auto px-6 pt-8 animate-in fade-in slide-in-from-bottom-8 duration-700">

        <BackButton to="/articles" theme={theme} />

        {/* --- HEADER --- */}
        <header className="mb-8 text-center md:text-left mt-4">

          {/* Categoria + infos */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
            <span className={`inline-block px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest w-fit ${badgeBg}`}>
              {post.category || "Editorial"}
            </span>

            <div className={`flex items-center gap-4 text-xs font-bold uppercase tracking-wide ${textSecondary}`}>
                {post.publishedAt && (
                    <span className="flex items-center gap-1">
                      <Calendar size={14}/> 
                      {new Date(post.publishedAt).toLocaleDateString('pt-BR')}
                    </span>
                )}
                <span className="flex items-center gap-1">
                  <Clock size={14}/> 7 min leitura
                </span>
            </div>
          </div>

          {/* Título */}
          <h1 
            className={`text-4xl md:text-6xl font-black leading-[1.1] mb-6 ${textPrimary} ${!isLight ? 'drop-shadow-[0_0_15px_rgba(254,136,221,0.3)]' : ''}`}
            style={{ fontFamily: "'Russo One', sans-serif" }}
          >
            {post.title}
          </h1>

          {/* Autor */}
          <div className="flex items-center justify-between border-b border-gray-200/10 pb-6">
             <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isLight ? 'bg-gray-200' : 'bg-[#1a1a20] border border-[#333]'}`}>
                    <User size={20} className={accentColor} />
                </div>
                <div>
                    <p className={`text-sm font-bold ${textPrimary}`}>{post.author || "Tamu"}</p>
                    <p className={`text-xs ${textSecondary}`}>Colunista</p>
                </div>
             </div>

             <button className={`p-2 rounded-full transition-colors ${isLight ? 'hover:bg-gray-100 text-gray-400' : 'hover:bg-[#1a1a20] text-gray-500'}`}>
                 <Share2 size={20}/>
             </button>
          </div>
        </header>

        {/* --- IMAGEM HERO --- */}
        {post.image && (
          <div className={`relative w-full aspect-video md:aspect-[21/9] rounded-[2rem] overflow-hidden mb-12 group ${isLight ? 'shadow-2xl shadow-pink-100' : 'shadow-[0_0_40px_-10px_rgba(254,136,221,0.2)]'}`}>
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
          </div>
        )}

        {/* --- CONTEÚDO --- */}
        <div className={`max-w-3xl mx-auto ${cardBg} p-8 md:p-12 rounded-[2.5rem]`}>

            {/* Resumo */}
            {post.excerpt && (
              <div className={`text-xl md:text-2xl font-bold leading-relaxed mb-10 pl-6 border-l-4 italic ${isLight ? 'text-gray-700 border-[#F7B8C8]' : 'text-gray-200 border-[#fe88dd]'}`}>
                "{post.excerpt}"
              </div>
            )}

            {/* Corpo */}
            <article className={`prose prose-lg max-w-none ${isLight ? 'prose-gray' : 'prose-invert prose-p:text-gray-300 prose-headings:text-white prose-a:text-[#fe88dd] prose-strong:text-white'}`}>
              {post.content ? (
                <PortableText value={post.content} />
              ) : post.contentHtml ? (
                <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
              ) : (
                <p>{post.excerpt}</p>
              )}
            </article>

            {/* Rodapé */}
            <div className={`mt-16 pt-8 border-t ${isLight ? 'border-gray-100' : 'border-gray-800'} text-center`}>
               <p className={`text-sm font-medium italic ${textSecondary}`}>🏁 Fim da coluna.</p>
            </div>
        </div>

      </div>

      <style>{`@import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');`}</style>
    </div>
  );
};


export default ArticleDetail;
