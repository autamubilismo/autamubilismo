'use client';
import React, { useMemo } from 'react';
import { MapPin, Clock, Flag, Zap } from 'lucide-react';
import { GIRLIE_COLORS, VAPORWAVE_COLORS } from '../../constants/theme';
import { F1_2026_CALENDAR } from '../../data/f1Calendar2026';

export const NextRaceWidget = ({ theme }) => {
  const isLight = theme === 'light';
  const C = isLight ? GIRLIE_COLORS : VAPORWAVE_COLORS;

  const nextRace = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const upcoming = F1_2026_CALENDAR.find(race => {
      const raceDate = new Date(race.endDate);
      return raceDate >= today;
    });

    return upcoming || F1_2026_CALENDAR[F1_2026_CALENDAR.length - 1];
  }, []);
  const getCountryFlag = (country) => {
    const flags = {
      'Austrália': '🇦🇺',
      'China': '🇨🇳',
      'Japão': '🇯🇵',
      'Bahrein': '🇧🇭',
      'Arábia Saudita': '🇸🇦',
      'Estados Unidos': '🇺🇸',
      'Canadá': '🇨🇦',
      'Mônaco': '🇲🇨',
      'Espanha': '🇪🇸',
      'Áustria': '🇦🇹',
      'Reino Unido': '🇬🇧',
      'Bélgica': '🇧🇪',
      'Hungria': '🇭🇺',
      'Países Baixos': '🇳🇱',
      'Itália': '🇮🇹',
      'Azerbaijão': '🇦🇿',
      'Singapura': '🇸🇬',
      'México': '🇲🇽',
      'Brasil': '🇧🇷',
      'Qatar': '🇶🇦',
      'Emirados Árabes Unidos': '🇦🇪',
    };
    return flags[country] || '🏁';
  };

  const getCircuitShortName = (location, country) => {
    if (location === 'Singapore') return 'Marina Bay';
    if (location === 'Monte Carlo') return 'Monaco';
    if (location === 'Sakhir') return 'Bahrain';
    if (location === 'Spielberg') return 'Red Bull Ring';
    if (location === 'Silverstone') return 'Silverstone';
    if (location === 'Spa-Francorchamps') return 'Spa';
    if (location === 'Zandvoort') return 'Zandvoort';
    if (location === 'Monza') return 'Monza';
    if (location === 'Shanghai') return 'Shanghai';
    if (location === 'Suzuka') return 'Suzuka';
    if (location === 'Miami') return 'Miami';
    if (location === 'Las Vegas') return 'Las Vegas';
    if (location === 'Austin') return 'COTA';
    if (location === 'Mexico City') return 'Mexico City';
    if (location === 'São Paulo') return 'Interlagos';
    if (location === 'Lusail') return 'Lusail';
    if (location === 'Abu Dhabi') return 'Yas Marina';
    if (location === 'Melbourne') return 'Albert Park';
    if (location === 'Montreal') return 'Gilles Villeneuve';
    if (location === 'Barcelona') return 'Catalunya';
    if (location === 'Madrid') return 'Madrid';
    if (location === 'Baku') return 'Baku';
    if (location === 'Jeddah') return 'Jeddah';
    
    return location;
  };

  if (!nextRace) {
    return (
      <div className={`h-full flex items-center justify-center p-6 ${isLight ? 'text-gray-400' : 'text-gray-600'}`}>
        <p className="text-sm font-bold uppercase tracking-wider">Sem corridas programadas</p>
      </div>
    );
  }

  const sessions = nextRace.sessions || [];
  const circuitName = getCircuitShortName(nextRace.location, nextRace.country);
  const countryFlag = getCountryFlag(nextRace.country);

  return (
    <div className={`h-full flex flex-col p-4 md:p-5 relative overflow-y-auto ${isLight ? 'text-gray-800' : 'text-white'}`}>
      <div className={`absolute -right-8 -bottom-16 opacity-[0.07] pointer-events-none rotate-12 transition-transform duration-1000 group-hover:rotate-0 ${isLight ? 'text-pink-900' : 'text-cyan-400'}`}>
        <Flag size={240} />
      </div>
      <div className="flex justify-between items-start mb-2.5 z-10 relative">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className={`flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.25em] opacity-60 ${isLight ? 'text-gray-500' : 'text-cyan-200'}`}>
              <MapPin size={11} /> {circuitName}, {nextRace.country}
            </span>
            {nextRace.isSprint && (
              <span className={`px-2 py-0.5 rounded-md text-[9px] font-black uppercase flex items-center gap-1 ${
                isLight 
                  ? 'bg-yellow-300 text-orange-900' 
                  : 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black'
              }`}>
                <Zap size={9} className="fill-current" /> SPRINT
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">{countryFlag}</span>
            <h3 
              className="text-3xl font-black leading-none italic tracking-tighter text-transparent bg-clip-text" 
              style={{ backgroundImage: isLight ? `linear-gradient(to right, #ec4899, #a855f7)` : `linear-gradient(to right, ${C.neonCyan}, ${C.neonPink})` }}
            >
              {nextRace.title.replace('GP d', '').replace('GP de ', '').replace('GP do', '').replace('GP da', '').toUpperCase()}
            </h3>
          </div>
          <div className={`text-[10px] font-bold uppercase tracking-wider mt-1 ${isLight ? 'text-gray-400' : 'text-gray-500'}`}>
            Round {nextRace.round} • 2026
          </div>
        </div>
        <div className={`px-3 py-1.5 rounded-xl text-[10px] font-bold flex items-center gap-1.5 border shadow-sm ${isLight ? 'bg-white border-pink-100 text-pink-500' : 'bg-black/40 border-cyan-500/30 text-cyan-400'}`}>
          <Clock size={12} /> <span>{nextRace.timezoneLabel?.split(' ')[0] || 'BRT'}</span>
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-1 z-10">
        {sessions.length > 0 ? sessions.map((session, i) => {
          const isRace = session.name.toLowerCase().includes('corrida');
          const isQuali = session.name.toLowerCase().includes('classificação');
          const isSprint = session.name.toLowerCase().includes('sprint') && !session.name.toLowerCase().includes('quali');
          const isMain = isRace;
          const isHighlight = isQuali || isSprint;

          return (
            <div 
              key={i} 
              className={`flex items-center justify-between px-3 py-1.5 rounded-2xl transition-all duration-300 group/item hover:scale-[1.02] ${isMain ? (isLight ? 'shadow-lg shadow-pink-200' : 'shadow-[0_0_15px_rgba(189,0,255,0.4)]') : ''}`} 
              style={isMain 
                ? { background: isLight ? `linear-gradient(90deg, #ec4899, #a855f7)` : `linear-gradient(90deg, ${C.neonRoxo}, ${C.neonPink})`, color: 'white' } 
                : isHighlight 
                  ? { background: isLight ? 'white' : 'rgba(0, 255, 242, 0.05)', borderColor: isLight ? '#fbcfe8' : C.neonCyan, borderWidth: '1px', borderStyle: 'solid', color: isLight ? '#333' : 'white' } 
                  : { background: isLight ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.02)', borderColor: isLight ? '#fce7f3' : 'transparent', borderWidth: '1px', borderStyle: 'solid', color: isLight ? '#9ca3af' : '#6b7280' }}
            >
              <div className="flex items-center gap-4">
                <div className={`flex flex-col items-center justify-center w-10 h-10 rounded-xl font-bold leading-none ${isMain ? 'bg-white/20 text-white backdrop-blur-sm' : (isLight ? 'bg-pink-50 text-pink-400' : 'bg-white/5 text-gray-500')}`}>
                  <span className="text-[8px] uppercase opacity-70 tracking-wider mb-0.5">{session.day}</span>
                  <span className="text-sm">{session.date}</span>
                </div>
                <div>
                  <span className={`block text-xs ${isMain || isHighlight ? 'font-black uppercase tracking-wide' : 'font-bold'}`}>
                    {session.name}
                  </span>
                </div>
              </div>
              {session.time && (
                <div className={`font-mono font-bold tracking-tight ${isMain ? 'text-base' : 'text-sm opacity-80'}`}>
                  {session.time}
                </div>
              )}
            </div>
          );
        }) : (
          <div className={`text-center py-8 ${isLight ? 'text-gray-400' : 'text-gray-600'}`}>
            <p className="text-xs font-bold uppercase tracking-wider">Horários a confirmar</p>
          </div>
        )}
      </div>
    </div>
  );
};
