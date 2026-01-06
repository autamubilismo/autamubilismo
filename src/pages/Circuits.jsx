import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, Flag, Timer, ChevronLeft, Map, Activity, 
  Trophy, Zap, Sparkles, Navigation, X, ZoomIn 
} from 'lucide-react';

// --- COMPONENTE: Modal de Visualização ---
const CircuitModal = ({ circuit, isOpen, onClose, theme }) => {
  const isLight = theme === 'light';
  
  if (!isOpen || !circuit) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Overlay */}
      <div className={`absolute inset-0 backdrop-blur-xl ${isLight ? 'bg-black/40' : 'bg-black/80'}`} />
      
      {/* Modal Content */}
      <div 
        className={`relative z-10 max-w-5xl w-full rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300 ${
          isLight 
            ? 'bg-white border-2 border-pink-200' 
            : 'bg-[#0a0a10] border-2 border-cyan-500/30 shadow-[0_0_50px_rgba(0,255,242,0.3)]'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`flex items-center justify-between p-6 border-b ${isLight ? 'border-pink-100 bg-pink-50/50' : 'border-white/10 bg-white/5'}`}>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl">{circuit.countryCode === 'BR' ? '🇧🇷' : circuit.countryCode === 'MC' ? '🇲🇨' : circuit.countryCode === 'GB' ? '🇬🇧' : circuit.countryCode === 'BE' ? '🇧🇪' : circuit.countryCode === 'US' ? '🇺🇸' : '🇯🇵'}</span>
              <span className={`text-xs font-bold uppercase tracking-wider ${isLight ? 'text-gray-500' : 'text-cyan-400'}`}>
                {circuit.location}
              </span>
            </div>
            <h2 className={`text-2xl md:text-3xl font-black uppercase tracking-tight ${isLight ? 'text-gray-900' : 'text-white'}`}>
              {circuit.name}
            </h2>
          </div>
          
          {/* Botão Fechar */}
          <button
            onClick={onClose}
            className={`p-2 rounded-full transition-all hover:scale-110 active:scale-95 ${
              isLight 
                ? 'bg-white text-gray-600 hover:bg-gray-100 shadow-md' 
                : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
            }`}
          >
            <X size={24} />
          </button>
        </div>

        {/* Image Container */}
        <div className={`p-8 ${isLight ? 'bg-gradient-to-br from-pink-50 to-purple-50' : 'bg-gradient-to-br from-[#0a0a10] to-[#1a0a20]'}`}>
          <div className={`rounded-2xl overflow-hidden ${isLight ? 'bg-white shadow-xl' : 'bg-black/40 shadow-2xl border border-white/10'}`}>
            <img 
              src={circuit.image} 
              alt={`Layout completo ${circuit.name}`}
              className={`w-full h-auto ${isLight ? '' : 'invert brightness-110 contrast-125'}`}
            />
          </div>
        </div>

        {/* Stats Footer */}
        <div className={`p-6 border-t ${isLight ? 'border-pink-100' : 'border-white/10'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <div className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${isLight ? 'text-gray-400' : 'text-gray-500'}`}>
                Extensão
              </div>
              <div className={`text-lg font-black ${isLight ? 'text-gray-900' : 'text-cyan-400'}`}>
                {circuit.length}
              </div>
            </div>
            
            <div>
              <div className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${isLight ? 'text-gray-400' : 'text-gray-500'}`}>
                Voltas
              </div>
              <div className={`text-lg font-black ${isLight ? 'text-gray-900' : 'text-cyan-400'}`}>
                {circuit.laps || '--'}
              </div>
            </div>
            
            <div>
              <div className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${isLight ? 'text-gray-400' : 'text-gray-500'}`}>
                Tipo
              </div>
              <div className={`text-sm font-bold ${isLight ? 'text-gray-700' : 'text-white'}`}>
                {circuit.type}
              </div>
            </div>
            
            <div>
              <div className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${isLight ? 'text-gray-400' : 'text-gray-500'}`}>
                Recorde
              </div>
              <div className={`text-xs font-bold ${isLight ? 'text-pink-600' : 'text-fuchsia-400'}`}>
                {circuit.record}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

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
  const [selectedCircuit, setSelectedCircuit] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (circuit) => {
    setSelectedCircuit(circuit);
    setModalOpen(true);
    document.body.style.overflow = 'hidden'; // Previne scroll do body
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedCircuit(null);
    document.body.style.overflow = 'unset';
  };

  // --- BACKGROUNDS ---
  const lightPattern = {
    backgroundColor: '#FFF5F8',
    backgroundImage: `
      radial-gradient(at 0% 0%, rgba(247, 184, 200, 0.3) 0px, transparent 50%),
      radial-gradient(at 100% 0%, rgba(216, 196, 240, 0.3) 0px, transparent 50%),
      url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffb7b2' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
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

  // Cores e Estilos Dinâmicos
  const textMain = isLight ? 'text-gray-900' : 'text-white';
  const textSub = isLight ? 'text-gray-500' : 'text-cyan-100/60';
  
  const cardBg = isLight 
    ? 'bg-white/80 backdrop-blur-sm border border-pink-100 shadow-lg hover:shadow-xl hover:border-pink-200' 
    : 'bg-[#121217]/70 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 shadow-lg hover:shadow-xl';

  const badgeStyle = isLight 
    ? 'bg-pink-50 text-pink-600 border border-pink-200' 
    : 'bg-cyan-900/30 text-cyan-300 border border-cyan-500/40';

  return (
    <div 
      className={`min-h-screen p-4 md:p-8 font-sans`} 
      style={isLight ? lightPattern : darkPattern}
    >
      
      {/* Modal de Visualização */}
      <CircuitModal 
        circuit={selectedCircuit}
        isOpen={modalOpen}
        onClose={closeModal}
        theme={theme}
      />

      {/* Elementos Decorativos de Fundo */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
         <div className={`absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full blur-[120px] opacity-10 ${isLight ? 'bg-pink-200' : 'bg-[#bd00ff]/10'}`} />
         <div className={`absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full blur-[100px] opacity-10 ${isLight ? 'bg-purple-200' : 'bg-[#00fff2]/10'}`} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <BackButton to="/" theme={theme} />

        {/* --- HEADER --- */}
        <div className="mb-12 text-center md:text-left relative">
           <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className={`p-3 rounded-full ${isLight ? 'bg-white shadow-md text-pink-500' : 'bg-white/10 border border-white/20 text-cyan-400'}`}>
                 <Map size={24} />
              </div>
              <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${isLight ? 'text-pink-600' : 'text-fuchsia-400'}`}>
                 Track Guide
              </span>
           </div>
           
           <h1 className={`text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-5 ${isLight ? 'text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600' : 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-fuchsia-400'}`} style={{ fontFamily: "'Russo One', sans-serif" }}>
             Circuitos
           </h1>
           
           <p className={`text-base md:text-lg font-medium max-w-2xl mx-auto md:mx-0 ${textSub}`}>
             O palco onde a mágica acontece. Clique no mapa para visualizar em detalhe.
           </p>
        </div>

        {/* --- GRID DE CIRCUITOS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {CIRCUITS_DATA.map((circuit) => (
             <div 
               key={circuit.id} 
               className={`group relative rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1 flex flex-col h-full ${cardBg}`}
             >
                {/* Imagem do Circuito (Topo) */}
                <div className="relative h-56 overflow-hidden bg-gray-100 dark:bg-gray-900">
                   <img 
                     src={circuit.photo} 
                     alt={circuit.name} 
                     className="w-full h-full object-cover"
                     loading="lazy"
                   />
                   
                   {/* Overlay Gradiente */}
                   <div className={`absolute inset-0 bg-gradient-to-t ${isLight ? 'from-white/60 via-transparent to-transparent' : 'from-[#121217]/60 via-transparent to-transparent'}`} />
                   
                   {/* Badge Vibe */}
                   <div className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider backdrop-blur-md ${badgeStyle}`}>
                      {circuit.vibe}
                   </div>
                </div>

                {/* Mapa do Circuito - CLICÁVEL */}
                <button
                  onClick={() => openModal(circuit)}
                  className={`relative -mt-10 mx-auto z-10 w-24 h-24 rounded-2xl p-3 backdrop-blur-md border-2 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl group/map ${
                    isLight 
                      ? 'bg-white border-pink-200 hover:border-pink-400' 
                      : 'bg-[#1a1a20] border-white/20 hover:border-cyan-400 hover:shadow-cyan-500/50'
                  }`}
                  title="Clique para visualizar em tamanho grande"
                >
                   <img 
                     src={circuit.image} 
                     alt={`Layout ${circuit.name}`} 
                     className={`w-full h-full object-contain transition-all ${isLight ? 'opacity-90 group-hover/map:opacity-100' : 'invert brightness-110 contrast-125 group-hover/map:brightness-125'}`}
                     loading="lazy"
                   />
                   
                   {/* Ícone de Zoom no Hover */}
                   <div className={`absolute inset-0 flex items-center justify-center opacity-0 group-hover/map:opacity-100 transition-opacity ${isLight ? 'bg-white/90' : 'bg-black/80'}`}>
                     <ZoomIn className={`${isLight ? 'text-pink-500' : 'text-cyan-400'}`} size={32} />
                   </div>
                </button>

                {/* Info do Circuito */}
                <div className="p-6 pt-4 flex-1 flex flex-col">
                   <div className="mb-4 text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                         <span className="text-lg">{circuit.countryCode === 'BR' ? '🇧🇷' : circuit.countryCode === 'MC' ? '🇲🇨' : circuit.countryCode === 'GB' ? '🇬🇧' : circuit.countryCode === 'BE' ? '🇧🇪' : circuit.countryCode === 'US' ? '🇺🇸' : '🇯🇵'}</span>
                         <span className={`text-[9px] font-bold uppercase tracking-widest ${textSub}`}>{circuit.location}</span>
                      </div>
                      <h3 className={`text-xl font-black uppercase leading-tight tracking-tight ${textMain}`}>
                        {circuit.name}
                      </h3>
                   </div>

                   {/* Grid de Estatísticas */}
                   <div className={`grid grid-cols-2 gap-3 mt-auto p-4 rounded-2xl ${isLight ? 'bg-gray-50/80 border border-gray-200' : 'bg-white/5 border border-white/10'}`}>
                      
                      <div className="flex flex-col gap-1">
                         <div className={`flex items-center gap-1.5 text-[9px] font-bold uppercase ${isLight ? 'text-gray-400' : 'text-gray-500'}`}>
                            <Navigation size={11} /> Extensão
                         </div>
                         <span className={`text-sm font-black ${textMain}`}>{circuit.length}</span>
                      </div>

                      <div className="flex flex-col gap-1">
                         <div className={`flex items-center gap-1.5 text-[9px] font-bold uppercase ${isLight ? 'text-gray-400' : 'text-gray-500'}`}>
                            <Activity size={11} /> Voltas
                         </div>
                         <span className={`text-sm font-black ${textMain}`}>{circuit.laps || '--'}</span>
                      </div>

                      <div className="col-span-2 pt-2 mt-1 border-t border-dashed border-gray-300 dark:border-white/10">
                         <div className={`flex items-center gap-1.5 text-[9px] font-bold uppercase mb-1 ${isLight ? 'text-gray-400' : 'text-gray-500'}`}>
                            <Timer size={11} /> Recorde
                         </div>
                         <span className={`text-xs font-bold ${isLight ? 'text-pink-600' : 'text-cyan-400'}`}>{circuit.record}</span>
                      </div>
                   </div>
                </div>
             </div>
           ))}
        </div>

      </div>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Russo+One&display=swap');`}</style>
    </div>
  );
};

export default CircuitsPage;