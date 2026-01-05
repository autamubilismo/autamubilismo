import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Calendar, 
  Trophy, 
  MapPin, 
  Scale, 
  Users, 
  Wrench, 
  Globe, 
  Sparkles, 
  Zap, 
  Timer, 
  ArrowRight,
  ChevronLeft,
  Medal
} from 'lucide-react';

// --- Componentes Internos (Inlined) ---

const BackButton = ({ to, theme }) => {
  const isLight = theme === 'light';
  return (
    <a 
      href={to} 
      className={`inline-flex items-center gap-2 mb-6 text-sm font-bold uppercase tracking-wider transition-colors hover:-translate-x-1 duration-200 ${
        isLight 
          ? 'text-gray-500 hover:text-gray-900' 
          : 'text-cyan-400/70 hover:text-cyan-300 drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]'
      }`}
    >
      <ChevronLeft size={16} />
      Voltar
    </a>
  );
};

const PageContainer = ({ theme, children }) => {
  const isLight = theme === 'light';
  return (
    <div className={`min-h-screen w-full px-6 py-8 transition-colors duration-500 ${
      isLight 
        ? 'bg-[#FFF5F8]' 
        : 'bg-[#090011] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#2a004a] via-[#090011] to-[#05000a] text-cyan-50'
    }`}>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Grid Retro Decorativo para Dark Mode */}
        {!isLight && (
          <div className="absolute inset-0 pointer-events-none opacity-20" 
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
    <div className="mb-8 relative z-20">
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 ${
          isLight 
            ? 'bg-indigo-100 text-indigo-600' 
            : 'bg-fuchsia-900/30 text-fuchsia-300 border border-fuchsia-500/30 shadow-[0_0_10px_rgba(255,0,255,0.2)]'
        }`}>
          {Icon && <Icon size={12} />}
          {badge}
        </div>
      )}
      <h1 className={`text-4xl md:text-6xl font-black tracking-tighter mb-4 ${
        isLight 
          ? 'text-gray-900' 
          : 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-fuchsia-300 drop-shadow-[0_0_10px_rgba(0,255,255,0.3)]'
      }`} style={{ fontFamily: "'Russo One', sans-serif" }}>
        {title}
      </h1>
      <p className={`text-lg md:text-xl max-w-2xl ${isLight ? 'text-gray-600' : 'text-cyan-200/70 font-medium'}`}>
        {subtitle}
      </p>
    </div>
  );
};

// --- Widget de Classificação Vaporwave ---

const StandingsWidget = ({ theme }) => {
  const [activeTab, setActiveTab] = useState('drivers'); // 'drivers' or 'constructors'
  const isLight = theme === 'light';

  // Dados Mockados para 2026 (Projeção)
  const driversData = [
    { pos: 1, name: 'Max Verstappen', team: 'Red Bull Ford', points: 86, color: 'bg-blue-600' },
    { pos: 2, name: 'Lando Norris', team: 'McLaren', points: 78, color: 'bg-orange-500' },
    { pos: 3, name: 'Lewis Hamilton', team: 'Ferrari', points: 65, color: 'bg-red-600' },
    { pos: 4, name: 'George Russell', team: 'Mercedes', points: 52, color: 'bg-cyan-500' },
    { pos: 5, name: 'Charles Leclerc', team: 'Ferrari', points: 48, color: 'bg-red-600' },
  ];

  const constructorsData = [
    { pos: 1, name: 'Red Bull Ford', points: 142, color: 'bg-blue-600' },
    { pos: 2, name: 'Ferrari', points: 113, color: 'bg-red-600' },
    { pos: 3, name: 'McLaren', points: 98, color: 'bg-orange-500' },
    { pos: 4, name: 'Mercedes', points: 85, color: 'bg-cyan-500' },
    { pos: 5, name: 'Audi F1 Team', points: 34, color: 'bg-gray-500' }, 
  ];

  const data = activeTab === 'drivers' ? driversData : constructorsData;

  return (
    <div className={`rounded-[2rem] p-6 mb-10 border backdrop-blur-md relative z-20 ${
      isLight 
        ? 'bg-white border-gray-100 shadow-xl shadow-indigo-100/20' 
        : 'bg-[#130421]/60 border-fuchsia-500/20 shadow-[0_0_30px_rgba(189,0,255,0.1)]'
    }`}>
      {/* Header do Widget */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
        <div className="flex items-center gap-2">
          <Trophy size={20} className={isLight ? 'text-yellow-500' : 'text-yellow-300 drop-shadow-[0_0_8px_rgba(253,224,71,0.6)]'} />
          <h3 className={`text-lg font-black uppercase tracking-wide ${isLight ? 'text-gray-900' : 'text-white'}`}>
            Classificação 2026
          </h3>
        </div>
        
        {/* Toggle de Abas */}
        <div className={`flex p-1 rounded-xl ${isLight ? 'bg-gray-100' : 'bg-[#2a0e3d] border border-fuchsia-500/10'}`}>
          <button
            onClick={() => setActiveTab('drivers')}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === 'drivers' 
                ? (isLight ? 'bg-white text-indigo-600 shadow-sm' : 'bg-fuchsia-600 text-white shadow-[0_0_15px_rgba(255,0,255,0.5)]')
                : (isLight ? 'text-gray-400 hover:text-gray-600' : 'text-fuchsia-300/50 hover:text-fuchsia-300')
            }`}
          >
            Pilotos
          </button>
          <button
            onClick={() => setActiveTab('constructors')}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === 'constructors' 
                ? (isLight ? 'bg-white text-indigo-600 shadow-sm' : 'bg-cyan-600 text-white shadow-[0_0_15px_rgba(0,255,255,0.5)]')
                : (isLight ? 'text-gray-400 hover:text-gray-600' : 'text-cyan-300/50 hover:text-cyan-300')
            }`}
          >
            Construtores
          </button>
        </div>
      </div>

      {/* Tabela Simplificada */}
      <div className="space-y-3">
        {data.map((item) => (
          <div 
            key={item.name} 
            className={`flex items-center justify-between p-3 rounded-xl transition-all ${
              isLight 
                ? 'hover:bg-gray-50' 
                : 'hover:bg-white/5 border border-transparent hover:border-cyan-500/20 hover:shadow-[0_0_15px_rgba(0,255,255,0.1)]'
            }`}
          >
            <div className="flex items-center gap-4">
              <span className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-black ${
                item.pos === 1 ? (isLight ? 'bg-yellow-100 text-yellow-700' : 'bg-yellow-400 text-black shadow-[0_0_10px_rgba(250,204,21,0.5)]') : 
                item.pos === 2 ? (isLight ? 'bg-gray-100 text-gray-600' : 'bg-gray-400 text-black') : 
                item.pos === 3 ? (isLight ? 'bg-orange-100 text-orange-700' : 'bg-orange-400 text-black') : 
                (isLight ? 'text-gray-400' : 'text-cyan-600')
              }`}>
                {item.pos}
              </span>
              <div className="flex items-center gap-3">
                <div className={`w-1 h-8 rounded-full ${item.color} ${!isLight && 'shadow-[0_0_8px_currentColor]'}`}></div>
                <div>
                  <div className={`font-bold text-sm ${isLight ? 'text-gray-900' : 'text-cyan-50'}`}>
                    {item.name}
                  </div>
                  {item.team && (
                    <div className={`text-[10px] uppercase font-semibold ${isLight ? 'text-gray-400' : 'text-fuchsia-300/70'}`}>
                      {item.team}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className={`font-black font-mono ${isLight ? 'text-gray-900' : 'text-cyan-300'}`}>
              {item.points} <span className={`text-[10px] font-sans font-normal ${isLight ? 'text-gray-400' : 'text-cyan-700'}`}>PTS</span>
            </div>
          </div>
        ))}
      </div>
      
      {/* Link Ver Completo */}
      <div className={`mt-4 pt-4 border-t text-center ${isLight ? 'border-gray-100' : 'border-fuchsia-500/10'}`}>
        <button className={`text-xs font-bold uppercase tracking-widest hover:underline ${isLight ? 'text-indigo-600' : 'text-fuchsia-400 hover:text-fuchsia-300 hover:drop-shadow-[0_0_5px_rgba(255,0,255,0.8)]'}`}>
          Ver Tabela Completa
        </button>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, subtitle, badge, color, theme, onClick, className = "" }) => {
  const isLight = theme === 'light';
  
  // Cores Vaporwave para Dark Mode
  const colorStyles = {
    purple: { 
      bg: isLight ? 'bg-purple-100' : 'bg-purple-500/10', 
      text: isLight ? 'text-purple-600' : 'text-purple-300', 
      decoration: 'bg-purple-500',
      border: 'border-purple-500/30'
    },
    green: { 
      bg: isLight ? 'bg-green-100' : 'bg-green-500/10', 
      text: isLight ? 'text-green-600' : 'text-green-300', 
      decoration: 'bg-green-500',
      border: 'border-green-500/30'
    },
    blue: { 
      bg: isLight ? 'bg-blue-100' : 'bg-blue-500/10', 
      text: isLight ? 'text-blue-600' : 'text-cyan-300', 
      decoration: 'bg-cyan-500',
      border: 'border-cyan-500/30'
    },
    yellow: { 
      bg: isLight ? 'bg-yellow-100' : 'bg-yellow-500/10', 
      text: isLight ? 'text-yellow-600' : 'text-yellow-300', 
      decoration: 'bg-yellow-500',
      border: 'border-yellow-500/30'
    },
    orange: { 
      bg: isLight ? 'bg-orange-100' : 'bg-orange-500/10', 
      text: isLight ? 'text-orange-600' : 'text-orange-300', 
      decoration: 'bg-orange-500',
      border: 'border-orange-500/30'
    },
    red: { 
      bg: isLight ? 'bg-red-100' : 'bg-red-500/10', 
      text: isLight ? 'text-red-600' : 'text-red-300', 
      decoration: 'bg-red-500',
      border: 'border-red-500/30'
    },
    indigo: { 
      bg: isLight ? 'bg-indigo-100' : 'bg-indigo-500/10', 
      text: isLight ? 'text-indigo-600' : 'text-indigo-300', 
      decoration: 'bg-indigo-500',
      border: 'border-indigo-500/30'
    },
  };

  const currentStyle = colorStyles[color] || colorStyles.indigo;

  return (
    <div 
      onClick={onClick}
      className={`relative overflow-hidden group cursor-pointer rounded-[2rem] p-6 transition-all duration-300 hover:-translate-y-1 relative z-20 ${
        isLight 
          ? 'bg-white border border-gray-100 hover:shadow-xl' 
          : `bg-[#110524] border ${currentStyle.border} hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:border-opacity-100`
      } ${className}`}
    >
      <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full blur-2xl opacity-20 transition-opacity group-hover:opacity-40 ${currentStyle.decoration}`} />
      
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          <div className="flex justify-between items-start mb-4">
            <div className={`p-3 rounded-2xl ${currentStyle.bg} ${currentStyle.text} ${!isLight && 'shadow-[0_0_10px_currentColor] bg-opacity-10'}`}>
              <Icon size={24} />
            </div>
            {badge && (
              <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full ${
                isLight 
                  ? 'bg-gray-100 text-gray-600' 
                  : 'bg-[#222] text-gray-300 border border-white/10'
              }`}>
                {badge}
              </span>
            )}
          </div>
          
          <h3 className={`text-xl font-bold mb-1 ${isLight ? 'text-gray-900' : 'text-white'}`}>
            {title}
          </h3>
          <p className={`text-sm leading-relaxed ${isLight ? 'text-gray-500' : 'text-cyan-100/60'}`}>
            {subtitle}
          </p>
        </div>

        <div className={`mt-4 flex items-center text-xs font-bold uppercase tracking-wide transition-colors ${
          isLight 
            ? 'text-gray-400 group-hover:text-gray-900' 
            : 'text-fuchsia-400 group-hover:text-fuchsia-200 group-hover:drop-shadow-[0_0_5px_rgba(255,0,255,0.8)]'
        }`}>
          Explorar <ArrowRight size={14} className="ml-1 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  );
};

// --- Página Principal ---

const SeasonPage = ({ theme }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const quickLinks = [
    { 
      icon: Calendar, 
      title: 'Calendário 2026', 
      subtitle: 'Estreia do GP de Madrid & 24 etapas confirmadas.', 
      to: '/calendar', 
      color: 'purple',
      badge: 'Estreia Madrid'
    },
    { 
      icon: Users, 
      title: 'Grid de Pilotos', 
      subtitle: 'Quem fica e quem sai na dança das cadeiras.', 
      to: '/drivers', 
      color: 'green',
      badge: 'Mercado'
    },
    { 
      icon: Wrench, 
      title: 'Novas Equipes', 
      subtitle: 'Audi entra em cena e Ford retorna com a Red Bull.', 
      to: '/teams', 
      color: 'blue',
      badge: 'Audi / Ford'
    },
    { 
      icon: Scale, 
      title: 'Regulamento Técnico', 
      subtitle: 'Motores 50% elétricos e aerodinâmica ativa.', 
      to: '/regulations', 
      color: 'yellow',
      badge: 'Nova Era'
    },
    { 
      icon: Trophy, 
      title: 'Classificação Completa', 
      subtitle: 'Veja a tabela completa e estatísticas detalhadas.', 
      to: '/standings', 
      color: 'orange',
      badge: 'Estatísticas'
    },
    { 
      icon: MapPin, 
      title: 'Circuitos', 
      subtitle: 'Detalhes técnicos de todos os traçados do ano.', 
      to: '/circuits', 
      color: 'red',
      badge: 'Pistas'
    },
  ];

  const handleCardClick = (to) => {
    if (to) navigate(to);
  };

  const isLight = theme === 'light';

  return (
    <PageContainer theme={theme}>
      <BackButton to="/" theme={theme} />
      
      <PageHeader 
        theme={theme}
        badge="Nova Era"
        icon={Zap}
        title="Temporada 2026"
        subtitle="O início de uma nova geração na Fórmula 1"
      />

      {/* Hero Widget 2026 */}
      <div className={`relative w-full rounded-[2.5rem] p-8 mb-8 overflow-hidden z-20 transition-all duration-500 ${
        isLight 
          ? 'bg-gradient-to-br from-indigo-600 to-purple-700 text-white' 
          : 'bg-gradient-to-br from-[#2a0e3d] via-[#1a052b] to-[#0b0014] border border-fuchsia-500/30 shadow-[0_0_30px_rgba(255,0,255,0.15)]'
      }`}>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 ${
              isLight 
                ? 'bg-white/20 text-white backdrop-blur-md' 
                : 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 shadow-[0_0_10px_rgba(0,255,255,0.3)]'
            }`}>
              <Timer size={12} /> Contagem Regressiva
            </div>
            <h2 className={`text-3xl md:text-4xl font-black italic tracking-tighter mb-2 ${
              isLight ? 'text-white' : 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-400 drop-shadow-[0_0_5px_rgba(255,0,255,0.5)]'
            }`}>
              AUDI vs RED BULL FORD
            </h2>
            <p className={`max-w-md text-sm md:text-base ${isLight ? 'text-indigo-100' : 'text-cyan-100/70'}`}>
              A maior mudança de regulamento de motores da década. Menos combustível, mais bateria, aerodinâmica móvel.
            </p>
          </div>
          <div className={`flex-shrink-0 backdrop-blur-sm p-4 rounded-2xl border ${
            isLight 
              ? 'bg-white/10 border-white/20' 
              : 'bg-black/40 border-cyan-500/30 shadow-[0_0_15px_rgba(0,255,255,0.1)]'
          }`}>
             <div className="text-center">
                <span className={`block text-4xl font-black ${isLight ? 'text-white' : 'text-cyan-300 drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]'}`}>50%</span>
                <span className={`text-xs font-bold uppercase ${isLight ? 'text-indigo-200' : 'text-fuchsia-300'}`}>Elétrico</span>
             </div>
          </div>
        </div>
        
        {/* Glows Decorativos Hero */}
        <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none ${
          isLight ? 'bg-white/5' : 'bg-fuchsia-600/20'
        }`}></div>
        <div className={`absolute bottom-0 left-0 w-48 h-48 rounded-full blur-2xl -ml-10 -mb-10 pointer-events-none ${
          isLight ? 'bg-purple-500/20' : 'bg-cyan-500/20'
        }`}></div>
      </div>

      {/* WIDGET DE CLASSIFICAÇÃO */}
      <StandingsWidget theme={theme} />

      {/* Barra de Pesquisa */}
      <div className={`relative mb-10 group z-20`}>
        <div className={`absolute inset-0 rounded-full blur-md opacity-20 transition-opacity group-hover:opacity-40 ${
          isLight ? 'bg-indigo-400' : 'bg-fuchsia-500'
        }`}></div>
        <div className={`relative flex items-center gap-4 p-4 rounded-full border transition-all ${
          isLight 
            ? 'bg-white border-gray-100 shadow-lg shadow-indigo-100/50' 
            : 'bg-[#0f0518] border-fuchsia-500/30 shadow-lg shadow-black/50 text-cyan-100 focus-within:border-cyan-400/60 focus-within:shadow-[0_0_15px_rgba(0,255,255,0.2)]'
        }`}>
          <Globe className={`w-5 h-5 ml-2 ${isLight ? 'text-indigo-500' : 'text-cyan-400 drop-shadow-[0_0_5px_rgba(0,255,255,0.8)]'}`} />
          <input 
            type="text" 
            placeholder="Buscar pilotos, equipes ou regras de 2026..." 
            className={`bg-transparent w-full outline-none font-medium ${
              isLight 
                ? 'text-gray-800 placeholder-gray-400' 
                : 'text-white placeholder-fuchsia-300/40'
            }`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Grelha de Informações */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 relative z-20">
        {quickLinks
          .filter(link => link.title.toLowerCase().includes(searchTerm.toLowerCase()))
          .map((link, idx) => (
          <FeatureCard
            key={idx}
            icon={link.icon}
            title={link.title}
            subtitle={link.subtitle}
            badge={link.badge}
            color={link.color}
            theme={theme}
            onClick={() => handleCardClick(link.to)}
          />
        ))}
      </div>
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');
      `}</style>
    </PageContainer>
  );
};

export default SeasonPage;