import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Users, ArrowRight, Zap, ChevronLeft, Flag, Sparkles } from 'lucide-react';

// --- DADOS DAS EQUIPES (Inlined para evitar erros de importação) ---
const TEAMS_DATA = [
  { id: 'mclaren', name: 'McLaren', fullName: 'McLaren Formula 1 Team', drivers: ['Lando Norris', 'Oscar Piastri'], color: '#FF8700', domain: 'mclaren.com' },
  { id: 'ferrari', name: 'Ferrari', fullName: 'Scuderia Ferrari HP', drivers: ['Charles Leclerc', 'Lewis Hamilton'], color: '#DC0000', domain: 'ferrari.com' },
  { id: 'redbull', name: 'Red Bull', fullName: 'Oracle Red Bull Racing', drivers: ['Max Verstappen', 'Yuki Tsunoda'], color: '#0600EF', domain: 'redbullracing.com' },
  { id: 'mercedes', name: 'Mercedes', fullName: 'Mercedes-AMG PETRONAS F1 Team', drivers: ['George Russell', 'Kimi Antonelli'], color: '#00D2BE', domain: 'mercedesamgf1.com' },
  { id: 'astonmartin', name: 'Aston Martin', fullName: 'Aston Martin Aramco F1 Team', drivers: ['Fernando Alonso', 'Lance Stroll'], color: '#006F62', domain: 'astonmartinf1.com' },
  { id: 'alpine', name: 'Alpine', fullName: 'BWT Alpine F1 Team', drivers: ['Pierre Gasly', 'Jack Doohan'], color: '#0090FF', domain: 'alpinecars.com' },
  { id: 'williams', name: 'Williams', fullName: 'Williams Racing', drivers: ['Alex Albon', 'Carlos Sainz'], color: '#005AFF', domain: 'williamsf1.com' },
  { id: 'rb', name: 'Racing Bulls', fullName: 'Visa Cash App RB F1 Team', drivers: ['Liam Lawson', 'Isack Hadjar'], color: '#1633EF', domain: 'visacashapprb.com' },
  { id: 'sauber', name: 'Kick Sauber', fullName: 'Stake F1 Team Kick Sauber', drivers: ['Nico Hulkenberg', 'Gabriel Bortoleto'], color: '#52E252', domain: 'sauber-group.com' },
  { id: 'haas', name: 'Haas', fullName: 'MoneyGram Haas F1 Team', drivers: ['Esteban Ocon', 'Oliver Bearman'], color: '#B6BABD', domain: 'haasf1team.com' },
];

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

const TeamsPage = ({ theme = 'light' }) => {
  const isLight = theme === 'light';

  // --- PADRÕES DE FUNDO "PREMIUM/GIRLIE" vs "VAPORWAVE" ---
  const lightPattern = {
    backgroundColor: '#FFF5F8',
    backgroundImage: `
      radial-gradient(at 0% 0%, rgba(247, 184, 200, 0.3) 0px, transparent 50%),
      radial-gradient(at 100% 0%, rgba(216, 196, 240, 0.3) 0px, transparent 50%),
      conic-gradient(from 0deg at 50% 50%, rgba(247, 184, 200, 0.1) 0deg, transparent 60deg, rgba(216, 196, 240, 0.1) 120deg, transparent 180deg, rgba(247, 184, 200, 0.1) 240deg, transparent 300deg, rgba(216, 196, 240, 0.1) 360deg)
    `,
    backgroundSize: '100% 100%'
  };

  const darkPattern = {
    backgroundColor: '#050510',
    backgroundImage: `
      linear-gradient(rgba(0, 255, 242, 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(189, 0, 255, 0.05) 1px, transparent 1px),
      radial-gradient(at 50% 0%, rgba(189, 0, 255, 0.15) 0px, transparent 70%)
    `,
    backgroundSize: '40px 40px, 40px 40px, 100% 100%'
  };

  // --- CLASSES DE ESTILO ---
  const cardClass = isLight 
    ? 'bg-white/60 backdrop-blur-xl border border-pink-100 shadow-[0_10px_30px_rgba(255,182,193,0.3)] hover:shadow-[0_20px_50px_rgba(255,182,193,0.5)] hover:border-pink-200' 
    : 'bg-[#121217]/80 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:border-[#bd00ff]/50 hover:shadow-[0_0_30px_rgba(189,0,255,0.2)]';

  const textMain = isLight ? 'text-gray-900' : 'text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]';
  const textSub = isLight ? 'text-gray-500' : 'text-cyan-100/70';

  return (
    <div 
      className={`min-h-screen p-4 md:p-8 animate-in fade-in slide-in-from-bottom-4 duration-700 flex flex-col font-sans`} 
      style={isLight ? lightPattern : darkPattern}
    >
      
      {/* Luz de Fundo Decorativa */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden mix-blend-screen">
         <div className={`absolute top-[-20%] left-[-10%] w-[800px] h-[800px] rounded-full blur-[120px] opacity-20 ${isLight ? 'bg-pink-200' : 'bg-[#bd00ff]/30 animate-pulse'}`} />
         <div className={`absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[100px] opacity-20 ${isLight ? 'bg-purple-200' : 'bg-[#00fff2]/20 animate-pulse'}`} />
         {!isLight && <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent shadow-[0_0_20px_cyan]" />}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <BackButton to="/" theme={theme} />
        
        {/* --- HERO HEADER --- */}
        <div className="mb-16 text-center max-w-4xl mx-auto px-4 pt-4 relative">
          <div className="flex justify-center mb-6">
             <div className={`p-3 rounded-full ${isLight ? 'bg-pink-100 text-pink-500' : 'bg-fuchsia-900/30 text-fuchsia-400 border border-fuchsia-500/30 shadow-[0_0_15px_rgba(232,121,249,0.3)]'}`}>
                <Wrench size={32} />
             </div>
          </div>
          <span className={`inline-block px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 border ${isLight ? 'bg-white/50 border-purple-200 text-purple-600' : 'bg-[#bd00ff]/10 border-[#bd00ff]/30 text-fuchsia-400 shadow-[0_0_10px_rgba(189,0,255,0.3)]'}`}>
             The Garage
          </span>
          <h1 className={`text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-6 ${isLight ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600' : 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-fuchsia-500 drop-shadow-[0_0_10px_rgba(0,255,242,0.4)]'}`} style={{ fontFamily: "'Russo One', sans-serif" }}>
            Construtores
          </h1>
          <p className={`text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium ${textSub}`}>
            As garagens que movem o campeonato. Descubra a história e os pilotos de cada equipe.
          </p>
        </div>

        {/* --- GRID DE EQUIPES --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {TEAMS_DATA.map((team, idx) => {
            // LÓGICA DA IMAGEM DO LOGO
            const teamFolder = team.id || team.name.toLowerCase().replace(/\s+/g, '-');
            const logoImage = `/img/equipes/${teamFolder}/logo-${teamFolder}.png`;

            return (
              <Link 
                key={idx} 
                to={`/teams/${teamFolder}`} 
                className={`group relative overflow-hidden rounded-[2.5rem] flex flex-col transition-all duration-500 hover:-translate-y-2 ${cardClass}`}
              >
                {/* Barra Superior de Cor da Equipe (Efeito Neon) */}
                <div 
                    className="h-1.5 w-full flex-shrink-0 transition-all duration-500 group-hover:h-3 relative overflow-hidden" 
                    style={{ backgroundColor: team.color, boxShadow: !isLight ? `0 0 15px ${team.color}` : 'none' }}
                >
                    <div className="absolute inset-0 bg-white/30 w-full h-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="flex-1 p-8 md:p-10 flex flex-col h-full relative z-10">
                    
                    {/* Header: Nome e Info */}
                    <div className="flex items-start justify-between mb-6">
                        <div>
                            <h3 className={`text-3xl md:text-4xl font-black uppercase leading-none mb-2 tracking-tighter ${textMain}`} style={{ fontFamily: "'Russo One', sans-serif" }}>
                                {team.name}
                            </h3>
                            <p className={`text-[10px] font-bold uppercase tracking-[0.2em] opacity-60 ${textSub}`}>
                                {team.fullName || 'Formula 1 Team'}
                            </p>
                        </div>
                        {/* Ícone decorativo */}
                        <div className={`p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0 ${isLight ? 'bg-pink-50 text-pink-400' : 'bg-white/5 text-cyan-400'}`}>
                           <Flag size={20} />
                        </div>
                    </div>

                    {/* LOGO DA EQUIPE EM DESTAQUE (Centralizado e Grande) */}
                    <div className="relative h-48 w-full my-8 flex items-center justify-center p-6">
                        {/* Brilho atrás do logo */}
                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-3xl rounded-full transform scale-75`} style={{ backgroundColor: team.color }} />
                        
                        <img 
                            src={logoImage}
                            alt={`Logo ${team.name}`}
                            className={`max-w-full max-h-full object-contain drop-shadow-xl transition-transform duration-700 group-hover:scale-110 relative z-10 ${!isLight ? 'brightness-125 saturate-150' : ''}`}
                            onError={(e) => {
                               // Fallback: Tenta buscar do Clearbit se a imagem local falhar
                               e.target.src = `https://logo.clearbit.com/${team.domain || 'formula1.com'}`;
                               // Ajuste de filtro para dark mode se necessário
                               if (!isLight) e.target.style.filter = 'brightness(0) invert(1) drop-shadow(0 0 5px rgba(255,255,255,0.5))'; 
                            }}
                        />
                    </div>

                    {/* Footer Info */}
                    <div className={`mt-auto pt-6 border-t flex items-center justify-between transition-colors duration-300 ${isLight ? 'border-pink-100/50 group-hover:border-pink-200' : 'border-white/5 group-hover:border-cyan-500/20'}`}>
                        <div className="flex flex-col gap-3">
                            <div className={`flex items-center gap-2 opacity-70 group-hover:opacity-100 transition-opacity ${isLight ? 'text-pink-500' : 'text-cyan-400'}`}>
                               <Users size={16} />
                               <span className={`text-[10px] font-black uppercase tracking-[0.15em] ${textSub}`}>Pilotos</span>
                            </div>
                            <div className="flex gap-3 flex-wrap">
                               {team.drivers && team.drivers.map((d, i) => (
                                 <span key={i} className={`text-sm font-bold ${textMain}`}>
                                    {d}
                                    {i < team.drivers.length - 1 && <span className={`mx-2 opacity-30 font-light ${isLight ? 'text-gray-400' : 'text-gray-600'}`}>/</span>}
                                 </span>
                               ))}
                            </div>
                        </div>
                        
                        <div className={`p-4 rounded-full transition-all duration-500 group-hover:translate-x-2 group-hover:rotate-[-45deg] ${isLight ? 'bg-white shadow-md text-pink-500 group-hover:bg-pink-500 group-hover:text-white' : 'bg-white/5 text-gray-400 group-hover:bg-cyan-500 group-hover:text-black group-hover:shadow-[0_0_15px_cyan]'}`}>
                            <ArrowRight size={20} />
                        </div>
                    </div>
                </div>

                {/* Pattern de fundo no hover */}
                <div 
                  className="absolute inset-0 opacity-[0.03] pointer-events-none group-hover:opacity-[0.08] transition-opacity duration-700"
                  style={{ 
                    backgroundImage: `radial-gradient(circle at 2px 2px, ${isLight ? '#ec4899' : '#00fff2'} 1px, transparent 0)`, 
                    backgroundSize: '24px 24px' 
                  }} 
                />
              </Link>
            );
          })}
        </div>
      </div>
      
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Russo+One&display=swap');`}</style>
    </div>
  );
};

export default TeamsPage;