import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BackButton } from '../components/UI';
import { DRIVERS_DATA } from '../data';
import { Users } from 'lucide-react';

const DriverDetail = ({ theme }) => {
  const { id } = useParams();
  const driver = DRIVERS_DATA.find(d => d.id === id);
  const isLight = theme === 'light';
  const [imgError, setImgError] = useState(false);

  if (!driver) return <div className="p-10 text-center">Piloto não encontrado! <Link to="/drivers">Voltar</Link></div>;

  return (
    <div className="animate-in fade-in zoom-in duration-500 pb-12">
      <BackButton to="/drivers" theme={theme} />
      <div className={`relative rounded-3xl overflow-hidden mb-6 ${isLight ? 'bg-white shadow-lg' : 'bg-[#121217] border border-[#333]'}`}>
        <div className="h-96 relative">
           {driver.image && !imgError ? (
             <img 
               src={driver.image} 
               alt={driver.name} 
               onError={() => setImgError(true)}
               className="w-full h-full object-cover" 
             />
           ) : (
             <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: driver.color }}>
               <h1 className="text-9xl text-white/20 font-black">{driver.number}</h1>
             </div>
           )}
           <div className="absolute bottom-0 left-0 p-10 w-full bg-gradient-to-t from-black/80 to-transparent">
             <h1 className="text-6xl font-black text-white">{driver.name}</h1>
             <p className="text-2xl text-white/80">{driver.team} • {driver.number}</p>
           </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <div className={`p-8 rounded-3xl ${isLight ? 'bg-white shadow-md' : 'bg-[#1a1a20] border border-[#bd00ff]/30'}`}><h3 className={`text-xl font-bold mb-4 ${isLight ? 'text-gray-800' : 'text-white'}`}>O Perfil</h3><p className={`text-lg leading-relaxed ${isLight ? 'text-gray-600' : 'text-gray-300'}`}>{driver.bio || "Informações sobre este piloto serão adicionadas em breve."}</p></div>
          {driver.vibes && (<div className="grid grid-cols-3 gap-4">{driver.vibes.map((vibe, i) => (<div key={i} className={`p-4 rounded-2xl flex flex-col items-center justify-center gap-2 text-center ${isLight ? 'bg-[#F7B8C8]/20 text-gray-700' : 'bg-[#1a1a20] border border-[#333] text-gray-300'}`}><div className={isLight ? 'text-[#D8C4F0]' : 'text-[#00fff2]'}>{vibe.icon}</div><span className="text-xs font-bold uppercase">{vibe.label}</span></div>))}</div>)}
        </div>
        <div className="space-y-6">
           <div className={`p-6 rounded-3xl h-full ${isLight ? 'bg-[#CFF7E8]' : 'bg-[#0a0a12] border border-[#00fff2]/30'}`}>
             <h3 className={`text-lg font-bold mb-6 border-b pb-2 ${isLight ? 'text-teal-800 border-teal-800/20' : 'text-[#00fff2] border-[#00fff2]/20'}`}>Dados Rápidos</h3>
             <div className="space-y-6">
               <div><span className={`text-xs font-bold uppercase block mb-1 opacity-60 ${isLight ? 'text-teal-900' : 'text-white'}`}>País</span><span className={`text-xl font-medium ${isLight ? 'text-teal-900' : 'text-white'}`}>{driver.country || 'Desconhecido'}</span></div>
               <div><span className={`text-xs font-bold uppercase block mb-1 opacity-60 ${isLight ? 'text-teal-900' : 'text-white'}`}>Idade</span><span className={`text-xl font-medium ${isLight ? 'text-teal-900' : 'text-white'}`}>{driver.age || 'N/A'}</span></div>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default DriverDetail;