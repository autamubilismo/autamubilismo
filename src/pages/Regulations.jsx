import React from 'react';
import { 
  Zap, Wind, Scale, Leaf, ShieldCheck, Gauge, 
  ArrowRight, Minimize2, BatteryCharging, FileText, ArrowLeft,
  CircleDot, Trophy, Cpu
} from 'lucide-react';

// --- COMPONENTE INTERNO ---
const BackButton = ({ theme }) => {
  const isLight = theme === 'light';
  return (
    <div className="mb-8 cursor-pointer flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity w-fit">
        <div className={`p-2 rounded-full ${isLight ? 'bg-gray-200 text-gray-700' : 'bg-white/10 text-white'}`}>
            <ArrowLeft size={20} />
        </div>
        <span className={`font-bold uppercase tracking-wider text-sm ${isLight ? 'text-gray-600' : 'text-gray-300'}`}>Voltar</span>
    </div>
  );
};

// --- DADOS DINÂMICOS (Atualizados: Guia Técnico 2026) ---
const PAGE_CONTENT = {
  hero: {
    tag: "Conceito: Nimble Car",
    title: "A Engenharia de 2026: Guia Técnico da Nova Fórmula 1",
    description: "Uma análise profunda das novas especificações: do fim do MGU-H à aerodinâmica ativa e o novo conceito de ultrapassagem."
  },
  summary: {
    show: true,
    title: "Conceito Geral: Nimble Car",
    text: "A filosofia central foca em agilidade e disputas. O peso mínimo foi reduzido para 768kg (-30kg vs 2022). As dimensões foram compactadas: entre-eixos limitado a 3400mm (-200mm) e largura total de 1900mm (-100mm), com assoalho mais estreito para reduzir o efeito solo."
  },
  metaphor: {
    show: true,
    title: "A Metáfora do Ciborgue",
    text: "Imagine o motor de 2026 como um atleta de triatlo. Antes, ele dependia 80% dos músculos (combustão). Em 2026, ele se torna um ciborgue equilibrado: 50% força muscular e 50% de um exoesqueleto elétrico superpotente (350kW). O 'Manual Override' é o sprint final que o líder não consegue acompanhar."
  },
  cards: {
    engine: {
      title: "Unidade de Potência (PU)",
      desc: "V6 1.6L 90° (Bore 80mm) + ERS de 1000V. Turbo único simplificado a 150.000 rpm.",
      stats: [
        { label: "ICE (Combustão)", value: "V6 1.6L (Fluxo 3000MJ/h)", percent: 50 },
        { label: "MGU-K (Elétrico)", value: "350kW (470cv) | 500Nm", percent: 50 }
      ],
      extra: "Recuperação: 9 MJ/volta | Bateria: Min. 35kg"
    },
    fuel: {
      title: "100% Sustentável",
      desc: "Combustível 'Advanced Sustainable' de origem não fóssil. Materiais exóticos (ex: Magnésio, Ouro) proibidos para conter custos.",
      tag: "NET ZERO",
      subtag: "Reciclagem Obrigatória"
    },
    aero: {
      title: "Aero Ativa (X-Mode/Z-Mode)",
      zMode: { title: "Z-Mode (Curvas)", desc: "Asas fechadas (High Downforce). Padrão para máxima aderência." },
      xMode: { title: "X-Mode (Retas)", desc: "Asas abertas (Low Drag). Ativável em zonas designadas por todos os pilotos." },
      stats: "Desativação automática na frenagem"
    },
    chassis: {
      title: "Dimensões & Geometria",
      specs: [
        { label: "Largura Total", val: "1900mm", diff: "(-100mm)" },
        { label: "Entre-eixos", val: "3400mm", diff: "(-200mm)" },
        { label: "Largura Assoalho", val: "Reduzida", diff: "(-150mm)" }
      ]
    },
    safety: {
      title: "Segurança Aprimorada",
      desc: "Roll Hoop reforçado (+23% carga), nariz de dois estágios e luzes de status de Alta Voltagem no chassi."
    },
    overtake: {
      tag: "Manual Override",
      title: "Lógica de Ultrapassagem",
      desc: "O Líder perde potência elétrica a partir de 290km/h (zera em 355km/h). O Perseguidor mantém 350kW cheios até 337km/h para atacar."
    },
    tires: {
      title: "Pneus 18\"",
      desc: "Novas dimensões ajustadas ao chassi menor.",
      front: "Largura reduzida em 25mm",
      rear: "Largura reduzida em 30mm"
    },
    manufacturers: {
      title: "Fabricantes (Novos Critérios)",
      list: ["Ferrari", "Mercedes", "Alpine", "Honda", "Audi (Novo)", "Ford RBPT (Novo)", "Cadillac (Futuro)"]
    }
  }
};

const RegulationsPage = ({ theme = 'dark' }) => {
  const isLight = theme === 'light';

  // --- PALETA DE CORES UNIFICADA ---
  const cardBg = isLight 
    ? 'bg-white shadow-lg border-2 border-transparent hover:border-[#F7B8C8]' 
    : 'bg-[#1a1a20] border border-[#333] hover:border-[#caa5d8]/50 shadow-lg';
  
  const textMain = isLight ? 'text-gray-800' : 'text-white';
  const textSub = isLight ? 'text-gray-500' : 'text-gray-400';
  
  const accentColor = isLight ? 'text-purple-600' : 'text-[#caa5d8]';
  const bgAccent = isLight ? 'bg-purple-100' : 'bg-[#caa5d8]/10 border border-[#caa5d8]/20';

  return (
    <div className={`animate-in fade-in slide-in-from-bottom-4 duration-500 pb-12 font-sans p-6 ${isLight ? 'bg-slate-50' : 'bg-[#121212]'}`}>
      <BackButton theme={theme} />

      {/* --- HERO HEADER --- */}
      <div className="mb-12 text-center max-w-4xl mx-auto px-4 pt-4">
        <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4 ${bgAccent} ${accentColor}`}>
           {PAGE_CONTENT.hero.tag}
        </span>
        <h1 className={`text-4xl md:text-6xl font-black uppercase tracking-tighter leading-tight mb-6 ${textMain}`} style={{ fontFamily: "'Russo One', sans-serif" }}>
          {PAGE_CONTENT.hero.title}
        </h1>
        <p className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${textSub}`}>
          {PAGE_CONTENT.hero.description}
        </p>
      </div>

      {/* --- BENTO GRID --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 px-4 md:px-0 max-w-7xl mx-auto">

        {/* 0. RESUMO TÉCNICO */}
        {PAGE_CONTENT.summary.show && (
           <div className={`lg:col-span-6 p-8 rounded-[2.5rem] relative overflow-hidden ${cardBg} flex flex-col md:flex-row gap-6 items-start`}>
              <div className={`p-4 rounded-2xl shrink-0 ${isLight ? 'bg-purple-100 text-purple-600' : 'bg-[#caa5d8]/10 text-[#caa5d8]'}`}>
                 <FileText size={32} />
              </div>
              <div>
                 <h3 className={`text-2xl font-black uppercase mb-3 ${textMain}`}>{PAGE_CONTENT.summary.title}</h3>
                 <p className={`text-lg leading-relaxed ${textSub}`}>
                    {PAGE_CONTENT.summary.text}
                 </p>
              </div>
           </div>
        )}

        {/* 1. MOTOR (PU) */}
        <div className={`lg:col-span-4 p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden group ${isLight ? 'bg-[#CFF7E8]' : 'bg-[#1a1a20] border border-[#caa5d8]/50'}`}>
           <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
              <Zap size={200} />
           </div>
           
           <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                 <div className={`p-3 rounded-2xl ${isLight ? 'bg-white text-teal-700' : 'bg-[#caa5d8] text-black'}`}>
                    <BatteryCharging size={24} />
                 </div>
                 <h3 className={`text-3xl font-black uppercase ${isLight ? 'text-teal-900' : 'text-white'}`}>
                    {PAGE_CONTENT.cards.engine.title}
                 </h3>
              </div>
              
              <p className={`text-lg mb-8 max-w-lg font-medium ${isLight ? 'text-teal-800' : 'text-gray-300'}`}>
                 {PAGE_CONTENT.cards.engine.desc}
              </p>

              <div className="space-y-6 max-w-lg">
                 {PAGE_CONTENT.cards.engine.stats.map((stat, idx) => (
                   <div key={idx}>
                      <div className={`flex justify-between text-xs font-bold uppercase mb-2 ${isLight ? 'text-teal-900' : 'text-white opacity-70'}`}>
                         <span>{stat.label}</span>
                         <span>{stat.value}</span>
                      </div>
                      <div className={`w-full h-3 rounded-full overflow-hidden ${isLight ? 'bg-black/10' : 'bg-white/10'}`}>
                         <div 
                           className={`h-full ${isLight ? 'bg-teal-600' : idx === 0 ? 'bg-white' : 'bg-[#caa5d8] shadow-[0_0_10px_#caa5d8]'}`} 
                           style={{ width: `${stat.percent}%` }}
                         ></div>
                      </div>
                   </div>
                 ))}
                 <div className={`text-xs font-mono opacity-60 mt-2 ${textMain}`}>
                    * {PAGE_CONTENT.cards.engine.extra}
                 </div>
              </div>
           </div>
        </div>

        {/* 2. COMBUSTÍVEL */}
        <div className={`lg:col-span-2 p-8 rounded-[2.5rem] flex flex-col justify-between ${cardBg}`}>
            <div>
               <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${isLight ? 'bg-green-100 text-green-600' : 'bg-white/5 text-[#caa5d8]'}`}>
                  <Leaf size={24} />
               </div>
               <h3 className={`text-xl font-black mb-2 ${textMain}`}>{PAGE_CONTENT.cards.fuel.title}</h3>
               <p className={`text-sm leading-relaxed ${textSub}`}>
                  {PAGE_CONTENT.cards.fuel.desc}
               </p>
            </div>
            <div className="mt-6">
               <div className={`text-4xl font-black ${isLight ? 'text-green-500' : 'text-white'}`}>{PAGE_CONTENT.cards.fuel.tag}</div>
               <span className={`text-[10px] uppercase font-bold tracking-widest opacity-50 ${textMain}`}>{PAGE_CONTENT.cards.fuel.subtag}</span>
            </div>
        </div>

        {/* 3. AERODINÂMICA ATIVA */}
        <div className={`lg:col-span-3 p-8 rounded-[2.5rem] ${cardBg}`}>
            <div className="flex items-center gap-3 mb-6">
               <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${isLight ? 'bg-blue-100 text-blue-600' : 'bg-white/5 text-[#caa5d8]'}`}>
                  <Wind size={24} />
               </div>
               <h3 className={`text-xl font-black uppercase ${textMain}`}>{PAGE_CONTENT.cards.aero.title}</h3>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
               <div className={`p-4 rounded-2xl ${isLight ? 'bg-gray-50' : 'bg-white/5'}`}>
                  <span className={`text-xs font-black uppercase block mb-1 ${isLight ? 'text-blue-500' : 'text-white'}`}>
                    {PAGE_CONTENT.cards.aero.zMode.title}
                  </span>
                  <p className={`text-xs leading-snug font-medium ${textSub}`}>
                    {PAGE_CONTENT.cards.aero.zMode.desc}
                  </p>
               </div>
               <div className={`p-4 rounded-2xl ${isLight ? 'bg-gray-50' : 'bg-white/5'}`}>
                  <span className={`text-xs font-black uppercase block mb-1 ${isLight ? 'text-purple-500' : 'text-[#caa5d8]'}`}>
                    {PAGE_CONTENT.cards.aero.xMode.title}
                  </span>
                  <p className={`text-xs leading-snug font-medium ${textSub}`}>
                    {PAGE_CONTENT.cards.aero.xMode.desc}
                  </p>
               </div>
            </div>
            <div className={`text-xs font-bold uppercase tracking-wide opacity-50 text-center ${textMain}`}>
                {PAGE_CONTENT.cards.aero.stats}
            </div>
        </div>

        {/* 4. CHASSIS */}
        <div className={`lg:col-span-3 p-8 rounded-[2.5rem] ${cardBg}`}>
            <div className="flex items-center gap-3 mb-6">
               <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${isLight ? 'bg-orange-100 text-orange-600' : 'bg-white/5 text-[#caa5d8]'}`}>
                  <Minimize2 size={24} />
               </div>
               <h3 className={`text-xl font-black uppercase ${textMain}`}>{PAGE_CONTENT.cards.chassis.title}</h3>
            </div>

            <ul className="space-y-3">
               {PAGE_CONTENT.cards.chassis.specs.map((spec, i) => (
                 <li key={i} className={`flex items-center justify-between pb-2 border-b ${isLight ? 'border-gray-100' : 'border-white/5'}`}>
                    <span className={`text-sm font-medium ${textSub}`}>{spec.label}</span>
                    <span className={`font-bold ${textMain}`}>
                      {spec.val} <span className="text-xs opacity-50 ml-1">{spec.diff}</span>
                    </span>
                 </li>
               ))}
            </ul>
        </div>

        {/* 5. OVERTAKE (Manual Override) */}
        <div 
            className={`lg:col-span-3 p-8 rounded-[2.5rem] relative overflow-hidden flex flex-col justify-between cursor-pointer group transition-all hover:scale-[1.01] 
            ${isLight 
               ? 'bg-white shadow-lg border-2 border-transparent hover:border-red-200' 
               : 'bg-[#1a1a20] border border-[#333] hover:border-[#caa5d8] shadow-[0_0_20px_rgba(254,136,221,0.05)]'
            }`}
         >
            <div className="flex items-start justify-between">
               <div>
                  <span className={`text-[10px] font-black uppercase px-2 py-1 rounded-md mb-2 inline-block ${isLight ? 'bg-red-100 text-red-600' : 'bg-[#caa5d8]/20 text-[#caa5d8]'}`}>
                    {PAGE_CONTENT.cards.overtake.tag}
                  </span>
                  <h3 className={`text-2xl font-black uppercase mb-2 ${textMain}`}>
                    {PAGE_CONTENT.cards.overtake.title}
                  </h3>
               </div>
               <div className={`p-3 rounded-full ${isLight ? 'bg-red-50 text-red-500' : 'bg-[#caa5d8]/20 text-[#caa5d8]'}`}>
                   <Gauge size={24} />
               </div>
            </div>
            <p className={`text-sm opacity-70 leading-relaxed ${textSub}`}>
               {PAGE_CONTENT.cards.overtake.desc}
            </p>
         </div>

        {/* 6. SEGURANÇA */}
        <div className={`lg:col-span-3 p-8 rounded-[2.5rem] flex flex-col justify-center text-left ${cardBg}`}>
           <div className="flex items-center gap-3 mb-4">
              <ShieldCheck size={32} className={`opacity-80 ${isLight ? 'text-gray-400' : 'text-[#caa5d8]'}`} />
              <h3 className={`text-xl font-black uppercase ${textMain}`}>{PAGE_CONTENT.cards.safety.title}</h3>
           </div>
           <p className={`text-sm font-medium opacity-80 leading-relaxed ${textSub}`}>
             {PAGE_CONTENT.cards.safety.desc}
           </p>
        </div>

        {/* 7. PNEUS */}
        <div className={`lg:col-span-2 p-8 rounded-[2.5rem] ${cardBg}`}>
           <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${isLight ? 'bg-gray-100 text-gray-600' : 'bg-white/10 text-white'}`}>
              <CircleDot size={20} />
           </div>
           <h3 className={`text-lg font-black uppercase mb-2 ${textMain}`}>{PAGE_CONTENT.cards.tires.title}</h3>
           <p className={`text-xs mb-4 ${textSub}`}>{PAGE_CONTENT.cards.tires.desc}</p>
           <div className="space-y-2">
              <div className={`text-xs font-bold px-3 py-2 rounded-lg ${isLight ? 'bg-gray-50' : 'bg-white/5'} flex justify-between`}>
                 <span className={textSub}>Dianteiros</span>
                 <span className={textMain}>{PAGE_CONTENT.cards.tires.front}</span>
              </div>
              <div className={`text-xs font-bold px-3 py-2 rounded-lg ${isLight ? 'bg-gray-50' : 'bg-white/5'} flex justify-between`}>
                 <span className={textSub}>Traseiros</span>
                 <span className={textMain}>{PAGE_CONTENT.cards.tires.rear}</span>
              </div>
           </div>
        </div>

        {/* 8. FABRICANTES */}
        <div className={`lg:col-span-4 p-8 rounded-[2.5rem] ${cardBg} flex flex-col justify-center`}>
           <div className="flex items-center gap-3 mb-6">
              <Trophy size={24} className={isLight ? 'text-yellow-500' : 'text-[#caa5d8]'} />
              <h3 className={`text-xl font-black uppercase ${textMain}`}>{PAGE_CONTENT.cards.manufacturers.title}</h3>
           </div>
           <div className="flex flex-wrap gap-2">
              {PAGE_CONTENT.cards.manufacturers.list.map((brand, idx) => (
                 <span 
                   key={idx}
                   className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider ${
                      isLight 
                        ? 'bg-gray-100 text-gray-600 border border-gray-200' 
                        : 'bg-white/5 text-gray-300 border border-white/10'
                   }`}
                 >
                    {brand}
                 </span>
              ))}
           </div>
        </div>

        {/* 9. METÁFORA (NOVA SEÇÃO DESTAQUE) */}
        {PAGE_CONTENT.metaphor.show && (
            <div className={`lg:col-span-6 p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden bg-gradient-to-r ${isLight ? 'from-purple-600 to-indigo-600 text-white shadow-xl' : 'from-[#2a2a35] to-[#1a1a20] border border-[#caa5d8]/30 shadow-[0_0_30px_rgba(202,165,216,0.1)]'}`}>
                <div className="absolute top-0 right-0 p-8 opacity-10">
                    <Cpu size={250} />
                </div>
                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                    <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm shrink-0">
                        <Cpu size={48} className="text-white" />
                    </div>
                    <div>
                        <h3 className="text-2xl md:text-3xl font-black uppercase mb-4 text-white">
                            {PAGE_CONTENT.metaphor.title}
                        </h3>
                        <p className="text-lg md:text-xl leading-relaxed text-white/90 font-medium max-w-4xl">
                            "{PAGE_CONTENT.metaphor.text}"
                        </p>
                    </div>
                </div>
            </div>
        )}

      </div>

      <style>{`@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Russo+One&display=swap');`}</style>
    </div>
  );
};

export default RegulationsPage;