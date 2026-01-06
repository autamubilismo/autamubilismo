import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react";
import { ScrollToTop } from './components/ui/ScrollToTop';
import { MainLayout } from './components/layout/MainLayout';
import { useTheme } from './hooks/useTheme';

// Páginas
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
import NewsList from './pages/News';       
import NewsDetail from './pages/NewsDetail'; 
import ManifestoPage from './pages/ManifestoPage'; 
import CuriositiesPage from './pages/Curiosities';
import MultimediaPage from './pages/Multimedia';
import CreditsPage from './pages/Credits';
import NewsletterSuccess from './pages/NewsletterSuccess';
import Calendar2026Page from './pages/Calendar2026Page';

// ==============================================================================
// 🎯 COMPONENTE PRINCIPAL - ROTAS
// ==============================================================================

const AppContent = () => {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  // Se estiver na home, renderiza ela diretamente (tem layout próprio)
  if (location.pathname === '/') {
    return <Home theme={theme} toggleTheme={toggleTheme} />;
  }

  // Caso contrário, usa o MainLayout padrão
  return (
    <MainLayout 
      theme={theme} 
      toggleTheme={toggleTheme} 
      menuOpen={menuOpen} 
      setMenuOpen={setMenuOpen} 
      searchOpen={searchOpen} 
      setSearchOpen={setSearchOpen}
    >
      <Routes>
        <Route path="/drivers" element={<DriversPage theme={theme} />} />
        <Route path="/drivers/:id" element={<DriverDetail theme={theme} />} />
        <Route path="/teams" element={<TeamsPage theme={theme} />} />
        <Route path="/teams/:id" element={<TeamDetail theme={theme} />} />
        <Route path="/season" element={<SeasonPage theme={theme} />} />
        <Route path="/calendar" element={<CalendarPage theme={theme} />} />
        <Route path="/standings" element={<StandingsPage theme={theme} />} />
        <Route path="/circuits" element={<CircuitsPage theme={theme} />} />
        <Route path="/regulations" element={<RegulationsPage theme={theme} />} />
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
        <Route path="/calendar-2026" element={<Calendar2026Page theme={theme} />} />
        <Route path="*" element={<GenericPage title="Página não encontrada" theme={theme} />} />
      </Routes>
    </MainLayout>
  );
};

// ==============================================================================
// 🚀 EXPORT PRINCIPAL
// ==============================================================================

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppContent />
      <Analytics />
    </BrowserRouter>
  );
}