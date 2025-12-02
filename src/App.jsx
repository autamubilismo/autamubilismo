import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Menu, Sun, Moon, Search } from 'lucide-react';
import { LogoHelmet, NavigationOverlay, SearchOverlay, ScrollToTop } from './components/UI';

// --- PÁGINAS PRINCIPAIS ---
import Home from './pages/Home';
import DriversPage from './pages/Drivers';
import DriverDetail from './pages/DriverDetail';
import TeamsPage from './pages/Teams';
import TeamDetail from './pages/TeamDetail';
import SeasonPage from './pages/Season';
import CalendarPage from './pages/Calendar';
import StandingsPage from './pages/Standings';
import CircuitsPage from './pages/Circuits';
import RegulationsPage from './pages/Regulations';
import FanzonePage from './pages/Fanzone';
import ContactPage from './pages/Contact';

// --- ARTIGOS ---
import ArticlesPage from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';

// --- GLOSSÁRIO / INFO ---
import GlossaryPage from './pages/Glossary';
import CuriositiesPage from './pages/Curiosities';
import MultimediaPage from './pages/Multimedia';
import CreditsPage from './pages/Credits';

// --- NOTÍCIAS ---
// Lista de notícias
import NewsList from './pages/News';          // src/pages/News.jsx
// Detalhe da notícia
import NewsDetail from './pages/NewsDetail';  // src/pages/NewsDetail.jsx

// --- PÁGINA GENÉRICA (404 / fallback) ---
import GenericPage from './pages/GenericPage'; // src/pages/GenericPage.jsx

export default function App() {
  const [theme, setTheme] = useState('light');
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleTheme = () =>
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  // BACKGROUNDS
  const lightPattern = {
    backgroundColor: '#FFF5F8',
    backgroundImage: `
      conic-gradient(
        rgba(247, 184, 200, 0.15) 90deg,
        transparent 90deg 180deg,
        rgba(247, 184, 200, 0.15) 180deg 270deg,
        transparent 270deg
      )
    `,
    backgroundSize: '40px 40px',
  };

  const darkPattern = {
    backgroundColor: '#141416',
    backgroundImage: `
      linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
    `,
    backgroundSize: '40px 40px',
  };

  const headerBg = theme === 'light' ? 'bg-[#FFF5F8]' : 'bg-[#141416]';

  return (
    <BrowserRouter>
      <ScrollToTop />

      <div
        className={`min-h-screen flex flex-col ${
          theme === 'light' ? 'text-gray-800' : 'text-gray-200'
        }`}
      >
        <NavigationOverlay
          isOpen={menuOpen}
          onClose={() => setMenuOpen(false)}
          theme={theme}
        />
        <SearchOverlay
          isOpen={searchOpen}
          onClose={() => setSearchOpen(false)}
          theme={theme}
        />

        {/* HEADER */}
        <div
          className={`w-full ${headerBg} relative z-20 shadow-sm transition-colors duration-500`}
>
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
            <header className="flex justify-between items-center min-h-[120px]">
              {/* MENU */}
              <div className="flex-1 flex justify-start">
                <button
                  onClick={() => setMenuOpen(true)}
                  className={`group flex items-center gap-3 px-5 py-3 rounded-full transition-all hover:scale-105 active:scale-95 ${
                    theme === 'light'
                      ? 'bg-white/80 backdrop-blur-md text-gray-800 shadow-md border-2 border-transparent hover:border-[#F7B8C8]'
                      : 'bg-[#1a1a20]/80 backdrop-blur-md text-[#00fff2] border border-[#333] hover:border-[#00fff2]'
                  }`}
                >
                  <Menu size={24} />
                  <span className="font-black tracking-widest text-sm">
                    MENU
                  </span>
                </button>
              </div>

              {/* LOGO */}
              <div className="flex-0 cursor-pointer z-20 transform hover:scale-105 transition-transform duration-500">
                <Link to="/">
                  <LogoHelmet theme={theme} size="large" />
                </Link>
              </div>

              {/* BOTÕES DIREITA */}
              <div className="flex-1 flex justify-end gap-3">
                <button
                  onClick={() => setSearchOpen(true)}
                  className={`p-3 rounded-full flex items-center justify-center transition-colors ${
                    theme === 'light'
                      ? 'bg-white/80 backdrop-blur-md shadow-sm text-gray-400 hover:text-gray-600'
                      : 'bg-[#1a1a20]/80 backdrop-blur-md text-gray-500 border border-[#333] hover:text-[#00fff2]'
                  }`}
                >
                  <Search size={24} />
                </button>

                <button
                  onClick={toggleTheme}
                  className={`p-3 rounded-full transition-all duration-300 ${
                    theme === 'light'
                      ? 'bg-white/80 backdrop-blur-md shadow-lg text-yellow-500'
                      : 'bg-[#1a1a20]/80 backdrop-blur-md text-[#00fff2] border border-[#333]'
                  }`}
                >
                  {theme === 'light' ? <Sun size={24} /> : <Moon size={24} />}
                </button>
              </div>
            </header>
          </div>
        </div>

        {/* MAIN */}
        <div
          className="flex-1 relative z-10 transition-colors duration-700"
          style={theme === 'light' ? lightPattern : darkPattern}
        >
          {/* Glow do Dark Mode */}
          {theme === 'dark' && (
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-[#bd00ff]/5 to-transparent" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#ff0055]/5 blur-[120px]" />
            </div>
          )}

          <div className="max-w-7xl mx-auto p-4 md:p-8 relative z-10">
            <main className="min-h-[60vh]">
              <Routes>
                <Route path="/" element={<Home theme={theme} />} />

                {/* PILOTOS */}
                <Route
                  path="/drivers"
                  element={<DriversPage theme={theme} />}
                />
                <Route
                  path="/drivers/:id"
                  element={<DriverDetail theme={theme} />}
                />

                {/* EQUIPES */}
                <Route path="/teams" element={<TeamsPage theme={theme} />} />
                <Route
                  path="/teams/:id"
                  element={<TeamDetail theme={theme} />}
                />

                {/* TEMPORADA */}
                <Route path="/season" element={<SeasonPage theme={theme} />} />
                <Route
                  path="/calendar"
                  element={<CalendarPage theme={theme} />}
                />
                <Route
                  path="/standings"
                  element={<StandingsPage theme={theme} />}
                />
                <Route
                  path="/circuits"
                  element={<CircuitsPage theme={theme} />}
                />
                <Route
                  path="/regulation"
                  element={<RegulationsPage theme={theme} />}
                />

                {/* NOTÍCIAS */}
                <Route path="/news" element={<NewsList theme={theme} />} />
                <Route
                  path="/news/:slug"
                  element={<NewsDetail theme={theme} />}
                />

                {/* ARTIGOS */}
                <Route
                  path="/articles"
                  element={<ArticlesPage theme={theme} />}
                />
                <Route
                  path="/articles/:id"
                  element={<ArticleDetail theme={theme} />}
                />

                {/* COMUNIDADE */}
                <Route
                  path="/fanzone"
                  element={<FanzonePage theme={theme} />}
                />
                <Route
                  path="/contact"
                  element={<ContactPage theme={theme} />}
                />

                {/* INFO */}
                <Route
                  path="/glossary"
                  element={<GlossaryPage theme={theme} />}
                />
                <Route
                  path="/curiosities"
                  element={<CuriositiesPage theme={theme} />}
                />
                <Route path="/media" element={<MultimediaPage theme={theme} />} />
                <Route path="/credits" element={<CreditsPage theme={theme} />} />

                {/* 404 */}
                <Route
                  path="*"
                  element={
                    <GenericPage title="Página não encontrada" theme={theme} />
                  }
                />
              </Routes>
            </main>

            <footer className="mt-20 text-center space-y-2 pb-8">
              <p
                className={`text-sm font-medium ${
                  theme === 'light' ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                © 2025 Autamubilismo.
              </p>
              <div
                className={`w-full h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-20 ${
                  theme === 'light' ? 'text-[#F7B8C8]' : 'text-[#00fff2]'
                }`}
              ></div>
            </footer>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
