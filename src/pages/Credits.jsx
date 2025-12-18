import React from 'react';
import { Heart, Code, Palette, Database, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

// --- COMPONENTE INTERNO: BackButton (Estilo Girlie/Vaporwave) ---
const BackButton = ({ to = "/", theme }) => {
  const isLight = theme === 'light';
  return (
    <Link
      to={to}
      className={`group mb-8 inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold transition-all hover:pl-2 px-5 py-2.5 rounded-full ${
        isLight
          ? 'text-pink-500 hover:text-pink-600 hover:bg-pink-50 hover:shadow-sm bg-white/60 backdrop-blur-sm border border-pink-100' 
          : 'text-cyan-400 hover:text-white hover:bg-cyan-900/20 border border-cyan-500/30 bg-black/40 backdrop-blur-md shadow-[0_0_15px_rgba(0,255,242,0.15)] hover:shadow-[0_0_25px_cyan] hover:border-cyan-400'
      }`}
    >
      <ChevronLeft size={16} />
      Voltar
    </Link>
  );
};

const CreditsPage = ({ theme = 'light' }) => {
  const isLight = theme === 'light';
  
  // --- BACKGROUNDS ---
  const lightPattern = {
    backgroundColor: '#FFF0F5', // Lavender Blush
    backgroundImage: `
      radial-gradient(at 0% 0%, rgba(255, 182, 193, 0.4) 0px, transparent 50%),
      radial-gradient(at 100% 100%, rgba(221, 160, 221, 0.4) 0px, transparent 50%),
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

  const cardClass = isLight 
    ? 'bg-white/80 backdrop-blur-xl border border-pink-100 shadow-[0_10px_30px_rgba(255,182,193,0.3)]' 
    : 'bg-[#121217]/80 backdrop-blur-xl border border-white/10 hover:border-cyan-500/30 shadow-[0_0_30px_rgba(0,0,0,0.5)]';

  // Lógica dos Filtros para o Capacete
  const helmetFilterClass = isLight
    // Light Mode: Aplica um filtro sépia+matiz para deixar rosado/roxo suave e uma sombra colorida
    ? 'filter sepia saturate-[2.5] hue-rotate-[290deg] brightness-90 drop-shadow-[0_8px_16px_rgba(247,184,200,0.5)] opacity-80'
    // Dark Mode: Aumenta o brilho e aplica uma sombra neon roxa intensa
    : 'filter brightness-[1.1] drop-shadow-[0_0_35px_#bd00ff] saturate-[1.2]';

  return (
    <div 
      className="min-h-screen p-4 md:p-8 animate-in fade-in slide-in-from-bottom-4 duration-700 font-sans flex flex-col"
      style={isLight ? lightPattern : darkPattern}
    >
      
      {/* Luz de Fundo Decorativa */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden mix-blend-screen">
         <div className={`absolute top-[-20%] left-[-10%] w-[800px] h-[800px] rounded-full blur-[120px] opacity-20 ${isLight ? 'bg-pink-200' : 'bg-[#bd00ff]/30 animate-pulse'}`} />
         <div className={`absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[100px] opacity-20 ${isLight ? 'bg-purple-200' : 'bg-[#00fff2]/20 animate-pulse'}`} />
         {!isLight && <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent shadow-[0_0_20px_cyan]" />}
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex-1 flex flex-col">
        <BackButton to="/" theme={theme} />

        <div className="flex-1 flex items-center justify-center">
          <div className={`max-w-2xl w-full p-10 md:p-16 rounded-[3rem] text-center relative overflow-hidden ${cardClass}`}>
              
              {/* Elementos Decorativos Internos */}
              <div className={`absolute top-0 left-0 w-full h-2 ${isLight ? 'bg-gradient-to-r from-pink-200 via-purple-200 to-pink-200' : 'bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-cyan-500'}`} />
              
              {/* NOVO CAPACETE CENTRALIZADO COM FILTROS */}
              <div className="flex justify-center mb-8 relative z-10">
                  <img 
                      src="/img/web/helmet.png" 
                      alt="Capacete Autamubilismo" 
                      // Fallback para ícone se a imagem não carregar (opcional, mas boa prática)
                      onError={(e) => {
                        e.target.onerror = null; 
                        e.target.src = "https://cdn-icons-png.flaticon.com/512/2088/2088289.png";
                      }}
                      // Classes para tamanho, transição suave e aplicação do filtro dinâmico
                      className={`w-32 h-32 md:w-40 md:h-40 object-contain transition-all duration-700 hover:scale-105 ${helmetFilterClass}`}
                  />
              </div>

              <h1 className={`text-3xl md:text-5xl font-black mb-6 tracking-tight ${isLight ? 'text-gray-900' : 'text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]'}`}>
                  Feito com paixão.
              </h1>
              
              <p className={`text-lg mb-12 leading-relaxed font-medium ${isLight ? 'text-gray-500' : 'text-cyan-100/70'}`}>
                  O <strong>Autamubilismo</strong> é um projeto independente criado para trazer uma nova visão sobre a Fórmula 1.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                  <div className="flex flex-col items-center gap-3 group">
                      <div className={`p-4 rounded-2xl transition-transform group-hover:scale-110 shadow-sm ${isLight ? 'bg-blue-50 text-blue-500' : 'bg-[#1a1a20] text-cyan-400 border border-cyan-500/30'}`}><Code size={24} /></div>
                      <span className={`text-xs font-bold uppercase tracking-wider ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>React + Vite</span>
                  </div>
                  <div className="flex flex-col items-center gap-3 group">
                      <div className={`p-4 rounded-2xl transition-transform group-hover:scale-110 shadow-sm ${isLight ? 'bg-teal-50 text-teal-500' : 'bg-[#1a1a20] text-teal-400 border border-teal-500/30'}`}><Palette size={24} /></div>
                      <span className={`text-xs font-bold uppercase tracking-wider ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>Tailwind</span>
                  </div>
                  <div className="flex flex-col items-center gap-3 group">
                      <div className={`p-4 rounded-2xl transition-transform group-hover:scale-110 shadow-sm ${isLight ? 'bg-purple-50 text-purple-500' : 'bg-[#1a1a20] text-purple-400 border border-purple-500/30'}`}><Database size={24} /></div>
                      <span className={`text-xs font-bold uppercase tracking-wider ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>Sanity.io</span>
                  </div>
                  <div className="flex flex-col items-center gap-3 group">
                      <div className={`p-4 rounded-2xl transition-transform group-hover:scale-110 shadow-sm ${isLight ? 'bg-pink-50 text-pink-500' : 'bg-[#1a1a20] text-pink-400 border border-pink-500/30'}`}><Heart size={24} className="fill-current" /></div>
                      <span className={`text-xs font-bold uppercase tracking-wider ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>Por Tamu</span>
                  </div>
              </div>

              <div className={`border-t pt-8 ${isLight ? 'border-pink-100' : 'border-white/10'}`}>
                <p className={`text-xs font-medium uppercase tracking-widest opacity-60 ${isLight ? 'text-gray-400' : 'text-gray-500'}`}>
                    © 2025 Autamubilismo. Todos os direitos reservados.
                </p>
              </div>
          </div>
        </div>
      </div>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Russo+One&display=swap');`}</style>
    </div>
  );
};

export default CreditsPage;