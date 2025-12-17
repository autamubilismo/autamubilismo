import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  X, ChevronRight, Flag, CloudMoon, MapPin, Newspaper, Zap, Mail, Sparkles, 
  Star, RotateCcw, Heart, MessageSquare, Menu, Sun, Moon, ArrowLeft, ArrowRight, 
  Search, Loader2, AlertCircle, Calendar, Clock, Trophy, Wrench, FlagTriangleRight,
  Home as HomeIcon, Users, BarChart3, Share2, Instagram, Twitter, Youtube, Facebook,
  BookOpen, Video, FileText, Info, HelpCircle
} from 'lucide-react';

// ==============================================================================
// ✅ IMPORTS CORRETOS (App.jsx está em src/, então não precisa de ./src/)
// ==============================================================================
import { client, urlFor } from './sanityClient';

// ⚠️ IMPORTANTE: Se você tiver o arquivo queries.js, descomente a linha abaixo:
// import { MANIFESTO_POST_QUERY } from './queries';

// Caso contrário, use esta definição temporária:
const MANIFESTO_POST_QUERY = `*[_type == "manifesto"][0]{ 
  _id, 
  title, 
  content, 
  image 
}`;

import DriversPage from './pages/Drivers';
import DriverDetail from './pages/DriverDetail';
import TeamsPage from './pages/Teams';
import TeamDetail from './pages/TeamDetail';
import SeasonPage from './pages/Season';
import CalendarPage from './pages/Calendar';
import StandingsPage from './pages/Standings';
import CircuitsPage from './pages/Circuits';
import RegulationsPage from './pages/Regulations';
import FanzonePage from './pages/Fanzone';
import ArticlesPage from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';
import ContactPage from './pages/Contact';
import GlossaryPage from './pages/Glossary';
import GenericPage from './pages/GenericPage';
import NewsList from './pages/News';       
import NewsDetail from './pages/NewsDetail'; 
import ManifestoPage from './pages/ManifestoPage'; 
import CuriositiesPage from './pages/Curiosities';
import MultimediaPage from './pages/Multimedia';
import CreditsPage from './pages/Credits';
import NewsletterSuccess from './pages/NewsletterSuccess';
import Calendar2026Page from './pages/Calendar2026Page';
import { SOCIAL_LINKS } from './data';
import { Analytics } from "@vercel/analytics/react";

// ==============================================================================
// 🎨 CONFIGURAÇÃO VISUAL & NOVA HOME
// ==============================================================================

// URLs do Logo
const LOGO_IMG_LIGHT = "/img/web/LIGHT-MODE-HEADER.png"; 
const LOGO_IMG_DARK = "/img/web/DARK-MODE-HEADER.png"; 
const HELMET_ICON = "/img/web/helmet.png";

// Mapa para o Menu Overlay
const SITE_MAP = [
  { id: 'home', path: '/', label: 'Início', desc: 'Página Principal', icon: HomeIcon },
  { id: 'news', path: '/news', label: 'Notícias', desc: 'Últimas Updates', icon: Newspaper },
  { id: 'season', path: '/season', label: 'Temporada', desc: 'Resumo 2025', icon: Trophy },
  { id: 'drivers', path: '/drivers', label: 'Pilotos', desc: 'Grid Atual', icon: Users },
  { id: 'teams', path: '/teams', label: 'Equipes', desc: 'Construtores', icon: Flag },
  { id: 'calendar', path: '/calendar', label: 'Calendário', desc: 'Corridas & Horários', icon: Calendar },
  { id: 'standings', path: '/standings', label: 'Classificação', desc: 'Tabelas de Pontos', icon: BarChart3 },
  { id: 'circuits', path: '/circuits', label: 'Circuitos', desc: 'Mapas e Detalhes', icon: MapPin },
  { id: 'regulations', path: '/regulations', label: 'Regulamento', desc: 'Regras 2026', icon: BookOpen },
  { id: 'fanzone', path: '/fanzone', label: 'Fanzone', desc: 'Vote e Participe', icon: Heart },
  { id: 'articles', path: '/articles', label: 'Artigos', desc: 'Opinião e Análise', icon: FileText },
  { id: 'media', path: '/media', label: 'Multimídia', desc: 'Galeria e Vídeos', icon: Video },
  { id: 'glossary', path: '/glossary', label: 'Glossário', desc: 'Termos da F1', icon: HelpCircle },
  { id: 'curiosities', path: '/curiosities', label: 'Curiosidades', desc: 'Fatos Históricos', icon: Zap },
  { id: 'contact', path: '/contact', label: 'Contato', desc: 'Fale Conosco', icon: MessageSquare },
  { id: 'about', path: '/credits', label: 'Sobre', desc: 'Créditos e Info', icon: Info },
];

// --- COMPONENTES UI REUTILIZÁVEIS ---

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const LogoHelmet = ({ theme, size = 'normal' }) => {
  const isLight = theme === 'light';
  const [imgError, setImgError] = useState(false);
  
  const logoUrl = isLight ? LOGO_IMG_LIGHT : LOGO_IMG_DARK;
  
  // Tamanhos diferentes para mobile vs desktop
  const mobileHelmetSize = size === 'large' ? "h-16" : "h-12"; 
  const desktopLogoSize = size === 'large' ? "h-48 lg:h-56 xl:h-64" : "h-20 md:h-24"; // ← 2x maior!

  if (!imgError) {
    return (
      <div className={`relative flex items-center justify-center ${size === 'large' ? 'p-2 md:p-4' : ''}`}>
        <div className={`absolute inset-0 blur-2xl opacity-40 rounded-full ${isLight ? 'bg-pink-300' : 'bg-purple-600'} animate-pulse`} />
        
        {/* MOBILE: Mostra apenas o helmet */}
        <img 
          src={HELMET_ICON} 
          alt="Autamubilismo Helmet" 
          className={`${mobileHelmetSize} w-auto object-contain transition-all duration-500 drop-shadow-lg relative z-10 md:hidden`}
          onError={() => setImgError(true)} 
        />
        
        {/* DESKTOP: Mostra o logo completo MAIOR (2x) */}
        <img 
          src={logoUrl} 
          alt="Autamubilismo" 
          className={`hidden md:block ${desktopLogoSize} w-auto max-w-[500px] object-contain transition-all duration-500 drop-shadow-lg relative z-10`}
          onError={() => setImgError(true)} 
        />
      </div>
    );
  }
  
  return (
    <div className="flex flex-col justify-center items-center md:items-start leading-none select-none relative z-10">
      <h1 className={`font-black tracking-tighter italic ${size === 'large' ? 'text-3xl md:text-6xl lg:text-7xl' : 'text-xl md:text-2xl'} ${isLight ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600' : 'text-white'}`}>
        AUTA<span className={isLight ? 'text-[#caa5d8]' : 'text-[#bd00ff]'}>MU</span>BILISMO
      </h1>
    </div>
  );
};

const NavigationOverlay = ({ isOpen, onClose, theme }) => {
  if (!isOpen) return null;
  const isLight = theme === 'light';

  return (
    <div className={`fixed inset-0 z-50 flex flex-col overflow-y-auto animate-in slide-in-from-left duration-500 ${isLight ? 'bg-[#FFF5F8]/90 backdrop-blur-2xl' : 'bg-[#050505]/90 backdrop-blur-2xl'}`}>
      <div className="p-6 flex justify-end">
        <button onClick={onClose} className="p-3 rounded-full hover:bg-black/5 transition-colors group">
          <X size={28} className={`${isLight ? 'text-gray-600 group-hover:text-pink-500' : 'text-white group-hover:text-purple-400'} transition-colors`} />
        </button>
      </div>
      <div className="flex-1 max-w-6xl mx-auto w-full p-6 md:p-10 pb-32">
        <div className="mb-10 px-2 border-b border-pink-200/30 pb-4 flex items-center gap-4">
            <h2 className={`text-4xl md:text-6xl font-black mb-2 tracking-tighter ${isLight ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500' : 'text-white'}`}>Menu</h2>
            <Sparkles className={`w-8 h-8 ${isLight ? 'text-pink-400' : 'text-purple-400'} animate-pulse`} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SITE_MAP.map((item) => (
            <Link key={item.id} to={item.path} onClick={onClose} className={`group relative p-5 rounded-3xl flex items-center gap-5 text-left transition-all duration-300 hover:scale-[1.02] border ${isLight ? 'bg-white/60 border-white hover:border-[#F7B8C8] hover:shadow-xl hover:shadow-[#F7B8C8]/30' : 'bg-[#121217]/60 border-[#333] hover:border-[#00fff2] hover:shadow-[0_0_20px_rgba(0,255,242,0.2)]'}`}>
              <div className={`w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center transition-colors shadow-sm ${isLight ? 'bg-gradient-to-br from-pink-100 to-purple-100 text-[#D8C4F0] group-hover:from-pink-200 group-hover:to-purple-200' : 'bg-[#1a1a20] text-[#00fff2] group-hover:bg-[#00fff2] group-hover:text-black'}`}>
                {item.icon && <item.icon size={26} className={isLight ? 'text-purple-500' : ''} />}
              </div>
              <div className="flex-1 min-w-0">
                <span className={`block text-xl font-bold tracking-tight truncate ${isLight ? 'text-gray-800' : 'text-white'}`}>{item.label}</span>
                <span className={`block text-xs font-medium uppercase tracking-wider mt-1 opacity-60 ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>{item.desc}</span>
              </div>
              <ChevronRight className={`transition-all transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 ${isLight ? 'text-pink-400' : 'text-[#caa5d8]'}`} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const SearchOverlay = ({ isOpen, onClose, theme }) => {
  if (!isOpen) return null;
  const isLight = theme === 'light';
  return (
    <div className={`fixed inset-0 z-50 flex flex-col animate-in fade-in slide-in-from-top-8 duration-300 backdrop-blur-3xl ${isLight ? 'bg-white/80' : 'bg-[#050505]/80'}`}>
      <div className="p-8 flex items-center gap-6 max-w-5xl mx-auto w-full mt-20">
        <Search size={32} className={isLight ? 'text-pink-400' : 'text-[#00fff2]'} />
        <input type="text" autoFocus placeholder="Busque por pilotos, equipes..." className={`flex-1 bg-transparent text-4xl md:text-5xl font-black outline-none placeholder:opacity-20 ${isLight ? 'text-gray-900 placeholder-pink-300' : 'text-white placeholder-gray-600'}`} />
        <button onClick={onClose} className="p-4 hover:bg-pink-50 rounded-full"><X size={32} className={isLight ? 'text-gray-500 hover:text-pink-500' : 'text-white'} /></button>
      </div>
    </div>
  );
};

const BentoCard = ({ children, className, theme, title, subtitle, onClick, to, noPadding = false }) => {
  const isLight = theme === 'light';
  const content = (
    <div className={`relative z-10 h-full flex flex-col ${noPadding ? '' : 'p-6 md:p-8'}`}>
      {(title || subtitle) && (
        <div className="mb-5 relative">
          {subtitle && <span className={`text-[10px] md:text-xs font-black tracking-[0.2em] uppercase mb-2 block opacity-80 ${isLight ? 'text-purple-400' : 'text-[#caa5d8]'}`}>{subtitle}</span>}
          {title && <h3 className={`text-xl md:text-2xl font-black leading-none ${isLight ? 'text-gray-900' : 'text-white font-mono'}`}>{title}</h3>}
          {isLight && <Heart size={12} className="absolute -right-2 top-0 text-pink-300 opacity-50 rotate-12" />}
        </div>
      )}
      {children}
    </div>
  );
  
  const baseClasses = `relative overflow-hidden transition-all duration-500 group ${className} 
    ${isLight 
      ? 'bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-xl rounded-[2.5rem] shadow-[0_20px_40px_-10px_rgba(236,72,153,0.15)] border border-white/80 hover:border-pink-200 hover:shadow-[0_25px_60px_-10px_rgba(236,72,153,0.3)] hover:-translate-y-1 ring-1 ring-white/50' 
      : 'bg-[#121217]/60 backdrop-blur-xl rounded-[2rem] border border-white/10 hover:border-[#00fff2]/50 hover:shadow-[0_0_40px_rgba(0,255,242,0.15)] hover:-translate-y-1'
    } active:scale-[0.98]`;
  
  const CardWrapper = ({ children }) => (
    <>
      <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${isLight ? 'from-pink-100/30' : 'from-white/10'} to-transparent opacity-50 pointer-events-none`} />
      <div className={`absolute inset-0 opacity-[0.05] pointer-events-none group-hover:opacity-[0.1] transition-opacity duration-700`} 
           style={{ backgroundImage: `radial-gradient(circle at 2px 2px, ${isLight ? '#ec4899' : '#fff'} 1px, transparent 0)`, backgroundSize: '24px 24px' }} />
      {children}
    </>
  );
  
  if (to) return <Link to={to} className={baseClasses}><CardWrapper>{content}</CardWrapper></Link>;
  return <div onClick={onClick} className={`${baseClasses} ${onClick ? 'cursor-pointer' : ''}`}><CardWrapper>{content}</CardWrapper></div>;
};

// --- COMPONENTES ESPECÍFICOS DA HOME ---

const KpopPhotocard = ({ driver, theme, onClick }) => {
  const isLight = theme === 'light';
  const [isFlipped, setIsFlipped] = useState(false);
  const surname = driver.name.split(' ').slice(-1)[0].toLowerCase();
  
  return (
    <div className="group relative w-full aspect-[3/4.2] cursor-pointer" style={{ perspective: '1200px' }} onClick={(e) => { e.stopPropagation(); setIsFlipped(!isFlipped); if (onClick) onClick(); }}>
      <div className="relative w-full h-full transition-all duration-700 ease-out-back" style={{ transformStyle: 'preserve-3d', transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}>
        <div className={`absolute inset-0 rounded-[2.5rem] overflow-hidden ${isLight ? 'border-[8px] border-white ring-4 ring-pink-200 shadow-2xl' : 'border-[6px] border-[#1a1a20] ring-4 ring-[#caa5d8] shadow-[0_0_30px_rgba(202,165,216,0.2)]'} bg-gray-200 z-10`} style={{ backfaceVisibility: 'hidden' }}>
          <img src={driver.image} alt={driver.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute top-4 right-5 text-8xl font-black text-white opacity-20 pointer-events-none tracking-tighter mix-blend-overlay">{driver.number}</div>
          <div className="absolute bottom-0 left-0 w-full p-6 z-10 flex flex-col items-center text-center">
            <h3 className="text-4xl font-black text-white leading-none drop-shadow-lg tracking-tighter uppercase mb-2">{surname}</h3>
            <div className="flex items-center justify-center gap-2 text-white/90 text-[10px] font-bold uppercase tracking-[0.2em] animate-pulse bg-white/20 px-4 py-1.5 rounded-full backdrop-blur-md border border-white/10"><RotateCcw size={12} /> Virar</div>
          </div>
        </div>
        <div className={`absolute inset-0 rounded-[2.5rem] p-6 flex flex-col justify-between text-center ${isLight ? 'bg-gradient-to-br from-pink-50 via-white to-purple-50 border-[8px] border-white ring-4 ring-pink-200' : 'bg-[#121217] border-[6px] border-[#1a1a20] ring-4 ring-[#caa5d8]'} `} style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
           <div className="flex flex-col items-center gap-3 mt-4">
            <div className={`w-24 h-24 rounded-full overflow-hidden border-4 shadow-lg ${isLight ? 'border-pink-300' : 'border-[#caa5d8]'}`}><img src={driver.image} className="w-full h-full object-cover" alt="Avatar" /></div>
            <div><h3 className={`font-black text-2xl leading-none ${isLight ? 'text-gray-800' : 'text-white'}`}>{driver.name}</h3><span className={`inline-block mt-2 px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest ${isLight ? 'bg-pink-100 text-pink-600' : 'bg-[#caa5d8]/20 text-[#caa5d8]'}`}>{driver.team}</span></div>
           </div>
           <div className="flex justify-center gap-4 text-xs font-bold uppercase opacity-60 tracking-widest"><span>{driver.zodiac}</span><span>•</span><span>#{driver.number}</span></div>
           <div className={`p-5 rounded-2xl text-sm italic font-medium relative mx-2 ${isLight ? 'bg-white/80 text-gray-600 shadow-inner ring-1 ring-pink-100' : 'bg-[#1a1a20] text-gray-300 border border-white/5'}`}><span className="absolute -top-3 -left-2 text-4xl opacity-20 font-serif">"</span>{driver.secretFact}<span className="absolute -bottom-5 -right-2 text-4xl opacity-20 font-serif">"</span></div>
           <div className="mt-2 transform -rotate-6 opacity-60 pb-4"><p className={`font-handwriting text-3xl ${isLight ? 'text-gray-400' : 'text-[#caa5d8]'}`} style={{ fontFamily: 'cursive' }}>{driver.signature}</p></div>
        </div>
      </div>
    </div>
  );
};

const NextRaceWidget = ({ theme }) => {
  const isLight = theme === 'light';
  const C = { roxo: '#caa5d8', rosa: '#fac4dc', neonRoxo: '#bd00ff', neonCyan: '#00fff2' };
  const sessions = [
    { day: 'SEX', date: '05', name: 'Treino Livre 1', time: '06:30', type: 'FP' },
    { day: 'SEX', date: '05', name: 'Treino Livre 2', time: '10:00', type: 'FP' },
    { day: 'SÁB', date: '06', name: 'Treino Livre 3', time: '07:30', type: 'FP' },
    { day: 'SÁB', date: '06', name: 'Classificação', time: '11:00', type: 'Q', highlight: true },
    { day: 'DOM', date: '07', name: 'Grande Prêmio', time: '10:00', type: 'RACE', main: true },
  ];
  return (
    <div className={`h-full flex flex-col p-6 md:p-8 relative overflow-hidden ${isLight ? 'text-gray-800' : 'text-white'}`}>
       <div className={`absolute -right-8 -bottom-16 opacity-[0.07] pointer-events-none rotate-12 transition-transform duration-1000 group-hover:rotate-0 ${isLight ? 'text-purple-900' : 'text-[#bd00ff]'}`}><Flag size={240} /></div>
       <div className="flex justify-between items-end mb-6 z-10 relative">
          <div><span className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.25em] opacity-60 mb-1"><MapPin size={11} /> Yas Marina, EAU</span><h3 className="text-3xl font-black leading-none italic tracking-tighter text-transparent bg-clip-text" style={{ backgroundImage: isLight ? `linear-gradient(to right, ${C.roxo}, ${C.rosa})` : `linear-gradient(to right, #fff, ${C.neonRoxo})` }}>ABU DHABI</h3></div>
          <div className={`px-3 py-1.5 rounded-xl text-[10px] font-bold flex items-center gap-1.5 border shadow-sm ${isLight ? 'bg-white border-pink-100 text-gray-500' : 'bg-white/10 border-white/5 text-gray-300'}`}><Clock size={12} /> <span>BRT</span></div>
       </div>
       <div className="flex-1 flex flex-col justify-between gap-2.5 z-10">
          {sessions.map((session, i) => (
             <div key={i} className={`flex items-center justify-between p-3 rounded-2xl transition-all duration-300 group/item hover:scale-[1.02] hover:px-4 ${session.main ? 'shadow-lg shadow-purple-500/20' : ''}`} style={session.main ? { background: isLight ? `linear-gradient(90deg, ${C.roxo}, ${C.rosa})` : `linear-gradient(90deg, ${C.neonRoxo}, #9d00ff)`, color: 'white' } : session.highlight ? { background: isLight ? 'white' : 'rgba(255,255,255,0.03)', borderColor: isLight ? C.roxo : C.neonCyan, borderWidth: '1px', borderStyle: 'solid', color: isLight ? '#333' : 'white' } : { background: isLight ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.02)', borderColor: isLight ? '#fce7f3' : 'transparent', borderWidth: '1px', borderStyle: 'solid', color: isLight ? '#9ca3af' : '#6b7280' }}>
                <div className="flex items-center gap-4"><div className={`flex flex-col items-center justify-center w-10 h-10 rounded-xl font-bold leading-none ${session.main ? 'bg-white/20 text-white backdrop-blur-sm' : (isLight ? 'bg-pink-50 text-pink-400' : 'bg-white/5 text-gray-500')}`}><span className="text-[8px] uppercase opacity-70 tracking-wider mb-0.5">{session.day}</span><span className="text-sm">{session.date}</span></div><div><span className={`block text-xs ${session.main || session.highlight ? 'font-black uppercase tracking-wide' : 'font-bold'}`}>{session.name}</span></div></div><div className={`font-mono font-bold tracking-tight ${session.main ? 'text-base' : 'text-sm opacity-80'}`}>{session.time}</div>
             </div>
          ))}
       </div>
    </div>
  );
};

// --- WIDGET DE NOTÍCIAS ---
const NewsWidget = ({ theme, posts, onNewsClick }) => {
  const isLight = theme === 'light';
  
  const loading = !posts || posts.length === 0;
  const displayPosts = posts || [];
  
  const C = { 
    roxo: '#caa5d8', 
    rosa: '#fac4dc', 
    azul: '#bbd3f2', 
    neonRoxo: '#bd00ff', 
    neonCyan: '#00fff2',
  };

  const getBadgeStyle = (type) => (
    type === 'article' 
      ? (isLight 
          ? { background: `linear-gradient(90deg, ${C.roxo}, ${C.rosa})`, color: 'white' } 
          : { borderColor: C.neonRoxo, color: C.neonRoxo, border: '1px solid' }) 
      : (isLight 
          ? { backgroundColor: C.azul, color: 'white' } 
          : { borderColor: C.neonCyan, color: C.neonCyan, border: '1px solid' })
  );

  return (
    <div className="flex flex-col h-full min-h-0 relative p-6 md:p-8">
      <div className="flex items-center justify-between mb-6 px-1 shrink-0">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-xl ${isLight ? 'bg-pink-100 text-pink-500' : 'bg-white/10 text-[#caa5d8]'}`}>
             <Newspaper size={22} />
          </div>
          <span className={`text-sm font-black uppercase tracking-[0.2em] ${isLight ? 'text-gray-600' : 'text-white'}`}>
            Últimas do Paddock
          </span>
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-4 overflow-y-auto pr-3 custom-scrollbar pb-2">
        {loading && (
          <div className="flex-1 flex flex-col items-center justify-center opacity-60 gap-3">
            <Loader2 size={32} className="animate-spin text-purple-400" />
            <span className="text-sm font-bold tracking-wide">Buscando fofocas...</span>
          </div>
        )}
        
        {!loading && displayPosts.map((item, idx) => (
          <button 
            key={item._id || idx} 
            onClick={() => onNewsClick?.(item)} 
            className={`group relative flex items-stretch gap-4 p-4 rounded-3xl text-left border transition-all duration-300 cursor-pointer shrink-0 
              ${isLight 
                ? "bg-white border-pink-50 hover:border-pink-200 hover:shadow-xl hover:shadow-pink-100 hover:-translate-y-1" 
                : "bg-[#0a0a12]/60 hover:bg-[#121217] border-[#222] hover:border-[#00fff2]/40 hover:-translate-y-1"
              }`}
          >
            {item.image && (
              <div className="w-24 shrink-0 rounded-2xl overflow-hidden relative shadow-md self-center aspect-square">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
            )}

            <div className="flex-1 min-w-0 flex flex-col justify-center py-1">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span 
                  className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-lg shadow-sm whitespace-nowrap" 
                  style={getBadgeStyle(item.type)}
                >
                  {item.category?.title || item.category || 'Geral'}
                </span>
                <span className={`text-[10px] font-bold opacity-50 ${isLight ? "text-gray-500" : "text-gray-400"}`}>
                  {item.dateObj ? item.dateObj.toLocaleDateString('pt-BR', {day: '2-digit', month: 'short'}) : ''}
                </span>
              </div>

              <h4 className={`text-sm md:text-[15px] font-bold leading-snug line-clamp-3 ${isLight ? "text-gray-800" : "text-gray-200 group-hover:text-white"} transition-colors`}>
                {item.title}
              </h4>
            </div>

            <div className={`absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 ${isLight ? 'text-pink-400' : 'text-[#00fff2]'}`}>
               <ChevronRight size={20} />
            </div>
          </button>
        ))}
      </div>
      
      <div className={`absolute bottom-0 left-0 right-0 h-8 pointer-events-none bg-gradient-to-t ${isLight ? 'from-white/80' : 'from-[#121217]/80'} to-transparent`} />
    </div>
  );
};

const FanzoneWidget = ({ theme }) => {
  const isLight = theme === 'light';
  return (
    <div className="h-full flex flex-col items-center justify-center p-6 text-center relative z-10 group">
      <div className={`p-5 rounded-full mb-4 transition-transform duration-500 group-hover:scale-110 shadow-lg ${isLight ? 'bg-pink-50 text-pink-400 ring-4 ring-pink-100' : 'bg-[#1a1a20] text-[#bd00ff]'}`}><Sparkles size={32} /></div>
      <h3 className={`font-black text-xl mb-1 ${isLight ? 'text-gray-800' : 'text-white'}`}>Fanzone</h3>
      <p className={`text-xs uppercase font-bold tracking-widest opacity-50 ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>Vote no Driver of The Day</p>
    </div>
  );
};

const SeasonWidget = ({ theme }) => {
  const isLight = theme === 'light';
  const C = { roxo: '#caa5d8', rosa: '#fac4dc', azul: '#bbd3f2', neonRoxo: '#bd00ff', neonCyan: '#00fff2' };
  const topDrivers = [{ pos: 1, name: 'L. Norris', team: 'MCL', pts: 408, color: '#FF8700' }, { pos: 2, name: 'M. Verstappen', team: 'RBR', pts: 396, color: '#1E41FF' }, { pos: 3, name: 'O. Piastri', team: 'MCL', pts: 392, color: '#FF8700' }, { pos: 4, name: 'G. Russell', team: 'MER', pts: 309, color: '#00D2BE' }, { pos: 5, name: 'C. Leclerc', team: 'FER', pts: 230, color: '#FF0000' }];
  const constructors = [{ name: 'McLaren', pts: 800, color: '#FF8700', percent: '100%' }, { name: 'Mercedes', pts: 459, color: '#00D2BE', percent: '57%' }, { name: 'Red Bull', pts: 426, color: '#1E41FF', percent: '53%' }];
  const boxClass = isLight ? 'bg-white border-pink-100' : 'bg-white/5 border-white/5';
  
  return (
    <div className={`h-full flex flex-col justify-between p-6 md:p-8 relative overflow-hidden text-left ${isLight ? 'text-gray-800' : 'text-white'}`}>
      <div className="absolute -right-10 -top-10 w-48 h-48 rounded-full opacity-10 blur-3xl pointer-events-none" style={{ background: isLight ? C.azul : C.neonCyan }} />
      <div className="flex justify-between items-start mb-6 z-10 relative">
         <div className="flex items-center gap-3"><div className={`p-3 rounded-2xl shadow-sm ${isLight ? 'bg-purple-50 text-purple-400' : 'bg-white/10 text-[#bd00ff]'}`}><Trophy size={20} /></div><div><h3 className="text-base font-black uppercase leading-none tracking-wide text-transparent bg-clip-text" style={{ backgroundImage: isLight ? `linear-gradient(to right, ${C.roxo}, ${C.rosa})` : `linear-gradient(to right, #fff, ${C.neonRoxo})` }}>Temporada 2025</h3><p className="text-[10px] font-bold uppercase tracking-wider mt-1 opacity-50">Campeonato Encerrado</p></div></div>
      </div>
      <div className="flex-1 grid grid-cols-1 gap-4 z-10">
         <div className={`rounded-3xl p-4 border shadow-sm flex flex-col justify-center ${boxClass}`}>
            <div className="flex items-center justify-between mb-3 px-1"><span className="text-[9px] font-black uppercase tracking-[0.2em] opacity-50">Top 5 Pilotos</span><span className="text-[9px] font-bold opacity-30">PTS</span></div>
            <div className="space-y-2">{topDrivers.map((d) => (<div key={d.pos} className="flex items-center justify-between text-xs group"><div className="flex items-center gap-3"><span className={`font-mono w-5 text-[10px] text-center rounded-lg py-0.5 ${d.pos === 1 ? 'bg-yellow-100 text-yellow-600 font-bold' : 'opacity-40'}`}>{d.pos}</span><div className="w-2 h-2 rounded-full" style={{ backgroundColor: d.color }}></div><span className={`truncate max-w-[100px] ${d.pos === 1 ? 'font-bold' : 'font-medium'}`}>{d.name}</span></div><span className="font-mono font-medium opacity-60 text-[11px] group-hover:opacity-100 transition-opacity">{d.pts}</span></div>))}</div>
         </div>
         <div className={`rounded-3xl p-4 border shadow-sm flex flex-col justify-center ${boxClass}`}>
            <div className="flex items-center gap-2 mb-3 px-1 opacity-50"><Wrench size={12} /><span className="text-[9px] font-black uppercase tracking-[0.2em]">Construtores</span></div>
            <div className="space-y-3">{constructors.map((t, i) => (<div key={i}><div className="flex justify-between text-[10px] font-bold mb-1.5 px-0.5"><span style={{ color: t.color }}>{t.name}</span><span className="font-mono opacity-60">{t.pts}</span></div><div className={`w-full h-2 rounded-full overflow-hidden ${isLight ? 'bg-pink-50' : 'bg-white/10'}`}><div className="h-full rounded-full transition-all duration-1000 ease-out origin-left hover:brightness-110" style={{ width: t.percent, backgroundColor: t.color }} /></div></div>))}</div>
         </div>
      </div>
      <div className="mt-4 pt-4 border-t border-dashed border-gray-200/50 dark:border-white/10 flex justify-center"><Link to="/regulations" className={`text-[10px] font-bold uppercase tracking-widest py-2 px-5 rounded-full transition-all flex items-center gap-2 hover:scale-105 ${isLight ? 'bg-gray-50 text-gray-400 hover:text-gray-600' : 'bg-white/5 text-gray-500 hover:text-white'}`}>Ver Regulamento 2026 <ArrowRight size={10} /></Link></div>
    </div>
  );
};

const ContactWidget = ({ theme }) => {
  const isLight = theme === 'light';
  return (
    <div className="h-full flex flex-col items-center justify-center text-center p-4 relative z-10 group">
      <div className={`p-4 rounded-full mb-3 transition-transform duration-300 group-hover:rotate-12 ${isLight ? 'bg-pink-50 text-pink-400' : 'bg-[#1a1a20] text-[#caa5d8]'}`}><MessageSquare size={28} /></div>
      <h3 className={`font-black text-lg ${isLight ? 'text-gray-800' : 'text-white'}`}>Contato</h3>
      <p className={`text-[10px] font-bold uppercase tracking-widest opacity-60 ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>Mande um alô</p>
    </div>
  );
};

const CuriosityWidget = ({ theme }) => (
  <div className="h-full flex flex-col items-center justify-center text-center p-2 relative z-10">
    <div className="bg-yellow-400/10 p-3 rounded-full mb-2"><Zap size={24} className="text-yellow-400" /></div>
    <h4 className="font-bold text-sm leading-tight">Você Sabia?</h4>
    <span className="text-[9px] opacity-60 mt-1 block px-2">Clique para uma curiosidade aleatória da F1.</span>
  </div>
);

const NewsletterWidget = ({ theme }) => {
  const isLight = theme === "light";
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);
  const handleSubmit = async (e) => { e.preventDefault(); if (!email) return; try { setStatus("loading"); await new Promise(r => setTimeout(r, 1500)); setStatus("success"); setEmail(""); } catch (error) { setStatus("error"); } };
  return (
    <div className="h-full flex flex-col md:flex-row items-center justify-center p-8 md:p-10 gap-6 md:gap-8 relative z-10">
      <Mail className={`absolute -right-4 -top-4 w-40 h-40 opacity-5 pointer-events-none rotate-12 ${isLight ? 'text-purple-600' : 'text-white'}`} />
      <div className="flex items-center gap-4 md:gap-6 shrink-0 relative z-10">
        <div className={`p-5 md:p-6 rounded-3xl shadow-md ${isLight ? "bg-white text-purple-400" : "bg-[#1a1a20] border border-[#333] text-white"}`}><Mail size={32} /></div>
        <div><h3 className={`font-black text-xl md:text-2xl mb-1 ${isLight ? 'text-gray-800' : 'text-white'}`}>Newsletter</h3><p className={`text-xs md:text-sm font-medium ${isLight ? 'text-gray-400' : 'text-gray-500'}`}>Fofocas quentinhas na sua caixa de entrada.</p></div>
      </div>
      <form className="flex flex-1 gap-3 md:gap-4 w-full max-w-lg relative z-10" onSubmit={handleSubmit}>
        <div className="relative flex-1 group"><input type="email" placeholder="seu@email.com" value={email} onChange={(e) => setEmail(e.target.value)} className={`w-full h-12 md:h-14 px-5 md:px-6 rounded-2xl text-sm md:text-base font-bold outline-none transition-all ${isLight ? "bg-white border-2 border-transparent focus:border-[#D8C4F0] text-gray-800 placeholder-gray-300 shadow-md" : "bg-[#0a0a12] border border-[#333] focus:border-[#00fff2] text-white placeholder-gray-600"}`} /></div>
        <button type="submit" disabled={status === "loading" || status === "success"} className={`h-12 md:h-14 px-6 md:px-10 rounded-2xl font-black text-xs md:text-sm uppercase tracking-wider transition-all active:scale-95 whitespace-nowrap shadow-xl flex items-center gap-3 ${isLight ? "bg-gray-900 hover:bg-black text-white hover:shadow-2xl" : "bg-[#bd00ff] hover:bg-[#a000db] text-white shadow-[0_0_20px_rgba(189,0,255,0.4)]"} ${status === "success" ? "bg-green-500 hover:bg-green-600" : ""}`}>{status === "loading" && <Loader2 size={18} className="animate-spin" />}{status === "success" ? "Enviado!" : "Assinar"}</button>
      </form>
    </div>
  );
};

// --- PÁGINA HOME (COM FETCH REAL) ---

const Home = () => {
  const [theme, setTheme] = useState('light');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');
  const navigate = useNavigate();
  
  const [feed, setFeed] = useState([]);
  const [manifesto, setManifesto] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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
            imageUrl: data.image
              ? urlFor(data.image).width(600).url()
              : null,
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

  // Padrões de Fundo
  const lightPattern = {
    backgroundColor: '#FFF5F8',
    backgroundImage: `
      radial-gradient(at 0% 0%, rgba(247, 184, 200, 0.4) 0px, transparent 50%),
      radial-gradient(at 100% 0%, rgba(216, 196, 240, 0.4) 0px, transparent 50%),
      conic-gradient(from 0deg at 50% 50%, rgba(247, 184, 200, 0.2) 0deg, transparent 60deg, rgba(216, 196, 240, 0.2) 120deg, transparent 180deg, rgba(247, 184, 200, 0.2) 240deg, transparent 300deg, rgba(216, 196, 240, 0.2) 360deg)
    `,
    backgroundSize: '100% 100%'
  };

  const darkPattern = {
    backgroundColor: '#0a0a0c',
    backgroundImage: `
      radial-gradient(at 0% 0%, rgba(189, 0, 255, 0.2) 0px, transparent 50%),
      radial-gradient(at 100% 100%, rgba(0, 255, 242, 0.2) 0px, transparent 50%),
      linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
    `,
    backgroundSize: '100% 100%, 100% 100%, 40px 40px, 40px 40px'
  };

  const DRIVER_OF_DAY = { name: "Lando Norris", team: "McLaren", number: "4", image: '/img/pilotos/norris/grid-norris.avif', zodiac: "Escorpião", secretFact: "Tem medo de peixes mas ama sushi.", signature: "L4ndo", vibes: [{ icon: Sparkles }] };

  return (
    <div className={`min-h-screen transition-colors duration-700 ease-in-out selection:bg-pink-300 selection:text-purple-900 flex flex-col`} style={theme === 'light' ? lightPattern : darkPattern}>
      <NavigationOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} theme={theme} />
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} theme={theme} />

      <header className="sticky top-0 z-40 w-full backdrop-blur-xl border-b border-white/20 transition-all duration-300 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-4 py-4 md:px-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => setIsMenuOpen(true)} className={`flex items-center gap-2 px-4 py-2.5 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 ${theme === 'light' ? 'bg-white/80 text-gray-800 shadow-lg hover:text-pink-500 hover:shadow-pink-200' : 'bg-[#1a1a20]/80 text-white border border-[#333] hover:text-[#00fff2] hover:border-[#00fff2] hover:shadow-[0_0_15px_rgba(0,255,242,0.3)]'}`}>
              <Menu size={20} />
              <span className="font-black text-xs tracking-widest uppercase">Menu</span>
            </button>
          </div>
          
          <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 transform hover:scale-105 transition-transform duration-500 cursor-pointer">
             <LogoHelmet theme={theme} size="large" />
          </div>
          
          <div className="flex items-center gap-2">
            <button onClick={() => setIsSearchOpen(true)} className={`hidden md:flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all hover:scale-105 ${theme === 'light' ? 'bg-white hover:bg-gray-50 text-gray-400 shadow-md ring-1 ring-pink-100' : 'bg-white/5 hover:bg-white/10 text-gray-400 border border-white/5'}`}>
              <Search size={18} />
              <span>Buscar</span>
            </button>
            <button onClick={() => setIsSearchOpen(true)} className={`md:hidden p-2.5 rounded-full transition-all ${theme === 'light' ? 'bg-white/80 text-gray-400 shadow-md' : 'bg-white/5 text-gray-400 border border-white/5'}`}>
              <Search size={20} />
            </button>
            <button onClick={toggleTheme} className={`flex items-center gap-2 px-4 py-2.5 rounded-full transition-all active:scale-95 shadow-lg ${theme === 'light' ? 'bg-yellow-100 text-yellow-600 hover:bg-yellow-200 hover:shadow-yellow-200 ring-2 ring-yellow-200' : 'bg-[#bd00ff]/20 text-[#bd00ff] border border-[#bd00ff]/30 hover:bg-[#bd00ff]/30 hover:shadow-[0_0_15px_rgba(189,0,255,0.3)]'}`}>
              {theme === 'light' ? <Sun size={18} className="fill-current" /> : <Moon size={18} className="fill-current" />}
              <span className="hidden sm:inline font-black text-xs tracking-widest uppercase">{theme === 'light' ? 'Light' : 'Dark'}</span>
            </button>
          </div>
        </div>
      </header>

      {theme === 'dark' && (
          <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden mix-blend-screen">
            <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#bd00ff]/10 blur-[120px] rounded-full animate-pulse" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#00fff2]/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
      )}

      <main className="flex-1 max-w-[1400px] mx-auto p-4 md:p-8 relative z-10 w-full">
        <div className="mb-8 md:mb-12 text-center md:text-left relative">
          <h2 className={`text-3xl md:text-5xl font-black tracking-tighter mb-3 leading-[0.9] ${theme === 'light' ? 'text-gray-900 drop-shadow-sm' : 'text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]'}`}>
            Olá, <span className={`text-transparent bg-clip-text bg-gradient-to-r ${theme === 'light' ? 'from-pink-400 via-[#caa5d8] to-[#fac4dc]' : 'from-[#ff00ff] via-[#bd00ff] to-[#00fff2]'}`}>F1 Lover!</span> 
          </h2>
          <p className={`text-sm md:text-lg font-medium max-w-2xl ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>
            Tudo o que você precisa saber sobre a F1, com aquele toque de caos e brilho que a gente ama.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 auto-rows-[minmax(200px,auto)]">
          <div className="lg:col-span-2 lg:row-span-1"><BentoCard theme={theme} className="h-full min-h-[260px]" noPadding><NextRaceWidget theme={theme} /></BentoCard></div>
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
          <div className="lg:col-span-1 lg:row-span-2"><BentoCard theme={theme} className="h-full min-h-[440px]" noPadding><SeasonWidget theme={theme} /></BentoCard></div>
          <div className="lg:col-span-1 lg:row-span-2 flex flex-col gap-6">
             <div className="flex items-center justify-between px-3">
                <span className={`text-xs font-black uppercase tracking-[0.2em] ${theme === 'light' ? 'text-purple-400' : 'text-gray-500'}`}>Driver of the Day</span>
                <Heart size={20} className={`${theme === 'light' ? 'text-red-400' : 'text-pink-500'} animate-pulse`} />
             </div>
             <div className="flex-1"><KpopPhotocard driver={DRIVER_OF_DAY} theme={theme} /></div>
          </div>
          <div className="lg:col-span-1"><BentoCard theme={theme} className="h-full flex items-center justify-center min-h-[200px]" onClick={() => console.log('Vote!')}><FanzoneWidget theme={theme} /></BentoCard></div>
          <div className="lg:col-span-1"><div className="grid grid-rows-2 gap-6 h-full min-h-[200px]"><BentoCard theme={theme} className="flex items-center justify-center" onClick={() => alert('Curiosidade!')} noPadding><CuriosityWidget theme={theme} /></BentoCard><BentoCard theme={theme} className="flex items-center justify-center" to="/contact" noPadding><ContactWidget theme={theme} /></BentoCard></div></div>
          <div className="md:col-span-2 lg:col-span-4"><BentoCard theme={theme} className="min-h-[240px]" noPadding><NewsletterWidget theme={theme} /></BentoCard></div>
        </div>
      </main>

      <footer className={`py-16 md:py-24 text-center border-t relative z-20 mt-10 ${theme === 'light' ? 'border-gray-200 bg-white/60 backdrop-blur-lg' : 'border-white/5 bg-black/60 backdrop-blur-lg'}`}>
         <div className="flex flex-col items-center justify-center gap-6 mb-8 opacity-90">
            <LogoHelmet theme={theme} size="normal" />
            <div className="flex gap-6 mt-4">
               {SOCIAL_LINKS.map(social => (
                  <a key={social.id} href={social.url} className={`p-3 rounded-full transition-all hover:-translate-y-1 ${theme === 'light' ? 'bg-white text-gray-400 hover:text-pink-500 shadow-md hover:shadow-pink-200' : 'bg-[#1a1a20] text-gray-500 hover:text-[#00fff2] hover:shadow-[0_0_15px_rgba(0,255,242,0.3)]'}`}>
                     <social.icon size={20} />
                  </a>
               ))}
            </div>
         </div>
         <p className={`text-sm font-bold tracking-wide ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>Feito com <span className="text-red-400 animate-pulse">♥</span> e muita velocidade.</p>
         <p className={`text-xs mt-3 opacity-50 uppercase tracking-widest ${theme === 'light' ? 'text-gray-400' : 'text-gray-600'}`}>© 2025 Autamubilismo. Não afiliado à Fórmula 1.</p>
      </footer>
    </div>
  );
};

// --- LAYOUT PADRÃO ---
const MainLayout = ({ children, theme, toggleTheme, menuOpen, setMenuOpen, searchOpen, setSearchOpen }) => {
  const headerBg = theme === 'light' ? 'bg-[#FFF5F8]/90 backdrop-blur-md' : 'bg-[#141416]/90 backdrop-blur-md';
  
  return (
    <div className={`min-h-screen flex flex-col ${theme === 'light' ? 'text-gray-800' : 'text-gray-200'}`}>
      <NavigationOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} theme={theme} />
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} theme={theme} />
      
      <div className={`w-full ${headerBg} sticky top-0 z-40 transition-all duration-300 border-b ${theme === 'light' ? 'border-gray-200/50' : 'border-white/5'}`}>
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-3">
          <header className="flex justify-between items-center">
            <div className="flex-1 flex justify-start">
              <button onClick={() => setMenuOpen(true)} className={`group flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 ${theme === 'light' ? 'bg-white text-gray-800 shadow-sm border border-gray-100' : 'bg-[#1a1a20] text-[#00fff2] border border-[#333]'}`}>
                <Menu size={20} />
                <span className="font-black tracking-widest text-xs uppercase">Menu</span>
              </button>
            </div>
            <div className="flex-0 cursor-pointer z-20 transform hover:scale-105 transition-transform duration-500">
              <Link to="/"><LogoHelmet theme={theme} size="normal" /></Link>
            </div>
            <div className="flex-1 flex justify-end gap-2">
              <button onClick={() => setSearchOpen(true)} className={`hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all hover:scale-105 ${theme === 'light' ? 'bg-white text-gray-400 hover:text-gray-600 shadow-sm' : 'bg-[#1a1a20] text-gray-400 border border-[#333] hover:text-[#00fff2]'}`}>
                <Search size={18} />
                <span>Buscar</span>
              </button>
              <button onClick={() => setSearchOpen(true)} className={`md:hidden p-2.5 rounded-full flex items-center justify-center transition-colors ${theme === 'light' ? 'bg-white text-gray-400 hover:text-gray-600 shadow-sm' : 'bg-[#1a1a20] text-gray-500 border border-[#333] hover:text-[#00fff2]'}`}>
                <Search size={20} />
              </button>
              <button onClick={toggleTheme} className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 ${theme === 'light' ? 'bg-white text-yellow-500 shadow-sm' : 'bg-[#1a1a20] text-[#00fff2] border border-[#333]'}`}>
                {theme === 'light' ? <Sun size={18} /> : <Moon size={18} />}
                <span className="hidden sm:inline font-black text-xs tracking-widest uppercase">{theme === 'light' ? 'Light' : 'Dark'}</span>
              </button>
            </div>
          </header>
        </div>
      </div>

      <div className={`flex-1 relative z-10 flex flex-col ${theme === 'light' ? 'bg-[#FFF5F8]' : 'bg-[#141416]'}`}>
        <div className="max-w-7xl mx-auto p-4 md:p-8 relative z-10 w-full flex-1">
          <main className="min-h-[60vh]">{children}</main>
        </div>
      </div>
    </div>
  );
};

// --- APP CONTENT ---
const AppContent = () => {
  const [theme, setTheme] = useState('light');
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();
  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  if (location.pathname === '/') return <Home />;

  return (
    <MainLayout theme={theme} toggleTheme={toggleTheme} menuOpen={menuOpen} setMenuOpen={setMenuOpen} searchOpen={searchOpen} setSearchOpen={setSearchOpen}>
      <Routes>
        <Route path="/drivers" element={<DriversPage theme={theme} />} />
        <Route path="/drivers/:id" element={<DriverDetail theme={theme} />} />
        <Route path="/teams" element={<TeamsPage theme={theme} />} />
        <Route path="/teams/:id" element={<TeamDetail theme={theme} />} />
        <Route path="/season" element={<SeasonPage theme={theme} />} />
        <Route path="/calendar" element={<CalendarPage theme={theme} />} />
        <Route path="/standings" element={<StandingsPage theme={theme} />} />
        <Route path="/circuits" element={<CircuitsPage theme={theme} />} />
        <Route path="/regulations" element={<RegulationsPage theme={theme} />} />
        <Route path="/news" element={<NewsList theme={theme} />} />
        <Route path="/news/:slug" element={<NewsDetail theme={theme} />} />
        <Route path="/articles" element={<ArticlesPage theme={theme} />} />
        <Route path="/articles/:id" element={<ArticleDetail theme={theme} />} />
        <Route path="/fanzone" element={<FanzonePage theme={theme} />} />
        <Route path="/contact" element={<ContactPage theme={theme} />} />
        <Route path="/glossary" element={<GlossaryPage theme={theme} />} />
        <Route path="/curiosities" element={<CuriositiesPage title="Curiosidades" theme={theme} />} />
        <Route path="/media" element={<MultimediaPage theme={theme} />} />
        <Route path="/credits" element={<CreditsPage theme={theme} />} />
        <Route path="/newsletter-success" element={<NewsletterSuccess theme={theme} />} />
        <Route path="/manifesto" element={<ManifestoPage theme={theme} />} />
        <Route path="/calendar-2026" element={<Calendar2026Page theme={theme} />} />
        <Route path="*" element={<GenericPage title="Página não encontrada" theme={theme} />} />
      </Routes>
    </MainLayout>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppContent />
      <Analytics />
    </BrowserRouter>
  );
}