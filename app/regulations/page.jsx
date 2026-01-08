'use client';

import Link from 'next/link';
import { 
  Zap, Wind, Scale, Leaf, ShieldCheck, Gauge, 
  ArrowRight, Minimize2, BatteryCharging, FileText, ChevronLeft,
  CircleDot, Trophy, Cpu, Sparkles
} from 'lucide-react';
import { useTheme } from '@/components/layout/ThemeContext';

// --- COMPONENTE INTERNO: BackButton Estilizado ---
const BackButton = ({ to = "/", theme }) => {
  const isLight = theme === 'light';
  return (
    <Link
      href={to}
      className={`group mb-8 inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold transition-all hover:pl-2 px-5 py-2.5 rounded-full ${
        isLight
          ? 'text-gray-400 hover:text-pink-500 hover:bg-white/60 hover:shadow-sm bg-white/30 backdrop-blur-sm border border-white/60' 
          : 'text-cyan-400 hover:text-white hover:bg-cyan-900/20 border border-cyan-500/30 bg-black/40 backdrop-blur-md shadow-[0_0_15px_rgba(0,255,242,0.15)] hover:shadow-[0_0_25px_cyan] hover:border-cyan-400'
      }`}
    >
      <ChevronLeft size={16} />
      Voltar
    </Link>
  );
};

// --- DADOS DINÂMICOS (SEUS DADOS PRESERVADOS) ---
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

const RegulationsPage = () => {
  const { theme } = useTheme();
  const resolvedTheme = theme || 'light';
  const isLight = resolvedTheme === 'light';

  // --- PADRÕES DE FUNDO "PREMIUM/GIRLIE" vs "VAPORWAVE" ---
  const lightPattern = {
    backgroundColor: '#FFF5F8',
    backgroundImage: `
      radial-gradient(at 0% 0%, rgba(247, 184, 200, 0.3) 0px, transparent 50%),
      radial-gradient(at 100% 0%, rgba(216, 196, 240, 0.3) 0px, transparent 50%),
      conic-gradient(from 0deg at 50% 50%, rgba(247, 184, 200, 0.1) 0deg, transparent 60deg, rgba(216, 196, 240, 0.1) 120deg, transparent 180deg, rgba(247, 184, 200, 0.1) 240deg, transparent 300deg, rgba(216, 196, 240, 0.1) 360deg)
    `,
    backgroundSize: '100% 100%'
  };

  const darkPattern = {
    backgroundColor: '#050510',
    backgroundImage: `
      linear-gradient(rgba(0, 255, 242, 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(189, 0, 255, 0.05) 1px, transparent 1px)
    `,
    backgroundSize: '40px 40px'
  };

  // --- CLASSES DE ESTILO (Glassmorphism & Vaporwave) ---
  const cardClass = isLight
    ? 'bg-white/60 backdrop-blur-xl rounded-[2.5rem] shadow-[0_20px_40px_-10px_rgba(200,180,220,0.2)] border border-white/80 ring-1 ring-white/60 hover:shadow-[0_25px_60px_-10px_rgba(236,72,153,0.25)] hover:border-pink-200 transition-all duration-500'
    : 'bg-[#090912]/80 backdrop-blur-xl rounded-[2rem] border border-fuchsia-500/30 hover:border-cyan-400/50 shadow-[0_0_30px_rgba(189,0,255,0.15)] hover:shadow-[0_0_50px_rgba(0,255,242,0.2)] ring-1 ring-white/5 transition-all duration-500';

  const textMain = isLight ? 'text-gray-900' : 'text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]';
  const textSub = isLight ? 'text-gray-500' : 'text-cyan-100/80';
  const accentText = isLight ? 'text-purple-600' : 'text-fuchsia-400 drop-shadow-[0_0_5px_rgba(232,121,249,0.8)]';

  return (
    <div 
      className={`min-h-screen p-4 md:p-8 animate-in fade-in slide-in-from-bottom-4 duration-700 flex flex-col font-sans`} 
      style={isLight ? lightPattern : darkPattern}
    >
      
      {/* Luz de Fundo Decorativa */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden mix-blend-screen">
         <div className={`absolute top-[-20%] left-[-10%] w-[800px] h-[800px] rounded-full blur-[120px] opacity-20 ${isLight ? 'bg-pink-200' : 'bg-[#bd00ff]/30 animate-pulse'}`} />
         <div className={`absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[100px] opacity-20 ${isLight ? 'bg-purple-200' : 'bg-[#00fff2]/20 animate-pulse'}`} />
         {/* Vaporwave Horizon Line (Dark Mode Only) */}
         {!isLight && <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent shadow-[0_0_20px_cyan]" />}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <BackButton to="/" theme={resolvedTheme} />

        {/* --- HERO HEADER --- */}
        <div className="mb-16 text-center max-w-4xl mx-auto px-4 pt-4 relative">
          <span className={`inline-block px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 border ${isLight ? 'bg-white/50 border-purple-200 text-purple-600' : 'bg-[#bd00ff]/10 border-[#bd00ff]/30 text-fuchsia-400 shadow-[0_0_10px_rgba(189,0,255,0.3)]'}`}>
             {PAGE_CONTENT.hero.tag}
          </span>
          <h1 className={`text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-6 ${isLight ? textMain : 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-fuchsia-500 drop-shadow-[0_0_10px_rgba(0,255,242,0.4)]'}`} style={{ fontFamily: "'Russo One', sans-serif" }}>
            {PAGE_CONTENT.hero.title}
          </h1>
          <p className={`text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium ${textSub}`}>
            {PAGE_CONTENT.hero.description}
          </p>
        </div>

        {/* --- BENTO GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 md:gap-8">

          {/* 0. RESUMO TÉCNICO */}
          {PAGE_CONTENT.summary.show && (
             <div className={`lg:col-span-6 p-10 rounded-[2.5rem] relative overflow-hidden flex flex-col md:flex-row gap-8 items-start group ${cardClass}`}>
                
                {/* Elemento decorativo */}
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${isLight ? 'from-purple-100/50' : 'from-fuchsia-600/20'} to-transparent rounded-bl-[100%] pointer-events-none opacity-60`} />

                <div className={`p-5 rounded-2xl shrink-0 shadow-lg ${isLight ? 'bg-white text-purple-500' : 'bg-[#1a1a20] text-fuchsia-400 border border-fuchsia-500/30 shadow-[0_0_15px_rgba(232,121,249,0.3)]'}`}>
                   <FileText size={36} strokeWidth={1.5} />
                </div>
                <div className="relative z-10">
                   <h3 className={`text-3xl font-black uppercase mb-4 tracking-tight ${textMain}`}>{PAGE_CONTENT.summary.title}</h3>
                   <p className={`text-lg leading-relaxed font-light ${textSub}`}>
                      {PAGE_CONTENT.summary.text}
                   </p>
                </div>
             </div>
          )}

          {/* 1. MOTOR (PU) */}
          <div className={`lg:col-span-4 p-10 rounded-[2.5rem] relative overflow-hidden group ${isLight ? 'bg-gradient-to-br from-[#E0F7FA] to-white shadow-xl border border-white' : 'bg-[#090912]/90 border border-cyan-500/30 shadow-[0_0_30px_rgba(0,255,242,0.15)] ring-1 ring-cyan-400/20'}`}>
              
              <div className={`absolute top-[-20px] right-[-20px] p-10 opacity-5 group-hover:opacity-10 transition-opacity duration-700 rotate-12 ${isLight ? 'text-teal-900' : 'text-cyan-400'}`}>
                <Zap size={240} />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                   <div className={`p-3.5 rounded-2xl shadow-md ${isLight ? 'bg-white text-teal-600' : 'bg-[#1a1a20] text-cyan-400 border border-cyan-500/30 shadow-[0_0_10px_cyan]'}`}>
                      <BatteryCharging size={28} />
                   </div>
                   <h3 className={`text-3xl font-black uppercase tracking-tight ${isLight ? 'text-teal-900' : 'text-white drop-shadow-[0_0_5px_rgba(0,255,242,0.8)]'}`}>
                      {PAGE_CONTENT.cards.engine.title}
                   </h3>
                </div>
                
                <p className={`text-lg mb-10 max-w-lg font-medium leading-relaxed ${isLight ? 'text-teal-800/80' : 'text-cyan-100/80'}`}>
                   {PAGE_CONTENT.cards.engine.desc}
                </p>

                <div className="space-y-8 max-w-lg">
                   {PAGE_CONTENT.cards.engine.stats.map((stat, idx) => (
                     <div key={idx}>
                        <div className={`flex justify-between text-xs font-bold uppercase mb-3 tracking-widest ${isLight ? 'text-teal-900' : 'text-cyan-300'}`}>
                           <span>{stat.label}</span>
                           <span>{stat.value}</span>
                        </div>
                        <div className={`w-full h-4 rounded-full overflow-hidden p-1 ${isLight ? 'bg-white/50 shadow-inner' : 'bg-[#1a1a20] border border-cyan-500/30'}`}>
                           <div 
                             className={`h-full rounded-full transition-all duration-1000 ${isLight ? 'bg-teal-500 shadow-md' : idx === 0 ? 'bg-white shadow-[0_0_10px_white]' : 'bg-fuchsia-500 shadow-[0_0_15px_#d946ef]'}`} 
                             style={{ width: `${stat.percent}%` }}
                           ></div>
                        </div>
                     </div>
                   ))}
                   <div className={`text-[10px] font-mono uppercase tracking-widest opacity-60 mt-4 border-t pt-4 ${isLight ? 'border-teal-900/10 text-teal-900' : 'border-cyan-500/30 text-cyan-400'}`}>
                       * {PAGE_CONTENT.cards.engine.extra}
                   </div>
                </div>
              </div>
          </div>

          {/* 2. COMBUSTÍVEL */}
          <div className={`lg:col-span-2 p-10 rounded-[2.5rem] flex flex-col justify-between group ${cardClass}`}>
              <div>
                 <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-md transition-transform group-hover:scale-110 ${isLight ? 'bg-green-50 text-green-600' : 'bg-[#1a1a20] text-green-400 border border-green-500/30 shadow-[0_0_10px_rgba(74,222,128,0.3)]'}`}>
                    <Leaf size={28} strokeWidth={1.5} />
                 </div>
                 <h3 className={`text-2xl font-black mb-3 leading-none ${textMain}`}>{PAGE_CONTENT.cards.fuel.title}</h3>
                 <p className={`text-sm leading-relaxed font-medium ${textSub}`}>
                    {PAGE_CONTENT.cards.fuel.desc}
                 </p>
              </div>
              <div className={`mt-8 pt-8 border-t border-dashed ${isLight ? 'border-gray-200/50' : 'border-white/10'}`}>
                 <div className={`text-5xl font-black mb-2 tracking-tighter ${isLight ? 'text-green-500' : 'text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600'}`}>{PAGE_CONTENT.cards.fuel.tag}</div>
                 <span className={`text-[10px] uppercase font-black tracking-[0.2em] opacity-40 ${textMain}`}>{PAGE_CONTENT.cards.fuel.subtag}</span>
              </div>
          </div>

          {/* 3. AERODINÂMICA ATIVA */}
          <div className={`lg:col-span-3 p-10 rounded-[2.5rem] group ${cardClass}`}>
              <div className="flex items-center gap-4 mb-8">
                 <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-md ${isLight ? 'bg-blue-50 text-blue-600' : 'bg-[#1a1a20] text-cyan-400 border border-cyan-500/30 shadow-[0_0_10px_rgba(0,255,242,0.3)]'}`}>
                    <Wind size={28} strokeWidth={1.5} />
                 </div>
                 <h3 className={`text-2xl font-black uppercase tracking-tight ${textMain}`}>{PAGE_CONTENT.cards.aero.title}</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                 <div className={`p-5 rounded-2xl transition-colors ${isLight ? 'bg-white/50 hover:bg-white border border-white' : 'bg-[#1a1a20]/50 hover:bg-[#1a1a20] border border-cyan-500/30 hover:border-cyan-400 hover:shadow-[0_0_10px_rgba(0,255,242,0.2)]'}`}>
                    <span className={`text-xs font-black uppercase block mb-2 tracking-wider ${isLight ? 'text-blue-500' : 'text-cyan-400'}`}>
                      {PAGE_CONTENT.cards.aero.zMode.title}
                    </span>
                    <p className={`text-xs leading-relaxed font-medium ${textSub}`}>
                      {PAGE_CONTENT.cards.aero.zMode.desc}
                    </p>
                 </div>
                 <div className={`p-5 rounded-2xl transition-colors ${isLight ? 'bg-white/50 hover:bg-white border border-white' : 'bg-[#1a1a20]/50 hover:bg-[#1a1a20] border border-fuchsia-500/30 hover:border-fuchsia-400 hover:shadow-[0_0_10px_rgba(232,121,249,0.2)]'}`}>
                    <span className={`text-xs font-black uppercase block mb-2 tracking-wider ${isLight ? 'text-purple-500' : 'text-fuchsia-400'}`}>
                      {PAGE_CONTENT.cards.aero.xMode.title}
                    </span>
                    <p className={`text-xs leading-relaxed font-medium ${textSub}`}>
                      {PAGE_CONTENT.cards.aero.xMode.desc}
                    </p>
                 </div>
              </div>
              <div className={`text-[10px] font-bold uppercase tracking-widest opacity-40 text-center ${textMain}`}>
                  {PAGE_CONTENT.cards.aero.stats}
              </div>
          </div>

          {/* 4. CHASSIS */}
          <div className={`lg:col-span-3 p-10 rounded-[2.5rem] ${cardClass}`}>
              <div className="flex items-center gap-4 mb-8">
                 <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-md ${isLight ? 'bg-orange-50 text-orange-600' : 'bg-[#1a1a20] text-orange-400 border border-orange-500/30 shadow-[0_0_10px_rgba(251,146,60,0.3)]'}`}>
                    <Minimize2 size={28} strokeWidth={1.5} />
                 </div>
                 <h3 className={`text-2xl font-black uppercase tracking-tight ${textMain}`}>{PAGE_CONTENT.cards.chassis.title}</h3>
              </div>

              <div className="space-y-4">
                 {PAGE_CONTENT.cards.chassis.specs.map((spec, i) => (
                   <div key={i} className={`flex items-center justify-between p-4 rounded-xl transition-all ${isLight ? 'bg-white/40 hover:bg-white hover:shadow-sm' : 'bg-[#1a1a20] hover:bg-[#252530] border border-white/5'}`}>
                      <span className={`text-sm font-bold uppercase tracking-wide ${textSub}`}>{spec.label}</span>
                      <span className={`font-black text-lg ${textMain}`}>
                        {spec.val} <span className="text-xs font-medium opacity-40 ml-1">{spec.diff}</span>
                      </span>
                   </div>
                 ))}
              </div>
          </div>

          {/* 5. OVERTAKE (Manual Override) */}
          <div 
              className={`lg:col-span-3 p-10 rounded-[2.5rem] relative overflow-hidden flex flex-col justify-between cursor-pointer group transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl 
              ${isLight 
                ? 'bg-gradient-to-br from-white to-red-50 border border-white shadow-lg shadow-red-100/50' 
                : 'bg-[#090912] border border-red-500/30 hover:border-red-500 shadow-[0_0_30px_rgba(239,68,68,0.15)] hover:shadow-[0_0_50px_rgba(239,68,68,0.3)]'
              }`}
          >
              <div className="flex items-start justify-between mb-6">
                 <div>
                    <span className={`text-[10px] font-black uppercase px-3 py-1.5 rounded-lg mb-3 inline-block tracking-widest ${isLight ? 'bg-red-100 text-red-600' : 'bg-red-900/20 text-red-400 border border-red-500/50 shadow-[0_0_10px_red]'}`}>
                      {PAGE_CONTENT.cards.overtake.tag}
                    </span>
                    <h3 className={`text-3xl font-black uppercase mb-2 tracking-tight ${textMain}`}>
                      {PAGE_CONTENT.cards.overtake.title}
                    </h3>
                 </div>
                 <div className={`p-4 rounded-full shadow-md ${isLight ? 'bg-white text-red-500' : 'bg-[#1a1a20] text-red-500 border border-red-500/30 shadow-[0_0_15px_rgba(239,68,68,0.4)]'}`}>
                     <Gauge size={28} />
                 </div>
              </div>
              <p className={`text-sm md:text-base opacity-80 leading-relaxed font-medium ${textSub}`}>
                 {PAGE_CONTENT.cards.overtake.desc}
              </p>
          </div>

          {/* 6. SEGURANÇA */}
          <div className={`lg:col-span-3 p-10 rounded-[2.5rem] flex flex-col justify-center text-left ${cardClass}`}>
              <div className="flex items-center gap-4 mb-6">
                 <ShieldCheck size={40} strokeWidth={1.5} className={`opacity-80 ${isLight ? 'text-gray-400' : 'text-fuchsia-400 drop-shadow-[0_0_5px_rgba(232,121,249,0.5)]'}`} />
                 <h3 className={`text-2xl font-black uppercase tracking-tight ${textMain}`}>{PAGE_CONTENT.cards.safety.title}</h3>
              </div>
              <p className={`text-base font-medium opacity-70 leading-relaxed ${textSub}`}>
                {PAGE_CONTENT.cards.safety.desc}
              </p>
          </div>

          {/* 7. PNEUS */}
          <div className={`lg:col-span-2 p-10 rounded-[2.5rem] flex flex-col justify-between ${cardClass}`}>
              <div>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-sm ${isLight ? 'bg-gray-100 text-gray-600' : 'bg-[#1a1a20] text-white border border-white/10'}`}>
                   <CircleDot size={24} />
                </div>
                <h3 className={`text-xl font-black uppercase mb-3 ${textMain}`}>{PAGE_CONTENT.cards.tires.title}</h3>
                <p className={`text-xs mb-6 font-medium opacity-60 ${textSub}`}>{PAGE_CONTENT.cards.tires.desc}</p>
              </div>
              <div className="space-y-3">
                 <div className={`text-xs font-bold px-4 py-3 rounded-xl border ${isLight ? 'bg-gray-50 border-gray-100 text-gray-600' : 'bg-[#1a1a20] border-white/10 text-gray-300'} flex justify-between items-center`}>
                    <span className="opacity-60">Dianteiros</span>
                    <span>{PAGE_CONTENT.cards.tires.front}</span>
                 </div>
                 <div className={`text-xs font-bold px-4 py-3 rounded-xl border ${isLight ? 'bg-gray-50 border-gray-100 text-gray-600' : 'bg-[#1a1a20] border-white/10 text-gray-300'} flex justify-between items-center`}>
                    <span className="opacity-60">Traseiros</span>
                    <span>{PAGE_CONTENT.cards.tires.rear}</span>
                 </div>
              </div>
          </div>

          {/* 8. FABRICANTES */}
          <div className={`lg:col-span-4 p-10 rounded-[2.5rem] ${cardClass} flex flex-col justify-center`}>
              <div className="flex items-center gap-4 mb-8">
                 <Trophy size={28} className={isLight ? 'text-yellow-500' : 'text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.6)]'} />
                 <h3 className={`text-2xl font-black uppercase tracking-tight ${textMain}`}>{PAGE_CONTENT.cards.manufacturers.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                 {PAGE_CONTENT.cards.manufacturers.list.map((brand, idx) => (
                    <span 
                      key={idx}
                      className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all hover:scale-105 ${
                        isLight 
                          ? 'bg-white text-gray-600 border border-gray-200 shadow-sm hover:border-gray-300' 
                          : 'bg-[#1a1a20] text-gray-300 border border-white/10 hover:bg-[#252530] hover:border-cyan-500/30 hover:text-cyan-300 hover:shadow-[0_0_10px_rgba(0,255,242,0.2)]'
                      }`}
                    >
                       {brand}
                    </span>
                 ))}
              </div>
          </div>

          {/* 9. METÁFORA (NOVA SEÇÃO DESTAQUE) */}
          {PAGE_CONTENT.metaphor.show && (
              <div className={`lg:col-span-6 p-10 md:p-16 rounded-[2.5rem] relative overflow-hidden bg-gradient-to-br ${isLight ? 'from-indigo-600 to-purple-700 text-white shadow-2xl shadow-indigo-200' : 'from-[#090912] to-[#1a1a24] border border-fuchsia-500/30 shadow-[0_0_50px_rgba(189,0,255,0.2)]'}`}>
                 
                 <div className={`absolute top-0 right-0 p-10 opacity-10 pointer-events-none ${isLight ? 'text-white' : 'text-fuchsia-500'}`}>
                    <Cpu size={300} />
                 </div>
                 
                 {/* Partículas decorativas */}
                 <div className={`absolute top-10 right-20 w-4 h-4 rounded-full animate-pulse ${isLight ? 'bg-white/30' : 'bg-cyan-400 shadow-[0_0_10px_cyan]'}`} />
                 <div className={`absolute bottom-20 left-10 w-2 h-2 rounded-full animate-pulse ${isLight ? 'bg-white/30' : 'bg-fuchsia-400 shadow-[0_0_10px_magenta]'}`} style={{ animationDelay: '0.5s' }} />

                 <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center">
                    <div className={`p-6 rounded-full backdrop-blur-md shrink-0 ring-1 ${isLight ? 'bg-white/10 ring-white/20' : 'bg-[#1a1a20] ring-fuchsia-500/50 shadow-[0_0_20px_rgba(232,121,249,0.4)]'}`}>
                       <Cpu size={56} className="text-white" />
                    </div>
                    <div>
                       <div className="flex items-center gap-3 mb-4">
                          <Sparkles size={20} className={`${isLight ? 'text-purple-300' : 'text-cyan-300'} animate-pulse`} />
                          <h3 className={`text-sm font-black uppercase tracking-[0.3em] ${isLight ? 'text-purple-200' : 'text-fuchsia-300'}`}>
                             Analogia
                          </h3>
                       </div>
                       <h3 className={`text-3xl md:text-5xl font-black uppercase mb-6 tracking-tight leading-none ${isLight ? 'text-white' : 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-300 drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]'}`}>
                          {PAGE_CONTENT.metaphor.title}
                       </h3>
                       <p className={`text-lg md:text-xl leading-relaxed font-medium max-w-4xl ${isLight ? 'text-white/90' : 'text-cyan-100/90'}`}>
                          "{PAGE_CONTENT.metaphor.text}"
                       </p>
                    </div>
                 </div>
              </div>
          )}

        </div>

      </div>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Russo+One&display=swap');`}</style>
    </div>
  );
};

export default RegulationsPage;
