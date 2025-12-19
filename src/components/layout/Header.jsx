import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Sun, Moon, Search } from 'lucide-react';
import { LogoHelmet } from '../ui/LogoHelmet';

export const Header = ({ theme, toggleTheme, onMenuClick, onSearchClick }) => {
  const isLight = theme === 'light';
  const headerBg = isLight ? 'bg-[#FFF0F5]/90 backdrop-blur-md' : 'bg-[#141416]/90 backdrop-blur-md';
  
  return (
    <div className={`w-full ${headerBg} sticky top-0 z-40 transition-all duration-300 border-b ${isLight ? 'border-pink-200/50' : 'border-white/5'}`}>
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-3">
        <header className="flex justify-between items-center">
          <div className="flex-1 flex justify-start">
            <button 
              onClick={onMenuClick} 
              className={`group flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 ${isLight ? 'bg-white text-gray-800 shadow-sm border border-gray-100' : 'bg-[#1a1a20] text-[#00fff2] border border-[#333]'}`}
            >
              <Menu size={20} />
              <span className="font-black tracking-widest text-xs uppercase">Menu</span>
            </button>
          </div>
          
          <div className="flex-0 cursor-pointer z-20 transform hover:scale-105 transition-transform duration-500">
            <Link to="/">
              <LogoHelmet theme={theme} size="normal" />
            </Link>
          </div>
          
          <div className="flex-1 flex justify-end gap-2">
            <button 
              onClick={onSearchClick} 
              className={`hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all hover:scale-105 ${isLight ? 'bg-white text-gray-400 hover:text-gray-600 shadow-sm' : 'bg-[#1a1a20] text-gray-400 border border-[#333] hover:text-[#00fff2]'}`}
            >
              <Search size={18} />
              <span>Buscar</span>
            </button>
            <button 
              onClick={onSearchClick} 
              className={`md:hidden p-2.5 rounded-full flex items-center justify-center transition-colors ${isLight ? 'bg-white text-gray-400 hover:text-gray-600 shadow-sm' : 'bg-[#1a1a20] text-gray-500 border border-[#333] hover:text-[#00fff2]'}`}
            >
              <Search size={20} />
            </button>
            <button 
              onClick={toggleTheme} 
              className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 ${isLight ? 'bg-white text-yellow-500 shadow-sm' : 'bg-[#1a1a20] text-[#00fff2] border border-[#333]'}`}
            >
              {isLight ? <Sun size={18} /> : <Moon size={18} />}
              <span className="hidden sm:inline font-black text-xs tracking-widest uppercase">
                {isLight ? 'Light' : 'Dark'}
              </span>
            </button>
          </div>
        </header>
      </div>
    </div>
  );
};