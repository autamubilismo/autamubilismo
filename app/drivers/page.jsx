'use client';

import Link from 'next/link';
import { BackButton } from '../../components/ui';
import { PageContainer } from '../../components/ui/PageContainer';
import { PageHeader } from '../../components/ui/PageHeader';
import { DRIVERS_DATA } from '../../data';
import { useTheme } from '@/components/layout/ThemeContext';

const normalizeSlug = (value) =>
  value
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const DriversPage = () => {
  const { theme } = useTheme();
  const resolvedTheme = theme || 'light';
  const isLight = resolvedTheme === 'light';

  return (
    <PageContainer theme={resolvedTheme}>
      <BackButton to="/" theme={resolvedTheme} />
      
      <PageHeader 
        theme={resolvedTheme}
        badge="F1 Pro Grid"
        title="Grid 2026"
        subtitle="Conheça os pilotos que vão fazer história nesta temporada"
      />

      {/* Grid de Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
        {DRIVERS_DATA.map((driver) => {
          const VibeIcon = driver.vibes?.[0]?.icon;
          const driverId = normalizeSlug(driver.id || driver.name || '');

          return (
            <Link 
              key={driver.id || driver.number} 
              href={`/drivers/${driverId}`} 
              style={{ backgroundColor: driver.color }}
              className={`
                group relative overflow-hidden rounded-[2.5rem] h-[480px] cursor-pointer 
                transition-all duration-700 ease-out hover:-translate-y-4
                flex flex-col justify-end
                ${!isLight 
                  ? 'border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_50px_rgba(var(--driver-glow),0.4)]' 
                  : 'shadow-[0_20px_50px_-15px_rgba(255,182,193,0.6)] hover:shadow-cottage-rosy'
                }
              `}
            >
              {/* Overlay de brilho sutil */}
              <div 
                className="absolute inset-0 opacity-[0.1] group-hover:opacity-30 transition-opacity duration-1000"
                style={{ backgroundColor: driver.color }}
              />

              {/* Imagem do Piloto */}
              {driver.image && (
                <img 
                  src={driver.image} 
                  alt={driver.name} 
                  className={`absolute inset-0 w-full h-full object-cover object-top transition-all duration-1000 ease-out group-hover:scale-110 group-hover:brightness-110 z-0 ${
                    !isLight ? 'grayscale-[30%] group-hover:grayscale-0' : ''
                  }`} 
                />
              )}
              
              {/* Overlay de Gradiente */}
              <div className={`absolute inset-0 z-10 bg-gradient-to-t transition-all duration-500 ${
                isLight 
                  ? 'from-white via-white/10 to-transparent group-hover:from-cottage-beige/90' 
                  : 'from-[#050510] via-transparent to-transparent group-hover:from-[#050510]/80'
              }`} />

              {/* Ícone de Vibe */}
              {VibeIcon && (
                <div className={`absolute top-6 right-6 backdrop-blur-xl p-3.5 rounded-[1.2rem] text-white shadow-xl z-20 border transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 ${
                  isLight ? 'bg-white/20 border-white/40' : 'bg-black/30 border-white/10'
                }`}>
                  <VibeIcon size={20} strokeWidth={2} />
                </div>
              )}

              {/* Informações do Piloto */}
              <div className="relative z-20 p-8 flex flex-col items-start transform transition-transform duration-700 group-hover:-translate-y-2">
                
                {/* Número Ghost */}
                <span className={`absolute -right-4 -bottom-12 text-[140px] font-black select-none pointer-events-none transform rotate-6 group-hover:rotate-0 transition-all duration-1000 ${
                  isLight ? 'text-white/40' : 'text-white/5'
                }`}>
                  {driver.number}
                </span>

                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-[9px] font-black uppercase tracking-[0.25em] px-3 py-1 rounded-lg backdrop-blur-md border shadow-sm ${
                    isLight ? 'bg-white/60 border-white/50 text-gray-800' : 'bg-black/40 border-white/10 text-white'
                  }`}>
                    {driver.team}
                  </span>
                </div>

                <h3 className={`text-4xl font-black leading-[0.85] uppercase tracking-tighter drop-shadow-md ${
                  isLight ? 'text-gray-900' : 'text-white text-shadow-neon'
                }`}>
                  {driver.name.split(' ').map((n, i) => (
                    <span key={i} className="block">{n}</span>
                  ))}
                </h3>
                
                {/* Detalhe estético inferior */}
                <div 
                  className={`w-12 h-1.5 rounded-full mt-5 transition-all duration-700 group-hover:w-full shadow-sm ${
                    !isLight && 'shadow-[0_0_10px_currentColor]'
                  }`}
                  style={{ backgroundColor: driver.color, color: driver.color }}
                />
              </div>
            </Link>
          );
        })}
      </div>
    </PageContainer>
  );
};

export default DriversPage;
