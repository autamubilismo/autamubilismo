'use client';

import React from 'react';
import { Header } from './Header';
import { NavigationOverlay } from './NavigationOverlay';
import { SearchOverlay } from './SearchOverlay';

export const MainLayout = ({ children, theme, toggleTheme, menuOpen, setMenuOpen, searchOpen, setSearchOpen }) => {
  return (
    <div className={`min-h-screen flex flex-col ${theme === 'light' ? 'text-gray-800' : 'text-gray-200'}`}>
      <NavigationOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} theme={theme} />
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} theme={theme} />
      
      <Header 
        theme={theme} 
        toggleTheme={toggleTheme} 
        onMenuClick={() => setMenuOpen(true)} 
        onSearchClick={() => setSearchOpen(true)} 
      />

      <div className={`flex-1 relative z-10 flex flex-col ${theme === 'light' ? 'bg-[#FFF0F5]' : 'bg-[#141416]'}`}>
        <div className="max-w-7xl mx-auto p-4 md:p-8 relative z-10 w-full flex-1">
          <main className="min-h-[60vh]">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};
