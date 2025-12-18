import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  Calendar, Trophy, MapPin, Scale, ArrowRight, Users, Zap, Wrench, Globe, 
  Flag, ChevronLeft, Search, RotateCcw, Clock, Sparkles
} from 'lucide-react';

// --- COMPONENTES VISUAIS (Estilo Vaporwave/Girlie) ---

const BackButton = ({ to, theme }) => {
  const isLight = theme === 'light';
  return (
    <Link
      to={to}
      className={`group mb-8 inline-flex items-center gap-2 text-sm font-bold transition-all hover:pl-2 px-4 py-2 rounded-full uppercase tracking-widest ${
        isLight
          ? 'bg-white/50 text-pink-500 border border-pink-200 hover:bg-pink-100 hover:text-pink-600 shadow-sm' 
          : 'bg-black/40 text-cyan-400 border border-cyan-500/50 hover:bg-cyan-900/20 hover:text-white hover:shadow-[0_0_15px_cyan]'
      }`}
    >
      <ChevronLeft size={16} />
      Voltar
    </Link>
  );
};

const BentoCard = ({
  children,
  className,
  theme,
  onClick,
  to,
  noPadding = false
}) => {
  const isLight = theme === 'light';

  // Estilo "Glassmorphism" Aprimorado
  const baseClasses = `relative overflow-hidden transition-all duration-500 group h-full flex flex-col justify-between ${className} ${
    isLight
      ? 'bg-white/60 backdrop-blur-md rounded-[2.5rem] shadow-[0_10px_30px_rgba(255,182,193,0.4)] border border-pink-100 hover:border-pink-300 hover:shadow-[0_20px_40px_rgba(255,105,180,0.3)] hover:-translate-y-1'
      : 'bg-[#090919]/80 backdrop-blur-xl rounded-[2rem] border border-fuchsia-500/20 hover:border-cyan-400/80 hover:shadow-[0_0_30px_rgba(0,255,242,0.2)] hover:-translate-y-1 ring-1 ring-white/5'
  } active:scale-[0.98]`;

  const GridPattern = () => (
    <div
      className="absolute inset-0 opacity-[0.1] pointer-events-none z-0 transition-opacity duration-700 group-hover:opacity-[0.2]"
      style={{
        backgroundImage: isLight 
          ? 'radial-gradient(circle at 2px 2px, #ec4899 1px, transparent 0)'
          : 'linear-gradient(to right, #4f4f4f2e 1px, transparent 1px), linear-gradient(to bottom, #4f4f4f2e 1px, transparent 1px)',
        backgroundSize: isLight ? '24px 24px' : '40px 40px',
        maskImage: isLight ? 'none' : 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)'
      }}
    />
  );

  const CardContent = () => (
    <>
      {/* Brilho Superior */}
      <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${isLight ? 'from-pink-200/30' : 'from-cyan-500/10'} to-transparent opacity-50 pointer-events-none`} />
      <GridPattern />
      <div className={`relative z-10 w-full h-full flex flex-col ${noPadding ? '' : 'p-6 md:p-8'}`}>
        {children}
      </div>
    </>
  );

  if (to)
    return (
      <Link to={to} className={baseClasses}>
        <CardContent />
      </Link>
    );

  return (
    <div onClick={onClick} className={`${baseClasses} ${onClick ? 'cursor-pointer' : ''}`}>
      <CardContent />
    </div>
  );
};

// --- PÁGINA PRINCIPAL ---

const SeasonPage = ({ theme }) => {
  const isLight = theme === 'light';
  const [year, setYear] = useState('2026');
  const [standingsTab, setStandingsTab] = useState('drivers');
  const navigate = useNavigate();

  // --- DADOS 2026 (Preservados) ---
  const drivers2026 = [
    { id: 1, name: "Max Verstappen", team: "Red Bull Ford", points: 0, wins: 0 },
    { id: 2, name: "Lewis Hamilton", team: "Scuderia Ferrari", points: 0, wins: 0 },
    { id: 3, name: "Lando Norris", team: "McLaren", points: 0, wins: 0 },
    { id: 4, name: "Charles Leclerc", team: "Scuderia Ferrari", points: 0, wins: 0 },
    { id: 5, name: "Oscar Piastri", team: "McLaren", points: 0, wins: 0 },
    { id: 6, name: "George Russell", team: "Mercedes-AMG", points: 0, wins: 0 },
    { id: 7, name: "Kimi Antonelli", team: "Mercedes-AMG", points: 0, wins: 0 },
    { id: 8, name: "Fernando Alonso", team: "Aston Martin", points: 0, wins: 0 },
    { id: 9, name: "Gabriel Bortoleto", team: "Audi F1 Team", points: 0, wins: 0 },
    { id: 10, name: "Alex Albon", team: "Williams", points: 0, wins: 0 },
  ];

  const constructors2026 = [
    { id: 1, name: "Scuderia Ferrari", points: 0, wins: 0, color: "#FF2800" },
    { id: 2, name: "McLaren", points: 0, wins: 0, color: "#FF8000" },
    { id: 3, name: "Red Bull Ford", points: 0, wins: 0, color: "#1E41FF" },
    { id: 4, name: "Mercedes-AMG", points: 0, wins: 0, color: "#00D2BE" },
    { id: 5, name: "Aston Martin Honda", points: 0, wins: 0, color: "#006F62" },
    { id: 6, name: "Audi F1 Team", points: 0, wins: 0, color: isLight ? "#333333" : "#999999" },
    { id: 7, name: "Cadillac/GM", points: 0, wins: 0, color: "#E6BE56" },
  ];

  const TEAMS_2026 = [
    { name: 'Cadillac/GM', engine: 'GM', status: 'Estreia', color: '#E6BE56' },
    { name: 'Audi F1 Team', engine: 'Audi', status: 'Nova Era', color: isLight ? '#000000' : '#CCCCCC' },
    { name: 'Red Bull Ford', engine: 'Ford', status: 'Parceria', color: '#1E41FF' },
    { name: 'Aston Martin', engine: 'Honda', status: 'Exclusivo', color: '#006F62' },
  ];

  // Estilos dos Botões de Aba (Pills)
  const activeTabClass = isLight 
    ? 'bg-pink-100 text-pink-600 shadow-sm ring-1 ring-pink-200' 
    : 'bg-cyan-500/20 text-cyan-300 shadow-[0_0_15px_rgba(0,255,242,0.4)] border border-cyan-500/50';
  
  const inactiveTabClass = isLight 
    ? 'text-gray-400 hover:text-pink-400 hover:bg-pink-50' 
    : 'text-gray-500 hover:text-fuchsia-400 hover:bg-white/5';

  return (
    <div className={`min-h-screen p-4 md:p-8 animate-in fade-in slide-in-from-bottom-4 duration-700 transition-colors ${isLight ? 'bg-[#FFF0F5] selection:bg-pink-200' : 'bg-[#050510] selection:bg-cyan-500 selection:text-black'}`}>
      
      {/* Background Decorativo Global */}
      {isLight ? (
         <div className="fixed inset-0 z-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-200/30 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-200/30 rounded-full blur-[100px]" />
         </div>
      ) : (
         <div className="fixed inset-0 z-0 pointer-events-none">
            {/* Vaporwave Sun */}
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-yellow-400 via-pink-500 to-purple-600 rounded-full blur-[120px] opacity-20" />
            {/* Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
            {/* Horizon Line */}
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent shadow-[0_0_20px_cyan]" />
         </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto">
        <BackButton to="/" theme={theme} />

        {/* --- CABEÇALHO --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
              <div className="flex items-center gap-2 mb-2">
                 <Trophy size={24} className={`${isLight ? 'text-pink-400' : 'text-fuchsia-400 drop-shadow-[0_0_5px_rgba(232,121,249,0.8)]'} animate-pulse`} />
                 <span className={`text-[10px] font-black uppercase tracking-[0.4em] ${isLight ? 'text-pink-400' : 'text-cyan-400'}`}>Official F1 Standings</span>
              </div>
              <h2 className={`text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] ${
                isLight 
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 drop-shadow-sm' 
                  : 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-fuchsia-500 drop-shadow-[0_0_10px_rgba(0,255,242,0.3)]'
              }`}>
                Temporada
              </h2>
              <div className="flex items-center gap-3 mt-4">
                <span className={`text-xl md:text-2xl font-bold tracking-widest uppercase flex items-center gap-2 ${isLight ? 'text-gray-400' : 'text-fuchsia-500 shadow-fuchsia-500/50'}`}>
                  {year === '2026' ? 'Nova Era Híbrida' : 'O Caminho para a Glória'}
                  {year === '2026' && <Sparkles size={20} className={`animate-spin-slow ${isLight ? 'text-yellow-400' : 'text-yellow-300'}`} />}
                </span>
              </div>
          </div>

          {/* Seletor de Ano */}
          <div className={`flex p-1.5 rounded-full backdrop-blur-md ${isLight ? 'bg-white/60 border border-pink-100 shadow-sm' : 'bg-black/40 border border-white/10'}`}>
             <button onClick={() => setYear('2025')} className={`px-8 py-3 rounded-full text-xs font-black tracking-widest transition-all duration-300 ${year === '2025' ? activeTabClass : inactiveTabClass}`}>2025</button>
             <button onClick={() => setYear('2026')} className={`px-8 py-3 rounded-full text-xs font-black tracking-widest transition-all duration-300 ${year === '2026' ? activeTabClass : inactiveTabClass}`}>2026</button>
          </div>
        </div>
        
        {year === '2026' ? (
          // --- LAYOUT 2026 ---
          <div className="grid grid-cols-1 gap-8">
              
              {/* 1. LINHA DE BOTÕES (Calendário | Regulamento | Grid) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  
                  {/* BOTÃO CALENDÁRIO */}
                  <BentoCard theme={theme} to="/calendar-2026">
                     <div className="flex flex-col h-full justify-between">
                        <div className="flex justify-between items-start">
                           <div className={`p-4 rounded-2xl shadow-md transition-transform group-hover:scale-110 ${isLight ? 'bg-pink-50 text-pink-500' : 'bg-cyan-900/30 text-cyan-400 border border-cyan-500/30'}`}>
                              <Globe size={32} strokeWidth={1.5} />
                           </div>
                           <ArrowRight size={24} className={`opacity-40 group-hover:opacity-100 transition-all group-hover:translate-x-2 ${isLight ? 'text-pink-400' : 'text-cyan-400'}`} />
                        </div>
                        <div className="mt-6">
                           <h3 className={`text-3xl font-black uppercase italic leading-none mb-2 ${isLight ? 'text-gray-800' : 'text-white'}`}>Calendário 2026</h3>
                           <div className="flex items-center gap-2 opacity-80">
                              <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${isLight ? 'bg-pink-100 text-pink-600' : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'}`}>24 Corridas</span>
                           </div>
                        </div>
                     </div>
                  </BentoCard>

                  {/* BOTÃO REGULAMENTO */}
                  <BentoCard theme={theme} to="/regulations">
                     <div className="flex flex-col h-full justify-between">
                        <div className="flex justify-between items-start">
                           <div className={`p-4 rounded-2xl shadow-md transition-transform group-hover:scale-110 ${isLight ? 'bg-purple-50 text-purple-500' : 'bg-fuchsia-900/30 text-fuchsia-400 border border-fuchsia-500/30'}`}>
                              <Scale size={32} strokeWidth={1.5} />
                           </div>
                           <ArrowRight size={24} className={`opacity-40 group-hover:opacity-100 transition-all group-hover:translate-x-2 ${isLight ? 'text-purple-400' : 'text-fuchsia-400'}`} />
                        </div>
                        <div className="mt-6">
                           <h3 className={`text-3xl font-black uppercase italic leading-none mb-2 ${isLight ? 'text-gray-800' : 'text-white'}`}>Regulamento</h3>
                           <div className="flex items-center gap-2 opacity-80">
                              <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${isLight ? 'bg-purple-100 text-purple-600' : 'bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/30'}`}>Técnico</span>
                           </div>
                        </div>
                     </div>
                  </BentoCard>

                  {/* CARD GRID (Mostrando as equipes) */}
                  <BentoCard theme={theme} className="relative">
                     <div className="flex flex-col h-full justify-between relative z-20">
                        <div className="flex justify-between items-start mb-6">
                           <div className={`p-4 rounded-2xl shadow-md transition-transform group-hover:scale-110 ${isLight ? 'bg-blue-50 text-blue-500' : 'bg-blue-900/30 text-blue-400 border border-blue-500/30'}`}>
                              <Users size={32} strokeWidth={1.5} />
                           </div>
                           <div className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${isLight ? 'bg-white/80 border-gray-200 text-gray-500' : 'bg-transparent border-white/20 text-gray-400'}`}>
                             Confirmados
                           </div>
                        </div>
                        
                        <div className="flex flex-col gap-4">
                           <h3 className={`text-2xl font-black uppercase italic leading-none ${isLight ? 'text-gray-800' : 'text-white'}`}>O Grid 2026</h3>
                           <div className="grid grid-cols-2 gap-3">
                             {TEAMS_2026.map((team, idx) => (
                               <div key={idx} className="flex items-center gap-2.5 group/item cursor-default">
                                  <div className="w-2 h-2 rounded-full shadow-[0_0_8px_currentColor]" style={{ backgroundColor: team.color, color: team.color }}></div>
                                  <span className={`text-[10px] font-bold uppercase truncate tracking-wide transition-colors ${isLight ? 'text-gray-500 group-hover/item:text-gray-900' : 'text-gray-400 group-hover/item:text-cyan-300'}`}>{team.name}</span>
                               </div>
                             ))}
                           </div>
                        </div>
                     </div>
                  </BentoCard>

              </div>

              {/* 2. CLASSIFICAÇÃO (EMBAIXO E EM DESTAQUE) */}
              <BentoCard theme={theme} className="!p-0" noPadding>
                <div className={`p-8 pb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-dashed ${isLight ? 'border-pink-200/50' : 'border-white/10'}`}>
                  <div className="flex items-center gap-5">
                    <div className={`w-16 h-16 rounded-3xl flex items-center justify-center shadow-xl ${
                      isLight 
                        ? 'bg-gradient-to-br from-yellow-50 to-white border border-yellow-200 text-yellow-500' 
                        : 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/30 shadow-[0_0_20px_rgba(234,179,8,0.2)]'
                    }`}>
                      <Trophy size={32} strokeWidth={2} className="drop-shadow-sm" />
                    </div>
                    <div>
                      <h3 className={`text-3xl font-black uppercase italic tracking-tighter ${isLight ? 'text-gray-900' : 'text-white'}`}>Classificação</h3>
                      <p className={`text-xs font-bold uppercase tracking-[0.2em] mt-1 ${isLight ? 'text-gray-400' : 'text-cyan-600'}`}>Pontuação Oficial • 2026</p>
                    </div>
                  </div>

                  <div className={`flex p-1.5 rounded-2xl ${isLight ? 'bg-gray-50/80 backdrop-blur' : 'bg-white/5 border border-white/5'}`}>
                      <button onClick={() => setStandingsTab('drivers')} className={`px-8 py-3 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all ${standingsTab === 'drivers' ? activeTabClass : inactiveTabClass}`}>Pilotos</button>
                      <button onClick={() => setStandingsTab('constructors')} className={`px-8 py-3 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all ${standingsTab === 'constructors' ? activeTabClass : inactiveTabClass}`}>Equipes</button>
                  </div>
                </div>

                <div className="overflow-x-auto p-4 md:p-6">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className={`text-[10px] uppercase tracking-[0.2em] ${isLight ? 'text-gray-400 border-b border-gray-100' : 'text-gray-500 border-b border-white/5'}`}>
                        <th className="p-4 pl-6 w-24 text-center font-black">Pos</th>
                        <th className="p-4 font-black">Competidor</th>
                        <th className="p-4 text-center font-black">Vitórias</th>
                        <th className="p-4 pr-6 text-center w-32 font-black">Pontos</th>
                      </tr>
                    </thead>
                    <tbody className={`text-sm ${isLight ? 'text-gray-700' : 'text-gray-300'}`}>
                      {standingsTab === 'drivers' ? drivers2026.map((d, i) => (
                        <tr key={d.id} className={`group transition-all duration-300 rounded-2xl hover:scale-[1.005] ${isLight ? 'hover:bg-pink-50/50' : 'hover:bg-white/5 hover:shadow-[0_0_15px_rgba(0,0,0,0.5)]'}`}>
                          <td className="p-4 pl-6 text-center">
                            <span className={`flex items-center justify-center w-8 h-8 rounded-lg font-black text-xs ${i < 3 ? 'bg-yellow-100 text-yellow-700 ring-2 ring-yellow-200' : 'bg-gray-100 text-gray-400 opacity-50'}`}>
                              {i+1}
                            </span>
                          </td>
                          <td className="p-4">
                             <div className="flex flex-col">
                               <span className={`font-bold text-base transition-colors ${isLight ? 'group-hover:text-pink-500' : 'group-hover:text-cyan-400'}`}>{d.name}</span>
                               <span className={`text-[10px] uppercase font-bold tracking-wider mt-0.5 ${isLight ? 'text-gray-400' : 'text-gray-500'}`}>{d.team}</span>
                             </div>
                          </td>
                          <td className="p-4 text-center">
                            <span className={`px-3 py-1 rounded-full text-[10px] font-black ${d.wins > 0 ? 'bg-green-100 text-green-700' : 'opacity-20 bg-gray-100'}`}>{d.wins}</span>
                          </td>
                          <td className="p-4 pr-6 text-center">
                            <span className={`font-black text-xl italic ${isLight ? 'text-gray-800' : 'text-white'}`}>{d.points}</span>
                          </td>
                        </tr>
                      )) : constructors2026.map((c, i) => (
                        <tr key={c.id} className={`group transition-all duration-300 rounded-2xl hover:scale-[1.005] ${isLight ? 'hover:bg-pink-50/50' : 'hover:bg-white/5'}`}>
                          <td className="p-4 pl-6 text-center">
                            <span className={`flex items-center justify-center w-8 h-8 rounded-lg font-black text-xs ${i < 3 ? 'bg-yellow-100 text-yellow-700 ring-2 ring-yellow-200' : 'bg-gray-100 text-gray-400 opacity-50'}`}>
                              {i+1}
                            </span>
                          </td>
                          <td className="p-4 flex items-center gap-4">
                             <div className="w-1.5 h-10 rounded-full shadow-[0_0_5px_currentColor]" style={{ backgroundColor: c.color, color: c.color }}></div>
                             <span className="font-black text-lg tracking-tight uppercase italic group-hover:opacity-80 transition-opacity">{c.name}</span>
                          </td>
                          <td className="p-4 text-center">
                            <span className={`px-3 py-1 rounded-full text-[10px] font-black ${c.wins > 0 ? 'bg-green-100 text-green-700' : 'opacity-20 bg-gray-100'}`}>{c.wins}</span>
                          </td>
                          <td className="p-4 pr-6 text-center">
                            <span className={`font-black text-xl italic ${isLight ? 'text-gray-800' : 'text-white'}`}>{c.points}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </BentoCard>

          </div>
        ) : (
          // --- CONTEÚDO 2025 ---
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <BentoCard theme={theme} className="md:col-span-3 p-16 text-center flex items-center justify-center min-h-[400px]">
               <div className="flex flex-col items-center">
                 <div className={`p-6 rounded-full mb-6 ${isLight ? 'bg-gray-100 text-gray-400' : 'bg-white/5 text-gray-600'}`}>
                    <Flag size={64} />
                 </div>
                 <h3 className={`text-4xl font-black uppercase mb-2 ${isLight ? 'text-gray-300' : 'text-gray-600'}`}>Temporada Encerrada</h3>
                 <div className={`inline-block px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest ${isLight ? 'bg-orange-100 text-orange-600' : 'bg-orange-900/20 text-orange-400 border border-orange-500/20'}`}>
                    Lando Norris Campeão
                 </div>
               </div>
             </BentoCard>
          </div>
        )}
      </div>
    </div>
  );
};

export default SeasonPage;