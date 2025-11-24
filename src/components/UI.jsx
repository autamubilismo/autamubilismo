import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  X, ChevronRight, Flag, CloudMoon, MapPin, Newspaper, Zap, Mail, Sparkles, 
  Star, RotateCcw, Heart, MessageSquare, Menu, Sun, Moon, ArrowLeft, Search
} from 'lucide-react';
import { LOGO_LIGHT_URL, LOGO_DARK_URL, SITE_MAP, NEWS_DATA } from '../data';

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
  const containerClass = size === 'large' ? "w-32 h-32 md:w-48 md:h-48" : "w-16 h-16 md:w-20 md:h-20";
  if (!imageError) return (<div className={`${containerClass} transition-all duration-500 relative flex items-center justify-center`}><img src={currentLogoUrl} alt="Logo" onError={() => setImageError(true)} className={`w-full h-full object-contain transition-all duration-500 ${!isLight ? 'drop-shadow-[0_0_25px_rgba(0,255,242,0.5)] scale-110' : 'drop-shadow-xl hover:scale-105'}`} /></div>);
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
              <ChevronRight className={`ml-auto opacity-0 group-hover:opacity-100 transition-opacity hidden md:block ${isLight ? 'text-[#D8C4F0]' : 'text-[#bd00ff]'}`} />
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
    <div className={`relative h-full flex flex-col p-6 ${className}`}>
      {(title || subtitle) && (<div className="mb-4">{subtitle && <span className={`text-xs font-bold tracking-wider uppercase mb-1 block ${isLight ? 'text-[#D8C4F0]' : 'text-[#bd00ff]'}`}>{subtitle}</span>}{title && <h3 className={`text-xl font-bold leading-tight ${isLight ? 'text-gray-800' : 'text-white font-mono'}`}>{title}</h3>}</div>)}
      {children}
    </div>
  );
  const baseClasses = `relative overflow-hidden transition-all duration-500 group ${isLight ? 'bg-white rounded-3xl shadow-[0_10px_40px_-10px_rgba(216,196,240,0.3)] border-2 border-transparent hover:border-[#D8C4F0]' : 'bg-[#121217] rounded-xl border border-[#333] hover:border-[#00fff2] shadow-[0_0_15px_rgba(0,255,242,0.05)]'} active:scale-[0.98]`;
  if (to) return <Link to={to} className={baseClasses}>{content}</Link>;
  return <div onClick={onClick} className={`${baseClasses} ${onClick ? 'cursor-pointer' : ''}`}>{content}</div>;
};

// --- WIDGETS ---
export const NextRaceWidget = ({ theme }) => {
  const isLight = theme === 'light';
  return (
    <div className={`h-full flex flex-col justify-between relative overflow-hidden p-1 ${isLight ? 'text-teal-900' : 'text-white'}`}>
      <div className="flex justify-between items-start relative z-10"><div className="flex items-center gap-2"><Flag size={18} /><span className="text-xs font-bold uppercase">Próxima Parada</span></div><div className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${isLight ? 'bg-white/40' : 'bg-[#1a1a20] border border-[#333]'}`}><CloudMoon size={12} /><span>28°C</span></div></div>
      <div className="relative z-10 mt-4"><h3 className="text-3xl font-black leading-none tracking-tight mb-1">GP QATAR</h3><p className="text-xs font-bold uppercase opacity-70 flex items-center gap-1"><MapPin size={10} /> Lusail Circuit</p></div>
      <div className={`mt-4 pt-4 border-t flex justify-between items-end relative z-10 ${isLight ? 'border-teal-900/10' : 'border-gray-800'}`}><div className="flex gap-3"><div><span className="text-2xl font-black">05</span><span className="text-[10px] uppercase block">Dias</span></div><div><span className="text-2xl font-black">18</span><span className="text-[10px] uppercase block">Hrs</span></div></div><button className={`p-2 rounded-full transition-all active:scale-95 ${isLight ? 'bg-teal-900 text-white' : 'bg-[#00fff2] text-black'}`}><ArrowRight size={16} /></button></div>
    </div>
  );
};

export const NewsWidget = ({ theme, onNewsClick }) => {
  const isLight = theme === 'light';
  return (<div className="h-full flex flex-col"><div className="flex items-center gap-2 mb-4 opacity-70"><Newspaper size={16} /><span className="text-xs font-bold uppercase">Últimas do Paddock</span></div><div className="flex-1 flex flex-col gap-2">{NEWS_DATA.map((item)=>(<div key={item.id} onClick={(e)=>{e.stopPropagation();onNewsClick(item)}} className={`flex-1 p-3 rounded-xl flex items-center gap-3 transition-colors cursor-pointer ${isLight ? 'bg-[#FFF5F8] hover:bg-[#F7B8C8]/20' : 'bg-[#1a1a20] hover:bg-[#bd00ff]/10 border border-transparent hover:border-[#bd00ff]/30'}`}><div className="w-12 h-12 rounded-lg overflow-hidden shrink-0"><img src={item.image} className="w-full h-full object-cover" /></div><div className="min-w-0"><h4 className={`text-sm font-bold leading-tight mb-1 truncate ${isLight?'text-gray-800':'text-gray-200'}`}>{item.title}</h4><span className={`text-[10px] font-medium ${isLight?'text-gray-400':'text-gray-500'}`}>{item.time}</span></div></div>))}</div></div>);
};

export const CuriosityWidget = ({ theme }) => (<div className="h-full flex flex-col items-center justify-center text-center p-2"><Zap size={40} className="mb-3 text-yellow-400" /><h4 className="font-bold">Você Sabia?</h4></div>);
export const NewsletterWidget = ({ theme }) => (<div className="h-full flex flex-col justify-center p-2 text-center"><Mail size={24} className="mx-auto mb-2"/><h3 className="font-bold">Newsletter</h3><p className="text-xs">Assine já!</p></div>);
export const FanzoneWidget = ({ theme }) => (<div className="h-full flex flex-col items-center justify-center p-4 text-center"><Sparkles size={40} className={theme==='light'?'text-purple-400':'text-[#bd00ff]'} /><h3 className="font-black mt-2">Fanzone</h3></div>);

export const KpopPhotocard = ({ driver, theme }) => {
  const isLight = theme === 'light';
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <div className="group relative w-full aspect-[3/4] cursor-pointer perspective-1000" onClick={(e) => { e.stopPropagation(); setIsFlipped(!isFlipped); }}>
      <div className={`relative w-full h-full transition-all duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        <div className="absolute inset-0 backface-hidden rounded-3xl overflow-hidden shadow-xl">
            {driver.image && <img src={driver.image} alt={driver.name} className="w-full h-full object-cover" />}
            <div className="absolute bottom-0 left-0 w-full p-5 z-10 bg-gradient-to-t from-black/60 to-transparent"><h3 className="text-2xl font-black text-white">{driver.name}</h3><RotateCcw size={14} className="text-white/70 mt-2"/></div>
        </div>
        <div className={`absolute inset-0 backface-hidden rotate-y-180 rounded-3xl p-6 flex flex-col items-center justify-center text-center ${isLight ? 'bg-white' : 'bg-[#1a1a20] border border-[#00fff2]'}`}>
           <h3 className={`font-black text-xl ${isLight?'text-gray-800':'text-white'}`}>{driver.name}</h3>
           <p className={`text-sm mt-4 ${isLight?'text-gray-600':'text-gray-300'}`}>{driver.secretFact || "Sem segredos revelados."}</p>
           <p className="mt-auto font-handwriting text-2xl transform -rotate-6 opacity-50">{driver.signature}</p>
        </div>
      </div>
    </div>
  );
};