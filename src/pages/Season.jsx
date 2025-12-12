import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  Calendar, Trophy, MapPin, Scale, ArrowRight, Users, Zap, Wrench, Globe, 
  Flag, ChevronLeft, ChevronRight, Search, RotateCcw, Clock, Sparkles
} from 'lucide-react';

// --- COMPONENTES VISUAIS ---

const BackButton = ({ to, theme }) => {
  const isLight = theme === 'light';
  return (
    <Link
      to={to}
      className={`group mb-8 inline-flex items-center gap-2 text-sm font-bold transition-all hover:pl-2 ${
        isLight
          ? 'text-gray-400 hover:text-pink-500' // Ajustado: Roxo neon removido, agora é um rosa suave
          : 'text-gray-500 hover:text-[#00fff2]'
      }`}
    >
      <ChevronLeft size={18} />
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

  // Ajustado: Bordas e sombras do hover no modo claro agora são rosa/lilás suave, não roxo neon.
  const baseClasses = `relative overflow-hidden transition-all duration-500 group h-full flex flex-col justify-between ${className} ${
    isLight
      ? 'bg-white rounded-[2rem] shadow-[0_10px_30px_-10px_rgba(200,200,200,0.3)] border border-gray-100 hover:border-pink-200 hover:shadow-[0_15px_30px_-5px_rgba(236,72,153,0.1)]'
      : 'bg-[#121217] rounded-[2rem] border border-[#333] hover:border-[#00fff2] shadow-[0_0_30px_rgba(0,255,242,0.05)]'
  }`;

  const GridPattern = () => (
    <div
      className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
      style={{
        backgroundImage: isLight 
          ? 'linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)'
          : 'linear-gradient(#00fff2 1px, transparent 1px), linear-gradient(90deg, #00fff2 1px, transparent 1px)',
        backgroundSize: '30px 30px',
      }}
    />
  );

  const CardContent = () => (
    <>
      <GridPattern />
      <div className={`relative z-10 w-full h-full flex flex-col ${noPadding ? '' : 'p-6'}`}>
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

  // --- DADOS 2026 ---
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

  const activeTabClass = isLight 
    ? 'bg-white text-gray-900 shadow-md shadow-gray-200' 
    : 'bg-[#bd00ff] text-white shadow-[0_0_20px_rgba(189,0,255,0.4)]';
  
  const inactiveTabClass = isLight 
    ? 'text-gray-400 hover:text-gray-600 hover:bg-gray-50' 
    : 'text-gray-500 hover:text-gray-300 hover:bg-white/5';

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 pb-12">
      <BackButton to="/" theme={theme} />

      {/* --- CABEÇALHO --- */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
            <h2 className={`text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-2 ${isLight ? 'text-transparent bg-clip-text bg-gradient-to-br from-gray-900 to-gray-600' : 'text-white'}`} style={{ fontFamily: "'Russo One', sans-serif" }}>
              Temporada
            </h2>
            <div className="flex items-center gap-3">
              <span className={`text-xl font-bold tracking-widest uppercase flex items-center gap-2 ${isLight ? 'text-pink-500' : 'text-[#bd00ff]'}`}>
                {year === '2026' ? 'Nova Era Híbrida' : 'O Caminho para a Glória'}
                {year === '2026' && <Sparkles size={18} className="animate-pulse" />}
              </span>
            </div>
        </div>

        {/* Seletor de Ano */}
        <div className={`flex p-1.5 rounded-full ${isLight ? 'bg-gray-100/80 backdrop-blur' : 'bg-[#1a1a20] border border-[#333]'}`}>
           <button onClick={() => setYear('2025')} className={`px-8 py-2.5 rounded-full text-xs font-black tracking-widest transition-all duration-300 ${year === '2025' ? activeTabClass : inactiveTabClass}`}>2025</button>
           <button onClick={() => setYear('2026')} className={`px-8 py-2.5 rounded-full text-xs font-black tracking-widest transition-all duration-300 ${year === '2026' ? activeTabClass : inactiveTabClass}`}>2026</button>
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
                         <div className={`p-4 rounded-2xl shadow-sm transition-transform group-hover:scale-110 ${isLight ? 'bg-gradient-to-br from-pink-50 to-white text-pink-500 border border-pink-100' : 'bg-[#bd00ff]/20 text-[#bd00ff]'}`}>
                            <Globe size={28} strokeWidth={1.5} />
                         </div>
                         <ArrowRight size={20} className={`opacity-30 group-hover:opacity-100 transition-all group-hover:translate-x-1 ${isLight ? 'text-pink-400' : 'text-white'}`} />
                      </div>
                      <div className="mt-4">
                         <h3 className={`text-2xl font-black uppercase italic leading-none mb-2 ${isLight ? 'text-gray-800' : 'text-white'}`}>Calendário 2026</h3>
                         <div className="flex items-center gap-2 opacity-60">
                            <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full ${isLight ? 'bg-gray-100 text-gray-500' : 'bg-white/10 text-gray-300'}`}>24 Corridas</span>
                            <span className={`text-[10px] font-bold uppercase tracking-widest ${isLight ? 'text-gray-400' : 'text-gray-500'}`}>World Tour</span>
                         </div>
                      </div>
                   </div>
                </BentoCard>

                {/* BOTÃO REGULAMENTO */}
                <BentoCard theme={theme} to="/regulations">
                   <div className="flex flex-col h-full justify-between">
                      <div className="flex justify-between items-start">
                         <div className={`p-4 rounded-2xl shadow-sm transition-transform group-hover:scale-110 ${isLight ? 'bg-gradient-to-br from-purple-50 to-white text-purple-500 border border-purple-100' : 'bg-[#bd00ff]/20 text-[#bd00ff]'}`}>
                            <Scale size={28} strokeWidth={1.5} />
                         </div>
                         <ArrowRight size={20} className={`opacity-30 group-hover:opacity-100 transition-all group-hover:translate-x-1 ${isLight ? 'text-purple-400' : 'text-white'}`} />
                      </div>
                      <div className="mt-4">
                         <h3 className={`text-2xl font-black uppercase italic leading-none mb-2 ${isLight ? 'text-gray-800' : 'text-white'}`}>Regulamento</h3>
                         <div className="flex items-center gap-2 opacity-60">
                            <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full ${isLight ? 'bg-gray-100 text-gray-500' : 'bg-white/10 text-gray-300'}`}>Técnico</span>
                            <span className={`text-[10px] font-bold uppercase tracking-widest ${isLight ? 'text-gray-400' : 'text-gray-500'}`}>Nova Era</span>
                         </div>
                      </div>
                   </div>
                </BentoCard>

                {/* CARD GRID (Mostrando as equipes) */}
                <BentoCard theme={theme} className="relative">
                   <div className="flex flex-col h-full justify-between relative z-20">
                      <div className="flex justify-between items-start mb-4">
                         <div className={`p-4 rounded-2xl shadow-sm transition-transform group-hover:scale-110 ${isLight ? 'bg-gradient-to-br from-blue-50 to-white text-blue-500 border border-blue-100' : 'bg-blue-500/20 text-blue-400'}`}>
                            <Users size={28} strokeWidth={1.5} />
                         </div>
                         <div className={`text-[9px] font-bold uppercase px-2 py-1 rounded-full border ${isLight ? 'bg-white border-gray-200 text-gray-400' : 'bg-transparent border-[#333] text-gray-500'}`}>
                            Confirmados
                         </div>
                      </div>
                      
                      <div className="flex flex-col gap-3">
                         <h3 className={`text-xl font-black uppercase italic leading-none ${isLight ? 'text-gray-800' : 'text-white'}`}>O Grid 2026</h3>
                         <div className="grid grid-cols-2 gap-2">
                            {TEAMS_2026.map((team, idx) => (
                              <div key={idx} className="flex items-center gap-2 opacity-70 group-hover:opacity-100 transition-opacity">
                                 <div className="w-1.5 h-1.5 rounded-full shadow-sm" style={{ backgroundColor: team.color }}></div>
                                 <span className={`text-[10px] font-bold uppercase truncate tracking-wide ${isLight ? 'text-gray-500' : 'text-gray-300'}`}>{team.name}</span>
                              </div>
                            ))}
                         </div>
                      </div>
                   </div>
                </BentoCard>

            </div>

            {/* 2. CLASSIFICAÇÃO (EMBAIXO E EM DESTAQUE) */}
            <BentoCard theme={theme} className="!p-0">
              <div className="p-8 pb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 border-b border-dashed border-gray-200/50">
                <div className="flex items-center gap-5">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${isLight ? 'bg-gradient-to-br from-yellow-100 to-white border border-yellow-100 text-yellow-600' : 'bg-yellow-500/20 text-yellow-400'}`}>
                    <Trophy size={28} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className={`text-3xl font-black uppercase italic tracking-tight ${isLight ? 'text-gray-800' : 'text-white'}`}>Classificação</h3>
                    <p className={`text-xs font-bold uppercase tracking-widest mt-1 ${isLight ? 'text-gray-400' : 'text-gray-500'}`}>Pontuação Oficial • 2026</p>
                  </div>
                </div>

                <div className={`flex p-1.5 rounded-2xl ${isLight ? 'bg-gray-100' : 'bg-[#1a1a20]'}`}>
                   <button onClick={() => setStandingsTab('drivers')} className={`px-6 py-2.5 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all ${standingsTab === 'drivers' ? (isLight ? 'bg-white shadow-sm text-gray-900' : 'bg-[#bd00ff] text-white shadow-lg shadow-purple-900/50') : 'opacity-50 hover:opacity-100'}`}>Pilotos</button>
                   <button onClick={() => setStandingsTab('constructors')} className={`px-6 py-2.5 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all ${standingsTab === 'constructors' ? (isLight ? 'bg-white shadow-sm text-gray-900' : 'bg-[#bd00ff] text-white shadow-lg shadow-purple-900/50') : 'opacity-50 hover:opacity-100'}`}>Equipes</button>
                </div>
              </div>

              <div className="overflow-x-auto p-4">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className={`text-[10px] uppercase tracking-widest ${isLight ? 'text-gray-400' : 'text-gray-500'}`}>
                      <th className="p-4 pl-6 w-20 text-center font-bold">Pos</th>
                      <th className="p-4 font-bold">Competidor</th>
                      <th className="p-4 text-center font-bold">Vitórias</th>
                      <th className="p-4 pr-6 text-center w-32 font-bold">Pontos</th>
                    </tr>
                  </thead>
                  <tbody className={`text-sm ${isLight ? 'text-gray-700' : 'text-gray-300'}`}>
                    {standingsTab === 'drivers' ? drivers2026.map((d, i) => (
                      <tr key={d.id} className={`group transition-all duration-300 rounded-xl hover:scale-[1.01] ${isLight ? 'hover:bg-gray-50 hover:shadow-sm' : 'hover:bg-white/5'}`}>
                        <td className="p-4 pl-6 text-center">
                          <span className={`flex items-center justify-center w-8 h-8 rounded-full font-bold ${i < 3 ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-400 opacity-50'}`}>
                            {i+1}
                          </span>
                        </td>
                        <td className="p-4">
                           <div className="flex flex-col">
                             {/* Ajustado: Hover agora é pink-500, mais suave */}
                             <span className={`font-bold text-base transition-colors ${isLight ? 'group-hover:text-pink-500' : 'group-hover:text-[#bd00ff]'}`}>{d.name}</span>
                             <span className={`text-[10px] uppercase font-bold tracking-wide mt-0.5 ${isLight ? 'text-gray-400' : 'text-gray-500'}`}>{d.team}</span>
                           </div>
                        </td>
                        <td className="p-4 text-center">
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${d.wins > 0 ? 'bg-green-100 text-green-700' : 'opacity-30'}`}>{d.wins}</span>
                        </td>
                        <td className="p-4 pr-6 text-center">
                          <span className="font-black text-xl italic">{d.points}</span>
                        </td>
                      </tr>
                    )) : constructors2026.map((c, i) => (
                      <tr key={c.id} className={`group transition-all duration-300 rounded-xl hover:scale-[1.01] ${isLight ? 'hover:bg-gray-50 hover:shadow-sm' : 'hover:bg-white/5'}`}>
                        <td className="p-4 pl-6 text-center">
                          <span className={`flex items-center justify-center w-8 h-8 rounded-full font-bold ${i < 3 ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-400 opacity-50'}`}>
                            {i+1}
                          </span>
                        </td>
                        <td className="p-4 flex items-center gap-4">
                           <div className="w-1.5 h-10 rounded-full shadow-sm" style={{ backgroundColor: c.color }}></div>
                           <span className="font-black text-lg tracking-tight uppercase italic group-hover:opacity-80 transition-opacity">{c.name}</span>
                        </td>
                        <td className="p-4 text-center">
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${c.wins > 0 ? 'bg-green-100 text-green-700' : 'opacity-30'}`}>{c.wins}</span>
                        </td>
                        <td className="p-4 pr-6 text-center">
                          <span className="font-black text-xl italic">{c.points}</span>
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
           <BentoCard theme={theme} className="md:col-span-3 p-12 text-center">
              <Flag size={48} className="mx-auto mb-4 opacity-50" />
              <h3 className="text-2xl font-black uppercase">Temporada 2025 Encerrada</h3>
              <p className="font-bold">Norris Campeão</p>
           </BentoCard>
        </div>
      )}
    </div>
  );
};

export default SeasonPage;