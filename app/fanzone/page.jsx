'use client';

import { useState } from 'react';
import { 
  MessageCircle, Users, Sparkles, ChevronLeft, Heart, 
  RotateCcw, Star, Music, Crown, Zap, Flag 
} from 'lucide-react';
import { KpopPhotocard } from '../../components/widgets';
import { DRIVERS_DATA } from '../../data';
import { BackButton } from '../../components/ui';
import { useTheme } from '@/components/layout/ThemeContext';

// ============================================================================
// 📄 DADOS MOCKADOS (FANDOMS)
// ============================================================================
const FANDOMS = [
  { id: 'teamlh', name: 'Team LH', icon: '💜', color: '#b100e8', members: '44M', slogan: 'Still We Rise', tag: 'Lewis Hamilton' },
  { id: 'tifosi', name: 'Tifosi', icon: '🐎', color: '#ff0000', members: '16M', slogan: 'Essere Ferrari', tag: 'Ferrari' },
  { id: 'papaya', name: 'Papaya Army', icon: '🧡', color: '#ff8700', members: '81M', slogan: 'Fearlessly Forward', tag: 'McLaren' },
  { id: 'orange', name: 'Orange Army', icon: '🦁', color: '#ff5500', members: '33M', slogan: 'Simply Lovely', tag: 'Max Verstappen' },
  { id: 'smooth', name: 'Smooth Operators', icon: '🌶️', color: '#005aff', members: '55M', slogan: 'Stop Inventing', tag: 'Carlos Sainz' },
  { id: 'sunshine', name: 'Sunshine Cult', icon: '☀️', color: '#00D2BE', members: '63M', slogan: 'Forecast: Fast', tag: 'George Russell' },
];

// ============================================================================
// 📄 PÁGINA FANZONE
// ============================================================================

const FanzonePage = () => {
  const { theme } = useTheme();
  const resolvedTheme = theme || 'light';
  const isLight = resolvedTheme === 'light';

  // --- BACKGROUNDS ---
  const lightPattern = {
    backgroundColor: '#F7F4D5',
    backgroundImage: `
      radial-gradient(at 10% 10%, rgba(211, 150, 140, 0.35) 0px, transparent 50%),
      radial-gradient(at 90% 90%, rgba(211, 150, 140, 0.25) 0px, transparent 50%),
      url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D3968C' fill-opacity='0.06' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")
    `,
  };

  const darkPattern = {
    backgroundColor: '#050510',
    backgroundImage: `
      linear-gradient(rgba(0, 255, 242, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(189, 0, 255, 0.03) 1px, transparent 1px),
      radial-gradient(at 50% 0%, rgba(189, 0, 255, 0.15) 0px, transparent 70%)
    `,
    backgroundSize: '40px 40px, 40px 40px, 100% 100%'
  };

  // --- ESTILOS DE ELEMENTOS ---
  const discordCardClass = isLight 
    ? 'bg-gradient-to-r from-[#5865F2] to-[#7289da] text-white shadow-[0_15px_30px_-5px_rgba(88,101,242,0.4)] border border-white/20 ring-4 ring-[#5865F2]/10' 
    : 'bg-[#0a0a10] border border-[#5865F2] text-[#5865F2] shadow-[0_0_30px_rgba(88,101,242,0.15)] hover:shadow-[0_0_50px_rgba(88,101,242,0.3)] hover:bg-[#5865F2]/5';

  const sectionTitleClass = isLight
    ? 'text-[#D3968C] drop-shadow-sm'
    : 'text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]';

  return (
    <div 
      className="min-h-screen p-4 md:p-8 animate-in fade-in slide-in-from-bottom-4 duration-700 font-sans"
      style={isLight ? lightPattern : darkPattern}
    >
      
      {/* Elementos Decorativos de Fundo */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
         {isLight ? (
           <>
             <div className="absolute top-20 right-10 text-cottage-rosy opacity-40 animate-pulse"><Heart size={120} fill="currentColor" /></div>
             <div className="absolute bottom-40 left-10 text-cottage-rosy opacity-30 animate-bounce-slow"><Star size={80} fill="currentColor" /></div>
           </>
         ) : (
           <>
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-fuchsia-600/20 blur-[100px]" />
             <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-600/10 blur-[100px]" />
           </>
         )}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <BackButton to="/" theme={resolvedTheme} />
        
        {/* Header da Página */}
        <div className="mb-12 text-center md:text-left relative">
          <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
             <div className={`p-2 rounded-full ${isLight ? 'bg-cottage-rosy text-cottage-beige' : 'bg-fuchsia-900/30 text-fuchsia-400'}`}>
                <Sparkles size={28} />
             </div>
             <h2 className={`text-5xl md:text-7xl font-black uppercase tracking-tighter ${sectionTitleClass}`} style={{ fontFamily: isLight ? 'sans-serif' : "'Russo One', sans-serif" }}>
               Fanzone
             </h2>
          </div>
          <p className={`ml-1 text-lg font-medium max-w-xl mx-auto md:mx-0 ${isLight ? 'text-gray-500' : 'text-cyan-100/60'}`}>
            O ponto de encontro da torcida. Colecione, vote e interaja.
          </p>
        </div>

        {/* 1. CARD DISCORD (DESTAQUE) */}
        <a 
          href="https://discord.gg/SEU_LINK_AQUI" 
          target="_blank" 
          rel="noopener noreferrer"
          className={`block p-8 md:p-10 rounded-[2.5rem] mb-20 transition-all duration-500 hover:scale-[1.01] active:scale-[0.99] group relative overflow-hidden ${discordCardClass}`}
        >
          {/* Brilho decorativo no card */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
          
          <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left relative z-10">
             <div className={`p-6 rounded-[1.5rem] shrink-0 transition-transform duration-500 group-hover:rotate-6 ${isLight ? 'bg-white/20 backdrop-blur-sm shadow-inner' : 'bg-[#5865F2]/10 border border-[#5865F2]/30'}`}>
                 <MessageCircle size={56} className="text-current" />
             </div>
             <div>
                 <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                    <h3 className="text-3xl font-black uppercase tracking-widest group-hover:underline decoration-4 decoration-white/30 underline-offset-4">
                        Comunidade Discord
                    </h3>
                    <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold uppercase ${isLight ? 'bg-white/20' : 'bg-[#5865F2] text-white'}`}>Live</span>
                 </div>
                 <p className={`text-lg font-medium leading-relaxed max-w-2xl ${isLight ? 'opacity-90' : 'opacity-70'}`}>
                     O Feed agora acontece ao vivo! Junte-se ao nosso servidor para comentar as corridas em tempo real, trocar figurinhas e participar de watch parties.
                 </p>
             </div>
             <div className={`hidden md:flex ml-auto p-4 rounded-full border-2 transition-all ${isLight ? 'border-white/30 text-white group-hover:bg-white group-hover:text-[#5865F2]' : 'border-[#5865F2] text-[#5865F2] group-hover:bg-[#5865F2] group-hover:text-white'}`}>
                <ChevronLeft size={24} className="rotate-180" />
             </div>
          </div>
        </a>

        {/* 2. COLEÇÃO DE PHOTOCARDS (K-POP STYLE) */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-10 px-2">
             <div className="flex items-center gap-3">
                <Crown size={32} className={isLight ? 'text-yellow-400 fill-yellow-400' : 'text-yellow-500'} />
                <div>
                  <h3 className={`text-3xl font-black uppercase tracking-tighter leading-none ${isLight ? 'text-gray-800' : 'text-white'}`}>
                    Sua Coleção
                  </h3>
                  <span className={`text-xs font-bold uppercase tracking-[0.2em] ${isLight ? 'text-cottage-rosy' : 'text-fuchsia-400'}`}>Grid 2025 • Wave 1</span>
                </div>
             </div>
             <button className={`px-5 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all ${isLight ? 'bg-white text-gray-500 shadow-md hover:text-cottage-rosy' : 'bg-[#1a1a20] text-gray-400 border border-white/10 hover:border-cyan-400 hover:text-cyan-400'}`}>
                Ver Tudo
             </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10">
             {DRIVERS_DATA.slice(0, 22).map((driver) => (
               <div key={driver.id || driver.number} className="flex flex-col gap-4 group">
                 <KpopPhotocard 
                   driver={driver} 
                   theme={resolvedTheme} 
                 />
                 <div className="flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className={`p-2 rounded-full ${isLight ? 'bg-white shadow-md text-cottage-rosy hover:bg-cottage-beige' : 'bg-[#1a1a20] text-gray-400 hover:text-cyan-400'}`}><Heart size={16} /></button>
                    <button className={`p-2 rounded-full ${isLight ? 'bg-white shadow-md text-cottage-rosy hover:bg-cottage-rosy hover:text-cottage-beige' : 'bg-[#1a1a20] text-gray-400 hover:text-fuchsia-400'}`}><Star size={16} /></button>
                 </div>
               </div>
             ))}
          </div>
        </div>

        {/* 3. ESPAÇO DAS TORCIDAS (Novo e Bonito!) */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8 px-2">
             <Music size={28} className={isLight ? 'text-cottage-rosy' : 'text-cyan-400'} />
             <h3 className={`text-3xl font-black uppercase tracking-tighter ${isLight ? 'text-gray-800' : 'text-white'}`}>
               Official Fan Clubs
             </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {FANDOMS.map((fandom) => (
                <div 
                  key={fandom.id}
                  className={`relative p-6 rounded-[2rem] overflow-hidden group cursor-pointer transition-all duration-300 hover:-translate-y-2 ${
                    isLight 
                      ? 'bg-white/70 border border-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] hover:shadow-lg' 
                      : 'bg-[#121218]/80 border border-white/5 hover:border-[color:var(--fandom-color)] hover:shadow-[0_0_20px_var(--fandom-color)]'
                  }`}
                  style={{ '--fandom-color': fandom.color }}
                >
                   {/* Background Glow (Dark Mode) */}
                   {!isLight && (
                     <div className="absolute inset-0 bg-[var(--fandom-color)] opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-3xl" />
                   )}

                   <div className="relative z-10 flex flex-col h-full">
                      {/* Header Card */}
                      <div className="flex justify-between items-start mb-6">
                         <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-sm ${
                           isLight ? 'bg-gray-50' : 'bg-[#1a1a20] border border-white/10'
                         }`}>
                            {fandom.icon}
                         </div>
                         <div className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-1 ${
                           isLight 
                             ? 'bg-gray-100 text-gray-500' 
                             : 'bg-black/40 text-gray-400 border border-white/10'
                         }`}>
                            <Users size={10} /> {fandom.members}
                         </div>
                      </div>

                      {/* Content */}
                      <div className="mt-auto">
                         <span className={`text-[10px] font-bold uppercase tracking-wider mb-1 block ${
                           isLight ? 'text-gray-400' : 'text-white/40'
                         }`}>
                           {fandom.tag}
                         </span>
                         <h4 
                           className={`text-2xl font-black uppercase tracking-tight mb-2 ${
                             isLight ? 'text-gray-800' : 'text-white group-hover:text-[var(--fandom-color)] transition-colors'
                           }`}
                           style={{ color: isLight ? fandom.color : undefined }}
                         >
                           {fandom.name}
                         </h4>
                         <p className={`text-sm font-medium italic opacity-70 ${isLight ? 'text-gray-600' : 'text-gray-300'}`}>
                           "{fandom.slogan}"
                         </p>
                      </div>

                      {/* Join Button (Hidden until hover) */}
                      <div className={`mt-6 pt-4 border-t flex items-center justify-between opacity-60 group-hover:opacity-100 transition-all ${
                        isLight ? 'border-gray-100' : 'border-white/10'
                      }`}>
                         <span className="text-[10px] font-bold uppercase tracking-widest">Membership</span>
                         <div className={`p-1.5 rounded-full ${
                           isLight ? 'bg-gray-100 text-gray-600' : 'bg-white/10 text-white'
                         }`}>
                            <ChevronLeft size={12} className="rotate-180" />
                         </div>
                      </div>
                   </div>
                </div>
             ))}
          </div>
        </div>

      </div>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Russo+One&display=swap');`}</style>
    </div>
  );
};

export default FanzonePage;
