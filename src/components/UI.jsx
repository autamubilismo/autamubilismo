import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  X, ChevronRight, Flag, CloudMoon, MapPin, Newspaper, Zap, Mail, Sparkles, 
  Star, RotateCcw, Heart, MessageSquare, Menu, Sun, Moon, ArrowLeft, ArrowRight, Search
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
export const LogoHelmet = ({ theme, size = 'normal' }) => {
  const isLight = theme === 'light';
  const [imageError, setImageError] = useState(false);
  useEffect(() => setImageError(false), [theme]);
  const currentLogoUrl = isLight ? LOGO_LIGHT_URL : LOGO_DARK_URL;
  
  // CAPACETE GIGANTE
  const containerClass = size === 'large' ? "w-48 h-48 md:w-64 md:h-64" : "w-16 h-16 md:w-20 md:h-20";
  
  // TEXTO ROSA NEON #fe88dd NO DARK MODE
  const textClass = isLight 
    ? 'text-gray-800' 
    : 'text-[#fe88dd] drop-shadow-[0_0_10px_rgba(254,136,221,0.6)]'; 

  const imgGlowClass = !isLight 
    ? 'drop-shadow-[0_0_35px_rgba(254,136,221,0.4)] scale-110' 
    : 'drop-shadow-xl hover:scale-105';

  if (!imageError) return (
    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
        <div className={`${containerClass} transition-all duration-500 relative flex items-center justify-center`}>
            <img 
              src={currentLogoUrl} 
              alt="Logo" 
              onError={() => setImageError(true)} 
              className={`w-full h-full object-contain transition-all duration-500 ${imgGlowClass}`} 
            />
        </div>
        {/* Fonte Russo One, texto menor que o capacete */}
        <h1 className={`hidden md:block text-2xl md:text-4xl font-black tracking-widest uppercase ${textClass}`} style={{ fontFamily: "'Russo One', sans-serif" }}>Autamubilismo</h1>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');`}</style>
    </div>
  );
  return null;
};

export const BackButton = ({ to, theme }) => {
  const isLight = theme === 'light';
  return (
    <Link to={to} className={`group mb-6 inline-flex items-center gap-2 text-sm font-bold transition-colors ${isLight ? 'text-gray-500 hover:text-[#D8C4F0]' : 'text-gray-400 hover:text-[#00fff2]'}`}>
      <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" /> Voltar
    </Link>
  );
};

export const NavigationOverlay = ({ isOpen, onClose, theme }) => {
  if (!isOpen) return null;
  const isLight = theme === 'light';
  return (
    <div className={`fixed inset-0 z-50 flex flex-col overflow-y-auto animate-in slide-in-from-left duration-300 ${isLight ? 'bg-[#FFF5F8]' : 'bg-[#050505]'}`}>
      <div className="p-6 flex justify-end"><button onClick={onClose}><X size={24} className={isLight ? 'text-gray-600' : 'text-white'} /></button></div>
      <div className="flex-1 max-w-4xl mx-auto w-full p-4 md:p-6 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {SITE_MAP.map((item) => (
            <Link key={item.id} to={item.path} onClick={onClose} className={`group p-3 md:p-4 rounded-2xl flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4 text-left transition-all ${isLight ? 'bg-white hover:bg-[#F7B8C8]/20 hover:shadow-lg' : 'bg-[#121217] hover:bg-[#1a1a20] border border-[#333] hover:border-[#00fff2] hover:shadow-[0_0_15px_rgba(0,255,242,0.1)]'}`}>
              <div className={`w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full flex items-center justify-center transition-colors ${isLight ? 'bg-[#F7B8C8]/20 text-[#D8C4F0]' : 'bg-[#1a1a20] text-[#00fff2]'}`}>{item.icon && <item.icon size={20} />}</div>
              <div className="flex-1 min-w-0"><span className={`block text-sm md:text-xl font-bold truncate ${isLight ? 'text-gray-800' : 'text-white'}`}>{item.label}</span></div>
              <ChevronRight className={`ml-auto opacity-0 group-hover:opacity-100 transition-opacity hidden md:block ${isLight ? 'text-[#D8C4F0]' : 'text-[#fe88dd]'}`} />
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
  return (<div className={`fixed inset-0 z-50 flex flex-col animate-in fade-in slide-in-from-top-4 duration-300 backdrop-blur-md ${isLight ? 'bg-white/95' : 'bg-[#050505]/95'}`}><div className="p-6 flex items-center gap-4 max-w-4xl mx-auto w-full"><Search size={24} className={isLight ? 'text-gray-400' : 'text-[#00fff2]'} /><input type="text" autoFocus placeholder="Buscar..." className={`flex-1 bg-transparent text-2xl font-bold outline-none ${isLight ? 'text-gray-800' : 'text-white'}`} /><button onClick={onClose}><X size={28} /></button></div></div>);
};

export const BentoCard = ({ children, className, theme, title, subtitle, onClick, to }) => {
  const isLight = theme === 'light';
  const content = (
    <div className={`relative z-10 h-full flex flex-col p-6`}>
      {(title || subtitle) && (<div className="mb-4">{subtitle && <span className={`text-xs font-bold tracking-wider uppercase mb-1 block ${isLight ? 'text-[#D8C4F0]' : 'text-[#fe88dd]'}`}>{subtitle}</span>}{title && <h3 className={`text-xl font-bold leading-tight ${isLight ? 'text-gray-800' : 'text-white font-mono'}`}>{title}</h3>}</div>)}
      {children}
    </div>
  );
  const baseClasses = `relative overflow-hidden transition-all duration-500 group ${className} ${isLight ? 'bg-white rounded-3xl shadow-[0_10px_40px_-10px_rgba(216,196,240,0.3)] border-2 border-transparent hover:border-[#D8C4F0]' : 'bg-[#121217] rounded-xl border border-[#333] hover:border-[#00fff2] shadow-[0_0_15px_rgba(0,255,242,0.05)]'} active:scale-[0.98]`;
  
  // GRID VAPORWAVE SUTIL (Opacidade 10%, Tamanho 20px)
  const CardWrapper = ({ children }) => (
    <>
      {!isLight && (
         <div className="absolute inset-0 opacity-10 pointer-events-none" 
              style={{ 
                backgroundImage: 'linear-gradient(#00fff2 1px, transparent 1px), linear-gradient(90deg, #00fff2 1px, transparent 1px)', 
                backgroundSize: '20px 20px' 
              }}>
         </div>
      )}
      {children}
    </>
  );

  if (to) return <Link to={to} className={baseClasses}><CardWrapper>{content}</CardWrapper></Link>;
  return <div onClick={onClick} className={`${baseClasses} ${onClick ? 'cursor-pointer' : ''}`}><CardWrapper>{content}</CardWrapper></div>;
};

export const KpopPhotocard = ({ driver, theme }) => {
  const isLight = theme === 'light';
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <div className="group relative w-full aspect-[3/4] cursor-pointer perspective-1000" onClick={() => setIsFlipped(!isFlipped)}>
       {/* ... (Conteúdo do card mantido igual para economizar espaço) ... */}
       <div className={`relative w-full h-full transition-all duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
         <div className="absolute inset-0 backface-hidden rounded-3xl overflow-hidden shadow-xl">
             {driver.image && <img src={driver.image} alt={driver.name} className="w-full h-full object-cover" />}
             <div className="absolute bottom-0 left-0 w-full p-5 z-10 bg-gradient-to-t from-black/60 to-transparent"><h3 className="text-2xl font-black text-white">{driver.name}</h3><RotateCcw size={14} className="text-white/70 mt-2"/></div>
         </div>
         <div className={`absolute inset-0 backface-hidden rotate-y-180 rounded-3xl p-6 flex flex-col items-center justify-center text-center ${isLight ? 'bg-white' : 'bg-[#1a1a20] border border-[#00fff2]'}`}>
            <h3 className={`font-black text-xl ${isLight?'text-gray-800':'text-white'}`}>{driver.name}</h3>
            <p className={`text-sm mt-4 ${isLight?'text-gray-600':'text-gray-300'}`}>{driver.secretFact}</p>
         </div>
       </div>
    </div>
  );
};

// --- WIDGETS ---
export const NextRaceWidget = ({ theme }) => {
  const isLight = theme === 'light';
  return (
    <div className={`h-full flex flex-col justify-between relative overflow-hidden p-4 ${isLight ? 'text-teal-900' : 'text-white'}`}>
      
      {/* PISTA CENTRALIZADA */}
      <svg className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 opacity-20 pointer-events-none ${isLight ? 'stroke-teal-900' : 'stroke-[#00fff2]'}`} viewBox="0 0 100 100" fill="none" strokeWidth="2">
          <path d="M10 80 L30 80 L40 60 L80 60 L90 30 L60 10 L30 30 L10 80 Z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>

      <div className="flex justify-between items-start relative z-10">
        <div className="flex items-center gap-2"><Flag size={16} /><span className="text-[10px] font-bold uppercase">Próxima</span></div>
        <div className={`flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-full ${isLight ? 'bg-white/40' : 'bg-[#1a1a20] border border-[#333]'}`}><CloudMoon size={10} /><span>28°C</span></div>
      </div>
      
      <div className="relative z-10 mt-1 text-center"> {/* Centralizei o texto também para combinar com a pista */}
          <h3 className="text-3xl font-black leading-none tracking-tight mb-0.5">QATAR</h3>
          <p className="text-[10px] font-bold opacity-70 flex items-center justify-center gap-1"><MapPin size={8} /> Lusail Circuit</p>
      </div>

      <div className={`mt-2 pt-2 border-t flex justify-between items-end relative z-10 ${isLight ? 'border-teal-900/10' : 'border-gray-800'}`}>
          <div className="flex gap-2 text-sm font-bold"><span>05d</span><span>18h</span></div>
          <ArrowRight size={14} />
      </div>
    </div>
  );
};

export const NewsWidget = ({ theme, onNewsClick }) => {
  const isLight = theme === 'light';
  const [news, setNews] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    async function load() {
      try {
        const data = await fetchNews();
        setNews(data);
      } catch (err) {
        console.error(err);
        setError('Erro ao carregar notícias');
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  if (loading) {
    return (
      <div className="h-full flex flex-col relative z-10">
        <div className="flex items-center gap-2 mb-4 opacity-70">
          <Newspaper size={18} />
          <span className="text-sm font-bold uppercase">Últimas do Paddock</span>
        </div>
        <p className={isLight ? 'text-gray-400 text-sm' : 'text-gray-500 text-sm'}>
          Carregando notícias...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-full flex flex-col relative z-10">
        <div className="flex items-center gap-2 mb-4 opacity-70">
          <Newspaper size={18} />
          <span className="text-sm font-bold uppercase">Últimas do Paddock</span>
        </div>
        <p className={isLight ? 'text-red-500 text-sm' : 'text-red-400 text-sm'}>
          {error}
        </p>
      </div>
    );
  }

  if (!news.length) {
    return (
      <div className="h-full flex flex-col relative z-10">
        <div className="flex items-center gap-2 mb-4 opacity-70">
          <Newspaper size={18} />
          <span className="text-sm font-bold uppercase">Últimas do Paddock</span>
        </div>
        <p className={isLight ? 'text-gray-400 text-sm' : 'text-gray-500 text-sm'}>
          Nenhuma notícia publicada ainda.
        </p>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col relative z-10">
      <div className="flex items-center gap-2 mb-4 opacity-70">
        <Newspaper size={18} />
        <span className="text-sm font-bold uppercase">Últimas do Paddock</span>
      </div>
      <div className="flex-1 flex flex-col gap-3 overflow-y-auto pr-1">
        {news.map((item) => (
          <div
            key={item._id}
            onClick={(e) => {
              e.stopPropagation();
              onNewsClick &&
                onNewsClick({
                  id: item.slug || item._id,
                  title: item.title,
                });
            }}
            className={`flex-1 p-4 rounded-xl flex items-center gap-4 transition-colors cursor-pointer ${
              isLight
                ? 'bg-[#FFF5F8] hover:bg-[#F7B8C8]/20'
                : 'bg-[#0a0a12] border border-[#333] hover:border-[#fe88dd]/50'
            }`}
          >
            {item.image && (
              <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="min-w-0">
              <h4
                className={`text-sm font-bold leading-tight mb-1 line-clamp-2 ${
                  isLight ? 'text-gray-800' : 'text-white'
                }`}
              >
                {item.title}
              </h4>
              <span
                className={`text-[10px] font-medium ${
                  isLight ? 'text-gray-400' : 'text-gray-400'
                }`}
              >
                {item.category || 'Notícia'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export const CuriosityWidget = ({ theme }) => (<div className="h-full flex flex-col items-center justify-center text-center p-2 relative z-10"><Zap size={32} className="mb-2 text-yellow-400" /><h4 className="font-bold text-sm">Você Sabia?</h4></div>);

export const NewsletterWidget = ({ theme }) => {
  const isLight = theme === 'light';
  return (
    <div className="h-full flex flex-col md:flex-row items-center justify-between p-6 gap-6 relative z-10">
        <div className="flex items-center gap-4 shrink-0">
            <div className={`p-4 rounded-full ${isLight ? 'bg-white shadow-sm' : 'bg-[#1a1a20] border border-[#333]'}`}><Mail size={24} /></div>
            <div><h3 className="font-bold text-xl">Newsletter</h3><p className="text-sm opacity-70">Fofocas quentinhas.</p></div>
        </div>

        <form className="flex flex-1 gap-3 w-full flex-wrap" onSubmit={(e)=>e.preventDefault()}>
            <input 
              type="email" 
              placeholder="seu@email.com" 
              className={`flex-1 px-5 py-3 rounded-xl text-sm font-medium outline-none min-w-0 ${isLight?'bg-white border border-gray-200':'bg-[#0a0a12] border border-[#333] text-white'}`}
            />
            <button 
              className={`px-8 py-3 rounded-xl font-bold text-sm transition-transform active:scale-95 whitespace-nowrap shrink-0 ${isLight?'bg-gray-900 text-white hover:bg-black':'bg-[#fe88dd] text-white hover:bg-[#a000db]'}`}
            >
              Assinar
            </button>
        </form>
    </div>
  );
};


export const FanzoneWidget = ({ theme }) => {
  const isLight = theme === 'light';
  return (
    <div className={`h-full flex flex-col items-center justify-center p-4 text-center relative z-10`}>
      <Sparkles size={32} className={`mb-2 ${theme==='light'?'text-purple-400':'text-[#fe88dd]'}`} />
      <h3 className={`font-black text-lg ${isLight ? 'text-gray-800' : 'text-white'}`}>Fanzone</h3>
    </div>
  );
};