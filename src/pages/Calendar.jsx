import React, { useState } from 'react';
import { Circle, ChevronDown, ChevronUp } from 'lucide-react';
import { BackButton } from '../components/UI';
import { RACES_2025 } from '../data';

const CalendarPage = ({ theme }) => {
  const isLight = theme === 'light';
  const [expandedRaceId, setExpandedRaceId] = useState(null);

  const toggleRace = (id) => {
      setExpandedRaceId(expandedRaceId === id ? null : id);
  };

  return (
    <div className="animate-in fade-in pb-12">
      <BackButton to="/season" theme={theme} />
      <h2 className={`text-4xl font-black ${isLight?'text-gray-800':'text-white'}`}>Calendário 2025</h2>
      <div className="space-y-4 mt-6">
        {RACES_2025.map((race, idx) => {
           const isNext = race.status === 'next';
           const isCompleted = race.status === 'completed';
           const isExpanded = expandedRaceId === idx;

           return (
             <div 
               key={idx} 
               onClick={() => toggleRace(idx)}
               className={`p-4 rounded-xl transition-all cursor-pointer
                 ${isLight?'bg-white shadow-sm hover:shadow-md':'bg-[#1a1a20] border border-[#333] hover:border-[#00fff2]'}
                 ${isNext ? (isLight ? 'ring-2 ring-[#00D2BE]' : 'border-[#00fff2] shadow-[0_0_10px_rgba(0,255,242,0.2)]') : ''}
               `}
             >
               <div className="flex justify-between items-center">
                 <div className="flex items-center gap-4">
                    <div className={`w-10 text-center ${isLight?'text-gray-400':'text-gray-600'}`}>
                      <span className="text-xs font-bold uppercase block">{race.date.split(' ')[1]}</span>
                      <span className="text-lg font-black block">{race.date.split(' ')[0]}</span>
                    </div>
                    <div>
                      <span className={`font-bold text-lg block ${isLight?'text-gray-800':'text-white'}`}>{race.name}</span>
                      <span className="text-xs text-gray-500">{race.circuit}</span>
                    </div>
                 </div>
                 
                 <div>
                   {isNext ? (
                     <span className="text-xs bg-teal-500 text-white px-3 py-1 rounded-full font-bold animate-pulse">Próxima</span>
                   ) : (isCompleted ? (
                     <div className="flex items-center gap-2">
                       <span className={`text-xs font-bold hidden md:inline ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>{race.winner}</span>
                       {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                     </div>
                   ) : (
                     <Circle size={16} className="text-gray-700/30" />
                   ))}
                 </div>
               </div>

               {isExpanded && race.podium && (
                 <div className={`mt-4 pt-4 border-t ${isLight ? 'border-gray-100' : 'border-gray-800'} animate-in slide-in-from-top-2`}>
                    <div className="grid grid-cols-3 gap-2 text-center">
                       <div className="flex flex-col items-center">
                          <div className="text-2xl">🥈</div>
                          <span className={`text-xs font-bold ${isLight ? 'text-gray-600' : 'text-gray-300'}`}>{race.podium[1].replace(' 🥈', '')}</span>
                       </div>
                       <div className="flex flex-col items-center -mt-2">
                          <div className="text-4xl">🥇</div>
                          <span className={`text-sm font-black ${isLight ? 'text-gray-800' : 'text-white'}`}>{race.podium[0].replace(' 🥇', '')}</span>
                       </div>
                       <div className="flex flex-col items-center">
                          <div className="text-2xl">🥉</div>
                          <span className={`text-xs font-bold ${isLight ? 'text-gray-600' : 'text-gray-300'}`}>{race.podium[2].replace(' 🥉', '')}</span>
                       </div>
                    </div>
                 </div>
               )}
             </div>
           );
        })}
      </div>
    </div>
  );
};

export default CalendarPage;