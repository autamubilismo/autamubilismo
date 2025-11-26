import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Users, ArrowRight, Zap } from 'lucide-react';
import { BackButton } from '../components/UI';
import { TEAMS_DATA } from '../data';

const TeamsPage = ({ theme }) => {
  const isLight = theme === 'light';

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-12">
      <BackButton to="/" theme={theme} />
      
      <div className="mb-10 px-2 text-center md:text-left">
        <h2 className={`text-4xl md:text-6xl font-black uppercase tracking-tighter mb-2 ${isLight ? 'text-gray-800' : 'text-white'}`}>
          Construtores
        </h2>
        <p className={`${isLight ? 'text-gray-500' : 'text-gray-400'}`}>As garagens que movem o campeonato.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {TEAMS_DATA.map((team, idx) => (
          <Link 
            key={idx} 
            to={`/teams/${team.id || team.name.toLowerCase().replace(/\s+/g, '-')}`} 
            className={`group relative overflow-hidden rounded-[2.5rem] p-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex
              ${isLight 
                ? 'bg-white shadow-lg border-2 border-transparent hover:border-gray-100' 
                : 'bg-[#1a1a20] border border-[#333] hover:border-[#fe88dd]/30 shadow-[0_0_20px_rgba(0,0,0,0.3)]'
              }`}
          >
            <div 
                className="w-3 h-auto flex-shrink-0 transition-all duration-500 group-hover:w-6" 
                style={{ backgroundColor: team.color }}
            />

            <div className="flex-1 p-6 pl-5 flex flex-col h-full">
                
                <div className="flex items-start justify-between mb-6">
                    <div>
                        <h3 className={`text-2xl md:text-3xl font-black uppercase leading-none mb-1 ${isLight ? 'text-gray-800' : 'text-white'}`}>
                            {team.name}
                        </h3>
                        <p className={`text-[10px] font-bold uppercase tracking-widest opacity-60 ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>
                            {team.fullName || 'Formula 1 Team'}
                        </p>
                    </div>
                    
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm p-2 ${isLight ? 'bg-gray-50' : 'bg-black/40'}`}>
                         <img 
                            src={`https://logo.clearbit.com/${team.domain}`} 
                            alt={team.name} 
                            className="max-w-full max-h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
                            onError={(e) => {
                                e.target.style.display='none';
                                e.target.parentNode.innerHTML = '<span class="text-xl">🏁</span>';
                            }} 
                         />
                    </div>
                </div>

                <div className="mt-auto">
                    <div className="flex items-center gap-2 mb-3 opacity-70">
                        <Users size={14} className={isLight ? 'text-gray-500' : 'text-[#fe88dd]'} />
                        <span className={`text-[10px] font-bold uppercase tracking-widest ${isLight ? 'text-gray-500' : 'text-gray-300'}`}>Line-up</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                        {team.drivers && team.drivers.map((driver, i) => (
                            <span key={i} className={`px-4 py-2 rounded-xl text-sm font-bold border transition-colors ${isLight ? 'bg-gray-50 border-gray-100 text-gray-700 group-hover:bg-[#F7B8C8]/10 group-hover:border-[#F7B8C8] group-hover:text-[#F7B8C8]' : 'bg-[#2a2a35] border-[#333] text-gray-200 group-hover:border-[#fe88dd]/50 group-hover:text-[#fe88dd]'}`}>
                                {driver}
                            </span>
                        ))}
                    </div>

                    <div className={`pt-4 border-t flex items-center justify-between ${isLight ? 'border-gray-100' : 'border-white/5'}`}>
                        <div className="flex items-center gap-2">
                            <Zap size={14} className={isLight ? 'text-yellow-500' : 'text-yellow-400'} />
                            <span className={`text-xs font-medium ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>
                                Power: <strong className={isLight ? 'text-gray-900' : 'text-white'}>{team.engine}</strong>
                            </span>
                        </div>
                        
                        <div className={`p-2 rounded-full transition-transform duration-300 group-hover:translate-x-2 ${isLight ? 'text-gray-300 group-hover:text-[#F7B8C8]' : 'text-gray-600 group-hover:text-[#fe88dd]'}`}>
                            <ArrowRight size={20} />
                        </div>
                    </div>
                </div>
            </div>
            
            {!isLight && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shine pointer-events-none" />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TeamsPage;