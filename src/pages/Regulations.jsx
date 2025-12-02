import React from 'react';
import { 
  Zap, Wind, Scale, Leaf, ShieldCheck, Gauge, 
  ArrowRight, Minimize2, BatteryCharging 
} from 'lucide-react';
import { BackButton } from '../components/UI';

const RegulationsPage = ({ theme }) => {
  const isLight = theme === 'light';

  // --- PALETA DE CORES UNIFICADA ---
  const cardBg = isLight 
    ? 'bg-white shadow-lg border-2 border-transparent hover:border-[#F7B8C8]' 
    : 'bg-[#1a1a20] border border-[#333] hover:border-[#fe88dd]/50 shadow-lg';
  
  const textMain = isLight ? 'text-gray-800' : 'text-white';
  const textSub = isLight ? 'text-gray-500' : 'text-gray-400';
  
  // Cor de destaque (Rosa Neon no Dark)
  const accentColor = isLight ? 'text-purple-600' : 'text-[#fe88dd]';
  const bgAccent = isLight ? 'bg-purple-100' : 'bg-[#fe88dd]/10 border border-[#fe88dd]/20';

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-12">
      <BackButton to="/season" theme={theme} />

      {/* --- HERO HEADER --- */}
      <div className="mb-12 text-center max-w-4xl mx-auto px-4">
        <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4 ${bgAccent} ${accentColor}`}>
           A Nova Era
        </span>
        <h1 className={`text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6 ${textMain}`} style={{ fontFamily: "'Russo One', sans-serif" }}>
          Regulamento 2026
        </h1>
        <p className={`text-lg md:text-xl max-w-2xl mx-auto leading-relaxed ${textSub}`}>
          Carros mais leves, motores 50% elétricos e aerodinâmica ativa. 
          Bem-vindos ao futuro da velocidade.
        </p>
      </div>

      {/* --- BENTO GRID DE REGRAS --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">

        {/* 1. MOTOR (Destaque Grande) */}
        <div className={`lg:col-span-4 p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden group ${isLight ? 'bg-[#CFF7E8]' : 'bg-[#1a1a20] border border-[#fe88dd]/50'}`}>
           <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
              <Zap size={200} />
           </div>
           
           <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                 <div className={`p-3 rounded-2xl ${isLight ? 'bg-white text-teal-700' : 'bg-[#fe88dd] text-black'}`}>
                    <BatteryCharging size={24} />
                 </div>
                 <h3 className={`text-3xl font-black uppercase ${isLight ? 'text-teal-900' : 'text-white'}`}>Unidade de Potência</h3>
              </div>
              
              <p className={`text-lg mb-8 max-w-md font-medium ${isLight ? 'text-teal-800' : 'text-gray-300'}`}>
                 O motor V6 Turbo continua, mas o sistema elétrico triplica de potência. Adeus MGU-H, olá eficiência pura.
              </p>

              {/* Gráfico de Barras */}
              <div className="space-y-6 max-w-lg">
                 <div>
                    <div className={`flex justify-between text-xs font-bold uppercase mb-2 ${isLight ? 'text-teal-900' : 'text-white opacity-70'}`}>
                       <span>Combustão (ICE)</span>
                       <span>~500 hp</span>
                    </div>
                    <div className={`w-full h-3 rounded-full overflow-hidden ${isLight ? 'bg-black/10' : 'bg-white/10'}`}>
                       <div className={`h-full w-[55%] ${isLight ? 'bg-teal-600' : 'bg-white'}`}></div>
                    </div>
                 </div>
                 <div>
                    <div className={`flex justify-between text-xs font-bold uppercase mb-2 ${isLight ? 'text-teal-900' : 'text-[#fe88dd]'}`}>
                       <span>Elétrico (MGU-K)</span>
                       <span>~470 hp (350kW)</span>
                    </div>
                    <div className={`w-full h-3 rounded-full overflow-hidden ${isLight ? 'bg-black/10' : 'bg-white/10'}`}>
                       <div className={`h-full w-[45%] ${isLight ? 'bg-teal-400' : 'bg-[#fe88dd] shadow-[0_0_10px_#fe88dd]'}`}></div>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* 2. COMBUSTÍVEL */}
        <div className={`lg:col-span-2 p-8 rounded-[2.5rem] flex flex-col justify-between ${cardBg}`}>
            <div>
               <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${isLight ? 'bg-green-100 text-green-600' : 'bg-white/5 text-[#fe88dd]'}`}>
                  <Leaf size={24} />
               </div>
               <h3 className={`text-xl font-black mb-2 ${textMain}`}>100% Sustentável</h3>
               <p className={`text-sm leading-relaxed ${textSub}`}>
                  O combustível será criado em laboratório ("e-fuel"), capturando carbono da atmosfera.
               </p>
            </div>
            <div className="mt-6">
               <div className={`text-4xl font-black ${isLight ? 'text-green-500' : 'text-white'}`}>NET ZERO</div>
               <span className={`text-[10px] uppercase font-bold tracking-widest opacity-50 ${textMain}`}>Meta 2030</span>
            </div>
        </div>

        {/* 3. AERODINÂMICA ATIVA */}
        <div className={`lg:col-span-3 p-8 rounded-[2.5rem] ${cardBg}`}>
            <div className="flex items-center gap-3 mb-6">
               <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${isLight ? 'bg-blue-100 text-blue-600' : 'bg-white/5 text-[#fe88dd]'}`}>
                  <Wind size={24} />
               </div>
               <h3 className={`text-xl font-black uppercase ${textMain}`}>Aero Ativa</h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
               <div className={`p-4 rounded-2xl ${isLight ? 'bg-gray-50' : 'bg-white/5'}`}>
                  <span className={`text-xs font-black uppercase block mb-1 ${isLight ? 'text-blue-500' : 'text-white'}`}>Z-Mode</span>
                  <p className={`text-sm font-medium ${textSub}`}>Asas fechadas para <strong>máximo downforce</strong> nas curvas.</p>
               </div>
               <div className={`p-4 rounded-2xl ${isLight ? 'bg-gray-50' : 'bg-white/5'}`}>
                  <span className={`text-xs font-black uppercase block mb-1 ${isLight ? 'text-purple-500' : 'text-[#fe88dd]'}`}>X-Mode</span>
                  <p className={`text-sm font-medium ${textSub}`}>Asas abertas para <strong>menor arrasto</strong> nas retas.</p>
               </div>
            </div>
        </div>

        {/* 4. CHASSIS */}
        <div className={`lg:col-span-3 p-8 rounded-[2.5rem] ${cardBg}`}>
            <div className="flex items-center gap-3 mb-6">
               <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${isLight ? 'bg-orange-100 text-orange-600' : 'bg-white/5 text-[#fe88dd]'}`}>
                  <Minimize2 size={24} />
               </div>
               <h3 className={`text-xl font-black uppercase ${textMain}`}>Chassis "Ágil"</h3>
            </div>

            <ul className="space-y-3">
               <li className={`flex items-center justify-between pb-2 border-b ${isLight ? 'border-gray-100' : 'border-white/5'}`}>
                  <span className={`text-sm font-medium ${textSub}`}>Largura</span>
                  <span className={`font-bold ${textMain}`}>190cm <span className="text-xs opacity-50">(-10cm)</span></span>
               </li>
               <li className={`flex items-center justify-between pb-2 border-b ${isLight ? 'border-gray-100' : 'border-white/5'}`}>
                  <span className={`text-sm font-medium ${textSub}`}>Entre-eixos</span>
                  <span className={`font-bold ${textMain}`}>340cm <span className="text-xs opacity-50">(-20cm)</span></span>
               </li>
               <li className="flex items-center justify-between">
                  <span className={`text-sm font-medium ${textSub}`}>Peso Mínimo</span>
                  <span className={`font-bold ${textMain}`}>768kg <span className="text-xs opacity-50">(-30kg)</span></span>
               </li>
            </ul>
        </div>

        {/* 5. SEGURANÇA */}
        <div className={`lg:col-span-2 p-8 rounded-[2.5rem] flex flex-col justify-center items-center text-center ${cardBg}`}>
           <ShieldCheck size={48} className={`mb-4 opacity-80 ${isLight ? 'text-gray-400' : 'text-[#fe88dd]'}`} />
           <h3 className={`text-xl font-black uppercase mb-2 ${textMain}`}>Segurança</h3>
           <p className={`text-sm font-medium opacity-80 ${textSub}`}>Estruturas de impacto mais robustas e roll hoop reforçado.</p>
        </div>

         {/* 6. OVERTAKE (CORRIGIDO - Design Harmônico) */}
         <div 
            className={`lg:col-span-4 p-8 rounded-[2.5rem] relative overflow-hidden flex items-center justify-between cursor-pointer group transition-all hover:scale-[1.01] 
            ${isLight 
               ? 'bg-white shadow-lg border-2 border-transparent hover:border-red-200' 
               : 'bg-[#1a1a20] border border-[#333] hover:border-[#fe88dd] shadow-[0_0_20px_rgba(254,136,221,0.05)]'
            }`}
         >
            <div>
               <div className="flex items-center gap-2 mb-2">
                  <span className={`text-[10px] font-black uppercase px-2 py-1 rounded-md ${isLight ? 'bg-red-100 text-red-600' : 'bg-[#fe88dd]/20 text-[#fe88dd]'}`}>Novo DRS</span>
               </div>
               <h3 className={`text-2xl md:text-3xl font-black uppercase mb-1 ${textMain}`}>Manual Override</h3>
               <p className={`text-sm md:text-base opacity-70 ${textSub}`}>
                 Sistema de "boost" elétrico para ultrapassagens (MGU-K) até 355km/h.
               </p>
            </div>
            <div className={`p-5 rounded-full transition-transform group-hover:rotate-12 ${isLight ? 'bg-red-50 text-red-500' : 'bg-[#fe88dd]/20 text-[#fe88dd]'}`}>
                <Gauge size={32} />
            </div>
         </div>

      </div>

      <style>{`@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');');`}</style>
    </div>
  );
};

export default RegulationsPage;