import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

// --- IMPORTS REAIS (Configuração Original) ---
import { BackButton } from '../components/UI';
import { DRIVERS_DATA } from '../data';

const DriversPage = ({ theme }) => {
  const isLight = theme === 'light';

  // Configuração de fundo: Girlie (Soft Pink) vs Vaporwave (Dark Neon Grid)
  const bgStyle = isLight 
    ? {
        backgroundColor: '#FFF0F5', // Lavender Blush
        backgroundImage: `
          radial-gradient(at 0% 0%, rgba(255, 182, 193, 0.4) 0px, transparent 50%),
          radial-gradient(at 100% 0%, rgba(216, 196, 240, 0.4) 0px, transparent 50%),
          conic-gradient(from 0deg at 50% 50%, rgba(255, 255, 255, 0.8) 0deg, transparent 60deg, rgba(255, 255, 255, 0.5) 120deg)
        `,
        backgroundSize: '100% 100%'
      }
    : {
        backgroundColor: '#050510',
        backgroundImage: `
          linear-gradient(rgba(0, 255, 242, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(189, 0, 255, 0.05) 1px, transparent 1px),
          radial-gradient(at 50% 0%, rgba(189, 0, 255, 0.2) 0px, transparent 70%)
        `,
        backgroundSize: '40px 40px, 40px 40px, 100% 100%'
      };

  return (
    <div 
      className={`min-h-screen p-6 md:p-12 animate-in fade-in slide-in-from-bottom-6 duration-700 flex flex-col font-sans ${isLight ? 'selection:bg-pink-300 selection:text-white' : 'selection:bg-cyan-500 selection:text-black'}`}
      style={bgStyle}
    >
      {/* Luzes decorativas flutuantes */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden mix-blend-screen">
         <div className={`absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full blur-[120px] opacity-30 ${isLight ? 'bg-pink-200' : 'bg-[#bd00ff]/30 animate-pulse'}`} />
         <div className={`absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full blur-[100px] opacity-20 ${isLight ? 'bg-purple-200' : 'bg-[#00fff2]/20 animate-pulse'}`} />
         {!isLight && <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent shadow-[0_0_20px_cyan]" />}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <BackButton to="/" theme={theme} />
        
        {/* Header Harmonioso */}
        <div className="mb-14 text-center md:text-left relative">
          <span className={`inline-block px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-4 border ${isLight ? 'bg-white/50 border-pink-200 text-pink-500 shadow-sm' : 'bg-[#bd00ff]/10 border-[#bd00ff]/30 text-fuchsia-400 shadow-[0_0_10px_rgba(189,0,255,0.3)]'}`}>
             F1 Pro Grid
          </span>
          <h2 className={`text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.8] mb-6 ${isLight ? 'text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600' : 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-fuchsia-500 drop-shadow-[0_0_10px_rgba(0,255,242,0.4)]'}`}>
            Grid 2025
          </h2>
          <div className={`h-1.5 w-24 rounded-full ${isLight ? 'bg-gradient-to-r from-pink-300 to-purple-300' : 'bg-gradient-to-r from-cyan-500 to-fuchsia-500'} mx-auto md:mx-0 shadow-[0_0_15px_currentColor]`} />
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
          {DRIVERS_DATA.map((driver) => {
            // LÓGICA DE ÍCONE SEGURA (Verifica se existe vibe/icon no objeto)
            const VibeIcon = driver.vibes && driver.vibes.length > 0 ? driver.vibes[0].icon : null;

            return (
              <Link 
                key={driver.id || driver.number} 
                to={`/drivers/${driver.id}`} 
                // Mantém a cor da equipe como fundo base
                style={{ backgroundColor: driver.color }}
                className={`
                  group relative overflow-hidden rounded-[2.5rem] h-[480px] cursor-pointer 
                  transition-all duration-700 ease-out hover:-translate-y-4
                  flex flex-col justify-end
                  ${!isLight 
                    ? 'border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_50px_rgba(var(--driver-glow),0.4)]' 
                    : 'shadow-[0_20px_50px_-15px_rgba(255,182,193,0.6)] hover:shadow-pink-200'
                  }
                `}
              >
                {/* Overlay de brilho sutil da equipe */}
                <div 
                  className="absolute inset-0 opacity-[0.1] group-hover:opacity-30 transition-opacity duration-1000"
                  style={{ backgroundColor: driver.color }}
                />

                {/* Imagem do Piloto */}
                {driver.image && (
                  <img 
                    src={driver.image} 
                    alt={driver.name} 
                    className={`absolute inset-0 w-full h-full object-cover object-top transition-all duration-1000 ease-out group-hover:scale-110 group-hover:brightness-110 z-0 ${!isLight ? 'grayscale-[30%] group-hover:grayscale-0' : ''}`} 
                  />
                )}
                
                {/* Overlay de Gradiente Suave para Legibilidade */}
                <div className={`absolute inset-0 z-10 bg-gradient-to-t transition-all duration-500 ${
                  isLight 
                    ? 'from-white via-white/10 to-transparent group-hover:from-pink-50/90' 
                    : 'from-[#050510] via-transparent to-transparent group-hover:from-[#050510]/80'
                }`} />

                {/* Ícone de Vibe (Glassmorphism) - Renderiza apenas se existir no dado */}
                {VibeIcon && (
                  <div className={`absolute top-6 right-6 backdrop-blur-xl p-3.5 rounded-[1.2rem] text-white shadow-xl z-20 border transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 ${isLight ? 'bg-white/20 border-white/40' : 'bg-black/30 border-white/10'}`}>
                      <VibeIcon size={20} strokeWidth={2} />
                  </div>
                )}

                {/* Informações do Piloto */}
                <div className="relative z-20 p-8 flex flex-col items-start transform transition-transform duration-700 group-hover:-translate-y-2">
                    
                    {/* Número Ghost no fundo do card */}
                    <span className={`absolute -right-4 -bottom-12 text-[140px] font-black select-none pointer-events-none transform rotate-6 group-hover:rotate-0 transition-all duration-1000 ${isLight ? 'text-white/40' : 'text-white/5'}`}>
                      {driver.number}
                    </span>

                    <div className="flex items-center gap-2 mb-3">
                      <span className={`text-[9px] font-black uppercase tracking-[0.25em] px-3 py-1 rounded-lg backdrop-blur-md border shadow-sm ${
                        isLight ? 'bg-white/60 border-white/50 text-gray-800' : 'bg-black/40 border-white/10 text-white'
                      }`}>
                        {driver.team}
                      </span>
                    </div>

                    <h3 className={`text-4xl font-black leading-[0.85] uppercase tracking-tighter drop-shadow-md ${isLight ? 'text-gray-900' : 'text-white text-shadow-neon'}`}>
                      {driver.name.split(' ').map((n, i) => (
                        <span key={i} className="block">{n}</span>
                      ))}
                    </h3>
                    
                    {/* Detalhe estético inferior que expande no hover */}
                    <div 
                      className={`w-12 h-1.5 rounded-full mt-5 transition-all duration-700 group-hover:w-full group-hover:translate-x-0 shadow-sm ${!isLight && 'shadow-[0_0_10px_currentColor]'}`}
                      style={{ backgroundColor: driver.color, color: driver.color }}
                    />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Russo+One&display=swap');`}</style>
    </div>
  );
};

export default DriversPage;