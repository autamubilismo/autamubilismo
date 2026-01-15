'use client';

import Link from 'next/link';
import { 
  Trophy, MapPin, Flag, Star, Zap, 
  LayoutGrid, ChevronLeft, Heart, Sparkles, Crown, Flame
} from 'lucide-react';
import { useParams } from 'next/navigation';
import { BackButton } from '@/components/ui';
import { DRIVERS_DATA } from '@/data';
import { useTheme } from '@/components/layout/ThemeContext';

const normalizeSlug = (value) =>
  value
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const DriverDetailClient = ({ id }) => {
  const { theme } = useTheme();
  const resolvedTheme = theme || 'light';
  const isLight = resolvedTheme === 'light';
  const params = useParams();
  const rawId = id ?? params?.id ?? '';
  let decodedId = rawId;
  if (typeof rawId === 'string') {
    try {
      decodedId = decodeURIComponent(rawId);
    } catch {
      decodedId = rawId;
    }
  }
  const normalizedId = normalizeSlug(decodedId || '');

  // Busca o piloto nos dados importados
  const driver = DRIVERS_DATA.find((d) => {
    const driverId = normalizeSlug(d.id || '');
    const driverSlug = normalizeSlug(d.name || '');
    return driverId === normalizedId || driverSlug === normalizedId;
  });

  // Fallback caso não encontre o piloto
  if (!driver) {
    return (
      <div className={`min-h-screen flex flex-col items-center justify-center text-center p-6 ${isLight ? 'bg-[#FFF5F8]' : 'bg-[#050510]'}`}>
         <div className={`w-24 h-24 rounded-full flex items-center justify-center mb-6 ${isLight ? 'bg-pink-100' : 'bg-white/10'}`}>
            <Zap size={40} className={isLight ? 'text-pink-500' : 'text-cyan-400'} />
         </div>
         <h2 className={`text-4xl font-black uppercase tracking-tighter ${isLight ? 'text-gray-800' : 'text-white'}`}>Piloto não encontrado</h2>
         <Link href="/drivers" className={`mt-6 px-8 py-3 rounded-full font-bold transition-all shadow-lg ${isLight ? 'bg-pink-500 text-white hover:bg-pink-600 shadow-pink-200' : 'bg-cyan-500 text-black hover:bg-cyan-400 shadow-cyan-500/50'}`}>Voltar ao Grid</Link>
      </div>
    );
  }

  // Lógica de imagem e nome (Preservada da sua configuração)
  const surname = driver.name.split(" ").slice(-1)[0].toLowerCase();
  const fullBodyUrl = `/img/pilotos/${surname}/corpo-${surname}.avif`;

  // --- CONFIGURAÇÃO DE ESTILO (GIRLIE vs VAPORWAVE) ---
  
  // Backgrounds
  const bgStyle = isLight 
    ? {
        backgroundColor: '#FFF5F8',
        backgroundImage: `
          radial-gradient(at 0% 0%, rgba(247, 184, 200, 0.4) 0px, transparent 50%),
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

  // Cores de Texto e Cards
  const textColor = isLight ? 'text-gray-900' : 'text-white';
  const textSub = isLight ? 'text-pink-500/80 font-bold' : 'text-cyan-300/80 font-bold';
  
  const cardBg = isLight 
    ? 'bg-white/70 backdrop-blur-xl border border-white/60 shadow-[0_10px_40px_-10px_rgba(255,182,193,0.4)]' 
    : 'bg-[#121217]/80 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:border-cyan-500/30 transition-colors';

  const titleEffect = isLight 
    ? 'text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 drop-shadow-sm'
    : 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-fuchsia-400 drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]';

  return (
    <div 
      className={`min-h-screen animate-in fade-in slide-in-from-bottom-8 duration-700 pb-24 font-sans ${isLight ? 'selection:bg-pink-300 selection:text-white' : 'selection:bg-cyan-500 selection:text-black'}`}
      style={bgStyle}
    >
      
      {/* Luzes decorativas flutuantes (Ambiente) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden mix-blend-screen">
         <div className={`absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full blur-[120px] opacity-30 ${isLight ? 'bg-pink-200' : 'bg-[#bd00ff]/20 animate-pulse'}`} />
         <div className={`absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full blur-[100px] opacity-20 ${isLight ? 'bg-purple-200' : 'bg-[#00fff2]/20 animate-pulse'}`} />
         {!isLight && <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent shadow-[0_0_20px_cyan]" />}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-8">
        <BackButton to="/drivers" theme={resolvedTheme} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-8">
          
          {/* --- FOTO CORPO INTEIRO (CONTAINER PREMIUM) --- */}
          <div className="lg:col-span-5 xl:col-span-4 order-2 lg:order-1">
             <div 
               className={`relative rounded-[3.5rem] overflow-hidden h-[550px] lg:h-[820px] w-full sticky top-8 transition-all duration-700 group ${isLight ? 'shadow-2xl shadow-pink-200/50 ring-4 ring-white/50' : 'shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-white/5 ring-1 ring-white/10'}`}
               style={{ backgroundColor: driver.color }}
             >
                {/* Overlay Estético */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-black/20 mix-blend-overlay" />

                {/* Número Gigante Ghost */}
                <span className={`absolute -bottom-10 -right-10 text-[18rem] font-black select-none leading-none transform rotate-12 group-hover:rotate-0 transition-transform duration-1000 ${isLight ? 'text-white/20' : 'text-white/10'}`}>
                  {driver.number}
                </span>

                <img 
                  src={fullBodyUrl} 
                  alt={driver.name} 
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[92%] w-auto object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-10 transition-transform group-hover:scale-105 duration-1000"
                  onError={(e) => { 
                    // Fallback visual se a imagem falhar (usa a imagem de rosto)
                    e.target.src = driver.image; 
                    e.target.className = "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full object-cover border-8 border-white/20 backdrop-blur-md shadow-2xl"; 
                  }}
                />
                
                {/* Gradiente Inferior para Contraste */}
                <div className={`absolute inset-0 bg-gradient-to-t z-20 ${isLight ? 'from-black/30 via-transparent to-transparent' : 'from-[#050510]/90 via-transparent to-transparent'}`} />
                
                {/* Nome Mobile (Overlay na foto) */}
                <div className="absolute bottom-10 left-0 w-full text-center z-30 lg:hidden px-4">
                    <h1 className="text-5xl font-black text-white uppercase tracking-tighter drop-shadow-lg">{driver.name}</h1>
                </div>
             </div>
          </div>

          {/* --- DADOS E CONTEÚDO --- */}
          <div className="lg:col-span-7 xl:col-span-8 order-1 lg:order-2 flex flex-col gap-8">
              
              {/* Header Section (Desktop) */}
              <div className="hidden lg:block">
                 <div className="flex items-center gap-4 mb-4">
                    <span className="px-5 py-2 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] text-white shadow-lg transform hover:scale-105 transition-transform" style={{ backgroundColor: driver.color }}>
                      {driver.team}
                    </span>
                    <div className={`flex items-center gap-2 px-4 py-1.5 rounded-full border ${isLight ? 'bg-white/50 border-pink-100' : 'bg-white/5 border-white/10'}`}>
                       <MapPin size={12} className={isLight ? 'text-pink-400' : 'text-cyan-400'} />
                       <span className={`text-[10px] font-black uppercase tracking-widest ${textColor}`}>{driver.country || "Mundo"}</span>
                    </div>
                 </div>
                 
                 <h1 className={`text-7xl xl:text-8xl font-black uppercase tracking-tighter leading-[0.8] mb-4 ${titleEffect}`} style={{ fontFamily: "'Russo One', sans-serif" }}>
                   {driver.name.split(' ').map((n, i) => (
                     <span key={i} className="block">{n}</span>
                   ))}
                 </h1>
              </div>

              {/* Stats Grid - Aesthetic Style */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                 {/* Card Pódios */}
                 <div className={`p-6 rounded-[2rem] ${cardBg} group hover:-translate-y-1 transition-all duration-300`}>
                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center mb-6 ${isLight ? 'bg-yellow-50' : 'bg-yellow-400/10'}`}>
                       <Trophy size={20} className={isLight ? 'text-yellow-500' : 'text-yellow-400'} />
                    </div>
                    <span className={`block text-3xl font-black tracking-tighter ${textColor}`}>{driver.stats?.podiums || '0'}</span>
                    <span className={`text-[9px] uppercase tracking-[0.2em] ${textSub}`}>Pódios</span>
                 </div>

                 {/* Card Experiência */}
                 <div className={`p-6 rounded-[2rem] ${cardBg} group hover:-translate-y-1 transition-all duration-300`}>
                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center mb-6 ${isLight ? 'bg-blue-50' : 'bg-blue-400/10'}`}>
                       <Flag size={20} className={isLight ? 'text-blue-500' : 'text-[#00fff2]'} />
                    </div>
                    <span className={`block text-3xl font-black tracking-tighter ${textColor}`}>{driver.stats?.xp || 'Rookie'}</span>
                    <span className={`text-[9px] uppercase tracking-[0.2em] ${textSub}`}>Experiência</span>
                 </div>

                 {/* Card Melhor Resultado */}
                 <div className={`p-6 rounded-[2rem] ${cardBg} group hover:-translate-y-1 transition-all duration-300`}>
                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center mb-6 ${isLight ? 'bg-purple-50' : 'bg-purple-400/10'}`}>
                       <Star size={20} className={isLight ? 'text-purple-500' : 'text-fuchsia-400'} />
                    </div>
                    <span className={`block text-3xl font-black tracking-tighter ${textColor}`}>{driver.stats?.bestResult || 'N/A'}</span>
                    <span className={`text-[9px] uppercase tracking-[0.2em] ${textSub}`}>Melhor Res.</span>
                 </div>

                 {/* Card Número (Colorido) */}
                 <div className="p-6 rounded-[2rem] shadow-xl group hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col justify-between" style={{ backgroundColor: driver.color }}>
                    <div className="absolute -top-4 -right-4 text-8xl font-black text-white/20">#</div>
                    <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-6">
                       <Heart size={20} className="text-white fill-white animate-pulse" />
                    </div>
                    <div>
                     <span className="block text-3xl font-black tracking-tighter text-white">{driver.number}</span>
                     <span className="text-[9px] uppercase tracking-[0.2em] text-white/80">Número</span>
                    </div>
                 </div>
              </div>

              {/* Bio Section */}
              <div className={`p-10 rounded-[3rem] relative overflow-hidden ${cardBg}`}>
                 <div className={`absolute top-0 left-0 w-2 h-full`} style={{ backgroundColor: driver.color }} />
                 
                 <h3 className={`text-xl font-black uppercase tracking-widest mb-6 flex items-center gap-3 ${textColor}`}>
                    <LayoutGrid size={22} className={isLight ? 'text-pink-400' : 'text-cyan-400'} /> 
                    Bio do Piloto
                 </h3>
                 
                 <p className={`text-xl leading-relaxed font-medium ${isLight ? 'text-gray-600' : 'text-gray-300'}`}>
                   {driver.bio || "A história deste piloto na pista está sendo escrita. Conhecido por sua determinação e estilo único de pilotagem."}
                 </p>
                 
                 <div className="mt-12 pt-8 border-t border-white/10 flex justify-end">
                    <span className={`text-5xl opacity-40 italic ${textColor}`} style={{ fontFamily: "'Dancing Script', cursive" }}>
                      {driver.signature || driver.name}
                    </span>
                 </div>
              </div>

              {/* Bottom Grid: Vibe Profile & Curiosidade */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {/* Vibe Profile */}
                 <div className={`p-8 rounded-[2.5rem] ${cardBg}`}>
                    <h4 className={`text-xs font-black uppercase tracking-[0.3em] mb-6 ${textSub}`}>Vibe Profile</h4>
                    <div className="flex flex-wrap gap-3">
                       {driver.vibes && driver.vibes.map((vibe, i) => {
                           const Icon = vibe.icon || Sparkles; 
                           return (
                             <div key={i} className={`flex items-center gap-3 px-5 py-2.5 rounded-2xl border transition-all hover:scale-105 ${
                               isLight ? 'bg-pink-50/50 border-pink-100 text-gray-700' : 'bg-white/5 border-white/10 text-gray-200 hover:border-cyan-500/50'
                             }`}>
                               <Icon size={18} className={isLight ? 'text-pink-400' : 'text-cyan-400'} />
                               <span className="text-xs font-black uppercase tracking-tight">{vibe.label}</span>
                             </div>
                           )
                       })}
                       {(!driver.vibes || driver.vibes.length === 0) && (
                         <span className="text-xs opacity-50 italic">Vibes não definidas.</span>
                       )}
                    </div>
                 </div>
                 
                 {/* Curiosidade */}
                 <div className={`p-8 rounded-[2.5rem] relative overflow-hidden group ${isLight ? 'bg-gray-900 text-white shadow-2xl' : 'bg-[#090912] border border-[#bd00ff]/30 text-white shadow-[0_0_30px_rgba(189,0,255,0.15)]'}`}>
                    <Zap className={`absolute -top-4 -right-4 w-32 h-32 opacity-10 rotate-12 transition-transform group-hover:scale-110 duration-700 ${isLight ? 'text-white' : 'text-fuchsia-500'}`} />
                    <h4 className={`text-[10px] font-black uppercase tracking-[0.4em] mb-4 opacity-50 ${!isLight && 'text-fuchsia-300'}`}>Curiosidade</h4>
                    <p className={`text-2xl font-black leading-tight tracking-tighter uppercase italic relative z-10 ${!isLight && 'text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400'}`}>
                      "{driver.secretFact || "Um segredo guardado nas curvas mais rápidas do mundo..."}"
                    </p>
                 </div>
              </div>
          </div>
        </div>
      </div>
      
      {/* Import de fonte cursiva e display */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Russo+One&display=swap');
      `}</style>
    </div>
  );
};

export default DriverDetailClient;
