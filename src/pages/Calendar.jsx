import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, MapPin, Clock, Zap, Flag, AlertTriangle, 
  ChevronLeft, Info, Trophy, Plane, ChevronDown, ChevronUp, Star, Wrench
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

// --- DADOS ESTRUTURADOS DA TEMPORADA 2026 ---
const PRE_SEASON = [
  { id: 't1', name: 'Teste 1 (Privado)', loc: 'Barcelona, Espanha', date: '26-30 Jan', circuit: 'Circuit de Barcelona-Catalunya' },
  { id: 't2', name: 'Teste 2 (Oficial)', loc: 'Sakhir, Bahrein', date: '11-13 Fev', circuit: 'Bahrain International Circuit' },
  { id: 't3', name: 'Teste 3 (Oficial)', loc: 'Sakhir, Bahrein', date: '18-20 Fev', circuit: 'Bahrain International Circuit' },
];

const RACES = [
  { round: 1, gp: 'Austrália', loc: 'Melbourne', date: '6-8 Mar', sprint: false, flag: '🇦🇺', times: { q: 'Sáb 01:00', r: 'Dom 01:00' } },
  { round: 2, gp: 'China', loc: 'Xangai', date: '13-15 Mar', sprint: true, flag: '🇨🇳', times: { sq: 'Sex 03:30', s: 'Sáb 23:30', q: 'Sáb 03:00', r: 'Dom 03:00' } },
  { round: 3, gp: 'Japão', loc: 'Suzuka', date: '27-29 Mar', sprint: false, flag: '🇯🇵', times: { q: 'Sáb 01:00', r: 'Dom 01:00' } },
  { round: 4, gp: 'Bahrein', loc: 'Sakhir', date: '10-12 Abr', sprint: false, flag: '🇧🇭', times: { q: 'Sáb 12:00', r: 'Dom 12:00' } },
  { round: 5, gp: 'Arábia Saudita', loc: 'Jeddah', date: '17-19 Abr', sprint: false, flag: '🇸🇦', times: { q: 'Sáb 14:00', r: 'Dom 14:00' } },
  { round: 6, gp: 'Miami', loc: 'Miami, EUA', date: '1-3 Mai', sprint: true, flag: '🇺🇸', times: { sq: 'Sex 20:30', s: 'Sáb 16:00', q: 'Sáb 20:00', r: 'Dom 16:30' } },
  { round: 7, gp: 'Canadá', loc: 'Montreal', date: '22-24 Mai', sprint: true, flag: '🇨🇦', note: 'Sprint pela 1ª vez! Horário alterado (Indy 500)', times: { sq: 'Sex 20:30', s: 'Sáb 15:30', q: 'Sáb 19:30', r: 'Dom 17:00' } },
  { round: 8, gp: 'Mônaco', loc: 'Monte Carlo', date: '5-7 Jun', sprint: false, flag: '🇲🇨', times: { q: 'Sáb 11:00', r: 'Dom 10:00' } },
  { round: 9, gp: 'Espanha', loc: 'Barcelona', date: '12-14 Jun', sprint: false, flag: '🇪🇸', times: { q: 'Sáb 11:00', r: 'Dom 10:00' } },
  { round: 10, gp: 'Áustria', loc: 'Spielberg', date: '26-28 Jun', sprint: false, flag: '🇦🇹', times: { q: 'Sáb 11:00', r: 'Dom 10:00' } },
  { round: 11, gp: 'Grã-Bretanha', loc: 'Silverstone', date: '3-5 Jul', sprint: true, flag: '🇬🇧', note: 'Sprint retorna após 2021', times: { sq: 'Sex 13:30', s: 'Sáb 12:00', q: 'Sáb 16:00', r: 'Dom 11:00' } },
  { round: 12, gp: 'Bélgica', loc: 'Spa', date: '17-19 Jul', sprint: false, flag: '🇧🇪', times: { q: 'Sáb 11:00', r: 'Dom 10:00' } },
  { round: 13, gp: 'Hungria', loc: 'Budapeste', date: '24-26 Jul', sprint: false, flag: '🇭🇺', times: { q: 'Sáb 11:00', r: 'Dom 10:00' } },
  // SUMMER BREAK
  { round: 14, gp: 'Holanda', loc: 'Zandvoort', date: '21-23 Ago', sprint: true, flag: '🇳🇱', note: 'Última corrida em Zandvoort!', times: { sq: 'Sex 12:30', s: 'Sáb 11:30', q: 'Sáb 15:00', r: 'Dom 10:00' } },
  { round: 15, gp: 'Itália', loc: 'Monza', date: '4-6 Set', sprint: false, flag: '🇮🇹', times: { q: 'Sáb 11:00', r: 'Dom 10:00' } },
  { round: 16, gp: 'Madrid', loc: 'Madrid', date: '11-13 Set', sprint: false, flag: '🇪🇸', note: '⭐ ESTREIA: Novo Circuito Urbano (MADRING)', times: { q: 'Sáb 11:00', r: 'Dom 10:00' } },
  { round: 17, gp: 'Azerbaijão', loc: 'Baku', date: '24-26 Set', sprint: false, flag: '🇦🇿', note: '⚠️ Corrida no SÁBADO (Memorial Day)', times: { q: 'Sex 10:00', r: 'SÁB 10:00' } },
  { round: 18, gp: 'Cingapura', loc: 'Marina Bay', date: '9-11 Out', sprint: true, flag: '🇸🇬', note: 'Sprint pela 1ª vez', times: { sq: 'Sex 14:30', s: 'Sáb 10:30', q: 'Sáb 14:00', r: 'Dom 09:00' } },
  { round: 19, gp: 'EUA', loc: 'Austin', date: '23-25 Out', sprint: false, flag: '🇺🇸', times: { q: 'Sáb 18:00', r: 'Dom 17:00' } },
  { round: 20, gp: 'México', loc: 'Cidade do México', date: '30 Out - 1 Nov', sprint: false, flag: '🇲🇽', times: { q: 'Sáb 18:00', r: 'Dom 17:00' } },
  { round: 21, gp: 'São Paulo', loc: 'Interlagos', date: '6-8 Nov', sprint: false, flag: '🇧🇷', times: { q: 'Sáb 12:00', r: 'Dom 11:00' } },
  { round: 22, gp: 'Las Vegas', loc: 'Las Vegas, EUA', date: '19-21 Nov', sprint: false, flag: '🇺🇸', note: '⚠️ Corrida SÁBADO à noite (Madrugada Dom no BR)', times: { q: 'Sex 03:00', r: 'SÁB 03:00' } },
  { round: 23, gp: 'Qatar', loc: 'Doha', date: '27-29 Nov', sprint: false, flag: '🇶🇦', times: { q: 'Sáb 15:00', r: 'Dom 15:00' } },
  { round: 24, gp: 'Abu Dhabi', loc: 'Yas Marina', date: '4-6 Dez', sprint: false, flag: '🇦🇪', note: '🏁 Grande Final', times: { q: 'Sáb 11:00', r: 'Dom 11:00' } },
];

const CalendarPage = ({ theme = 'light' }) => {
  const isLight = theme === 'light';
  const [expandedId, setExpandedId] = useState(null);

  // --- BACKGROUNDS & STYLES ---
  const lightPattern = {
    backgroundColor: '#FFF5F8',
    backgroundImage: `
      radial-gradient(at 0% 0%, rgba(247, 184, 200, 0.4) 0px, transparent 50%),
      radial-gradient(at 100% 100%, rgba(216, 196, 240, 0.4) 0px, transparent 50%),
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

  // Cores dinâmicas
  const textMain = isLight ? 'text-gray-900' : 'text-white';
  const textSub = isLight ? 'text-gray-500' : 'text-gray-400';
  const cardBg = isLight 
    ? 'bg-white/80 backdrop-blur-md border border-pink-100 shadow-[0_4px_20px_rgba(255,182,193,0.3)]' 
    : 'bg-[#121217]/80 backdrop-blur-md border border-white/10 shadow-[0_0_15px_rgba(0,255,242,0.1)]';
  
  const sprintBadge = isLight 
    ? 'bg-gradient-to-r from-yellow-300 to-orange-300 text-orange-900 shadow-md' 
    : 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow-[0_0_10px_orange]';

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className={`min-h-screen p-4 md:p-8 animate-in fade-in slide-in-from-bottom-4 duration-700 font-sans`} style={isLight ? lightPattern : darkPattern}>
      
      {/* Elementos Decorativos */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden mix-blend-screen">
         <div className={`absolute top-[-20%] left-[-10%] w-[800px] h-[800px] rounded-full blur-[120px] opacity-20 ${isLight ? 'bg-pink-200' : 'bg-[#bd00ff]/30 animate-pulse'}`} />
         {!isLight && <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent shadow-[0_0_20px_cyan]" />}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <BackButton to="/" theme={theme} />

        {/* HEADER */}
        <div className="mb-12 text-center relative">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border bg-white/10 backdrop-blur-sm border-white/20">
             <Trophy size={16} className={isLight ? 'text-pink-500' : 'text-yellow-400'} />
             <span className={`text-[10px] font-black uppercase tracking-[0.25em] ${isLight ? 'text-pink-600' : 'text-yellow-400'}`}>Nova Era Regulatória</span>
          </div>
          <h1 className={`text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-6 ${isLight ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400' : 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-fuchsia-500 drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]'}`} style={{ fontFamily: "'Russo One', sans-serif" }}>
            Temporada 2026
          </h1>
          <p className={`text-lg md:text-xl font-medium max-w-2xl mx-auto ${textSub}`}>
            24 Corridas • 6 Sprints • Carros mais leves e ágeis
          </p>
        </div>

        {/* ESTATÍSTICAS RÁPIDAS (BENTO ROW) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
           <div className={`p-5 rounded-3xl flex flex-col items-center justify-center text-center gap-2 ${cardBg}`}>
              <Flag size={24} className={isLight ? 'text-purple-500' : 'text-cyan-400'} />
              <div>
                 <span className={`block text-2xl font-black ${textMain}`}>24</span>
                 <span className="text-[10px] uppercase font-bold opacity-50 tracking-wider">Corridas</span>
              </div>
           </div>
           <div className={`p-5 rounded-3xl flex flex-col items-center justify-center text-center gap-2 ${cardBg}`}>
              <Zap size={24} className={isLight ? 'text-yellow-500' : 'text-yellow-400'} />
              <div>
                 <span className={`block text-2xl font-black ${textMain}`}>6</span>
                 <span className="text-[10px] uppercase font-bold opacity-50 tracking-wider">Sprints</span>
              </div>
           </div>
           <div className={`p-5 rounded-3xl flex flex-col items-center justify-center text-center gap-2 ${cardBg}`}>
              <MapPin size={24} className={isLight ? 'text-pink-500' : 'text-fuchsia-400'} />
              <div>
                 <span className={`block text-2xl font-black ${textMain}`}>20</span>
                 <span className="text-[10px] uppercase font-bold opacity-50 tracking-wider">Países</span>
              </div>
           </div>
           <div className={`p-5 rounded-3xl flex flex-col items-center justify-center text-center gap-2 ${cardBg}`}>
              <Clock size={24} className={isLight ? 'text-blue-500' : 'text-green-400'} />
              <div>
                 <span className={`block text-2xl font-black ${textMain}`}>9</span>
                 <span className="text-[10px] uppercase font-bold opacity-50 tracking-wider">Meses</span>
              </div>
           </div>
        </div>

        {/* PRÉ-TEMPORADA */}
        <div className="mb-12">
           <h3 className={`text-xl font-black uppercase tracking-wider mb-6 pl-2 border-l-4 ${isLight ? 'border-pink-300 text-gray-800' : 'border-cyan-500 text-white'}`}>
              Testes Pré-Temporada
           </h3>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {PRE_SEASON.map((test) => (
                 <div key={test.id} className={`p-6 rounded-[2rem] relative overflow-hidden group ${isLight ? 'bg-white border-2 border-gray-100 hover:border-pink-200' : 'bg-[#1a1a20] border border-white/5 hover:border-cyan-500/50'}`}>
                    <div className="flex justify-between items-start mb-4">
                       <Wrench size={20} className={`opacity-50 ${textMain}`} />
                       <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded-md ${isLight ? 'bg-gray-100 text-gray-500' : 'bg-white/10 text-gray-300'}`}>
                          {test.id === 't1' ? 'Shakedown' : 'Oficial'}
                       </span>
                    </div>
                    <h4 className={`text-lg font-black uppercase mb-1 ${textMain}`}>{test.name}</h4>
                    <p className={`text-sm font-medium mb-3 ${isLight ? 'text-pink-500' : 'text-cyan-400'}`}>{test.date}</p>
                    <p className={`text-xs opacity-60 ${textMain}`}>{test.loc}</p>
                 </div>
              ))}
           </div>
        </div>

        {/* CALENDÁRIO PRINCIPAL */}
        <div className="space-y-6">
           {RACES.map((race, index) => {
              const isSummerBreak = index === 13; // Após Hungria
              const isExpanded = expandedId === race.round;

              return (
                <React.Fragment key={race.round}>
                   {/* PAUSA DE VERÃO */}
                   {isSummerBreak && (
                      <div className={`py-8 text-center my-8 rounded-[2rem] border-2 border-dashed ${isLight ? 'border-pink-200 bg-pink-50/50 text-pink-600' : 'border-white/10 bg-white/5 text-gray-400'}`}>
                         <div className="flex flex-col items-center gap-2">
                            <Plane size={32} className="animate-bounce-slow" />
                            <h3 className="text-xl font-black uppercase tracking-widest">Pausa de Verão</h3>
                            <p className="text-xs font-bold opacity-60">27 Julho - 20 Agosto</p>
                         </div>
                      </div>
                   )}

                   <div 
                     onClick={() => toggleExpand(race.round)}
                     className={`relative rounded-[2.5rem] transition-all duration-500 cursor-pointer overflow-hidden group ${
                        isExpanded 
                          ? (isLight ? 'bg-white ring-4 ring-pink-100 shadow-xl scale-[1.02]' : 'bg-[#121217] ring-1 ring-cyan-500 shadow-[0_0_30px_rgba(0,255,242,0.15)] scale-[1.02]') 
                          : cardBg
                     }`}
                   >
                      {/* Sprint Stripe */}
                      {race.sprint && (
                         <div className={`absolute top-0 right-0 px-4 py-1 rounded-bl-2xl text-[10px] font-black uppercase tracking-widest z-20 ${sprintBadge}`}>
                            ⚡ Sprint
                         </div>
                      )}

                      <div className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-10 relative z-10">
                         
                         {/* RODADA E BANDEIRA */}
                         <div className="flex flex-col items-center shrink-0 w-16">
                            <span className={`text-[10px] font-black uppercase tracking-widest mb-1 opacity-50 ${textMain}`}>Round</span>
                            <span className={`text-3xl font-black leading-none ${isLight ? 'text-gray-900' : 'text-white'}`}>{race.round}</span>
                            <span className="text-2xl mt-2 filter drop-shadow-sm">{race.flag}</span>
                         </div>

                         {/* INFO PRINCIPAL */}
                         <div className="flex-1 text-center md:text-left">
                            <h3 className={`text-2xl md:text-4xl font-black uppercase tracking-tight mb-2 ${textMain}`}>{race.gp}</h3>
                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                               <div className={`flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>
                                  <Calendar size={14} /> {race.date}
                               </div>
                               <div className={`flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>
                                  <MapPin size={14} /> {race.loc}
                               </div>
                            </div>
                            {race.note && (
                               <div className={`mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wide ${isLight ? 'bg-yellow-50 text-yellow-700 border border-yellow-200' : 'bg-yellow-900/20 text-yellow-400 border border-yellow-500/30'}`}>
                                  <Star size={10} className="fill-current" /> {race.note}
                               </div>
                            )}
                         </div>

                         {/* AÇÃO */}
                         <div className={`p-3 rounded-full transition-transform duration-300 ${isExpanded ? 'rotate-180 bg-gray-100 dark:bg-white/10' : 'bg-gray-50 dark:bg-black/20'}`}>
                            <ChevronDown size={20} className={isLight ? 'text-gray-400' : 'text-white/50'} />
                         </div>
                      </div>

                      {/* HORÁRIOS EXPANDIDOS (BRT) */}
                      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                         <div className={`p-6 md:p-8 pt-0 border-t flex flex-col md:flex-row gap-8 ${isLight ? 'border-gray-100 bg-gray-50/50' : 'border-white/5 bg-black/20'}`}>
                            <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                               {race.times.sq && (
                                 <div className="flex flex-col gap-1 p-3 rounded-xl bg-white/50 dark:bg-white/5">
                                    <span className="text-[10px] font-bold uppercase opacity-50">Sprint Qualy</span>
                                    <span className={`text-sm font-mono font-bold ${textMain}`}>{race.times.sq}</span>
                                 </div>
                               )}
                               {race.times.s && (
                                 <div className={`flex flex-col gap-1 p-3 rounded-xl border ${isLight ? 'bg-orange-50 border-orange-100 text-orange-800' : 'bg-orange-900/10 border-orange-500/30 text-orange-400'}`}>
                                    <span className="text-[10px] font-black uppercase flex items-center gap-1"><Zap size={10} /> Sprint</span>
                                    <span className="text-sm font-mono font-bold">{race.times.s}</span>
                                 </div>
                               )}
                               <div className="flex flex-col gap-1 p-3 rounded-xl bg-white/50 dark:bg-white/5">
                                  <span className="text-[10px] font-bold uppercase opacity-50">Classificação</span>
                                  <span className={`text-sm font-mono font-bold ${textMain}`}>{race.times.q}</span>
                               </div>
                               <div className={`flex flex-col gap-1 p-3 rounded-xl border ${isLight ? 'bg-green-50 border-green-100 text-green-800' : 'bg-green-900/10 border-green-500/30 text-green-400'}`}>
                                  <span className="text-[10px] font-black uppercase flex items-center gap-1"><Flag size={10} /> Corrida</span>
                                  <span className="text-sm font-mono font-bold">{race.times.r}</span>
                               </div>
                            </div>
                            <div className="flex flex-col justify-center text-xs opacity-50 font-medium min-w-[150px]">
                               <p className="flex items-center gap-1"><Clock size={12} /> Horários de Brasília</p>
                               <p>Treinos Livres não listados.</p>
                            </div>
                         </div>
                      </div>
                   </div>
                </React.Fragment>
              );
           })}
        </div>

        <div className={`mt-12 p-6 rounded-3xl text-center text-xs font-medium opacity-60 ${isLight ? 'bg-white/40' : 'bg-white/5'}`}>
           <p>⚠️ Horários sujeitos a alterações pela FIA/F1. Confirmar próximo à data.</p>
           <p className="mt-1">© 2025 Autamubilismo. Dados baseados no calendário oficial de 2026.</p>
        </div>

      </div>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Russo+One&display=swap');`}</style>
    </div>
  );
};

export default CalendarPage;