import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Menu, Sun, Moon, Search } from 'lucide-react';
import { LogoHelmet, NavigationOverlay, SearchOverlay, ScrollToTop } from './components/UI';

// 👇 1. IMPORTANTE: Importamos os links sociais aqui
import { SOCIAL_LINKS } from './data';

// --- IMPORTAÇÃO DAS PÁGINAS ---
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
import ArticlesPage from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';
import ContactPage from './pages/Contact';
import GlossaryPage from './pages/Glossary';
import GenericPage from './pages/GenericPage';

// Notícias
import NewsList from './pages/News';       
import NewsDetail from './pages/NewsDetail'; 
import ManifestoPage from './pages/ManifestoPage'; 

// Outras páginas
import CuriositiesPage from './pages/Curiosities';
import MultimediaPage from './pages/Multimedia';
import CreditsPage from './pages/Credits';
import NewsletterSuccess from './pages/NewsletterSuccess';

export default function App() {
  const [theme, setTheme] = useState('light');
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  // --- PADRÕES DE FUNDO ---
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
    backgroundSize: '40px 40px'
  };

  const darkPattern = {
    backgroundColor: '#141416',
    backgroundImage: `
      linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
    `,
    backgroundSize: '40px 40px'
  };

  // Cor sólida para o Header
  const headerBg = theme === 'light' ? 'bg-[#FFF5F8]' : 'bg-[#141416]';
  const footerBg = theme === 'light' ? 'bg-white border-t border-gray-100' : 'bg-[#0a0a0e] border-t border-[#333]';

  return (
    <BrowserRouter>
      <ScrollToTop />
      
      <div className={`min-h-screen flex flex-col ${theme === 'light' ? 'text-gray-800' : 'text-gray-200'}`}>
        
        <NavigationOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} theme={theme} setView={() => {}} />
        <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} theme={theme} />
        
        {/* --- HEADER ANTIGO (O QUE VOCÊ GOSTOU) --- */}
        <div className={`w-full ${headerBg} relative z-20`}>
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
            {/* O SEGREDO ESTÁ AQUI: min-h-[180px] */}
            <header className="flex justify-between items-center min-h-[180px]">
              
              {/* ESQUERDA */}
              <div className="flex-1 flex justify-start">
                <button 
                  onClick={() => setMenuOpen(true)} 
                  className={`group flex items-center gap-3 px-5 py-3 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 ${theme === 'light' ? 'bg-white/80 backdrop-blur-md text-gray-800 shadow-md border-2 border-transparent hover:border-[#F7B8C8]' : 'bg-[#1a1a20]/80 backdrop-blur-md text-[#00fff2] border border-[#333] hover:border-[#00fff2] hover:shadow-[0_0_20px_rgba(0,255,242,0.4)]'}`}
                >
                  <Menu size={24} className={`transition-transform duration-300 group-hover:rotate-90`} />
                  <span className="font-black tracking-widest text-sm">MENU</span>
                </button>
              </div>

              {/* CENTRO (LOGO GIGANTE) */}
              <div className="flex-0 cursor-pointer z-20 transform hover:scale-105 transition-transform duration-500">
                <Link to="/">
                   <LogoHelmet theme={theme} size="large" />
                </Link>
              </div>

              {/* DIREITA */}
              <div className="flex-1 flex justify-end gap-3">
                <button 
                  onClick={() => setSearchOpen(true)} 
                  className={`p-3 rounded-full flex items-center justify-center transition-colors ${theme === 'light' ? 'bg-white/80 backdrop-blur-md shadow-sm text-gray-400 hover:text-gray-600' : 'bg-[#1a1a20]/80 backdrop-blur-md text-gray-500 border border-[#333] hover:text-[#00fff2]'}`}
                >
                  <Search size={24} />
                </button>
                <button 
                  onClick={toggleTheme} 
                  className={`p-3 rounded-full transition-all duration-300 ${theme === 'light' ? 'bg-white/80 backdrop-blur-md shadow-lg text-yellow-500' : 'bg-[#1a1a20]/80 backdrop-blur-md text-[#00fff2] border border-[#333]'}`}
                >
                  {theme === 'light' ? <Sun size={24} /> : <Moon size={24} />}
                </button>
              </div>

            </header>
          </div>
        </div>

        {/* --- CONTEÚDO PRINCIPAL --- */}
        <div 
          className="flex-1 relative z-10 flex flex-col"
          style={theme === 'light' ? lightPattern : darkPattern}
        >
          {theme === 'dark' && (
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-[#bd00ff]/5 to-transparent" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#bd00ff]/5 blur-[120px]" />
            </div>
          )}

          <div className="max-w-7xl mx-auto p-4 md:p-8 relative z-10 w-full flex-1">
            <main className="min-h-[60vh]">
              <Routes>
                <Route path="/" element={<Home theme={theme} />} />
                <Route path="/drivers" element={<DriversPage theme={theme} />} />
                <Route path="/drivers/:id" element={<DriverDetail theme={theme} />} />
                <Route path="/teams" element={<TeamsPage theme={theme} />} />
                <Route path="/teams/:id" element={<TeamDetail theme={theme} />} />
                <Route path="/season" element={<SeasonPage theme={theme} />} />
                <Route path="/calendar" element={<CalendarPage theme={theme} />} />
                <Route path="/standings" element={<StandingsPage theme={theme} />} />
                <Route path="/circuits" element={<CircuitsPage theme={theme} />} />
                <Route path="/regulation" element={<RegulationsPage theme={theme} />} />
                <Route path="/news" element={<NewsList theme={theme} />} />
                <Route path="/news/:slug" element={<NewsDetail theme={theme} />} />
                <Route path="/articles" element={<ArticlesPage theme={theme} />} />
                <Route path="/articles/:id" element={<ArticleDetail theme={theme} />} />
                <Route path="/fanzone" element={<FanzonePage theme={theme} />} />
                <Route path="/contact" element={<ContactPage theme={theme} />} />
                <Route path="/glossary" element={<GlossaryPage theme={theme} />} />
                <Route path="/curiosities" element={<CuriositiesPage title="Curiosidades" theme={theme} />} />
                <Route path="/media" element={<MultimediaPage theme={theme} />} />
                <Route path="/credits" element={<CreditsPage theme={theme} />} />
                <Route path="/newsletter-success" element={<NewsletterSuccess theme={theme} />} />
                <Route path="/manifesto" element={<ManifestoPage theme={theme} />} />
                <Route path="*" element={<GenericPage title="Página não encontrada" theme={theme} />} />
              </Routes>
            </main>
          </div>

          {/* 👇 FOOTER 👇 */}
          <footer className={`mt-20 pt-16 pb-8 ${footerBg} relative z-20`}>
             <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12 text-center md:text-left">
                   
                   {/* Coluna 1: Logo */}
                   <div className="col-span-1 flex flex-col items-center md:items-start">
                      <div className="w-32 mb-4 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                         <LogoHelmet theme={theme} />
                      </div>
                      <p className={`text-sm ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'} leading-relaxed`}>
                         O automobilismo além da pista.
                      </p>
                   </div>

                   {/* Coluna 2: Explorar */}
                   <div>
                      <h4 className={`font-bold uppercase tracking-widest mb-4 text-xs ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>Explorar</h4>
                      <ul className={`space-y-2 text-sm font-medium ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>
                         <li><Link to="/news" className="hover:underline hover:text-[#caa5d8]">Notícias</Link></li>
                         <li><Link to="/season" className="hover:underline hover:text-[#caa5d8]">Temporada</Link></li>
                         <li><Link to="/drivers" className="hover:underline hover:text-[#caa5d8]">Pilotos</Link></li>
                      </ul>
                   </div>

                   {/* Coluna 3: Comunidade */}
                   <div>
                      <h4 className={`font-bold uppercase tracking-widest mb-4 text-xs ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>Comunidade</h4>
                      <ul className={`space-y-2 text-sm font-medium ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>
                         <li><Link to="/fanzone" className="hover:underline hover:text-[#caa5d8]">Fanzone</Link></li>
                         <li><Link to="/articles" className="hover:underline hover:text-[#caa5d8]">Artigos</Link></li>
                         <li><Link to="/glossary" className="hover:underline hover:text-[#caa5d8]">Glossário</Link></li>
                      </ul>
                   </div>

                   {/* 👇 COLUNA 4: Conecte-se 👇 */}
                   <div>
                      <h4 className={`font-bold uppercase tracking-widest mb-4 text-xs ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>Conecte-se</h4>
                      
                      {/* Ícones Sociais */}
                      <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                        {SOCIAL_LINKS && SOCIAL_LINKS.map((social) => (
                          <a 
                            key={social.id}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group
                              ${theme === 'light' 
                                ? 'bg-gray-50 text-gray-400 hover:bg-[#F7B8C8] hover:text-white' 
                                : 'bg-[#1a1a20] text-gray-400 hover:bg-[#caa5d8] hover:text-white border border-[#333]'
                              }`}
                            aria-label={social.label}
                          >
                            <social.icon size={18} />
                          </a>
                        ))}
                      </div>

                      {/* Links extras */}
                      <ul className={`space-y-2 text-sm font-medium ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>
                         <li><Link to="/contact" className="hover:underline hover:text-[#caa5d8]">Fale Conosco</Link></li>
                         <li><Link to="/credits" className="hover:underline hover:text-[#caa5d8]">Créditos</Link></li>
                      </ul>
                   </div>

                </div>

                <div className={`w-full h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-20 ${theme === 'light' ? 'text-[#F7B8C8]' : 'text-[#bd00ff]'}`}></div>
                <p className={`text-center text-xs mt-8 ${theme === 'light' ? 'text-gray-400' : 'text-gray-600'}`}>© 2025 Autamubilismo.</p>
             </div>
          </footer>

        </div>
      </div>
    </BrowserRouter>
  );
}