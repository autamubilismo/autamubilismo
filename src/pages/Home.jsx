import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, Sun, Moon, Search, Heart, Sparkles, Instagram, Twitter, Youtube, Facebook } from 'lucide-react';
import { client, urlFor } from '../sanityClient';
import { lightPattern, darkPattern } from '../constants/theme';
import { SOCIAL_LINKS } from '../data';
import { useTheme } from '../hooks/useTheme';

// Componentes
import { LogoHelmet } from '../components/ui/LogoHelmet';
import { BentoCard } from '../components/ui/BentoCard';
import { NavigationOverlay } from '../components/layout/NavigationOverlay';
import { SearchOverlay } from '../components/layout/SearchOverlay';

// Widgets
import { NextRaceWidget } from '../components/widgets/NextRaceWidget';
import { NewsWidget } from '../components/widgets/NewsWidget';
import { SeasonWidget } from '../components/widgets/SeasonWidget';
import { FanzoneWidget, ContactWidget, CuriosityWidget } from '../components/widgets/SimpleWidgets';
import { NewsletterWidget, KpopPhotocard } from '../components/widgets/NewsletterWidget';

const MANIFESTO_POST_QUERY = `*[_type == "manifesto"][0]{ 
  _id, 
  title, 
  content, 
  image 
}`;

const Home = ({ theme: propTheme, toggleTheme: propToggleTheme }) => {
  // Se receber theme via props (vindo do App), usa ele
  // Senão, usa hook local (para quando Home é acessada diretamente)
  const localThemeHook = useTheme();
  const theme = propTheme || localThemeHook.theme;
  const toggleTheme = propToggleTheme || localThemeHook.toggleTheme;
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [feed, setFeed] = useState([]);
  const [manifesto, setManifesto] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const navigate = useNavigate();

  // --- FETCH DOS DADOS REAIS ---
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        
        // 1. Busca NOTÍCIAS
        const newsData = await client.fetch(
          `*[_type == "news"] | order(publishedAt desc)[0...4]`
        );
        
        const formattedNews = newsData.map((item) => ({
          ...item,
          type: 'news',
          dateObj: new Date(item.publishedAt || item._createdAt || Date.now()),
          image: item.image ? urlFor(item.image).width(400).url() : null,
        }));

        // 2. Busca ARTIGOS
        const articlesData = await client.fetch(`
          *[_type == "article"] | order(publishedAt desc)[0...4] {
            _id,
            title,
            excerpt,
            "slug": slug.current,
            "image": coalesce(image.asset->url, mainImage.asset->url),
            publishedAt,
            _createdAt,
            "category": coalesce(category->title, category, "Opinião"),
            author
          }
        `);

        const formattedArticles = articlesData.map((item) => ({
          ...item,
          type: 'article',
          dateObj: new Date(item.publishedAt || item._createdAt || Date.now()),
          image: item.image || null,
        }));

        // 3. JUNTAR E ORDENAR
        const topNews = formattedNews.slice(0, 3);
        const topArticles = formattedArticles.slice(0, 3);

        const combinedFeed = [...topNews, ...topArticles].sort(
          (a, b) => b.dateObj - a.dateObj
        );

        setFeed(combinedFeed);
        setError(null);
      } catch (err) {
        console.error('Erro ao carregar feed:', err);
        setError('Não foi possível carregar as notícias');
      } finally {
        setIsLoading(false);
      }
    };

    const fetchManifestoData = async () => {
      try {
        const data = await client.fetch(MANIFESTO_POST_QUERY);
        if (data) {
          setManifesto({
            ...data,
            imageUrl: data.image ? urlFor(data.image).width(600).url() : null,
          });
        }
      } catch (err) {
        console.error('Erro manifesto:', err);
      }
    };

    fetchData();
    if (MANIFESTO_POST_QUERY) {
      fetchManifestoData();
    }
  }, []);

  const DRIVER_OF_DAY = { 
    name: "Lando Norris", 
    team: "McLaren", 
    number: "4", 
    image: '/img/pilotos/norris/grid-norris.avif', 
    zodiac: "Escorpião", 
    secretFact: "Tem medo de peixes mas ama sushi.", 
    signature: "L4ndo" 
  };

  return (
    <div 
      className={`min-h-screen transition-colors duration-700 ease-in-out selection:bg-pink-300 selection:text-purple-900 flex flex-col`} 
      style={theme === 'light' ? lightPattern : darkPattern}
    >
      <NavigationOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} theme={theme} />
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} theme={theme} />

      {/* Header */}
      <header className={`sticky top-0 z-40 w-full backdrop-blur-xl border-b transition-all duration-300 shadow-sm ${theme === 'light' ? 'border-pink-200/50 bg-white/70' : 'border-white/5 bg-[#050510]/80'}`}>
        <div className="max-w-[1400px] mx-auto px-4 py-4 md:px-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsMenuOpen(true)} 
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 ${theme === 'light' ? 'bg-white/80 text-gray-800 shadow-lg hover:text-pink-500 hover:shadow-pink-200' : 'bg-[#1a1a20]/80 text-white border border-[#333] hover:text-[#00fff2] hover:border-[#00fff2] hover:shadow-[0_0_15px_rgba(0,255,242,0.3)]'}`}
            >
              <Menu size={20} />
              <span className="font-black text-xs tracking-widest uppercase">Menu</span>
            </button>
          </div>
          
          <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 transform hover:scale-105 transition-transform duration-500 cursor-pointer">
            <Link to="/">
              <LogoHelmet theme={theme} size="large" />
            </Link>
          </div>
          
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setIsSearchOpen(true)} 
              className={`hidden md:flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all hover:scale-105 ${theme === 'light' ? 'bg-white hover:bg-gray-50 text-gray-400 shadow-md ring-1 ring-pink-100' : 'bg-white/5 hover:bg-white/10 text-gray-400 border border-white/5'}`}
            >
              <Search size={18} />
              <span>Buscar</span>
            </button>
            <button 
              onClick={() => setIsSearchOpen(true)} 
              className={`md:hidden p-2.5 rounded-full transition-all ${theme === 'light' ? 'bg-white/80 text-gray-400 shadow-md' : 'bg-white/5 text-gray-400 border border-white/5'}`}
            >
              <Search size={20} />
            </button>
            <button 
              onClick={toggleTheme} 
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full transition-all active:scale-95 shadow-lg ${theme === 'light' ? 'bg-yellow-100 text-yellow-600 hover:bg-yellow-200 hover:shadow-yellow-200 ring-2 ring-yellow-200' : 'bg-[#bd00ff]/20 text-[#bd00ff] border border-[#bd00ff]/30 hover:bg-[#bd00ff]/30 hover:shadow-[0_0_15px_rgba(189,0,255,0.3)]'}`}
            >
              {theme === 'light' ? <Sun size={18} className="fill-current" /> : <Moon size={18} className="fill-current" />}
              <span className="hidden sm:inline font-black text-xs tracking-widest uppercase">
                {theme === 'light' ? 'Light' : 'Dark'}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Efeitos de Fundo Dark Mode */}
      {theme === 'dark' && (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden mix-blend-screen">
          <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#bd00ff]/10 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#00fff2]/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-yellow-400 via-pink-500 to-purple-600 rounded-full blur-[100px] opacity-10" />
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent shadow-[0_0_20px_cyan]" />
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 max-w-[1400px] mx-auto p-4 md:p-8 relative z-10 w-full">
        <div className="mb-8 md:mb-12 text-center md:text-left relative">
          <h2 className={`text-3xl md:text-5xl font-black tracking-tighter mb-3 leading-[0.9] ${theme === 'light' ? 'text-gray-900 drop-shadow-sm' : 'text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]'}`}>
            Olá, <span className={`text-transparent bg-clip-text bg-gradient-to-r ${theme === 'light' ? 'from-pink-500 via-purple-400 to-pink-500' : 'from-[#ff00ff] via-[#bd00ff] to-[#00fff2]'}`}>F1 Lover!</span> 
          </h2>
          <p className={`text-sm md:text-lg font-medium max-w-2xl ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>
            Tudo o que você precisa saber sobre a F1, com aquele toque de caos e brilho que a gente ama.
          </p>
        </div>

        {/* Grid Bento */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 auto-rows-[minmax(200px,auto)]">
          <div className="lg:col-span-2 lg:row-span-1">
            <BentoCard theme={theme} className="h-full min-h-[260px]" noPadding>
              <NextRaceWidget theme={theme} />
            </BentoCard>
          </div>
          
          <div className="lg:col-span-2 lg:row-span-2">
            <BentoCard theme={theme} className="h-full min-h-[460px]" noPadding>
              <NewsWidget 
                theme={theme} 
                posts={isLoading ? [] : feed} 
                onNewsClick={(post) => {
                  const route = post.type === 'article' ? '/articles' : '/news';
                  const slugFinal = post.slug?.current || post.slug;
                  navigate(`${route}/${slugFinal}`);
                }} 
              />
            </BentoCard>
          </div>
          
          <div className="lg:col-span-1 lg:row-span-2">
            <BentoCard theme={theme} className="h-full min-h-[440px]" noPadding>
              <SeasonWidget theme={theme} />
            </BentoCard>
          </div>
          
          <div className="lg:col-span-1 lg:row-span-2 flex flex-col gap-6">
            <div className="flex items-center justify-between px-3">
              <span className={`text-xs font-black uppercase tracking-[0.2em] ${theme === 'light' ? 'text-purple-400' : 'text-gray-500'}`}>
                Driver of the Day
              </span>
              <Heart size={20} className={`${theme === 'light' ? 'text-red-400' : 'text-pink-500'} animate-pulse`} />
            </div>
            <div className="flex-1">
              <KpopPhotocard driver={DRIVER_OF_DAY} theme={theme} />
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <BentoCard theme={theme} className="h-full flex items-center justify-center min-h-[200px]" onClick={() => console.log('Vote!')}>
              <FanzoneWidget theme={theme} />
            </BentoCard>
          </div>
          
          <div className="lg:col-span-1">
            <div className="grid grid-rows-2 gap-6 h-full min-h-[200px]">
              <BentoCard theme={theme} className="flex items-center justify-center" onClick={() => alert('Curiosidade!')} noPadding>
                <CuriosityWidget theme={theme} />
              </BentoCard>
              <BentoCard theme={theme} className="flex items-center justify-center" to="/contact" noPadding>
                <ContactWidget theme={theme} />
              </BentoCard>
            </div>
          </div>
          
          <div className="md:col-span-2 lg:col-span-4">
            <BentoCard theme={theme} className="min-h-[240px]" noPadding>
              <NewsletterWidget theme={theme} />
            </BentoCard>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className={`py-16 md:py-24 text-center border-t relative z-20 mt-10 ${theme === 'light' ? 'border-pink-200 bg-white/60 backdrop-blur-lg' : 'border-white/5 bg-black/60 backdrop-blur-lg'}`}>
        <div className="flex flex-col items-center justify-center gap-6 mb-8 opacity-90">
          <Link to="/">
            <LogoHelmet theme={theme} size="normal" />
          </Link>
          <div className="flex gap-6 mt-4">
            {SOCIAL_LINKS.map(social => (
              <a 
                key={social.id} 
                href={social.url} 
                className={`p-3 rounded-full transition-all hover:-translate-y-1 ${theme === 'light' ? 'bg-white text-gray-400 hover:text-pink-500 shadow-md hover:shadow-pink-200' : 'bg-[#1a1a20] text-gray-500 hover:text-[#00fff2] hover:shadow-[0_0_15px_rgba(0,255,242,0.3)]'}`}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
        <p className={`text-sm font-bold tracking-wide ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>
          Feito com <span className="text-red-400 animate-pulse">♥</span> e muita velocidade.
        </p>
        <p className={`text-xs mt-3 opacity-50 uppercase tracking-widest ${theme === 'light' ? 'text-gray-400' : 'text-gray-600'}`}>
          © 2025 Autamubilismo. Não afiliado à Fórmula 1.
        </p>
      </footer>
    </div>
  );
};

export default Home;