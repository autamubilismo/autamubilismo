import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Wrench, ArrowRight, Calendar } from 'lucide-react';
import { GIRLIE_COLORS, VAPORWAVE_COLORS } from '../../constants/theme';
import { DRIVERS_STANDINGS, CONSTRUCTORS_STANDINGS, SEASON_STATS } from '../../data/standings2026';

export const SeasonWidget = ({ theme }) => {
  const isLight = theme === 'light';
  const C = isLight ? GIRLIE_COLORS : VAPORWAVE_COLORS;
  
  // Top 5 pilotos do standings
  const topDrivers = DRIVERS_STANDINGS.slice(0, 5).map(driver => ({
    pos: driver.position,
    name: driver.driverName.split(' ').map((n, i, arr) => 
      i === 0 ? n.charAt(0) + '.' : n
    ).join(' '), // Formata como "L. Norris"
    team: driver.team.split(' ')[0].substring(0, 3).toUpperCase(), // Primeiras 3 letras
    pts: driver.points,
    color: driver.teamColor,
    wins: driver.wins,
  }));
  
  // Top 3 construtores
  const constructors = CONSTRUCTORS_STANDINGS.slice(0, 3).map((team, index) => {
    // Calcular porcentagem baseado no líder
    const maxPoints = Math.max(...CONSTRUCTORS_STANDINGS.map(t => t.points)) || 1;
    const percent = maxPoints > 0 ? `${Math.round((team.points / maxPoints) * 100)}%` : '0%';
    
    return {
      name: team.teamShortName,
      pts: team.points,
      color: team.teamColor,
      percent: team.points === 0 ? '0%' : percent,
    };
  });
  
  const boxClass = isLight ? 'bg-white border-pink-100 shadow-sm' : 'bg-[#0a0a10] border-white/5';
  
  // Status da temporada
  const seasonStatus = SEASON_STATS.racesCompleted === 0 
    ? 'Pré-Temporada' 
    : SEASON_STATS.racesCompleted >= SEASON_STATS.totalRaces 
      ? 'Campeonato Encerrado'
      : `Round ${SEASON_STATS.currentRound} de ${SEASON_STATS.totalRaces}`;
  
  return (
    <div className={`h-full flex flex-col justify-between p-6 md:p-8 relative overflow-hidden text-left ${isLight ? 'text-gray-800' : 'text-white'}`}>
      {/* Efeito de fundo decorativo */}
      <div 
        className="absolute -right-10 -top-10 w-48 h-48 rounded-full opacity-10 blur-3xl pointer-events-none" 
        style={{ background: isLight ? C.azul : C.neonCyan }} 
      />
      
      {/* Header */}
      <div className="flex justify-between items-start mb-6 z-10 relative">
        <div className="flex items-center gap-3">
          <div className={`p-3 rounded-2xl shadow-sm ${isLight ? 'bg-purple-50 text-purple-400' : 'bg-white/10 text-fuchsia-400 border border-fuchsia-500/20'}`}>
            <Trophy size={20} />
          </div>
          <div>
            <h3 
              className="text-base font-black uppercase leading-none tracking-wide text-transparent bg-clip-text" 
              style={{ backgroundImage: isLight ? `linear-gradient(to right, ${C.roxo}, ${C.rosa})` : `linear-gradient(to right, ${C.neonCyan}, ${C.neonPink})` }}
            >
              Temporada 2026
            </h3>
            <p className={`text-[10px] font-bold uppercase tracking-wider mt-1 ${
              SEASON_STATS.racesCompleted === 0 
                ? (isLight ? 'text-cyan-600' : 'text-cyan-400')
                : 'opacity-50'
            } ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>
              {seasonStatus}
            </p>
          </div>
        </div>
        {SEASON_STATS.racesCompleted === 0 && (
          <div className={`px-2 py-1 rounded-lg text-[9px] font-black uppercase tracking-wider animate-pulse ${
            isLight ? 'bg-cyan-100 text-cyan-600' : 'bg-cyan-900/30 text-cyan-400 border border-cyan-500/30'
          }`}>
            Em Breve
          </div>
        )}
      </div>
      
      <div className="flex-1 grid grid-cols-1 gap-4 z-10">
        {/* Top 5 Pilotos */}
        <div className={`rounded-3xl p-4 border flex flex-col justify-center ${boxClass}`}>
          <div className="flex items-center justify-between mb-3 px-1">
            <span className={`text-[9px] font-black uppercase tracking-[0.2em] opacity-50 ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>
              Top 5 Pilotos
            </span>
            <span className="text-[9px] font-bold opacity-30">PTS</span>
          </div>
          
          {SEASON_STATS.racesCompleted === 0 ? (
            <div className="py-6 text-center">
              <Calendar className={`mx-auto mb-2 opacity-20 ${isLight ? 'text-gray-400' : 'text-gray-600'}`} size={32} />
              <p className={`text-[10px] font-bold uppercase tracking-wider ${isLight ? 'text-gray-400' : 'text-gray-500'}`}>
                Aguardando primeira corrida
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              {topDrivers.map((d) => (
                <div key={d.pos} className="flex items-center justify-between text-xs group">
                  <div className="flex items-center gap-3">
                    <span className={`font-mono w-5 text-[10px] text-center rounded-lg py-0.5 ${
                      d.pos === 1 && d.pts > 0
                        ? 'bg-yellow-100 text-yellow-600 font-bold' 
                        : 'opacity-40'
                    }`}>
                      {d.pos}
                    </span>
                    <div 
                      className="w-2 h-2 rounded-full shadow-[0_0_5px_currentColor]" 
                      style={{ backgroundColor: d.color, color: d.color }}
                    />
                    <span className={`truncate max-w-[100px] ${d.pos === 1 && d.pts > 0 ? 'font-bold' : 'font-medium'}`}>
                      {d.name}
                    </span>
                    {d.wins > 0 && (
                      <span className={`text-[8px] ${isLight ? 'text-yellow-600' : 'text-yellow-400'}`}>
                        {d.wins === 1 ? '🏆' : `🏆×${d.wins}`}
                      </span>
                    )}
                  </div>
                  <span className="font-mono font-medium opacity-60 text-[11px] group-hover:opacity-100 transition-opacity">
                    {d.pts}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Construtores */}
        <div className={`rounded-3xl p-4 border flex flex-col justify-center ${boxClass}`}>
          <div className="flex items-center gap-2 mb-3 px-1 opacity-50">
            <Wrench size={12} />
            <span className="text-[9px] font-black uppercase tracking-[0.2em]">Construtores</span>
          </div>
          
          {SEASON_STATS.racesCompleted === 0 ? (
            <div className="py-6 text-center">
              <Wrench className={`mx-auto mb-2 opacity-20 ${isLight ? 'text-gray-400' : 'text-gray-600'}`} size={32} />
              <p className={`text-[10px] font-bold uppercase tracking-wider ${isLight ? 'text-gray-400' : 'text-gray-500'}`}>
                Aguardando primeira corrida
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {constructors.map((t, i) => (
                <div key={i}>
                  <div className="flex justify-between text-[10px] font-bold mb-1.5 px-0.5">
                    <span style={{ color: t.color }}>{t.name}</span>
                    <span className="font-mono opacity-60">{t.pts}</span>
                  </div>
                  <div className={`w-full h-2 rounded-full overflow-hidden ${isLight ? 'bg-pink-50' : 'bg-white/10'}`}>
                    <div 
                      className="h-full rounded-full transition-all duration-1000 ease-out origin-left hover:brightness-110 shadow-[0_0_5px_currentColor]" 
                      style={{ 
                        width: t.pts === 0 ? '0%' : t.percent, 
                        backgroundColor: t.color, 
                        color: t.color 
                      }} 
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* Footer com link para standings */}
      <div className={`mt-4 pt-4 border-t border-dashed flex justify-center ${isLight ? 'border-pink-200' : 'border-white/10'}`}>
        <Link 
          to="/standings" 
          className={`text-[10px] font-bold uppercase tracking-widest py-2 px-5 rounded-full transition-all flex items-center gap-2 hover:scale-105 ${
            isLight 
              ? 'bg-gray-50 text-gray-400 hover:text-gray-600' 
              : 'bg-white/5 text-gray-500 hover:text-white border border-white/5 hover:border-cyan-500/50'
          }`}
        >
          Ver Classificação <ArrowRight size={10} />
        </Link>
      </div>
    </div>
  );
};