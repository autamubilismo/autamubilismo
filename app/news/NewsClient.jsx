'use client';

import React from "react";
import { useRouter } from "next/navigation";
import { Calendar, User, ArrowRight, Newspaper, ArrowLeft, Zap } from "lucide-react";
import { useTheme } from "@/components/layout/ThemeContext";

// --- COMPONENTES UI (Estilizados para Vaporwave/Girlie) ---

const BackButton = ({ to, theme }) => {
  const router = useRouter();
  const handleBack = () => router.push(to);
  const isLight = theme === 'light';
  
  return (
    <button 
      onClick={handleBack}
      className={`group flex items-center gap-2 px-6 py-2.5 rounded-full border-2 transition-all duration-300 mb-12 backdrop-blur-md font-bold tracking-widest uppercase text-xs ${
        isLight 
          ? "bg-white/80 border-cottage-rosy text-cottage-rosy hover:bg-cottage-beige hover:border-cottage-rosy hover:scale-105 shadow-sm" 
          : "bg-black/40 border-cyan-500/50 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:shadow-[0_0_25px_cyan] hover:bg-cyan-900/20 hover:text-white hover:border-cyan-400"
      }`}
    >
      <ArrowLeft size={14} className={`transition-transform group-hover:-translate-x-1 ${isLight ? "text-cottage-rosy" : "text-fuchsia-400"}`} />
      Voltar
    </button>
  );
};

const BentoCard = ({ children, theme, className, onClick }) => {
  const isLight = theme === 'light';
  return (
    <div 
      onClick={onClick}
      className={`relative overflow-hidden rounded-[2.5rem] border transition-all duration-500 cursor-pointer group/card ${
        isLight
          ? "bg-white border-cottage-rosy shadow-[0_10px_30px_rgba(255,192,203,0.3)] hover:shadow-xl hover:border-cottage-rosy hover:-translate-y-2"
          : "bg-[#090919]/90 border-fuchsia-500/30 shadow-[0_0_20px_rgba(168,85,247,0.15)] hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(6,182,212,0.4)] hover:-translate-y-2 ring-1 ring-white/5"
      } ${className}`}
    >
      {!isLight && (
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      )}
      {children}
    </div>
  );
};

const formatDate = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date
    .toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric", timeZone: "UTC" })
    .replace(".", "") 
    .toUpperCase();
};

export const NewsClient = ({ news }) => {
  const { theme } = useTheme();
  const resolvedTheme = theme || "light";
  const isLight = resolvedTheme === "light";
  const router = useRouter();
  const items = Array.isArray(news) ? news : [];

  const openNews = (item) => {
    const slug = item.slug || item._id;
    if (!slug) return;
    router.push(`/news/${encodeURIComponent(slug)}`);
  };

  const badgeStyle = isLight 
    ? "bg-cottage-rosy text-cottage-beige border-cottage-rosy" 
    : "bg-black/60 text-cyan-300 border-cyan-500/50 shadow-[0_0_10px_rgba(6,182,212,0.3)] backdrop-blur-md";

  const accentText = isLight 
    ? "text-[#D3968C]" 
    : "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-cottage-rosy animate-gradient-x drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]";

  return (
    <div className={`animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20 font-sans min-h-screen transition-colors overflow-x-hidden ${
      isLight 
        ? "bg-[#F7F4D5] selection:bg-cottage-rosy selection:text-white" 
        : "bg-[#050510] selection:bg-cyan-500 selection:text-black"
    }`}>
      {!isLight && (
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-gradient-to-b from-yellow-300 via-cottage-rosy to-cottage-rosy blur-[80px] opacity-40" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-cyan-500 shadow-[0_0_20px_#ff00ff]" />
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 relative z-10">
        <BackButton to="/" theme={resolvedTheme} />

        <header className="mb-20 relative">
          <div className="flex items-center gap-4 mb-8">
            <div className={`p-3 rounded-2xl border ${
              isLight 
                ? 'bg-white text-cottage-rosy border-cottage-rosy shadow-lg' 
                : 'bg-black/50 text-cyan-400 border-cyan-500/50 shadow-[0_0_15px_cyan]'
            }`}>
              <Newspaper size={28} />
            </div>
            <div className="flex flex-col">
              <span className={`text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-2 ${
                isLight ? 'text-cottage-rosy' : 'text-fuchsia-400 drop-shadow-[0_0_5px_rgba(232,121,249,0.8)]'
              }`}>
                {!isLight && <Zap size={10} className="fill-current" />}
                Paddock Intelligence
              </span>
              <span className={`text-[9px] font-bold uppercase tracking-widest ${
                isLight ? 'text-gray-400' : 'text-cyan-600'
              }`}>
                The Grid 2025 Edition
              </span>
            </div>
          </div>
          
          <h1 className={`text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8] mb-8 ${isLight ? "text-gray-900" : "text-white"}`}>
            Daily <br /> 
            <span className={accentText}>Insights</span>
          </h1>
          
          <p className={`max-w-xl text-lg md:text-xl font-medium leading-relaxed ${
            isLight ? "text-gray-500" : "text-cyan-100/70"
          }`}>
            Mergulhe nas atualizacoes que definem o ritmo do campeonato. <br />
            <span className={`text-xs font-bold uppercase tracking-widest mt-2 block ${
              isLight ? "text-cottage-rosy/60" : "text-fuchsia-500 shadow-fuchsia-500/50"
            }`}>
              Onde a velocidade encontra a informacao.
            </span>
          </p>
        </header>

        {items.length === 0 ? (
          <div className={`text-center py-32 rounded-[3rem] border-2 border-dashed ${
            isLight 
              ? 'border-cottage-rosy text-cottage-rosy' 
              : 'border-fuchsia-500/20 text-fuchsia-500/50 bg-black/40'
          }`}>
            <Newspaper size={64} className="mx-auto mb-6 opacity-50" />
            <p className="font-black uppercase tracking-[0.4em] text-sm">Silence in the paddock</p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2">
            {items.map((item, index) => {
              const imageSrc = item.image || item.imageUrl;
              return (
              <BentoCard
                key={item._id}
                theme={resolvedTheme}
                onClick={() => openNews(item)}
                className={`group relative flex flex-col justify-between ${
                  index === 0 ? "md:col-span-2 min-h-[550px]" : "min-h-[450px]"
                }`}
              >
                <div className={`flex flex-col ${index === 0 ? "lg:flex-row" : "flex-col"} gap-8 h-full relative z-10`}>
                  {imageSrc && (
                    <div className={`relative overflow-hidden rounded-[2rem] bg-zinc-900 shrink-0 shadow-2xl transition-all duration-700 ${
                      index === 0 ? "w-full lg:w-3/5 h-[350px] lg:h-full" : "w-full h-64"
                    } ${!isLight && "border border-white/10"}`}>
                      <img
                        src={imageSrc}
                        alt={item.title}
                        className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms] ease-out ${
                          !isLight && "opacity-80 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100"
                        }`}
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-700 ${
                        isLight
                          ? "from-black/50 to-transparent opacity-40 group-hover:opacity-20"
                          : "from-fuchsia-900/50 via-transparent to-transparent opacity-60 mix-blend-overlay"
                      }`} />
                    </div>
                  )}

                  <div className="flex flex-col flex-1 min-w-0 py-6 px-6 md:px-0 md:pr-6 relative">
                    {!isLight && (
                      <div className="absolute top-6 right-6 w-12 h-1 bg-gradient-to-r from-cyan-500 to-transparent opacity-50" />
                    )}

                    <div className="flex items-center flex-wrap gap-4 mb-6">
                      <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border ${badgeStyle}`}>
                        {item.category || "Noticia"}
                      </span>

                      {item.publishedAt && (
                        <div className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] ${
                          isLight ? "text-gray-400" : "text-fuchsia-300"
                        }`}>
                          <Calendar size={12} className="opacity-70" />
                          {formatDate(item.publishedAt)}
                        </div>
                      )}
                    </div>

                    <h2 className={`font-black uppercase tracking-tighter leading-[0.9] mb-6 transition-all duration-500 ${
                      index === 0 ? "text-4xl md:text-6xl" : "text-2xl md:text-3xl"
                    } ${
                      isLight 
                        ? "text-gray-900 group-hover:text-cottage-rosy" 
                        : "text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-fuchsia-400 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]"
                    }`}>
                      {item.title}
                    </h2>

                    {item.excerpt && (
                      <p className={`text-base md:text-lg leading-relaxed mb-8 line-clamp-3 font-medium ${
                        isLight ? "text-gray-500" : "text-cyan-100/60"
                      }`}>
                        {item.excerpt}
                      </p>
                    )}

                    <div className={`mt-auto flex items-center justify-between border-t pt-6 ${
                      isLight ? "border-cottage-rosy" : "border-white/10"
                    }`}>
                      {item.author && (
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center border ${
                            isLight 
                              ? 'bg-white border-cottage-rosy text-cottage-rosy' 
                              : 'bg-black border-cyan-500/50 text-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.2)]'
                          }`}>
                            <User size={14} />
                          </div>
                          <div className="flex flex-col">
                            <span className={`text-[9px] font-black uppercase tracking-widest ${
                              isLight ? "text-gray-400" : "text-gray-500"
                            }`}>Por</span>
                            <span className={`text-[10px] font-bold uppercase ${
                              isLight ? 'text-gray-800' : 'text-white'
                            }`}>{item.author}</span>
                          </div>
                        </div>
                      )}
                      
                      <div className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] transition-all transform translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 ${
                        isLight ? "text-cottage-rosy" : "text-cyan-400 drop-shadow-[0_0_5px_cyan]"
                      }`}>
                        Ler <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </div>
              </BentoCard>
            );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
