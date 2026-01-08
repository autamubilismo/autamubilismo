'use client';
import React from 'react';
import Link from 'next/link';
import { X, ChevronRight, Sparkles } from 'lucide-react';
import { SITE_MAP } from '../../constants/navigation';

export const NavigationOverlay = ({ isOpen, onClose, theme }) => {
  if (!isOpen) return null;
  
  const isLight = theme === 'light';

  return (
    <div className={`fixed inset-0 z-50 flex flex-col overflow-y-auto animate-in slide-in-from-left duration-500 ${isLight ? 'bg-[#FFF0F5]/95 backdrop-blur-2xl' : 'bg-[#050510]/95 backdrop-blur-2xl'}`}>
      <div className="p-6 flex justify-end">
        <button 
          onClick={onClose} 
          className="p-3 rounded-full hover:bg-black/5 transition-colors group"
        >
          <X 
            size={28} 
            className={`${isLight ? 'text-pink-500 group-hover:text-purple-600' : 'text-cyan-400 group-hover:text-fuchsia-400'} transition-colors`} 
          />
        </button>
      </div>
      
      <div className="flex-1 max-w-6xl mx-auto w-full p-6 md:p-10 pb-32">
        <div className={`mb-10 px-2 border-b pb-4 flex items-center gap-4 ${isLight ? 'border-pink-200' : 'border-white/10'}`}>
          <h2 className={`text-4xl md:text-6xl font-black mb-2 tracking-tighter ${isLight ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600' : 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500'}`}>
            Menu
          </h2>
          <Sparkles className={`w-8 h-8 ${isLight ? 'text-pink-400' : 'text-cyan-400'} animate-pulse`} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SITE_MAP.map((item) => (
            <Link 
              key={item.id} 
              href={item.path} 
              onClick={onClose} 
              className={`group relative p-5 rounded-[2rem] flex items-center gap-5 text-left transition-all duration-300 hover:scale-[1.02] border ${isLight ? 'bg-white/70 border-pink-100 hover:border-pink-300 hover:shadow-lg hover:shadow-pink-100' : 'bg-[#121217]/60 border-white/5 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(0,255,242,0.2)]'}`}
            >
              <div className={`w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center transition-colors shadow-sm ${isLight ? 'bg-pink-50 text-pink-500 group-hover:bg-pink-100' : 'bg-white/5 text-cyan-400 group-hover:bg-cyan-500/20 group-hover:text-cyan-300'}`}>
                {item.icon && <item.icon size={26} />}
              </div>
              <div className="flex-1 min-w-0">
                <span className={`block text-xl font-black tracking-tight truncate ${isLight ? 'text-gray-800' : 'text-white'}`}>
                  {item.label}
                </span>
                <span className={`block text-xs font-bold uppercase tracking-wider mt-1 opacity-60 ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>
                  {item.desc}
                </span>
              </div>
              <ChevronRight className={`transition-all transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 ${isLight ? 'text-pink-400' : 'text-fuchsia-400'}`} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
