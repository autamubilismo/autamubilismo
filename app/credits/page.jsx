'use client';

import { Heart, Code, Palette, Database, ChevronLeft, Terminal } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from '@/components/layout/ThemeContext';

// --- COMPONENTE INTERNO: BackButton ---
const BackButton = ({ to = "/", theme }) => {
  const isLight = theme === 'light';
  return (
    <Link
      href={to}
      className={`group mb-8 inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold transition-all hover:-translate-x-1 px-5 py-2.5 rounded-full ${
        isLight
          ? 'text-gray-500 hover:text-pink-500 bg-white/50 border border-white hover:border-pink-200 shadow-sm' 
          : 'text-cyan-400/80 hover:text-cyan-300 bg-black/20 border border-cyan-500/20 hover:border-cyan-500/60 shadow-[0_0_10px_rgba(0,255,242,0.1)] hover:shadow-[0_0_20px_rgba(0,255,242,0.3)]'
      }`}
    >
      <ChevronLeft size={14} />
      Voltar
    </Link>
  );
};

const CreditsPage = () => {
  const { theme } = useTheme();
  const resolvedTheme = theme || 'light';
  const isLight = resolvedTheme === 'light';
  
  // --- BACKGROUNDS ---
  const lightPattern = {
    backgroundColor: '#FFF0F5',
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

  // --- CLASSES CSS ---
  const cardClass = isLight 
    ? 'bg-white/70 backdrop-blur-xl border border-white shadow-[0_20px_40px_-12px_rgba(255,192,203,0.4)]' 
    : 'bg-[#121217]/60 backdrop-blur-xl border border-white/5 hover:border-cyan-500/30 shadow-[0_0_40px_rgba(0,0,0,0.5)]';

  // Lógica para remover o dourado e estilizar
  const helmetFilterClass = isLight
    // Light: Grayscale -> Sepia -> Hue Rotate (para rosa) -> Saturação suave
    ? 'grayscale(100%) sepia(100%) hue-rotate(290deg) saturate(150%) brightness(110%) drop-shadow-[0_10px_20px_rgba(255,182,193,0.6)]'
    // Dark: Grayscale (vira prata) -> Brilho aumentado -> Glow Ciano
    : 'grayscale(100%) brightness(130%) drop-shadow-[0_0_20px_rgba(0,255,242,0.6)]';

  return (
    <div 
      className="min-h-screen p-4 md:p-8 animate-in fade-in slide-in-from-bottom-4 duration-700 font-sans flex flex-col"
      style={isLight ? lightPattern : darkPattern}
    >
      
      {/* Luz de Fundo Decorativa */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden mix-blend-screen">
         <div className={`absolute top-[-20%] left-[-10%] w-[800px] h-[800px] rounded-full blur-[120px] opacity-20 ${isLight ? 'bg-pink-200' : 'bg-[#bd00ff]/30 animate-pulse'}`} />
         <div className={`absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[100px] opacity-20 ${isLight ? 'bg-purple-200' : 'bg-[#00fff2]/20 animate-pulse'}`} />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex-1 flex flex-col">
        <BackButton to="/" theme={resolvedTheme} />

        <div className="flex-1 flex items-center justify-center">
          <div className={`max-w-3xl w-full p-10 md:p-20 rounded-[3rem] text-center relative overflow-hidden group ${cardClass}`}>
              
              {/* Elementos Decorativos Internos */}
              <div className={`absolute top-0 left-0 w-full h-1.5 ${isLight ? 'bg-gradient-to-r from-pink-200 via-purple-200 to-pink-200' : 'bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-cyan-500'}`} />
              
              {/* CAPACETE CENTRALIZADO (Com filtros aplicados) */}
              <div className="flex justify-center mb-10 relative z-10">
                  <div className={`relative transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3`}>
                    <img 
                        src="/img/web/helmet.png" 
                        alt="Capacete Autamubilismo" 
                        onError={(e) => {
                          e.target.onerror = null; 
                          e.target.src = "https://cdn-icons-png.flaticon.com/512/2088/2088289.png";
                        }}
                        style={{ filter: helmetFilterClass }} // Aplica o filtro aqui
                        className="w-40 h-40 md:w-52 md:h-52 object-contain"
                    />
                  </div>
              </div>

              <h1 className={`text-4xl md:text-6xl font-black mb-6 tracking-tighter leading-none ${isLight ? 'text-gray-900' : 'text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]'}`}>
                  Feito com <span className={isLight ? "text-pink-500" : "text-fuchsia-400"}>paixão</span>.
              </h1>
              
              <p className={`text-lg md:text-xl mb-16 leading-relaxed font-medium max-w-2xl mx-auto ${isLight ? 'text-gray-500' : 'text-cyan-100/70'}`}>
                  O <strong>Autamubilismo</strong> é um projeto independente, codado linha por linha para trazer uma nova visão estética e técnica sobre a Fórmula 1.
              </p>

              {/* Grid de Tecnologias */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                  {[
                    { icon: Code, label: "React + Vite", colorLight: "bg-blue-50 text-blue-500", colorDark: "bg-[#1a1a20] text-cyan-400 border-cyan-500/30" },
                    { icon: Palette, label: "Tailwind CSS", colorLight: "bg-teal-50 text-teal-500", colorDark: "bg-[#1a1a20] text-teal-400 border-teal-500/30" },
                    { icon: Database, label: "Sanity.io", colorLight: "bg-purple-50 text-purple-500", colorDark: "bg-[#1a1a20] text-purple-400 border-purple-500/30" },
                    { icon: Heart, label: "Por Tamu", colorLight: "bg-pink-50 text-pink-500", colorDark: "bg-[#1a1a20] text-pink-400 border-pink-500/30" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-4 group/tech">
                      <div className={`p-5 rounded-2xl transition-all duration-300 group-hover/tech:-translate-y-2 group-hover/tech:shadow-lg ${isLight ? item.colorLight : `${item.colorDark} border shadow-[0_0_15px_rgba(0,0,0,0.2)]`}`}>
                        <item.icon size={28} className={isLight ? "" : "drop-shadow-[0_0_5px_currentColor]"} />
                      </div>
                      <span className={`text-xs font-bold uppercase tracking-wider ${isLight ? 'text-gray-400' : 'text-gray-500'}`}>
                        {item.label}
                      </span>
                    </div>
                  ))}
              </div>

              {/* Footer */}
              <div className={`border-t pt-8 flex flex-col md:flex-row items-center justify-center gap-4 ${isLight ? 'border-pink-100' : 'border-white/5'}`}>
                <p className={`text-xs font-bold uppercase tracking-[0.2em] opacity-50 ${isLight ? 'text-gray-400' : 'text-cyan-100'}`}>
                    © 2025 Autamubilismo
                </p>
                <span className={`hidden md:block w-1 h-1 rounded-full ${isLight ? 'bg-gray-300' : 'bg-white/20'}`}></span>
                <p className={`text-xs font-bold uppercase tracking-[0.2em] opacity-50 ${isLight ? 'text-gray-400' : 'text-cyan-100'}`}>
                    v1.0.0
                </p>
              </div>
          </div>
        </div>
      </div>
      
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');`}</style>
    </div>
  );
};

export default CreditsPage;
