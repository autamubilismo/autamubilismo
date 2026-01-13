"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  Calendar,
  User,
  Clock,
  MessageCircle,
  Link as LinkIcon,
  ExternalLink,
  ChevronLeft,
  Sparkles,
  Heart,
  Zap
} from "lucide-react";
import { useSeoMeta } from "@/lib/useSeoMeta";
import { client, urlFor } from "@/lib/sanity";
import { useTheme } from "@/components/layout/ThemeContext";

// --- CUSTOM PORTABLE TEXT RENDERER (Fixes crash issues) ---
// This replaces the external library to ensure stability in this environment.
const SimplePortableText = ({ value, components }) => {
  if (!value || !Array.isArray(value)) return null;

  return (
    <>
      {value.map((block, i) => {
        // Handle Images
        if (block._type === 'image' && components?.types?.image) {
           return <React.Fragment key={block._key || i}>{components.types.image({ value: block })}</React.Fragment>;
        }
        
        // Handle Text Blocks
        if (block._type !== 'block' || !block.children) return null;

        const children = block.children.map((span, idx) => {
           let el = <span key={idx}>{span.text}</span>;
           
           // Apply basic styling marks (Bold, Italic)
           if (span.marks && span.marks.length > 0) {
              if (span.marks.includes('strong')) el = <strong key={idx} className="font-black">{el}</strong>;
              if (span.marks.includes('em')) el = <em key={idx}>{el}</em>;
              // Links would be handled here by looking up markDefs, simplified for stability
           }
           return el;
        });

        const style = block.style || 'normal';
        switch (style) {
          case 'h1': return <h1 key={i} className="text-3xl md:text-4xl font-black mt-8 mb-4">{children}</h1>;
          case 'h2': return <h2 key={i} className="text-2xl md:text-3xl font-bold mt-8 mb-4">{children}</h2>;
          case 'h3': return <h3 key={i} className="text-xl md:text-2xl font-bold mt-6 mb-3">{children}</h3>;
          case 'h4': return <h4 key={i} className="text-lg font-bold mt-4 mb-2">{children}</h4>;
          case 'blockquote': return <blockquote key={i} className="border-l-4 pl-4 italic my-6 opacity-80">{children}</blockquote>;
          default: return <p key={i} className="mb-4 leading-relaxed">{children}</p>;
        }
      })}
    </>
  );
};

// --- COMPONENTE INTERNO: BackButton ---
const BackButton = ({ to = "/", theme }) => {
  const isLight = theme === 'light';
  return (
    <Link
      href={to}
      className={`group mb-8 inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold transition-all hover:pl-2 px-5 py-2.5 rounded-full ${
        isLight
          ? 'text-pink-500 hover:text-pink-600 hover:bg-pink-50 hover:shadow-sm bg-white/60 backdrop-blur-sm border border-pink-100' 
          : 'text-cyan-400 hover:text-white hover:bg-cyan-900/20 border border-cyan-500/30 bg-black/40 backdrop-blur-md shadow-[0_0_15px_rgba(0,255,242,0.15)] hover:shadow-[0_0_25px_cyan] hover:border-cyan-400'
      }`}
    >
      <ChevronLeft size={16} />
      Voltar
    </Link>
  );
};

// --- CLIENTE SANITY INLINED (Para evitar erros de importação neste ambiente) ---
// --- ESTILOS DE PROSE (Tipografia Rica) ---
const proseClass = (isLight) => `prose prose-lg max-w-none 
  ${isLight 
    ? 'prose-headings:text-gray-900 prose-p:text-gray-600 prose-strong:text-pink-600 prose-a:text-purple-600 hover:prose-a:text-purple-500 prose-blockquote:border-pink-300 prose-blockquote:bg-pink-50/50 prose-li:marker:text-pink-400' 
    : 'prose-headings:text-white prose-p:text-gray-300 prose-strong:text-cyan-400 prose-a:text-fuchsia-400 hover:prose-a:text-fuchsia-300 prose-blockquote:border-cyan-500 prose-blockquote:bg-white/5 prose-li:marker:text-cyan-500'
  }`;

const proseComponents = (isLight) => ({
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) return null;
      return (
        <figure className="my-10">
          <img
            src={urlFor(value).width(800).url()}
            alt={value.alt || 'Imagem da notícia'}
            className={`w-full rounded-[2rem] ${isLight ? 'shadow-xl shadow-pink-100' : 'shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-white/10'}`}
          />
          {value.caption && (
            <figcaption className={`text-center text-xs mt-3 font-bold uppercase tracking-wider ${isLight ? 'text-gray-400' : 'text-gray-500'}`}>
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
});

// Ícone customizado do X (Twitter)
const XIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// Ícone customizado do Facebook
const FacebookIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const NewsDetail = ({ slug: slugProp }) => {
  const { theme } = useTheme();
  const resolvedTheme = theme || "light";
  const params = useParams();
  const slug = slugProp || params?.slug;
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  const isLight = resolvedTheme === "light";

  // URL para compartilhamento
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  // CORES E ESTILOS
  const textPrimary = isLight ? "text-gray-900" : "text-white";
  const textSecondary = isLight ? "text-gray-500" : "text-gray-400";
  const accentColor = isLight ? "text-pink-500" : "text-cyan-400";
  
  // Backgrounds e Sombras
  const pageBgStyle = isLight 
    ? {
        backgroundColor: '#FFF0F5',
        backgroundImage: `radial-gradient(at 0% 0%, rgba(255, 182, 193, 0.4) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(216, 196, 240, 0.4) 0px, transparent 50%)`
      }
    : {
        backgroundColor: '#050510',
        backgroundImage: `linear-gradient(rgba(0, 255, 242, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(189, 0, 255, 0.03) 1px, transparent 1px), radial-gradient(at 50% 0%, rgba(189, 0, 255, 0.15) 0px, transparent 70%)`,
        backgroundSize: '40px 40px, 40px 40px, 100% 100%'
      };

  const cardBg = isLight
    ? "bg-white/70 backdrop-blur-xl shadow-[0_10px_40px_-10px_rgba(255,182,193,0.4)] border border-white/60"
    : "bg-[#121217]/80 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)]";
    
  const badgeBg = isLight
    ? "bg-gradient-to-r from-pink-200 to-purple-200 text-purple-900 shadow-sm"
    : "bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 text-cyan-300 border border-cyan-500/30";

  // FUNÇÃO DE COPIAR LINK
  const handleCopyLink = () => {
    if (!shareUrl) return;
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // FETCH NO SANITY
  useEffect(() => {
    // Simulação se não houver slug (para preview no Canvas)
    if (!slug) {
        setPost({
            title: "Norris domina em Singapura e coloca fogo no campeonato!",
            excerpt: "Uma performance de gala sob as luzes de Marina Bay reduz a diferença para Verstappen. O campeonato está mais vivo do que nunca.",
            category: "Corrida",
            author: "Tamu",
            publishedAt: new Date().toISOString(),
            image: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/manual/Misc/2024manual/2024SingaporeGrandPrix/Sunday/GettyImages-2172776472",
            seo: {
              metaTitle: "Norris domina em Singapura | Autamubilismo",
              metaDescription: "Norris voa em Marina Bay e esquenta a briga pelo título.",
              ogImage: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/manual/Misc/2024manual/2024SingaporeGrandPrix/Sunday/GettyImages-2172776472"
            },
            body: [
              {
                _type: 'block',
                style: 'normal',
                children: [
                  { _type: 'span', text: 'Em uma noite eletrizante em Marina Bay, ' },
                  { _type: 'span', marks: ['strong'], text: 'Lando Norris' },
                  { _type: 'span', text: ' mostrou porque é um sério candidato ao título. Dominando desde a largada, o piloto da McLaren não deu chances aos rivais.' }
                ]
              },
              {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: 'O Domínio da McLaren' }]
              },
              {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Com atualizações aerodinâmicas que funcionaram perfeitamente no circuito de rua, o carro papaia voou baixo.' }]
              }
            ] 
        });
        setLoading(false);
        return;
    }

    const normalizedSlug = decodeURIComponent(slug);

    client
      .fetch(
        `*[_type == "news" && (
            slug.current == $slug ||
            _id == $slug ||
            string::lower(slug.current) == string::lower($slug)
          )][0]{
          _id,
          title,
          "slug": slug.current,
          "image": coalesce(mainImage.asset->url, image.asset->url),
          "mainImage": mainImage{
            ...,
            asset->
          },
          excerpt,
          category,
          author,
          publishedAt,
          "source": sourceLabel,
          sourceUrl,
          tags,
          seo{
            metaTitle,
            metaDescription,
            ogTitle,
            ogDescription,
            "ogImage": ogImage.asset->url
          },
          body[] {
            ...,
            _type == "image" => {
              ...,
              "url": asset->url
            }
          }
        }`,
        { slug: normalizedSlug }
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

  // ✅ SEO/OG no HEAD (browser)
  const ogTitle = post?.seo?.metaTitle || post?.title || "Autamubilismo";
  const ogDesc = post?.seo?.metaDescription || post?.excerpt || "";
  const ogImage = post?.seo?.ogImage || post?.image || "https://www.autamubilismo.com/og-default.png";
  useSeoMeta({
    title: ogTitle,
    description: ogDesc,
    image: ogImage,
    url: shareUrl,
    type: "article",
  });

  // LOADING
  if (loading) {
    return (
      <div className={`min-h-screen flex flex-col items-center justify-center`} style={pageBgStyle}>
        <div className={`animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 ${isLight ? "border-pink-400" : "border-cyan-500"}`}></div>
        <p className={`mt-6 font-black uppercase tracking-widest text-sm ${textSecondary} animate-pulse`}>
          Carregando notícia...
        </p>
      </div>
    );
  }

  // NÃO ENCONTRADA
  if (!post) {
    return (
      <div className={`min-h-screen flex flex-col items-center justify-center text-center px-6`} style={pageBgStyle}>
        <BackButton to="/news" theme={resolvedTheme} />
        <h1 className={`text-4xl font-black mb-4 ${textPrimary}`}>
          Notícia não encontrada 🏁
        </h1>
        <p className={`text-lg ${textSecondary}`}>
          Talvez ela tenha sido removida ou o link esteja incorreto.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-20 transition-colors duration-500 font-sans" style={pageBgStyle}>
      
      {/* Luz de Fundo Decorativa */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden mix-blend-screen">
         <div className={`absolute top-[-20%] left-[-10%] w-[800px] h-[800px] rounded-full blur-[120px] opacity-30 ${isLight ? 'bg-pink-200' : 'bg-[#bd00ff]/30 animate-pulse'}`} />
         <div className={`absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[100px] opacity-20 ${isLight ? 'bg-purple-200' : 'bg-[#00fff2]/20 animate-pulse'}`} />
         {!isLight && <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent shadow-[0_0_20px_cyan]" />}
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-8 pt-8 relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
        <BackButton to="/news" theme={resolvedTheme} />

        {/* --- CABEÇALHO --- */}
        <header className="mb-10 text-center md:text-left mt-6">
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
            <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest w-fit ${badgeBg}`}>
              {isLight ? <Sparkles size={12} className="fill-current" /> : <Zap size={12} className="fill-current" />}
              {post.category || "Fórmula 1"}
            </span>

            <div className={`flex items-center gap-4 text-xs font-bold uppercase tracking-wide ${textSecondary}`}>
              {post.publishedAt && (
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} className={accentColor} />
                  {new Date(post.publishedAt).toLocaleDateString("pt-BR", { day: 'numeric', month: 'long', year: 'numeric' })}
                </span>
              )}
              <span className="flex items-center gap-1.5">
                <Clock size={14} className={accentColor} /> Leitura rápida
              </span>
            </div>
          </div>

          {/* TÍTULO */}
          <h1
            className={`text-4xl md:text-6xl lg:text-7xl font-black leading-[1.05] mb-8 ${textPrimary} ${
              !isLight ? "drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-white" : "text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-gray-700 to-gray-900"
            }`}
            style={{ fontFamily: "'Russo One', sans-serif" }}
          >
            {post.title}
          </h1>

          {/* BARRA DE INFO E COMPARTILHAMENTO */}
          <div className={`flex flex-col sm:flex-row sm:items-center justify-between border-y py-6 gap-6 ${isLight ? 'border-pink-200/50' : 'border-white/10'}`}>
            {/* Autor */}
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-sm ${isLight ? "bg-white border border-pink-100 text-pink-500" : "bg-[#1a1a20] border border-white/10 text-cyan-400"}`}>
                <User size={24} />
              </div>
              <div>
                <p className={`text-sm font-black uppercase tracking-wide ${textPrimary}`}>
                  {post.author || "Redação Autamubilismo"}
                </p>
                <p className={`text-xs font-medium ${isLight ? 'text-pink-400' : 'text-fuchsia-400'}`}>Colunista Oficial</p>
              </div>
            </div>

            {/* Botões de Compartilhar */}
            <div className="flex items-center gap-3">
              <span className={`text-[10px] font-bold uppercase tracking-widest mr-2 ${textSecondary}`}>
                Compartilhar
              </span>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/?text=${encodeURIComponent(post.title + " - " + shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-all hover:scale-110 hover:-translate-y-1 ${
                  isLight
                    ? "bg-white text-green-500 hover:bg-green-50 shadow-sm border border-gray-100"
                    : "bg-[#1a1a20] text-green-400 border border-white/10 hover:border-green-500/50 hover:shadow-[0_0_15px_rgba(74,222,128,0.3)]"
                }`}
                title="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>

              {/* X (Twitter) */}
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-all hover:scale-110 hover:-translate-y-1 ${
                  isLight
                    ? "bg-white text-gray-700 hover:bg-gray-50 shadow-sm border border-gray-100"
                    : "bg-[#1a1a20] text-white border border-white/10 hover:border-white/30 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                }`}
                title="X / Twitter"
              >
                <XIcon size={18} />
              </a>

              {/* Facebook */}
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-all hover:scale-110 hover:-translate-y-1 ${
                  isLight
                    ? "bg-white text-blue-600 hover:bg-blue-50 shadow-sm border border-gray-100"
                    : "bg-[#1a1a20] text-blue-400 border border-white/10 hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(96,165,250,0.3)]"
                }`}
                title="Facebook"
              >
                <FacebookIcon size={18} />
              </a>

              {/* Copiar Link */}
              <button
                onClick={handleCopyLink}
                className={`p-3 rounded-full transition-all hover:scale-110 hover:-translate-y-1 relative ${
                  isLight
                    ? "bg-white text-pink-500 hover:bg-pink-50 shadow-sm border border-gray-100"
                    : "bg-[#1a1a20] text-fuchsia-400 border border-white/10 hover:border-fuchsia-500/50 hover:shadow-[0_0_15px_rgba(232,121,249,0.3)]"
                }`}
                title="Copiar Link"
              >
                {copied && (
                  <span className={`absolute -top-10 left-1/2 -translate-x-1/2 text-[10px] px-3 py-1.5 rounded-lg shadow-lg font-bold animate-in fade-in zoom-in duration-300 whitespace-nowrap ${isLight ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
                    Copiado! ✨
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
            className={`relative w-full aspect-video md:aspect-[21/9] rounded-[2.5rem] overflow-hidden mb-12 group transition-all duration-700 ${
              isLight
                ? "shadow-[0_20px_50px_-10px_rgba(255,182,193,0.5)] border-4 border-white"
                : "shadow-[0_0_50px_-10px_rgba(0,255,242,0.15)] border border-white/10 ring-1 ring-white/5"
            }`}
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105"
            />
            {/* Gradiente Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t pointer-events-none opacity-60 ${isLight ? 'from-pink-900/20 to-transparent' : 'from-[#050510] via-transparent to-transparent'}`} />
            
            {/* Tag Flutuante na Imagem */}
            <div className={`absolute bottom-6 left-6 md:bottom-10 md:left-10 px-5 py-2.5 rounded-2xl backdrop-blur-md border ${isLight ? 'bg-white/80 border-white text-gray-900' : 'bg-black/60 border-white/10 text-white'}`}>
               <span className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                  <Heart size={14} className={isLight ? 'text-red-500 fill-current' : 'text-pink-500 fill-current'} /> 
                  Destaque da Semana
               </span>
            </div>
          </div>
        )}

        {/* --- CARD DE CONTEÚDO --- */}
        <div className={`max-w-4xl mx-auto ${cardBg} p-8 md:p-14 rounded-[3rem] relative overflow-hidden`}>
          
          {/* Elemento Decorativo Interno */}
          <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl to-transparent opacity-10 rounded-bl-full pointer-events-none ${isLight ? 'from-pink-400' : 'from-cyan-400'}`} />

          {/* Excerpt (Resumo) */}
          {post.excerpt && (
            <div
              className={`text-xl md:text-2xl font-medium leading-relaxed mb-12 pl-8 border-l-[6px] italic relative ${
                isLight ? "text-gray-700 border-pink-300" : "text-gray-200 border-cyan-500"
              }`}
            >
              <span className={`absolute -top-4 -left-4 text-6xl opacity-20 font-serif ${isLight ? 'text-pink-300' : 'text-cyan-500'}`}>"</span>
              {post.excerpt}
            </div>
          )}

          {/* Conteúdo do Sanity (SimplePortableText) */}
          <article className={proseClass(isLight)}>
            {post.body ? (
              <SimplePortableText value={post.body} components={proseComponents(isLight)} />
            ) : (
              <p className="opacity-50 italic">Conteúdo completo não disponível na prévia.</p>
            )}
          </article>

          {/* --- CAMPO DE FONTE --- */}
          {(post.source || post.sourceUrl) && (
            <div
              className={`mt-16 p-6 rounded-3xl flex flex-col sm:flex-row items-start sm:items-center gap-4 border transition-all ${
                isLight ? "bg-purple-50/50 border-purple-100 text-purple-900" : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10"
              }`}
            >
              <div className={`p-3 rounded-full ${isLight ? 'bg-white text-purple-500' : 'bg-black text-cyan-400'}`}>
                 <ExternalLink size={20} />
              </div>
              <div className="flex-1">
                 <span className="block text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">
                   Fonte Original
                 </span>
                 {post.sourceUrl ? (
                    <a
                      href={post.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`hover:underline font-bold text-lg flex items-center gap-1 ${
                        isLight ? "text-purple-700" : "text-cyan-300"
                      }`}
                    >
                      {post.source || "Ler matéria completa"} <ExternalLink size={14} />
                    </a>
                  ) : (
                    <span className="font-bold text-lg">{post.source || "Fonte não informada"}</span>
                  )}
              </div>
            </div>
          )}

          <div
            className={`mt-20 pt-10 border-t border-dashed text-center ${isLight ? "border-pink-200" : "border-white/10"}`}
          >
            <p className={`text-sm font-medium uppercase tracking-widest opacity-50 flex items-center justify-center gap-2 ${textSecondary}`}>
              <Sparkles size={14} /> Fim da transmissão
            </p>
          </div>
        </div>
      </div>

      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Russo+One&display=swap');`}
      </style>
    </div>
  );
};

export default NewsDetail;
