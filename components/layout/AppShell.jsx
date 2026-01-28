'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, Moon, Search, Sun, X } from 'lucide-react';
import { ThemeProvider } from './ThemeContext';
import { NavigationOverlay } from './NavigationOverlay';
import { SearchOverlay } from './SearchOverlay';
import { LogoHelmet } from '../ui/LogoHelmet';
import { SOCIAL_LINKS } from '../../data/ui-config';

const STORAGE_KEY = 'autamobilismo-theme';

export const AppShell = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') {
      setTheme(stored);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const getSocialIcon = (social) => {
    const name = social.name?.toLowerCase?.() || '';
    if (social.id === 'twitter' || name.includes('twitter') || name.includes('x')) {
      return <X size={20} strokeWidth={2.5} />;
    }
    const Icon = social.icon;
    return <Icon size={20} />;
  };

  return (
    <ThemeProvider value={{ theme, toggleTheme }}>
      <NavigationOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} theme={theme} />
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} theme={theme} />

      <header
        className={`sticky top-0 z-40 w-full backdrop-blur-xl border-b transition-all duration-300 ${
          theme === 'light' ? 'border-cottage-rosy/50 bg-white/70' : 'border-white/5 bg-[#050510]/80'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 py-2.5 md:px-8 flex items-center justify-between">
          <button
            onClick={() => setIsMenuOpen(true)}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 ${
              theme === 'light'
                ? 'bg-white/80 text-gray-800 shadow-md hover:text-cottage-rosy hover:shadow-cottage-rosy'
                : 'bg-[#1a1a20]/80 text-white border border-[#333] hover:text-[#00fff2] hover:border-[#00fff2] hover:shadow-[0_0_15px_rgba(0,255,242,0.3)]'
            }`}
          >
            <Menu size={16} />
            <span className="hidden sm:inline font-black text-[10px] tracking-widest uppercase">Menu</span>
          </button>

          <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 transform hover:scale-105 transition-transform duration-500 cursor-pointer">
            <Link href="/">
              <LogoHelmet theme={theme} size="medium" />
            </Link>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setIsSearchOpen(true)}
              className={`hidden md:flex items-center gap-1.5 px-3 py-2 rounded-full text-[10px] font-black uppercase tracking-wider transition-all hover:scale-105 ${
                theme === 'light'
                  ? 'bg-white hover:bg-gray-50 text-gray-400 shadow-md ring-1 ring-cottage-rosy'
                  : 'bg-white/5 hover:bg-white/10 text-gray-400 border border-white/5'
              }`}
            >
              <Search size={14} />
              <span className="hidden lg:inline">Buscar</span>
            </button>

            <button
              onClick={() => setIsSearchOpen(true)}
              className={`md:hidden p-2 rounded-full transition-all ${
                theme === 'light' ? 'bg-white/80 text-gray-400 shadow-md' : 'bg-white/5 text-gray-400 border border-white/5'
              }`}
            >
              <Search size={16} />
            </button>

            <button
              onClick={toggleTheme}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-full transition-all active:scale-95 ${
                theme === 'light'
                  ? 'bg-yellow-100 text-yellow-600 hover:bg-yellow-200 shadow-md ring-2 ring-yellow-200'
                  : 'bg-[#bd00ff]/20 text-[#bd00ff] border border-[#bd00ff]/30 hover:bg-[#bd00ff]/30 hover:shadow-[0_0_15px_rgba(189,0,255,0.3)]'
              }`}
            >
              {theme === 'light' ? <Sun size={14} className="fill-current" /> : <Moon size={14} className="fill-current" />}
              <span className="hidden lg:inline font-black text-[10px] tracking-widest uppercase">
                {theme === 'light' ? 'Light' : 'Dark'}
              </span>
            </button>
          </div>
        </div>
      </header>

      {children}

      <footer
        className={`py-16 md:py-24 text-center border-t relative z-20 ${
          theme === 'light'
            ? 'border-cottage-rosy bg-white/60 backdrop-blur-lg'
            : 'border-white/5 bg-black/60 backdrop-blur-lg'
        }`}
      >
        <div className="flex flex-col items-center justify-center gap-6 mb-8 opacity-90">
          <Link href="/">
            <LogoHelmet theme={theme} size="normal" />
          </Link>
          <div className="flex gap-6 mt-4">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.id}
                href={social.url}
                className={`p-3 rounded-full transition-all hover:-translate-y-1 ${
                  theme === 'light'
                    ? 'bg-white text-gray-400 hover:text-cottage-rosy shadow-md hover:shadow-cottage-rosy'
                    : 'bg-[#1a1a20] text-gray-500 hover:text-[#00fff2] hover:shadow-[0_0_15px_rgba(0,255,242,0.3)]'
                }`}
              >
                {getSocialIcon(social)}
              </a>
            ))}
          </div>
        </div>
        <p className={`text-sm font-bold tracking-wide ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>
          Feito com <span className="text-red-400 animate-pulse">♥</span> e muita velocidade.
        </p>
        <p
          className={`text-xs mt-3 opacity-50 uppercase tracking-widest ${
            theme === 'light' ? 'text-gray-400' : 'text-gray-600'
          }`}
        >
          2026 Autamubilismo. Nao afiliado a Formula 1.
        </p>
      </footer>
    </ThemeProvider>
  );
};
