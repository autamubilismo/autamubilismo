import React from 'react';
import { Link } from 'react-router-dom';
// Estes imports funcionarão no seu VS Code se os arquivos estiverem nas pastas certas
import { BackButton } from '../components/UI';
import { DRIVERS_DATA } from '../data';

const DriversPage = ({ theme }) => {
  const isLight = theme === 'light';
  
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-12">
      <BackButton to="/" theme={theme} />
      <div className="mb-8"><h2 className={`text-4xl font-black ${isLight ? 'text-gray-800' : 'text-white'}`}>Grid 2025</h2></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {DRIVERS_DATA.map((driver) => {
          // LÓGICA DE ÍCONE SEGURA
          // Verifica se existe 'vibes' e se tem pelo menos um item antes de tentar renderizar
          const VibeIcon = driver.vibes && driver.vibes.length > 0 ? driver.vibes[0].icon : null;

          return (
            <Link 
              key={driver.id || driver.number} 
              to={`/drivers/${driver.id}`} 
              // Aplica a cor da equipe como fundo e mantém outras classes de estilo
              style={{ backgroundColor: driver.color }}
              className={`relative overflow-hidden h-80 rounded-3xl group cursor-pointer transition-transform hover:-translate-y-2 shadow-lg ${!isLight ? 'border border-[#333] hover:border-[#00fff2]' : ''}`}
            >
              {/* Imagem */}
              {driver.image && <img src={driver.image} alt={driver.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />}
              
              {/* Ícone de Vibe (Renderizado apenas se existir) */}
              {VibeIcon && (
                <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-md p-2 rounded-full text-white shadow-sm z-20">
                    <VibeIcon size={18} />
                </div>
              )}

              {/* Nome e Número */}
              <div className="absolute bottom-0 left-0 w-full p-6 z-10 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-3xl font-black text-white leading-none">{driver.name}</h3>
                  <span className="text-lg font-bold text-white/60">#{driver.number}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default DriversPage;