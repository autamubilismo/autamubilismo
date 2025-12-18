import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { client } from '../sanityClient'; // ← Import correto
import { 
  ArrowLeft, 
  ArrowUpRight,
  Clock, 
  User, 
  Layout,
  Loader2,
  Sparkles,
  Zap
} from 'lucide-react';

/**
 * COMPONENTES DE UI ESTILIZADOS
 */
const BackButton = ({ to, theme }) => {
  const isLight = theme === 'light';
  
  return (
    <Link 
      to={to}
      className={`group flex items-center gap-2 px-6 py-3 rounded-full font-bold tracking-widest transition-all duration-300 mb-12 inline-flex ${
        isLight 
          ? "bg-white text-pink-500 border-2 border-pink-100 shadow-[0_4px_14px_0_rgba(255,105,180,0.39)] hover:bg-pink-50 hover:scale-105 hover:shadow-pink-200" 
          : "bg-black/40 text-cyan-400 border border-fuchsia-500/50 backdrop-blur-md shadow-[0_0_15px_rgba(232,121,249,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] hover:border-cyan-400 hover:text-white"
      }`}
    >
      <ArrowLeft size={16} className={`transition-transform group-hover:-translate-x-1 ${isLight ? "text-pink-400" : "text-fuchsia-400"}`} />
      <span className="text-xs uppercase">Voltar</span>
    </Link>
  );
};

const BentoCard = ({ children, theme, className, onClick }) => {
  const isLight = theme === 'light';
  return (
    <div 
      onClick={onClick}
      className={`relative overflow-hidden transition-all duration-500 group cursor-pointer ${
        isLight
          ? "bg-white/80 backdrop-blur-xl border-2 border-pink-50 rounded-[2.5rem] shadow-[0_10px_40px_-10px_rgba(255,182,193,0.5)] hover:shadow-[0_20px_60px_-15px_rgba(255,105,180,0.4)] hover:-translate-y-2 hover:border-pink-200"
          : "bg-[#120822]/80 backdrop-blur-md border border-fuchsia-500/20 rounded-xl shadow-[0_0_20px_rgba(139,92,246,0.1)] hover:shadow-[0_0_30px_rgba(236,72,153,0.6)] hover:border-cyan-400/50 hover:-translate-y-1 ring-1 ring-white/5 hover:ring-cyan-400"
      } ${className}`}
    >
      {/* Grid Overlay para Vaporwave */}
      {!isLight && (
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(255,0,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none" />
      )}
      {children}
    </div>
  );
};

/**
 * PÁGINA PRINCIPAL - RECEBE THEME COMO PROP
 */
const ArticlesPage = ({ theme }) => {
  const isLight = theme === 'light';
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch do Sanity
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await client.fetch(
          `*[_type == "article"] | order(publishedAt desc){
            _id,
            title,
            "slug": slug.current,
            "imageUrl": coalesce(image.asset->url, mainImage.asset->url),
            excerpt,
            publishedAt,
            "category": coalesce(category->title, category, "Editorial"),
            author
          }`
        );
        if (data && data.length > 0) {
          setPosts(data);
        }
      } catch (err) {
        console.error("Erro ao buscar artigos:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const handleOpen = (post) => {
    const slug = post.slug || post._id;
    navigate(`/articles/${slug}`);
  };

  return (
    <div className={`min-h-screen transition-colors duration-700 font-sans relative ${
      isLight 
        ? "bg-[#FFF0F5] selection:bg-pink-200 selection:text-pink-900 text-gray-800" 
        : "bg-[#050510] selection:bg-cyan-500 selection:text-black text-white"
    }`}>
      
      {/* Background Decorativo */}
      {isLight ? (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-pink-200/40 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute top-1/2 -left-20 w-[500px] h-[500px] bg-purple-200/40 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-rose-200/40 rounded-full blur-[80px]" />
        </div>
      ) : (
        <div className="fixed inset-0 pointer-events-none bg-[linear-gradient(to_bottom,transparent_0%,#050510_100%),linear-gradient(0deg,rgba(255,0,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:100%_100%,40px_40px,40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_100%)] opacity-40" />
      )}

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 relative z-10">
        
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <BackButton to="/" theme={theme} />

          <header className="mb-24 relative">
            <div className="relative">
              <span className={`inline-flex items-center gap-2 mb-4 text-[11px] font-black uppercase tracking-[0.3em] px-4 py-1.5 rounded-full border ${
                isLight 
                  ? "bg-white border-pink-100 text-pink-500 shadow-sm" 
                  : "bg-fuchsia-900/20 border-fuchsia-500/50 text-fuchsia-300 shadow-[0_0_10px_rgba(255,0,255,0.3)]"
              }`}>
                {isLight ? <Sparkles size={12} /> : <Zap size={12} />}
                Editorial & Insights
              </span>
              
              <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight leading-[0.9]">
                <span className={`block ${
                  isLight 
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 drop-shadow-sm" 
                    : "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-fuchsia-500 drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]"
                }`}>
                  Textos
                </span>
                <span className={`flex items-center gap-4 ${
                  isLight ? "text-gray-300" : "text-white/10"
                }`}>
                  <span className="font-serif italic text-5xl md:text-7xl">&</span>
                  <span className={`${
                    isLight 
                      ? "text-gray-800" 
                      : "text-transparent bg-clip-text bg-gradient-to-l from-purple-500 to-pink-500"
                  }`}>
                    Manifestos
                  </span>
                </span>
              </h1>
              
              <p className={`max-w-xl text-lg md:text-2xl leading-relaxed font-medium ${
                isLight ? "text-gray-500" : "text-cyan-100/70"
              }`}>
                Análises aprofundadas, opiniões radicais e tudo que 
                precisa de mais espaço do que um simples tweet.
              </p>
            </div>
          </header>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-32 opacity-70">
              <Loader2 className={`animate-spin mb-4 ${isLight ? "text-pink-400" : "text-cyan-400"}`} size={40} />
              <p className={`text-xs font-bold uppercase tracking-widest ${isLight ? "text-pink-300" : "text-cyan-700"}`}>
                Carregando universo...
              </p>
            </div>
          ) : posts.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-32 opacity-70">
              <Layout className={`mb-4 ${isLight ? "text-pink-300" : "text-cyan-600"}`} size={48} />
              <p className={`text-sm font-bold ${isLight ? "text-gray-400" : "text-gray-500"}`}>
                Nenhum artigo encontrado
              </p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-12 auto-rows-fr">
              {posts.map((post, index) => {
                const isFeatured = index === 0;
                const colSpan = isFeatured ? "lg:col-span-8 lg:row-span-2" : "lg:col-span-4";

                return (
                  <BentoCard
                    key={post._id}
                    theme={theme}
                    className={`flex flex-col ${colSpan}`}
                    onClick={() => handleOpen(post)}
                  >
                    {/* Imagem Container */}
                    <div className={`relative overflow-hidden w-full ${isFeatured ? "h-72 md:h-[32rem]" : "h-60"} ${isLight ? "bg-pink-50" : "bg-black"}`}>
                      {post.imageUrl ? (
                        <img
                          src={post.imageUrl}
                          alt={post.title}
                          className={`w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 ${!isLight && "mix-blend-luminosity opacity-80 group-hover:mix-blend-normal group-hover:opacity-100"}`}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center opacity-20">
                          <Layout size={48} className={isLight ? "text-pink-300" : "text-fuchsia-500"} />
                        </div>
                      )}
                      
                      {/* Overlay Gradiente Dinâmico */}
                      <div className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-300 ${
                        isLight 
                          ? "from-white/60 via-transparent to-transparent opacity-40 group-hover:opacity-20" 
                          : "from-[#050510] via-transparent to-transparent opacity-80"
                      }`} />

                      {/* Categoria Badge */}
                      <div className="absolute top-6 left-6">
                        <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md border shadow-lg ${
                          isLight 
                            ? "bg-white/90 border-pink-100 text-pink-600 shadow-pink-100" 
                            : "bg-black/60 border-cyan-500/30 text-cyan-300 shadow-[0_0_10px_rgba(0,255,255,0.2)]"
                        }`}>
                          {post.category || "Artigo"}
                        </span>
                      </div>

                      {/* Botão Hover */}
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

                    {/* Conteúdo Textual */}
                    <div className="flex flex-col flex-1 p-8 relative">
                      {/* Glow decorativo no dark mode */}
                      {!isLight && <div className="absolute top-0 left-8 w-20 h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />}

                      <div className={`flex items-center gap-4 mb-4 text-xs font-bold uppercase tracking-wider ${isLight ? "text-pink-400" : "text-fuchsia-400"}`}>
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

                      <div className={`mt-auto pt-6 border-t border-dashed flex items-center justify-between ${isLight ? "border-pink-200" : "border-white/10"}`}>
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
        </div>
      </div>
    </div>
  );
};

export default ArticlesPage;