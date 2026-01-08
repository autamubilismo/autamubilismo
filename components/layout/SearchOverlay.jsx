'use client';
import React from 'react';
import { Search, X } from 'lucide-react';

export const SearchOverlay = ({ isOpen, onClose, theme }) => {
  if (!isOpen) return null;
  
  const isLight = theme === 'light';
  
  return (
    <div className={`fixed inset-0 z-50 flex flex-col animate-in fade-in slide-in-from-top-8 duration-300 backdrop-blur-3xl ${isLight ? 'bg-pink-50/90' : 'bg-[#050510]/90'}`}>
      <div className="p-8 flex items-center gap-6 max-w-5xl mx-auto w-full mt-20">
        <Search 
          size={32} 
          className={isLight ? 'text-pink-500' : 'text-cyan-400 drop-shadow-[0_0_5px_cyan]'} 
        />
        <input 
          type="text" 
          autoFocus 
          placeholder="Busque por pilotos, equipes..." 
          className={`flex-1 bg-transparent text-4xl md:text-5xl font-black outline-none placeholder:opacity-30 ${isLight ? 'text-gray-900 placeholder-pink-400' : 'text-white placeholder-cyan-700'}`} 
        />
        <button 
          onClick={onClose} 
          className={`p-4 rounded-full transition-colors ${isLight ? 'hover:bg-pink-100 text-gray-400 hover:text-pink-500' : 'hover:bg-white/10 text-gray-500 hover:text-white'}`}
        >
          <X size={32} />
        </button>
      </div>
    </div>
  );
};