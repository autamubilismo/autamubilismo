'use client';

import Link from 'next/link';
import {
  Zap, Wind, Leaf, ShieldCheck, Gauge,
  BatteryCharging, ChevronLeft, ChevronRight
} from 'lucide-react';
import { useTheme } from '@/components/layout/ThemeContext';
import { REGULATIONS_INDEX } from '@/data/regulationsContent';

// --- MAPEAMENTO DE ÍCONES ---
const ICON_MAP = {
  BatteryCharging,
  Zap,
  Leaf,
  Wind,
  Gauge,
  ShieldCheck
};

// --- PALETA COTTAGECORE (Light Mode) ---
const COTTAGE = {
  darkGreen: '#0A3323',
  moss: '#D3968C',
  beige: '#F7F4D5',
  rosy: '#D3968C',
  midnight: '#105666',
};

// --- COMPONENTE INTERNO: BackButton Estilizado ---
const BackButton = ({ to = "/", theme }) => {
  const isLight = theme === 'light';
  return (
    <Link
      href={to}
      className={`group mb-8 inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold transition-all hover:pl-2 px-5 py-2.5 rounded-full ${
        isLight
          ? 'text-[#105666]/60 hover:text-[#0A3323] hover:bg-white/60 hover:shadow-sm bg-white/40 backdrop-blur-sm border border-[#D3968C]/20'
          : 'text-cyan-400 hover:text-white hover:bg-cyan-900/20 border border-cyan-500/30 bg-black/40 backdrop-blur-md shadow-[0_0_15px_rgba(0,255,242,0.15)] hover:shadow-[0_0_25px_cyan] hover:border-cyan-400'
      }`}
    >
      <ChevronLeft size={16} />
      Voltar
    </Link>
  );
};

// --- CORES POR TEMA (Cottagecore Light / Vaporwave Dark) ---
const getColorClasses = (color, isLight) => {
  const colors = {
    cyan: {
      light: 'bg-[#F7F4D5]/80 text-[#0A3323] border-[#D3968C]/30 hover:border-[#D3968C] hover:shadow-[#D3968C]/20',
      dark: 'bg-[#1a1a20] text-cyan-400 border-cyan-500/30 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,255,242,0.3)]',
      tagLight: 'bg-[#D3968C]/20 text-[#0A3323]',
      tagDark: 'bg-cyan-900/30 text-cyan-300 border border-cyan-500/50'
    },
    fuchsia: {
      light: 'bg-[#F7F4D5]/80 text-[#0A3323] border-[#D3968C]/40 hover:border-[#D3968C] hover:shadow-[#D3968C]/20',
      dark: 'bg-[#1a1a20] text-fuchsia-400 border-fuchsia-500/30 hover:border-fuchsia-400 hover:shadow-[0_0_20px_rgba(232,121,249,0.3)]',
      tagLight: 'bg-[#D3968C]/20 text-[#0A3323]',
      tagDark: 'bg-fuchsia-900/30 text-fuchsia-300 border border-fuchsia-500/50'
    },
    green: {
      light: 'bg-[#F7F4D5]/80 text-[#0A3323] border-[#D3968C]/40 hover:border-[#0A3323] hover:shadow-[#D3968C]/20',
      dark: 'bg-[#1a1a20] text-green-400 border-green-500/30 hover:border-green-400 hover:shadow-[0_0_20px_rgba(74,222,128,0.3)]',
      tagLight: 'bg-[#0A3323]/10 text-[#0A3323]',
      tagDark: 'bg-green-900/30 text-green-300 border border-green-500/50'
    },
    blue: {
      light: 'bg-[#F7F4D5]/80 text-[#0A3323] border-[#105666]/30 hover:border-[#105666] hover:shadow-[#105666]/20',
      dark: 'bg-[#1a1a20] text-blue-400 border-blue-500/30 hover:border-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]',
      tagLight: 'bg-[#105666]/15 text-[#105666]',
      tagDark: 'bg-blue-900/30 text-blue-300 border border-blue-500/50'
    },
    red: {
      light: 'bg-[#F7F4D5]/80 text-[#0A3323] border-[#D3968C]/50 hover:border-[#D3968C] hover:shadow-[#D3968C]/30',
      dark: 'bg-[#1a1a20] text-red-400 border-red-500/30 hover:border-red-400 hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]',
      tagLight: 'bg-[#D3968C]/25 text-[#0A3323]',
      tagDark: 'bg-red-900/30 text-red-300 border border-red-500/50'
    },
    orange: {
      light: 'bg-[#F7F4D5]/80 text-[#0A3323] border-[#D3968C]/40 hover:border-[#D3968C] hover:shadow-[#D3968C]/20',
      dark: 'bg-[#1a1a20] text-orange-400 border-orange-500/30 hover:border-orange-400 hover:shadow-[0_0_20px_rgba(251,146,60,0.3)]',
      tagLight: 'bg-[#D3968C]/15 text-[#0A3323]',
      tagDark: 'bg-orange-900/30 text-orange-300 border border-orange-500/50'
    }
  };
  return colors[color] || colors.cyan;
};

// --- CARD DE NAVEGAÇÃO ---
const NavigationCard = ({ card, theme }) => {
  const isLight = theme === 'light';
  const Icon = ICON_MAP[card.icon] || Zap;
  const colorClasses = getColorClasses(card.color, isLight);

  return (
    <Link
      href={`/regulations/${card.slug}`}
      className={`group relative p-8 rounded-[2rem] border-2 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden flex flex-col justify-between min-h-[280px] ${
        isLight
          ? `bg-white/70 backdrop-blur-xl ${colorClasses.light}`
          : `bg-[#090912]/90 backdrop-blur-xl ${colorClasses.dark}`
      }`}
    >
      {/* Ícone de fundo decorativo */}
      <div className={`absolute -right-6 -bottom-6 opacity-5 group-hover:opacity-10 transition-opacity duration-500 rotate-12 group-hover:rotate-0 ${isLight ? 'text-[#0A3323]' : 'text-white'}`}>
        <Icon size={160} />
      </div>

      <div className="relative z-10">
        {/* Tag */}
        <span className={`inline-block px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest mb-4 ${
          isLight ? colorClasses.tagLight : colorClasses.tagDark
        }`}>
          {card.tag}
        </span>

        {/* Ícone e Título */}
        <div className="flex items-center gap-3 mb-4">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-md transition-transform group-hover:scale-110 ${
            isLight ? 'bg-white text-[#D3968C]' : 'bg-[#252530]'
          }`}>
            <Icon size={24} />
          </div>
          <h3 className={`text-xl font-black uppercase tracking-tight ${isLight ? 'text-[#0A3323]' : 'text-white'}`}>
            {card.title}
          </h3>
        </div>

        {/* Descrição */}
        <p className={`text-sm leading-relaxed font-medium ${isLight ? 'text-[#105666]/70' : 'text-gray-400'}`}>
          {card.description}
        </p>
      </div>

      {/* Call to Action */}
      <div className={`relative z-10 flex items-center gap-2 mt-6 text-xs font-bold uppercase tracking-wider transition-all group-hover:gap-4 ${
        isLight ? 'text-[#D3968C]/60 group-hover:text-[#0A3323]' : 'text-gray-500 group-hover:text-white'
      }`}>
        Explorar <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
};

const RegulationsIndexPage = () => {
  const { theme } = useTheme();
  const resolvedTheme = theme || 'light';
  const isLight = resolvedTheme === 'light';

  // --- PADRÕES DE FUNDO ---
  // Cottagecore: tons suaves de beige com toques de verde e terracota
  const lightPattern = {
    backgroundColor: '#F7F4D5',
    backgroundImage: `
      radial-gradient(at 0% 0%, rgba(211, 150, 140, 0.2) 0px, transparent 50%),
      radial-gradient(at 100% 0%, rgba(211, 150, 140, 0.2) 0px, transparent 50%),
      radial-gradient(at 50% 100%, rgba(16, 86, 102, 0.1) 0px, transparent 50%)
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

  const textMain = isLight ? 'text-[#0A3323]' : 'text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]';
  const textSub = isLight ? 'text-[#105666]/70' : 'text-cyan-100/80';

  return (
    <div
      className={`min-h-screen p-4 md:p-8 animate-in fade-in slide-in-from-bottom-4 duration-700 flex flex-col font-sans`}
      style={isLight ? lightPattern : darkPattern}
    >

      {/* Luz de Fundo Decorativa */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden mix-blend-multiply">
         <div className={`absolute top-[-20%] left-[-10%] w-[800px] h-[800px] rounded-full blur-[120px] opacity-20 ${isLight ? 'bg-[#D3968C]' : 'bg-[#bd00ff]/30 animate-pulse'}`} />
         <div className={`absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[100px] opacity-20 ${isLight ? 'bg-[#D3968C]' : 'bg-[#00fff2]/20 animate-pulse'}`} />
         {!isLight && <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent shadow-[0_0_20px_cyan]" />}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <BackButton to="/" theme={resolvedTheme} />

        {/* --- HERO HEADER --- */}
        <div className="mb-16 text-center max-w-4xl mx-auto px-4 pt-4 relative">
          <span className={`inline-block px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 border ${isLight ? 'bg-white/60 border-[#D3968C]/30 text-[#D3968C]' : 'bg-[#bd00ff]/10 border-[#bd00ff]/30 text-fuchsia-400 shadow-[0_0_10px_rgba(189,0,255,0.3)]'}`}>
             {REGULATIONS_INDEX.hero.tag}
          </span>
          <h1 className={`text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-6 ${isLight ? 'text-[#0A3323]' : 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-fuchsia-500 drop-shadow-[0_0_10px_rgba(0,255,242,0.4)]'}`} style={{ fontFamily: "'Russo One', sans-serif" }}>
            {REGULATIONS_INDEX.hero.title}
          </h1>
          <p className={`text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium ${textSub}`}>
            {REGULATIONS_INDEX.hero.description}
          </p>
        </div>

        {/* --- 3 PILARES --- */}
        {REGULATIONS_INDEX.summary.show && (
           <div className="mb-12">
              <h2 className={`text-sm font-black uppercase tracking-[0.3em] mb-6 text-center ${isLight ? 'text-[#D3968C]' : 'text-cyan-400/60'}`}>
                {REGULATIONS_INDEX.summary.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {REGULATIONS_INDEX.summary.pillars.map((pillar, idx) => {
                  const PillarIcon = ICON_MAP[pillar.icon] || Zap;
                  return (
                    <div
                      key={idx}
                      className={`p-6 rounded-2xl text-center transition-all duration-300 hover:-translate-y-1 ${
                        isLight
                          ? 'bg-white/70 backdrop-blur-xl border border-[#D3968C]/20 shadow-lg hover:shadow-xl hover:border-[#D3968C]/40'
                          : 'bg-[#090912]/80 backdrop-blur-xl border border-fuchsia-500/30 hover:border-cyan-400/50 shadow-[0_0_20px_rgba(189,0,255,0.1)]'
                      }`}
                    >
                      <div className={`w-14 h-14 mx-auto rounded-2xl flex items-center justify-center mb-4 ${
                        isLight ? 'bg-gradient-to-br from-[#D3968C]/20 to-[#D3968C]/20 text-[#0A3323]' : 'bg-[#1a1a20] text-cyan-400 border border-cyan-500/30'
                      }`}>
                        <PillarIcon size={28} />
                      </div>
                      <div className={`text-3xl font-black mb-1 ${
                        isLight ? 'text-[#0A3323]' : 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400'
                      }`}>
                        {pillar.value}
                      </div>
                      <div className={`text-xs font-bold uppercase tracking-wider mb-2 ${isLight ? 'text-[#D3968C]' : 'text-fuchsia-400'}`}>
                        {pillar.label}
                      </div>
                      <p className={`text-sm ${isLight ? 'text-[#105666]/70' : 'text-gray-400'}`}>
                        {pillar.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
           </div>
        )}

        {/* --- GRID DE NAVEGAÇÃO --- */}
        <div className="mb-8">
          <h2 className={`text-sm font-black uppercase tracking-[0.3em] mb-8 text-center ${isLight ? 'text-[#D3968C]' : 'text-cyan-400/60'}`}>
            Explore os Pilares do Regulamento
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REGULATIONS_INDEX.navigationCards.map((card) => (
              <NavigationCard key={card.slug} card={card} theme={resolvedTheme} />
            ))}
          </div>
        </div>

      </div>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Russo+One&display=swap');`}</style>
    </div>
  );
};

export default RegulationsIndexPage;
