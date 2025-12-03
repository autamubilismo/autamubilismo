import React from 'react';
import { MapPin, Calendar, Repeat, Timer, ArrowUpRight } from 'lucide-react';
import { BackButton } from '../components/UI';
import { CIRCUITS_DATA } from '../data';

const CircuitsPage = ({ theme }) => {
  const isLight = theme === 'light';

  // Cores dinâmicas
  const cardBg = isLight 
    ? 'bg-white shadow-lg border-2 border-transparent hover:border-[#F7B8C8]' 
    : 'bg-[#121217] border border-[#333] hover:border-[#ab0eff]/50 shadow-lg';
  
  const accentText = isLight ? 'text-gray-800' : 'text-white';
  const subText = isLight ? 'text-gray-500' : 'text-gray-400';
  const iconColor = isLight ? 'text-[#F7B8C8]' : 'text-[#ab0eff]';

  // Fundo do container do traçado (ajustado para contraste se a imagem for branca)
  const trackContainerBg = isLight 
    ? 'bg-gray-100' // Cinza um pouco mais escuro para ver o traçado branco
    : 'bg-[#0f0f13]';

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-12">
      <BackButton to="/" theme={theme} />
      
      <div className="mb-10 px-2 text-center md:text-left">
        <h2 className={`text-4xl md:text-6xl font-black uppercase tracking-tighter mb-2 ${isLight ? 'text-gray-800' : 'text-white'}`}>
          Calendário
        </h2>
        <p className={`${isLight ? 'text-gray-500' : 'text-gray-400'}`}>O palco da velocidade em 2025.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {CIRCUITS_DATA.map((circuit) => (
          <div 
            key={circuit.id} 
            className={`group relative rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:-translate-y-2 ${cardBg}`}
          >
            {/* --- HEADER DO CARD (TRAÇADO) --- */}
            <div className={`relative h-64 overflow-hidden flex items-center justify-center p-8 ${trackContainerBg}`}>
                
                {/* Traçado da Pista (SEM FILTROS) */}
                <img 
                    src={circuit.layout} 
                    alt={`Layout ${circuit.name}`} 
                    className="w-full h-full object-contain drop-shadow-lg opacity-90 group-hover:scale-105 transition-transform duration-500"
                />

                {/* Bandeira no Topo */}
                <div className="absolute top-5 right-5 text-4xl drop-shadow-md">
                    {circuit.flag}
                </div>
            </div>

            {/* --- CORPO DO CARD (INFO) --- */}
            <div className="p-6 relative">
                {/* Badge da Data */}
                <div className={`absolute -top-5 left-6 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg flex items-center gap-2 ${isLight ? 'bg-white text-gray-800 border border-gray-100' : 'bg-[#ab0eff] text-white'}`}>
                    <Calendar size={12} /> {circuit.date}
                </div>

                <div className="mt-4">
                    <h3 className={`text-2xl font-black uppercase leading-none mb-1 ${accentText}`}>
                        {circuit.gp}
                    </h3>
                    <p className={`text-xs font-bold uppercase tracking-wide flex items-center gap-1 ${subText}`}>
                        <MapPin size={12} /> {circuit.name}, {circuit.country}
                    </p>
                </div>

                {/* Grid de Dados Técnicos */}
                <div className={`grid grid-cols-2 gap-4 mt-6 pt-6 border-t ${isLight ? 'border-gray-100' : 'border-white/10'}`}>
                    <div>
                        <span className={`text-[10px] font-bold uppercase block mb-1 ${subText}`}>Extensão</span>
                        <div className={`flex items-center gap-1.5 font-black ${accentText}`}>
                            <ArrowUpRight size={16} className={iconColor} /> {circuit.length}
                        </div>
                    </div>
                    <div>
                        <span className={`text-[10px] font-bold uppercase block mb-1 ${subText}`}>Voltas</span>
                        <div className={`flex items-center gap-1.5 font-black ${accentText}`}>
                            <Repeat size={16} className={iconColor} /> {circuit.laps}
                        </div>
                    </div>
                </div>

                {/* Recorde */}
                <div className={`mt-4 p-3 rounded-xl flex items-start gap-3 text-xs font-medium ${isLight ? 'bg-gray-50 text-gray-600' : 'bg-white/5 text-gray-400'}`}>
                    <Timer size={16} className="shrink-0 mt-0.5 opacity-70" />
                    <div>
                        <span className="block opacity-50 text-[9px] uppercase font-bold">Recorde</span>
                        {circuit.record}
                    </div>
                </div>

            </div>
          </div>
        ))}
      </div>
      
      {/* Ajuste na fonte */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');');`}</style>
    </div>
  );
};

export default CircuitsPage;