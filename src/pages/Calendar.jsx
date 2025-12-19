import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar as CalendarIcon, MapPin, Clock, Zap, Flag, ChevronDown, ChevronUp, Star } from 'lucide-react';
import { BackButton } from '../components/ui';
import { PageContainer } from '../components/ui/PageContainer';
import { PageHeader } from '../components/ui/PageHeader';

// Componente Reutilizável: Card de Corrida
const RaceCard = ({ race, isExpanded, onToggle, theme }) => {
  const isLight = theme === 'light';
  
  return (
    <div className={`rounded-2xl overflow-hidden transition-all duration-300 ${
      isLight 
        ? 'bg-white/80 backdrop-blur-md border border-pink-100 shadow-lg hover:shadow-xl' 
        : 'bg-[#121217]/80 backdrop-blur-md border border-white/10 hover:border-cyan-500/30'
    }`}>
      {/* Header do Card */}
      <div 
        onClick={() => onToggle(race.round)}
        className="p-6 cursor-pointer hover:bg-white/50 dark:hover:bg-white/5 transition-colors"
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-1">
            <div className={`text-3xl font-black ${
              isLight ? 'text-gray-300' : 'text-white/20'
            }`}>
              {race.round}
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-2xl">{race.flag}</span>
                <h3 className={`text-lg font-black uppercase ${
                  isLight ? 'text-gray-900' : 'text-white'
                }`}>
                  {race.gp}
                </h3>
                {race.sprint && (
                  <span className={`px-2 py-0.5 rounded-md text-[9px] font-black uppercase ${
                    isLight 
                      ? 'bg-yellow-300 text-orange-900' 
                      : 'bg-yellow-400 text-black'
                  }`}>
                    Sprint
                  </span>
                )}
                {race.note?.includes('ESTREIA') && (
                  <Star size={16} className="text-green-500 fill-green-500" />
                )}
              </div>
              <div className={`flex items-center gap-4 text-sm ${
                isLight ? 'text-gray-600' : 'text-gray-400'
              }`}>
                <div className="flex items-center gap-1">
                  <MapPin size={14} />
                  {race.loc}
                </div>
                <div className="flex items-center gap-1">
                  <CalendarIcon size={14} />
                  {race.date}
                </div>
              </div>
            </div>
          </div>
          
          <div className={`p-2 rounded-full transition-transform ${
            isExpanded ? 'rotate-180' : ''
          } ${isLight ? 'bg-pink-100 text-pink-600' : 'bg-cyan-900/30 text-cyan-400'}`}>
            <ChevronDown size={20} />
          </div>
        </div>
        
        {race.note && (
          <div className={`mt-3 text-xs font-medium p-2 rounded-lg ${
            isLight 
              ? 'bg-purple-50 text-purple-700' 
              : 'bg-purple-900/20 text-purple-300'
          }`}>
            {race.note}
          </div>
        )}
      </div>

      {/* Detalhes Expandidos */}
      {isExpanded && race.times && (
        <div className={`p-6 pt-0 border-t ${
          isLight ? 'border-pink-100' : 'border-white/10'
        }`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            {Object.entries(race.times).map(([key, value]) => (
              <div key={key} className={`p-3 rounded-xl ${
                isLight ? 'bg-gray-50' : 'bg-white/5'
              }`}>
                <div className={`text-[9px] font-black uppercase tracking-wider mb-1 ${
                  isLight ? 'text-gray-500' : 'text-gray-400'
                }`}>
                  {key === 'sq' ? 'Sprint Quali' : 
                   key === 's' ? 'Sprint' :
                   key === 'q' ? 'Quali' :
                   key === 'r' ? 'Corrida' : key}
                </div>
                <div className={`flex items-center gap-1 text-sm font-bold ${
                  isLight ? 'text-gray-900' : 'text-white'
                }`}>
                  <Clock size={12} />
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const CalendarPage = ({ theme }) => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Importar dados (deve vir de data.js)
  const PRE_SEASON = [
    { id: 't1', name: 'Teste 1', loc: 'Barcelona, Espanha', date: '26-30 Jan' },
    { id: 't2', name: 'Teste 2', loc: 'Sakhir, Bahrein', date: '11-13 Fev' },
    { id: 't3', name: 'Teste 3', loc: 'Sakhir, Bahrein', date: '18-20 Fev' },
  ];

  const RACES = [
    { round: 1, gp: 'Austrália', loc: 'Melbourne', date: '6-8 Mar', sprint: false, flag: '🇦🇺', times: { q: 'Sáb 01:00', r: 'Dom 01:00' } },
    { round: 2, gp: 'China', loc: 'Xangai', date: '13-15 Mar', sprint: true, flag: '🇨🇳', times: { sq: 'Sex 03:30', s: 'Sáb 23:30', q: 'Sáb 03:00', r: 'Dom 03:00' } },
    // ... adicionar todas as outras corridas
  ];

  return (
    <PageContainer theme={theme}>
      <BackButton to="/season" theme={theme} />
      
      <PageHeader 
        theme={theme}
        badge="Temporada 2025"
        icon={CalendarIcon}
        title="Calendário"
        subtitle="24 corridas, 6 sprints, todos os horários no horário de Brasília"
      />

      {/* Pré-Temporada */}
      <div className="mb-12">
        <h2 className={`text-2xl font-black uppercase mb-6 flex items-center gap-3 ${
          theme === 'light' ? 'text-gray-900' : 'text-white'
        }`}>
          <Zap size={24} className={theme === 'light' ? 'text-pink-500' : 'text-cyan-400'} />
          Pré-Temporada
        </h2>
        <div className="grid gap-4">
          {PRE_SEASON.map((test) => (
            <div 
              key={test.id}
              className={`p-6 rounded-2xl ${
                theme === 'light'
                  ? 'bg-white/80 backdrop-blur-md border border-pink-100'
                  : 'bg-[#121217]/80 backdrop-blur-md border border-white/10'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className={`text-lg font-black ${
                    theme === 'light' ? 'text-gray-900' : 'text-white'
                  }`}>
                    {test.name}
                  </h3>
                  <p className={`text-sm ${
                    theme === 'light' ? 'text-gray-600' : 'text-gray-400'
                  }`}>
                    {test.loc} • {test.date}
                  </p>
                </div>
                <Flag size={20} className={theme === 'light' ? 'text-pink-400' : 'text-cyan-400'} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Corridas */}
      <div>
        <h2 className={`text-2xl font-black uppercase mb-6 flex items-center gap-3 ${
          theme === 'light' ? 'text-gray-900' : 'text-white'
        }`}>
          <Flag size={24} className={theme === 'light' ? 'text-pink-500' : 'text-cyan-400'} />
          Campeonato
        </h2>
        <div className="grid gap-4">
          {RACES.map((race) => (
            <RaceCard
              key={race.round}
              race={race}
              isExpanded={expandedId === race.round}
              onToggle={toggleExpand}
              theme={theme}
            />
          ))}
        </div>
      </div>

      {/* Link para 2026 */}
      <div className="mt-12">
        <Link
          to="/calendar/2026"
          className={`block p-8 rounded-2xl text-center transition-all hover:-translate-y-2 ${
            theme === 'light'
              ? 'bg-gradient-to-r from-purple-100 to-pink-100 hover:shadow-xl'
              : 'bg-gradient-to-r from-fuchsia-900/20 to-cyan-900/20 border border-white/10 hover:border-cyan-500/50'
          }`}
        >
          <div className="flex items-center justify-center gap-4 mb-2">
            <CalendarIcon size={28} className={theme === 'light' ? 'text-purple-600' : 'text-cyan-400'} />
            <h3 className={`text-2xl font-black uppercase ${
              theme === 'light' ? 'text-gray-900' : 'text-white'
            }`}>
              Calendário 2026
            </h3>
          </div>
          <p className={`text-sm font-medium ${
            theme === 'light' ? 'text-gray-600' : 'text-gray-400'
          }`}>
            Veja o que vem por aí na próxima temporada
          </p>
        </Link>
      </div>
    </PageContainer>
  );
};

export default CalendarPage;