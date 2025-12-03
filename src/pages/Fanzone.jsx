import React from 'react';
import { MessageCircle, Users, Sparkles } from 'lucide-react';
import { BackButton, KpopPhotocard } from '../components/UI';
import { DRIVERS_DATA } from '../data';

const FanzonePage = ({ theme }) => {
  const isLight = theme === 'light';

  const discordBg = isLight 
    ? 'bg-[#5865F2] text-white shadow-[0_10px_30px_-10px_rgba(88,101,242,0.5)]' 
    : 'bg-[#5865F2]/10 border border-[#5865F2] text-[#5865F2] shadow-[0_0_20px_rgba(88,101,242,0.2)]';

  const constructionClass = isLight
    ? 'border-gray-200 bg-gray-50 text-gray-400'
    : 'border-[#333] bg-[#1a1a20]/50 text-gray-500';

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-12">
      <BackButton to="/" theme={theme} />
      
      {/* Header da Página */}
      <div className="mb-10 text-center md:text-left">
        <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
            <Sparkles className={isLight ? 'text-purple-500' : 'text-[#bd00ff]'} size={32} />
            {/* Fonte limpa (sem Russo One, apenas Bold) */}
            <h2 className={`text-4xl md:text-6xl font-black ${isLight ? 'text-gray-800' : 'text-white'}`}>
              Fanzone
            </h2>
        </div>
        <p className={`ml-1 ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>O ponto de encontro da torcida.</p>
      </div>

      {/* 1. CARD DISCORD */}
      <a 
        href="https://discord.gg/SEU_LINK_AQUI" 
        target="_blank" 
        rel="noopener noreferrer"
        className={`block p-8 rounded-[2.5rem] mb-16 transition-all hover:scale-[1.01] active:scale-[0.99] group ${discordBg}`}
      >
        <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className={`p-5 rounded-full shrink-0 ${isLight ? 'bg-white/20' : 'bg-[#5865F2]/20'}`}>
                <MessageCircle size={48} className="text-current" />
            </div>
            <div>
                <h3 className="text-2xl font-black uppercase tracking-widest mb-2 group-hover:underline decoration-4 decoration-white/30 underline-offset-4">
                    Comunidade no Discord
                </h3>
                <p className="opacity-90 text-lg font-medium leading-relaxed max-w-2xl">
                    O Feed agora acontece ao vivo! Junte-se ao nosso servidor para comentar as corridas em tempo real.
                </p>
            </div>
        </div>
      </a>

      {/* 2. COLEÇÃO DE PHOTOCARDS */}
      <div className="mb-20">
        <div className="flex items-center gap-4 mb-8 border-b border-gray-200/10 pb-4">
           <h3 className={`text-3xl font-black uppercase tracking-tighter ${isLight ? 'text-gray-800' : 'text-white'}`}>
             Sua Coleção
           </h3>
           <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${isLight ? 'bg-pink-100 text-pink-600' : 'bg-[#ab0eff]/20 text-[#ab0eff] border border-[#ab0eff]/30'}`}>
             Grid 2025
           </span>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
           {DRIVERS_DATA.map((driver) => (
             <KpopPhotocard key={driver.id || driver.number} driver={driver} theme={theme} onClick={()=>{}} />
           ))}
        </div>
      </div>

      {/* 3. ÁREA DE FANDOMS */}
      <div>
        <div className="flex items-center gap-4 mb-6">
           <h3 className={`text-2xl font-black uppercase tracking-tighter ${isLight ? 'text-gray-800' : 'text-white'}`}>
             Fandoms
           </h3>
        </div>
        
        <div className={`p-12 rounded-[2.5rem] text-center border-2 border-dashed flex flex-col items-center justify-center gap-4 ${constructionClass}`}>
            <div className={`w-20 h-20 rounded-full flex items-center justify-center ${isLight ? 'bg-gray-200' : 'bg-[#2a2a35]'}`}>
                <Users size={32} className="opacity-50" />
            </div>
            <div>
                <h4 className="text-xl font-bold mb-1">Espaço das Torcidas</h4>
                <p className="text-xs font-black uppercase tracking-[0.2em] opacity-60">Em Breve 🚧</p>
            </div>
            <p className="max-w-md text-sm opacity-70 mt-2">
                Estamos construindo áreas dedicadas para Team LH, Orange Army, Tifosi e muito mais.
            </p>
        </div>
      </div>

    </div>
  );
};

export default FanzonePage;