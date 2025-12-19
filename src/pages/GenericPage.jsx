import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, AlertTriangle, Home, Sparkles, Construction } from 'lucide-react';

// --- COMPONENTE INTERNO: BackButton ---
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

const GenericPage = ({ theme = 'light', title = "Página não encontrada" }) => {
  const isLight = theme === 'light';

  // --- BACKGROUNDS ---
  const lightPattern = {
    backgroundColor: '#FFF5F8',
    backgroundImage: `
      radial-gradient(at 0% 0%, rgba(247, 184, 200, 0.4) 0px, transparent 50%),
      radial-gradient(at 100% 100%, rgba(216, 196, 240, 0.4) 0px, transparent 50%),
      url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffb7b2' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
    `,
  };

  const darkPattern = {
    backgroundColor: '#050510',
    backgroundImage: `
      linear-gradient(rgba(0, 255, 242, 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(189, 0, 255, 0.05) 1px, transparent 1px),
      radial-gradient(at 50% 0%, rgba(189, 0, 255, 0.2) 0px, transparent 70%)
    `,
    backgroundSize: '40px 40px, 40px 40px, 100% 100%'
  };

  // Cores dinâmicas
  const textMain = isLight ? 'text-gray-900' : 'text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]';
  const textSub = isLight ? 'text-gray-500' : 'text-cyan-100/70';

  return (
    <div 
      className={`min-h-screen p-4 md:p-8 animate-in fade-in slide-in-from-bottom-4 duration-700 font-sans flex flex-col`} 
      style={isLight ? lightPattern : darkPattern}
    >
      
      {/* Elementos Decorativos de Fundo */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden mix-blend-screen">
         <div className={`absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 ${isLight ? 'bg-pink-200' : 'bg-[#bd00ff]/30 animate-pulse'}`} />
         <div className={`absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full blur-[100px] opacity-20 ${isLight ? 'bg-purple-200' : 'bg-[#00fff2]/20 animate-pulse'}`} />
         {!isLight && <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent shadow-[0_0_20px_cyan]" />}
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex-1 flex flex-col">
        <BackButton to="/" theme={theme} />
        
        <div className="flex-1 flex flex-col items-center justify-center text-center">
            {/* Ícone de Destaque */}
            <div className={`p-8 rounded-full mb-8 relative group transition-transform hover:scale-110 duration-500 ${isLight ? 'bg-pink-100 text-pink-500 ring-8 ring-pink-50' : 'bg-[#1a1a20] border border-cyan-500/30 text-cyan-400 shadow-[0_0_40px_rgba(0,255,242,0.3)]'}`}>
                {title.toLowerCase().includes('404') || title.toLowerCase().includes('não encontrada') ? (
                    <AlertTriangle size={80} strokeWidth={1.5} />
                ) : (
                    <Construction size={80} strokeWidth={1.5} />
                )}
                
                {/* Partículas flutuantes */}
                <Sparkles className={`absolute -top-2 -right-2 w-8 h-8 animate-bounce ${isLight ? 'text-purple-400' : 'text-fuchsia-500'}`} />
            </div>
            
            <h1 className={`text-5xl md:text-8xl font-black uppercase tracking-tighter mb-6 ${textMain}`} style={{ fontFamily: "'Russo One', sans-serif" }}>
                {title}
            </h1>
            
            <p className={`text-lg md:text-2xl max-w-2xl mx-auto mb-12 font-medium leading-relaxed ${textSub}`}>
                Parece que você pegou a curva errada ou esta página ainda está sendo construída nos boxes!
            </p>

            <Link 
                to="/"
                className={`group px-10 py-4 rounded-full font-black uppercase tracking-[0.2em] transition-all duration-300 hover:scale-105 flex items-center gap-3 shadow-xl ${
                    isLight 
                    ? 'bg-gray-900 text-white hover:bg-pink-500 hover:shadow-pink-200' 
                    : 'bg-white text-black hover:bg-cyan-400 hover:shadow-[0_0_30px_cyan]'
                }`}
            >
                <Home size={20} /> Voltar ao Paddock
            </Link>
        </div>
      </div>

      <style>{`@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Russo+One&display=swap');`}</style>
    </div>
  );
};

export default GenericPage;