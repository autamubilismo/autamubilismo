import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Flag, ChevronLeft, Crown, Medal } from 'lucide-react';

// --- DADOS 2026 ---

const DRIVERS_STANDINGS = [
  { 
    position: 1, driverId: 'kimi', driverName: 'Kimi Antonelli', driverNumber: 12, 
    image: 'img/pilotos/antonelli/grid-antonelli.avif', 
    team: 'Mercedes-AMG', teamColor: '#00D2BE', points: 0, wins: 0, podiums: 0 
  },
  { 
    position: 2, driverId: 'lewis', driverName: 'Lewis Hamilton', driverNumber: 44, 
    image: 'img/pilotos/hamilton/grid-hamilton.avif', 
    team: 'Ferrari', teamColor: '#FF0000', points: 0, wins: 0, podiums: 0 
  },
  { 
    position: 3, driverId: 'gabriel', driverName: 'Gabriel Bortoleto', driverNumber: 5, 
    image: 'img/pilotos/bortoleto/grid-bortoleto.avif', 
    team: 'Sauber', teamColor: '#52E252', points: 0, wins: 0, podiums: 0 
  },
  { 
    position: 4, driverId: 'max', driverName: 'Max Verstappen', driverNumber: 1, 
    image: 'img/pilotos/verstappen/grid-verstappen.avif', 
    team: 'Red Bull', teamColor: '#1E41FF', points: 0, wins: 0, podiums: 0 
  },
  { 
    position: 5, driverId: 'lando', driverName: 'Lando Norris', driverNumber: 4, 
    image: 'img/pilotos/norris/grid-norris.avif',
    team: 'McLaren', teamColor: '#FF8700', points: 0, wins: 0, podiums: 0 
  },
  { 
    position: 6, driverId: 'charles', driverName: 'Charles Leclerc', driverNumber: 16, 
    image: 'img/pilotos/leclerc/grid-leclerc.avif', 
    team: 'Ferrari', teamColor: '#FF0000', points: 0, wins: 0, podiums: 0 
  },
  { 
    position: 7, driverId: 'oscar', driverName: 'Oscar Piastri', driverNumber: 81, 
    image: 'img/pilotos/piastri/grid-piastri.avif',
    team: 'McLaren', teamColor: '#FF8700', points: 0, wins: 0, podiums: 0 
  },
  { 
    position: 8, driverId: 'george', driverName: 'George Russell', driverNumber: 63, 
    image: 'img/pilotos/russell/grid-russell.avif', 
    team: 'Mercedes-AMG', teamColor: '#00D2BE', points: 0, wins: 0, podiums: 0 
  },
  { 
    position: 9, driverId: 'carlos', driverName: 'Carlos Sainz', driverNumber: 55, 
    image: 'img/pilotos/sainz/grid-sainz.avif', 
    team: 'Williams', teamColor: '#005AFF', points: 0, wins: 0, podiums: 0 
  },
  { 
    position: 10, driverId: 'oliver', driverName: 'Oliver Bearman', driverNumber: 87, 
    image: 'img/pilotos/bearman/grid-bearman.avif', 
    team: 'Haas', teamColor: '#B6BABD', points: 0, wins: 0, podiums: 0 
  },
  { 
    position: 11, driverId: 'liam', driverName: 'Liam Lawson', driverNumber: 30, 
    image: 'img/pilotos/lawson/grid-lawson.avif', 
    team: 'Red Bull', teamColor: '#1E41FF', points: 0, wins: 0, podiums: 0 
  },
  { 
    position: 12, driverId: 'isack', driverName: 'Isack Hadjar', driverNumber: 6, 
    image: 'img/pilotos/hadjar/grid-hadjar.avif',
    team: 'VCARB', teamColor: '#1633EF', points: 0, wins: 0, podiums: 0 
  },
  { 
    position: 13, driverId: 'nico', driverName: 'Nico Hulkenberg', driverNumber: 27, 
    image: 'img/pilotos/hulkenberg/grid-hulkenberg.avif', 
    team: 'Sauber', teamColor: '#52E252', points: 0, wins: 0, podiums: 0 
  },
  { 
    position: 14, driverId: 'esteban', driverName: 'Esteban Ocon', driverNumber: 31, 
    image: 'img/pilotos/ocon/grid-ocon.avif',
    team: 'Haas', teamColor: '#B6BABD', points: 0, wins: 0, podiums: 0 
  },
  { 
    position: 15, driverId: 'fernando', driverName: 'Fernando Alonso', driverNumber: 14, 
    image: 'img/pilotos/alonso/grid-alonso.avif', 
    team: 'Aston Martin', teamColor: '#006F62', points: 0, wins: 0, podiums: 0 
  },
  { 
    position: 16, driverId: 'lance', driverName: 'Lance Stroll', driverNumber: 18, 
    image: 'img/pilotos/stroll/grid-stroll.avif', 
    team: 'Aston Martin', teamColor: '#006F62', points: 0, wins: 0, podiums: 0 
  },
  { 
    position: 17, driverId: 'pierre', driverName: 'Pierre Gasly', driverNumber: 10, 
    image: 'img/pilotos/gasly/grid-gasly.avif', 
    team: 'Alpine', teamColor: '#0090FF', points: 0, wins: 0, podiums: 0 
  },
  { 
    position: 18, driverId: 'alex', driverName: 'Alex Albon', driverNumber: 23, 
    image: 'img/pilotos/albon/grid-albon.avif',
    team: 'Williams', teamColor: '#005AFF', points: 0, wins: 0, podiums: 0 
  },
  { 
    position: 19, driverId: 'yuki', driverName: 'Yuki Tsunoda', driverNumber: 22, 
    image: 'img/pilotos/tsunoda/grid-tsunoda.avif', 
    team: 'VCARB', teamColor: '#1633EF', points: 0, wins: 0, podiums: 0 
  },
];

const CONSTRUCTORS_STANDINGS = [
  { position: 1, teamId: 'mercedes', teamName: 'Mercedes-AMG Petronas', teamShortName: 'Mercedes-AMG', image: 'img/equipes/mercedes/logo-mercedes.png', teamColor: '#00D2BE', points: 0, wins: 0 },
  { position: 2, teamId: 'ferrari', teamName: 'Scuderia Ferrari', teamShortName: 'Ferrari', image: 'img/equipes/ferrari/logo-ferrari.png', teamColor: '#FF0000', points: 0, wins: 0 },
  { position: 3, teamId: 'red-bull', teamName: 'Oracle Red Bull Racing', teamShortName: 'Red Bull', image: 'img/equipes/redbull/logo-redbull.png', teamColor: '#1E41FF', points: 0, wins: 0 },
  { position: 4, teamId: 'mclaren', teamName: 'McLaren F1 Team', teamShortName: 'McLaren', image: 'img/equipes/mclaren/logo-mclaren.png', teamColor: '#FF8700', points: 0, wins: 0 },
  { position: 5, teamId: 'aston-martin', teamName: 'Aston Martin Aramco F1 Team', teamShortName: 'Aston Martin', image: 'img/equipes/astonmartin/logo-astonmartin.png', teamColor: '#006F62', points: 0, wins: 0 },
  { position: 6, teamId: 'alpine', teamName: 'BWT Alpine F1 Team', teamShortName: 'Alpine', image: 'img/equipes/alpine/logo-alpine.png', teamColor: '#0090FF', points: 0, wins: 0 },
  { position: 7, teamId: 'williams', teamName: 'Williams Racing', teamShortName: 'Williams', image: 'img/equipes/williams/logo-williams.png', teamColor: '#005AFF', points: 0, wins: 0 },
  { position: 8, teamId: 'vcarb', teamName: 'Visa Cash App RB F1 Team', teamShortName: 'VCARB', image: 'img/equipes/rb/logo-rb.png', teamColor: '#1633EF', points: 0, wins: 0 },
  { position: 9, teamId: 'haas', teamName: 'MoneyGram Haas F1 Team', teamShortName: 'Haas', image: 'img/equipes/haas/logo-haas.png', teamColor: '#B6BABD', points: 0, wins: 0 },
  { position: 10, teamId: 'audi', teamName: 'Audi F1 Team', teamShortName: 'Audi', image: 'img/equipes/audi/logo-audi.png', teamColor: '#000000', points: 0, wins: 0 },
  { position: 11, teamId: 'cadillac', teamName: 'Cadillac F1 Team', teamShortName: 'Cadillac', image: 'img/equipes/cadillac/logo-cadillac.png', teamColor: '#A2AAAD', points: 0, wins: 0 },
];

// --- COMPONENTES UI ---

const BackButton = ({ to, theme }) => {
  const isLight = theme === 'light';
  return (
    <Link 
      to={to} 
      className={`inline-flex items-center gap-1.5 mb-8 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all hover:-translate-x-1 duration-200 ${
        isLight 
          ? 'bg-white text-gray-400 hover:text-pink-500 hover:shadow-sm border border-transparent hover:border-pink-100' 
          : 'bg-white/5 text-cyan-400/60 hover:text-cyan-300 hover:bg-white/10 border border-white/5 hover:border-cyan-500/30'
      }`}
    >
      <ChevronLeft size={12} />
      Voltar
    </Link>
  );
};

const PageContainer = ({ theme, children }) => {
  const isLight = theme === 'light';
  return (
    <div className={`min-h-screen w-full px-4 py-8 transition-colors duration-500 font-sans ${
      isLight 
        ? 'bg-[#FFF0F5] bg-[radial-gradient(#E0F2FE_1px,transparent_1px)] [background-size:20px_20px]' 
        : 'bg-[#090011] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#2a004a] via-[#090011] to-[#05000a] text-cyan-50'
    }`}>
      {!isLight && (
        <div className="fixed inset-0 pointer-events-none opacity-20 z-0" 
             style={{ 
               backgroundImage: 'linear-gradient(rgba(255, 0, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)', 
               backgroundSize: '40px 40px',
               maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)'
             }} 
        />
      )}
      <div className="max-w-4xl mx-auto relative z-10">
        {children}
      </div>
    </div>
  );
};

const PageHeader = ({ theme, badge, title, subtitle }) => {
  const isLight = theme === 'light';
  return (
    <div className="text-center mb-8">
      {badge && (
        <span className={`inline-block px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-[0.2em] mb-3 ${
          isLight 
            ? 'bg-white text-pink-400 shadow-sm' 
            : 'bg-fuchsia-900/30 text-fuchsia-300 border border-fuchsia-500/30 shadow-[0_0_10px_rgba(255,0,255,0.2)]'
        }`}>
          {badge}
        </span>
      )}
      <h1 className={`text-4xl md:text-5xl font-black tracking-tighter mb-3 uppercase ${
        isLight 
          ? 'text-transparent bg-clip-text bg-gradient-to-br from-gray-800 to-gray-500' 
          : 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-fuchsia-300 drop-shadow-[0_0_10px_rgba(0,255,255,0.3)]'
      }`} style={{ fontFamily: "'Russo One', sans-serif" }}>
        {title}
      </h1>
      <p className={`text-sm md:text-base max-w-lg mx-auto leading-relaxed ${
        isLight ? 'text-gray-400 font-medium' : 'text-cyan-100/60'
      }`}>
        {subtitle}
      </p>
    </div>
  );
};

// --- COMPONENTES DO PÓDIO ---

const PodiumStep = ({ data, place, type, theme }) => {
  if (!data) return null;
  const isLight = theme === 'light';
  
  const rankColors = {
    1: isLight ? 'bg-yellow-100 text-yellow-600 border-yellow-200' : 'bg-yellow-500/20 text-yellow-300 border-yellow-500/50 shadow-[0_0_20px_rgba(234,179,8,0.3)]',
    2: isLight ? 'bg-gray-100 text-gray-500 border-gray-200' : 'bg-gray-500/20 text-gray-300 border-gray-400/30',
    3: isLight ? 'bg-orange-100 text-orange-600 border-orange-200' : 'bg-orange-700/20 text-orange-400 border-orange-500/30',
  };

  const scale = place === 1 ? 'scale-110 z-10' : 'scale-100 z-0 mt-8';
  
  const name = type === 'drivers' ? data.driverName : data.teamName;
  const shortName = type === 'drivers' ? (data.driverName || '').split(' ').pop() : data.teamShortName;
  
  // Tratamento da imagem
  let imagePath = data.image || '';
  if (imagePath && !imagePath.startsWith('/') && !imagePath.startsWith('http')) {
    imagePath = `/${imagePath}`;
  }

  // Estilo específico para Pilotos vs Equipes no Pódio
  const imgClass = type === 'drivers' 
    ? "w-full h-full object-cover object-top" // Pilotos: Foco no rosto
    : `w-full h-full object-contain p-3 ${!isLight ? 'brightness-0 invert drop-shadow-[0_0_2px_rgba(255,255,255,0.5)]' : ''}`; // Equipes: Contido

  return (
    <div className={`flex flex-col items-center ${scale} transition-all duration-500`}>
      <div className={`relative mb-4 rounded-full p-1 ${rankColors[place]} border-2`}>
         <div className={`w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden flex items-center justify-center ${
           isLight ? 'bg-white' : 'bg-black/50'
         }`}>
            <img 
              src={imagePath} 
              alt={name} 
              className={imgClass}
              onError={(e) => {
                // Fallback para silhueta se piloto, ou logo F1 se equipe
                if (type === 'drivers') {
                   e.target.src = 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/1col/image.png'; // Usando Max como fallback seguro ou uma silhueta genérica se tiver URL
                   // Melhor fallback: silhueta genérica
                   e.target.src = 'https://media.formula1.com/content/dam/fom-website/drivers/driver_fallback_image.png'; 
                } else {
                   e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/3/33/F1.svg';
                   e.target.style.filter = !isLight ? 'brightness(0) invert(1)' : 'none';
                   e.target.style.padding = '10px';
                }
              }}
            />
         </div>
         <div className={`absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full font-black text-sm border-2 ${
           isLight ? 'bg-white border-white shadow-sm' : 'bg-[#090011] border-[#090011]'
         } ${rankColors[place]}`}>
            {place}
         </div>
      </div>

      <div className={`text-center px-4 py-3 rounded-2xl w-32 md:w-40 backdrop-blur-md border ${
         isLight 
           ? 'bg-white/60 border-white shadow-sm' 
           : 'bg-[#121217]/60 border-white/5'
      }`}>
         <div className={`text-sm md:text-base font-black truncate leading-tight ${
           isLight ? 'text-gray-800' : 'text-white'
         }`}>
           {shortName}
         </div>
         <div className={`text-[10px] uppercase font-bold tracking-wider mt-1 ${
           isLight ? 'text-gray-400' : 'text-cyan-400/70'
         }`}>
           {data.points} PTS
         </div>
      </div>
    </div>
  );
};

// --- PÁGINA PRINCIPAL ---

const Standings = ({ theme }) => {
  const isLight = theme === 'light';
  const [activeTab, setActiveTab] = useState('drivers'); 

  const drivers = DRIVERS_STANDINGS || [];
  const constructors = CONSTRUCTORS_STANDINGS || [];
  
  const currentData = activeTab === 'drivers' ? drivers : constructors;
  const top3 = [currentData[1], currentData[0], currentData[2]].filter(Boolean); 
  const restOfField = currentData.slice(3);

  return (
    <PageContainer theme={theme}>
      <BackButton to="/" theme={theme} />
      
      <PageHeader 
        theme={theme}
        badge="Live Standings"
        title="Classificação"
        subtitle="Acompanhe a batalha pelo campeonato em tempo real"
      />

      {/* Tabs */}
      <div className={`relative flex p-1.5 rounded-full mx-auto max-w-sm mb-12 ${
        isLight 
          ? 'bg-white shadow-inner border border-gray-100' 
          : 'bg-[#121217] border border-white/5'
      }`}>
        <div className={`absolute top-1.5 bottom-1.5 rounded-full transition-all duration-300 w-[calc(50%-6px)] ${
           activeTab === 'drivers' ? 'left-1.5' : 'left-[calc(50%+3px)]'
        } ${
           isLight 
             ? 'bg-gradient-to-r from-pink-400 to-pink-500 shadow-md' 
             : 'bg-cyan-600 shadow-[0_0_15px_rgba(8,145,178,0.4)]'
        }`} />

        <button
          onClick={() => setActiveTab('drivers')}
          className={`relative z-10 flex-1 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-colors duration-300 ${
            activeTab === 'drivers' ? 'text-white' : (isLight ? 'text-gray-400' : 'text-gray-500')
          }`}
        >
          Pilotos
        </button>
        <button
          onClick={() => setActiveTab('constructors')}
          className={`relative z-10 flex-1 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-colors duration-300 ${
            activeTab === 'constructors' ? 'text-white' : (isLight ? 'text-gray-400' : 'text-gray-500')
          }`}
        >
          Equipes
        </button>
      </div>

      {/* PODIUM SECTION */}
      {top3.length >= 3 && (
        <div className="flex justify-center items-end gap-2 md:gap-8 mb-16 px-4">
           <PodiumStep place={2} data={top3[0]} type={activeTab} theme={theme} />
           <PodiumStep place={1} data={top3[1]} type={activeTab} theme={theme} />
           <PodiumStep place={3} data={top3[2]} type={activeTab} theme={theme} />
        </div>
      )}

      {/* LISTA RESTANTE */}
      <div className={`rounded-[2.5rem] overflow-hidden ${
        isLight 
          ? 'bg-white/60 backdrop-blur-xl border border-pink-100 shadow-xl' 
          : 'bg-[#121217]/60 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.3)]'
      }`}>
        
        {/* Header */}
        <div className={`grid grid-cols-12 gap-2 md:gap-4 p-6 border-b text-[10px] font-black uppercase tracking-widest opacity-60 ${
          isLight ? 'border-pink-50 text-gray-500' : 'border-white/5 text-cyan-100'
        }`}>
          <div className="col-span-1">Pos</div>
          <div className="col-span-6 md:col-span-5">{activeTab === 'drivers' ? 'Piloto' : 'Equipe'}</div>
          <div className="col-span-3 md:col-span-3 text-center">Pontos</div>
          <div className="col-span-2 md:col-span-3 text-right hidden md:block">Vitórias</div>
          <div className="col-span-2 md:col-span-3 text-right md:hidden">Vit</div>
        </div>

        {/* Linhas */}
        <div className="divide-y divide-gray-50 dark:divide-white/5">
          {restOfField.map((item, index) => {
            const name = activeTab === 'drivers' ? item.driverName : item.teamName;
            const subName = activeTab === 'drivers' ? item.team : null;
            
            // Tratamento de imagem
            let imageSrc = item.image || '';
            if (imageSrc && !imageSrc.startsWith('/') && !imageSrc.startsWith('http')) {
                imageSrc = `/${imageSrc}`;
            }

            // CSS de Imagem: Pilotos (Cover/Top) vs Equipes (Contain/Padded)
            const imgClasses = activeTab === 'drivers' 
                ? 'w-full h-full object-cover object-top' 
                : `w-full h-full object-contain p-1.5 ${!isLight ? 'brightness-0 invert' : ''}`;

            return (
              <div 
                key={index}
                className={`grid grid-cols-12 gap-2 md:gap-4 p-4 md:p-5 items-center transition-all duration-200 group ${
                  isLight ? 'hover:bg-pink-50/50' : 'hover:bg-white/5'
                }`}
              >
                <div className="col-span-1">
                  <span className={`text-sm md:text-lg font-black opacity-50 group-hover:opacity-100 ${
                    isLight ? 'text-gray-400 group-hover:text-pink-500' : 'text-gray-600 group-hover:text-cyan-400'
                  }`}>
                    {item.position}
                  </span>
                </div>
                
                <div className="col-span-6 md:col-span-5 flex items-center gap-3 md:gap-4">
                  <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center overflow-hidden shrink-0 ${
                    isLight ? 'bg-gray-100' : 'bg-white/10'
                  }`}>
                    <img 
                      src={imageSrc}
                      alt={name}
                      className={imgClasses}
                      onError={(e) => { 
                        if (activeTab === 'drivers') {
                           e.target.src = 'https://media.formula1.com/content/dam/fom-website/drivers/driver_fallback_image.png';
                           e.target.className = 'w-full h-full object-cover';
                        } else {
                           e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/3/33/F1.svg';
                           e.target.className = `w-full h-full object-contain p-1.5 ${!isLight ? 'brightness-0 invert' : ''}`;
                        }
                      }} 
                    />
                  </div>

                  <div className="min-w-0">
                    <div className={`font-bold text-sm md:text-base truncate group-hover:translate-x-1 transition-transform ${
                      isLight ? 'text-gray-800' : 'text-white'
                    }`}>
                      {name}
                    </div>
                    {subName && (
                       <div className={`text-[9px] md:text-[10px] font-bold uppercase tracking-wider truncate ${
                         isLight ? 'text-gray-400' : 'text-gray-500'
                       }`}>
                         {subName}
                       </div>
                    )}
                  </div>
                </div>
                
                <div className="col-span-3 md:col-span-3 text-center">
                  <span className={`px-3 py-1 rounded-lg text-xs md:text-sm font-black ${
                    isLight 
                      ? 'bg-gray-50 text-gray-900 group-hover:bg-pink-100 group-hover:text-pink-600' 
                      : 'bg-white/5 text-white group-hover:bg-cyan-500/20 group-hover:text-cyan-400'
                  }`}>
                    {item.points}
                  </span>
                </div>
                
                <div className="col-span-2 md:col-span-3 flex justify-end items-center gap-1 md:gap-2">
                  {item.wins > 0 && (
                    <Flag size={12} className={isLight ? "text-yellow-500" : "text-yellow-400"} fill="currentColor" />
                  )}
                  <span className={`text-[10px] md:text-xs font-bold ${
                    isLight ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {item.wins}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className={`text-center mt-8 text-[10px] font-bold uppercase tracking-widest opacity-40 ${
        isLight ? 'text-gray-500' : 'text-cyan-100'
      }`}>
        Fórmula 1 Season 2026
      </div>
      
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');`}</style>
    </PageContainer>
  );
};

export default Standings;