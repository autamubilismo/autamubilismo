import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Users, ArrowRight, Zap } from 'lucide-react';
import { BackButton } from '../components/UI';
import { TEAMS_DATA } from '../data';

const TeamsPage = ({ theme }) => {
  const isLight = theme === 'light';

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-12">
      <BackButton to="/" theme={theme} />
      
      <div className="mb-10 px-2 text-center md:text-left">
        <h2 className={`text-4xl md:text-6xl font-black uppercase tracking-tighter mb-2 ${isLight ? 'text-gray-800' : 'text-white'}`} style={{ fontFamily: "'Russo One', sans-serif" }}>
          Construtores
        </h2>
        <p className={`${isLight ? 'text-gray-500' : 'text-gray-400'}`}>As garagens que movem o campeonato.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {TEAMS_DATA.map((team, idx) => {
          // LÓGICA DA IMAGEM DO LOGO (Atualizada)
          const teamFolder = team.id || team.name.toLowerCase().replace(/\s+/g, '-');
          // Caminho novo: /img/equipes/mercedes/logo-mercedes.png
          const logoImage = `/img/equipes/${teamFolder}/logo-${teamFolder}.png`;

          return (
            <Link 
              key={idx} 
              to={`/teams/${teamFolder}`} 
              className={`group relative overflow-hidden rounded-[2.5rem] p-0 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl flex flex-col
                ${isLight 
                  ? 'bg-white shadow-lg border-2 border-transparent hover:border-gray-200' 
                  : 'bg-[#1a1a20] border border-[#333] hover:border-[#ff0055]/30 shadow-[0_0_20px_rgba(0,0,0,0.3)]'
                }`}
            >
              {/* Barra Superior de Cor da Equipe */}
              <div 
                  className="h-2 w-full flex-shrink-0 transition-all duration-500 group-hover:h-3" 
                  style={{ backgroundColor: team.color }}
              />

              <div className="flex-1 p-6 md:p-8 flex flex-col h-full relative z-10">
                  
                  {/* Header: Nome e Info */}
                  <div className="flex items-start justify-between mb-2">
                      <div>
                          <h3 className={`text-2xl md:text-4xl font-black uppercase leading-none mb-1 ${isLight ? 'text-gray-800' : 'text-white'}`} style={{ fontFamily: "'Russo One', sans-serif" }}>
                              {team.name}
                          </h3>
                          <p className={`text-[10px] font-bold uppercase tracking-widest opacity-60 ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>
                              {team.fullName || 'Formula 1 Team'}
                          </p>
                      </div>
                  </div>

                  {/* LOGO DA EQUIPE EM DESTAQUE (Centralizado e Grande) */}
                  <div className="relative h-40 w-full my-6 flex items-center justify-center p-4">
                      <img 
                          src={logoImage}
                          alt={`Logo ${team.name}`}
                          className={`max-w-full max-h-full object-contain drop-shadow-xl transition-transform duration-700 group-hover:scale-110 ${!isLight ? 'brightness-125' : ''}`}
                          onError={(e) => {
                             // Fallback: Tenta buscar do Clearbit se a imagem local falhar
                             e.target.src = `https://logo.clearbit.com/${team.domain}`;
                             e.target.style.filter = isLight ? 'none' : 'grayscale(1) brightness(2)'; // Ajuste visual para logos web
                          }}
                      />
                  </div>

                  {/* Footer Info */}
                  <div className="mt-auto pt-6 border-t border-gray-100/10 flex items-center justify-between">
                      <div className="flex flex-col gap-2">
                          <div className="flex items-center gap-2 opacity-80">
                             <Users size={14} className={isLight ? 'text-gray-400' : 'text-[#ff0055]'} />
                             <span className={`text-[10px] font-bold uppercase tracking-widest ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>Pilotos</span>
                          </div>
                          <div className="flex gap-2">
                             {team.drivers && team.drivers.map((d, i) => (
                               <span key={i} className={`text-sm font-bold ${isLight ? 'text-gray-800' : 'text-white'}`}>
                                 {d}
                                 {i < team.drivers.length - 1 && <span className="mx-1 opacity-30">/</span>}
                               </span>
                             ))}
                          </div>
                      </div>
                      
                      <div className={`p-3 rounded-full transition-transform duration-300 group-hover:translate-x-2 ${isLight ? 'bg-gray-50 text-gray-400 group-hover:text-gray-800' : 'bg-white/5 text-gray-500 group-hover:text-[#ff0055]'}`}>
                          <ArrowRight size={20} />
                      </div>
                  </div>
              </div>

              {/* Efeito de brilho no hover (apenas dark mode) */}
              {!isLight && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shine pointer-events-none" />
              )}
            </Link>
          );
        })}
      </div>
      
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');`}</style>
    </div>
  );
};

export default TeamsPage;