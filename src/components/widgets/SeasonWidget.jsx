import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Wrench, ArrowRight } from 'lucide-react';
import { GIRLIE_COLORS, VAPORWAVE_COLORS } from '../../constants/theme';

export const SeasonWidget = ({ theme }) => {
  const isLight = theme === 'light';
  const C = isLight ? GIRLIE_COLORS : VAPORWAVE_COLORS;
  
  const topDrivers = [
    { pos: 1, name: 'L. Norris', team: 'MCL', pts: 408, color: '#FF8700' },
    { pos: 2, name: 'M. Verstappen', team: 'RBR', pts: 396, color: '#1E41FF' },
    { pos: 3, name: 'O. Piastri', team: 'MCL', pts: 392, color: '#FF8700' },
    { pos: 4, name: 'G. Russell', team: 'MER', pts: 309, color: '#00D2BE' },
    { pos: 5, name: 'C. Leclerc', team: 'FER', pts: 230, color: '#FF0000' }
  ];
  
  const constructors = [
    { name: 'McLaren', pts: 800, color: '#FF8700', percent: '100%' },
    { name: 'Mercedes', pts: 459, color: '#00D2BE', percent: '57%' },
    { name: 'Red Bull', pts: 426, color: '#1E41FF', percent: '53%' }
  ];
  
  const boxClass = isLight ? 'bg-white border-pink-100 shadow-sm' : 'bg-[#0a0a10] border-white/5';
  
  return (
    <div className={`h-full flex flex-col justify-between p-6 md:p-8 relative overflow-hidden text-left ${isLight ? 'text-gray-800' : 'text-white'}`}>
      <div 
        className="absolute -right-10 -top-10 w-48 h-48 rounded-full opacity-10 blur-3xl pointer-events-none" 
        style={{ background: isLight ? C.azul : C.neonCyan }} 
      />
      
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
              Temporada 2025
            </h3>
            <p className={`text-[10px] font-bold uppercase tracking-wider mt-1 opacity-50 ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>
              Campeonato Encerrado
            </p>
          </div>
        </div>
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
          <div className="space-y-2">
            {topDrivers.map((d) => (
              <div key={d.pos} className="flex items-center justify-between text-xs group">
                <div className="flex items-center gap-3">
                  <span className={`font-mono w-5 text-[10px] text-center rounded-lg py-0.5 ${d.pos === 1 ? 'bg-yellow-100 text-yellow-600 font-bold' : 'opacity-40'}`}>
                    {d.pos}
                  </span>
                  <div 
                    className="w-2 h-2 rounded-full shadow-[0_0_5px_currentColor]" 
                    style={{ backgroundColor: d.color, color: d.color }}
                  />
                  <span className={`truncate max-w-[100px] ${d.pos === 1 ? 'font-bold' : 'font-medium'}`}>
                    {d.name}
                  </span>
                </div>
                <span className="font-mono font-medium opacity-60 text-[11px] group-hover:opacity-100 transition-opacity">
                  {d.pts}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Construtores */}
        <div className={`rounded-3xl p-4 border flex flex-col justify-center ${boxClass}`}>
          <div className="flex items-center gap-2 mb-3 px-1 opacity-50">
            <Wrench size={12} />
            <span className="text-[9px] font-black uppercase tracking-[0.2em]">Construtores</span>
          </div>
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
                    style={{ width: t.percent, backgroundColor: t.color, color: t.color }} 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className={`mt-4 pt-4 border-t border-dashed flex justify-center ${isLight ? 'border-pink-200' : 'border-white/10'}`}>
        <Link 
          to="/regulations" 
          className={`text-[10px] font-bold uppercase tracking-widest py-2 px-5 rounded-full transition-all flex items-center gap-2 hover:scale-105 ${isLight ? 'bg-gray-50 text-gray-400 hover:text-gray-600' : 'bg-white/5 text-gray-500 hover:text-white border border-white/5 hover:border-cyan-500/50'}`}
        >
          Ver Regulamento 2026 <ArrowRight size={10} />
        </Link>
      </div>
    </div>
  );
};