import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Users, ArrowRight, Flag, ChevronLeft } from 'lucide-react';
import { TEAMS_DATA } from '../data/teams';

// --- COMPONENTES DE UI (Estilizados) ---

const BackButton = ({ to, theme }) => {
  const isLight = theme === 'light';
  return (
    <Link 
      to={to} 
      className={`inline-flex items-center gap-1.5 mb-8 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all hover:-translate-x-1 duration-200 ${
        isLight 
          ? 'bg-white text-gray-400 hover:text-pink-500 hover:shadow-sm border border-transparent hover:border-pink-100' 
          : 'bg-white/5 text-cyan-400/60 hover:text-cyan-300 hover:bg-white/10 border border-white/5 hover:border-cyan-500/30'
      }`}
    >
      <ChevronLeft size={12} />
      Voltar
    </Link>
  );
};

const PageContainer = ({ theme, children }) => {
  const isLight = theme === 'light';
  return (
    <div className={`min-h-screen w-full px-6 py-8 transition-colors duration-500 font-sans ${
      isLight 
        ? 'bg-[#FFF0F5] bg-[radial-gradient(#E0F2FE_1px,transparent_1px)] [background-size:20px_20px]' 
        : 'bg-[#090011] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#2a004a] via-[#090011] to-[#05000a] text-cyan-50'
    }`}>
      {/* Grid Retro Decorativo para Dark Mode */}
      {!isLight && (
        <div className="absolute inset-0 pointer-events-none opacity-20 fixed z-0" 
             style={{ 
               backgroundImage: 'linear-gradient(rgba(255, 0, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)', 
               backgroundSize: '40px 40px',
               maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)'
             }} 
        />
      )}
      <div className="max-w-5xl mx-auto relative z-10">
        {children}
      </div>
    </div>
  );
};

const PageHeader = ({ theme, badge, title, subtitle }) => {
  const isLight = theme === 'light';
  return (
    <div className="text-center mb-4">
      {badge && (
        <span className={`inline-block px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-[0.2em] mb-3 ${
          isLight 
            ? 'bg-white text-pink-400 shadow-sm' 
            : 'bg-fuchsia-900/30 text-fuchsia-300 border border-fuchsia-500/30 shadow-[0_0_10px_rgba(255,0,255,0.2)]'
        }`}>
          {badge}
        </span>
      )}
      <h1 className={`text-4xl md:text-5xl font-black tracking-tighter mb-3 uppercase ${
        isLight 
          ? 'text-transparent bg-clip-text bg-gradient-to-br from-gray-800 to-gray-500' 
          : 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-fuchsia-300 drop-shadow-[0_0_10px_rgba(0,255,255,0.3)]'
      }`} style={{ fontFamily: "'Russo One', sans-serif" }}>
        {title}
      </h1>
      <p className={`text-sm md:text-base max-w-lg mx-auto leading-relaxed ${
        isLight ? 'text-gray-400 font-medium' : 'text-cyan-100/60'
      }`}>
        {subtitle}
      </p>
    </div>
  );
};

// --- PÁGINA PRINCIPAL ---

const TeamsPage = ({ theme }) => {
  const isLight = theme === 'light';

  // Classes condicionais de estilo
  const cardClass = isLight 
    ? 'bg-white/70 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgba(236,72,153,0.05)] hover:shadow-[0_20px_40px_rgba(236,72,153,0.15)] hover:-translate-y-1' 
    : 'bg-[#121217]/60 backdrop-blur-xl border border-white/5 hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(0,255,255,0.1)] hover:-translate-y-1';

  const textMain = isLight ? 'text-gray-800' : 'text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]';
  const textSub = isLight ? 'text-gray-400' : 'text-cyan-200/50';

  return (
    <PageContainer theme={theme}>
      <BackButton to="/" theme={theme} />
      
      <div className="flex flex-col items-center mb-16">
        <div className={`p-4 rounded-2xl mb-6 transition-transform hover:scale-110 duration-300 ${
          isLight 
            ? 'bg-gradient-to-br from-pink-100 to-white text-pink-400 shadow-inner' 
            : 'bg-white/5 text-cyan-400 border border-cyan-500/20 shadow-[0_0_20px_rgba(0,255,255,0.15)]'
        }`}>
          <Wrench size={24} />
        </div>
        
        <PageHeader 
          theme={theme}
          badge="The Garage"
          title="Construtores"
          subtitle="As garagens que movem o campeonato. Descubra a história, a tecnologia e os pilotos de cada equipe."
        />
      </div>

      {/* Grid de Equipes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {TEAMS_DATA.map((team) => {
          const teamFolder = team.id || team.name.toLowerCase().replace(/\s+/g, '-');
          const logoImage = `/img/equipes/${teamFolder}/logo-${teamFolder}.png`;

          return (
            <Link 
              key={team.id} 
              to={`/teams/${teamFolder}`} 
              className={`group relative overflow-hidden rounded-[2rem] flex flex-col transition-all duration-500 ${cardClass}`}
            >
              {/* Barra Superior de Cor da Equipe (Glow Effect) */}
              <div 
                className="h-1 w-full flex-shrink-0 relative overflow-hidden" 
                style={{ 
                  backgroundColor: team.color, 
                  boxShadow: !isLight ? `0 0 10px ${team.color}` : 'none' 
                }}
              >
                <div className="absolute inset-0 bg-white/50 w-full h-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="flex-1 p-6 md:p-8 flex flex-col h-full relative z-10">
                
                {/* Header: Nome e Info */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className={`text-2xl md:text-3xl font-black uppercase leading-none mb-1.5 tracking-tighter ${textMain}`} style={{ fontFamily: "'Russo One', sans-serif" }}>
                      {team.name}
                    </h3>
                    <p className={`text-[9px] font-bold uppercase tracking-[0.25em] ${textSub}`}>
                      {team.fullName || 'Formula 1 Team'}
                    </p>
                  </div>
                  
                  {/* Ícone decorativo (Sutil) */}
                  <div className={`p-2 rounded-full opacity-50 group-hover:opacity-100 transition-all duration-500 ${
                    isLight ? 'bg-gray-50 text-gray-400' : 'bg-white/5 text-cyan-400'
                  }`}>
                    <Flag size={14} />
                  </div>
                </div>

                {/* Logo da Equipe */}
                <div className="relative h-32 w-full my-6 flex items-center justify-center p-4">
                  {/* Brilho atrás do logo (Dark Mode) */}
                  {!isLight && (
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-2xl rounded-full transform scale-50" 
                      style={{ backgroundColor: team.color }} 
                    />
                  )}
                  
                  <img 
                    src={logoImage}
                    alt={`Logo ${team.name}`}
                    className={`max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105 relative z-10 ${
                      !isLight ? 'brightness-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]' : 'drop-shadow-sm'
                    }`}
                    onError={(e) => {
                      e.target.src = `https://logo.clearbit.com/${team.domain || 'formula1.com'}`;
                      if (!isLight) e.target.style.filter = 'brightness(0) invert(1) drop-shadow(0 0 2px rgba(255,255,255,0.5))';
                    }}
                  />
                </div>

                {/* Footer Info (Drivers & Action) */}
                <div className={`mt-auto pt-5 border-t flex items-center justify-between transition-colors duration-300 ${
                  isLight 
                    ? 'border-gray-100 group-hover:border-pink-100' 
                    : 'border-white/5 group-hover:border-white/10'
                }`}>
                  <div className="flex flex-col gap-1.5">
                    <div className={`flex items-center gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity ${
                      isLight ? 'text-pink-400' : 'text-cyan-400'
                    }`}>
                      <Users size={12} />
                      <span className={`text-[8px] font-black uppercase tracking-[0.2em] ${isLight ? 'text-gray-400' : 'text-cyan-100/50'}`}>
                        Line-up
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      {team.drivers?.map((d, i) => (
                        <span key={i} className={`text-xs font-bold whitespace-nowrap ${textMain}`}>
                          {d.split(' ')[1]} {/* Apenas sobrenome para ficar mais chic/curto */}
                          {i < team.drivers.length - 1 && (
                            <span className={`mx-1.5 font-light opacity-30 ${isLight ? 'text-gray-400' : 'text-gray-600'}`}>/</span>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Botão de Seta */}
                  <div className={`p-2.5 rounded-full transition-all duration-500 transform group-hover:translate-x-1 ${
                    isLight 
                      ? 'bg-gray-50 text-gray-400 group-hover:bg-pink-500 group-hover:text-white group-hover:shadow-md' 
                      : 'bg-white/5 text-gray-500 group-hover:bg-cyan-500 group-hover:text-black group-hover:shadow-[0_0_15px_cyan]'
                  }`}>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>

              {/* Pattern de fundo no hover */}
              <div 
                className="absolute inset-0 opacity-[0.02] pointer-events-none group-hover:opacity-[0.06] transition-opacity duration-700"
                style={{ 
                  backgroundImage: `radial-gradient(circle at 2px 2px, ${isLight ? '#000' : '#fff'} 1px, transparent 0)`, 
                  backgroundSize: '16px 16px' 
                }} 
              />
            </Link>
          );
        })}
      </div>
      
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');`}</style>
    </PageContainer>
  );
};

export default TeamsPage;