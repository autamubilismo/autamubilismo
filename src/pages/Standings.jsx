import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Medal, Flag, Users, Wrench, ChevronLeft, Sparkles } from 'lucide-react';

// --- COMPONENTE INTERNO: BackButton (Estilo Girlie/Vaporwave) ---
const BackButton = ({ to = "/", theme }) => {
  const isLight = theme === 'light';
  return (
    <Link
      to={to}
      className={`group mb-8 inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold transition-all hover:pl-2 px-5 py-2.5 rounded-full ${
        isLight
          ? 'text-pink-500 hover:text-pink-600 hover:bg-pink-50 hover:shadow-sm bg-white/60 backdrop-blur-sm border border-pink-100' 
          : 'text-cyan-400 hover:text-white hover:bg-cyan-900/20 border border-cyan-500/30 bg-black/40 backdrop-blur-md shadow-[0_0_15px_rgba(0,255,242,0.15)] hover:shadow-[0_0_25px_cyan] hover:border-cyan-400'
      }`}
    >
      <ChevronLeft size={16} />
      Voltar
    </Link>
  );
};

const StandingsPage = ({ theme = 'light' }) => {
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

  // --- BACKGROUNDS ---
  const lightPattern = {
    backgroundColor: '#FFF0F5', // Lavender Blush
    backgroundImage: `
      radial-gradient(at 0% 0%, rgba(255, 182, 193, 0.4) 0px, transparent 50%),
      radial-gradient(at 100% 100%, rgba(221, 160, 221, 0.4) 0px, transparent 50%),
      url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ff69b4' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")
    `,
  };

  const darkPattern = {
    backgroundColor: '#050510',
    backgroundImage: `
      linear-gradient(rgba(0, 255, 242, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(189, 0, 255, 0.03) 1px, transparent 1px),
      radial-gradient(at 50% 0%, rgba(189, 0, 255, 0.15) 0px, transparent 70%)
    `,
    backgroundSize: '40px 40px, 40px 40px, 100% 100%'
  };

  // --- ESTILOS ---
  const activeTab = isLight 
    ? 'bg-pink-100 text-pink-600 shadow-sm ring-1 ring-pink-200' 
    : 'bg-[#bd00ff]/20 text-fuchsia-300 border border-fuchsia-500/50 shadow-[0_0_15px_rgba(189,0,255,0.4)]';
  
  const inactiveTab = isLight 
    ? 'text-gray-400 hover:text-pink-400 hover:bg-pink-50' 
    : 'text-gray-500 hover:text-cyan-400 hover:bg-white/5';

  const cardBg = isLight 
    ? 'bg-white/80 backdrop-blur-xl border border-pink-100 shadow-[0_10px_30px_rgba(255,182,193,0.3)]' 
    : 'bg-[#121217]/80 backdrop-blur-xl border border-white/10 hover:border-cyan-500/30';

  const rankBg = (pos) => {
    if (pos === 1) return 'bg-yellow-400 text-black shadow-[0_0_20px_#FACC15] ring-2 ring-yellow-200';
    if (pos === 2) return 'bg-gray-300 text-black shadow-[0_0_15px_silver] ring-2 ring-gray-100';
    if (pos === 3) return 'bg-orange-400 text-black shadow-[0_0_15px_orange] ring-2 ring-orange-200';
    return isLight ? 'bg-gray-100 text-gray-500' : 'bg-white/10 text-gray-400';
  };

  const textMain = isLight ? 'text-gray-900' : 'text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]';
  const textSub = isLight ? 'text-gray-500' : 'text-cyan-100/70';

  return (
    <div 
      className="min-h-screen p-4 md:p-8 animate-in fade-in slide-in-from-bottom-4 duration-700 font-sans"
      style={isLight ? lightPattern : darkPattern}
    >
      
      {/* Luz de Fundo Decorativa */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden mix-blend-screen">
         <div className={`absolute top-[-20%] left-[-10%] w-[800px] h-[800px] rounded-full blur-[120px] opacity-20 ${isLight ? 'bg-pink-200' : 'bg-[#bd00ff]/30 animate-pulse'}`} />
         <div className={`absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[100px] opacity-20 ${isLight ? 'bg-purple-200' : 'bg-[#00fff2]/20 animate-pulse'}`} />
         {!isLight && <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent shadow-[0_0_20px_cyan]" />}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <BackButton to="/" theme={theme} />
        
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6 relative">
          <div className="text-center md:text-left">
              <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
                 <div className={`p-2 rounded-full ${isLight ? 'bg-pink-100 text-pink-500' : 'bg-fuchsia-900/30 text-fuchsia-400'}`}>
                    <Trophy size={28} />
                 </div>
                 <h2 className={`text-4xl md:text-6xl font-black uppercase tracking-tighter ${isLight ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 drop-shadow-sm' : 'text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]'}`} style={{ fontFamily: isLight ? 'sans-serif' : "'Russo One', sans-serif" }}>
                   Classificação
                 </h2>
              </div>
              <p className={`ml-1 text-lg font-medium ${textSub}`}>Temporada 2025 • Round 23/24</p>
          </div>

          {/* TOGGLE PILOTOS / EQUIPES */}
          <div className={`flex p-1.5 rounded-full backdrop-blur-md ${isLight ? 'bg-white/60 shadow-md border border-pink-100' : 'bg-[#09090c]/80 border border-white/10'}`}>
             <button onClick={() => setTab('drivers')} className={`px-6 py-2 rounded-full text-sm font-black transition-all duration-300 flex items-center gap-2 uppercase tracking-wider ${tab === 'drivers' ? activeTab : inactiveTab}`}>
               <Users size={16} /> Pilotos
             </button>
             <button onClick={() => setTab('teams')} className={`px-6 py-2 rounded-full text-sm font-black transition-all duration-300 flex items-center gap-2 uppercase tracking-wider ${tab === 'teams' ? activeTab : inactiveTab}`}>
               <Wrench size={16} /> Equipes
             </button>
          </div>
        </div>

        {tab === 'drivers' ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
             {/* TOP 3 DESTAQUE */}
             <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6 mb-4 items-end">
                 {[DRIVER_STANDINGS[1], DRIVER_STANDINGS[0], DRIVER_STANDINGS[2]].map((driver, i) => (
                     <div key={driver.pos} className={`relative overflow-hidden p-8 rounded-[2.5rem] flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 ${i === 1 ? 'md:-mt-12 z-10 shadow-2xl border-2 border-yellow-400 order-first md:order-none' : 'mt-4 border border-transparent'} ${cardBg}`}>
                         {/* Fita colorida da equipe */}
                         <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1.5 rounded-b-xl shadow-[0_0_15px_currentColor]`} style={{ backgroundColor: driver.color, color: driver.color }}></div>
                         
                         {/* Coroa para o 1º lugar */}
                         {driver.pos === 1 && (
                            <Sparkles className={`absolute top-6 right-6 w-8 h-8 animate-pulse ${isLight ? 'text-yellow-400' : 'text-yellow-300'}`} />
                         )}

                         <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-black mb-4 transition-transform hover:scale-110 ${rankBg(driver.pos)}`}>
                             {driver.pos}
                         </div>
                         <h3 className={`text-3xl font-black uppercase leading-none mb-1 tracking-tight ${textMain}`}>{driver.name.split(' ')[1]}</h3>
                         <div className="flex items-center gap-2 mb-6">
                            <span className="text-xl">{driver.flag}</span>
                            <p className={`text-xs font-bold uppercase tracking-widest opacity-60 ${textSub}`}>{driver.team}</p>
                         </div>
                         <div className={`text-4xl font-mono font-black tracking-tighter ${isLight ? 'text-pink-600' : 'text-cyan-400 drop-shadow-[0_0_5px_cyan]'}`}>
                            {driver.pts} <span className={`text-xs font-bold uppercase opacity-50 tracking-widest ${textMain}`}>PTS</span>
                         </div>
                     </div>
                 ))}
             </div>

             {/* TABELA DO RESTO DO GRID */}
             <div className={`lg:col-span-3 rounded-[2.5rem] overflow-hidden ${cardBg}`}>
                 <div className={`px-6 py-4 border-b ${isLight ? 'border-pink-100 bg-pink-50/30' : 'border-white/5 bg-white/5'}`}>
                    <h4 className={`text-sm font-black uppercase tracking-[0.2em] ${isLight ? 'text-pink-400' : 'text-fuchsia-400'}`}>Resto do Grid</h4>
                 </div>
                 {DRIVER_STANDINGS.slice(3).map((driver) => (
                     <div key={driver.pos} className={`group flex items-center justify-between p-5 border-b last:border-0 hover:bg-black/5 transition-all duration-300 ${isLight ? 'border-gray-100 hover:bg-pink-50/40' : 'border-white/5 hover:bg-white/5'}`}>
                         <div className="flex items-center gap-4 md:gap-6">
                             <span className={`font-mono font-bold text-lg w-8 text-center opacity-40 ${textMain}`}>{driver.pos}</span>
                             <div className="w-1.5 h-10 rounded-full shadow-[0_0_8px_currentColor]" style={{ backgroundColor: driver.color, color: driver.color }}></div>
                             <div>
                                 <div className="flex items-center gap-3">
                                     <h4 className={`text-lg font-bold tracking-tight ${textMain}`}>{driver.name}</h4>
                                     <span className="text-lg opacity-80">{driver.flag}</span>
                                 </div>
                                 <p className={`text-[10px] uppercase font-bold tracking-widest opacity-50 hidden md:block ${textSub}`}>{driver.team}</p>
                             </div>
                         </div>
                         <div className={`font-mono font-bold text-xl ${isLight ? 'text-gray-800' : 'text-cyan-400'}`}>{driver.pts}</div>
                     </div>
                 ))}
             </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
             {TEAM_STANDINGS.map((team) => (
                 <div key={team.pos} className={`p-8 rounded-[2.5rem] relative overflow-hidden flex items-center justify-between group transition-all duration-500 hover:-translate-y-1 ${cardBg}`}>
                     {/* Borda lateral colorida */}
                     <div className={`absolute left-0 top-0 bottom-0 w-3 transition-all duration-300 group-hover:w-5 shadow-[0_0_20px_currentColor]`} style={{ backgroundColor: team.color, color: team.color }}></div>
                     
                     {/* Fundo sutil com a cor da equipe */}
                     <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" style={{ backgroundColor: team.color }}></div>

                     <div className="flex items-center gap-6 pl-6 relative z-10">
                         <span className={`text-5xl font-black tracking-tighter opacity-10 group-hover:opacity-20 transition-opacity ${textMain}`}>{team.pos}</span>
                         <div>
                             <h3 className={`text-2xl font-black uppercase leading-none tracking-tight mb-3 ${textMain}`}>{team.name}</h3>
                             <div className={`w-full h-2 rounded-full mt-2 w-32 md:w-48 overflow-hidden ${isLight ? 'bg-gray-100' : 'bg-white/10'}`}>
                                 <div className="h-full rounded-full shadow-[0_0_10px_currentColor]" style={{ width: `${(team.pts / 800) * 100}%`, backgroundColor: team.color, color: team.color }}></div>
                             </div>
                         </div>
                     </div>

                     <div className="text-right relative z-10">
                         <span className={`block text-3xl font-mono font-black tracking-tighter ${isLight ? 'text-gray-900' : 'text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]'}`}>{team.pts}</span>
                         <span className={`text-[10px] font-bold uppercase tracking-[0.2em] opacity-50 ${textSub}`}>Pontos</span>
                     </div>
                 </div>
             ))}
          </div>
        )}
      </div>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Russo+One&display=swap');`}</style>
    </div>
  );
};

export default StandingsPage;