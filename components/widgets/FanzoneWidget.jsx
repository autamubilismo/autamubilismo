'use client';
import React, { useState, useEffect } from 'react';
import { Sparkles, Trophy, Check, X } from 'lucide-react';
import { GIRLIE_COLORS, VAPORWAVE_COLORS } from '../../constants/theme';
import { DRIVERS_DATA } from '../../data/drivers';

export const FanzoneWidget = ({ theme }) => {
  const isLight = theme === 'light';
  const C = isLight ? GIRLIE_COLORS : VAPORWAVE_COLORS;
  
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [hasVoted, setHasVoted] = useState(false);
  const [votes, setVotes] = useState({});

  // Carregar votos do localStorage
  useEffect(() => {
    const savedVotes = localStorage.getItem('dotd_votes');
    const userVote = localStorage.getItem('dotd_user_vote');
    
    if (savedVotes) {
      setVotes(JSON.parse(savedVotes));
    }
    
    if (userVote) {
      setSelectedDriver(userVote);
      setHasVoted(true);
    }
  }, []);

  // Função para votar
  const handleVote = (driverId) => {
    if (hasVoted) return;

    // Atualizar votos
    const newVotes = { ...votes };
    newVotes[driverId] = (newVotes[driverId] || 0) + 1;
    
    setVotes(newVotes);
    setSelectedDriver(driverId);
    setHasVoted(true);
    
    // Salvar no localStorage
    localStorage.setItem('dotd_votes', JSON.stringify(newVotes));
    localStorage.setItem('dotd_user_vote', driverId);
  };

  // Função para resetar voto (apenas para testes)
  const handleReset = () => {
    localStorage.removeItem('dotd_user_vote');
    setHasVoted(false);
    setSelectedDriver(null);
    setIsOpen(false);
  };

  // Calcular líder atual
  const currentLeader = Object.entries(votes).sort((a, b) => b[1] - a[1])[0];
  const leaderDriver = currentLeader ? DRIVERS_DATA.find(d => d.id === currentLeader[0]) : null;
  const totalVotes = Object.values(votes).reduce((sum, v) => sum + v, 0);

  // Ordenar pilotos por votos
  const driversWithVotes = DRIVERS_DATA.map(driver => ({
    ...driver,
    voteCount: votes[driver.id] || 0,
    percentage: totalVotes > 0 ? ((votes[driver.id] || 0) / totalVotes * 100).toFixed(1) : 0
  })).sort((a, b) => b.voteCount - a.voteCount);

  if (!isOpen) {
    return (
      <div 
        onClick={() => setIsOpen(true)}
        className="h-full flex flex-col items-center justify-center p-6 text-center relative z-10 group cursor-pointer"
      >
        {/* Efeito de fundo decorativo */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: isLight 
              ? 'radial-gradient(circle at center, rgba(211, 150, 140, 0.14) 0%, transparent 70%)'
              : 'radial-gradient(circle at center, rgba(168, 85, 247, 0.2) 0%, transparent 70%)'
          }}
        />

        <div className={`p-5 rounded-full mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12 shadow-lg ${
          isLight 
            ? 'bg-cottage-beige text-cottage-rosy ring-4 ring-cottage-rosy' 
            : 'bg-black/40 text-fuchsia-400 ring-2 ring-fuchsia-500/50 shadow-[0_0_15px_rgba(232,121,249,0.4)]'
        }`}>
          <Sparkles size={32} />
        </div>

        <h3 className={`font-black text-xl mb-1 ${isLight ? 'text-gray-800' : 'text-white'}`}>
          Fanzone
        </h3>
        
        <p className={`text-xs uppercase font-bold tracking-widest mb-3 ${
          isLight ? 'text-cottage-rosy' : 'text-fuchsia-400'
        }`}>
          Driver of The Day
        </p>

        {hasVoted && leaderDriver ? (
          <div className="mt-2">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-wider ${
              isLight 
                ? 'bg-gradient-to-r from-cottage-rosy to-cottage-rosy text-cottage-beige'
                : 'bg-gradient-to-r from-fuchsia-900/30 to-cyan-900/30 text-fuchsia-300 border border-fuchsia-500/30'
            }`}>
              <Trophy size={12} className="text-yellow-500" />
              {leaderDriver.name.split(' ').pop()}
              <span className="opacity-60">• {totalVotes} votos</span>
            </div>
          </div>
        ) : (
          <p className={`text-[10px] uppercase font-bold tracking-widest opacity-50 ${
            isLight ? 'text-gray-500' : 'text-cyan-200'
          }`}>
            Clique para votar
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col p-6 relative z-10 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-xl ${
            isLight ? 'bg-cottage-rosy text-cottage-beige' : 'bg-fuchsia-900/30 text-fuchsia-400'
          }`}>
            <Sparkles size={20} />
          </div>
          <div>
            <h3 className={`text-sm font-black uppercase leading-none ${
              isLight ? 'text-gray-800' : 'text-white'
            }`}>
              Driver of The Day
            </h3>
            <p className={`text-[9px] font-bold uppercase tracking-wider opacity-60 mt-0.5 ${
              isLight ? 'text-gray-500' : 'text-gray-400'
            }`}>
              {totalVotes} voto{totalVotes !== 1 ? 's' : ''}
            </p>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className={`p-2 rounded-lg transition-colors ${
            isLight 
              ? 'hover:bg-gray-100 text-gray-400 hover:text-gray-600'
              : 'hover:bg-white/5 text-gray-500 hover:text-white'
          }`}
        >
          <X size={16} />
        </button>
      </div>

      {/* Lista de pilotos */}
      <div className="flex-1 overflow-y-auto space-y-2 scrollbar-thin scrollbar-thumb-cottage-rosy dark:scrollbar-thumb-fuchsia-500/30 scrollbar-track-transparent">
        {driversWithVotes.map((driver) => {
          const isSelected = selectedDriver === driver.id;
          const isTopVoted = driver.voteCount > 0 && driver.voteCount === driversWithVotes[0].voteCount;

          return (
            <button
              key={driver.id}
              onClick={() => !hasVoted && handleVote(driver.id)}
              disabled={hasVoted}
              className={`w-full p-3 rounded-2xl transition-all duration-300 text-left group/driver ${
                hasVoted 
                  ? 'cursor-default' 
                  : 'cursor-pointer hover:scale-[1.02]'
              } ${
                isSelected
                  ? isLight
                    ? 'bg-gradient-to-r from-cottage-rosy to-cottage-rosy text-white shadow-lg'
                    : 'bg-gradient-to-r from-fuchsia-600 to-cyan-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.5)]'
                  : isLight
                    ? 'bg-white hover:bg-cottage-beige border border-cottage-rosy'
                    : 'bg-white/5 hover:bg-white/10 border border-white/10 hover:border-fuchsia-500/30'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  {/* Cor da equipe */}
                  <div 
                    className="w-1.5 h-10 rounded-full shrink-0"
                    style={{ backgroundColor: driver.color }}
                  />
                  
                  {/* Info do piloto */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className={`text-sm font-black truncate ${
                        isSelected ? 'text-white' : (isLight ? 'text-gray-800' : 'text-white')
                      }`}>
                        {driver.name}
                      </span>
                      {isSelected && (
                        <Check size={14} className="shrink-0 text-white" />
                      )}
                      {isTopVoted && totalVotes > 0 && (
                        <Trophy size={12} className="shrink-0 text-yellow-500" />
                      )}
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`text-[10px] font-bold ${
                        isSelected ? 'text-white/80' : (isLight ? 'text-gray-500' : 'text-gray-400')
                      }`}>
                        #{driver.number} • {driver.team}
                      </span>
                      {driver.voteCount > 0 && (
                        <span className={`text-[9px] font-mono font-bold ${
                          isSelected ? 'text-white/60' : (isLight ? 'text-cottage-rosy' : 'text-fuchsia-400')
                        }`}>
                          {driver.percentage}%
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Contador de votos */}
                {driver.voteCount > 0 && (
                  <div className={`px-3 py-1 rounded-lg text-xs font-bold shrink-0 ${
                    isSelected
                      ? 'bg-white/20 text-white'
                      : isLight
                        ? 'bg-cottage-rosy text-cottage-beige'
                        : 'bg-fuchsia-900/30 text-fuchsia-300'
                  }`}>
                    {driver.voteCount}
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Footer */}
      {hasVoted && (
        <div className={`mt-4 pt-4 border-t text-center ${
          isLight ? 'border-cottage-rosy' : 'border-white/10'
        }`}>
          <p className={`text-[10px] font-bold uppercase tracking-wider mb-2 ${
            isLight ? 'text-gray-500' : 'text-gray-400'
          }`}>
            ✓ Voto computado
          </p>
          <button
            onClick={handleReset}
            className={`text-[9px] font-bold uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity ${
              isLight ? 'text-gray-400' : 'text-gray-500'
            }`}
          >
            Redefinir voto
          </button>
        </div>
      )}
    </div>
  );
};
