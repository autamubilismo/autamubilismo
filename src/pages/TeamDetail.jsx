import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Trophy, MapPin, Zap, Users, Flag, Briefcase, ArrowRight, 
  Settings 
} from 'lucide-react';
import { BackButton } from '../components/UI';
import { TEAMS_DATA } from '../data';

const TeamDetail = ({ theme }) => {
  const { id } = useParams();
  const isLight = theme === 'light';

  const team = TEAMS_DATA.find(t => 
    (t.id && t.id === id) || 
    t.name.toLowerCase().replace(/\s+/g, '-') === id
  );

  if (!team) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
         <h2 className={`text-3xl font-black ${isLight ? 'text-gray-800' : 'text-white'}`}>Equipe não encontrada 🛠️</h2>
         <Link to="/teams" className="mt-4 text-blue-500 hover:underline">Voltar aos Construtores</Link>
      </div>
    );
  }

  // Lógica da Imagem do Carro (Padrão: /img/equipes/nome/carro-nome.avif)
  // Normaliza o nome para minúsculo e sem espaços (ex: "red-bull-racing")
  const teamFolder = team.id || team.name.toLowerCase().replace(/\s+/g, '-');
  // Removemos "racing" ou nomes compostos se a pasta for simples, ajuste conforme sua estrutura real
  // Exemplo simples:
  const carImage = `/img/equipes/${teamFolder}/carro-${teamFolder}.avif`;

  const cardBg = isLight ? 'bg-white shadow-xl' : 'bg-[#121217] border border-[#333]';
  const textColor = isLight ? 'text-gray-800' : 'text-white';
  const subText = isLight ? 'text-gray-500' : 'text-gray-400';

  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 pb-20">
      <BackButton to="/teams" theme={theme} />

      {/* --- HERO SECTION (GARAGEM & CARRO) --- */}
      <div 
        className="relative w-full rounded-[3rem] overflow-hidden mb-8 p-8 md:p-12 transition-all duration-500 shadow-2xl group"
        style={{ 
            background: `linear-gradient(135deg, ${team.color} 0%, ${team.color}EE 40%, #000000 100%)` 
        }}
      >
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        
        {/* Logo Gigante de Fundo */}
        <img 
            src={`https://logo.clearbit.com/${team.domain}`} 
            className="absolute -right-10 -top-10 w-96 h-96 opacity-10 rotate-[-15deg] grayscale mix-blend-overlay pointer-events-none"
            alt=""
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            {/* Info da Equipe */}
            <div>
                <div className="flex items-center gap-6 mb-6">
                    <div className="w-20 h-20 bg-white rounded-3xl p-3 shadow-lg flex items-center justify-center shrink-0">
                        <img 
                            src={`https://logo.clearbit.com/${team.domain}`} 
                            alt={team.name} 
                            className="w-full h-full object-contain"
                            onError={(e) => { e.target.style.display='none'; }}
                        />
                    </div>
                    <div>
                        <h1 className="text-4xl md:text-6xl font-black text-white leading-none drop-shadow-lg uppercase tracking-tight">
                            {team.name}
                        </h1>
                        <p className="text-white/80 text-sm md:text-lg mt-1 font-medium tracking-wider">
                            {team.fullName}
                        </p>
                    </div>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-3">
                   {team.titles > 0 && (
                    <div className="flex items-center gap-2 bg-black/30 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                        <Trophy className="text-yellow-400" size={18} fill="currentColor" />
                        <span className="text-white font-black">{team.titles} <span className="text-xs font-normal opacity-70">Mundiais</span></span>
                    </div>
                   )}
                   <div className="flex items-center gap-2 bg-black/30 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                        <MapPin className="text-white/70" size={18} />
                        <span className="text-white font-bold text-sm">{team.base}</span>
                    </div>
                </div>
            </div>

            {/* FOTO DO CARRO (Grande Destaque) */}
            <div className="relative h-64 lg:h-80 flex items-center justify-center">
                <img 
                    src={carImage} 
                    alt={`Carro ${team.name}`} 
                    className="w-full h-full object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-110 group-hover:-translate-x-4"
                    onError={(e) => {
                        // Fallback se a imagem do carro não existir: mostra só o logo grande
                        e.target.style.display = 'none';
                    }}
                />
            </div>
        </div>
      </div>

      {/* --- GRID DE INFORMAÇÕES --- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         
         {/* 1. PILOTOS */}
         <div className={`lg:col-span-2 p-8 rounded-[2.5rem] ${cardBg} relative overflow-hidden`}>
            <div className="flex items-center gap-3 mb-6">
                <Users className={isLight ? 'text-gray-400' : 'text-[#fe88dd]'} size={24} />
                <h3 className={`text-2xl font-black uppercase tracking-wide ${textColor}`}>Line-up 2026</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {team.drivers && team.drivers.map((driverName, idx) => (
                    <div key={idx} className={`group relative p-6 rounded-3xl flex items-center justify-between transition-all hover:scale-[1.02] ${isLight ? 'bg-gray-50 hover:bg-white hover:shadow-md border border-transparent hover:border-gray-200' : 'bg-[#0a0a12] border border-[#333] hover:border-[color:var(--team-color)]'}`} style={{ '--team-color': team.color }}>
                        <div className="flex items-center gap-4">
                           <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-black ${isLight ? 'bg-white shadow text-gray-800' : 'bg-[#1a1a20] text-white border border-[#333]'}`}>
                               {driverName.charAt(0)}
                           </div>
                           <div>
                               <span className={`text-xs font-bold uppercase opacity-50 block mb-0.5 ${textColor}`}>Piloto {idx + 1}</span>
                               <h4 className={`text-lg font-black ${textColor}`}>{driverName}</h4>
                           </div>
                        </div>
                        <Link to={`/drivers`} className={`p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity ${isLight ? 'bg-gray-200 text-gray-600' : 'bg-[#333] text-white'}`}>
                            <ArrowRight size={16} />
                        </Link>
                    </div>
                ))}
            </div>
         </div>

         {/* 2. ESTATÍSTICAS TÉCNICAS */}
         <div className={`lg:col-span-1 p-8 rounded-[2.5rem] ${cardBg} flex flex-col justify-center`}>
            <h3 className={`text-lg font-black uppercase tracking-wide mb-6 flex items-center gap-2 opacity-70 ${textColor}`}>
                <Settings size={18} /> Tech Specs
            </h3>
            
            <ul className="space-y-6">
                <li className="flex items-center justify-between group">
                    <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-xl ${isLight ? 'bg-blue-50 text-blue-500' : 'bg-blue-500/10 text-blue-400'}`}><Zap size={20} /></div>
                        <span className={`font-medium ${subText}`}>Motor</span>
                    </div>
                    <span className={`font-black text-lg ${textColor}`}>{team.engine}</span>
                </li>

                <li className="flex items-center justify-between group">
                    <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-xl ${isLight ? 'bg-purple-50 text-purple-500' : 'bg-purple-500/10 text-purple-400'}`}><Briefcase size={20} /></div>
                        <span className={`font-medium ${subText}`}>Chefe</span>
                    </div>
                    <span className={`font-bold text-right ${textColor}`}>{team.principal || "N/A"}</span>
                </li>

                <li className="flex items-center justify-between group">
                    <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-xl ${isLight ? 'bg-red-50 text-red-500' : 'bg-red-500/10 text-red-400'}`}><MapPin size={20} /></div>
                        <span className={`font-medium ${subText}`}>Sede</span>
                    </div>
                    <span className={`font-bold text-right ${textColor}`}>{team.base || "Global"}</span>
                </li>
            </ul>
         </div>

         {/* 3. BIO */}
         <div className={`lg:col-span-3 p-8 md:p-12 rounded-[2.5rem] ${cardBg}`}>
            <h3 className={`text-2xl font-black mb-4 ${textColor}`}>A Garagem</h3>
            <p className={`text-lg leading-relaxed max-w-4xl ${subText}`}>
                {team.bio || `A equipe ${team.name} é uma das forças mais icônicas do grid atual. Com sede em ${team.base || 'diversos locais'}, eles buscam dominar a temporada combinando inovação aerodinâmica e a potência do motor ${team.engine}.`}
            </p>
         </div>
      </div>
    </div>
  );
};

export default TeamDetail;