import React from 'react';
import { Wrench } from 'lucide-react';
import { BackButton } from '../components/UI';
import { TEAMS_DATA } from '../data';

const TeamsPage = ({ theme }) => {
  const isLight = theme === 'light';
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <BackButton to="/" theme={theme} />
      <div className="mb-8"><h2 className={`text-4xl font-black mb-2 ${isLight ? 'text-gray-800' : 'text-white'}`}>Equipes 2026</h2><p className={`${isLight ? 'text-gray-600' : 'text-gray-400'}`}>A nova era da Fórmula 1.</p></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {TEAMS_DATA.map((team, idx) => (
          <div key={idx} className={`relative overflow-hidden p-6 rounded-2xl group transition-all hover:shadow-lg flex items-center gap-6 cursor-pointer ${isLight ? 'bg-white border border-transparent hover:border-[#D8C4F0]' : 'bg-[#121217] border border-[#333] hover:border-[#00fff2]'}`}>
            <div className="absolute left-0 top-0 bottom-0 w-3 z-10" style={{ backgroundColor: team.color }}></div>
            <div className={`w-16 h-16 shrink-0 rounded-xl p-2 flex items-center justify-center ${isLight ? 'bg-gray-50' : 'bg-white'}`}><img src={`https://logo.clearbit.com/${team.domain}`} alt={`${team.name} logo`} className="max-w-full max-h-full object-contain mix-blend-multiply" onError={(e) => { e.target.style.display = 'none'; }} /></div>
            <div className="flex-1"><h3 className={`text-xl font-bold leading-tight ${isLight ? 'text-gray-800' : 'text-white'}`}>{team.name}</h3><div className="flex items-center gap-2 mt-1"><span className={`text-xs font-bold uppercase px-2 py-1 rounded-full flex items-center gap-1 ${isLight ? 'bg-gray-100 text-gray-500' : 'bg-[#1a1a20] text-gray-400'}`}><Wrench size={10} /> {team.engine}</span></div></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamsPage;