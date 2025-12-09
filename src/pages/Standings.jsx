import React, { useState } from 'react';
import { Trophy, Medal, Flag, Users, Wrench } from 'lucide-react';
import { BackButton } from '../components/UI';

const StandingsPage = ({ theme }) => {
  const isLight = theme === 'light';
  const [tab, setTab] = useState('drivers');

  // --- DADOS REAIS 2025 (Final de Temporada) ---
  const DRIVER_STANDINGS = [
    { pos: 1, name: 'Lando Norris', team: 'McLaren', pts: 408, color: '#FF8700', flag: '🇬🇧' },
    { pos: 2, name: 'Max Verstappen', team: 'Red Bull Racing', pts: 396, color: '#1E41FF', flag: '🇳🇱' },
    { pos: 3, name: 'Oscar Piastri', team: 'McLaren', pts: 392, color: '#FF8700', flag: '🇦🇺' },
    { pos: 4, name: 'George Russell', team: 'Mercedes', pts: 309, color: '#00D2BE', flag: '🇬🇧' },
    { pos: 5, name: 'Charles Leclerc', team: 'Ferrari', pts: 230, color: '#FF0000', flag: '🇲🇨' },
    { pos: 6, name: 'Lewis Hamilton', team: 'Ferrari', pts: 152, color: '#FF0000', flag: '🇬🇧' },
    { pos: 7, name: 'Kimi Antonelli', team: 'Mercedes', pts: 150, color: '#00D2BE', flag: '🇮🇹' },
    { pos: 8, name: 'Alexander Albon', team: 'Williams', pts: 73, color: '#005AFF', flag: '🇹🇭' },
    { pos: 9, name: 'Carlos Sainz', team: 'Williams', pts: 64, color: '#005AFF', flag: '🇪🇸' },
    { pos: 10, name: 'Isack Hadjar', team: 'Racing Bulls', pts: 51, color: '#1633EF', flag: '🇫🇷' },
    { pos: 11, name: 'Nico Hülkenberg', team: 'Kick Sauber', pts: 49, color: '#52E252', flag: '🇩🇪' },
    { pos: 12, name: 'Fernando Alonso', team: 'Aston Martin', pts: 48, color: '#006F62', flag: '🇪🇸' },
    { pos: 13, name: 'Oliver Bearman', team: 'Haas', pts: 41, color: '#B6BABD', flag: '🇬🇧' },
    { pos: 14, name: 'Liam Lawson', team: 'Racing Bulls', pts: 38, color: '#1633EF', flag: '🇳🇿' },
    { pos: 15, name: 'Yuki Tsunoda', team: 'Red Bull Racing', pts: 33, color: '#1E41FF', flag: '🇯🇵' },
    { pos: 16, name: 'Esteban Ocon', team: 'Haas', pts: 32, color: '#B6BABD', flag: '🇫🇷' },
    { pos: 17, name: 'Lance Stroll', team: 'Aston Martin', pts: 32, color: '#006F62', flag: '🇨🇦' },
    { pos: 18, name: 'Pierre Gasly', team: 'Alpine', pts: 22, color: '#0090FF', flag: '🇫🇷' },
    { pos: 19, name: 'Gabriel Bortoleto', team: 'Kick Sauber', pts: 19, color: '#52E252', flag: '🇧🇷' },
    { pos: 20, name: 'Franco Colapinto', team: 'Alpine', pts: 0, color: '#0090FF', flag: '🇦🇷' },
    { pos: 21, name: 'Jack Doohan', team: 'Alpine', pts: 0, color: '#0090FF', flag: '🇦🇺' },
  ];

  const TEAM_STANDINGS = [
    { pos: 1, name: 'McLaren', pts: 800, color: '#FF8700', logo: 'https://logo.clearbit.com/mclaren.com' },
    { pos: 2, name: 'Mercedes', pts: 459, color: '#00D2BE', logo: 'https://logo.clearbit.com/mercedesamgf1.com' },
    { pos: 3, name: 'Red Bull Racing', pts: 426, color: '#1E41FF', logo: 'https://logo.clearbit.com/redbullracing.com' },
    { pos: 4, name: 'Ferrari', pts: 382, color: '#FF0000', logo: 'https://logo.clearbit.com/ferrari.com' },
    { pos: 5, name: 'Williams', pts: 137, color: '#005AFF', logo: 'https://logo.clearbit.com/williamsf1.com' },
    { pos: 6, name: 'Racing Bulls', pts: 92, color: '#1633EF', logo: 'https://logo.clearbit.com/visacashapprb.com' },
    { pos: 7, name: 'Aston Martin', pts: 80, color: '#006F62', logo: 'https://logo.clearbit.com/astonmartinf1.com' },
    { pos: 8, name: 'Haas', pts: 73, color: '#B6BABD', logo: 'https://logo.clearbit.com/haasf1team.com' },
    { pos: 9, name: 'Kick Sauber', pts: 68, color: '#52E252', logo: 'https://logo.clearbit.com/sauber-group.com' },
    { pos: 10, name: 'Alpine', pts: 22, color: '#0090FF', logo: 'https://logo.clearbit.com/alpinecars.com' },
  ];

  // --- ESTILOS ---
  const activeTab = isLight ? 'bg-white shadow text-gray-900' : 'bg-[#bd00ff] text-white shadow-[0_0_15px_#bd00ff]';
  const inactiveTab = isLight ? 'text-gray-500 hover:text-gray-700' : 'text-gray-500 hover:text-white';
  const cardBg = isLight ? 'bg-white border border-gray-100 shadow-sm' : 'bg-[#1a1a20] border border-[#333]';
  const rankBg = (pos) => {
    if (pos === 1) return 'bg-yellow-400 text-black shadow-[0_0_15px_#FACC15]';
    if (pos === 2) return 'bg-gray-300 text-black';
    if (pos === 3) return 'bg-orange-400 text-black';
    return isLight ? 'bg-gray-100 text-gray-500' : 'bg-white/5 text-gray-400';
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-12">
      <BackButton to="/" theme={theme} />
      
      <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-6">
        <div className="text-center md:text-left">
            <h2 className={`text-4xl md:text-6xl font-black uppercase tracking-tighter mb-2 ${isLight ? 'text-gray-800' : 'text-white'}`} style={{ fontFamily: "'Russo One', sans-serif" }}>
            Classificação
            </h2>
            <p className={`${isLight ? 'text-gray-500' : 'text-gray-400'}`}>Temporada 2025 • Round 23/24</p>
        </div>

        {/* TOGGLE PILOTOS / EQUIPES */}
        <div className={`flex p-1.5 rounded-full ${isLight ? 'bg-gray-100' : 'bg-[#1a1a20] border border-[#333]'}`}>
           <button onClick={() => setTab('drivers')} className={`px-6 py-2 rounded-full text-sm font-black transition-all duration-300 flex items-center gap-2 ${tab === 'drivers' ? activeTab : inactiveTab}`}>
             <Users size={16} /> Pilotos
           </button>
           <button onClick={() => setTab('teams')} className={`px-6 py-2 rounded-full text-sm font-black transition-all duration-300 flex items-center gap-2 ${tab === 'teams' ? activeTab : inactiveTab}`}>
             <Wrench size={16} /> Equipes
           </button>
        </div>
      </div>

      {tab === 'drivers' ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* TOP 3 DESTAQUE */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                {[DRIVER_STANDINGS[1], DRIVER_STANDINGS[0], DRIVER_STANDINGS[2]].map((driver, i) => (
                    <div key={driver.pos} className={`relative overflow-hidden p-6 rounded-[2rem] flex flex-col items-center text-center border-2 ${i === 1 ? 'md:-mt-6 z-10 shadow-2xl border-yellow-400' : 'mt-4 border-transparent'} ${cardBg}`}>
                        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 rounded-b-lg`} style={{ backgroundColor: driver.color }}></div>
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-black mb-3 ${rankBg(driver.pos)}`}>
                            {driver.pos}
                        </div>
                        <h3 className={`text-2xl font-black uppercase leading-none mb-1 ${isLight ? 'text-gray-800' : 'text-white'}`}>{driver.name.split(' ')[1]}</h3>
                        <p className="text-xs font-bold uppercase opacity-60 mb-4">{driver.team}</p>
                        <div className={`text-3xl font-mono font-black ${isLight ? 'text-gray-900' : 'text-white'}`}>{driver.pts} <span className="text-xs font-bold opacity-50">PTS</span></div>
                    </div>
                ))}
            </div>

            {/* TABELA DO RESTO DO GRID */}
            <div className={`lg:col-span-3 rounded-[2.5rem] overflow-hidden ${cardBg}`}>
                {DRIVER_STANDINGS.slice(3).map((driver) => (
                    <div key={driver.pos} className={`flex items-center justify-between p-5 border-b last:border-0 hover:bg-black/5 transition-colors ${isLight ? 'border-gray-100' : 'border-white/5'}`}>
                        <div className="flex items-center gap-4 md:gap-6">
                            <span className={`font-mono font-bold text-lg w-6 text-center opacity-50 ${isLight ? 'text-gray-400' : 'text-gray-500'}`}>{driver.pos}</span>
                            <div className="w-1 h-8 rounded-full" style={{ backgroundColor: driver.color }}></div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <h4 className={`text-lg font-bold ${isLight ? 'text-gray-800' : 'text-white'}`}>{driver.name}</h4>
                                    <span className="text-lg">{driver.flag}</span>
                                </div>
                                <p className="text-xs uppercase font-bold opacity-50 hidden md:block">{driver.team}</p>
                            </div>
                        </div>
                        <div className={`font-mono font-bold text-xl ${isLight ? 'text-gray-800' : 'text-white'}`}>{driver.pts}</div>
                    </div>
                ))}
            </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TEAM_STANDINGS.map((team) => (
                <div key={team.pos} className={`p-6 rounded-[2rem] relative overflow-hidden flex items-center justify-between group ${cardBg}`}>
                    <div className={`absolute left-0 top-0 bottom-0 w-2 transition-all group-hover:w-4`} style={{ backgroundColor: team.color }}></div>
                    
                    <div className="flex items-center gap-5 pl-4">
                        <span className={`text-4xl font-black opacity-20 ${isLight ? 'text-gray-300' : 'text-white/10'}`}>{team.pos}</span>
                        <div>
                            <h3 className={`text-2xl font-black uppercase leading-none ${isLight ? 'text-gray-800' : 'text-white'}`}>{team.name}</h3>
                            <div className="w-full bg-gray-200 dark:bg-white/10 h-1.5 rounded-full mt-3 w-32 md:w-48 overflow-hidden">
                                <div className="h-full rounded-full" style={{ width: `${(team.pts / 800) * 100}%`, backgroundColor: team.color }}></div>
                            </div>
                        </div>
                    </div>

                    <div className="text-right">
                        <span className={`block text-3xl font-mono font-black ${isLight ? 'text-gray-900' : 'text-white'}`}>{team.pts}</span>
                        <span className="text-[10px] font-bold uppercase opacity-50">Pontos</span>
                    </div>
                </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default StandingsPage;