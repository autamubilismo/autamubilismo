import React, { useState } from 'react';
import { Calendar, Trophy as TrophyIcon, MapPin, Scale, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BackButton } from '../components/UI';

const SeasonPage = ({ theme }) => {
  const isLight = theme === 'light';
  const [year, setYear] = useState('2025');

  return (
    <div className="animate-in fade-in pb-12">
      <BackButton to="/" theme={theme} />
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <h2 className={`text-4xl font-black ${isLight?'text-gray-800':'text-white'}`}>Temporada {year}</h2>
        <div className={`flex p-1 rounded-full ${isLight ? 'bg-gray-200' : 'bg-[#1a1a20] border border-[#333]'}`}>
           <button onClick={() => setYear('2025')} className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${year === '2025' ? (isLight ? 'bg-white text-black shadow-sm' : 'bg-[#00fff2] text-black shadow-[0_0_10px_#00fff2]') : (isLight ? 'text-gray-500 hover:text-black' : 'text-gray-500 hover:text-white')}`}>2025</button>
           <button onClick={() => setYear('2026')} className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${year === '2026' ? (isLight ? 'bg-white text-black shadow-sm' : 'bg-[#bd00ff] text-white shadow-[0_0_10px_#bd00ff]') : (isLight ? 'text-gray-500 hover:text-black' : 'text-gray-500 hover:text-white')}`}>2026</button>
        </div>
      </div>
      
      {year === '2025' ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
           <Link to="/calendar" className={`p-6 rounded-3xl h-48 cursor-pointer flex flex-col justify-between ${isLight?'bg-[#CFF7E8] text-teal-900':'bg-[#121217] border border-[#333] hover:border-[#00fff2]'}`}>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${isLight?'bg-white/50':'bg-[#00fff2]/20'}`}><Calendar size={24} className={isLight?'text-teal-800':'text-[#00fff2]'}/></div>
              <div><h3 className={`text-xl font-bold ${isLight?'text-teal-900':'text-white'}`}>Calendário</h3><p className={`text-sm ${isLight?'text-teal-700':'text-gray-400'}`}>Datas e resultados.</p></div>
           </Link>
           <Link to="/standings" className={`p-6 rounded-3xl h-48 cursor-pointer flex flex-col justify-between ${isLight?'bg-[#FBCAD2] text-pink-900':'bg-[#121217] border border-[#333] hover:border-[#ff0055]'}`}>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${isLight?'bg-white/50':'bg-[#ff0055]/20'}`}><TrophyIcon size={24} className={isLight?'text-pink-800':'text-[#ff0055]'}/></div>
              <div><h3 className={`text-xl font-bold ${isLight?'text-pink-900':'text-white'}`}>Resultados</h3><p className={`text-sm ${isLight?'text-pink-700':'text-gray-400'}`}>Classificação final.</p></div>
           </Link>
           <Link to="/circuits" className={`p-6 rounded-3xl h-48 cursor-pointer flex flex-col justify-between ${isLight?'bg-[#D8C4F0] text-purple-900':'bg-[#121217] border border-[#333] hover:border-[#bd00ff]'}`}>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${isLight?'bg-white/50':'bg-[#bd00ff]/20'}`}><MapPin size={24} className={isLight?'text-purple-800':'text-[#bd00ff]'}/></div>
              <div><h3 className={`text-xl font-bold ${isLight?'text-purple-900':'text-white'}`}>Circuitos</h3><p className={`text-sm ${isLight?'text-purple-700':'text-gray-400'}`}>Guias de traçado.</p></div>
           </Link>
        </div>
      ) : (
        <Link to="/regulation" className={`p-8 rounded-3xl flex items-center justify-between cursor-pointer group transition-all hover:scale-[1.01] ${isLight ? 'bg-gradient-to-r from-[#D8C4F0] to-[#CFF7E8] text-gray-800' : 'bg-gradient-to-r from-[#bd00ff]/20 to-[#00fff2]/20 border border-[#bd00ff]'}`}>
          <div className="flex items-center gap-6">
             <div className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg ${isLight ? 'bg-white text-purple-600' : 'bg-black border border-[#bd00ff] text-[#bd00ff]'}`}><Scale size={32} /></div>
             <div><h3 className={`text-2xl md:text-3xl font-black mb-1 ${isLight ? 'text-gray-800' : 'text-white'}`}>Novo Regulamento</h3><p className={`font-medium ${isLight ? 'text-gray-700' : 'text-gray-300'}`}>Entenda as mudanças radicais dos carros e motores.</p></div>
          </div>
          <div className={`p-3 rounded-full ${isLight ? 'bg-white/30' : 'bg-black/30 border border-[#00fff2]'}`}><ArrowRight size={24} className={isLight ? 'text-gray-800' : 'text-[#00fff2]'} /></div>
       </Link>
      )}
    </div>
  );
};

export default SeasonPage;