import React from 'react';
import { MapPin, Clock, Flag } from 'lucide-react';
import { GIRLIE_COLORS, VAPORWAVE_COLORS } from '../../constants/theme';

export const NextRaceWidget = ({ theme }) => {
  const isLight = theme === 'light';
  const C = isLight ? GIRLIE_COLORS : VAPORWAVE_COLORS;
  
  const sessions = [
    { day: 'SEX', date: '05', name: 'Treino Livre 1', time: '06:30', type: 'FP' },
    { day: 'SEX', date: '05', name: 'Treino Livre 2', time: '10:00', type: 'FP' },
    { day: 'SÁB', date: '06', name: 'Treino Livre 3', time: '07:30', type: 'FP' },
    { day: 'SÁB', date: '06', name: 'Classificação', time: '11:00', type: 'Q', highlight: true },
    { day: 'DOM', date: '07', name: 'Grande Prêmio', time: '10:00', type: 'RACE', main: true },
  ];
  
  return (
    <div className={`h-full flex flex-col p-6 md:p-8 relative overflow-hidden ${isLight ? 'text-gray-800' : 'text-white'}`}>
      <div className={`absolute -right-8 -bottom-16 opacity-[0.07] pointer-events-none rotate-12 transition-transform duration-1000 group-hover:rotate-0 ${isLight ? 'text-pink-900' : 'text-cyan-400'}`}>
        <Flag size={240} />
      </div>
      
      <div className="flex justify-between items-end mb-6 z-10 relative">
        <div>
          <span className={`flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.25em] opacity-60 mb-1 ${isLight ? 'text-gray-500' : 'text-cyan-200'}`}>
            <MapPin size={11} /> Yas Marina, EAU
          </span>
          <h3 
            className="text-3xl font-black leading-none italic tracking-tighter text-transparent bg-clip-text" 
            style={{ backgroundImage: isLight ? `linear-gradient(to right, #ec4899, #a855f7)` : `linear-gradient(to right, ${C.neonCyan}, ${C.neonPink})` }}
          >
            ABU DHABI
          </h3>
        </div>
        <div className={`px-3 py-1.5 rounded-xl text-[10px] font-bold flex items-center gap-1.5 border shadow-sm ${isLight ? 'bg-white border-pink-100 text-pink-500' : 'bg-black/40 border-cyan-500/30 text-cyan-400'}`}>
          <Clock size={12} /> <span>BRT</span>
        </div>
      </div>
      
      <div className="flex-1 flex flex-col justify-between gap-2.5 z-10">
        {sessions.map((session, i) => (
          <div 
            key={i} 
            className={`flex items-center justify-between p-3 rounded-2xl transition-all duration-300 group/item hover:scale-[1.02] hover:px-4 ${session.main ? (isLight ? 'shadow-lg shadow-pink-200' : 'shadow-[0_0_15px_rgba(189,0,255,0.4)]') : ''}`} 
            style={session.main 
              ? { background: isLight ? `linear-gradient(90deg, #ec4899, #a855f7)` : `linear-gradient(90deg, ${C.neonRoxo}, ${C.neonPink})`, color: 'white' } 
              : session.highlight 
                ? { background: isLight ? 'white' : 'rgba(0, 255, 242, 0.05)', borderColor: isLight ? '#fbcfe8' : C.neonCyan, borderWidth: '1px', borderStyle: 'solid', color: isLight ? '#333' : 'white' } 
                : { background: isLight ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.02)', borderColor: isLight ? '#fce7f3' : 'transparent', borderWidth: '1px', borderStyle: 'solid', color: isLight ? '#9ca3af' : '#6b7280' }}
          >
            <div className="flex items-center gap-4">
              <div className={`flex flex-col items-center justify-center w-10 h-10 rounded-xl font-bold leading-none ${session.main ? 'bg-white/20 text-white backdrop-blur-sm' : (isLight ? 'bg-pink-50 text-pink-400' : 'bg-white/5 text-gray-500')}`}>
                <span className="text-[8px] uppercase opacity-70 tracking-wider mb-0.5">{session.day}</span>
                <span className="text-sm">{session.date}</span>
              </div>
              <div>
                <span className={`block text-xs ${session.main || session.highlight ? 'font-black uppercase tracking-wide' : 'font-bold'}`}>
                  {session.name}
                </span>
              </div>
            </div>
            <div className={`font-mono font-bold tracking-tight ${session.main ? 'text-base' : 'text-sm opacity-80'}`}>
              {session.time}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};