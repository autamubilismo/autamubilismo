import React from 'react';
import { Sparkles, MessageSquare, Zap } from 'lucide-react';

export const FanzoneWidget = ({ theme }) => {
  const isLight = theme === 'light';
  
  return (
    <div className="h-full flex flex-col items-center justify-center p-6 text-center relative z-10 group">
      <div className={`p-5 rounded-full mb-4 transition-transform duration-500 group-hover:scale-110 shadow-lg ${isLight ? 'bg-pink-50 text-pink-400 ring-4 ring-pink-100' : 'bg-black/40 text-fuchsia-400 ring-2 ring-fuchsia-500/50 shadow-[0_0_15px_rgba(232,121,249,0.4)]'}`}>
        <Sparkles size={32} />
      </div>
      <h3 className={`font-black text-xl mb-1 ${isLight ? 'text-gray-800' : 'text-white'}`}>Fanzone</h3>
      <p className={`text-xs uppercase font-bold tracking-widest opacity-50 ${isLight ? 'text-gray-500' : 'text-cyan-200'}`}>
        Vote no Driver of The Day
      </p>
    </div>
  );
};

export const ContactWidget = ({ theme }) => {
  const isLight = theme === 'light';
  
  return (
    <div className="h-full flex flex-col items-center justify-center text-center p-4 relative z-10 group">
      <div className={`p-4 rounded-full mb-3 transition-transform duration-300 group-hover:rotate-12 ${isLight ? 'bg-pink-50 text-pink-400' : 'bg-black/40 text-cyan-400 border border-cyan-500/20'}`}>
        <MessageSquare size={28} />
      </div>
      <h3 className={`font-black text-lg ${isLight ? 'text-gray-800' : 'text-white'}`}>Contato</h3>
      <p className={`text-[10px] font-bold uppercase tracking-widest opacity-60 ${isLight ? 'text-gray-500' : 'text-cyan-200'}`}>
        Mande um alô
      </p>
    </div>
  );
};

export const CuriosityWidget = ({ theme }) => {
  const isLight = theme === 'light';
  
  return (
    <div className="h-full flex flex-col items-center justify-center text-center p-2 relative z-10">
      <div className={`p-3 rounded-full mb-2 ${isLight ? 'bg-yellow-100 text-yellow-500' : 'bg-yellow-500/10 text-yellow-400'}`}>
        <Zap size={24} />
      </div>
      <h4 className={`font-bold text-sm leading-tight ${isLight ? 'text-gray-800' : 'text-white'}`}>
        Você Sabia?
      </h4>
      <span className={`text-[9px] opacity-60 mt-1 block px-2 ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>
        Clique para uma curiosidade aleatória da F1.
      </span>
    </div>
  );
};