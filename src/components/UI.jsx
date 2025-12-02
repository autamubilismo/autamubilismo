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
// LOGO ATUALIZADO: Estático, Sem Efeitos e Gigante (3x Maior)
export const LogoHelmet = ({ theme, size = 'normal' }) => {
  const isLight = theme === 'light';
  const [imageError, setImageError] = useState(false);
  useEffect(() => setImageError(false), [theme]);
  const currentLogoUrl = isLight ? LOGO_LIGHT_URL : LOGO_DARK_URL;
  
  // TAMANHO AUMENTADO (3X)
  // Mobile: w-64 (256px) | Desktop: w-[48rem] (768px - Bem grande)
  const containerClass = size === 'large' 
    ? "w-64 h-auto md:w-[48rem]" 
    : "w-32 h-auto md:w-48"; 

  if (!imageError) return (
    <div className="flex flex-col items-center justify-center">
        <div className={`${containerClass} relative flex items-center justify-center`}>
            {/* IMAGEM LIMPA: Sem transição, sem hover, sem glow, sem sombra */}
            <img 
              src={currentLogoUrl} 
              alt="Autamubilismo" 
              onError={() => setImageError(true)} 
              className="w-full h-full object-contain block"
            />
        </div>
    </div>
  );
  
  return <h1 className="text-2xl font-black tracking-widest uppercase text-gray-500">AUTAMUBILISMO</h1>;
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
              
              {/* A MÁGICA ESTÁ AQUI: Título + Descrição */}
              <div className="flex-1 min-w-0">
                <span className={`block text-sm md:text-xl font-bold truncate ${isLight ? 'text-gray-800' : 'text-white'}`}>{item.label}</span>
                <span className={`block text-[10px] md:text-xs font-medium leading-tight mt-0.5 ${isLight ? 'text-gray-400' : 'text-gray-500'}`}>{item.desc}</span>
              </div>

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

  // 1. Extração do Sobrenome (pega a última palavra do nome e coloca em minúsculo)
  const surname = driver.name.split(" ").slice(-1)[0].toLowerCase();
  
  // 2. Caminho da Imagem "Capa" (Photocard)
  const photocardUrl = `/img/pilotos/${surname}/${surname}-photocard.jpg`;

  // Estilos
  const borderClass = isLight 
    ? 'border-4 border-[#F7B8C8] shadow-[0_8px_20px_-5px_rgba(247,184,200,0.6)]' 
    : 'border-4 border-[#fe88dd] shadow-[0_0_15px_rgba(254,136,221,0.5)]'; 

  const backBgClass = isLight 
    ? 'bg-gradient-to-b from-[#FFF5F8] to-[#FEE4EF]' 
    : 'bg-[#121217]';

  return (
    <div 
      className="group relative w-full aspect-[3/4] cursor-pointer perspective-1000" 
      onClick={(e) => { 
        e.stopPropagation(); 
        setIsFlipped(!isFlipped); 
      }}
    >
      {/* CONTAINER QUE GIRA */}
      <div className={`relative w-full h-full transition-all duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : 'hover:-translate-y-2'}`}>
        
        {/* --- FRENTE (CAPA): FOTO FULL --- */}
        {/* A frente tem rotação 0. Quando o container gira 180, ela fica de costas e some (por causa do backface-hidden) */}
        <div className={`absolute inset-0 backface-hidden rounded-[2rem] overflow-hidden ${borderClass} bg-gray-200 z-10`}>
            <img 
              src={photocardUrl} 
              alt={`${driver.name} Photocard`}
              // Fallback: Se a foto 'photocard.jpg' não existir, tenta a foto de perfil padrão
              onError={(e) => { e.target.src = driver.image; }} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />

            {/* Gradiente para ler o nome */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            
            {/* Número Gigante Decorativo */}
            <div className="absolute top-2 right-4 text-8xl font-black text-white opacity-20 pointer-events-none">
              {driver.number}
            </div>

            {/* Nome na Frente */}
            <div className="absolute bottom-0 left-0 w-full p-6 z-10 flex flex-col items-center text-center">
               <h3 className="text-4xl font-black text-white leading-none drop-shadow-lg tracking-tight uppercase">
                 {surname}
               </h3>
               <div className="flex items-center justify-center gap-1 text-white/70 text-[10px] mt-2 uppercase tracking-widest animate-pulse">
                 <RotateCcw size={10} /> Clique para virar
               </div>
            </div>
        </div>

        {/* --- VERSO (DETALHES) --- */}
        {/* O verso já começa virado (rotate-y-180). Quando o container gira 180, ele fica na posição 0 (frente) */}
        <div className={`absolute inset-0 backface-hidden rotate-y-180 rounded-[2rem] p-4 flex flex-col justify-between text-center ${backBgClass} ${borderClass}`}>
            
            {/* Foto Pequena + Nome Completo */}
            <div className="flex flex-col items-center gap-3 mt-4">
                <div className={`w-20 h-20 rounded-full overflow-hidden border-4 ${isLight ? 'border-white shadow-md' : 'border-[#fe88dd] shadow-[0_0_10px_#fe88dd]'}`}>
                    {/* Aqui usamos a imagem de perfil padrão pequena */}
                    <img src={driver.image} className="w-full h-full object-cover" alt="Perfil" />
                </div>
                <div>
                  <h3 className={`font-black text-xl leading-none ${isLight ? 'text-gray-800' : 'text-white'}`}>{driver.name}</h3>
                  <span className={`inline-block mt-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${isLight ? 'bg-white text-gray-600 shadow-sm' : 'bg-[#fe88dd]/20 text-[#fe88dd] border border-[#fe88dd]/30'}`}>
                    {driver.team}
                  </span>
                </div>
            </div>

            {/* Status */}
            <div className="flex justify-center gap-4 text-xs font-bold uppercase opacity-60">
               <span>{driver.zodiac}</span>
               <span>•</span>
               <span>#{driver.number}</span>
            </div>

            {/* Fato Secreto */}
            <div className={`p-4 rounded-2xl text-sm italic font-medium relative mx-1 ${isLight ? 'bg-white text-gray-600 shadow-inner' : 'bg-[#1a1a20] text-gray-300 border border-[#fe88dd]/30'}`}>
                <span className="absolute -top-3 -left-1 text-4xl opacity-20 font-serif">"</span>
                {driver.secretFact || "Aguardando segredo..."}
                <span className="absolute -bottom-5 -right-1 text-4xl opacity-20 font-serif">"</span>
            </div>

            {/* Assinatura */}
            <div className="mt-1 transform -rotate-3 opacity-40">
                <p className={`font-handwriting text-3xl ${isLight ? 'text-gray-400' : 'text-[#fe88dd]'}`} style={{ fontFamily: 'cursive' }}>
                  {driver.signature || driver.name.split(' ')[0]}
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
  
  // CORES DO TEMA
  const accentColor = isLight ? 'text-teal-700' : 'text-[#fe88dd]';
  const itemBg = isLight ? 'bg-gray-50' : 'bg-[#1a1a20] border border-white/5';
  const highlightBg = isLight ? 'bg-teal-50 border-teal-200' : 'bg-[#fe88dd]/10 border-[#fe88dd]/30';

  // AGENDA QATAR 2025 (Horário de Brasília - Estimado)
  // Fim de semana de Sprint: Sexta (Quali Sprint), Sábado (Sprint + Quali), Domingo (Corrida)
  const sessions = [
    { day: 'SEX', date: '28 Nov', name: 'Treino Livre 1', time: '10:30', type: 'FP' },
    { day: 'SEX', date: '28 Nov', name: 'Classif. Sprint', time: '14:30', type: 'SQ' },
    { day: 'SÁB', date: '29 Nov', name: 'Sprint Race', time: '11:00', type: 'SPRINT', highlight: true },
    { day: 'SÁB', date: '29 Nov', name: 'Classificação', time: '15:00', type: 'Q' },
    { day: 'DOM', date: '30 Nov', name: 'Grande Prêmio', time: '13:00', type: 'RACE', main: true },
  ];

  return (
    <div className={`h-full flex flex-col p-5 relative overflow-hidden ${isLight ? 'text-gray-800' : 'text-white'}`}>
       
       {/* CABEÇALHO */}
       <div className="flex justify-between items-end mb-4 z-10">
          <div>
             <span className={`text-[10px] font-black uppercase tracking-widest opacity-60 flex items-center gap-1 mb-1`}>
               <MapPin size={10} /> Lusail, Catar
             </span>
             <h3 className={`text-2xl font-black leading-none ${accentColor}`}>GP DO CATAR</h3>
          </div>
          <div className={`px-2 py-1 rounded-lg text-[10px] font-bold flex items-center gap-1 border ${isLight ? 'bg-white border-gray-200 text-gray-500' : 'bg-black/30 border-white/10 text-gray-400'}`}>
             <Clock size={10} /> Brasília (BRT)
          </div>
       </div>

       {/* LISTA DE SESSÕES */}
       <div className="flex-1 flex flex-col justify-between gap-1.5 z-10 overflow-y-auto custom-scrollbar">
          {sessions.map((session, i) => (
             <div 
               key={i} 
               className={`flex items-center justify-between p-2 rounded-xl border transition-all
                 ${session.main ? `border ${highlightBg} shadow-sm` : `${itemBg} border-transparent opacity-80 hover:opacity-100`}
               `}
             >
                <div className="flex items-center gap-3">
                   {/* Data Box */}
                   <div className={`flex flex-col items-center justify-center w-9 h-9 rounded-lg font-bold leading-none 
                      ${session.main 
                         ? (isLight ? 'bg-teal-600 text-white' : 'bg-[#fe88dd] text-white') 
                         : (isLight ? 'bg-white text-gray-400' : 'bg-white/5 text-gray-500')}
                   `}>
                      <span className="text-[8px] uppercase">{session.day}</span>
                      <span className="text-xs">{session.date.split(' ')[0]}</span>
                   </div>
                   
                   {/* Nome da Sessão */}
                   <div>
                      <span className={`block text-xs font-bold ${session.main ? '' : 'opacity-90'}`}>
                        {session.name}
                      </span>
                      {session.type === 'SPRINT' && <span className="text-[8px] uppercase font-black text-orange-400 tracking-wider">Sprint</span>}
                   </div>
                </div>

                {/* Horário */}
                <div className={`font-mono font-bold ${session.main ? 'text-lg' : 'text-sm opacity-70'}`}>
                   {session.time}
                </div>
             </div>
          ))}
       </div>

       {/* Decoração de fundo (Bandeira sutil) */}
       <div className="absolute -right-6 -bottom-6 opacity-5 pointer-events-none rotate-12">
          <Flag size={140} />
       </div>
    </div>
  );
};

// IMPORTANTE: confira se esses imports existem onde você usa este componente:


export const NewsWidget = ({ theme, onNewsClick }) => {
  const isLight = theme === 'light';
  const [news, setNews] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  // ---- CARREGA DO SANITY ----
  React.useEffect(() => {
    async function load() {
      try {
        const data = await fetchNews();

        // SANITY VEM ASSIM: { title, slug, image, category, publishedAt }
        // slug já vem como string, usamos como está
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

  // ---- ESTADO: LOADING ----
  if (loading) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center opacity-60 gap-2 relative z-10">
        <Loader2 size={24} className={`animate-spin ${isLight ? 'text-[#D8C4F0]' : 'text-[#fe88dd]'}`} />
        <p className={`text-xs font-bold uppercase tracking-widest ${isLight ? 'text-gray-400' : 'text-gray-500'}`}>
          Carregando Paddock...
        </p>
      </div>
    );
  }

  // ---- ESTADO: ERRO ----
  if (error) {
    return (
      <div className="h-full flex flex-col relative z-10 items-center justify-center text-center">
        <AlertCircle size={24} className="text-red-400 mb-2" />
        <p className="text-xs font-bold text-red-400">{error}</p>
      </div>
    );
  }

  // ---- ESTADO: VAZIO ----
  if (!news.length) {
    return (
      <div className="h-full flex flex-col relative z-10 items-center justify-center text-center opacity-50">
        <Newspaper size={24} className="mb-2" />
        <p className="text-xs font-medium">Nenhuma notícia no momento.</p>
      </div>
    );
  }

  // ---- LISTAGEM FINAL ----
  return (
    <div className="h-full flex flex-col relative z-10">

      {/* CABEÇALHO */}
      <div className="flex items-center justify-between mb-4 px-1">
        <div className="flex items-center gap-2 opacity-90">
          <Newspaper size={18} className={isLight ? 'text-gray-600' : 'text-[#fe88dd]'} />
          <span className={`text-sm font-black uppercase tracking-widest ${isLight ? 'text-gray-800' : 'text-white'}`}>
            Últimas do Paddock
          </span>
        </div>

        <div className={`flex items-center gap-1.5 px-2 py-1 rounded-full text-[9px] font-bold uppercase 
          ${isLight ? 'bg-red-100 text-red-600' : 'bg-red-500/20 text-red-400 border border-red-500/30'}
        `}>
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500"></span>
          </span>
          Live
        </div>
      </div>

      {/* LISTA */}
      <div className="flex-1 flex flex-col gap-3 overflow-y-auto pr-2 custom-scrollbar">

        {news.map((item) => (
          <div
            key={item._id}
            onClick={() => {
              if (onNewsClick) {
                onNewsClick({
                  slug: item.slug,     // CORRETO — slug já é string
                  id: item._id,
                  title: item.title,
                });
              }
            }}
            className={`group relative flex gap-3 p-3 rounded-xl transition-all duration-300 cursor-pointer border
              ${isLight
                ? 'bg-gray-50 hover:bg-white border-transparent hover:border-[#D8C4F0] hover:shadow-md'
                : 'bg-[#0a0a12]/40 hover:bg-[#0a0a12] border-[#333] hover:border-[#fe88dd]/50 hover:shadow-[0_0_15px_rgba(254,136,221,0.1)]'
              }`}
          >

            {/* THUMB */}
            {item.image && (
              <div className="w-16 h-16 shrink-0 rounded-lg overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity ${isLight ? 'bg-[#D8C4F0]' : 'bg-[#fe88dd]'}`}></div>
              </div>
            )}

            {/* TEXTO */}
            <div className="flex-1 min-w-0 flex flex-col justify-center">

              {item.category && (
                <span className={`text-[9px] font-bold uppercase tracking-wider mb-1 w-fit px-1.5 rounded 
                  ${isLight ? 'bg-gray-200 text-gray-600' : 'bg-[#222] text-gray-400 group-hover:text-[#fe88dd]'}
                `}>
                  {item.category}
                </span>
              )}

              <h4 className={`text-sm font-bold leading-snug line-clamp-2 mb-1 transition-colors 
                ${isLight ? 'text-gray-800' : 'text-gray-200 group-hover:text-white'}
              `}>
                {item.title}
              </h4>

              <span className={`text-[10px] font-medium ${isLight ? 'text-gray-400' : 'text-gray-500'}`}>
                {item.publishedAt
                  ? new Date(item.publishedAt).toLocaleDateString('pt-BR', {
                      day: '2-digit',
                      month: 'short',
                      hour: '2-digit',
                      minute: '2-digit'
                    })
                  : 'Agora'}
              </span>
            </div>

            <div className={`absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 
                transition-all duration-300 -translate-x-2 group-hover:translate-x-0 
                ${isLight ? 'text-[#D8C4F0]' : 'text-[#fe88dd]'}
            `}>
              <ChevronRight size={16} />
            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export const FanzoneWidget = ({ theme }) => {
  const isLight = theme === 'light';
  return (
    <div className={`h-full flex flex-col items-center justify-center p-4 text-center relative z-10`}>
      <Sparkles size={32} className={`mb-2 ${theme==='light'?'text-purple-400':'text-[#bd00ff]'}`} />
      <h3 className={`font-black text-lg ${isLight ? 'text-gray-800' : 'text-white'}`}>Fanzone</h3>
    </div>
  );
};

export const SeasonWidget = ({ theme }) => {
  const isLight = theme === 'light';
  
  const topDrivers = [
    { pos: 1, name: 'Verstappen', team: 'RBR', pts: 403, color: '#1E41FF' },
    { pos: 2, name: 'Norris', team: 'MCL', pts: 370, color: '#FF8700' },
    { pos: 3, name: 'Leclerc', team: 'FER', pts: 319, color: '#FF0000' },
  ];
  
  // Top 3 Construtores (Adicionado para preencher o espaço)
  const topTeams = [
    { pos: 1, name: 'McLaren', pts: 608, color: '#FF8700' },
    { pos: 2, name: 'Ferrari', pts: 557, color: '#FF0000' },
    { pos: 3, name: 'Red Bull', pts: 544, color: '#1E41FF' },
  ];

  const cardBg = isLight ? 'bg-gray-50 border border-gray-100' : 'bg-white/5 border border-white/5';
  const textColor = isLight ? 'text-gray-800' : 'text-white';
  const subText = isLight ? 'text-gray-500' : 'text-gray-400';

  return (
    <div className={`h-full flex flex-col justify-between p-5 relative overflow-hidden text-left ${textColor}`}>
      <div className={`absolute -right-6 -top-6 w-24 h-24 rounded-full opacity-10 blur-xl ${isLight ? 'bg-teal-500' : 'bg-[#00fff2]'}`} />
      
      <div className="flex justify-between items-start mb-2 z-10">
         <div className="flex items-center gap-2">
            <div className={`p-1.5 rounded-lg ${isLight ? 'bg-teal-100 text-teal-700' : 'bg-[#00fff2]/20 text-[#00fff2]'}`}><Calendar size={14} /></div>
            <div><h3 className="text-sm font-black uppercase leading-none">Temporada</h3><p className={`text-[10px] font-bold ${subText}`}>2025</p></div>
         </div>
         <div className="text-right">
            <span className="text-[9px] font-bold opacity-60 uppercase">Round 23/24</span>
            <div className={`w-16 h-1 rounded-full mt-0.5 ${isLight ? 'bg-gray-200' : 'bg-white/20'}`}><div className={`h-full w-[95%] rounded-full ${isLight ? 'bg-teal-500' : 'bg-[#00fff2]'}`}></div></div>
         </div>
      </div>

      <div className="flex-1 flex flex-col gap-3 z-10 justify-center">
         {/* Pilotos */}
         <div className={`rounded-xl p-2.5 ${cardBg}`}>
            <div className="flex items-center gap-2 mb-2 opacity-70"><Trophy size={10} className="text-yellow-500" /><span className="text-[9px] font-black uppercase tracking-widest">Top 3 Pilotos</span></div>
            <div className="space-y-1.5">
               {topDrivers.map((d) => (
                  <div key={d.pos} className="flex items-center justify-between text-xs">
                     <div className="flex items-center gap-2"><span className={`font-mono w-2 opacity-50 text-[9px]`}>{d.pos}</span><div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: d.color }}></div><span className="font-bold truncate max-w-[80px]">{d.name}</span></div>
                     <span className="font-mono opacity-80 text-[10px]">{d.pts}</span>
                  </div>
               ))}
            </div>
         </div>
         {/* Construtores */}
         <div className={`rounded-xl p-2.5 ${cardBg}`}>
            <div className="flex items-center gap-2 mb-2 opacity-70"><Wrench size={10} className="text-blue-400" /><span className="text-[9px] font-black uppercase tracking-widest">Construtores</span></div>
            <div className="space-y-1.5">
               {topTeams.map((t) => (
                  <div key={t.pos} className="flex items-center justify-between text-xs">
                     <div className="flex items-center gap-2"><span className={`font-mono w-2 opacity-50 text-[9px]`}>{t.pos}</span><span className="font-bold truncate" style={{ color: t.color }}>{t.name}</span></div>
                     <span className="font-mono opacity-80 text-[10px]">{t.pts}</span>
                  </div>
               ))}
            </div>
         </div>
      </div>
      
      <div className="mt-2 pt-2 border-t border-white/5 flex justify-between items-center opacity-60 text-[9px] font-bold uppercase">
         <span className="flex items-center gap-1"><FlagTriangleRight size={10} /> 2 GPs Restantes</span>
         <span>Final: Abu Dhabi</span>
      </div>
    </div>
  );
};

export const ContactWidget = ({ theme }) => {
  const isLight = theme === 'light';
  return (
    <div className="h-full flex flex-col items-center justify-center text-center p-4 relative z-10">
      <MessageSquare size={32} className={`mb-3 ${isLight ? 'text-pink-500' : 'text-[#fe88dd]'}`} />
      <h3 className={`font-black text-lg ${isLight ? 'text-gray-800' : 'text-white'}`}>Contato</h3>
      <p className={`text-[10px] font-bold uppercase tracking-widest opacity-60 ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>Mande um alô</p>
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


