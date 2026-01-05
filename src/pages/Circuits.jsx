import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, Flag, Timer, ChevronLeft, Map, Activity, 
  Trophy, Zap, Sparkles, Navigation 
} from 'lucide-react';

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

// --- DADOS DOS CIRCUITOS ---
const CIRCUITS_DATA = [
 {
    id: 'australia',
    name: 'Albert Park Circuit',
    location: 'Melbourne, Austrália',
    countryCode: 'AU',
    length: '5.278 km',
    laps: 58,
    record: '1:19.813 (Charles Leclerc, 2024)',
    image: '/img/circuitos/australia.avif',
    photo: '/img/circuitos/australia.avif',
    type: 'Urbano / Semi-rua',
    vibe: 'Season Opener Energy'
  },
  {
    id: 'china',
    name: 'Shanghai International Circuit',
    location: 'Xangai, China',
    countryCode: 'CN',
    length: '5.451 km',
    laps: 56,
    record: '1:32.238 (Michael Schumacher, 2004)',
    image: '/img/circuitos/china.avif',
    photo: '/img/circuitos/china.avif',
    type: 'Técnico',
    vibe: 'Big Stage'
  },
  {
    id: 'japan',
    name: 'Suzuka Circuit',
    location: 'Suzuka, Japão',
    countryCode: 'JP',
    length: '5.807 km',
    laps: 53,
    record: '1:30.965 (Kimi Antonelli, 2025)',
    image: '/img/circuitos/japan.avif',
    photo: '/img/circuitos/japan.avif',
    type: 'Técnico',
    vibe: 'Fan Passion'
  },
  {
    id: 'bahrain',
    name: 'Bahrain International Circuit',
    location: 'Sakhir, Bahrain',
    countryCode: 'BH',
    length: '5.412 km',
    laps: 57,
    record: '1:31.447 (Pedro de la Rosa, 2005)',
    image: '/img/circuitos/bahrain.avif',
    photo: '/img/circuitos/bahrain.avif',
    type: 'Alta velocidade',
    vibe: 'Desert Night'
  },
  {
    id: 'saudi-arabia',
    name: 'Jeddah Corniche Circuit',
    location: 'Jeddah, Arábia Saudita',
    countryCode: 'SA',
    length: '6.174 km',
    laps: 50,
    record: '1:30.734 (Lewis Hamilton, 2021)',
    image: '/img/circuitos/saudi-arabia.avif',
    photo: '/img/circuitos/saudi-arabia.avif',
    type: 'Rua (Street Circuit)',
    vibe: 'High Speed Chaos'
  },
  {
    id: 'miami',
    name: 'Miami International Autodrome',
    location: 'Miami Gardens, EUA',
    countryCode: 'US',
    length: '5.412 km',
    laps: 57,
    record: '1:29.708 (Max Verstappen, 2023)',
    image: '/img/circuitos/miami.avif',
    photo: '/img/circuitos/miami.avif',
    type: 'Urbano / Semi-rua',
    vibe: 'Influencer Core'
  },
  {
    id: 'canada',
    name: 'Circuit Gilles-Villeneuve',
    location: 'Montreal, Canadá',
    countryCode: 'CA',
    length: '4.361 km',
    laps: 70,
    record: '1:13.078 (Valtteri Bottas, 2019)',
    image: '/img/circuitos/canada.avif',
    photo: '/img/circuitos/canada.avif',
    type: 'Alta velocidade',
    vibe: 'Wall Of Champions'
  },
  {
    id: 'monaco',
    name: 'Circuit de Monaco',
    location: 'Monte Carlo, Mônaco',
    countryCode: 'MC',
    length: '3.337 km',
    laps: 78,
    record: '1:12.909 (Lewis Hamilton, 2021)',
    image: '/img/circuitos/monaco.avif',
    photo: '/img/circuitos/monaco.avif',
    type: 'Rua (Street Circuit)',
    vibe: 'Glam & Precision'
  },
  {
    id: 'barcelona-catalunya',
    name: 'Circuit de Barcelona-Catalunya',
    location: 'Montmeló, Espanha',
    countryCode: 'ES',
    length: '4.657 km',
    laps: 66,
    record: '1:15.743 (Oscar Piastri, 2025)',
    image: '/img/circuitos/barcelona-catalunya.avif',
    photo: '/img/circuitos/barcelona-catalunya.avif',
    type: 'Técnico',
    vibe: 'Classic Test Track'
  },
  {
    id: 'austria',
    name: 'Red Bull Ring',
    location: 'Spielberg, Áustria',
    countryCode: 'AT',
    length: '4.326 km',
    laps: 71,
    record: '1:07.924 (Oscar Piastri, 2025)',
    image: '/img/circuitos/austria.avif',
    photo: '/img/circuitos/austria.avif',
    type: 'Alta velocidade',
    vibe: 'Short & Punchy'
  },
  {
    id: 'great-britain',
    name: 'Silverstone Circuit',
    location: 'Silverstone, Reino Unido',
    countryCode: 'GB',
    length: '5.891 km',
    laps: 52,
    record: '1:27.097 (Max Verstappen, 2020)',
    image: '/img/circuitos/great-britain.avif',
    photo: '/img/circuitos/great-britain.avif',
    type: 'Alta velocidade',
    vibe: 'Home Of F1'
  },
  {
    id: 'belgium',
    name: 'Circuit de Spa-Francorchamps',
    location: 'Stavelot, Bélgica',
    countryCode: 'BE',
    length: '7.004 km',
    laps: 44,
    record: '1:44.701 (Sergio Perez, 2024)',
    image: '/img/circuitos/belgium.avif',
    photo: '/img/circuitos/belgium.avif',
    type: 'Alta velocidade',
    vibe: 'Eau Rouge Myth'
  },
  {
    id: 'hungary',
    name: 'Hungaroring',
    location: 'Mogyoród, Hungria',
    countryCode: 'HU',
    length: '4.381 km',
    laps: 70,
    record: '1:16.627 (Lewis Hamilton, 2020)',
    image: '/img/circuitos/hungary.avif',
    photo: '/img/circuitos/hungary.avif',
    type: 'Técnico',
    vibe: 'Hot & Tight'
  },
  {
    id: 'netherlands',
    name: 'Circuit Zandvoort',
    location: 'Zandvoort, Países Baixos',
    countryCode: 'NL',
    length: '4.259 km',
    laps: 72,
    record: '1:11.097 (Lewis Hamilton, 2021)',
    image: '/img/circuitos/netherlands.avif',
    photo: '/img/circuitos/netherlands.avif',
    type: 'Técnico',
    vibe: 'Banking Madness'
  },
  {
    id: 'italy',
    name: 'Autodromo Nazionale Monza',
    location: 'Monza, Itália',
    countryCode: 'IT',
    length: '5.793 km',
    laps: 53,
    record: '1:20.901 (Lando Norris, 2025)',
    image: '/img/circuitos/italy.avif',
    photo: '/img/circuitos/italy.avif',
    type: 'Alta velocidade',
    vibe: 'Temple Of Speed'
  },
  {
    id: 'spain',
    name: 'Madring',
    location: 'Madrid, Espanha',
    countryCode: 'ES',
    length: '5.474 km',
    laps: null,
    record: '--',
    image: '/img/circuitos/spain.avif',
    photo: '/img/circuitos/spain.avif',
    type: 'Rua (Street Circuit)',
    vibe: 'New Era Debut'
  },
  {
    id: 'azerbaijan',
    name: 'Baku City Circuit',
    location: 'Baku, Azerbaijão',
    countryCode: 'AZ',
    length: '6.003 km',
    laps: 51,
    record: '1:43.009 (Charles Leclerc, 2019)',
    image: '/img/circuitos/azerbaijan.avif',
    photo: '/img/circuitos/azerbaijan.avif',
    type: 'Rua (Street Circuit)',
    vibe: 'Castle Straight'
  },
  {
    id: 'singapore',
    name: 'Marina Bay Street Circuit',
    location: 'Singapura, Singapura',
    countryCode: 'SG',
    length: '4.927 km',
    laps: 62,
    record: '1:33.808 (Lewis Hamilton, 2025)',
    image: '/img/circuitos/singapore.avif',
    photo: '/img/circuitos/singapore.avif',
    type: 'Rua (Street Circuit)',
    vibe: 'Night Heat'
  },
  {
    id: 'united-states',
    name: 'Circuit of the Americas',
    location: 'Austin, EUA',
    countryCode: 'US',
    length: '5.513 km',
    laps: 56,
    record: '1:36.169 (Charles Leclerc, 2019)',
    image: '/img/circuitos/united-states.avif',
    photo: '/img/circuitos/united-states.avif',
    type: 'Técnico',
    vibe: 'Stadium Roar'
  },
  {
    id: 'mexico',
    name: 'Autódromo Hermanos Rodríguez',
    location: 'Cidade do México, México',
    countryCode: 'MX',
    length: '4.304 km',
    laps: 71,
    record: '1:17.774 (Valtteri Bottas, 2021)',
    image: '/img/circuitos/mexico.avif',
    photo: '/img/circuitos/mexico.avif',
    type: 'Alta velocidade',
    vibe: 'Stadium Party'
  },
  {
    id: 'brazil',
    name: 'Autódromo José Carlos Pace (Interlagos)',
    location: 'São Paulo, Brasil',
    countryCode: 'BR',
    length: '4.309 km',
    laps: 71,
    record: '1:10.540 (Valtteri Bottas, 2018)',
    image: '/img/circuitos/brazil.avif',
    photo: '/img/circuitos/brazil.avif',
    type: 'Técnico',
    vibe: 'Pure Emotion'
  },
  {
    id: 'las-vegas',
    name: 'Las Vegas Strip Circuit',
    location: 'Las Vegas, EUA',
    countryCode: 'US',
    length: '6.201 km',
    laps: 50,
    record: '1:33.365 (Max Verstappen, 2025)',
    image: '/img/circuitos/las-vegas.avif',
    photo: '/img/circuitos/las-vegas.avif',
    type: 'Rua (Street Circuit)',
    vibe: 'Neon Speed'
  },
  {
    id: 'qatar',
    name: 'Lusail International Circuit',
    location: 'Lusail, Qatar',
    countryCode: 'QA',
    length: '5.419 km',
    laps: 57,
    record: '1:22.384 (Lando Norris, 2024)',
    image: '/img/circuitos/qatar.avif',
    photo: '/img/circuitos/qatar.avif',
    type: 'Alta velocidade',
    vibe: 'Desert Flow'
  },
  {
    id: 'abu-dhabi',
    name: 'Yas Marina Circuit',
    location: 'Abu Dhabi, Emirados Árabes Unidos',
    countryCode: 'AE',
    length: '5.281 km',
    laps: 58,
    record: '1:25.637 (Kevin Magnussen, 2024)',
    image: '/img/circuitos/abu-dhabi.avif',
    photo: '/img/circuitos/abu-dhabi.avif',
    type: 'Alta velocidade',
    vibe: 'Final Boss'
  }
];

const CircuitsPage = ({ theme = 'light' }) => {
  const isLight = theme === 'light';

  // --- BACKGROUNDS ---
  const lightPattern = {
    backgroundColor: '#FFF5F8',
    backgroundImage: `
      radial-gradient(at 0% 0%, rgba(247, 184, 200, 0.4) 0px, transparent 50%),
      radial-gradient(at 100% 0%, rgba(216, 196, 240, 0.4) 0px, transparent 50%),
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

  // Cores e Estilos Dinâmicos
  const textMain = isLight ? 'text-gray-900' : 'text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]';
  const textSub = isLight ? 'text-gray-500' : 'text-cyan-100/70';
  
  const cardBg = isLight 
    ? 'bg-white/70 backdrop-blur-xl border border-pink-100 shadow-[0_10px_30px_rgba(255,182,193,0.3)] hover:border-pink-300 hover:shadow-pink-200' 
    : 'bg-[#121217]/80 backdrop-blur-xl border border-white/10 hover:border-cyan-500/50 shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(0,255,242,0.15)]';

  const badgeStyle = isLight 
    ? 'bg-pink-50 text-pink-600 border border-pink-100' 
    : 'bg-cyan-900/20 text-cyan-300 border border-cyan-500/30 shadow-[0_0_10px_rgba(0,255,242,0.2)]';

  return (
    <div 
      className={`min-h-screen p-4 md:p-8 animate-in fade-in slide-in-from-bottom-4 duration-700 font-sans`} 
      style={isLight ? lightPattern : darkPattern}
    >
      
      {/* Elementos Decorativos de Fundo */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden mix-blend-screen">
         <div className={`absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 ${isLight ? 'bg-pink-200' : 'bg-[#bd00ff]/20 animate-pulse'}`} />
         <div className={`absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full blur-[100px] opacity-20 ${isLight ? 'bg-purple-200' : 'bg-[#00fff2]/20 animate-pulse'}`} />
         {!isLight && <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent shadow-[0_0_20px_cyan]" />}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <BackButton to="/" theme={theme} />

        {/* --- HEADER --- */}
        <div className="mb-14 text-center md:text-left relative">
           <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className={`p-3 rounded-full ${isLight ? 'bg-white shadow-md text-pink-500' : 'bg-white/10 border border-white/20 text-cyan-400'}`}>
                 <Map size={24} />
              </div>
              <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${isLight ? 'text-pink-600' : 'text-fuchsia-400'}`}>
                 Track Guide
              </span>
           </div>
           
           <h1 className={`text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-6 ${isLight ? 'text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600' : 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-fuchsia-500 drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]'}`} style={{ fontFamily: "'Russo One', sans-serif" }}>
             Circuitos
           </h1>
           
           <p className={`text-lg md:text-xl font-medium max-w-2xl mx-auto md:mx-0 ${textSub}`}>
             O palco onde a mágica acontece. Detalhes técnicos e vibes de cada traçado.
           </p>
        </div>

        {/* --- GRID DE CIRCUITOS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {CIRCUITS_DATA.map((circuit) => (
             <div 
               key={circuit.id} 
               className={`group relative rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:-translate-y-2 cursor-pointer flex flex-col h-full ${cardBg}`}
             >
                {/* Imagem do Circuito (Topo) */}
                <div className="relative h-64 overflow-hidden">
                   <img 
                     src={circuit.photo} 
                     alt={circuit.name} 
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-110"
                   />
                   
                   {/* Overlay Gradiente */}
                   <div className={`absolute inset-0 bg-gradient-to-t ${isLight ? 'from-white via-transparent to-transparent' : 'from-[#121217] via-transparent to-transparent'}`} />
                   
                   {/* Badge Vibe */}
                   <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest backdrop-blur-md ${badgeStyle}`}>
                      {circuit.vibe}
                   </div>
                   
                   {/* Mapa do Circuito (Flutuante) */}
                   <div className={`absolute bottom-4 right-4 w-16 h-16 rounded-xl p-2 backdrop-blur-md border ${isLight ? 'bg-white/80 border-white shadow-lg' : 'bg-black/60 border-white/20 shadow-[0_0_10px_black]'}`}>
                      <img src={circuit.image} alt="Layout" className={`w-full h-full object-contain ${!isLight && 'invert brightness-200'}`} />
                   </div>
                </div>

                {/* Info do Circuito (Baixo) */}
                <div className="p-8 pt-4 flex-1 flex flex-col">
                   <div className="mb-6">
                      <div className="flex items-center gap-2 mb-2">
                         <span className="text-xl">{circuit.countryCode === 'BR' ? '🇧🇷' : circuit.countryCode === 'MC' ? '🇲🇨' : circuit.countryCode === 'GB' ? '🇬🇧' : circuit.countryCode === 'BE' ? '🇧🇪' : circuit.countryCode === 'US' ? '🇺🇸' : '🇯🇵'}</span>
                         <span className={`text-[10px] font-bold uppercase tracking-widest ${textSub}`}>{circuit.location}</span>
                      </div>
                      <h3 className={`text-2xl font-black uppercase leading-none tracking-tight ${textMain}`}>
                        {circuit.name}
                      </h3>
                   </div>

                   {/* Grid de Estatísticas */}
                   <div className={`grid grid-cols-2 gap-3 mt-auto p-4 rounded-2xl ${isLight ? 'bg-gray-50 border border-gray-100' : 'bg-white/5 border border-white/5'}`}>
                      
                      <div className="flex flex-col gap-1">
                         <div className={`flex items-center gap-1.5 text-[10px] font-bold uppercase ${isLight ? 'text-gray-400' : 'text-gray-500'}`}>
                            <Navigation size={12} /> Extensão
                         </div>
                         <span className={`text-sm font-black ${textMain}`}>{circuit.length}</span>
                      </div>

                      <div className="flex flex-col gap-1">
                         <div className={`flex items-center gap-1.5 text-[10px] font-bold uppercase ${isLight ? 'text-gray-400' : 'text-gray-500'}`}>
                            <Activity size={12} /> Voltas
                         </div>
                         <span className={`text-sm font-black ${textMain}`}>{circuit.laps}</span>
                      </div>

                      <div className="col-span-2 pt-3 mt-1 border-t border-dashed border-gray-200 dark:border-white/10">
                         <div className={`flex items-center gap-1.5 text-[10px] font-bold uppercase mb-1 ${isLight ? 'text-gray-400' : 'text-gray-500'}`}>
                            <Timer size={12} /> Recorde
                         </div>
                         <span className={`text-sm font-black ${isLight ? 'text-pink-600' : 'text-cyan-400'}`}>{circuit.record}</span>
                      </div>
                   </div>
                </div>

                {/* Brilho no Hover (Dark Mode) */}
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

export default CircuitsPage;