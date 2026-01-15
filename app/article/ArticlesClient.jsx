'use client';

import { useRouter } from 'next/navigation';
import { ArrowUpRight, Clock, User, Layout, Sparkles, Zap } from 'lucide-react';
import { BackButton, BentoCard } from '../../components/ui';
import { PageContainer } from '../../components/ui/PageContainer';
import { PageHeader } from '../../components/ui/PageHeader';
import { useTheme } from '@/components/layout/ThemeContext';

export const ArticlesClient = ({ posts }) => {
  const { theme } = useTheme();
  const resolvedTheme = theme || 'light';
  const isLight = resolvedTheme === 'light';
  const router = useRouter();
  const items = Array.isArray(posts) ? posts : [];

  const handleOpen = (post) => {
    const slug = post.slug || post._id;
    if (!slug) return;
    router.push(`/article/${encodeURIComponent(slug)}`);
  };

  return (
    <PageContainer theme={resolvedTheme}>
      <BackButton to="/" theme={resolvedTheme} />

      <PageHeader 
        theme={resolvedTheme}
        badge="Editorial & Insights"
        icon={isLight ? Sparkles : Zap}
        title={
          <>
            Textos
            <span className={`flex items-center gap-4 ${isLight ? 'text-pink-600' : 'text-white'}`}>
              <span className="font-serif italic text-5xl md:text-7xl">&</span>
              <span>Manifestos</span>
            </span>
          </>
        }
        subtitle="Análises aprofundadas, opiniões radicais e tudo que precisa de mais espaço do que um simples tweet."
      />

      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-32 opacity-70">
          <Layout className={`mb-4 ${isLight ? 'text-pink-300' : 'text-cyan-600'}`} size={48} />
          <p className={`text-sm font-bold ${isLight ? 'text-gray-400' : 'text-gray-500'}`}>
            Nenhum artigo encontrado
          </p>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-12 auto-rows-fr">
          {items.map((post, index) => {
            const isFeatured = index === 0;
            const colSpan = isFeatured ? "lg:col-span-8 lg:row-span-2" : "lg:col-span-4";

            return (
              <BentoCard
                key={post._id}
                theme={resolvedTheme}
                className={`flex flex-col ${colSpan}`}
                onClick={() => handleOpen(post)}
              >
                <div className={`relative overflow-hidden w-full ${
                  isFeatured ? "h-72 md:h-[32rem]" : "h-60"
                } ${isLight ? "bg-pink-50" : "bg-black"}`}>
                  {post.imageUrl ? (
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className={`w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 ${
                        !isLight && "mix-blend-luminosity opacity-80 group-hover:mix-blend-normal group-hover:opacity-100"
                      }`}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center opacity-20">
                      <Layout size={48} className={isLight ? "text-pink-300" : "text-fuchsia-500"} />
                    </div>
                  )}
                  
                  <div className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-300 ${
                    isLight 
                      ? "from-white/60 via-transparent to-transparent opacity-40 group-hover:opacity-20" 
                      : "from-[#050510] via-transparent to-transparent opacity-80"
                  }`} />

                  <div className="absolute top-6 left-6">
                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md border shadow-lg ${
                      isLight 
                        ? "bg-white/90 border-pink-100 text-pink-600 shadow-pink-100" 
                        : "bg-black/60 border-cyan-500/30 text-cyan-300 shadow-[0_0_10px_rgba(0,255,255,0.2)]"
                    }`}>
                      {post.category || "Artigo"}
                    </span>
                  </div>

                  <div className="absolute top-6 right-6 opacity-0 -translate-y-4 rotate-45 group-hover:rotate-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <div className={`p-4 rounded-full shadow-xl ${
                      isLight 
                        ? "bg-white text-pink-500 shadow-pink-200" 
                        : "bg-fuchsia-600 text-white shadow-[0_0_20px_rgba(255,0,255,0.6)]"
                    }`}>
                      <ArrowUpRight size={24} />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col flex-1 p-8 relative">
                  {!isLight && <div className="absolute top-0 left-8 w-20 h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />}

                  <div className={`flex items-center gap-4 mb-4 text-xs font-bold uppercase tracking-wider ${
                    isLight ? "text-pink-400" : "text-fuchsia-400"
                  }`}>
                    {post.publishedAt && (
                      <div className="flex items-center gap-1.5">
                        <Clock size={12} />
                        <span>
                          {new Date(post.publishedAt).toLocaleDateString("pt-BR", {
                            day: "2-digit",
                            month: "short",
                          })}
                        </span>
                      </div>
                    )}
                    {post.author && (
                      <div className="flex items-center gap-1.5">
                        <User size={12} />
                        <span>{post.author}</span>
                      </div>
                    )}
                  </div>

                  <h2 className={`font-black leading-[0.95] mb-4 transition-all duration-300 ${
                    isFeatured ? "text-3xl md:text-5xl" : "text-xl md:text-2xl"
                  } ${
                    isLight 
                      ? "text-gray-900 group-hover:text-pink-500" 
                      : "text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-fuchsia-400 group-hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
                  }`}>
                    {post.title}
                  </h2>

                  {post.excerpt && (
                    <p className={`line-clamp-3 text-sm md:text-base leading-relaxed mb-8 font-medium ${
                      isLight ? "text-gray-500" : "text-gray-400"
                    }`}>
                      {post.excerpt}
                    </p>
                  )}

                  <div className={`mt-auto pt-6 border-t border-dashed flex items-center justify-between ${
                    isLight ? "border-pink-200" : "border-white/10"
                  }`}>
                    <span className={`text-[10px] font-black uppercase tracking-[0.25em] ${
                      isLight ? "text-pink-400" : "text-cyan-600 group-hover:text-cyan-400"
                    }`}>
                      Ler Completo
                    </span>
                    <div className={`w-8 h-[2px] transition-all duration-500 group-hover:w-24 ${
                      isLight ? "bg-pink-300" : "bg-gradient-to-r from-cyan-500 to-fuchsia-500 shadow-[0_0_10px_cyan]"
                    }`} />
                  </div>
                </div>
              </BentoCard>
            );
          })}
        </div>
      )}
    </PageContainer>
  );
};
