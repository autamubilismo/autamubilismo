import React, { useState } from 'react';
import { Trophy, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { BackButton } from '../components/ui';
import { PageContainer } from '../components/ui/PageContainer';
import { PageHeader } from '../components/ui/PageHeader';
import { DRIVERS_STANDINGS, CONSTRUCTORS_STANDINGS } from '../data';

const Standings = ({ theme }) => {
  const isLight = theme === 'light';
  const [activeTab, setActiveTab] = useState('drivers'); // 'drivers' or 'constructors'

  const drivers = DRIVERS_STANDINGS || [];
  const constructors = CONSTRUCTORS_STANDINGS || [];

  const getTrendIcon = (trend) => {
    if (trend > 0) return <TrendingUp size={16} className="text-green-500" />;
    if (trend < 0) return <TrendingDown size={16} className="text-red-500" />;
    return <Minus size={16} className="text-gray-400" />;
  };

  return (
    <PageContainer theme={theme}>
      <BackButton to="/" theme={theme} />
      
      <PageHeader 
        theme={theme}
        badge="Live Standings"
        icon={Trophy}
        title="Classificação"
        subtitle="Acompanhe a batalha pelo campeonato em tempo real"
      />

      {/* Tabs */}
      <div className="flex gap-4 mb-8 justify-center">
        <button
          onClick={() => setActiveTab('drivers')}
          className={`px-8 py-3 rounded-full font-black uppercase text-sm tracking-wider transition-all ${
            activeTab === 'drivers'
              ? isLight
                ? 'bg-pink-500 text-white shadow-lg'
                : 'bg-cyan-500 text-black shadow-[0_0_20px_cyan]'
              : isLight
                ? 'bg-white text-gray-600 border border-pink-200'
                : 'bg-white/5 text-gray-400 border border-white/10'
          }`}
        >
          Pilotos
        </button>
        <button
          onClick={() => setActiveTab('constructors')}
          className={`px-8 py-3 rounded-full font-black uppercase text-sm tracking-wider transition-all ${
            activeTab === 'constructors'
              ? isLight
                ? 'bg-pink-500 text-white shadow-lg'
                : 'bg-cyan-500 text-black shadow-[0_0_20px_cyan]'
              : isLight
                ? 'bg-white text-gray-600 border border-pink-200'
                : 'bg-white/5 text-gray-400 border border-white/10'
          }`}
        >
          Construtores
        </button>
      </div>

      {/* Standings Table */}
      <div className={`rounded-[2.5rem] overflow-hidden ${
        isLight 
          ? 'bg-white/60 backdrop-blur-xl border border-pink-100 shadow-xl' 
          : 'bg-[#121217]/80 backdrop-blur-xl border border-white/10'
      }`}>
        
        {/* Table Header */}
        <div className={`grid grid-cols-12 gap-4 p-6 border-b font-black text-xs uppercase tracking-wider ${
          isLight ? 'border-pink-100 text-gray-600' : 'border-white/10 text-gray-400'
        }`}>
          <div className="col-span-1">Pos</div>
          <div className="col-span-5">{activeTab === 'drivers' ? 'Piloto' : 'Equipe'}</div>
          <div className="col-span-3 text-center">Pontos</div>
          <div className="col-span-3 text-right">Tendência</div>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-gray-100 dark:divide-white/5">
          {activeTab === 'drivers' ? (
            drivers.map((driver, index) => (
              <div 
                key={driver.id || index}
                className={`grid grid-cols-12 gap-4 p-6 items-center transition-colors ${
                  isLight 
                    ? 'hover:bg-pink-50' 
                    : 'hover:bg-white/5'
                }`}
              >
                <div className="col-span-1">
                  <span className={`text-2xl font-black ${
                    isLight ? 'text-gray-900' : 'text-white'
                  }`}>
                    {driver.position}
                  </span>
                </div>
                
                <div className="col-span-5 flex items-center gap-4">
                  {driver.image && (
                    <img 
                      src={driver.image} 
                      alt={driver.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  )}
                  <div>
                    <div className={`font-black text-lg ${
                      isLight ? 'text-gray-900' : 'text-white'
                    }`}>
                      {driver.name}
                    </div>
                    <div className={`text-xs font-bold uppercase tracking-wider ${
                      isLight ? 'text-gray-500' : 'text-gray-400'
                    }`}>
                      {driver.team}
                    </div>
                  </div>
                </div>
                
                <div className="col-span-3 text-center">
                  <span className={`text-3xl font-black ${
                    isLight ? 'text-pink-600' : 'text-cyan-400'
                  }`}>
                    {driver.points}
                  </span>
                </div>
                
                <div className="col-span-3 flex justify-end items-center gap-2">
                  {getTrendIcon(driver.trend || 0)}
                  <span className={`text-sm font-bold ${
                    isLight ? 'text-gray-600' : 'text-gray-400'
                  }`}>
                    {Math.abs(driver.trend || 0)}
                  </span>
                </div>
              </div>
            ))
          ) : (
            constructors.map((team, index) => (
              <div 
                key={team.id || index}
                className={`grid grid-cols-12 gap-4 p-6 items-center transition-colors ${
                  isLight 
                    ? 'hover:bg-pink-50' 
                    : 'hover:bg-white/5'
                }`}
              >
                <div className="col-span-1">
                  <span className={`text-2xl font-black ${
                    isLight ? 'text-gray-900' : 'text-white'
                  }`}>
                    {team.position}
                  </span>
                </div>
                
                <div className="col-span-5 flex items-center gap-4">
                  <div 
                    className="w-2 h-12 rounded-full"
                    style={{ backgroundColor: team.color }}
                  />
                  <div>
                    <div className={`font-black text-lg ${
                      isLight ? 'text-gray-900' : 'text-white'
                    }`}>
                      {team.name}
                    </div>
                  </div>
                </div>
                
                <div className="col-span-3 text-center">
                  <span className={`text-3xl font-black ${
                    isLight ? 'text-pink-600' : 'text-cyan-400'
                  }`}>
                    {team.points}
                  </span>
                </div>
                
                <div className="col-span-3 flex justify-end items-center gap-2">
                  {getTrendIcon(team.trend || 0)}
                  <span className={`text-sm font-bold ${
                    isLight ? 'text-gray-600' : 'text-gray-400'
                  }`}>
                    {Math.abs(team.trend || 0)}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Last Updated */}
      <div className={`text-center mt-8 text-xs font-bold uppercase tracking-wider ${
        isLight ? 'text-gray-400' : 'text-gray-500'
      }`}>
        Última atualização: {new Date().toLocaleDateString('pt-BR')}
      </div>
    </PageContainer>
  );
};

export default Standings;