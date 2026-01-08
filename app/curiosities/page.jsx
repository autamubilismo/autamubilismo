'use client';

import Link from 'next/link';
import { Zap, Award, Clock, Flag, Fuel, Settings, ChevronLeft, Sparkles, Lightbulb } from 'lucide-react';
import { useTheme } from '@/components/layout/ThemeContext';

// --- COMPONENTE INTERNO: BackButton (Estilo Girlie/Vaporwave) ---
const BackButton = ({ to = "/", theme }) => {
  const isLight = theme === 'light';
  return (
    <Link
      href={to}
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

// --- DADOS DAS CURIOSIDADES ---
const CURIOSITIES_DATA = [
  {
    id: 1,
    title: "O piloto mais jovem",
    text: "Max Verstappen é o piloto mais jovem a iniciar uma corrida (17 anos, 166 dias) e a vencer uma (18 anos, 228 dias).",
    icon: Award,
    colorLight: "text-yellow-500 bg-yellow-50 ring-yellow-100",
    colorDark: "text-yellow-400 bg-yellow-900/20 border-yellow-500/30 shadow-yellow-500/20"
  },
  {
    id: 2,
    title: "Pit Stop Recorde",
    text: "A McLaren detém o recorde mundial do pit stop mais rápido: 1.80 segundos, no GP do Catar de 2023.",
    icon: Clock,
    colorLight: "text-blue-500 bg-blue-50 ring-blue-100",
    colorDark: "text-cyan-400 bg-cyan-900/20 border-cyan-500/30 shadow-cyan-500/20"
  },
  {
    id: 3,
    title: "Perda de Peso",
    text: "Um piloto pode perder até 4kg de peso corporal apenas transpirando durante uma corrida de 2 horas em locais quentes.",
    icon: Zap,
    colorLight: "text-orange-500 bg-orange-50 ring-orange-100",
    colorDark: "text-orange-400 bg-orange-900/20 border-orange-500/30 shadow-orange-500/20"
  },
  {
    id: 4,
    title: "Consumo de Combustível",
    text: "Um carro de F1 consome cerca de 110kg de combustível por corrida, com uma eficiência térmica de mais de 50%.",
    icon: Fuel,
    colorLight: "text-red-500 bg-red-50 ring-red-100",
    colorDark: "text-red-400 bg-red-900/20 border-red-500/30 shadow-red-500/20"
  },
  {
    id: 5,
    title: "Força G Extrema",
    text: "Em curvas de alta velocidade, como a curva 8 na Turquia, os pilotos podem enfrentar até 5G ou mais de força lateral.",
    icon: Settings,
    colorLight: "text-purple-500 bg-purple-50 ring-purple-100",
    colorDark: "text-fuchsia-400 bg-fuchsia-900/20 border-fuchsia-500/30 shadow-fuchsia-500/20"
  },
  {
    id: 6,
    title: "Bandeira Quadriculada",
    text: "A tradição da bandeira quadriculada vem desde 1906, no Glider Tour, usada para sinalizar o fim da prova.",
    icon: Flag,
    colorLight: "text-green-500 bg-green-50 ring-green-100",
    colorDark: "text-emerald-400 bg-emerald-900/20 border-emerald-500/30 shadow-emerald-500/20"
  }
];

const CuriositiesPage = () => {
  const { theme } = useTheme();
  const resolvedTheme = theme || 'light';
  const isLight = resolvedTheme === 'light';

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

  const textMain = isLight ? 'text-gray-900' : 'text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.6)]';
  const textSub = isLight ? 'text-gray-500' : 'text-cyan-100/70';

  return (
    <div 
      className="min-h-screen p-4 md:p-8 animate-in fade-in slide-in-from-bottom-4 duration-700 font-sans"
      style={isLight ? lightPattern : darkPattern}
    >
      
      {/* Luz de Fundo Decorativa */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden mix-blend-screen">
         <div className={`absolute top-[-20%] left-[-10%] w-[800px] h-[800px] rounded-full blur-[120px] opacity-20 ${isLight ? 'bg-pink-200' : 'bg-[#bd00ff]/30 animate-pulse'}`} />
         <div className={`absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[100px] opacity-20 ${isLight ? 'bg-purple-200' : 'bg-[#00fff2]/20 animate-pulse'}`} />
         {!isLight && <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent shadow-[0_0_20px_cyan]" />}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <BackButton to="/" theme={resolvedTheme} />

        <div className="mb-12 text-center md:text-left relative">
          <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
             <div className={`p-2 rounded-full ${isLight ? 'bg-pink-100 text-pink-500' : 'bg-fuchsia-900/30 text-fuchsia-400'}`}>
                <Lightbulb size={28} />
             </div>
             <h2 className={`text-5xl md:text-7xl font-black uppercase tracking-tighter ${isLight ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 drop-shadow-sm' : 'text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]'}`} style={{ fontFamily: isLight ? 'sans-serif' : "'Russo One', sans-serif" }}>
               Você Sabia?
             </h2>
          </div>
          <p className={`ml-1 text-lg font-medium max-w-xl mx-auto md:mx-0 ${textSub}`}>
            Fatos aleatórios, estatísticas insanas e segredos do paddock.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {CURIOSITIES_DATA.map((item) => (
            <div 
              key={item.id} 
              className={`group p-8 md:p-10 rounded-[2.5rem] transition-all duration-500 hover:-translate-y-2 flex flex-col gap-6 relative overflow-hidden ${
                isLight 
                  ? 'bg-white/70 backdrop-blur-md border border-pink-100 hover:border-pink-300 shadow-[0_10px_30px_rgba(255,182,193,0.3)] hover:shadow-[0_15px_40px_rgba(255,105,180,0.3)]' 
                  : 'bg-[#121217]/80 backdrop-blur-xl border border-white/10 hover:border-cyan-500/50 shadow-[0_0_20px_rgba(0,255,242,0.1)] hover:shadow-[0_0_30px_rgba(0,255,242,0.2)]'
              }`}
            >
               {/* Elemento Decorativo no Card */}
               <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-current to-transparent opacity-5 rounded-bl-full pointer-events-none transition-opacity group-hover:opacity-10 ${isLight ? 'text-pink-500' : 'text-cyan-400'}`} />

               <div className={`p-4 rounded-2xl w-fit transition-transform duration-300 group-hover:scale-110 shadow-sm ring-1 ${isLight ? item.colorLight : `${item.colorDark} ring-0 border`}`}>
                  <item.icon size={32} strokeWidth={1.5} />
               </div>
               
               <div>
                  <h3 className={`text-xl md:text-2xl font-black mb-3 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${isLight ? 'group-hover:from-pink-500 group-hover:to-purple-600 text-gray-900' : 'group-hover:from-cyan-400 group-hover:to-fuchsia-500 text-white'} transition-all`}>
                     {item.title}
                  </h3>
                  <p className={`leading-relaxed text-sm md:text-base font-medium ${textSub}`}>
                     {item.text}
                  </p>
               </div>

               {/* Brilho Vaporwave no Hover (Dark Mode) */}
               {!isLight && (
                 <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-500/30 rounded-[2.5rem] pointer-events-none transition-all duration-500" />
               )}
            </div>
          ))}
        </div>
      </div>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Russo+One&display=swap');`}</style>
    </div>
  );
};

export default CuriositiesPage;
