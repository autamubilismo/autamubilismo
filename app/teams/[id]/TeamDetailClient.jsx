'use client';

import Link from 'next/link';
import { 
  Trophy, MapPin, Zap, Users, Flag, Briefcase, ArrowRight, 
  Settings, ChevronLeft, Star, Car
} from 'lucide-react';
import { useParams } from 'next/navigation';
import { TEAMS_DATA } from '@/data/teams';
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

// --- COMPONENTE INTERNO: BackButton (Estilizado) ---
const BackButton = ({ to = "/", theme }) => {
  const isLight = theme === 'light';
  return (
    <Link
      href={to}
      className={`group mb-8 inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold transition-all hover:-translate-x-1 duration-200 px-5 py-2.5 rounded-full ${
        isLight
          ? 'text-gray-500 hover:text-cottage-rosy bg-white/50 hover:bg-white border border-transparent hover:border-cottage-rosy shadow-sm'
          : 'text-cyan-400/70 hover:text-cyan-300 bg-black/20 hover:bg-black/40 border border-cyan-500/10 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(0,255,255,0.2)]'
      }`}
    >
      <ChevronLeft size={16} />
      Voltar
    </Link>
  );
};

const TeamDetailClient = ({ id }) => {
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

  // Encontra a equipe (com fallback para ID ou nome normalizado)
  const team = TEAMS_DATA.find((t) => {
    const teamId = normalizeSlug(t.id || '');
    const teamSlug = normalizeSlug(t.name || '');
    return teamId === normalizedId || teamSlug === normalizedId;
  });

  if (!team) {
    return (
      <div className={`min-h-screen flex flex-col items-center justify-center text-center font-sans ${isLight ? 'bg-[#F7F4D5] text-gray-800' : 'bg-[#090011] text-cyan-50'}`}>
         <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter">Equipe nao encontrada</h2>
         <Link href="/teams" className={`px-6 py-3 rounded-full font-bold text-sm uppercase tracking-widest ${isLight ? 'bg-cottage-rosy text-cottage-beige hover:bg-cottage-rosy' : 'bg-white/10 hover:bg-white/20 text-cyan-400'}`}>
           Voltar aos Construtores
         </Link>
      </div>
    );
  }

  // Lógica da Imagem
  const teamFolder = normalizeSlug(team.id || team.name || '');
  const carImage = `/img/equipes/${teamFolder}/carro-${teamFolder}.avif`;

  // Estilos Dinâmicos Baseados no Tema
  const textColor = isLight ? 'text-gray-900' : 'text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]';
  const subText = isLight ? 'text-gray-500' : 'text-cyan-200/60';

  // Estilo dos Cartões (Vidro/Neon)
  const cardClass = isLight
    ? 'bg-white/80 backdrop-blur-xl rounded-[2.5rem] shadow-[0_4px_20px_rgba(236,72,153,0.1)] border border-white hover:shadow-[0_8px_30px_rgba(236,72,153,0.2)]'
    : 'bg-[#121217]/60 backdrop-blur-xl rounded-[2rem] border border-white/5 hover:border-cyan-500/30 hover:shadow-[0_0_20px_rgba(0,255,255,0.1)]';

  return (
    <div 
      className={`min-h-screen w-full px-6 py-8 transition-colors duration-500 font-sans ${
        isLight 
          ? 'bg-[#F7F4D5] bg-[radial-gradient(#D3968C_1px,transparent_1px)] [background-size:20px_20px]' 
          : 'bg-[#090011] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#2a004a] via-[#090011] to-[#05000a] text-cyan-50'
      }`}
    >
      {/* Grid Retro Decorativo para Dark Mode */}
      {!isLight && (
        <div className="absolute inset-0 pointer-events-none opacity-20 fixed z-0" 
             style={{ 
               backgroundImage: 'linear-gradient(rgba(255, 0, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)', 
               backgroundSize: '40px 40px',
               maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)'
             }} 
        />
      )}

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <BackButton to="/teams" theme={resolvedTheme} />

        {/* --- HERO SECTION (GARAGEM & CARRO) --- */}
        <div 
          className={`relative w-full rounded-[3rem] overflow-hidden mb-8 p-8 md:p-12 transition-all duration-500 group border ${
            isLight ? 'border-white shadow-xl' : 'border-white/10 shadow-[0_0_30px_rgba(189,0,255,0.1)]'
          }`}
          style={{ 
              background: isLight 
                ? `linear-gradient(135deg, ${team.color}15 0%, #ffffff 100%)` 
                : `linear-gradient(135deg, ${team.color}40 0%, #050010 100%)`
          }}
        >
          {/* Elementos Decorativos de Fundo */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-white/40 to-transparent blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2 opacity-50"></div>
          {!isLight && <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>}

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              
              {/* Info da Equipe */}
              <div>
                  <div className="flex items-center gap-6 mb-8">
                      <div className={`w-24 h-24 backdrop-blur-md rounded-3xl p-4 shadow-lg flex items-center justify-center shrink-0 rotate-3 transition-transform group-hover:rotate-0 duration-500 ring-4 ${
                        isLight ? 'bg-white/80 ring-white/50' : 'bg-black/40 ring-white/10'
                      }`}>
                          <img 
                              src={`/img/equipes/${teamFolder}/logo-${teamFolder}.png`} 
                              alt={team.name} 
                              className="w-full h-full object-contain"
                              onError={(e) => { e.target.style.display='none'; }}
                          />
                      </div>
                      <div>
                          <h1 className={`text-5xl md:text-7xl font-black leading-none uppercase tracking-tighter ${
                            isLight 
                              ? 'text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600' 
                              : 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-fuchsia-300 drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]'
                          }`} style={{ fontFamily: "'Russo One', sans-serif" }}>
                              {team.name}
                          </h1>
                          <p className={`text-lg md:text-xl mt-2 font-medium tracking-wide uppercase ${
                            isLight ? 'text-gray-500' : 'text-cyan-200/80'
                          }`}>
                              {team.fullName}
                          </p>
                      </div>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-3">
                      {team.titles > 0 && (
                        <div className={`flex items-center gap-2 backdrop-blur-md px-5 py-2.5 rounded-2xl border shadow-sm ${
                          isLight ? 'bg-white/60 border-white text-gray-800' : 'bg-black/30 border-white/10 text-white'
                        }`}>
                            <Trophy className={isLight ? "text-yellow-500" : "text-yellow-300 drop-shadow-[0_0_5px_rgba(253,224,71,0.8)]"} size={20} fill="currentColor" />
                            <span className="font-black text-lg">{team.titles} <span className={`text-xs font-bold uppercase tracking-wider ${isLight ? 'text-gray-400' : 'text-gray-500'}`}>Mundiais</span></span>
                        </div>
                      )}
                      <div className={`flex items-center gap-2 backdrop-blur-md px-5 py-2.5 rounded-2xl border shadow-sm ${
                        isLight ? 'bg-white/60 border-white text-gray-800' : 'bg-black/30 border-white/10 text-white'
                      }`}>
                          <MapPin className={isLight ? "text-cottage-rosy" : "text-fuchsia-400"} size={20} />
                          <span className="font-bold text-sm tracking-wide">{team.base}</span>
                      </div>
                  </div>
              </div>

              {/* FOTO DO CARRO */}
              <div className="relative h-64 lg:h-96 flex items-center justify-center lg:justify-end">
                  <img 
                      src={carImage} 
                      alt={`Carro ${team.name}`} 
                      className="w-full h-full object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-110 group-hover:-translate-x-4 z-10"
                      onError={(e) => { e.target.style.display = 'none'; }}
                  />
                  {/* Sombra do carro */}
                  <div className={`absolute bottom-10 left-10 right-10 h-8 blur-2xl rounded-full transform scale-x-75 pointer-events-none ${
                    isLight ? 'bg-black/20' : 'bg-cyan-500/20'
                  }`} />
              </div>
          </div>
        </div>

        {/* --- GRID DE INFORMAÇÕES --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* 1. PILOTOS */}
            <div className={`lg:col-span-2 p-8 md:p-10 ${cardClass} relative overflow-hidden`}>
              <div className="flex items-center gap-3 mb-8">
                  <div className={`p-2.5 rounded-xl ${isLight ? 'bg-cottage-rosy text-cottage-beige' : 'bg-fuchsia-500/20 text-fuchsia-400 border border-fuchsia-500/30'}`}>
                    <Users size={24} />
                  </div>
                  <h3 className={`text-2xl font-black uppercase tracking-wide ${textColor}`}>Line-up 2026</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {team.drivers && team.drivers.map((driverName, idx) => (
                      <div key={idx} className={`group/driver relative p-5 rounded-[2rem] flex items-center justify-between transition-all duration-300 hover:scale-[1.02] cursor-pointer ${
                        isLight 
                          ? 'bg-gray-50 border border-transparent hover:bg-white hover:border-cottage-rosy hover:shadow-lg' 
                          : 'bg-white/5 border border-white/5 hover:border-cyan-500/50 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(0,255,255,0.1)]'
                      }`}>
                          <div className="flex items-center gap-5">
                              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-black shadow-inner ${
                                isLight ? 'bg-white text-gray-400' : 'bg-black/40 text-gray-500 border border-white/10'
                              }`}>
                                  {driverName.charAt(0)}
                              </div>
                              <div>
                                  <span className={`text-[10px] font-bold uppercase opacity-60 block mb-0.5 tracking-widest ${textColor}`}>Piloto {idx + 1}</span>
                                  <h4 className={`text-lg font-black leading-none ${textColor}`}>{driverName}</h4>
                              </div>
                          </div>
                          <div className={`p-2 rounded-full transition-all transform translate-x-2 opacity-0 group-hover/driver:opacity-100 group-hover/driver:translate-x-0 ${
                            isLight ? 'bg-cottage-rosy text-cottage-beige' : 'bg-cyan-500/20 text-cyan-400'
                          }`}>
                              <ArrowRight size={16} />
                          </div>
                      </div>
                  ))}
              </div>
            </div>

            {/* 2. ESTATÍSTICAS TÉCNICAS */}
            <div className={`lg:col-span-1 p-8 md:p-10 ${cardClass} flex flex-col justify-center`}>
              <h3 className={`text-lg font-black uppercase tracking-wide mb-8 flex items-center gap-2 opacity-70 ${textColor}`}>
                  <Settings size={18} /> Tech Specs
              </h3>
              
              <ul className="space-y-6">
                  <li className="flex items-center justify-between group">
                      <div className="flex items-center gap-4">
                          <div className={`p-2 rounded-lg ${isLight ? 'bg-blue-50 text-blue-500' : 'bg-blue-500/10 text-blue-400'}`}><Zap size={18} /></div>
                          <span className={`font-bold text-xs uppercase tracking-widest ${subText}`}>Motor</span>
                      </div>
                      <span className={`font-black text-lg ${textColor}`}>{team.engine}</span>
                  </li>

                  <li className="flex items-center justify-between group">
                      <div className="flex items-center gap-4">
                          <div className={`p-2 rounded-lg ${isLight ? 'bg-cottage-rosy text-cottage-beige' : 'bg-cottage-rosy/10 text-cottage-beige'}`}><Briefcase size={18} /></div>
                          <span className={`font-bold text-xs uppercase tracking-widest ${subText}`}>Chefe</span>
                      </div>
                      <span className={`font-bold text-base text-right ${textColor}`}>{team.principal || "N/A"}</span>
                  </li>

                  <li className="flex items-center justify-between group">
                      <div className="flex items-center gap-4">
                          <div className={`p-2 rounded-lg ${isLight ? 'bg-red-50 text-red-500' : 'bg-red-500/10 text-red-400'}`}><MapPin size={18} /></div>
                          <span className={`font-bold text-xs uppercase tracking-widest ${subText}`}>Sede</span>
                      </div>
                      <span className={`font-bold text-base text-right ${textColor}`}>{team.base ? team.base.split(',')[0] : "Global"}</span>
                  </li>
              </ul>
            </div>

            {/* 3. BIO */}
            <div className={`lg:col-span-3 p-8 md:p-12 ${cardClass} relative overflow-hidden`}>
              <div className={`absolute top-0 right-0 p-8 opacity-5 rotate-12 ${isLight ? 'text-gray-900' : 'text-white'}`}>
                  <Flag size={180} />
              </div>
              <h3 className={`text-3xl font-black mb-4 uppercase tracking-tighter ${textColor}`}>A Garagem</h3>
              <p className={`text-lg md:text-xl leading-relaxed max-w-4xl font-medium ${subText}`}>
                  {team.bio || `A equipe ${team.name} é uma das forças mais icônicas do grid atual. Com sede em ${team.base || 'diversos locais'}, eles buscam dominar a temporada combinando inovação aerodinâmica e a potência do motor ${team.engine}.`}
              </p>
            </div>
        </div>
      </div>
      
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');`}</style>
    </div>
  );
};

export default TeamDetailClient;
