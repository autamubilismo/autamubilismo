import React, { useState } from 'react';
import { BackButton } from '../components/UI';
import { STANDINGS_DRIVERS, STANDINGS_TEAMS } from '../data';

const StandingsPage = ({ theme }) => {
  const isLight = theme === 'light';
  const [tab, setTab] = useState('drivers');
  const list = tab === 'drivers' ? STANDINGS_DRIVERS : STANDINGS_TEAMS;
  return (
    <div className="animate-in fade-in pb-12">
      <BackButton to="/season" theme={theme} />
      <div className="flex justify-between items-center mb-6">
        <h2 className={`text-4xl font-black ${isLight?'text-gray-800':'text-white'}`}>Classificação</h2>
        <div className={`flex p-1 rounded-full ${isLight?'bg-gray-200':'bg-[#1a1a20]'}`}><button onClick={()=>setTab('drivers')} className={`px-4 py-1 rounded-full text-xs font-bold ${tab==='drivers'?(isLight?'bg-white shadow':'bg-[#00fff2] text-black'):'text-gray-500'}`}>Pilotos</button><button onClick={()=>setTab('teams')} className={`px-4 py-1 rounded-full text-xs font-bold ${tab==='teams'?(isLight?'bg-white shadow':'bg-[#00fff2] text-black'):'text-gray-500'}`}>Equipes</button></div>
      </div>
      <div className="space-y-2">{list.map((item, idx) => (
         <div key={idx} className={`p-4 rounded-xl flex items-center gap-4 ${isLight?'bg-white shadow-sm':'bg-[#1a1a20] border border-[#333]'}`}>
            <span className={`font-black text-lg w-8 text-center ${idx<3?(isLight?'text-[#F7B8C8]':'text-[#ff0055]'):'text-gray-400'}`}>{item.pos}</span>
            {item.color && <div className="w-1 h-8 rounded-full" style={{ backgroundColor: item.color }}></div>}
            <div className="flex-1"><span className={`font-bold block ${isLight?'text-gray-800':'text-white'}`}>{item.name}</span></div>
            <span className={`font-mono font-bold ${isLight?'text-gray-800':'text-white'}`}>{item.points} PTS</span>
         </div>
      ))}</div>
    </div>
  );
};

export default StandingsPage;