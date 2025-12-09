import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  X, ChevronRight, Flag, CloudMoon, MapPin, Newspaper, Zap, Mail, Sparkles, 
  Star, RotateCcw, Heart, MessageSquare, Menu, Sun, Moon, ArrowLeft, ArrowRight, Search, Loader2, AlertCircle, Calendar, Clock, Trophy, Wrench, FlagTriangleRight
} from 'lucide-react';
import { LOGO_LIGHT_URL, LOGO_DARK_URL, SITE_MAP } from '../data';
import { fetchNews } from '../services/newsService';

// --- HELPERS ---
export const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

// --- COMPONENTES ---
// LOGO ATUALIZADO: Tamanho Original + Flexibilidade
// LOGO ATUALIZADO: Estático, Sem Efeitos e Gigante (3x Maior)
export const LogoHelmet = ({ theme, size = 'normal' }) => {
  const isLight = theme === 'light';
  const [imageError, setImageError] = useState(false);
  useEffect(() => setImageError(false), [theme]);
  const currentLogoUrl = isLight ? LOGO_LIGHT_URL : LOGO_DARK_URL;
  
  const containerClass = size === 'large' 
    ? "w-64 h-auto md:w-[48rem]" 
    : "w-32 h-auto md:w-48"; 

  if (!imageError) return (
    <div className="flex flex-col items-center justify-center">
      <div className={`${containerClass} relative flex items-center justify-center`}>
        <img 
          src={currentLogoUrl} 
          alt="Autamubilismo" 
          onError={() => setImageError(true)} 
          className="w-full h-full object-contain block"
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

export const BackButton = ({ to, theme }) => {
  const isLight = theme === 'light';
  return (
    <Link
      to={to}
      className={`group mb-6 inline-flex items-center gap-2 text-sm font-bold transition-colors ${
        isLight
          ? 'text-gray-500 hover:text-[#D8C4F0]'
          : 'text-gray-400 hover:text-[#00fff2]'
      }`}
    >
      <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
      Voltar
    </Link>
  );
};

export const NavigationOverlay = ({ isOpen, onClose, theme }) => {
  if (!isOpen) return null;
  const isLight = theme === 'light';

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col overflow-y-auto animate-in slide-in-from-left duration-300 ${
        isLight ? 'bg-[#FFF5F8]' : 'bg-[#050505]'
      }`}
    >
      <div className="p-6 flex justify-end">
        <button onClick={onClose}>
          <X size={24} className={isLight ? 'text-gray-600' : 'text-white'} />
        </button>
      </div>

      <div className="flex-1 max-w-4xl mx-auto w-full p-4 md:p-6 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {SITE_MAP.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              onClick={onClose}
              className={`group p-3 md:p-4 rounded-2xl flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4 text-left transition-all ${
                isLight
                  ? 'bg-white hover:bg-[#F7B8C8]/20 hover:shadow-lg'
                  : 'bg-[#121217] hover:bg-[#1a1a20] border border-[#333] hover:border-[#00fff2] hover:shadow-[0_0_15px_rgba(0,255,242,0.1)]'
              }`}
            >
              <div
                className={`w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full flex items-center justify-center transition-colors ${
                  isLight
                    ? 'bg-[#F7B8C8]/20 text-[#D8C4F0]'
                    : 'bg-[#1a1a20] text-[#00fff2]'
                }`}
              >
                {item.icon && <item.icon size={20} />}
              </div>

              <div className="flex-1 min-w-0">
                <span
                  className={`block text-sm md:text-xl font-bold truncate ${
                    isLight ? 'text-gray-800' : 'text-white'
                  }`}
                >
                  {item.label}
                </span>
                <span
                  className={`block text-[10px] md:text-xs font-medium leading-tight mt-0.5 ${
                    isLight ? 'text-gray-400' : 'text-gray-500'
                  }`}
                >
                  {item.desc}
                </span>
              </div>

              <ChevronRight
                className={`ml-auto opacity-0 group-hover:opacity-100 transition-opacity hidden md:block ${
                  isLight ? 'text-[#D8C4F0]' : 'text-[#bd00ff]'
                }`}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export const SearchOverlay = ({ isOpen, onClose, theme }) => {
  if (!isOpen) return null;
  const isLight = theme === 'light';

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col animate-in fade-in slide-in-from-top-4 duration-300 backdrop-blur-md ${
        isLight ? 'bg-white/95' : 'bg-[#050505]/95'
      }`}
    >
      <div className="p-6 flex items-center gap-4 max-w-4xl mx-auto w-full">
        <Search
          size={24}
          className={isLight ? 'text-gray-400' : 'text-[#00fff2]'}
        />
        <input
          type="text"
          autoFocus
          placeholder="Buscar..."
          className={`flex-1 bg-transparent text-2xl font-bold outline-none ${
            isLight ? 'text-gray-800' : 'text-white'
          }`}
        />
        <button onClick={onClose}>
          <X size={28} />
        </button>
      </div>
    </div>
  );
};

export const BentoCard = ({
  children,
  className,
  theme,
  title,
  subtitle,
  onClick,
  to,
}) => {
  const isLight = theme === 'light';

  const content = (
    <div className="relative z-10 h-full flex flex-col p-6">
      {(title || subtitle) && (
        <div className="mb-4">
          {subtitle && (
            <span
              className={`text-xs font-bold tracking-wider uppercase mb-1 block ${
                isLight ? 'text-[#D8C4F0]' : 'text-[#caa5d8]'
              }`}
            >
              {subtitle}
            </span>
          )}
          {title && (
            <h3
              className={`text-xl font-bold leading-tight ${
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

  const baseClasses = `relative overflow-hidden transition-all duration-500 group ${className} ${
    isLight
      ? 'bg-white rounded-3xl shadow-[0_10px_40px_-10px_rgba(216,196,240,0.3)] border-2 border-transparent hover:border-[#D8C4F0]'
      : 'bg-[#121217] rounded-xl border border-[#333] hover:border-[#00fff2] shadow-[0_0_15px_rgba(0,255,242,0.05)]'
  } active:scale-[0.98]`;

  const CardWrapper = ({ children }) => (
    <>
      {!isLight && (
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(#00fff2 1px, transparent 1px), linear-gradient(90deg, #00fff2 1px, transparent 1px)',
            backgroundSize: '20px 20px',
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

export const KpopPhotocard = ({ driver, theme, onClick }) => {
  const isLight = theme === 'light';
  const [isFlipped, setIsFlipped] = useState(false);
  const VibeIcon = driver.vibes && driver.vibes[0] ? driver.vibes[0].icon : null;

  const surname = driver.name.split(' ').slice(-1)[0].toLowerCase();
  const photocardUrl = `/img/pilotos/${surname}/${surname}-photocard.jpg`;

  const borderClass = isLight
    ? 'border-4 border-[#F7B8C8] shadow-[0_8px_20px_-5px_rgba(247,184,200,0.6)]'
    : 'border-4 border-[#caa5d8] shadow-[0_0_15px_rgba(254,136,221,0.5)]';

  const backBgClass = isLight
    ? 'bg-gradient-to-b from-[#FFF5F8] to-[#FEE4EF]'
    : 'bg-[#121217]';

  return (
    <div
      className="group relative w-full aspect-[3/4] cursor-pointer perspective-1000"
      onClick={(e) => {
        e.stopPropagation();
        setIsFlipped(!isFlipped);
        if (onClick) onClick();
      }}
    >
      <div
        className={`relative w-full h-full transition-all duration-700 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : 'hover:-translate-y-2'
        }`}
      >
        {/* Frente */}
        <div
          className={`absolute inset-0 backface-hidden rounded-[2rem] overflow-hidden ${borderClass} bg-gray-200 z-10`}
        >
          <img
            src={photocardUrl}
            alt={`${driver.name} Photocard`}
            onError={(e) => {
              e.target.src = driver.image;
            }}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

          <div className="absolute top-2 right-4 text-8xl font-black text-white opacity-20 pointer-events-none">
            {driver.number}
          </div>

          <div className="absolute bottom-0 left-0 w-full p-6 z-10 flex flex-col items-center text-center">
            <h3 className="text-4xl font-black text-white leading-none drop-shadow-lg tracking-tight uppercase">
              {surname}
            </h3>
            <div className="flex items-center justify-center gap-1 text-white/70 text-[10px] mt-2 uppercase tracking-widest animate-pulse">
              <RotateCcw size={10} /> Clique para virar
            </div>
          </div>
        </div>

        {/* Verso */}
        <div
          className={`absolute inset-0 backface-hidden rotate-y-180 rounded-[2rem] p-4 flex flex-col justify-between text-center ${backBgClass} ${borderClass}`}
        >
          <div className="flex flex-col items-center gap-3 mt-4">
            <div
              className={`w-20 h-20 rounded-full overflow-hidden border-4 ${
                isLight
                  ? 'border-white shadow-md'
                  : 'border-[#caa5d8] shadow-[0_0_10px_#caa5d8]'
              }`}
            >
              <img
                src={driver.image}
                className="w-full h-full object-cover"
                alt="Perfil"
              />
            </div>
            <div>
              <h3
                className={`font-black text-xl leading-none ${
                  isLight ? 'text-gray-800' : 'text-white'
                }`}
              >
                {driver.name}
              </h3>
              <span
                className={`inline-block mt-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                  isLight
                    ? 'bg-white text-gray-600 shadow-sm'
                    : 'bg-[#caa5d8]/20 text-[#caa5d8] border border-[#caa5d8]/30'
                }`}
              >
                {driver.team}
              </span>
            </div>
          </div>

          <div className="flex justify-center gap-4 text-xs font-bold uppercase opacity-60">
            <span>{driver.zodiac}</span>
            <span>•</span>
            <span>#{driver.number}</span>
          </div>

          <div
            className={`p-4 rounded-2xl text-sm italic font-medium relative mx-1 ${
              isLight
                ? 'bg-white text-gray-600 shadow-inner'
                : 'bg-[#1a1a20] text-gray-300 border border-[#caa5d8]/30'
            }`}
          >
            <span className="absolute -top-3 -left-1 text-4xl opacity-20 font-serif">
              "
            </span>
            {driver.secretFact || 'Aguardando segredo...'}
            <span className="absolute -bottom-5 -right-1 text-4xl opacity-20 font-serif">
              "
            </span>
          </div>

          <div className="mt-1 transform -rotate-3 opacity-40">
            <p
              className={`font-handwriting text-3xl ${
                isLight ? 'text-gray-400' : 'text-[#caa5d8]'
              }`}
              style={{ fontFamily: 'cursive' }}
            >
              {driver.signature || driver.name.split(' ')[0]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


// 1. PRÓXIMA CORRIDA: Estilo "Blocos/Cards" (Estruturado)
export const NextRaceWidget = ({ theme }) => {
  const isLight = theme === 'light';
  
  const BRAND = {
    roxo: '#caa5d8',
    rosa: '#fac4dc',
    // Cores Neon para Dark Mode
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
    <div className={`h-full flex flex-col p-4 relative overflow-hidden ${isLight ? 'text-gray-800' : 'text-white'}`}>
       
       <div className={`absolute -right-6 -bottom-10 opacity-[0.07] pointer-events-none rotate-12 transition-colors duration-500 ${isLight ? 'text-purple-900' : 'text-[#bd00ff]'}`}>
          <Flag size={200} />
       </div>

       {/* CABEÇALHO */}
       <div className="flex justify-between items-end mb-3 z-10 relative">
          <div>
             <span className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-[0.2em] opacity-50 mb-0.5">
                <MapPin size={9} /> Yas Marina, EAU
             </span>
             <h3 
               className="text-2xl font-black leading-none italic tracking-tighter text-transparent bg-clip-text"
               style={{ 
                 backgroundImage: isLight 
                   ? `linear-gradient(to right, ${BRAND.roxo}, ${BRAND.rosa})` 
                   : `linear-gradient(to right, #fff, ${BRAND.neonRoxo})` // Branco para Roxo Neon
               }}
             >
               ABU DHABI
             </h3>
          </div>
          
          <div className={`px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 border shadow-sm ${isLight ? 'bg-white border-gray-100 text-gray-400' : 'bg-white/10 border-white/5 text-gray-300'}`}>
             <Clock size={9} /> 
             <span>BRT</span>
          </div>
       </div>

       {/* LISTA EM BLOCOS */}
       <div className="flex-1 flex flex-col justify-between gap-1.5 z-10">
          {sessions.map((session, i) => {
             const isMain = session.main;
             const isHighlight = session.highlight;

             let blockStyle = {};
             let textClass = "";
             
             if (isMain) {
                // CORRIDA
                blockStyle = { 
                   background: isLight 
                     ? `linear-gradient(90deg, ${BRAND.roxo}, ${BRAND.rosa})` 
                     : `linear-gradient(90deg, ${BRAND.neonRoxo}, #9d00ff)`, // Degradê Roxo Neon
                   border: 'none',
                   boxShadow: isLight ? '0 4px 10px -2px rgba(0,0,0,0.1)' : `0 0 15px ${BRAND.neonRoxo}40`
                };
                textClass = "text-white";
             } else if (isHighlight) {
                // QUALI
                blockStyle = {
                   background: isLight ? 'white' : 'rgba(255,255,255,0.03)',
                   borderColor: isLight ? BRAND.roxo : BRAND.neonCyan, // Cyan para destaque no Dark
                   borderWidth: '1px',
                   borderStyle: 'solid'
                };
                textClass = isLight ? "text-gray-800" : "text-white";
             } else {
                // TREINOS
                blockStyle = {
                   background: isLight ? 'white' : 'rgba(255,255,255,0.02)',
                   borderColor: isLight ? '#f3f4f6' : 'transparent', 
                   borderWidth: '1px',
                   borderStyle: 'solid'
                };
                textClass = isLight ? "text-gray-500" : "text-gray-500";
             }

             return (
               <div key={i} className={`flex items-center justify-between p-2 rounded-xl transition-all duration-300 group hover:scale-[1.01] ${isMain ? '' : 'shadow-sm'}`} style={blockStyle}>
                  <div className="flex items-center gap-3">
                     <div className={`flex flex-col items-center justify-center w-8 h-8 rounded-lg font-bold leading-none ${isMain ? 'bg-white/20 text-white backdrop-blur-sm' : (isLight ? 'bg-gray-50 text-gray-400' : 'bg-white/5 text-gray-500')}`}>
                        <span className="text-[7px] uppercase opacity-70 tracking-wider">{session.day}</span>
                        <span className="text-xs">{session.date}</span>
                     </div>
                     <div className={textClass}>
                        <span className={`block text-[10px] ${isMain || isHighlight ? 'font-black uppercase tracking-wide' : 'font-bold'}`}>{session.name}</span>
                     </div>
                  </div>
                  <div className={`font-mono font-bold tracking-tight ${isMain ? 'text-sm text-white' : 'text-xs ' + (isLight ? 'text-gray-400' : 'text-gray-500')}`}>{session.time}</div>
               </div>
             );
          })}
       </div>
    </div>
  );
};


// NEWS WIDGET (Cores Exatas da Marca)
export const NewsWidget = ({ theme = 'light', onNewsClick, posts }) => {
  const isLight = theme === 'light';
  
  const [internalNews, setInternalNews] = useState([]);
  const [loading, setLoading] = useState(!posts);
  const [error, setError] = useState(null);

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
        console.error(err);
        setError('Erro ao carregar notícias');
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [posts]);

  const dataToShow = (posts && posts.length > 0) ? posts : internalNews;

  // --- 🎨 CORES: PASTEL (Light) vs NEON (Dark) ---
  const BRAND = {
    // Light (Pastel)
    roxo: '#caa5d8',
    rosa: '#fac4dc',
    azul: '#bbd3f2',
    // Dark (Neon)
    neonRoxo: '#bd00ff',
    neonCyan: '#00fff2'
  };

  const getBadgeStyle = (type) => {
    if (type === 'article') {
      // OPINIÃO
      return isLight
        ? { background: `linear-gradient(90deg, ${BRAND.roxo}, ${BRAND.rosa})`, color: 'white' }
        // DARK: Borda Roxa Neon + Texto Brilhante
        : { borderColor: BRAND.neonRoxo, color: BRAND.neonRoxo, backgroundColor: 'transparent', border: '1px solid', boxShadow: `0 0 5px ${BRAND.neonRoxo}40` };
    }
    // NEWS
    return isLight
      ? { backgroundColor: BRAND.azul, color: 'white' }
      // DARK: Borda Cyan Neon
      : { borderColor: BRAND.neonCyan, color: BRAND.neonCyan, backgroundColor: 'transparent', border: '1px solid', boxShadow: `0 0 5px ${BRAND.neonCyan}40` };
  };

  const getCategoryName = (item) => {
    if (!item.category) return item.type === 'article' ? "Opinião" : "News";
    return typeof item.category === 'object' ? item.category.title : item.category;
  };

  return (
    <div className="flex flex-col h-full min-h-0">  
      <div className="flex items-center justify-between mb-3 px-1 shrink-0">
        <div className="flex items-center gap-2">
          <Newspaper size={18} className={isLight ? 'text-gray-700' : 'text-[#bd00ff]'} />
          <span className={`text-sm font-black uppercase tracking-widest ${isLight ? 'text-gray-800' : 'text-white'}`}>
            Últimas do paddock
          </span>
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-2.5 overflow-y-auto pr-1.5 custom-scrollbar">
        {loading && <div className="flex-1 flex items-center justify-center opacity-70 gap-2"><Loader2 size={24} className="animate-spin" /></div>}
        
        {!loading && dataToShow.length === 0 && <div className="flex-1 flex items-center justify-center text-xs opacity-50">Nenhuma notícia encontrada.</div>}

        {!loading && dataToShow.slice(0, 5).map((item) => (
          <button
            key={item._id || item.id}
            onClick={() => onNewsClick?.({ slug: item.slug?.current || item.slug, id: item._id || item.id, title: item.title, type: item.type })}
            className={`group relative flex gap-3 p-3 rounded-xl text-left border transition-all duration-300 cursor-pointer shrink-0
              ${isLight
                  ? "bg-white border-gray-100 hover:shadow-md hover:-translate-y-0.5"
                  : "bg-[#0a0a12]/40 hover:bg-[#0a0a12] border-[#262626]"
              }`}
            style={{ borderColor: isLight ? '#f3f4f6' : '#262626' }}
            onMouseEnter={(e) => {
                if(isLight) e.currentTarget.style.borderColor = BRAND.roxo;
                else e.currentTarget.style.borderColor = BRAND.neonRoxo; // Borda Neon no Hover
            }}
            onMouseLeave={(e) => {
                if(isLight) e.currentTarget.style.borderColor = '#f3f4f6';
                else e.currentTarget.style.borderColor = '#262626';
            }}
          >
            {(item.image || item.mainImage) && (
              <div className="w-14 h-14 shrink-0 rounded-lg overflow-hidden relative shadow-sm">
                <img src={item.image || item.mainImage?.asset?.url} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
            )}

            <div className="flex-1 min-w-0 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md shadow-sm" style={getBadgeStyle(item.type)}>
                  {getCategoryName(item)}
                </span>
                <span className={`text-[9px] font-medium opacity-60 ${isLight ? "text-gray-500" : "text-gray-400"}`}>
                  {item.publishedAt ? new Date(item.publishedAt).toLocaleDateString('pt-BR', {day: '2-digit', month: 'short'}) : 'Hoje'}
                </span>
              </div>
              <h4 className={`text-sm font-bold leading-snug line-clamp-2 ${isLight ? "text-gray-800" : "text-gray-100 group-hover:text-white"}`}>
                {item.title}
              </h4>
            </div>
            
            <ChevronRight size={14} className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" style={{ color: isLight ? BRAND.roxo : BRAND.neonCyan }} />
          </button>
        ))}
      </div>
    </div>
  );
};


export const FanzoneWidget = ({ theme }) => {
  const isLight = theme === 'light';
  return (
    <div className="h-full flex flex-col items-center justify-center p-4 text-center relative z-10">
      <Sparkles
        size={32}
        className={`mb-2 ${
          theme === 'light' ? 'text-purple-400' : 'text-[#bd00ff]'
        }`}
      />
      <h3
        className={`font-black text-lg ${
          isLight ? 'text-gray-800' : 'text-white'
        }`}
      >
        Fanzone
      </h3>
    </div>
  );
};

// SEASON WIDGET (Visual Cute + Cores Oficiais da F1)
export const SeasonWidget = ({ theme }) => {
  const isLight = theme === 'light';
  
  const BRAND = {
    roxo: '#caa5d8',
    rosa: '#fac4dc',
    azul: '#bbd3f2',
    neonRoxo: '#bd00ff',
    neonCyan: '#00fff2'
  };

  // DADOS (Cores Oficiais mantidas)
  const topDrivers = [
    { pos: 1, name: 'Lando Norris', team: 'MCL', pts: 408, color: '#FF8700' },
    { pos: 2, name: 'Verstappen', team: 'RBR', pts: 396, color: '#1E41FF' },
    { pos: 3, name: 'Piastri', team: 'MCL', pts: 392, color: '#FF8700' },
    { pos: 4, name: 'Russell', team: 'MER', pts: 309, color: '#00D2BE' },
    { pos: 5, name: 'Leclerc', team: 'FER', pts: 230, color: '#FF0000' },
  ];

  const constructors = [
    { name: 'McLaren', pts: 800, color: '#FF8700', width: '100%' },
    { name: 'Mercedes', pts: 459, color: '#00D2BE', width: '57%' },
    { name: 'Red Bull', pts: 426, color: '#1E41FF', width: '53%' },
  ];

  const boxClass = isLight ? 'bg-white border-gray-100' : 'bg-white/5 border-white/5';
  const subText = isLight ? 'text-gray-400' : 'text-gray-500';

  return (
    <div className={`h-full flex flex-col justify-between p-4 relative overflow-hidden text-left ${isLight ? 'text-gray-800' : 'text-white'}`}>
      
      {/* Decoração: Cyan no Dark Mode */}
      <div 
        className="absolute -right-10 -top-10 w-40 h-40 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: isLight ? BRAND.azul : BRAND.neonCyan }}
      />
      
      {/* CABEÇALHO */}
      <div className="flex justify-between items-start mb-2 z-10 relative">
         <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl shadow-sm" style={{ backgroundColor: isLight ? 'white' : 'rgba(255,255,255,0.1)' }}>
               <Trophy size={16} style={{ color: isLight ? BRAND.roxo : BRAND.neonRoxo }} />
            </div>
            <div>
               <h3 className="text-sm font-black uppercase leading-none tracking-wide text-transparent bg-clip-text"
                 style={{ backgroundImage: isLight ? `linear-gradient(to right, ${BRAND.roxo}, ${BRAND.rosa})` : `linear-gradient(to right, #fff, ${BRAND.neonRoxo})` }}>
                 Temporada 2025
               </h3>
               <p className={`text-[9px] font-bold uppercase tracking-wider mt-0.5 ${subText}`}>Finalizada</p>
            </div>
         </div>
         <div className="text-right">
            <span className="text-[8px] font-bold opacity-50 uppercase tracking-widest block mb-0.5">Campeão</span>
            <div className="flex items-center justify-end gap-1">
               <span className="font-black text-xs">L. NORRIS</span>
               <span className="text-sm">👑</span>
            </div>
         </div>
      </div>

      {/* CORPO */}
      <div className="flex-1 flex flex-col gap-2 z-10 justify-center">
         <div className={`rounded-2xl p-3 border shadow-sm ${boxClass}`}>
            <div className="flex items-center justify-between mb-2 opacity-50">
               <span className="text-[8px] font-black uppercase tracking-[0.2em]">Top 5 Pilotos</span>
            </div>
            <div className="space-y-1.5">
               {topDrivers.map((d) => (
                  <div key={d.pos} className="flex items-center justify-between text-xs group">
                     <div className="flex items-center gap-2.5">
                        <span className={`font-mono w-3 text-[9px] ${d.pos === 1 ? 'font-black text-yellow-500' : 'opacity-40'}`}>{d.pos}</span>
                        <div className="w-1.5 h-1.5 rounded-full shadow-[0_0_5px_rgba(0,0,0,0.1)]" style={{ backgroundColor: d.color }}></div>
                        <span className={`truncate max-w-[90px] ${d.pos === 1 ? 'font-bold' : 'font-medium'}`}>{d.name}</span>
                     </div>
                     <span className="font-mono opacity-60 text-[9px] group-hover:opacity-100 transition-opacity">{d.pts} pts</span>
                  </div>
               ))}
            </div>
         </div>

         <div className={`rounded-2xl p-3 border shadow-sm ${boxClass}`}>
            <div className="flex items-center gap-1.5 mb-2 opacity-50">
               <Wrench size={10} />
               <span className="text-[8px] font-black uppercase tracking-[0.2em]">Construtores</span>
            </div>
            <div className="space-y-2">
               {constructors.map((t, i) => (
                  <div key={i}>
                     <div className="flex justify-between text-[9px] font-bold mb-1 px-0.5">
                        <span style={{ color: t.color }}>{t.name}</span>
                        <span className="font-mono opacity-60">{t.pts}</span>
                     </div>
                     <div className={`w-full h-1.5 rounded-full overflow-hidden ${isLight ? 'bg-gray-100' : 'bg-white/10'}`}>
                        <div className="h-full rounded-full transition-all duration-1000" style={{ width: t.width, backgroundColor: t.color }}/>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
      
      {/* Footer */}
      <div className="mt-1 pt-1 flex justify-center">
         <Link to="/regulation" className={`text-[9px] font-bold uppercase tracking-widest py-1 px-3 rounded-full transition-all flex items-center gap-1 group ${isLight ? 'text-gray-400 hover:text-gray-600 hover:bg-gray-50' : 'text-gray-500 hover:text-white hover:bg-white/10'}`}>
           Ver Regulamento 2026
           <ArrowRight size={8} className="transition-transform group-hover:translate-x-0.5" />
         </Link>
      </div>
    </div>
  );
};

export const ContactWidget = ({ theme }) => {
  const isLight = theme === 'light';
  return (
    <div className="h-full flex flex-col items-center justify-center text-center p-4 relative z-10">
      <MessageSquare
        size={32}
        className={`mb-3 ${
          isLight ? 'text-pink-500' : 'text-[#caa5d8]'
        }`}
      />
      <h3
        className={`font-black text-lg ${
          isLight ? 'text-gray-800' : 'text-white'
        }`}
      >
        Contato
      </h3>
      <p
        className={`text-[10px] font-bold uppercase tracking-widest opacity-60 ${
          isLight ? 'text-gray-500' : 'text-gray-400'
        }`}
      >
        Mande um alô
      </p>
    </div>
  );
};

export const CuriosityWidget = ({ theme }) => (
  <div className="h-full flex flex-col items-center justify-center text-center p-2 relative z-10">
    <Zap size={32} className="mb-2 text-yellow-400" />
    <h4 className="font-bold text-sm">Você Sabia?</h4>
  </div>
);



export const NewsletterWidget = ({ theme }) => {
  const isLight = theme === "light";

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("BREVO KEY →", import.meta.env.VITE_BREVO_API_KEY);

    if (!email) return;

    const apiKey = import.meta.env.VITE_BREVO_API_KEY;

    try {
      const res = await fetch("https://api.brevo.com/v3/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": apiKey,
        },
        body: JSON.stringify({
          email,
          listIds: [2], // <-- coloque aqui o ID da lista no Brevo
        }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="h-full flex flex-col md:flex-row items-center justify-between p-6 gap-6 relative z-10">
      <div className="flex items-center gap-4 shrink-0">
        <div
          className={`p-4 rounded-full ${
            isLight ? "bg-white shadow-sm" : "bg-[#1a1a20] border border-[#333]"
          }`}
        >
          <Mail size={24} />
        </div>
        <div>
          <h3 className="font-bold text-xl">Newsletter</h3>
          <p className="text-sm opacity-70">Fofocas quentinhas.</p>
        </div>
      </div>

      <form
        className="flex flex-1 gap-3 w-full flex-wrap"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          placeholder="seu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`flex-1 px-5 py-3 rounded-xl text-sm font-medium outline-none min-w-0 ${
            isLight
              ? "bg-white border border-gray-200"
              : "bg-[#0a0a12] border border-[#333] text-white"
          }`}
        />

        <button
          type="submit"
          className={`px-8 py-3 rounded-xl font-bold text-sm transition-transform active:scale-95 whitespace-nowrap shrink-0 text-white shadow-lg
            ${isLight
              ? "bg-gray-900 hover:bg-black"
              // DARK MODE: Degradê igual ao logo (Roxo -> Rosa Neon)
              : "bg-gradient-to-r from-[#bd00ff] to-[#d946ef] hover:opacity-90 shadow-[0_0_15px_rgba(189,0,255,0.4)]"
            }`}
        >
          Assinar
        </button>
      </form>

      {status === "success" && (
        <p className="text-green-500 text-sm mt-2">
          Inscrição feita com sucesso! 💌
        </p>
      )}

      {status === "error" && (
        <p className="text-red-500 text-sm mt-2">
          Opa… deu erro. Tenta de novo.
        </p>
      )}
    </div>
  );
};

