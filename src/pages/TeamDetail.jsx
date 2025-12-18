import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Trophy, MapPin, Zap, Users, Flag, Briefcase, ArrowRight, 
  Settings, ChevronLeft, Star, Car
} from 'lucide-react';

// --- DADOS MOCK (Para o preview funcionar sem o arquivo ../data) ---
// No seu projeto local, você pode apagar isto e descomentar o import abaixo.
const TEAMS_DATA = [
  {
    id: 'mclaren',
    name: 'McLaren',
    fullName: 'McLaren Formula 1 Team',
    color: '#FF8000',
    drivers: ['Lando Norris', 'Oscar Piastri'],
    domain: 'mclaren.com',
    base: 'Woking, UK',
    principal: 'Andrea Stella',
    engine: 'Mercedes',
    titles: 8,
    bio: 'Uma das equipes mais icônicas e bem-sucedidas da história da F1. Fundada por Bruce McLaren, a equipe combina herança de corrida com inovação tecnológica de ponta.'
  },
  {
    id: 'ferrari',
    name: 'Ferrari',
    fullName: 'Scuderia Ferrari',
    color: '#FF2800',
    drivers: ['Charles Leclerc', 'Lewis Hamilton'],
    domain: 'ferrari.com',
    base: 'Maranello, Italy',
    principal: 'Fred Vasseur',
    engine: 'Ferrari',
    titles: 16,
    bio: 'A única equipe a competir em todas as temporadas da Fórmula 1 desde 1950. A Ferrari é sinônimo de paixão, velocidade e a cor vermelha.'
  },
  {
    id: 'redbull',
    name: 'Red Bull Racing',
    fullName: 'Oracle Red Bull Racing',
    color: '#1E41FF',
    drivers: ['Max Verstappen', 'Liam Lawson'],
    domain: 'redbullracing.com',
    base: 'Milton Keynes, UK',
    principal: 'Christian Horner',
    engine: 'Honda RBPT',
    titles: 6,
    bio: 'Conhecida por sua abordagem ousada e marketing agressivo, a Red Bull se transformou de uma marca de bebidas em uma potência dominante do esporte.'
  },
  {
    id: 'mercedes',
    name: 'Mercedes',
    fullName: 'Mercedes-AMG PETRONAS F1 Team',
    color: '#00D2BE',
    drivers: ['George Russell', 'Kimi Antonelli'],
    domain: 'mercedesamgf1.com',
    base: 'Brackley, UK',
    principal: 'Toto Wolff',
    engine: 'Mercedes',
    titles: 8,
    bio: 'Dominou a era híbrida com uma precisão alemã implacável. A Mercedes busca retomar o topo com inovação e consistência.'
  },
  {
    id: 'astonmartin',
    name: 'Aston Martin',
    fullName: 'Aston Martin Aramco F1 Team',
    color: '#006F62',
    drivers: ['Fernando Alonso', 'Lance Stroll'],
    domain: 'astonmartinf1.com',
    base: 'Silverstone, UK',
    principal: 'Mike Krack',
    engine: 'Mercedes',
    titles: 0,
    bio: 'Trazendo o luxo britânico para o grid, a Aston Martin investiu pesado em infraestrutura para se tornar uma candidata ao título.'
  },
  {
    id: 'alpine',
    name: 'Alpine',
    fullName: 'BWT Alpine F1 Team',
    color: '#0090FF',
    drivers: ['Pierre Gasly', 'Jack Doohan'],
    domain: 'alpinecars.com',
    base: 'Enstone, UK',
    principal: 'Oliver Oakes',
    engine: 'Renault',
    titles: 2,
    bio: 'A equipe francesa (antiga Renault) busca honrar sua tradição no esporte, focando em desenvolver talentos e tecnologia própria.'
  }
];

// import { TEAMS_DATA } from '../data'; // <--- DESCOMENTE NO SEU PROJETO LOCAL

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

const TeamDetail = ({ theme }) => {
  const { id } = useParams();
  const isLight = theme === 'light';

  // Encontra a equipe (com fallback para ID ou nome normalizado)
  const team = TEAMS_DATA.find(t => 
    (t.id && t.id === id) || 
    t.name.toLowerCase().replace(/\s+/g, '-') === id
  );

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

  if (!team) {
    return (
      <div className={`min-h-[60vh] flex flex-col items-center justify-center text-center font-sans ${isLight ? 'text-gray-800' : 'text-white'}`} style={isLight ? lightPattern : darkPattern}>
         <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter">Equipe não encontrada 🛠️</h2>
         <Link to="/teams" className={`px-6 py-3 rounded-full font-bold text-sm uppercase tracking-widest ${isLight ? 'bg-pink-100 text-pink-600 hover:bg-pink-200' : 'bg-white/10 hover:bg-white/20 text-cyan-400'}`}>
            Voltar aos Construtores
         </Link>
      </div>
    );
  }

  // Lógica da Imagem (Pode ajustar os caminhos conforme sua estrutura)
  const teamFolder = team.id || team.name.toLowerCase().replace(/\s+/g, '-');
  const carImage = `/img/equipes/${teamFolder}/carro-${teamFolder}.avif`; // Use .png se preferir

  // Estilos Dinâmicos
  const textColor = isLight ? 'text-gray-900' : 'text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]';
  const subText = isLight ? 'text-gray-500' : 'text-cyan-100/70';
  
  // Card Glass
  const cardClass = isLight
    ? 'bg-white/60 backdrop-blur-xl rounded-[2.5rem] shadow-[0_20px_40px_-10px_rgba(200,180,220,0.2)] border border-white/80 ring-1 ring-white/60'
    : 'bg-[#121217]/80 backdrop-blur-xl rounded-[2rem] border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.3)] hover:border-cyan-500/30';

  return (
    <div 
      className="min-h-screen p-4 md:p-8 animate-in fade-in slide-in-from-bottom-8 duration-700 flex flex-col font-sans"
      style={isLight ? lightPattern : darkPattern}
    >
      
      {/* Luz de Fundo Decorativa */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden mix-blend-screen">
         <div className={`absolute top-[-20%] left-[-10%] w-[800px] h-[800px] rounded-full blur-[120px] opacity-20 ${isLight ? 'bg-pink-200' : 'bg-[#bd00ff]/30 animate-pulse'}`} />
         <div className={`absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[100px] opacity-20 ${isLight ? 'bg-purple-200' : 'bg-[#00fff2]/20 animate-pulse'}`} />
         {!isLight && <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent shadow-[0_0_20px_cyan]" />}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <BackButton to="/teams" theme={theme} />

        {/* --- HERO SECTION (GARAGEM & CARRO) --- */}
        <div 
          className="relative w-full rounded-[3rem] overflow-hidden mb-8 p-8 md:p-12 transition-all duration-500 shadow-2xl group border border-white/20"
          style={{ 
              background: `linear-gradient(135deg, ${team.color} 0%, ${team.color}CC 40%, ${isLight ? '#ffffff' : '#050510'} 100%)` 
          }}
        >
          {/* Textura de fundo */}
          <div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          
          {/* Brilho decorativo */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/20 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              
              {/* Info da Equipe */}
              <div className="text-white">
                  <div className="flex items-center gap-6 mb-8">
                      <div className="w-24 h-24 bg-white/90 backdrop-blur rounded-3xl p-4 shadow-xl flex items-center justify-center shrink-0 rotate-3 transition-transform group-hover:rotate-0 duration-500 ring-4 ring-white/30">
                          <img 
                              src={`https://logo.clearbit.com/${team.domain}`} 
                              alt={team.name} 
                              className="w-full h-full object-contain"
                              onError={(e) => { e.target.style.display='none'; }}
                          />
                      </div>
                      <div>
                          <h1 className="text-5xl md:text-7xl font-black leading-none drop-shadow-lg uppercase tracking-tighter" style={{ fontFamily: "'Russo One', sans-serif" }}>
                              {team.name}
                          </h1>
                          <p className="text-white/80 text-lg md:text-xl mt-2 font-medium tracking-wide uppercase">
                              {team.fullName}
                          </p>
                      </div>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-3">
                      {team.titles > 0 && (
                        <div className="flex items-center gap-2 bg-black/20 backdrop-blur-md px-5 py-2.5 rounded-2xl border border-white/20 shadow-lg">
                            <Trophy className="text-yellow-300 drop-shadow-sm" size={20} fill="currentColor" />
                            <span className="font-black text-lg">{team.titles} <span className="text-xs font-bold uppercase opacity-70 tracking-wider">Mundiais</span></span>
                        </div>
                      )}
                      <div className="flex items-center gap-2 bg-black/20 backdrop-blur-md px-5 py-2.5 rounded-2xl border border-white/20 shadow-lg">
                          <MapPin className="text-white/90" size={20} />
                          <span className="font-bold text-sm tracking-wide">{team.base}</span>
                      </div>
                  </div>
              </div>

              {/* FOTO DO CARRO (Grande Destaque) */}
              <div className="relative h-64 lg:h-96 flex items-center justify-center lg:justify-end">
                  <img 
                      src={carImage} 
                      alt={`Carro ${team.name}`} 
                      className="w-full h-full object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-110 group-hover:-translate-x-4 z-10"
                      onError={(e) => {
                          // Fallback se a imagem do carro não existir
                          e.target.style.display = 'none';
                      }}
                  />
                  {/* Sombra do carro */}
                  <div className="absolute bottom-10 left-10 right-10 h-10 bg-black/40 blur-2xl rounded-full transform scale-x-75 pointer-events-none" />
              </div>
          </div>
        </div>

        {/* --- GRID DE INFORMAÇÕES --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* 1. PILOTOS */}
            <div className={`lg:col-span-2 p-8 md:p-10 ${cardClass} relative overflow-hidden`}>
              <div className="flex items-center gap-3 mb-8">
                  <div className={`p-3 rounded-xl ${isLight ? 'bg-pink-100 text-pink-500' : 'bg-[#bd00ff]/20 text-[#bd00ff]'}`}>
                    <Users size={24} />
                  </div>
                  <h3 className={`text-2xl font-black uppercase tracking-wide ${textColor}`}>Line-up 2026</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {team.drivers && team.drivers.map((driverName, idx) => (
                      <div key={idx} className={`group/driver relative p-6 rounded-[2rem] flex items-center justify-between transition-all duration-300 hover:scale-[1.02] cursor-pointer ${isLight ? 'bg-white border border-gray-100 hover:border-pink-200 hover:shadow-lg' : 'bg-[#0a0a12] border border-[#333] hover:border-[color:var(--team-color)]'}`} style={{ '--team-color': team.color }}>
                          <div className="flex items-center gap-5">
                              <div className={`w-14 h-14 rounded-full flex items-center justify-center text-xl font-black shadow-md ${isLight ? 'bg-gray-50 text-gray-800' : 'bg-[#1a1a20] text-white border border-[#333]'}`}>
                                  {driverName.charAt(0)}
                              </div>
                              <div>
                                  <span className={`text-[10px] font-bold uppercase opacity-50 block mb-1 tracking-widest ${textColor}`}>Piloto {idx + 1}</span>
                                  <h4 className={`text-xl font-black leading-none ${textColor}`}>{driverName}</h4>
                              </div>
                          </div>
                          <Link to={`/drivers`} className={`p-3 rounded-full opacity-0 group-hover/driver:opacity-100 transition-all transform translate-x-2 group-hover/driver:translate-x-0 ${isLight ? 'bg-pink-50 text-pink-500' : 'bg-[#333] text-white'}`}>
                              <ArrowRight size={18} />
                          </Link>
                      </div>
                  ))}
              </div>
            </div>

            {/* 2. ESTATÍSTICAS TÉCNICAS */}
            <div className={`lg:col-span-1 p-8 md:p-10 ${cardClass} flex flex-col justify-center`}>
              <h3 className={`text-lg font-black uppercase tracking-wide mb-8 flex items-center gap-2 opacity-60 ${textColor}`}>
                  <Settings size={18} /> Tech Specs
              </h3>
              
              <ul className="space-y-6">
                  <li className="flex items-center justify-between group">
                      <div className="flex items-center gap-4">
                          <div className={`p-2.5 rounded-xl ${isLight ? 'bg-blue-50 text-blue-500' : 'bg-blue-500/10 text-blue-400'}`}><Zap size={20} /></div>
                          <span className={`font-bold text-sm uppercase tracking-wide ${subText}`}>Motor</span>
                      </div>
                      <span className={`font-black text-lg ${textColor}`}>{team.engine}</span>
                  </li>

                  <li className="flex items-center justify-between group">
                      <div className="flex items-center gap-4">
                          <div className={`p-2.5 rounded-xl ${isLight ? 'bg-purple-50 text-purple-500' : 'bg-purple-500/10 text-purple-400'}`}><Briefcase size={20} /></div>
                          <span className={`font-bold text-sm uppercase tracking-wide ${subText}`}>Chefe</span>
                      </div>
                      <span className={`font-bold text-lg text-right ${textColor}`}>{team.principal || "N/A"}</span>
                  </li>

                  <li className="flex items-center justify-between group">
                      <div className="flex items-center gap-4">
                          <div className={`p-2.5 rounded-xl ${isLight ? 'bg-red-50 text-red-500' : 'bg-red-500/10 text-red-400'}`}><MapPin size={20} /></div>
                          <span className={`font-bold text-sm uppercase tracking-wide ${subText}`}>Sede</span>
                      </div>
                      <span className={`font-bold text-lg text-right ${textColor}`}>{team.base ? team.base.split(',')[0] : "Global"}</span>
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
      
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Russo+One&display=swap');`}</style>
    </div>
  );
};

export default TeamDetail;