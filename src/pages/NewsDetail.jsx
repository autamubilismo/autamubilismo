// src/pages/NewsDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Calendar,
  User,
  Clock,
  MessageCircle,
  Twitter,
  Link as LinkIcon,
  ExternalLink,
} from "lucide-react";
import { PortableText } from "@portabletext/react";

import { BackButton } from "../components/UI";
import { sanityClient as client } from "../lib/sanityClient";

// Estilos globais de tipografia
import { proseClass } from "../styles/proseStyles";
import { proseComponents } from "../styles/proseComponents";

const NewsDetail = ({ theme = "light" }) => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  const isLight = theme === "light";

  // URL para compartilhamento
  const shareUrl =
    typeof window !== "undefined" ? window.location.href : "";

  // CORES E ESTILOS
  const textPrimary = isLight ? "text-gray-800" : "text-white";
  const textSecondary = isLight ? "text-gray-500" : "text-gray-400";
  const accentColor = isLight ? "text-[#D8C4F0]" : "text-[#ab0eff]";
  const cardBg = isLight
    ? "bg-white shadow-xl"
    : "bg-[#121217] border border-[#333]";
  const badgeBg = isLight
    ? "bg-[#F7B8C8] text-white"
    : "bg-[#ab0eff]/20 text-[#ab0eff] border border-[#ab0eff]/50";

  // FUNÇÃO DE COPIAR LINK
  const handleCopyLink = () => {
    if (!shareUrl) return;
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // FETCH NO SANITY (com mapeamento dos campos de fonte)
  useEffect(() => {
    client
      .fetch(
        `*[_type == "news" && slug.current == $slug][0]{
          _id,
          title,
          "slug": slug.current,
          "image": image.asset->url,
          excerpt,
          category,
          author,
          publishedAt,
          // ⬇️ mapeia o campo sourceLabel do Sanity para "source"
          "source": sourceLabel,
          sourceUrl,
          body[] {
            ...,
            _type == "image" => {
              ...,
              "url": asset->url
            }
          }
        }`,
        { slug }
      )
      .then((res) => {
        setPost(res);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao carregar notícia:", err);
        setLoading(false);
      });
  }, [slug]);

  // LOADING
  if (loading) {
    return (
      <div
        className={`min-h-screen flex flex-col items-center justify-center ${
          isLight ? "bg-[#FFF5F8]" : "bg-[#050505]"
        }`}
      >
        <div
          className={`animate-spin rounded-full h-12 w-12 border-t-4 ${
            isLight ? "border-[#F7B8C8]" : "border-[#ab0eff]"
          }`}
        ></div>
        <p className={`mt-4 font-bold ${textSecondary}`}>
          Carregando notícia...
        </p>
      </div>
    );
  }

  // NÃO ENCONTRADA
  if (!post) {
    return (
      <div
        className={`min-h-screen flex flex-col items-center justify-center text-center px-6 ${
          isLight ? "bg-[#FFF5F8]" : "bg-[#050505]"
        }`}
      >
        <BackButton to="/news" theme={theme} />
        <h1 className={`text-3xl font-black mb-2 ${textPrimary}`}>
          Notícia não encontrada. 🏁
        </h1>
        <p className={textSecondary}>
          Talves ela tenha sido removida ou o link esteja incorreto.
        </p>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen pb-20 transition-colors duration-500 ${
        isLight ? "bg-[#FFF5F8]" : "bg-[#050505]"
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 pt-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
        <BackButton to="/news" theme={theme} />

        {/* --- CABEÇALHO --- */}
        <header className="mb-8 text-center md:text-left mt-4">
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
            <span
              className={`inline-block px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest w-fit ${badgeBg}`}
            >
              {post.category || "Fórmula 1"}
            </span>

            <div
              className={`flex items-center gap-4 text-xs font-bold uppercase tracking-wide ${textSecondary}`}
            >
              {post.publishedAt && (
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  {new Date(post.publishedAt).toLocaleDateString(
                    "pt-BR"
                  )}
                </span>
              )}
              <span className="flex items-center gap-1">
                <Clock size={14} /> Leitura rápida
              </span>
            </div>
          </div>

          {/* TÍTULO */}
          <h1
            className={`text-4xl md:text-6xl font-black leading-[1.1] mb-6 ${textPrimary} ${
              !isLight
                ? "drop-shadow-[0_0_15px_rgba(254,136,221,0.3)]"
                : ""
            }`}
            style={{ fontFamily: "'Russo One', sans-serif" }}
          >
            {post.title}
          </h1>

          {/* BARRA DE INFO E COMPARTILHAMENTO */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-200/10 pb-6 gap-6">
            {/* Autor */}
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  isLight
                    ? "bg-gray-200"
                    : "bg-[#1a1a20] border border-[#333]"
                }`}
              >
                <User size={20} className={accentColor} />
              </div>
              <div>
                <p className={`text-sm font-bold ${textPrimary}`}>
                  {post.author || "Redação Autamubilismo"}
                </p>
                <p className={`text-xs ${textSecondary}`}>Jornalista</p>
              </div>
            </div>

            {/* Botões de Compartilhar */}
            <div className="flex items-center gap-3">
              <span
                className={`text-[10px] font-bold uppercase tracking-widest mr-1 ${textSecondary}`}
              >
                Compartilhar:
              </span>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/?text=${encodeURIComponent(
                  post.title + " - " + shareUrl
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2.5 rounded-full transition-all hover:scale-110 ${
                  isLight
                    ? "bg-green-100 text-green-600 hover:bg-green-200"
                    : "bg-green-500/10 text-green-400 border border-green-500/30 hover:bg-green-500/20"
                }`}
                title="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>

              {/* Twitter / X */}
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  post.title
                )}&url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2.5 rounded-full transition-all hover:scale-110 ${
                  isLight
                    ? "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
                }`}
                title="X / Twitter"
              >
                <Twitter size={18} />
              </a>

              {/* Copiar Link */}
              <button
                onClick={handleCopyLink}
                className={`p-2.5 rounded-full transition-all hover:scale-110 relative ${
                  isLight
                    ? "bg-pink-100 text-pink-600 hover:bg-pink-200"
                    : "bg-[#ab0eff]/10 text-[#ab0eff] border border-[#ab0eff]/30 hover:bg-[#ab0eff]/20"
                }`}
                title="Copiar Link"
              >
                {copied && (
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] bg-black text-white px-2 py-1 rounded shadow font-bold animate-fade-in">
                    Copiado!
                  </span>
                )}
                <LinkIcon size={18} />
              </button>
            </div>
          </div>
        </header>

        {/* IMAGEM HERO */}
        {post.image && (
          <div
            className={`relative w-full aspect-video md:aspect-[21/9] rounded-[2rem] overflow-hidden mb-12 group ${
              isLight
                ? "shadow-2xl shadow-pink-100"
                : "shadow-[0_0_40px_-10px_rgba(254,136,221,0.2)]"
            }`}
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>
        )}

        {/* --- CARD DE CONTEÚDO --- */}
        <div
          className={`max-w-3xl mx-auto ${cardBg} p-8 md:p-12 rounded-[2.5rem]`}
        >
          {/* Excerpt (Resumo) */}
          {post.excerpt && (
            <div
              className={`text-xl md:text-2xl font-bold leading-relaxed mb-10 pl-6 border-l-4 italic ${
                isLight
                  ? "text-gray-700 border-[#F7B8C8]"
                  : "text-gray-200 border-[#ab0eff]"
              }`}
            >
              "{post.excerpt}"
            </div>
          )}

          {/* Conteúdo do Sanity (Portable Text) */}
          <article className={proseClass(isLight)}>
            {post.body ? (
              <PortableText
                value={post.body}
                components={proseComponents(isLight)}
              />
            ) : (
              <p>{post.excerpt}</p>
            )}
          </article>

          {/* --- CAMPO DE FONTE --- */}
          {(post.source || post.sourceUrl) && (
            <div
              className={`mt-12 p-5 rounded-2xl text-sm flex flex-col sm:flex-row items-start sm:items-center gap-3 ${
                isLight
                  ? "bg-gray-50 text-gray-600"
                  : "bg-white/5 text-gray-300"
              }`}
            >
              <span className="flex items-center gap-2 font-black uppercase tracking-wider text-[10px] opacity-70">
                <ExternalLink size={14} /> Fonte Original:
              </span>
              {post.sourceUrl ? (
                <a
                  href={post.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`hover:underline font-bold text-base ${
                    isLight ? "text-purple-600" : "text-[#ab0eff]"
                  }`}
                >
                  {post.source || "Ler matéria completa"}
                </a>
              ) : (
                <span className="font-bold">
                  {post.source || "Fonte não informada"}
                </span>
              )}
            </div>
          )}

          <div
            className={`mt-16 pt-8 border-t ${
              isLight ? "border-gray-100" : "border-gray-800"
            } text-center`}
          >
            <p
              className={`text-sm font-medium italic ${textSecondary}`}
            >
              🏁 Fim da transmissão.
            </p>
          </div>
        </div>
      </div>

      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');`}
      </style>
    </div>
  );
};

export default NewsDetail;
