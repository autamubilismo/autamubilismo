'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Calendar as CalendarIcon, MapPin, Clock, Zap, Flag, ChevronDown, Star, ChevronLeft } from 'lucide-react';
// Importação dos dados mantida conforme solicitado
import { F1_2026_PRESEASON, F1_2026_CALENDAR } from '../../data/f1Calendar2026';
import { useTheme } from '@/components/layout/ThemeContext';

// --- COMPONENTES DE UI (Inlined para garantir o estilo sem depender de arquivos externos) ---

const BackButton = ({ to, theme }) => {
  const isLight = theme === 'light';
  return (
    <Link 
      href={to} 
      className={`inline-flex items-center gap-2 mb-6 text-sm font-bold uppercase tracking-wider transition-all hover:-translate-x-1 duration-200 ${
        isLight 
          ? 'text-gray-500 hover:text-pink-500' 
          : 'text-cyan-400/70 hover:text-cyan-300 drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]'
      }`}
    >
      <ChevronLeft size={16} />
      Voltar
    </Link>
  );
};

const PageContainer = ({ theme, children }) => {
  const isLight = theme === 'light';
  return (
    <div className={`min-h-screen w-full px-6 py-8 transition-colors duration-500 ${
      isLight 
        ? 'bg-[#FFF0F5] bg-[radial-gradient(#E0F2FE_1px,transparent_1px)] [background-size:20px_20px]' 
        : 'bg-[#090011] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#2a004a] via-[#090011] to-[#05000a] text-cyan-50'
    }`}>
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Grid Retro Decorativo para Dark Mode */}
        {!isLight && (
          <div className="absolute inset-0 pointer-events-none opacity-20 fixed" 
               style={{ 
                 backgroundImage: 'linear-gradient(rgba(255, 0, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)', 
                 backgroundSize: '40px 40px',
                 maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)'
               }} 
          />
        )}
        {children}
      </div>
    </div>
  );
};

const PageHeader = ({ theme, badge, icon: Icon, title, subtitle }) => {
  const isLight = theme === 'light';
  return (
    <div className="mb-10 relative z-20 text-center md:text-left">
      {badge && (
        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 transition-all hover:scale-105 cursor-default ${
          isLight 
            ? 'bg-white text-pink-500 shadow-sm border border-pink-100' 
            : 'bg-fuchsia-900/30 text-fuchsia-300 border border-fuchsia-500/50 shadow-[0_0_15px_rgba(255,0,255,0.3)]'
        }`}>
          {Icon && <Icon size={12} />}
          {badge}
        </div>
      )}
      <h1 className={`text-4xl md:text-6xl font-black tracking-tighter mb-2 ${
        isLight 
          ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 drop-shadow-sm' 
          : 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-fuchsia-300 drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]'
      }`} style={{ fontFamily: "'Russo One', sans-serif" }}>
        {title}
      </h1>
      <p className={`text-lg font-medium ${isLight ? 'text-gray-500' : 'text-cyan-200/60'}`}>
        {subtitle}
      </p>
    </div>
  );
};

// --- COMPONENTES DA PÁGINA ---

// Componente Reutilizável: Card de Corrida
const RaceCard = ({ race, isExpanded, onToggle, theme }) => {
  const isLight = theme === 'light';
  
  // Função para formatar data - CORRIGIDA (com timezone fix)
  const formatDate = (startDate, endDate) => {
    // Parse dates as local timezone to avoid day-off-by-one errors
    const parseLocalDate = (dateStr) => {
      const [year, month, day] = dateStr.split('-').map(Number);
      return new Date(year, month - 1, day);
    };
    
    const start = parseLocalDate(startDate);
    const end = parseLocalDate(endDate);
    const startDay = start.getDate();
    const endDay = end.getDate();
    const startMonth = start.toLocaleDateString('pt-BR', { month: 'short' }).replace('.', '');
    const endMonth = end.toLocaleDateString('pt-BR', { month: 'short' }).replace('.', '');
    
    // Se mesmo mês, mostra: "5-7 mar"
    // Se meses diferentes, mostra: "28 fev-3 mar"
    if (startMonth === endMonth) {
      return `${startDay}-${endDay} ${endMonth}`;
    } else {
      return `${startDay} ${startMonth}-${endDay} ${endMonth}`;
    }
  };

  // Função para obter emoji da bandeira pelo país
  const getCountryFlag = (country) => {
    const flags = {
      'Austrália': '🇦🇺', 'China': '🇨🇳', 'Japão': '🇯🇵', 'Bahrein': '🇧🇭',
      'Arábia Saudita': '🇸🇦', 'Estados Unidos': '🇺🇸', 'Canadá': '🇨🇦',
      'Mônaco': '🇲🇨', 'Espanha': '🇪🇸', 'Áustria': '🇦🇹', 'Reino Unido': '🇬🇧',
      'Bélgica': '🇧🇪', 'Hungria': '🇭🇺', 'Países Baixos': '🇳🇱', 'Itália': '🇮🇹',
      'Azerbaijão': '🇦🇿', 'Singapura': '🇸🇬', 'México': '🇲🇽', 'Brasil': '🇧🇷',
      'Qatar': '🇶🇦', 'Emirados Árabes Unidos': '🇦🇪',
    };
    return flags[country] || '🏁';
  };
  
  return (
    <div className={`relative rounded-[2rem] overflow-hidden transition-all duration-300 group ${
      isLight 
        ? 'bg-white/80 backdrop-blur-md border border-white shadow-[0_4px_20px_rgba(236,72,153,0.1)] hover:shadow-[0_8px_30px_rgba(236,72,153,0.2)] hover:-translate-y-1' 
        : 'bg-[#121217]/60 backdrop-blur-md border border-white/5 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(0,255,255,0.15)] hover:-translate-y-1'
    }`}>
      {/* Glow Effect on Hover (Dark Mode) */}
      {!isLight && <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-fuchsia-500/0 to-cyan-500/0 group-hover:via-fuchsia-500/10 transition-all duration-500 pointer-events-none" />}

      {/* Header do Card */}
      <div 
        onClick={() => onToggle(race.id)}
        className="p-5 md:p-6 cursor-pointer relative z-10"
      >
        <div className="flex items-center gap-4 md:gap-6">
          {/* Round Number */}
          <div className="flex flex-col items-center justify-center min-w-[3.5rem]">
             <span className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${isLight ? 'text-gray-400' : 'text-gray-500'}`}>Round</span>
             <span className={`text-3xl md:text-4xl font-black italic ${
               isLight ? 'text-gray-200 group-hover:text-pink-400 transition-colors' : 'text-white/10 group-hover:text-cyan-400 transition-colors'
             }`}>
               {race.round}
             </span>
          </div>
          
          <div className="flex-1 min-w-0">
            {/* Top Row: Flag & Title & Sprint */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
              <span className="text-2xl drop-shadow-sm">{getCountryFlag(race.country)}</span>
              <h3 className={`text-lg md:text-xl font-black uppercase truncate tracking-tight ${
                isLight ? 'text-gray-800' : 'text-white group-hover:text-cyan-50 transition-colors'
              }`}>
                {race.title}
              </h3>
              
              {race.isSprint && (
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider flex items-center gap-1 ${
                  isLight 
                    ? 'bg-gradient-to-r from-amber-200 to-orange-300 text-white shadow-sm' 
                    : 'border border-yellow-400 text-yellow-300 shadow-[0_0_10px_rgba(250,204,21,0.3)] bg-yellow-400/10'
                }`}>
                  <Zap size={10} fill="currentColor" /> Sprint
                </span>
              )}
            </div>

            {/* Bottom Row: Location & Date */}
            <div className={`flex flex-wrap items-center gap-4 text-xs md:text-sm font-medium ${
              isLight ? 'text-gray-500' : 'text-cyan-100/60'
            }`}>
              <div className="flex items-center gap-1.5">
                <MapPin size={14} className={isLight ? 'text-pink-400' : 'text-fuchsia-400'} />
                {race.location}
              </div>
              <div className={`w-1 h-1 rounded-full ${isLight ? 'bg-gray-300' : 'bg-white/20'}`} />
              <div className="flex items-center gap-1.5">
                <CalendarIcon size={14} className={isLight ? 'text-purple-400' : 'text-cyan-400'} />
                {formatDate(race.startDate, race.endDate)}
              </div>
            </div>
          </div>
          
          {/* Chevron Toggle */}
          <div className={`p-2.5 rounded-full transition-all duration-300 ${
            isExpanded 
              ? `rotate-180 ${isLight ? 'bg-pink-100 text-pink-600' : 'bg-fuchsia-500 text-white shadow-[0_0_10px_rgba(255,0,255,0.5)]'}` 
              : `${isLight ? 'bg-gray-100 text-gray-400 group-hover:bg-white group-hover:shadow-md' : 'bg-white/5 text-gray-500 group-hover:bg-white/10 group-hover:text-cyan-400'}`
          }`}>
            <ChevronDown size={18} />
          </div>
        </div>
      </div>

      {/* Detalhes Expandidos */}
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
        isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className={`p-6 pt-0 border-t mx-6 mb-4 ${
          isLight ? 'border-pink-50' : 'border-white/5'
        }`}>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mt-5">
            {race.sessions && race.sessions.map((session, idx) => {
              // Highlight para Race e Sprint
              const isMainEvent = session.name.includes('Race') || session.name.includes('Sprint');
              
              return (
                <div key={idx} className={`p-3 rounded-2xl flex flex-col justify-between h-full transition-all hover:scale-105 ${
                  isMainEvent
                    ? (isLight ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-md' : 'bg-gradient-to-br from-cyan-600/20 to-fuchsia-600/20 border border-fuchsia-500/40 shadow-[0_0_15px_rgba(255,0,255,0.1)]')
                    : (isLight ? 'bg-gray-50 text-gray-600 hover:bg-white hover:shadow-sm border border-transparent hover:border-gray-100' : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/5')
                }`}>
                  <div>
                    <div className={`text-[9px] font-black uppercase tracking-wider mb-1 opacity-80`}>
                      {session.day} {session.date}
                    </div>
                    <div className={`text-xs font-bold leading-tight ${isMainEvent && !isLight ? 'text-cyan-50' : ''}`}>
                      {session.name}
                    </div>
                  </div>
                  
                  {session.time && (
                    <div className={`mt-3 flex items-center gap-1.5 text-xs font-mono font-medium ${
                      isMainEvent 
                        ? (isLight ? 'bg-white/20 backdrop-blur-sm rounded-lg py-1 px-2 w-fit' : 'text-cyan-300') 
                        : (isLight ? 'text-purple-600' : 'text-fuchsia-300')
                    }`}>
                      <Clock size={10} />
                      {session.time}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          
          <div className={`mt-4 text-[10px] font-bold uppercase tracking-widest text-right ${
            isLight ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Horários locais • {race.timezoneLabel}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- PÁGINA PRINCIPAL ---

const CalendarPage = () => {
  const { theme } = useTheme();
  const resolvedTheme = theme || 'light';
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Formatar dados de pré-temporada
  const formatPreseasonDate = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const startDay = start.getDate();
    const endDay = end.getDate();
    const month = end.toLocaleDateString('pt-BR', { month: 'short' }).replace('.', '');
    return `${startDay}-${endDay} ${month}`;
  };

  const isLight = theme === 'light';

  return (
    <PageContainer theme={resolvedTheme}>
      <BackButton to="/season" theme={resolvedTheme} />
      
      <PageHeader 
        theme={resolvedTheme}
        badge="Temporada 2026"
        icon={CalendarIcon}
        title="Calendário 2026"
        subtitle="24 corridas. Nova Era. 100% Emoção."
      />

      {/* Pré-Temporada */}
      <div className="mb-12 relative z-20">
        <h2 className={`text-xl font-black uppercase tracking-wider mb-6 flex items-center gap-3 ${
          isLight ? 'text-gray-800' : 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-transparent'
        }`}>
          <div className={`p-1.5 rounded-lg ${isLight ? 'bg-pink-100 text-pink-600' : 'bg-cyan-900/30 text-cyan-400 shadow-[0_0_10px_rgba(0,255,255,0.4)]'}`}>
             <Zap size={16} />
          </div>
          Pré-Temporada
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {F1_2026_PRESEASON.map((test) => (
            <div 
              key={test.id}
              className={`p-6 rounded-[2rem] flex items-center justify-between transition-all hover:-translate-y-1 ${
                isLight
                  ? 'bg-white/60 backdrop-blur-sm border border-white shadow-sm hover:shadow-md'
                  : 'bg-[#121217]/40 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30'
              }`}
            >
              <div>
                <div className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[9px] font-bold uppercase mb-2 ${
                   isLight ? 'bg-gray-100 text-gray-500' : 'bg-white/5 text-gray-400'
                }`}>
                   <Flag size={10} /> Testes de Inverno
                </div>
                <h3 className={`text-lg font-black uppercase ${
                  isLight ? 'text-gray-900' : 'text-white'
                }`}>
                  {test.title}
                </h3>
                <p className={`text-sm font-medium mt-1 ${
                  isLight ? 'text-gray-500' : 'text-gray-400'
                }`}>
                  <span className={isLight ? 'text-pink-500' : 'text-cyan-400'}>{test.circuitLabel}</span>
                  <span className="mx-2 opacity-30">|</span>
                  {formatPreseasonDate(test.startDate, test.endDate)}
                </p>
              </div>
              <div className={`p-3 rounded-full ${isLight ? 'bg-pink-50 text-pink-300' : 'bg-white/5 text-white/20'}`}>
                 <Clock size={24} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Corridas */}
      <div className="relative z-20">
        <div className="flex items-end justify-between mb-8">
            <h2 className={`text-xl font-black uppercase tracking-wider flex items-center gap-3 ${
              isLight ? 'text-gray-800' : 'text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-transparent'
            }`}>
              <div className={`p-1.5 rounded-lg ${isLight ? 'bg-purple-100 text-purple-600' : 'bg-fuchsia-900/30 text-fuchsia-400 shadow-[0_0_10px_rgba(255,0,255,0.4)]'}`}>
                <Star size={16} fill="currentColor" />
              </div>
              Campeonato Mundial
            </h2>
            <span className={`text-xs font-bold uppercase tracking-widest ${isLight ? 'text-gray-400' : 'text-gray-600'}`}>
                24 Etapas
            </span>
        </div>
        
        <div className="space-y-4">
          {F1_2026_CALENDAR.map((race) => (
            <RaceCard
              key={race.id}
              race={race}
              isExpanded={expandedId === race.id}
              onToggle={toggleExpand}
              theme={resolvedTheme}
            />
          ))}
        </div>
      </div>

      {/* Footer / Legacy Link */}
      <div className="mt-16 pb-8 relative z-20">
        <Link
          href="/calendar"
          className={`block p-8 rounded-[2.5rem] text-center transition-all duration-300 hover:scale-[1.02] ${
            isLight
              ? 'bg-gradient-to-r from-purple-100 to-pink-100 hover:shadow-lg hover:shadow-pink-100'
              : 'bg-gradient-to-r from-fuchsia-900/10 to-cyan-900/10 border border-white/5 hover:border-fuchsia-500/30 hover:shadow-[0_0_30px_rgba(255,0,255,0.1)]'
          }`}
        >
          <div className="flex flex-col items-center justify-center gap-2">
            <div className={`p-3 rounded-full mb-2 ${isLight ? 'bg-white text-purple-500' : 'bg-white/10 text-cyan-300'}`}>
               <CalendarIcon size={24} />
            </div>
            <h3 className={`text-xl font-black uppercase tracking-wider ${
              isLight ? 'text-gray-800' : 'text-white'
            }`}>
              Arquivo: Calendário 2025
            </h3>
            <p className={`text-sm font-medium ${
              isLight ? 'text-gray-500' : 'text-gray-400'
            }`}>
              Consultar resultados da temporada passada
            </p>
          </div>
        </Link>
      </div>
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');
      `}</style>
    </PageContainer>
  );
};

export default CalendarPage;
