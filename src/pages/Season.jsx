import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  Calendar, Trophy, MapPin, Scale, ArrowRight, Users, Zap, Wrench, Globe, 
  Flag
} from 'lucide-react';
import { BackButton, BentoCard } from '../components/UI';
import { DRIVERS_DATA } from '../data';

const SeasonPage = ({ theme }) => {
  const isLight = theme === 'light';
  const [year, setYear] = useState('2026'); // Estado inicial alterado para 2026
  const navigate = useNavigate();

  const activeTabClass = isLight 
    ? 'bg-white text-gray-900 shadow-md' 
    : 'bg-[#bd00ff] text-white shadow-[0_0_15px_#bd00ff]';
  
  const inactiveTabClass = isLight 
    ? 'text-gray-400 hover:text-gray-600' 
    : 'text-gray-500 hover:text-gray-300';

  // --- DADOS 2026 (ATUALIZADOS) ---
  const TEAMS_2026 = [
    { name: 'Cadillac/GM F1', engine: 'GM', status: 'Estreia', color: '#E6BE56' },
    { name: 'Audi F1 Team', engine: 'Audi', status: 'Nova Era Sauber', color: '#000000' },
    { name: 'Red Bull Ford', engine: 'Red Bull-Ford', status: 'Parceria', color: '#1E41FF' },
    { name: 'Aston Martin Honda', engine: 'Honda', status: 'Exclusivo', color: '#006F62' },
  ];

  const CALENDAR_2026 = [
    { round: 1, gp: 'Austrália', date: '6-8 Mar', flag: '🇦🇺' },
    { round: 2, gp: 'China', date: '13-15 Mar', flag: '🇨🇳', sprint: true },
    { round: 3, gp: 'Japão', date: '27-29 Mar', flag: '🇯🇵' },
    { round: 4, gp: 'Bahrein', date: '10-12 Abr', flag: '🇧🇭', night: true },
    { round: 5, gp: 'Arábia Saudita', date: '17-19 Abr', flag: '🇸🇦', night: true },
    { round: 6, gp: 'Miami', date: '1-3 Mai', flag: '🇺🇸', sprint: true },
    { round: 7, gp: 'Canadá', date: '22-24 Mai', flag: '🇨🇦', sprint: true },
    { round: 8, gp: 'Mônaco', date: '5-7 Jun', flag: '🇲🇨' },
    { round: 9, gp: 'Espanha', date: '12-14 Jun', flag: '🇪🇸' },
    { round: 10, gp: 'Áustria', date: '26-28 Jun', flag: '🇦🇹' },
    { round: 11, gp: 'Grã-Bretanha', date: '3-5 Jul', flag: '🇬🇧', sprint: true },
    { round: 12, gp: 'Bélgica', date: '17-19 Jul', flag: '🇧🇪' },
    { round: 13, gp: 'Hungria', date: '24-26 Jul', flag: '🇭🇺' },
    { round: 14, gp: 'Holanda', date: '21-23 Ago', flag: '🇳🇱', sprint: true, last: true },
    { round: 15, gp: 'Itália', date: '4-6 Set', flag: '🇮🇹' },
    { round: 16, gp: 'Madrid', date: '11-13 Set', flag: '🇪🇸', new: true },
    { round: 17, gp: 'Azerbaijão', date: '24-26 Set', flag: '🇦🇿' },
    { round: 18, gp: 'Singapura', date: '9-11 Out', flag: '🇸🇬', sprint: true, night: true },
    { round: 19, gp: 'EUA (Austin)', date: '23-25 Out', flag: '🇺🇸' },
    { round: 20, gp: 'México', date: '30 Out-1 Nov', flag: '🇲🇽' },
    { round: 21, gp: 'São Paulo', date: '6-8 Nov', flag: '🇧🇷' },
    { round: 22, gp: 'Las Vegas', date: '19-21 Nov', flag: '🇺🇸', night: true },
    { round: 23, gp: 'Catar', date: '27-29 Nov', flag: '🇶🇦', night: true },
    { round: 24, gp: 'Abu Dhabi', date: '4-6 Dez', flag: '🇦🇪', night: true },
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-12">
      <BackButton to="/" theme={theme} />

      {/* --- CABEÇALHO E TOGGLE --- */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div>
            <h2 className={`text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none ${isLight ? 'text-gray-800' : 'text-white'}`} style={{ fontFamily: "'Russo One', sans-serif" }}>
              Temporada
            </h2>
            <span className={`text-xl font-bold tracking-widest uppercase ${isLight ? 'text-[#D8C4F0]' : 'text-[#bd00ff]'}`}>
              {year === '2026' ? 'A Nova Era Híbrida' : 'O Caminho para a Glória'}
            </span>
        </div>

        {/* Seletor de Ano */}
        <div className={`flex p-1.5 rounded-full ${isLight ? 'bg-gray-100' : 'bg-[#1a1a20] border border-[#333]'}`}>
           <button 
             onClick={() => setYear('2025')} 
             className={`px-6 py-2 rounded-full text-sm font-black transition-all duration-300 ${year === '2025' ? activeTabClass : inactiveTabClass}`}
           >
             2025
           </button>
           <button 
             onClick={() => setYear('2026')} 
             className={`px-6 py-2 rounded-full text-sm font-black transition-all duration-300 ${year === '2026' ? activeTabClass : inactiveTabClass}`}
           >
             2026
           </button>
        </div>
      </div>
      
      {year === '2026' ? (
        // --- CONTEÚDO 2026 (PRINCIPAL) ---
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* 1. REGULAMENTO (Destaque Principal) */}
            <BentoCard 
                theme={theme} 
                to="/regulations" 
                className={`lg:col-span-2 p-8 md:p-10 cursor-pointer group overflow-hidden relative min-h-[300px] flex flex-col justify-center ${isLight ? 'bg-gradient-to-br from-[#D8C4F0] to-[#CFF7E8]' : 'bg-[#1a1a20] border border-[#bd00ff] shadow-[0_0_30px_rgba(255,0,85,0.1)]'}`}
            >
                <div className="absolute right-0 top-0 w-64 h-64 opacity-10"><Scale size={256} /></div>
                <div className="relative z-10 max-w-xl">
                    <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 ${isLight ? 'bg-white text-purple-600' : 'bg-[#bd00ff] text-white'}`}>Revolução</span>
                    <h3 className={`text-3xl md:text-5xl font-black mb-4 leading-tight ${isLight ? 'text-gray-800' : 'text-white'}`}>Regulamento Técnico</h3>
                    <p className={`text-lg mb-8 ${isLight ? 'text-gray-700' : 'text-gray-300'}`}>
                        Motores 50% elétricos, adeus ao MGU-H, carros mais curtos e leves (-30kg). Descubra o "Manual Override" que substituirá o DRS.
                    </p>
                    <div className={`flex items-center gap-2 font-bold ${isLight ? 'text-purple-800' : 'text-[#bd00ff]'}`}>Ler Guia Completo <ArrowRight size={20} /></div>
                </div>
            </BentoCard>

            {/* 2. NOVAS EQUIPES (Grid Lateral) */}
            <div className={`lg:col-span-1 p-6 rounded-[2.5rem] flex flex-col ${isLight ? 'bg-white shadow-lg border-2 border-transparent' : 'bg-[#1a1a20] border border-[#333]'}`}>
               <div className="flex items-center gap-3 mb-6">
                  <Wrench size={24} className={isLight ? 'text-blue-500' : 'text-[#00fff2]'} />
                  <h3 className={`text-xl font-black uppercase ${isLight ? 'text-gray-800' : 'text-white'}`}>Novas Eras</h3>
               </div>
               <div className="flex-1 flex flex-col gap-3 overflow-y-auto custom-scrollbar">
                  {TEAMS_2026.map((team, idx) => (
                    <div key={idx} className={`p-4 rounded-2xl border-l-4 ${isLight ? 'bg-gray-50 border-gray-300' : 'bg-white/5 border-[color:var(--t-color)]'}`} style={{ '--t-color': team.color }}>
                       <h4 className={`font-bold text-sm ${isLight ? 'text-gray-800' : 'text-white'}`}>{team.name}</h4>
                       <div className="flex justify-between items-center mt-1">
                          <span className={`text-[10px] uppercase font-bold opacity-60 ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>{team.engine}</span>
                          {team.status.includes('11') && <span className="text-[9px] px-2 py-0.5 bg-yellow-500 text-black rounded font-black uppercase">Novo</span>}
                          {team.status.includes('Estreia') && <span className="text-[9px] px-2 py-0.5 bg-black text-white rounded font-black uppercase">Estreia</span>}
                       </div>
                    </div>
                  ))}
               </div>
            </div>

            {/* 3. CALENDÁRIO COMPLETO 2026 (Estilizado) */}
            <div className={`lg:col-span-3 p-8 rounded-[2.5rem] ${isLight ? 'bg-[#FFF5F8] border-2 border-[#F7B8C8]' : 'bg-[#1a1a20] border border-[#bd00ff]'}`}>
               <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                     <Globe size={32} className={isLight ? 'text-pink-500' : 'text-[#bd00ff]'} />
                     <div>
                        <h3 className={`text-2xl font-black uppercase ${isLight ? 'text-gray-800' : 'text-white'}`}>Calendário 2026</h3>
                        <p className={`text-sm ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>24 Corridas • 6 Sprints • 5 Continentes</p>
                     </div>
                  </div>
                  <div className={`hidden md:flex items-center gap-2 text-xs font-bold uppercase px-3 py-1.5 rounded-full ${isLight ? 'bg-white text-gray-500' : 'bg-white/10 text-white'}`}>
                     <span className="w-2 h-2 rounded-full bg-orange-500"></span> Sprint
                     <span className="w-2 h-2 rounded-full bg-green-500 ml-2"></span> Estreia
                     <span className="w-2 h-2 rounded-full bg-purple-500 ml-2"></span> Noite
                  </div>
               </div>
               
               {/* Grid de Corridas */}
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {CALENDAR_2026.map((race) => (
                    <div key={race.round} className={`p-4 rounded-2xl flex items-center justify-between group hover:scale-[1.02] transition-transform ${isLight ? 'bg-white shadow-sm' : 'bg-white/5 border border-white/5 hover:border-[#bd00ff]/50'}`}>
                       <div>
                          <div className="flex items-center gap-2 mb-1">
                             <span className="text-xl">{race.flag}</span>
                             {race.sprint && <Zap size={12} className="text-orange-500" fill="currentColor" />}
                             {race.new && <span className="text-[8px] bg-green-500 text-white px-1.5 rounded font-black">NEW</span>}
                             {race.night && <span className="w-2 h-2 rounded-full bg-purple-500"></span>}
                          </div>
                          <h4 className={`font-bold text-sm leading-tight ${isLight ? 'text-gray-800' : 'text-white'}`}>GP {race.gp}</h4>
                          <span className={`text-[10px] font-medium uppercase tracking-wide ${isLight ? 'text-gray-400' : 'text-gray-500'}`}>{race.date}</span>
                       </div>
                       <span className={`text-[10px] font-black opacity-30 ${isLight ? 'text-gray-400' : 'text-white'}`}>R{race.round}</span>
                    </div>
                  ))}
               </div>
               
               <div className={`text-center text-xs mt-6 opacity-60 flex flex-col gap-1 ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>
                  <p>*Calendário sujeito a homologação da FIA.</p>
                  <p>Início: 06 Mar (Austrália) — Fim: 06 Dez (Abu Dhabi)</p>
               </div>
            </div>

            {/* 4. LINE-UP PILOTOS (Silly Season) */}
            <div className={`lg:col-span-3 p-6 rounded-[2.5rem] flex items-center justify-between ${isLight ? 'bg-white shadow-lg' : 'bg-[#1a1a20] border border-[#333]'}`}>
               <div>
                  <div className="flex items-center gap-3 mb-2">
                     <Users size={24} className={isLight ? 'text-gray-400' : 'text-white'} />
                     <h3 className={`text-xl font-black uppercase ${isLight ? 'text-gray-800' : 'text-white'}`}>Dança das Cadeiras</h3>
                  </div>
                  <p className={`text-sm max-w-2xl ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>
                    Max Verstappen na Red Bull-Ford? Antonelli consolidado na Mercedes? Quem será o rosto da Audi? Acompanhe os rumores e contratos do mercado para 2026.
                  </p>
               </div>
               <div className={`hidden md:flex p-4 rounded-full ${isLight ? 'bg-gray-100 text-gray-400' : 'bg-white/5 text-white'}`}>
                  <ArrowRight size={24} />
               </div>
            </div>

        </div>
      ) : (
        // --- CONTEÚDO 2025 (ARQUIVADO NA ABA) ---
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           {/* Card Calendário */}
           <BentoCard theme={theme} to="/calendar" className={`md:col-span-2 min-h-[280px] group cursor-pointer flex flex-col justify-between overflow-hidden relative ${isLight ? 'bg-[#CFF7E8]' : 'bg-[#0a0a12] border border-[#00fff2]'}`}>
              <div className="absolute top-[-20px] right-[-20px] opacity-10 rotate-12"><Calendar size={200} /></div>
              <div className="relative z-10">
                 <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${isLight ? 'bg-white/60 text-teal-800' : 'bg-[#00fff2]/20 text-[#00fff2]'}`}><Calendar size={24} /></div>
                 <h3 className={`text-3xl font-black uppercase leading-none ${isLight ? 'text-teal-900' : 'text-white'}`}>Calendário<br/>Completo</h3>
              </div>
              <div className="relative z-10 mt-4">
                 <div className="flex items-center justify-between border-t border-current/10 pt-4">
                    <div><span className="text-xs font-bold uppercase opacity-60 block mb-1">Próxima Parada</span><span className="text-xl font-black">GP de Abu Dhabi 🇦🇪</span></div>
                    <div className={`p-3 rounded-full ${isLight ? 'bg-teal-900 text-white' : 'bg-[#00fff2] text-black'}`}><ArrowRight size={20} /></div>
                 </div>
              </div>
           </BentoCard>

           {/* Card Classificação */}
           <BentoCard theme={theme} to="/standings" className={`md:col-span-1 cursor-pointer group ${isLight ? 'bg-[#FBCAD2]' : 'bg-[#1a1a20] border-[#bd00ff] hover:border-[#bd00ff]'}`}>
              <div className="flex flex-col h-full justify-between">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${isLight ? 'bg-white/60 text-pink-800' : 'bg-[#bd00ff]/20 text-[#bd00ff]'}`}><Trophy size={24} /></div>
                  <div><h3 className={`text-2xl font-black uppercase mb-1 ${isLight ? 'text-pink-900' : 'text-white'}`}>Classificação</h3><p className="text-xs font-medium opacity-70">Pilotos & Construtores</p></div>
                  <div className={`mt-4 text-sm font-bold py-2 px-3 rounded-lg flex items-center justify-between ${isLight ? 'bg-white/50 text-pink-900' : 'bg-black/30 text-white'}`}><span>P1. Norris</span><span>408 pts</span></div>
              </div>
           </BentoCard>

           {/* Card Circuitos */}
           <BentoCard theme={theme} to="/circuits" className={`md:col-span-1 cursor-pointer group ${isLight ? 'bg-[#D8C4F0]' : 'bg-[#1a1a20] border-[#bd00ff] hover:border-[#bd00ff]'}`}>
              <div className="flex flex-col h-full justify-between"><div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${isLight ? 'bg-white/60 text-purple-800' : 'bg-[#bd00ff]/20 text-[#bd00ff]'}`}><MapPin size={24} /></div><div><h3 className={`text-2xl font-black uppercase mb-1 ${isLight ? 'text-purple-900' : 'text-white'}`}>Circuitos</h3><p className="text-xs font-medium opacity-70">Mapas e zonas de DRS</p></div></div>
           </BentoCard>

           {/* Card Grid Atual */}
           <BentoCard theme={theme} to="/drivers" className={`md:col-span-2 flex flex-col justify-center cursor-pointer group ${isLight ? 'bg-white border-2 hover:border-gray-200' : 'bg-[#121217] border border-[#333] hover:border-[#bd00ff]'}`}>
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 w-full">
                <div className="flex items-center gap-5">
                   <div className={`p-4 rounded-2xl ${isLight ? 'bg-gray-100' : 'bg-[#1a1a20]'}`}><Users size={28} className={isLight ? 'text-gray-700' : 'text-white'} /></div>
                   <div><h3 className={`text-2xl font-black ${isLight ? 'text-gray-800' : 'text-white'}`}>O Grid 2025</h3><p className={`text-sm font-medium ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>Conheça os 20 pilotos.</p></div>
                </div>
                <div className="flex items-center pl-4">
                    {DRIVERS_DATA.slice(0, 5).map((driver, index) => (
                      <div key={driver.id || index} className={`w-12 h-12 rounded-full border-[3px] overflow-hidden -ml-4 transition-transform hover:translate-y-[-5px] hover:scale-110 hover:z-20 ${isLight ? 'border-white bg-gray-200' : 'border-[#121217] bg-[#1a1a20]'}`} style={{ zIndex: 10 - index }}>{driver.image && <img src={driver.image} alt={driver.name} className="w-full h-full object-cover" />}</div>
                    ))}
                    <div className={`w-12 h-12 rounded-full border-[3px] flex items-center justify-center text-xs font-black -ml-4 z-0 ${isLight ? 'border-white bg-gray-100 text-gray-600' : 'border-[#121217] bg-[#2a2a35] text-white'}`}>+15</div>
                </div>
              </div>
           </BentoCard>
        </div>
      )}
    </div>
  );
};

export default SeasonPage;