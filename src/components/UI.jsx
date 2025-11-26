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

export const KpopPhotocard = ({ driver, theme, onClick }) => {
  const isLight = theme === 'light';
  const [isFlipped, setIsFlipped] = useState(false);
  const VibeIcon = driver.vibes && driver.vibes[0] ? driver.vibes[0].icon : null;

  // ESTILOS FOFOS: Bordas grossas, cores pastéis/neon e sombra suave
  const borderClass = isLight 
    ? 'border-4 border-[#F7B8C8] shadow-[0_8px_20px_-5px_rgba(247,184,200,0.6)]' // Rosa Pastel
    : 'border-4 border-[#fe88dd] shadow-[0_0_15px_rgba(254,136,221,0.5)]'; // Rosa Neon

  // Efeito de fundo para o verso do card
  const backBgClass = isLight 
    ? 'bg-gradient-to-b from-[#FFF5F8] to-[#FEE4EF]' 
    : 'bg-[#121217]';

  return (
    <div 
      className="group relative w-full aspect-[3/4] cursor-pointer perspective-1000" 
      onClick={(e) => { 
        e.stopPropagation(); // Garante que o clique vire o card e não dispare outros eventos
        setIsFlipped(!isFlipped); 
      }}
    >
      <div className={`relative w-full h-full transition-all duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : 'hover:-translate-y-2 hover:rotate-1'}`}>
        
        {/* --- FRENTE DO CARD (FOTO + NOME + NÚMERO) --- */}
        <div className={`absolute inset-0 backface-hidden rounded-[2rem] overflow-hidden ${borderClass} bg-white`}>
            {/* FOTO DESTAQUE */}
            {driver.image ? (
              <img src={driver.image} alt={driver.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            ) : (
               <div className={`w-full h-full bg-gradient-to-br ${isLight ? 'from-pink-100 to-purple-100' : 'from-purple-900 to-pink-900'}`}></div>
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            
            {/* Número Gigante Translúcido (Fundo Artístico) */}
            <div className="absolute top-2 right-4 text-8xl font-black text-white opacity-10 pointer-events-none">
              {driver.number}
            </div>

            {/* Info Principal (Rodapé) */}
            <div className="absolute bottom-0 left-0 w-full p-6 z-10 flex flex-col items-center text-center">
               <h3 className="text-4xl font-black text-white leading-none drop-shadow-lg tracking-tight">
                 {driver.name.split(' ')[0]}
               </h3>
               <span className={`text-2xl font-black mt-1 ${isLight ? 'text-[#F7B8C8]' : 'text-[#fe88dd]'} drop-shadow-md`}>
                 #{driver.number}
               </span>
            </div>
        </div>

        {/* --- VERSO DO CARD (DETALHES COMPLETOS) --- */}
        <div className={`absolute inset-0 backface-hidden rotate-y-180 rounded-[2rem] p-6 flex flex-col justify-between text-center ${backBgClass} ${borderClass}`}>
            
            {/* Cabeçalho do Verso */}
            <div className="flex flex-col items-center gap-3 mt-4">
                <div className={`w-24 h-24 rounded-full overflow-hidden border-4 ${isLight ? 'border-white shadow-md' : 'border-[#fe88dd] shadow-[0_0_10px_#fe88dd]'}`}>
                    {driver.image && <img src={driver.image} className="w-full h-full object-cover" />}
                </div>
                
                <div>
                  <h3 className={`font-black text-2xl leading-none ${isLight ? 'text-gray-800' : 'text-white'}`}>{driver.name}</h3>
                  {/* Tag da Equipe */}
                  <span className={`inline-block mt-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${isLight ? 'bg-white text-gray-600 shadow-sm' : 'bg-[#fe88dd]/20 text-[#fe88dd] border border-[#fe88dd]/30'}`}>
                    {driver.team}
                  </span>
                </div>
            </div>

            {/* Dados Extras */}
            <div className="flex justify-center gap-4 text-xs font-bold uppercase opacity-60">
               <span>{driver.zodiac}</span>
               <span>•</span>
               <span>#{driver.number}</span>
            </div>

            {/* Fato Secreto */}
            <div className={`p-4 rounded-2xl text-sm italic font-medium relative ${isLight ? 'bg-white text-gray-600 shadow-inner' : 'bg-[#1a1a20] text-gray-300 border border-[#fe88dd]/30'}`}>
                <span className="absolute -top-2 -left-1 text-4xl opacity-20 font-serif">"</span>
                {driver.secretFact || "Mistério não revelado."}
                <span className="absolute -bottom-5 -right-1 text-4xl opacity-20 font-serif">"</span>
            </div>

            {/* Assinatura */}
            <div className="mt-2 transform -rotate-3">
                <p className={`font-handwriting text-3xl opacity-40 ${isLight ? 'text-gray-400' : 'text-[#fe88dd]'}`} style={{ fontFamily: 'cursive' }}>
                  {driver.signature || driver.name}
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

// --- WIDGETS ---
export const NextRaceWidget = ({ theme }) => {
  const isLight = theme === 'light';
  
  // CORES ATUALIZADAS: Rosa Neon #fe88dd no Dark Mode
  const boxClass = isLight 
    ? 'bg-white/60 backdrop-blur-md text-gray-800' 
    : 'bg-[#1a1a20] border border-[#fe88dd]/30 text-white shadow-[0_0_10px_rgba(254,136,221,0.2)]';

  const accentColor = isLight ? 'text-[#9F7AEA]' : 'text-[#fe88dd]';
  const strokeColor = isLight ? 'stroke-[#9F7AEA]' : 'stroke-[#fe88dd]';
  const badgeClass = isLight ? 'bg-[#D8C4F0] text-gray-800' : 'bg-[#fe88dd] text-white shadow-[0_0_10px_#fe88dd]';

  return (
    <div className={`h-full flex flex-col justify-between relative overflow-hidden p-5 ${isLight ? 'text-gray-800' : 'text-white'}`}>
      
      {/* FUNDO: Traçado da Pista com cores atualizadas */}
      <svg className={`absolute -right-8 top-1/2 -translate-y-1/2 w-64 h-64 opacity-20 pointer-events-none ${strokeColor}`} viewBox="0 0 100 100" fill="none" strokeWidth="1.5">
          <path d="M20 80 C 20 80, 10 60, 30 50 C 50 40, 40 20, 60 20 L 80 20 C 90 20, 90 40, 80 50 C 70 60, 80 80, 60 80 Z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>

      {/* CABEÇALHO */}
      <div className="flex justify-between items-start relative z-10">
        <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${badgeClass}`}>
           <Flag size={12} /> Round 23
        </div>
        <div className="flex flex-col items-end">
            <CloudMoon size={20} className={accentColor} />
            <span className="text-xs font-bold">28°C</span>
        </div>
      </div>

      {/* MEIO */}
      <div className="relative z-10 my-2">
          <span className={`text-[10px] font-bold opacity-60 uppercase tracking-widest block mb-[-5px] ${accentColor}`}>Grande Prêmio</span>
          <h3 className={`text-5xl font-black leading-none tracking-tighter ${isLight ? 'text-gray-800' : 'text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]'}`}>
            QATAR
          </h3>
          <div className="flex items-center gap-1 mt-1 opacity-80">
             <MapPin size={12} className={accentColor} /> 
             <span className="text-xs font-bold uppercase">Lusail Int. Circuit</span>
          </div>
      </div>

      {/* RODAPÉ */}
      <div className="relative z-10 mt-auto">
        <div className="flex gap-2 text-center">
            <div className={`flex-1 rounded-lg p-2 ${boxClass}`}>
                <span className="block text-xl font-black leading-none">05</span>
                <span className="text-[8px] font-bold opacity-60 uppercase">Dias</span>
            </div>
            <div className={`flex-1 rounded-lg p-2 ${boxClass}`}>
                <span className="block text-xl font-black leading-none">18</span>
                <span className="text-[8px] font-bold opacity-60 uppercase">Hrs</span>
            </div>
            <div className={`flex-1 rounded-lg p-2 ${boxClass}`}>
                <span className="block text-xl font-black leading-none">42</span>
                <span className="text-[8px] font-bold opacity-60 uppercase">Min</span>
            </div>
        </div>
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
                  slug: item.slug,      // ⭐ SLUG PASSADO CORRETAMENTE
                  id: item._id,
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