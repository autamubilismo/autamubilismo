import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MessageCircle, Users, Sparkles, ChevronLeft, Heart, 
  RotateCcw, Star, Music, Crown 
} from 'lucide-react';
import { BackButton, KpopPhotocard } from '../components/UI';
import { DRIVERS_DATA } from '../data';

// ============================================================================
// 📄 PÁGINA FANZONE
// ============================================================================

const FanzonePage = ({ theme = 'light' }) => {
  const isLight = theme === 'light';

  // --- BACKGROUNDS ---
  const lightPattern = {
    backgroundColor: '#FFF0F5', // Lavender Blush
    backgroundImage: `
      radial-gradient(at 10% 10%, rgba(255, 182, 193, 0.4) 0px, transparent 50%),
      radial-gradient(at 90% 90%, rgba(221, 160, 221, 0.4) 0px, transparent 50%),
      url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ff69b4' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")
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

  const constructionClass = isLight
    ? 'border-pink-200 bg-white/60 text-gray-400 border-dashed'
    : 'border-[#333] bg-[#1a1a20]/50 text-gray-500 border-dashed';

  const sectionTitleClass = isLight
    ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 drop-shadow-sm'
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
             <div className="absolute top-20 right-10 text-pink-200 opacity-40 animate-pulse"><Heart size={120} fill="currentColor" /></div>
             <div className="absolute bottom-40 left-10 text-purple-200 opacity-30 animate-bounce-slow"><Star size={80} fill="currentColor" /></div>
           </>
         ) : (
           <>
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-fuchsia-600/20 blur-[100px]" />
             <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-600/10 blur-[100px]" />
           </>
         )}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <BackButton to="/" theme={theme} />
        
        {/* Header da Página */}
        <div className="mb-12 text-center md:text-left relative">
          <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
             <div className={`p-2 rounded-full ${isLight ? 'bg-pink-100 text-pink-500' : 'bg-fuchsia-900/30 text-fuchsia-400'}`}>
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
                  <span className={`text-xs font-bold uppercase tracking-[0.2em] ${isLight ? 'text-pink-400' : 'text-fuchsia-400'}`}>Grid 2025 • Wave 1</span>
                </div>
             </div>
             <button className={`px-5 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all ${isLight ? 'bg-white text-gray-500 shadow-md hover:text-pink-500' : 'bg-[#1a1a20] text-gray-400 border border-white/10 hover:border-cyan-400 hover:text-cyan-400'}`}>
                Ver Tudo
             </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10">
             {DRIVERS_DATA.map((driver) => (
               <div key={driver.id || driver.number} className="flex flex-col gap-4 group">
                 <KpopPhotocard driver={driver} theme={theme} />
                 {/* Botões de Ação do Card */}
                 <div className="flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className={`p-2 rounded-full ${isLight ? 'bg-white shadow-md text-pink-400 hover:bg-pink-50' : 'bg-[#1a1a20] text-gray-400 hover:text-cyan-400'}`}><Heart size={16} /></button>
                    <button className={`p-2 rounded-full ${isLight ? 'bg-white shadow-md text-purple-400 hover:bg-purple-50' : 'bg-[#1a1a20] text-gray-400 hover:text-fuchsia-400'}`}><Star size={16} /></button>
                 </div>
               </div>
             ))}
          </div>
        </div>

        {/* 3. ÁREA DE FANDOMS (CONSTRUÇÃO) */}
        <div>
          <div className="flex items-center gap-3 mb-8 px-2">
             <Music size={28} className={isLight ? 'text-purple-500' : 'text-cyan-400'} />
             <h3 className={`text-3xl font-black uppercase tracking-tighter ${isLight ? 'text-gray-800' : 'text-white'}`}>
               Fandoms
             </h3>
          </div>
          
          <div className={`p-16 rounded-[2.5rem] text-center border-2 flex flex-col items-center justify-center gap-6 relative overflow-hidden ${constructionClass}`}>
             {/* Background Pattern */}
             <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
             
             <div className={`w-24 h-24 rounded-full flex items-center justify-center relative z-10 ${isLight ? 'bg-white shadow-lg text-gray-300' : 'bg-[#0a0a10] border border-white/10 text-gray-600'}`}>
                 <Users size={40} />
             </div>
             
             <div className="relative z-10">
                 <h4 className={`text-2xl font-black mb-2 ${isLight ? 'text-gray-700' : 'text-white'}`}>Espaço das Torcidas</h4>
                 <div className={`inline-block px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.3em] ${isLight ? 'bg-gray-200 text-gray-500' : 'bg-[#333] text-gray-400'}`}>
                    Em Breve 🚧
                 </div>
             </div>
             
             <p className="max-w-md text-base font-medium opacity-60 leading-relaxed relative z-10">
                 Estamos construindo áreas dedicadas para <strong>Team LH</strong>, <strong>Orange Army</strong>, <strong>Tifosi</strong> e muito mais. Prepare seu lightstick!
             </p>
          </div>
        </div>

      </div>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Russo+One&display=swap');`}</style>
    </div>
  );
};

export default FanzonePage;