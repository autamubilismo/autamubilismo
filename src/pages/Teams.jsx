import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Users, ArrowRight, Flag } from 'lucide-react';
import { BackButton } from '../components/ui';
import { PageContainer } from '../components/ui/PageContainer';
import { PageHeader } from '../components/ui/PageHeader';
import { TEAMS_DATA } from '../data';

const TeamsPage = ({ theme }) => {
  const isLight = theme === 'light';

  const cardClass = isLight 
    ? 'bg-white/60 backdrop-blur-xl border border-pink-100 shadow-[0_10px_30px_rgba(255,182,193,0.3)] hover:shadow-[0_20px_50px_rgba(255,182,193,0.5)] hover:border-pink-200' 
    : 'bg-[#121217]/80 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:border-[#bd00ff]/50 hover:shadow-[0_0_30px_rgba(189,0,255,0.2)]';

  const textMain = isLight ? 'text-gray-900' : 'text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]';
  const textSub = isLight ? 'text-gray-500' : 'text-cyan-100/70';

  return (
    <PageContainer theme={theme}>
      <BackButton to="/" theme={theme} />
      
      <div className="text-center max-w-4xl mx-auto mb-16">
        <div className="flex justify-center mb-6">
          <div className={`p-3 rounded-full ${
            isLight 
              ? 'bg-pink-100 text-pink-500' 
              : 'bg-fuchsia-900/30 text-fuchsia-400 border border-fuchsia-500/30 shadow-[0_0_15px_rgba(232,121,249,0.3)]'
          }`}>
            <Wrench size={32} />
          </div>
        </div>
        
        <PageHeader 
          theme={theme}
          badge="The Garage"
          title="Construtores"
          subtitle="As garagens que movem o campeonato. Descubra a história e os pilotos de cada equipe."
        />
      </div>

      {/* Grid de Equipes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {TEAMS_DATA.map((team) => {
          const teamFolder = team.id || team.name.toLowerCase().replace(/\s+/g, '-');
          const logoImage = `/img/equipes/${teamFolder}/logo-${teamFolder}.png`;

          return (
            <Link 
              key={team.id} 
              to={`/teams/${teamFolder}`} 
              className={`group relative overflow-hidden rounded-[2.5rem] flex flex-col transition-all duration-500 hover:-translate-y-2 ${cardClass}`}
            >
              {/* Barra Superior de Cor da Equipe */}
              <div 
                className="h-1.5 w-full flex-shrink-0 transition-all duration-500 group-hover:h-3 relative overflow-hidden" 
                style={{ 
                  backgroundColor: team.color, 
                  boxShadow: !isLight ? `0 0 15px ${team.color}` : 'none' 
                }}
              >
                <div className="absolute inset-0 bg-white/30 w-full h-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="flex-1 p-8 md:p-10 flex flex-col h-full relative z-10">
                
                {/* Header: Nome e Info */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className={`text-3xl md:text-4xl font-black uppercase leading-none mb-2 tracking-tighter ${textMain}`}>
                      {team.name}
                    </h3>
                    <p className={`text-[10px] font-bold uppercase tracking-[0.2em] opacity-60 ${textSub}`}>
                      {team.fullName || 'Formula 1 Team'}
                    </p>
                  </div>
                  
                  {/* Ícone decorativo */}
                  <div className={`p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0 ${
                    isLight ? 'bg-pink-50 text-pink-400' : 'bg-white/5 text-cyan-400'
                  }`}>
                    <Flag size={20} />
                  </div>
                </div>

                {/* Logo da Equipe */}
                <div className="relative h-48 w-full my-8 flex items-center justify-center p-6">
                  {/* Brilho atrás do logo */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-3xl rounded-full transform scale-75" 
                    style={{ backgroundColor: team.color }} 
                  />
                  
                  <img 
                    src={logoImage}
                    alt={`Logo ${team.name}`}
                    className={`max-w-full max-h-full object-contain drop-shadow-xl transition-transform duration-700 group-hover:scale-110 relative z-10 ${
                      !isLight ? 'brightness-125 saturate-150' : ''
                    }`}
                    onError={(e) => {
                      e.target.src = `https://logo.clearbit.com/${team.domain || 'formula1.com'}`;
                      if (!isLight) e.target.style.filter = 'brightness(0) invert(1) drop-shadow(0 0 5px rgba(255,255,255,0.5))';
                    }}
                  />
                </div>

                {/* Footer Info */}
                <div className={`mt-auto pt-6 border-t flex items-center justify-between transition-colors duration-300 ${
                  isLight 
                    ? 'border-pink-100/50 group-hover:border-pink-200' 
                    : 'border-white/5 group-hover:border-cyan-500/20'
                }`}>
                  <div className="flex flex-col gap-3">
                    <div className={`flex items-center gap-2 opacity-70 group-hover:opacity-100 transition-opacity ${
                      isLight ? 'text-pink-500' : 'text-cyan-400'
                    }`}>
                      <Users size={16} />
                      <span className={`text-[10px] font-black uppercase tracking-[0.15em] ${textSub}`}>
                        Pilotos
                      </span>
                    </div>
                    <div className="flex gap-3 flex-wrap">
                      {team.drivers?.map((d, i) => (
                        <span key={i} className={`text-sm font-bold ${textMain}`}>
                          {d}
                          {i < team.drivers.length - 1 && (
                            <span className={`mx-2 opacity-30 font-light ${
                              isLight ? 'text-gray-400' : 'text-gray-600'
                            }`}>
                              /
                            </span>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className={`p-4 rounded-full transition-all duration-500 group-hover:translate-x-2 group-hover:rotate-[-45deg] ${
                    isLight 
                      ? 'bg-white shadow-md text-pink-500 group-hover:bg-pink-500 group-hover:text-white' 
                      : 'bg-white/5 text-gray-400 group-hover:bg-cyan-500 group-hover:text-black group-hover:shadow-[0_0_15px_cyan]'
                  }`}>
                    <ArrowRight size={20} />
                  </div>
                </div>
              </div>

              {/* Pattern de fundo no hover */}
              <div 
                className="absolute inset-0 opacity-[0.03] pointer-events-none group-hover:opacity-[0.08] transition-opacity duration-700"
                style={{ 
                  backgroundImage: `radial-gradient(circle at 2px 2px, ${isLight ? '#ec4899' : '#00fff2'} 1px, transparent 0)`, 
                  backgroundSize: '24px 24px' 
                }} 
              />
            </Link>
          );
        })}
      </div>
    </PageContainer>
  );
};

export default TeamsPage;