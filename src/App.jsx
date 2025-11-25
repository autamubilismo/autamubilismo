import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Menu, Sun, Moon, Search } from 'lucide-react';
import { LogoHelmet, NavigationOverlay, SearchOverlay, ScrollToTop } from './components/UI';

// Importar Páginas
import Home from './pages/Home.jsx';
import DriversPage from './pages/Drivers.jsx';
import DriverDetail from './pages/DriverDetail.jsx';
import FanzonePage from './pages/Fanzone.jsx';
import TeamsPage from './pages/Teams.jsx';
import SeasonPage from './pages/Season.jsx';
import CalendarPage from './pages/Calendar.jsx';
import StandingsPage from './pages/Standings.jsx';
import ArticlesPage from './pages/Articles.jsx';
import ArticleDetail from './pages/ArticleDetail.jsx';
import ContactPage from './pages/Contact.jsx';
import GlossaryPage from './pages/Glossary.jsx';
import GenericPage from './pages/GenericPage.jsx';



export default function App() {
  const [theme, setTheme] = useState('light');
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className={`min-h-screen transition-colors duration-700 font-sans selection:bg-pink-200 ${theme === 'light' ? 'bg-[#FFF5F8]' : 'bg-[#050505] text-gray-200'}`}>
        <NavigationOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} theme={theme} />
        <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} theme={theme} />
        
        <div className="max-w-7xl mx-auto p-4 md:p-8 relative z-10">
          <header className="flex justify-between items-center mb-12 pt-4 relative min-h-[100px]">
            <div className="flex-1 flex justify-start">
              <button onClick={() => setMenuOpen(true)} className={`group flex items-center gap-3 px-5 py-3 rounded-full transition-all ${theme === 'light' ? 'bg-white text-gray-800 shadow-md' : 'bg-[#1a1a20] text-[#00fff2] border border-[#333]'}`}>
                <Menu size={24} /> <span className="font-black tracking-widest text-sm">MENU</span>
              </button>
            </div>
            <div className="flex-0 cursor-pointer z-20 hover:scale-105 transition-transform">
              <Link to="/"><LogoHelmet theme={theme} size="large" /></Link>
            </div>
            <div className="flex-1 flex justify-end gap-3">
              <button onClick={() => setSearchOpen(true)} className={`p-3 rounded-full flex items-center justify-center transition-colors ${theme === 'light' ? 'bg-white shadow-sm text-gray-400 hover:text-gray-600' : 'bg-[#1a1a20] text-gray-500 border border-[#333] hover:text-[#00fff2]'}`}><Search size={24} /></button>
              <button onClick={toggleTheme} className={`p-3 rounded-full transition-all ${theme === 'light' ? 'bg-white shadow-lg text-yellow-500' : 'bg-[#1a1a20] text-[#00fff2] border border-[#333]'}`}>
                {theme === 'light' ? <Sun size={24} /> : <Moon size={24} />}
              </button>
            </div>
          </header>

          <main className="min-h-[60vh]">
            <Routes>
              <Route path="/" element={<Home theme={theme} />} />
              <Route path="/drivers" element={<DriversPage theme={theme} />} />
              <Route path="/drivers/:id" element={<DriverDetail theme={theme} />} />
              <Route path="/fanzone" element={<FanzonePage theme={theme} />} />
              <Route path="/teams" element={<TeamsPage theme={theme} />} />
              <Route path="/season" element={<SeasonPage theme={theme} />} />
              <Route path="/calendar" element={<CalendarPage theme={theme} />} />
              <Route path="/standings" element={<StandingsPage theme={theme} />} />
              <Route path="/articles" element={<ArticlesPage theme={theme} />} />
              <Route path="/articles/:id" element={<ArticleDetail theme={theme} />} />
              <Route path="/contact" element={<ContactPage theme={theme} />} />
              <Route path="/glossary" element={<GlossaryPage theme={theme} />} />
              <Route path="/curiosities" element={<GenericPage title="Curiosidades" theme={theme} />} />
              <Route path="/media" element={<GenericPage title="Multimídia" theme={theme} />} />
              <Route path="/credits" element={<GenericPage title="Créditos" theme={theme} />} />
              <Route path="*" element={<div className="p-10 text-center">Página não encontrada</div>} />
            </Routes>
          </main>

          <footer className="mt-20 text-center space-y-2 pb-8">
            <p className={`text-sm font-medium ${theme === 'light' ? 'text-gray-400' : 'text-gray-600'}`}>© 2025 Autamubilismo.</p>
          </footer>
        </div>
      </div>
    </BrowserRouter>
  );
}