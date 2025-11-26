import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Trophy, MapPin, Flag, Star, Zap, 
  LayoutGrid 
} from 'lucide-react';
import { BackButton } from '../components/UI';
import { DRIVERS_DATA } from '../data';

const DriverDetail = ({ theme }) => {
  const { id } = useParams();
  const isLight = theme === 'light';

  // 1. Encontrar o piloto
  const driver = DRIVERS_DATA.find(d => d.id === id);

  // 2. Tratamento de erro se não achar
  if (!driver) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
         <h2 className={`text-3xl font-black ${isLight ? 'text-gray-800' : 'text-white'}`}>Piloto não encontrado</h2>
         <Link to="/drivers" className="mt-4 text-blue-500 hover:underline">Voltar ao Grid</Link>
      </div>
    );
  }

  // 3. Lógica da Imagem de Corpo Inteiro
  // Pega o último nome, converte para minúsculo
  const surname = driver.name.split(" ").slice(-1)[0].toLowerCase();
  const fullBodyUrl = `/img/pilotos/${surname}/corpo-${surname}.avif`;

  // 4. Cores e Estilos
  const cardBg = isLight ? 'bg-white shadow-xl' : 'bg-[#121217] border border-[#333]';
  const textColor = isLight ? 'text-gray-800' : 'text-white';
  const textSub = isLight ? 'text-gray-500' : 'text-gray-400';

  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 pb-20">
      <BackButton to="/drivers" theme={theme} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* --- COLUNA DA ESQUERDA: FOTO DE CORPO INTEIRO (Totem) --- */}
        <div className="lg:col-span-5 xl:col-span-4 order-2 lg:order-1">
           <div 
             className={`relative rounded-[3rem] overflow-hidden h-[500px] lg:h-[800px] w-full sticky top-8 transition-all duration-500 ${isLight ? 'shadow-2xl' : 'shadow-[0_0_40px_rgba(0,0,0,0.5)]'}`}
             style={{ backgroundColor: driver.color }}
           >
              {/* Pattern Sutil */}
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
              
              {/* Número Gigante no Fundo */}
              <span className="absolute -bottom-10 -right-10 text-[15rem] font-black text-white opacity-20 select-none leading-none">
                {driver.number}
              </span>

              {/* A FOTO DO PILOTO */}
              <img 
                src={fullBodyUrl} 
                alt={driver.name} 
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[95%] w-auto object-contain object-bottom drop-shadow-2xl z-10 transition-transform hover:scale-105 duration-700"
                onError={(e) => {
                    // Fallback se a foto de corpo não existir
                    e.target.src = driver.image;
                    e.target.className = "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full object-cover border-4 border-white shadow-xl";
                }}
              />

              {/* Degradê na base */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-20"></div>

              {/* Nome Sobreposto (Mobile) */}
              <div className="absolute bottom-8 left-0 w-full text-center z-30 lg:hidden">
                  <h1 className="text-4xl font-black text-white uppercase tracking-tighter drop-shadow-lg">
                    {driver.name}
                  </h1>
              </div>
           </div>
        </div>

        {/* --- COLUNA DA DIREITA: DADOS (Bento Grid) --- */}
        <div className="lg:col-span-7 xl:col-span-8 order-1 lg:order-2 flex flex-col gap-6">
           
           {/* 1. Cabeçalho (Desktop) */}
           <div className="hidden lg:block mb-4">
              <div className="flex items-center gap-4 mb-2">
                 <span className="px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest text-white shadow-md" style={{ backgroundColor: driver.color }}>
                    {driver.team}
                 </span>
                 <span className={`text-xs font-bold uppercase tracking-widest ${textSub}`}>{driver.country}</span>
              </div>
              <h1 className={`text-6xl xl:text-8xl font-black uppercase tracking-tighter leading-[0.9] ${textColor}`}>
                {driver.name}
              </h1>
           </div>

           {/* 2. Grid de Estatísticas */}
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className={`p-5 rounded-3xl ${cardBg} flex flex-col justify-between min-h-[120px]`}>
                 <Trophy className={isLight ? 'text-yellow-500' : 'text-yellow-400'} />
                 <div>
                    <span className={`block text-2xl font-black ${textColor}`}>{driver.stats?.podiums || '0'}</span>
                    <span className={`text-[10px] font-bold uppercase ${textSub}`}>Pódios</span>
                 </div>
              </div>
              <div className={`p-5 rounded-3xl ${cardBg} flex flex-col justify-between min-h-[120px]`}>
                 <Flag className={isLight ? 'text-blue-500' : 'text-[#00fff2]'} />
                 <div>
                    <span className={`block text-2xl font-black ${textColor}`}>{driver.stats?.xp || 'Rookie'}</span>
                    <span className={`text-[10px] font-bold uppercase ${textSub}`}>Categoria</span>
                 </div>
              </div>
              <div className={`p-5 rounded-3xl ${cardBg} flex flex-col justify-between min-h-[120px]`}>
                 <Star className={isLight ? 'text-purple-500' : 'text-[#fe88dd]'} />
                 <div>
                    <span className={`block text-2xl font-black ${textColor}`}>{driver.stats?.bestResult || 'N/A'}</span>
                    <span className={`text-[10px] font-bold uppercase ${textSub}`}>Melhor Res.</span>
                 </div>
              </div>
              <div className="p-5 rounded-3xl flex flex-col justify-between min-h-[120px] text-white" style={{ backgroundColor: driver.color }}>
                 <span className="text-4xl font-black opacity-50">#</span>
                 <div>
                    <span className="block text-4xl font-black">{driver.number}</span>
                    <span className="text-[10px] font-bold uppercase opacity-80">Número</span>
                 </div>
              </div>
           </div>

           {/* 3. Bio */}
           <div className={`p-8 rounded-[2.5rem] ${cardBg}`}>
              <h3 className={`text-xl font-black uppercase tracking-wide mb-4 flex items-center gap-2 ${textColor}`}>
                 <LayoutGrid size={20} /> Bio
              </h3>
              <p className={`text-lg leading-relaxed ${isLight ? 'text-gray-600' : 'text-gray-300'}`}>
                {driver.bio || "Biografia ainda não disponível para este piloto. Mas fique de olho, em breve traremos toda a trajetória dele nas pistas!"}
              </p>
              
              {/* Assinatura */}
              <div className="mt-8 pt-6 border-t border-gray-200/10 flex justify-end">
                 <span className={`font-handwriting text-4xl opacity-60 ${textColor}`} style={{ fontFamily: 'cursive' }}>
                    {driver.signature || driver.name}
                 </span>
              </div>
           </div>

           {/* 4. Vibes e Curiosidades */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Vibes */}
              <div className={`p-6 rounded-3xl ${cardBg}`}>
                 <h4 className={`text-sm font-black uppercase tracking-widest mb-4 ${textSub}`}>Vibes</h4>
                 <div className="flex flex-wrap gap-3">
                    {driver.vibes && driver.vibes.map((vibe, i) => {
                        const Icon = vibe.icon; 
                        return (
                            <div key={i} className={`flex items-center gap-2 px-4 py-2 rounded-full border ${isLight ? 'bg-gray-50 border-gray-200 text-gray-700' : 'bg-[#1a1a20] border-[#333] text-gray-200'}`}>
                                {Icon && <Icon size={16} className={isLight ? 'text-gray-400' : 'text-[#fe88dd]'} />}
                                <span className="text-xs font-bold uppercase">{vibe.label}</span>
                            </div>
                        )
                    })}
                 </div>
              </div>

              {/* Segredo */}
              <div className={`p-6 rounded-3xl relative overflow-hidden ${isLight ? 'bg-gray-900 text-white' : 'bg-[#fe88dd]/10 border border-[#fe88dd]/30 text-white'}`}>
                 <Zap className={`absolute top-[-10px] right-[-10px] w-24 h-24 opacity-10 rotate-12 ${isLight ? 'text-white' : 'text-[#fe88dd]'}`} />
                 <h4 className={`text-sm font-black uppercase tracking-widest mb-4 opacity-70`}>Fato Secreto</h4>
                 <p className="text-lg font-medium italic">
                    "{driver.secretFact || "Nada declarado..."}"
                 </p>
              </div>

           </div>

        </div>
      </div>
    </div>
  );
};

export default DriverDetail;