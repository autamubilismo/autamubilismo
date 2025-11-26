import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Trophy, MapPin, Scale, ArrowRight, Users } from 'lucide-react';
import { BackButton, BentoCard } from '../components/UI';
import { DRIVERS_DATA } from '../data'; // Importando os pilotos para mostrar as fotos

const SeasonPage = ({ theme }) => {
  const isLight = theme === 'light';
  const [year, setYear] = useState('2025');
  const navigate = useNavigate();

  // Estilos dinâmicos para o toggle
  const activeTabClass = isLight 
    ? 'bg-white text-gray-900 shadow-md' 
    : 'bg-[#00fff2] text-black shadow-[0_0_15px_rgba(0,255,242,0.4)]';
  
  const inactiveTabClass = isLight 
    ? 'text-gray-400 hover:text-gray-600' 
    : 'text-gray-500 hover:text-gray-300';

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-12">
      <BackButton to="/" theme={theme} />

      {/* --- CABEÇALHO E TOGGLE --- */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div>
            <h2 className={`text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none ${isLight ? 'text-gray-800' : 'text-white'}`} >
              Temporada
            </h2>
            <span className={`text-xl font-bold tracking-widest uppercase ${isLight ? 'text-[#D8C4F0]' : 'text-[#fe88dd]'}`}>
              O Caminho para a Glória
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
             className={`px-6 py-2 rounded-full text-sm font-black transition-all duration-300 ${year === '2026' ? (isLight ? 'bg-white text-gray-900 shadow-md' : 'bg-[#bd00ff] text-white shadow-[0_0_15px_#bd00ff]') : inactiveTabClass}`}
           >
             2026
           </button>
        </div>
      </div>
      
      {year === '2025' ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           
           {/* CARD 1: CALENDÁRIO (Grande Destaque) */}
           <BentoCard 
             theme={theme} 
             to="/calendar"
             className={`md:col-span-2 min-h-[280px] group cursor-pointer flex flex-col justify-between overflow-hidden relative ${isLight ? 'bg-[#CFF7E8]' : 'bg-[#0a0a12] border border-[#00fff2]'}`}
           >
              <div className="absolute top-[-20px] right-[-20px] opacity-10 rotate-12">
                  <Calendar size={200} />
              </div>
              
              <div className="relative z-10">
                 <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${isLight ? 'bg-white/60 text-teal-800' : 'bg-[#00fff2]/20 text-[#00fff2]'}`}>
                    <Calendar size={24} />
                 </div>
                 <h3 className={`text-3xl font-black uppercase leading-none ${isLight ? 'text-teal-900' : 'text-white'}`}>Calendário<br/>Completo</h3>
              </div>

              <div className="relative z-10 mt-4">
                 <div className="flex items-center justify-between border-t border-current/10 pt-4">
                    <div>
                        <span className="text-xs font-bold uppercase opacity-60 block mb-1">Próxima Parada</span>
                        <span className="text-xl font-black">GP do Catar 🇶🇦</span>
                    </div>
                    <div className={`p-3 rounded-full ${isLight ? 'bg-teal-900 text-white' : 'bg-[#00fff2] text-black'}`}>
                       <ArrowRight size={20} />
                    </div>
                 </div>
              </div>
           </BentoCard>

           {/* CARD 2: CLASSIFICAÇÃO */}
           <BentoCard 
             theme={theme} 
             to="/standings"
             className={`md:col-span-1 cursor-pointer group ${isLight ? 'bg-[#FBCAD2]' : 'bg-[#1a1a20] border-[#ff0055] hover:border-[#ff0055]'}`}
           >
              <div className="flex flex-col h-full justify-between">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${isLight ? 'bg-white/60 text-pink-800' : 'bg-[#ff0055]/20 text-[#ff0055]'}`}>
                    <Trophy size={24} />
                  </div>
                  <div>
                    <h3 className={`text-2xl font-black uppercase mb-1 ${isLight ? 'text-pink-900' : 'text-white'}`}>Classificação</h3>
                    <p className="text-xs font-medium opacity-70">Pilotos & Construtores</p>
                  </div>
                  <div className={`mt-4 text-sm font-bold py-2 px-3 rounded-lg flex items-center justify-between ${isLight ? 'bg-white/50 text-pink-900' : 'bg-black/30 text-white'}`}>
                     <span>P1. Verstappen</span>
                     <span>391 pts</span>
                  </div>
              </div>
           </BentoCard>

           {/* CARD 3: CIRCUITOS */}
           <BentoCard 
             theme={theme} 
             to="/circuits"
             className={`md:col-span-1 cursor-pointer group ${isLight ? 'bg-[#D8C4F0]' : 'bg-[#1a1a20] border-[#bd00ff] hover:border-[#bd00ff]'}`}
           >
              <div className="flex flex-col h-full justify-between">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${isLight ? 'bg-white/60 text-purple-800' : 'bg-[#bd00ff]/20 text-[#bd00ff]'}`}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className={`text-2xl font-black uppercase mb-1 ${isLight ? 'text-purple-900' : 'text-white'}`}>Circuitos</h3>
                    <p className="text-xs font-medium opacity-70">Mapas e zonas de DRS</p>
                  </div>
              </div>
           </BentoCard>

           {/* CARD 4: GRID ATUAL (AGORA COM PREVIEW DOS PILOTOS) */}
           <BentoCard 
             theme={theme} 
             to="/drivers"
             className={`md:col-span-2 flex flex-col justify-center cursor-pointer group ${isLight ? 'bg-white border-2 hover:border-gray-200' : 'bg-[#121217] border border-[#333] hover:border-[#00fff2]'}`}
           >
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 w-full">
                {/* Texto e Ícone */}
                <div className="flex items-center gap-5">
                   <div className={`p-4 rounded-2xl ${isLight ? 'bg-gray-100' : 'bg-[#1a1a20]'}`}>
                      <Users size={28} className={isLight ? 'text-gray-700' : 'text-white'} />
                   </div>
                   <div>
                      <h3 className={`text-2xl font-black ${isLight ? 'text-gray-800' : 'text-white'}`}>O Grid 2025</h3>
                      <p className={`text-sm font-medium ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>Conheça os 20 pilotos.</p>
                   </div>
                </div>

                {/* Avatares Empilhados */}
                <div className="flex items-center pl-4">
                    {DRIVERS_DATA.slice(0, 5).map((driver, index) => (
                      <div 
                        key={driver.id || index} 
                        className={`w-12 h-12 rounded-full border-[3px] overflow-hidden -ml-4 transition-transform hover:translate-y-[-5px] hover:scale-110 hover:z-20 ${isLight ? 'border-white bg-gray-200' : 'border-[#121217] bg-[#1a1a20]'}`}
                        style={{ zIndex: 10 - index }}
                      >
                          {driver.image && <img src={driver.image} alt={driver.name} className="w-full h-full object-cover" />}
                      </div>
                    ))}
                    <div className={`w-12 h-12 rounded-full border-[3px] flex items-center justify-center text-xs font-black -ml-4 z-0 ${isLight ? 'border-white bg-gray-100 text-gray-600' : 'border-[#121217] bg-[#2a2a35] text-white'}`}>
                        +15
                    </div>
                </div>
              </div>
           </BentoCard>

        </div>
      ) : (
        // CONTEÚDO DE 2026 (REGULAMENTO)
        <div className="grid grid-cols-1 gap-6">
            <BentoCard 
                theme={theme} 
                to="/regulation" 
                className={`p-10 cursor-pointer group overflow-hidden relative min-h-[300px] flex flex-col justify-center ${isLight ? 'bg-gradient-to-br from-[#D8C4F0] to-[#CFF7E8]' : 'bg-[#121217] border border-[#bd00ff] shadow-[0_0_30px_rgba(189,0,255,0.1)]'}`}
            >
                <div className="absolute right-0 top-0 w-64 h-64 opacity-10">
                    <Scale size={256} />
                </div>
                
                <div className="relative z-10 max-w-2xl">
                    <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 ${isLight ? 'bg-white text-purple-600' : 'bg-[#bd00ff] text-white'}`}>Nova Era</span>
                    <h3 className={`text-4xl md:text-6xl font-black mb-4 leading-tight ${isLight ? 'text-gray-800' : 'text-white'}`}>O Novo Regulamento</h3>
                    <p className={`text-lg md:text-xl mb-8 ${isLight ? 'text-gray-700' : 'text-gray-300'}`}>
                        Carros menores, motores mais eficientes e aerodinâmica ativa. Entenda tudo o que muda na maior revolução da década.
                    </p>
                    <div className={`flex items-center gap-2 font-bold ${isLight ? 'text-purple-800' : 'text-[#bd00ff]'}`}>
                        Ler Guia Completo <ArrowRight size={20} />
                    </div>
                </div>
            </BentoCard>
        </div>
      )}
    </div>
  );
};

export default SeasonPage;