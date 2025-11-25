import React, { useState } from 'react';
import { Grid, Image } from 'lucide-react';
import { BackButton, KpopPhotocard } from '../components/UI';
import { DRIVERS_DATA } from '../data';

const FanzonePage = ({ theme }) => {
  const isLight = theme === 'light';
  const [activeTab, setActiveTab] = useState('feed');
  const [activeFilter, setActiveFilter] = useState('All');
  const feedItems = [{ type: 'art', author: '@mari_art', src: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=600', squad: 'Mercedes' }, { type: 'post', author: 'Ana_Leclerc', text: 'Alguém indo pro GP de Interlagos?', squad: 'Ferrari' }];
  const squads = [{ id: 'All', label: 'Paddock', color: '#888' }, { id: 'Mercedes', label: 'Team LH/GR', color: '#00D2BE' }];
  const filteredItems = activeFilter === 'All' ? feedItems : feedItems.filter(item => item.squad === activeFilter);
  
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-12">
      <BackButton to="/" theme={theme} />
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <h2 className={`text-4xl font-black ${isLight?'text-gray-800':'text-white'}`}>Fanzone</h2>
        <div className={`flex p-1 rounded-full ${isLight ? 'bg-gray-200' : 'bg-[#1a1a20] border border-[#333]'}`}>
           <button onClick={() => setActiveTab('feed')} className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${activeTab === 'feed' ? (isLight ? 'bg-white text-black shadow-sm' : 'bg-[#00fff2] text-black') : 'text-gray-500'}`}><Grid size={16} className="inline mr-2"/> Feed</button>
           <button onClick={() => setActiveTab('cards')} className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${activeTab === 'cards' ? (isLight ? 'bg-white text-black shadow-sm' : 'bg-[#fe88dd] text-white') : 'text-gray-500'}`}><Image size={16} className="inline mr-2"/> Coleção</button>
        </div>
      </div>

      {activeTab === 'feed' ? (
        <>
          <div className="flex gap-3 overflow-x-auto pb-4 mb-6 no-scrollbar">{squads.map((s) => (<button key={s.id} onClick={() => setActiveFilter(s.id)} className={`px-5 py-2 rounded-full text-sm font-bold border-2 ${activeFilter === s.id ? (isLight?'bg-gray-900 text-white':'bg-[#fe88dd] text-white') : 'border-gray-200 text-gray-500'}`}>{s.label}</button>))}</div>
          <div className="columns-1 md:columns-2 gap-4 space-y-4">{filteredItems.map((item, idx) => (<div key={idx} className={`break-inside-avoid rounded-2xl overflow-hidden ${isLight?'bg-white shadow-md':'bg-[#1a1a20] border border-[#333]'}`}>{item.type === 'art' ? <img src={item.src} className="w-full" /> : <div className="p-5"><p>{item.text}</p></div>}</div>))}</div>
        </>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
           {DRIVERS_DATA.map((driver) => (
             <KpopPhotocard key={driver.id} driver={driver} theme={theme} onClick={()=>{}} />
           ))}
        </div>
      )}
    </div>
  );
};

export default FanzonePage;