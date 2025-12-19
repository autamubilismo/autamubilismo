import React from 'react';
import { Newspaper, Loader2, ChevronRight } from 'lucide-react';
import { VAPORWAVE_COLORS } from '../../constants/theme';

export const NewsWidget = ({ theme, posts, onNewsClick }) => {
  const isLight = theme === 'light';
  const loading = !posts || posts.length === 0;
  const displayPosts = posts || [];
  const C = VAPORWAVE_COLORS;

  const getBadgeStyle = (type) => (
    type === 'article' 
      ? (isLight 
          ? { background: `linear-gradient(90deg, #ec4899, #a855f7)`, color: 'white' } 
          : { borderColor: C.neonPink, color: C.neonPink, border: '1px solid', boxShadow: `0 0 5px ${C.neonPink}` }) 
      : (isLight 
          ? { backgroundColor: '#e0f2fe', color: '#0284c7' } 
          : { borderColor: C.neonCyan, color: C.neonCyan, border: '1px solid', boxShadow: `0 0 5px ${C.neonCyan}` })
  );

  return (
    <div className="flex flex-col h-full min-h-0 relative p-6 md:p-8">
      <div className="flex items-center justify-between mb-6 px-1 shrink-0">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-xl ${isLight ? 'bg-pink-100 text-pink-500' : 'bg-white/10 text-cyan-400 border border-cyan-500/30'}`}>
            <Newspaper size={22} />
          </div>
          <span className={`text-sm font-black uppercase tracking-[0.2em] ${isLight ? 'text-gray-600' : 'text-white'}`}>
            Últimas do Paddock
          </span>
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-4 overflow-y-auto pr-3 custom-scrollbar pb-2">
        {loading && (
          <div className="flex-1 flex flex-col items-center justify-center opacity-60 gap-3">
            <Loader2 size={32} className={`animate-spin ${isLight ? 'text-pink-400' : 'text-cyan-400'}`} />
            <span className="text-sm font-bold tracking-wide">Buscando fofocas...</span>
          </div>
        )}
        
        {!loading && displayPosts.map((item, idx) => (
          <button 
            key={item._id || idx} 
            onClick={() => onNewsClick?.(item)} 
            className={`group relative flex items-stretch gap-4 p-4 rounded-3xl text-left border transition-all duration-300 cursor-pointer shrink-0 
              ${isLight 
                ? "bg-white border-pink-50 hover:border-pink-200 hover:shadow-xl hover:shadow-pink-100 hover:-translate-y-1" 
                : "bg-[#0a0a12]/60 hover:bg-[#121217] border-white/5 hover:border-fuchsia-500/50 hover:shadow-[0_0_15px_rgba(189,0,255,0.2)] hover:-translate-y-1"
              }`}
          >
            {item.image && (
              <div className="w-24 shrink-0 rounded-2xl overflow-hidden relative shadow-md self-center aspect-square">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
            )}

            <div className="flex-1 min-w-0 flex flex-col justify-center py-1">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span 
                  className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-lg shadow-sm whitespace-nowrap" 
                  style={getBadgeStyle(item.type)}
                >
                  {item.category?.title || item.category || 'Geral'}
                </span>
                <span className={`text-[10px] font-bold opacity-50 ${isLight ? "text-gray-500" : "text-gray-400"}`}>
                  {item.dateObj ? item.dateObj.toLocaleDateString('pt-BR', {day: '2-digit', month: 'short'}) : ''}
                </span>
              </div>

              <h4 className={`text-sm md:text-[15px] font-bold leading-snug line-clamp-3 ${isLight ? "text-gray-800" : "text-gray-200 group-hover:text-white"} transition-colors`}>
                {item.title}
              </h4>
            </div>

            <div className={`absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 ${isLight ? 'text-pink-400' : 'text-cyan-400'}`}>
              <ChevronRight size={20} />
            </div>
          </button>
        ))}
      </div>
      
      <div className={`absolute bottom-0 left-0 right-0 h-8 pointer-events-none bg-gradient-to-t ${isLight ? 'from-white/80' : 'from-[#090912]/80'} to-transparent`} />
    </div>
  );
};