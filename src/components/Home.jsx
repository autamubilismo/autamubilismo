import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  X, ChevronRight, Flag, CloudMoon, MapPin, Newspaper, Zap, Mail, Sparkles, 
  Star, RotateCcw, Heart, MessageSquare, Menu, Sun, Moon, ArrowLeft, ArrowRight, 
  Search, Loader2, AlertCircle, Calendar, Clock, Trophy, Wrench, FlagTriangleRight,
  Home as HomeIcon, Users, BarChart3, Share2
} from 'lucide-react';

// --- MOCK DATA & SERVICES ---

const LOGO_LIGHT_URL = "https://placehold.co/400x120/transparent/333?text=AUTAMUBILISMO&font=montserrat";
const LOGO_DARK_URL = "https://placehold.co/400x120/transparent/bd00ff?text=AUTAMUBILISMO&font=montserrat";

const SITE_MAP = [
  { id: 'home', path: '/', label: 'Início', desc: 'Página Principal', icon: HomeIcon },
  { id: 'calendar', path: '/calendar', label: 'Calendário', desc: 'Corridas 2025', icon: Calendar },
  { id: 'standings', path: '/standings', label: 'Classificação', desc: 'Tabelas', icon: BarChart3 },
  { id: 'drivers', path: '/drivers', label: 'Pilotos', desc: 'Grid Atual', icon: Users },
  { id: 'news', path: '/news', label: 'Notícias', desc: 'Últimas Updates', icon: Newspaper },
];

const fetchNews = async () => {
  // Simulação de delay de rede
  await new Promise(resolve => setTimeout(resolve, 800));
  return [
    { 
      id: 1, 
      title: 'Lando Norris conquista o título mundial em Abu Dhabi!', 
      type: 'news', 
      publishedAt: new Date().toISOString(),
      category: 'Campeonato',
      image: 'https://placehold.co/600x400/FF8700/white?text=Norris+Champ'
    },
    { 
      id: 2, 
      title: 'Opinião: A era de ouro da McLaren começou?', 
      type: 'article', 
      publishedAt: new Date().toISOString(), 
      category: { title: 'Análise' },
      image: 'https://placehold.co/600x400/333/white?text=McLaren'
    },
    { 
      id: 3, 
      title: 'Hamilton revela pintura especial para despedida da Mercedes', 
      type: 'news', 
      publishedAt: new Date().toISOString(),
      category: 'Mercedes',
      image: 'https://placehold.co/600x400/00D2BE/white?text=Lewis+44'
    },
    { 
      id: 4, 
      title: 'Verstappen: "Voltaremos mais fortes em 2026"', 
      type: 'news', 
      publishedAt: new Date().toISOString(),
      category: 'Red Bull',
      image: 'https://placehold.co/600x400/1E41FF/white?text=Max'
    }
  ];
};

// --- HELPERS ---
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

// --- COMPONENTES DE UI ---

// 1. LOGO
const LogoHelmet = ({ theme, size = 'normal' }) => {
  const isLight = theme === 'light';
  const [imageError, setImageError] = useState(false);
  useEffect(() => setImageError(false), [theme]);
  const currentLogoUrl = isLight ? LOGO_LIGHT_URL : LOGO_DARK_URL;
  
  const containerClass = size === 'large' 
    ? "w-64 h-auto md:w-[48rem]" 
    : "w-32 h-auto md:w-48"; 

  if (!imageError) return (
    <div className="flex flex-col items-center justify-center pointer-events-none select-none">
      <div className={`${containerClass} relative flex items-center justify-center`}>
        <img 
          src={currentLogoUrl} 
          alt="Autamubilismo" 
          onError={() => setImageError(true)} 
          className="w-full h-full object-contain block drop-shadow-sm"
        />
      </div>
    </div>
  );
  
  return (
    <h1 className="text-2xl font-black tracking-widest uppercase text-gray-500">
      AUTAMUBILISMO
    </h1>
  );
};

// 2. BOTÃO VOLTAR
const BackButton = ({ to, theme }) => {
  const isLight = theme === 'light';
  return (
    <Link
      to={to}
      className={`group mb-6 inline-flex items-center gap-2 text-sm font-bold transition-all px-4 py-2 rounded-full ${
        isLight
          ? 'text-gray-500 hover:text-[#8e7bb0] hover:bg-white hover:shadow-sm'
          : 'text-gray-400 hover:text-[#00fff2] hover:bg-white/5'
      }`}
    >
      <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
      Voltar
    </Link>
  );
};

// 3. MENU OVERLAY
const NavigationOverlay = ({ isOpen, onClose, theme }) => {
  if (!isOpen) return null;
  const isLight = theme === 'light';

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col overflow-y-auto animate-in slide-in-from-left duration-300 ${
        isLight ? 'bg-[#FFF5F8]/95 backdrop-blur-xl' : 'bg-[#050505]/95 backdrop-blur-xl'
      }`}
    >
      <div className="p-6 flex justify-end">
        <button onClick={onClose} className="p-2 rounded-full hover:bg-black/5 transition-colors">
          <X size={24} className={isLight ? 'text-gray-600' : 'text-white'} />
        </button>
      </div>

      <div className="flex-1 max-w-4xl mx-auto w-full p-4 md:p-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {SITE_MAP.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              onClick={onClose}
              className={`group relative p-4 rounded-2xl flex items-center gap-4 text-left transition-all overflow-hidden border ${
                isLight
                  ? 'bg-white border-white hover:border-[#F7B8C8] hover:shadow-[0_8px_30px_-5px_rgba(247,184,200,0.4)]'
                  : 'bg-[#121217] border-[#222] hover:border-[#00fff2] hover:shadow-[0_0_15px_rgba(0,255,242,0.15)]'
              }`}
            >
              <div
                className={`w-12 h-12 shrink-0 rounded-xl flex items-center justify-center transition-colors ${
                  isLight
                    ? 'bg-[#F7B8C8]/10 text-[#D8C4F0] group-hover:bg-[#F7B8C8]/20'
                    : 'bg-[#1a1a20] text-[#00fff2] group-hover:text-white group-hover:bg-[#00fff2]/20'
                }`}
              >
                {item.icon && <item.icon size={22} />}
              </div>

              <div className="flex-1 min-w-0">
                <span
                  className={`block text-lg font-black tracking-tight truncate ${
                    isLight ? 'text-gray-800' : 'text-white'
                  }`}
                >
                  {item.label}
                </span>
                <span
                  className={`block text-xs font-medium leading-tight mt-0.5 truncate ${
                    isLight ? 'text-gray-400' : 'text-gray-500'
                  }`}
                >
                  {item.desc}
                </span>
              </div>

              <ChevronRight
                className={`transition-all transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 ${
                  isLight ? 'text-[#D8C4F0]' : 'text-[#caa5d8]'
                }`}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

// 4. SEARCH OVERLAY
const SearchOverlay = ({ isOpen, onClose, theme }) => {
  if (!isOpen) return null;
  const isLight = theme === 'light';

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col animate-in fade-in slide-in-from-top-4 duration-300 backdrop-blur-xl ${
        isLight ? 'bg-white/90' : 'bg-[#050505]/90'
      }`}
    >
      <div className="p-6 flex items-center gap-4 max-w-4xl mx-auto w-full mt-10">
        <Search
          size={28}
          className={isLight ? 'text-gray-400' : 'text-[#00fff2]'}
        />
        <input
          type="text"
          autoFocus
          placeholder="O que você procura?"
          className={`flex-1 bg-transparent text-3xl font-black outline-none placeholder:opacity-30 ${
            isLight ? 'text-gray-800 placeholder-gray-400' : 'text-white placeholder-gray-600'
          }`}
        />
        <button onClick={onClose} className="p-2 hover:bg-black/5 rounded-full">
          <X size={28} className={isLight ? 'text-gray-500' : 'text-white'} />
        </button>
      </div>
    </div>
  );
};

// 5. BENTO CARD (Wrapper Principal)
const BentoCard = ({
  children,
  className,
  theme,
  title,
  subtitle,
  onClick,
  to,
  noPadding = false
}) => {
  const isLight = theme === 'light';

  const content = (
    <div className={`relative z-10 h-full flex flex-col ${noPadding ? '' : 'p-5 md:p-6'}`}>
      {(title || subtitle) && (
        <div className="mb-4">
          {subtitle && (
            <span
              className={`text-[10px] md:text-xs font-bold tracking-widest uppercase mb-1 block ${
                isLight ? 'text-[#D8C4F0]' : 'text-[#caa5d8]'
              }`}
            >
              {subtitle}
            </span>
          )}
          {title && (
            <h3
              className={`text-lg md:text-xl font-bold leading-none ${
                isLight ? 'text-gray-800' : 'text-white font-mono'
              }`}
            >
              {title}
            </h3>
          )}
        </div>
      )}
      {children}
    </div>
  );

  const baseClasses = `relative overflow-hidden transition-all duration-300 group ${className} ${
    isLight
      ? 'bg-white rounded-3xl shadow-[0_10px_40px_-10px_rgba(216,196,240,0.3)] border border-transparent hover:border-[#D8C4F0]'
      : 'bg-[#121217] rounded-3xl border border-[#333] hover:border-[#00fff2] hover:shadow-[0_0_20px_rgba(0,255,242,0.1)]'
  } active:scale-[0.99]`;

  const CardWrapper = ({ children }) => (
    <>
      {!isLight && (
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none group-hover:opacity-[0.07] transition-opacity"
          style={{
            backgroundImage:
              'linear-gradient(#00fff2 1px, transparent 1px), linear-gradient(90deg, #00fff2 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
      )}
      {children}
    </>
  );

  if (to)
    return (
      <Link to={to} className={baseClasses}>
        <CardWrapper>{content}</CardWrapper>
      </Link>
    );

  return (
    <div
      onClick={onClick}
      className={`${baseClasses} ${onClick ? 'cursor-pointer' : ''}`}
    >
      <CardWrapper>{content}</CardWrapper>
    </div>
  );
};

// 6. KPOP PHOTOCARD
const KpopPhotocard = ({ driver, theme, onClick }) => {
  const isLight = theme === 'light';
  const [isFlipped, setIsFlipped] = useState(false);
  
  const surname = driver.name.split(' ').slice(-1)[0].toLowerCase();
  // Fallback se a imagem não existir
  const photocardUrl = driver.image; 

  const borderClass = isLight
    ? 'border-[6px] border-white ring-4 ring-[#F7B8C8] shadow-2xl'
    : 'border-[6px] border-[#1a1a20] ring-4 ring-[#caa5d8] shadow-[0_0_20px_rgba(202,165,216,0.3)]';

  const backBgClass = isLight
    ? 'bg-gradient-to-br from-[#FFF5F8] via-white to-[#FEE4EF]'
    : 'bg-[#121217]';

  return (
    <div
      className="group relative w-full aspect-[3/4.2] cursor-pointer"
      style={{ perspective: '1000px' }}
      onClick={(e) => {
        e.stopPropagation();
        setIsFlipped(!isFlipped);
        if (onClick) onClick();
      }}
    >
      <div
        className="relative w-full h-full transition-all duration-700"
        style={{ 
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
      >
        {/* FRENTE */}
        <div
          className={`absolute inset-0 rounded-[2rem] overflow-hidden ${borderClass} bg-gray-200 z-10`}
          style={{ backfaceVisibility: 'hidden' }}
        >
          <img
            src={photocardUrl}
            alt={driver.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Overlay Holográfico (Simulado) */}
          <div className={`absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-30 transition-opacity pointer-events-none mix-blend-overlay`} />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          <div className="absolute top-3 right-4 text-7xl font-black text-white opacity-20 pointer-events-none tracking-tighter">
            {driver.number}
          </div>

          <div className="absolute bottom-0 left-0 w-full p-5 z-10 flex flex-col items-center text-center">
            <h3 className="text-3xl font-black text-white leading-none drop-shadow-lg tracking-tighter uppercase mb-1">
              {surname}
            </h3>
            <div className="flex items-center justify-center gap-1.5 text-white/80 text-[9px] uppercase tracking-[0.2em] animate-pulse bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm">
              <RotateCcw size={10} /> Virar Card
            </div>
          </div>
        </div>

        {/* VERSO */}
        <div
          className={`absolute inset-0 rounded-[2rem] p-5 flex flex-col justify-between text-center ${backBgClass} ${borderClass}`}
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="flex flex-col items-center gap-2 mt-2">
            <div
              className={`w-16 h-16 rounded-full overflow-hidden border-2 ${
                isLight ? 'border-[#F7B8C8]' : 'border-[#caa5d8]'
              }`}
            >
              <img src={driver.image} className="w-full h-full object-cover" alt="Avatar" />
            </div>
            
            <div>
              <h3 className={`font-black text-lg leading-none ${isLight ? 'text-gray-800' : 'text-white'}`}>
                {driver.name}
              </h3>
              <span className={`inline-block mt-1 px-2 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wider ${
                isLight ? 'bg-[#F7B8C8]/20 text-pink-600' : 'bg-[#caa5d8]/20 text-[#caa5d8]'
              }`}>
                {driver.team}
              </span>
            </div>
          </div>

          <div className="flex justify-center gap-3 text-[10px] font-bold uppercase opacity-60">
            <span>{driver.zodiac}</span>
            <span>•</span>
            <span>#{driver.number}</span>
          </div>

          <div className={`p-4 rounded-xl text-sm italic font-medium relative mx-1 ${
              isLight ? 'bg-white text-gray-600 shadow-sm' : 'bg-[#1a1a20] text-gray-300 border border-white/5'
            }`}
          >
            <span className="absolute -top-2 -left-1 text-3xl opacity-20 font-serif">"</span>
             {driver.secretFact || 'Aguardando segredo...'}
            <span className="absolute -bottom-4 -right-1 text-3xl opacity-20 font-serif">"</span>
          </div>

          <div className="mt-1 transform -rotate-3 opacity-50 pb-2">
             <p className={`font-handwriting text-2xl ${isLight ? 'text-gray-400' : 'text-[#caa5d8]'}`} style={{ fontFamily: 'cursive' }}>
               {driver.signature || driver.name.split(' ')[0]}
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// 7. NEXT RACE WIDGET (Blocos Estruturados)
const NextRaceWidget = ({ theme }) => {
  const isLight = theme === 'light';
  
  // Cores Consistentes
  const C = {
    roxo: '#caa5d8',
    rosa: '#fac4dc',
    neonRoxo: '#bd00ff',
    neonCyan: '#00fff2' 
  };

  const sessions = [
    { day: 'SEX', date: '05', name: 'Treino Livre 1', time: '06:30', type: 'FP' },
    { day: 'SEX', date: '05', name: 'Treino Livre 2', time: '10:00', type: 'FP' },
    { day: 'SÁB', date: '06', name: 'Treino Livre 3', time: '07:30', type: 'FP' },
    { day: 'SÁB', date: '06', name: 'Classificação', time: '11:00', type: 'Q', highlight: true },
    { day: 'DOM', date: '07', name: 'Grande Prêmio', time: '10:00', type: 'RACE', main: true },
  ];

  return (
    <div className={`h-full flex flex-col p-5 relative overflow-hidden ${isLight ? 'text-gray-800' : 'text-white'}`}>
       
       <div className={`absolute -right-8 -bottom-12 opacity-[0.05] pointer-events-none rotate-12 ${isLight ? 'text-purple-900' : 'text-[#bd00ff]'}`}>
         <Flag size={220} />
       </div>

       {/* CABEÇALHO */}
       <div className="flex justify-between items-end mb-4 z-10 relative">
          <div>
             <span className="flex items-center gap-1 text-[9px] font-black uppercase tracking-[0.2em] opacity-60 mb-1">
                <MapPin size={10} /> Yas Marina, EAU
             </span>
             <h3 
               className="text-2xl font-black leading-none italic tracking-tighter text-transparent bg-clip-text"
               style={{ 
                 backgroundImage: isLight 
                   ? `linear-gradient(to right, ${C.roxo}, ${C.rosa})` 
                   : `linear-gradient(to right, #fff, ${C.neonRoxo})`
               }}
             >
               ABU DHABI
             </h3>
          </div>
          
          <div className={`px-2 py-1 rounded-lg text-[9px] font-bold flex items-center gap-1.5 border shadow-sm ${isLight ? 'bg-white border-gray-100 text-gray-500' : 'bg-white/10 border-white/5 text-gray-300'}`}>
             <Clock size={10} /> 
             <span>BRT</span>
          </div>
       </div>

       {/* LISTA DE SESSÕES */}
       <div className="flex-1 flex flex-col justify-between gap-2 z-10">
          {sessions.map((session, i) => {
             const isMain = session.main;
             const isHighlight = session.highlight;

             let bgStyle = {};
             
             if (isMain) {
                // CORRIDA
                bgStyle = { 
                   background: isLight 
                     ? `linear-gradient(90deg, ${C.roxo}, ${C.rosa})` 
                     : `linear-gradient(90deg, ${C.neonRoxo}, #9d00ff)`,
                   boxShadow: isLight ? '0 4px 15px -3px rgba(202,165,216,0.5)' : `0 0 15px ${C.neonRoxo}40`,
                   color: 'white'
                };
             } else if (isHighlight) {
                // QUALI
                bgStyle = {
                   background: isLight ? 'white' : 'rgba(255,255,255,0.03)',
                   borderColor: isLight ? C.roxo : C.neonCyan,
                   borderWidth: '1px',
                   borderStyle: 'solid',
                   color: isLight ? '#333' : 'white'
                };
             } else {
                // TREINOS
                bgStyle = {
                   background: isLight ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.02)',
                   borderColor: isLight ? '#f3f4f6' : 'transparent', 
                   borderWidth: '1px',
                   borderStyle: 'solid',
                   color: isLight ? '#9ca3af' : '#6b7280'
                };
             }

             return (
               <div key={i} className={`flex items-center justify-between p-2.5 rounded-xl transition-all duration-300 group hover:scale-[1.01] ${isMain ? 'shadow-md' : ''}`} style={bgStyle}>
                  <div className="flex items-center gap-3">
                     <div className={`flex flex-col items-center justify-center w-9 h-9 rounded-lg font-bold leading-none ${isMain ? 'bg-white/20 text-white backdrop-blur-sm' : (isLight ? 'bg-gray-50 text-gray-400' : 'bg-white/5 text-gray-500')}`}>
                        <span className="text-[7px] uppercase opacity-70 tracking-wider mb-0.5">{session.day}</span>
                        <span className="text-xs">{session.date}</span>
                     </div>
                     <div>
                        <span className={`block text-[11px] ${isMain || isHighlight ? 'font-black uppercase tracking-wide' : 'font-bold'}`}>{session.name}</span>
                     </div>
                  </div>
                  <div className={`font-mono font-bold tracking-tight ${isMain ? 'text-sm' : 'text-xs opacity-80'}`}>
                    {session.time}
                  </div>
               </div>
             );
          })}
       </div>
    </div>
  );
};

// 8. NEWS WIDGET (Lista Clean)
const NewsWidget = ({ theme = 'light', onNewsClick, posts }) => {
  const isLight = theme === 'light';
  const [internalNews, setInternalNews] = useState([]);
  const [loading, setLoading] = useState(!posts);

  useEffect(() => {
    if (posts && posts.length > 0) {
      setLoading(false);
      return;
    }
    async function load() {
      try {
        const data = await fetchNews();
        setInternalNews(data || []);
      } catch (err) {
        console.error("Erro news", err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [posts]);

  const dataToShow = (posts && posts.length > 0) ? posts : internalNews;

  // Colors
  const C = {
    roxo: '#caa5d8',
    rosa: '#fac4dc',
    azul: '#bbd3f2',
    neonRoxo: '#bd00ff',
    neonCyan: '#00fff2'
  };

  const getBadgeStyle = (type) => {
    if (type === 'article') {
      return isLight
        ? { background: `linear-gradient(90deg, ${C.roxo}, ${C.rosa})`, color: 'white', border: 'none' }
        : { borderColor: C.neonRoxo, color: C.neonRoxo, backgroundColor: 'transparent', border: '1px solid' };
    }
    return isLight
      ? { backgroundColor: C.azul, color: 'white', border: 'none' }
      : { borderColor: C.neonCyan, color: C.neonCyan, backgroundColor: 'transparent', border: '1px solid' };
  };

  const getCategoryName = (item) => {
    if (!item.category) return item.type === 'article' ? "Opinião" : "News";
    return typeof item.category === 'object' ? item.category.title : item.category;
  };

  return (
    <div className="flex flex-col h-full min-h-0">  
      <div className="flex items-center justify-between mb-4 px-1 shrink-0">
        <div className="flex items-center gap-2">
          <Newspaper size={18} className={isLight ? 'text-gray-400' : 'text-[#bd00ff]'} />
          <span className={`text-xs font-black uppercase tracking-widest ${isLight ? 'text-gray-500' : 'text-white'}`}>
            Últimas do Paddock
          </span>
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-3 overflow-y-auto pr-2 custom-scrollbar">
        {loading && (
          <div className="flex-1 flex flex-col items-center justify-center opacity-50 gap-2">
            <Loader2 size={24} className="animate-spin text-purple-400" />
            <span className="text-xs">Carregando fofocas...</span>
          </div>
        )}
        
        {!loading && dataToShow.length === 0 && (
          <div className="flex-1 flex items-center justify-center text-xs opacity-50">Sem notícias.</div>
        )}

        {!loading && dataToShow.slice(0, 5).map((item) => (
          <button
            key={item._id || item.id}
            onClick={() => onNewsClick?.({ slug: item.slug?.current || item.slug, id: item._id || item.id, title: item.title, type: item.type })}
            className={`group relative flex gap-3 p-3 rounded-2xl text-left border transition-all duration-300 cursor-pointer shrink-0
              ${isLight
                  ? "bg-white border-gray-50 hover:border-purple-200 hover:shadow-md hover:-translate-y-0.5"
                  : "bg-[#0a0a12]/60 hover:bg-[#121217] border-[#222] hover:border-[#00fff2]/50"
              }`}
          >
            {(item.image || item.mainImage) && (
              <div className="w-16 h-16 shrink-0 rounded-xl overflow-hidden relative shadow-sm">
                <img src={item.image || item.mainImage?.asset?.url} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
            )}

            <div className="flex-1 min-w-0 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[8px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded shadow-sm" style={getBadgeStyle(item.type)}>
                  {getCategoryName(item)}
                </span>
                <span className={`text-[9px] font-bold opacity-40 ${isLight ? "text-gray-500" : "text-gray-400"}`}>
                  {item.publishedAt ? new Date(item.publishedAt).toLocaleDateString('pt-BR', {day: '2-digit', month: 'short'}) : 'Hoje'}
                </span>
              </div>
              <h4 className={`text-xs md:text-sm font-bold leading-snug line-clamp-2 ${isLight ? "text-gray-800" : "text-gray-200 group-hover:text-white"}`}>
                {item.title}
              </h4>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

// 9. FANZONE WIDGET
const FanzoneWidget = ({ theme }) => {
  const isLight = theme === 'light';
  return (
    <div className="h-full flex flex-col items-center justify-center p-4 text-center relative z-10 group">
      <div className={`p-4 rounded-full mb-3 transition-transform duration-500 group-hover:scale-110 ${isLight ? 'bg-purple-50 text-purple-400' : 'bg-[#1a1a20] text-[#bd00ff]'}`}>
        <Sparkles size={28} />
      </div>
      <h3 className={`font-black text-lg ${isLight ? 'text-gray-800' : 'text-white'}`}>
        Fanzone
      </h3>
      <p className={`text-[10px] uppercase font-bold tracking-widest opacity-50 mt-1 ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>
        Vote no Driver of The Day
      </p>
    </div>
  );
};

// 10. SEASON WIDGET (Com barras animadas)
const SeasonWidget = ({ theme }) => {
  const isLight = theme === 'light';
  
  const C = {
    roxo: '#caa5d8',
    rosa: '#fac4dc',
    azul: '#bbd3f2',
    neonRoxo: '#bd00ff',
    neonCyan: '#00fff2'
  };

  const topDrivers = [
    { pos: 1, name: 'L. Norris', team: 'MCL', pts: 408, color: '#FF8700' },
    { pos: 2, name: 'M. Verstappen', team: 'RBR', pts: 396, color: '#1E41FF' },
    { pos: 3, name: 'O. Piastri', team: 'MCL', pts: 392, color: '#FF8700' },
    { pos: 4, name: 'G. Russell', team: 'MER', pts: 309, color: '#00D2BE' },
    { pos: 5, name: 'C. Leclerc', team: 'FER', pts: 230, color: '#FF0000' },
  ];

  const constructors = [
    { name: 'McLaren', pts: 800, color: '#FF8700', percent: '100%' },
    { name: 'Mercedes', pts: 459, color: '#00D2BE', percent: '57%' },
    { name: 'Red Bull', pts: 426, color: '#1E41FF', percent: '53%' },
  ];

  const boxClass = isLight ? 'bg-white border-gray-100' : 'bg-white/5 border-white/5';
  
  return (
    <div className={`h-full flex flex-col justify-between p-5 relative overflow-hidden text-left ${isLight ? 'text-gray-800' : 'text-white'}`}>
      
      <div 
        className="absolute -right-10 -top-10 w-40 h-40 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: isLight ? C.azul : C.neonCyan }}
      />
      
      {/* CABEÇALHO */}
      <div className="flex justify-between items-start mb-4 z-10 relative">
         <div className="flex items-center gap-3">
            <div className={`p-2.5 rounded-xl shadow-sm ${isLight ? 'bg-purple-50 text-purple-400' : 'bg-white/10 text-[#bd00ff]'}`}>
               <Trophy size={18} />
            </div>
            <div>
               <h3 className="text-sm font-black uppercase leading-none tracking-wide text-transparent bg-clip-text"
                 style={{ backgroundImage: isLight ? `linear-gradient(to right, ${C.roxo}, ${C.rosa})` : `linear-gradient(to right, #fff, ${C.neonRoxo})` }}>
                 Temporada 2025
               </h3>
               <p className="text-[9px] font-bold uppercase tracking-wider mt-0.5 opacity-50">Campeonato Encerrado</p>
            </div>
         </div>
      </div>

      {/* DRIVERS & CONSTRUCTORS */}
      <div className="flex-1 grid grid-cols-1 gap-3 z-10">
         
         {/* Top Drivers List */}
         <div className={`rounded-2xl p-3 border shadow-sm flex flex-col justify-center ${boxClass}`}>
            <div className="flex items-center justify-between mb-2 px-1">
               <span className="text-[8px] font-black uppercase tracking-[0.2em] opacity-50">Top 5 Pilotos</span>
               <span className="text-[8px] font-bold opacity-30">PTS</span>
            </div>
            <div className="space-y-1.5">
               {topDrivers.map((d) => (
                  <div key={d.pos} className="flex items-center justify-between text-xs group">
                     <div className="flex items-center gap-2">
                        <span className={`font-mono w-4 text-[9px] text-center rounded-md ${d.pos === 1 ? 'bg-yellow-100 text-yellow-600 font-bold' : 'opacity-40'}`}>{d.pos}</span>
                        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: d.color }}></div>
                        <span className={`truncate max-w-[90px] ${d.pos === 1 ? 'font-bold' : 'font-medium'}`}>{d.name}</span>
                     </div>
                     <span className="font-mono font-medium opacity-60 text-[10px] group-hover:opacity-100 transition-opacity">{d.pts}</span>
                  </div>
               ))}
            </div>
         </div>

         {/* Constructors Bars */}
         <div className={`rounded-2xl p-3 border shadow-sm flex flex-col justify-center ${boxClass}`}>
            <div className="flex items-center gap-1.5 mb-2 px-1 opacity-50">
               <Wrench size={10} />
               <span className="text-[8px] font-black uppercase tracking-[0.2em]">Construtores</span>
            </div>
            <div className="space-y-2.5">
               {constructors.map((t, i) => (
                  <div key={i}>
                     <div className="flex justify-between text-[9px] font-bold mb-1 px-0.5">
                        <span style={{ color: t.color }}>{t.name}</span>
                        <span className="font-mono opacity-60">{t.pts}</span>
                     </div>
                     <div className={`w-full h-1.5 rounded-full overflow-hidden ${isLight ? 'bg-gray-100' : 'bg-white/10'}`}>
                        <div 
                          className="h-full rounded-full transition-all duration-1000 ease-out origin-left hover:brightness-110" 
                          style={{ width: t.percent, backgroundColor: t.color }}
                        />
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
      
      <div className="mt-2 pt-2 border-t border-dashed border-gray-200/50 dark:border-white/10 flex justify-center">
         <Link to="/regulation" className={`text-[9px] font-bold uppercase tracking-widest py-1.5 px-4 rounded-full transition-all flex items-center gap-1 hover:scale-105 ${isLight ? 'bg-gray-50 text-gray-400 hover:text-gray-600' : 'bg-white/5 text-gray-500 hover:text-white'}`}>
           Ver Regulamento 2026
           <ArrowRight size={8} />
         </Link>
      </div>
    </div>
  );
};

// 11. CONTACT WIDGET
const ContactWidget = ({ theme }) => {
  const isLight = theme === 'light';
  return (
    <div className="h-full flex flex-col items-center justify-center text-center p-4 relative z-10 group">
      <div className={`p-4 rounded-full mb-3 transition-transform duration-300 group-hover:rotate-12 ${isLight ? 'bg-pink-50 text-pink-400' : 'bg-[#1a1a20] text-[#caa5d8]'}`}>
        <MessageSquare size={28} />
      </div>
      <h3 className={`font-black text-lg ${isLight ? 'text-gray-800' : 'text-white'}`}>
        Contato
      </h3>
      <p className={`text-[10px] font-bold uppercase tracking-widest opacity-60 ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>
        Mande um alô
      </p>
    </div>
  );
};

// 12. CURIOSITY WIDGET
const CuriosityWidget = ({ theme }) => (
  <div className="h-full flex flex-col items-center justify-center text-center p-2 relative z-10">
    <div className="bg-yellow-400/10 p-3 rounded-full mb-2">
      <Zap size={24} className="text-yellow-400" />
    </div>
    <h4 className="font-bold text-sm leading-tight">Você Sabia?</h4>
    <span className="text-[9px] opacity-60 mt-1 block px-2">Clique para uma curiosidade aleatória da F1.</span>
  </div>
);

// 13. NEWSLETTER WIDGET (Minimalista)
const NewsletterWidget = ({ theme }) => {
  const isLight = theme === "light";
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    try {
      setStatus("loading");
      // Simulação de chamada
      await new Promise(r => setTimeout(r, 1500)); 
      setStatus("success");
      setEmail("");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <div className="h-full flex flex-col md:flex-row items-center justify-between p-6 md:p-8 gap-6 relative z-10">
      
      {/* Ícone de fundo decorativo */}
      <Mail className={`absolute -right-4 -top-4 w-32 h-32 opacity-5 pointer-events-none rotate-12 ${isLight ? 'text-purple-600' : 'text-white'}`} />

      <div className="flex items-center gap-5 shrink-0 relative z-10">
        <div className={`p-5 rounded-2xl shadow-sm ${isLight ? "bg-white text-purple-400" : "bg-[#1a1a20] border border-[#333] text-white"}`}>
          <Mail size={28} />
        </div>
        <div>
          <h3 className={`font-black text-2xl ${isLight ? 'text-gray-800' : 'text-white'}`}>Newsletter</h3>
          <p className={`text-sm font-medium ${isLight ? 'text-gray-400' : 'text-gray-500'}`}>Fofocas quentinhas na sua caixa de entrada.</p>
        </div>
      </div>

      <form className="flex flex-1 gap-3 w-full max-w-md relative z-10" onSubmit={handleSubmit}>
        <div className="relative flex-1 group">
          <input
            type="email"
            placeholder="seu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full h-12 px-5 rounded-xl text-sm font-bold outline-none transition-all ${
              isLight
                ? "bg-white border-2 border-transparent focus:border-[#D8C4F0] text-gray-800 placeholder-gray-300 shadow-sm"
                : "bg-[#0a0a12] border border-[#333] focus:border-[#00fff2] text-white placeholder-gray-600"
            }`}
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className={`h-12 px-8 rounded-xl font-bold text-sm transition-all active:scale-95 whitespace-nowrap shadow-lg flex items-center gap-2
            ${isLight
              ? "bg-gray-900 hover:bg-black text-white hover:shadow-xl"
              : "bg-[#bd00ff] hover:bg-[#a000db] text-white shadow-[0_0_15px_rgba(189,0,255,0.4)]"
            }
            ${status === "success" ? "bg-green-500 hover:bg-green-600" : ""}
          `}
        >
          {status === "loading" && <Loader2 size={16} className="animate-spin" />}
          {status === "success" ? "Enviado!" : "Assinar"}
        </button>
      </form>
    </div>
  );
};

// --- PÁGINA HOME (PRINCIPAL) ---

// Mock Data para o Photocard do dia
const DRIVER_OF_DAY = {
  name: "Lando Norris",
  team: "McLaren",
  number: "4",
  // Usando placeholder visual, substitua pela foto real
  image: "https://placehold.co/600x800/FF8700/white?text=Lando+Norris", 
  zodiac: "Escorpião",
  secretFact: "Tem medo de peixes mas ama sushi.",
  signature: "L4ndo",
  vibes: [{ icon: Sparkles }]
};

export default function Home() {
  // Estados Globais da Página
  const [theme, setTheme] = useState('light'); // 'light' | 'dark'
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Toggle Theme
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  // Classes condicionais baseadas no tema para o Background da página
  const pageBg = theme === 'light' 
    ? 'bg-[#FFF5F8] text-gray-800' 
    : 'bg-[#050505] text-white';

  return (
    <div className={`min-h-screen transition-colors duration-500 ease-in-out ${pageBg} selection:bg-purple-300 selection:text-purple-900`}>
      <ScrollToTop />
      
      {/* --- OVERLAYS --- */}
      <NavigationOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} theme={theme} />
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} theme={theme} />

      {/* --- HEADER --- */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-md border-b border-white/10 px-4 py-3 md:px-8 flex items-center justify-between">
        {/* Esquerda: Menu + Busca (Mobile) */}
        <div className="flex items-center gap-2 md:hidden">
          <button onClick={() => setIsMenuOpen(true)} className="p-2 hover:bg-black/5 rounded-full transition-colors">
            <Menu size={24} />
          </button>
          <button onClick={() => setIsSearchOpen(true)} className="p-2 hover:bg-black/5 rounded-full transition-colors">
            <Search size={22} />
          </button>
        </div>

        {/* Centro: Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
          <LogoHelmet theme={theme} size="normal" />
        </div>

        {/* Direita: Ações Desktop + Toggle Theme */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 mr-2">
             <button 
               onClick={() => setIsSearchOpen(true)}
               className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                 theme === 'light' 
                   ? 'bg-white hover:bg-gray-50 text-gray-400 shadow-sm' 
                   : 'bg-white/5 hover:bg-white/10 text-gray-400'
               }`}
             >
               <Search size={14} />
               <span>Buscar</span>
             </button>
             <button 
               onClick={() => setIsMenuOpen(true)}
               className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                 theme === 'light' 
                   ? 'bg-gray-900 text-white hover:bg-black shadow-lg' 
                   : 'bg-white text-black hover:bg-gray-200 shadow-[0_0_15px_rgba(255,255,255,0.3)]'
               }`}
             >
               <Menu size={14} />
               <span>Menu</span>
             </button>
          </div>

          <button 
            onClick={toggleTheme}
            className={`p-3 rounded-full transition-all active:scale-90 ${
              theme === 'light' 
                ? 'bg-yellow-100 text-yellow-600 hover:bg-yellow-200' 
                : 'bg-purple-900/30 text-purple-300 hover:bg-purple-900/50'
            }`}
          >
            {theme === 'light' ? <Sun size={20} className="fill-current" /> : <Moon size={20} className="fill-current" />}
          </button>
        </div>
      </header>

      {/* --- MAIN CONTENT (BENTO GRID) --- */}
      <main className="max-w-7xl mx-auto p-4 md:p-6 pb-20">
        
        {/* Intro Text */}
        <div className="mb-8 mt-4 md:mb-12 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-2">
            Olá, <span className={theme === 'light' ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400' : 'text-transparent bg-clip-text bg-gradient-to-r from-[#bd00ff] to-[#00fff2]'}>Padoquete!</span> 👋
          </h2>
          <p className={`text-sm md:text-lg font-medium max-w-xl ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>
            Tudo o que você precisa saber sobre a F1, com aquele toque de caos e brilho que a gente ama.
          </p>
        </div>

        {/* GRID LAYOUT */}
        {/* Mobile: 1 col | Tablet: 2 cols | Desktop: 4 cols */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(180px,auto)]">
          
          {/* 1. PRÓXIMA CORRIDA (Destaque Largo) */}
          <div className="lg:col-span-2 lg:row-span-1">
            <BentoCard theme={theme} className="h-full min-h-[220px]" noPadding>
              <NextRaceWidget theme={theme} />
            </BentoCard>
          </div>

          {/* 2. NOTÍCIAS (Lista Alta) */}
          <div className="lg:col-span-2 lg:row-span-2">
             <BentoCard theme={theme} className="h-full min-h-[400px]" noPadding>
               <NewsWidget theme={theme} posts={null} onNewsClick={(news) => console.log(news)} />
             </BentoCard>
          </div>

          {/* 3. SEASON / STANDINGS (Bloco Médio) */}
          <div className="lg:col-span-1 lg:row-span-2">
            <BentoCard theme={theme} className="h-full min-h-[380px]" noPadding>
              <SeasonWidget theme={theme} />
            </BentoCard>
          </div>

          {/* 4. PHOTOCARD (Bloco Visual) */}
          <div className="lg:col-span-1 lg:row-span-2 flex flex-col gap-4">
             {/* Título Decorativo */}
             <div className="flex items-center justify-between px-1">
                <span className={`text-[10px] font-black uppercase tracking-widest ${theme === 'light' ? 'text-gray-400' : 'text-gray-500'}`}>Driver of the Day</span>
                <Heart size={14} className={theme === 'light' ? 'text-red-400' : 'text-pink-500'} />
             </div>
             
             {/* O Card em si */}
             <div className="flex-1">
                <KpopPhotocard driver={DRIVER_OF_DAY} theme={theme} />
             </div>
          </div>

          {/* 5. WIDGETS MENORES (Linha de Preenchimento) */}
          <div className="lg:col-span-1">
            <BentoCard theme={theme} className="h-full flex items-center justify-center min-h-[160px]" onClick={() => console.log('Vote!')}>
               <FanzoneWidget theme={theme} />
            </BentoCard>
          </div>

          <div className="lg:col-span-1">
             <div className="grid grid-rows-2 gap-4 h-full min-h-[160px]">
                <BentoCard theme={theme} className="flex items-center justify-center" onClick={() => alert('Curiosidade!')} noPadding>
                   <CuriosityWidget theme={theme} />
                </BentoCard>
                <BentoCard theme={theme} className="flex items-center justify-center" to="/contact" noPadding>
                   <ContactWidget theme={theme} />
                </BentoCard>
             </div>
          </div>

          {/* 6. NEWSLETTER (Rodapé Largo) */}
          <div className="md:col-span-2 lg:col-span-4">
            <BentoCard theme={theme} className="min-h-[200px]" noPadding>
              <NewsletterWidget theme={theme} />
            </BentoCard>
          </div>

        </div>
      </main>

      {/* --- FOOTER SIMPLES --- */}
      <footer className={`py-10 text-center border-t ${theme === 'light' ? 'border-gray-200 text-gray-400' : 'border-white/5 text-gray-600'}`}>
         <div className="flex items-center justify-center gap-2 mb-4 opacity-50">
            <LogoHelmet theme={theme} size="small" />
         </div>
         <p className="text-xs font-medium">
            Feito com <span className="text-red-400">♥</span> e muita velocidade.
         </p>
         <p className="text-[10px] mt-2 opacity-60">
            © 2025 Autamubilismo. Não afiliado à Fórmula 1.
         </p>
      </footer>
    </div>
  );
}