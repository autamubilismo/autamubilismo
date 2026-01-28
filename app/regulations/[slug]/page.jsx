'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Zap, Wind, Leaf, ShieldCheck, Gauge,
  ArrowRight, ArrowLeft, BatteryCharging, FileText, ChevronLeft,
  Minimize2, Trophy, Cpu, Sparkles
} from 'lucide-react';
import { useTheme } from '@/components/layout/ThemeContext';
import { getRegulationBySlug, getAdjacentPages } from '@/data/regulationsContent';

// --- COMPONENTE: BackButton ---
const BackButton = ({ to = "/regulations", theme, label = "Voltar" }) => {
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
      {label}
    </Link>
  );
};

// --- COMPONENTE: Navegação entre páginas ---
const PageNavigation = ({ prev, next, theme }) => {
  const isLight = theme === 'light';

  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-16">
      {prev ? (
        <Link
          href={`/regulations/${prev.slug}`}
          className={`flex-1 group p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
            isLight
              ? 'bg-white/60 border-[#D3968C]/20 hover:border-[#D3968C]/50 hover:shadow-lg'
              : 'bg-[#090912]/80 border-fuchsia-500/30 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(0,255,242,0.15)]'
          }`}
        >
          <div className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-2 ${isLight ? 'text-[#D3968C]' : 'text-gray-500'}`}>
            <ArrowLeft size={14} /> Anterior
          </div>
          <div className={`font-black text-lg ${isLight ? 'text-[#0A3323]' : 'text-white'}`}>
            {prev.hero.title.split(':')[0]}
          </div>
        </Link>
      ) : (
        <div className="flex-1" />
      )}

      {next ? (
        <Link
          href={`/regulations/${next.slug}`}
          className={`flex-1 group p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 text-right ${
            isLight
              ? 'bg-white/60 border-[#D3968C]/20 hover:border-[#D3968C]/50 hover:shadow-lg'
              : 'bg-[#090912]/80 border-fuchsia-500/30 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(0,255,242,0.15)]'
          }`}
        >
          <div className={`flex items-center justify-end gap-2 text-xs font-bold uppercase tracking-wider mb-2 ${isLight ? 'text-[#D3968C]' : 'text-gray-500'}`}>
            Próximo <ArrowRight size={14} />
          </div>
          <div className={`font-black text-lg ${isLight ? 'text-[#0A3323]' : 'text-white'}`}>
            {next.hero.title.split(':')[0]}
          </div>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
    </div>
  );
};

const RegulationSubpage = () => {
  const params = useParams();
  const slug = params?.slug;
  const { theme } = useTheme();
  const resolvedTheme = theme || 'light';
  const isLight = resolvedTheme === 'light';

  const pageData = getRegulationBySlug(slug);
  const { prev, next } = getAdjacentPages(slug);

  if (!pageData) {
    notFound();
  }

  // --- PADRÕES DE FUNDO (Cottagecore Light / Vaporwave Dark) ---
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

  const cardClass = isLight
    ? 'bg-white/60 backdrop-blur-xl rounded-[2.5rem] shadow-[0_20px_40px_-10px_rgba(211, 150, 140, 0.15)] border border-[#D3968C]/20 ring-1 ring-white/60 hover:shadow-[0_25px_60px_-10px_rgba(211, 150, 140, 0.25)] hover:border-[#D3968C]/40 transition-all duration-500'
    : 'bg-[#090912]/80 backdrop-blur-xl rounded-[2rem] border border-fuchsia-500/30 hover:border-cyan-400/50 shadow-[0_0_30px_rgba(189,0,255,0.15)] hover:shadow-[0_0_50px_rgba(0,255,242,0.2)] ring-1 ring-white/5 transition-all duration-500';

  const textMain = isLight ? 'text-[#0A3323]' : 'text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]';
  const textSub = isLight ? 'text-[#105666]/70' : 'text-cyan-100/80';

  const { hero, summary, metaphor, cards } = pageData;

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
        <BackButton to="/regulations" theme={resolvedTheme} label="Regulamentos" />

        {/* --- HERO HEADER --- */}
        <div className="mb-16 text-center max-w-4xl mx-auto px-4 pt-4 relative">
          <span className={`inline-block px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 border ${isLight ? 'bg-white/60 border-[#D3968C]/30 text-[#D3968C]' : 'bg-[#bd00ff]/10 border-[#bd00ff]/30 text-fuchsia-400 shadow-[0_0_10px_rgba(189,0,255,0.3)]'}`}>
             {hero.tag}
          </span>
          <h1 className={`text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-6 ${isLight ? 'text-[#0A3323]' : 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-fuchsia-500 drop-shadow-[0_0_10px_rgba(0,255,242,0.4)]'}`} style={{ fontFamily: "'Russo One', sans-serif" }}>
            {hero.title}
          </h1>
          <p className={`text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium ${textSub}`}>
            {hero.description}
          </p>
        </div>

        {/* --- BENTO GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 md:gap-8">

          {/* RESUMO TÉCNICO */}
          {summary?.show && (
             <div className={`lg:col-span-6 p-10 rounded-[2.5rem] relative overflow-hidden flex flex-col md:flex-row gap-8 items-start group ${cardClass}`}>
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${isLight ? 'from-[#D3968C]/20' : 'from-fuchsia-600/20'} to-transparent rounded-bl-[100%] pointer-events-none opacity-60`} />
                <div className={`p-5 rounded-2xl shrink-0 shadow-lg ${isLight ? 'bg-white text-[#D3968C]' : 'bg-[#1a1a20] text-fuchsia-400 border border-fuchsia-500/30 shadow-[0_0_15px_rgba(232,121,249,0.3)]'}`}>
                   <FileText size={36} strokeWidth={1.5} />
                </div>
                <div className="relative z-10">
                   <h3 className={`text-3xl font-black uppercase mb-4 tracking-tight ${textMain}`}>{summary.title}</h3>
                   <p className={`text-lg leading-relaxed font-light ${textSub}`}>
                      {summary.text}
                   </p>
                </div>
             </div>
          )}

          {/* CARD ENGINE */}
          {cards?.engine && (
            <div className={`lg:col-span-4 p-10 rounded-[2.5rem] relative overflow-hidden group ${isLight ? 'bg-gradient-to-br from-[#F7F4D5] to-white shadow-xl border border-[#D3968C]/20' : 'bg-[#090912]/90 border border-cyan-500/30 shadow-[0_0_30px_rgba(0,255,242,0.15)] ring-1 ring-cyan-400/20'}`}>
                <div className={`absolute top-[-20px] right-[-20px] p-10 opacity-5 group-hover:opacity-10 transition-opacity duration-700 rotate-12 ${isLight ? 'text-[#0A3323]' : 'text-cyan-400'}`}>
                  <Zap size={240} />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                     <div className={`p-3.5 rounded-2xl shadow-md ${isLight ? 'bg-white text-[#D3968C]' : 'bg-[#1a1a20] text-cyan-400 border border-cyan-500/30 shadow-[0_0_10px_cyan]'}`}>
                        <BatteryCharging size={28} />
                     </div>
                     <h3 className={`text-3xl font-black uppercase tracking-tight ${isLight ? 'text-[#0A3323]' : 'text-white drop-shadow-[0_0_5px_rgba(0,255,242,0.8)]'}`}>
                        {cards.engine.title}
                     </h3>
                  </div>
                  <p className={`text-lg mb-10 max-w-lg font-medium leading-relaxed ${isLight ? 'text-[#105666]/80' : 'text-cyan-100/80'}`}>
                     {cards.engine.desc}
                  </p>
                  {cards.engine.stats && (
                    <div className="space-y-8 max-w-lg">
                       {cards.engine.stats.map((stat, idx) => (
                         <div key={idx}>
                            <div className={`flex justify-between text-xs font-bold uppercase mb-3 tracking-widest ${isLight ? 'text-[#0A3323]' : 'text-cyan-300'}`}>
                               <span>{stat.label}</span>
                               <span>{stat.value}</span>
                            </div>
                            <div className={`w-full h-4 rounded-full overflow-hidden p-1 ${isLight ? 'bg-white/50 shadow-inner' : 'bg-[#1a1a20] border border-cyan-500/30'}`}>
                               <div
                                 className={`h-full rounded-full transition-all duration-1000 ${isLight ? 'bg-[#D3968C] shadow-md' : idx === 0 ? 'bg-white shadow-[0_0_10px_white]' : 'bg-fuchsia-500 shadow-[0_0_15px_#d946ef]'}`}
                                 style={{ width: `${stat.percent}%` }}
                               ></div>
                            </div>
                         </div>
                       ))}
                       {cards.engine.extra && (
                         <div className={`text-[10px] font-mono uppercase tracking-widest opacity-60 mt-4 border-t pt-4 ${isLight ? 'border-[#0A3323]/10 text-[#0A3323]' : 'border-cyan-500/30 text-cyan-400'}`}>
                             * {cards.engine.extra}
                         </div>
                       )}
                    </div>
                  )}
                </div>
            </div>
          )}

          {/* CARD FUEL */}
          {cards?.fuel && (
            <div className={`lg:col-span-2 p-10 rounded-[2.5rem] flex flex-col justify-between group ${cardClass}`}>
                <div>
                   <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-md transition-transform group-hover:scale-110 ${isLight ? 'bg-[#0A3323]/10 text-[#0A3323]' : 'bg-[#1a1a20] text-green-400 border border-green-500/30 shadow-[0_0_10px_rgba(74,222,128,0.3)]'}`}>
                      <Leaf size={28} strokeWidth={1.5} />
                   </div>
                   <h3 className={`text-2xl font-black mb-3 leading-none ${textMain}`}>{cards.fuel.title}</h3>
                   <p className={`text-sm leading-relaxed font-medium ${textSub}`}>
                      {cards.fuel.desc}
                   </p>
                </div>
                <div className={`mt-8 pt-8 border-t border-dashed ${isLight ? 'border-[#D3968C]/30' : 'border-white/10'}`}>
                   <div className={`text-5xl font-black mb-2 tracking-tighter ${isLight ? 'text-[#0A3323]' : 'text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600'}`}>{cards.fuel.tag}</div>
                   <span className={`text-[10px] uppercase font-black tracking-[0.2em] opacity-40 ${textMain}`}>{cards.fuel.subtag}</span>
                </div>
            </div>
          )}

          {/* CARD AERO */}
          {cards?.aero && (
            <div className={`lg:col-span-3 p-10 rounded-[2.5rem] group ${cardClass}`}>
                <div className="flex items-center gap-4 mb-8">
                   <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-md ${isLight ? 'bg-[#105666]/10 text-[#105666]' : 'bg-[#1a1a20] text-cyan-400 border border-cyan-500/30 shadow-[0_0_10px_rgba(0,255,242,0.3)]'}`}>
                      <Wind size={28} strokeWidth={1.5} />
                   </div>
                   <h3 className={`text-2xl font-black uppercase tracking-tight ${textMain}`}>{cards.aero.title || 'Aerodinâmica'}</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                   <div className={`p-5 rounded-2xl transition-colors ${isLight ? 'bg-white/50 hover:bg-white border border-[#D3968C]/20' : 'bg-[#1a1a20]/50 hover:bg-[#1a1a20] border border-cyan-500/30 hover:border-cyan-400 hover:shadow-[0_0_10px_rgba(0,255,242,0.2)]'}`}>
                      <span className={`text-xs font-black uppercase block mb-2 tracking-wider ${isLight ? 'text-[#105666]' : 'text-cyan-400'}`}>
                        {cards.aero.zMode.title}
                      </span>
                      <p className={`text-xs leading-relaxed font-medium ${textSub}`}>
                        {cards.aero.zMode.desc}
                      </p>
                   </div>
                   <div className={`p-5 rounded-2xl transition-colors ${isLight ? 'bg-white/50 hover:bg-white border border-[#D3968C]/20' : 'bg-[#1a1a20]/50 hover:bg-[#1a1a20] border border-fuchsia-500/30 hover:border-fuchsia-400 hover:shadow-[0_0_10px_rgba(232,121,249,0.2)]'}`}>
                      <span className={`text-xs font-black uppercase block mb-2 tracking-wider ${isLight ? 'text-[#D3968C]' : 'text-fuchsia-400'}`}>
                        {cards.aero.xMode.title}
                      </span>
                      <p className={`text-xs leading-relaxed font-medium ${textSub}`}>
                        {cards.aero.xMode.desc}
                      </p>
                   </div>
                </div>
                <div className={`text-[10px] font-bold uppercase tracking-widest opacity-40 text-center ${textMain}`}>
                    {cards.aero.stats}
                </div>
            </div>
          )}

          {/* CARD CHASSIS */}
          {cards?.chassis && (
            <div className={`lg:col-span-3 p-10 rounded-[2.5rem] ${cardClass}`}>
                <div className="flex items-center gap-4 mb-8">
                   <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-md ${isLight ? 'bg-[#D3968C]/15 text-[#D3968C]' : 'bg-[#1a1a20] text-orange-400 border border-orange-500/30 shadow-[0_0_10px_rgba(251,146,60,0.3)]'}`}>
                      <Minimize2 size={28} strokeWidth={1.5} />
                   </div>
                   <h3 className={`text-2xl font-black uppercase tracking-tight ${textMain}`}>{cards.chassis.title}</h3>
                </div>
                <div className="space-y-4">
                   {cards.chassis.specs.map((spec, i) => (
                     <div key={i} className={`flex items-center justify-between p-4 rounded-xl transition-all ${isLight ? 'bg-white/40 hover:bg-white hover:shadow-sm' : 'bg-[#1a1a20] hover:bg-[#252530] border border-white/5'}`}>
                        <span className={`text-sm font-bold uppercase tracking-wide ${textSub}`}>{spec.label}</span>
                        <span className={`font-black text-lg ${textMain}`}>
                          {spec.val} <span className="text-xs font-medium opacity-40 ml-1">{spec.diff}</span>
                        </span>
                     </div>
                   ))}
                </div>
            </div>
          )}

          {/* CARD OVERTAKE */}
          {cards?.overtake && (
            <div
                className={`lg:col-span-3 p-10 rounded-[2.5rem] relative overflow-hidden flex flex-col justify-between group transition-all duration-500
                ${isLight
                  ? 'bg-gradient-to-br from-white to-[#D3968C]/10 border border-[#D3968C]/30 shadow-lg shadow-[#D3968C]/20'
                  : 'bg-[#090912] border border-red-500/30 shadow-[0_0_30px_rgba(239,68,68,0.15)]'
                }`}
            >
                <div className="flex items-start justify-between mb-6">
                   <div>
                      <span className={`text-[10px] font-black uppercase px-3 py-1.5 rounded-lg mb-3 inline-block tracking-widest ${isLight ? 'bg-[#D3968C]/20 text-[#0A3323]' : 'bg-red-900/20 text-red-400 border border-red-500/50 shadow-[0_0_10px_red]'}`}>
                        {cards.overtake.tag}
                      </span>
                      <h3 className={`text-3xl font-black uppercase mb-2 tracking-tight ${textMain}`}>
                        {cards.overtake.title}
                      </h3>
                   </div>
                   <div className={`p-4 rounded-full shadow-md ${isLight ? 'bg-white text-[#D3968C]' : 'bg-[#1a1a20] text-red-500 border border-red-500/30 shadow-[0_0_15px_rgba(239,68,68,0.4)]'}`}>
                       <Gauge size={28} />
                   </div>
                </div>
                <p className={`text-sm md:text-base opacity-80 leading-relaxed font-medium ${textSub}`}>
                   {cards.overtake.desc}
                </p>
            </div>
          )}

          {/* CARD SAFETY */}
          {cards?.safety && (
            <div className={`lg:col-span-3 p-10 rounded-[2.5rem] flex flex-col justify-center text-left ${cardClass}`}>
                <div className="flex items-center gap-4 mb-6">
                   <ShieldCheck size={40} strokeWidth={1.5} className={`opacity-80 ${isLight ? 'text-[#D3968C]' : 'text-fuchsia-400 drop-shadow-[0_0_5px_rgba(232,121,249,0.5)]'}`} />
                   <h3 className={`text-2xl font-black uppercase tracking-tight ${textMain}`}>{cards.safety.title}</h3>
                </div>
                <p className={`text-base font-medium opacity-70 leading-relaxed ${textSub}`}>
                  {cards.safety.desc}
                </p>
            </div>
          )}

          {/* CARD MANUFACTURERS */}
          {cards?.manufacturers && (
            <div className={`lg:col-span-6 p-10 rounded-[2.5rem] ${cardClass} flex flex-col justify-center`}>
                <div className="flex items-center gap-4 mb-8">
                   <Trophy size={28} className={isLight ? 'text-[#D3968C]' : 'text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.6)]'} />
                   <h3 className={`text-2xl font-black uppercase tracking-tight ${textMain}`}>{cards.manufacturers.title}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                   {cards.manufacturers.list.map((item, idx) => (
                      <span
                        key={idx}
                        className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all hover:scale-105 ${
                          isLight
                            ? 'bg-white text-[#0A3323] border border-[#D3968C]/20 shadow-sm hover:border-[#D3968C]/40'
                            : 'bg-[#1a1a20] text-gray-300 border border-white/10 hover:bg-[#252530] hover:border-cyan-500/30 hover:text-cyan-300 hover:shadow-[0_0_10px_rgba(0,255,242,0.2)]'
                        }`}
                      >
                         {item}
                      </span>
                   ))}
                </div>
            </div>
          )}

          {/* CARD METÁFORA */}
          {metaphor?.show && (
              <div className={`lg:col-span-6 p-10 md:p-16 rounded-[2.5rem] relative overflow-hidden bg-gradient-to-br ${isLight ? 'from-[#0A3323] to-[#105666] text-white shadow-2xl shadow-[#0A3323]/30' : 'from-[#090912] to-[#1a1a24] border border-fuchsia-500/30 shadow-[0_0_50px_rgba(189,0,255,0.2)]'}`}>
                 <div className={`absolute top-0 right-0 p-10 opacity-10 pointer-events-none ${isLight ? 'text-white' : 'text-fuchsia-500'}`}>
                    <Cpu size={300} />
                 </div>
                 <div className={`absolute top-10 right-20 w-4 h-4 rounded-full animate-pulse ${isLight ? 'bg-[#D3968C]/50' : 'bg-cyan-400 shadow-[0_0_10px_cyan]'}`} />
                 <div className={`absolute bottom-20 left-10 w-2 h-2 rounded-full animate-pulse ${isLight ? 'bg-[#D3968C]/50' : 'bg-fuchsia-400 shadow-[0_0_10px_magenta]'}`} style={{ animationDelay: '0.5s' }} />
                 <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center">
                    <div className={`p-6 rounded-full backdrop-blur-md shrink-0 ring-1 ${isLight ? 'bg-white/10 ring-white/20' : 'bg-[#1a1a20] ring-fuchsia-500/50 shadow-[0_0_20px_rgba(232,121,249,0.4)]'}`}>
                       <Cpu size={56} className="text-white" />
                    </div>
                    <div>
                       <div className="flex items-center gap-3 mb-4">
                          <Sparkles size={20} className={`${isLight ? 'text-[#D3968C]' : 'text-cyan-300'} animate-pulse`} />
                          <h3 className={`text-sm font-black uppercase tracking-[0.3em] ${isLight ? 'text-[#D3968C]' : 'text-fuchsia-300'}`}>
                             Analogia
                          </h3>
                       </div>
                       <h3 className={`text-3xl md:text-5xl font-black uppercase mb-6 tracking-tight leading-none ${isLight ? 'text-white' : 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-300 drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]'}`}>
                          {metaphor.title}
                       </h3>
                       <p className={`text-lg md:text-xl leading-relaxed font-medium max-w-4xl ${isLight ? 'text-white/90' : 'text-cyan-100/90'}`}>
                          "{metaphor.text}"
                       </p>
                    </div>
                 </div>
              </div>
          )}

        </div>

        {/* --- NAVEGAÇÃO ENTRE PÁGINAS --- */}
        <PageNavigation prev={prev} next={next} theme={resolvedTheme} />

      </div>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Russo+One&display=swap');`}</style>
    </div>
  );
};

export default RegulationSubpage;
