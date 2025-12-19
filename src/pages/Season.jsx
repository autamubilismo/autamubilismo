import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Calendar, Trophy, MapPin, Scale, Users, Wrench, Globe, Sparkles } from 'lucide-react';
import { BackButton, BentoCard } from '../components/ui';
import { PageContainer } from '../components/ui/PageContainer';
import { PageHeader } from '../components/ui/PageHeader';

// Widget Cards para a Season Page
const QuickAccessCard = ({ icon: Icon, title, subtitle, color, to, theme, onClick }) => {
  const isLight = theme === 'light';
  
  return (
    <BentoCard 
      theme={theme}
      onClick={onClick}
      className="cursor-pointer p-8 flex flex-col items-center text-center gap-4"
    >
      <div 
        className={`p-6 rounded-2xl transition-transform duration-300 group-hover:scale-110 ${
          isLight 
            ? `bg-${color}-100 text-${color}-600` 
            : `bg-${color}-900/20 text-${color}-400 border border-${color}-500/30`
        }`}
      >
        <Icon size={32} />
      </div>
      <div>
        <h3 className={`text-xl font-black uppercase mb-2 ${
          isLight ? 'text-gray-900' : 'text-white'
        }`}>
          {title}
        </h3>
        <p className={`text-sm font-medium ${
          isLight ? 'text-gray-500' : 'text-gray-400'
        }`}>
          {subtitle}
        </p>
      </div>
    </BentoCard>
  );
};

const SeasonPage = ({ theme }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const quickLinks = [
    { icon: Calendar, title: 'Calendário', subtitle: '24 corridas', to: '/calendar', color: 'purple' },
    { icon: Trophy, title: 'Classificação', subtitle: 'Pilotos & Equipes', to: '/standings', color: 'yellow' },
    { icon: MapPin, title: 'Circuitos', subtitle: 'Todos os traçados', to: '/circuits', color: 'blue' },
    { icon: Scale, title: 'Regulamento', subtitle: 'Regras técnicas', to: '/regulations', color: 'red' },
    { icon: Users, title: 'Pilotos', subtitle: '20 gladiadores', to: '/drivers', color: 'green' },
    { icon: Wrench, title: 'Equipes', subtitle: '10 construtores', to: '/teams', color: 'orange' },
  ];

  const handleCardClick = (to) => {
    if (to) navigate(to);
  };

  return (
    <PageContainer theme={theme}>
      <BackButton to="/" theme={theme} />
      
      <PageHeader 
        theme={theme}
        badge="Temporada 2025"
        icon={Sparkles}
        title="Season Hub"
        subtitle="Tudo sobre a temporada em um só lugar"
      />

      {/* Search Bar */}
      <div className={`max-w-2xl mx-auto mb-12 p-1 rounded-full ${
        theme === 'light' 
          ? 'bg-gradient-to-r from-pink-100 via-white to-purple-100' 
          : 'bg-gradient-to-r from-cyan-500/20 via-fuchsia-500/20 to-cyan-500/20'
      }`}>
        <div className={`relative p-4 rounded-full flex items-center gap-4 ${
          theme === 'light' ? 'bg-white' : 'bg-[#09090c]'
        }`}>
          <Globe className={`w-5 h-5 ${theme === 'light' ? 'text-pink-400' : 'text-cyan-400'}`} />
          <input 
            type="text" 
            placeholder="Buscar informações da temporada..." 
            className={`bg-transparent w-full outline-none font-bold ${
              theme === 'light' 
                ? 'text-gray-800 placeholder-pink-300' 
                : 'text-white placeholder-gray-600'
            }`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Quick Access Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quickLinks.map((link) => (
          <QuickAccessCard
            key={link.to}
            icon={link.icon}
            title={link.title}
            subtitle={link.subtitle}
            color={link.color}
            to={link.to}
            theme={theme}
            onClick={() => handleCardClick(link.to)}
          />
        ))}
      </div>

      {/* Calendário 2026 Link */}
      <div className="mt-12">
        <Link
          to="/calendar/2026"
          className={`block p-8 rounded-[2.5rem] text-center transition-all duration-300 hover:-translate-y-2 ${
            theme === 'light'
              ? 'bg-gradient-to-r from-purple-100 to-pink-100 hover:shadow-xl'
              : 'bg-gradient-to-r from-fuchsia-900/20 to-cyan-900/20 border border-white/10 hover:border-cyan-500/50'
          }`}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <Calendar size={32} className={theme === 'light' ? 'text-purple-600' : 'text-cyan-400'} />
            <h3 className={`text-2xl font-black uppercase ${
              theme === 'light' ? 'text-gray-900' : 'text-white'
            }`}>
              Calendário 2026
            </h3>
          </div>
          <p className={`text-sm font-medium ${
            theme === 'light' ? 'text-gray-600' : 'text-gray-400'
          }`}>
            Veja o que vem por aí na próxima temporada
          </p>
        </Link>
      </div>
    </PageContainer>
  );
};

export default SeasonPage;