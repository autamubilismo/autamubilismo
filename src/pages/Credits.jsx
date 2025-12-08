import React from 'react';
import { Heart, Code, Palette, Database } from 'lucide-react';
// Removido o LogoHelmet, pois vamos usar a imagem direta agora
import { BackButton } from '../components/UI';

const CreditsPage = ({ theme }) => {
  const isLight = theme === 'light';
  
  const cardClass = isLight 
    ? 'bg-white shadow-xl' 
    : 'bg-[#121217] border border-[#333]';

  // Lógica dos Filtros para o Capacete
  const helmetFilterClass = isLight
    // Light Mode: Aplica um filtro sépia+matiz para deixar rosado/roxo suave e uma sombra colorida
    ? 'filter sepia saturate-[2.5] hue-rotate-[290deg] brightness-90 drop-shadow-[0_8px_16px_rgba(247,184,200,0.5)] opacity-80'
    // Dark Mode: Aumenta o brilho e aplica uma sombra neon roxa intensa
    : 'filter brightness-[1.8] drop-shadow-[0_0_35px_#bd00ff] saturate-[1.2]';

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-12 min-h-[80vh] flex flex-col">
      <BackButton to="/" theme={theme} />

      <div className="flex-1 flex items-center justify-center">
        <div className={`max-w-2xl w-full p-10 md:p-16 rounded-[3rem] text-center ${cardClass}`}>
            
            {/* NOVO CAPACETE CENTRALIZADO COM FILTROS */}
            <div className="flex justify-center mb-8">
                <img 
                    src="/img/web/helmet.png" 
                    alt="Capacete Autamubilismo" 
                    // Classes para tamanho, transição suave e aplicação do filtro dinâmico
                    className={`w-32 h-32 md:w-40 md:h-40 object-contain transition-all duration-700 ${helmetFilterClass}`}
                />
            </div>

            <h1 className={`text-3xl md:text-5xl font-black mb-6 ${isLight ? 'text-gray-800' : 'text-white'}`}>
                Feito com paixão.
            </h1>
            
            <p className={`text-lg mb-10 leading-relaxed ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>
                O <strong>Autamubilismo</strong> é um projeto independente criado para trazer uma nova visão sobre a Fórmula 1.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                <div className="flex flex-col items-center gap-2">
                    <div className={`p-3 rounded-full ${isLight ? 'bg-blue-50 text-blue-500' : 'bg-blue-500/10 text-blue-400'}`}><Code size={20} /></div>
                    <span className={`text-xs font-bold uppercase ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>React + Vite</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <div className={`p-3 rounded-full ${isLight ? 'bg-teal-50 text-teal-500' : 'bg-teal-500/10 text-teal-400'}`}><Palette size={20} /></div>
                    <span className={`text-xs font-bold uppercase ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>Tailwind</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <div className={`p-3 rounded-full ${isLight ? 'bg-purple-50 text-purple-500' : 'bg-purple-500/10 text-purple-400'}`}><Database size={20} /></div>
                    <span className={`text-xs font-bold uppercase ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>Sanity.io</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <div className={`p-3 rounded-full ${isLight ? 'bg-pink-50 text-pink-500' : 'bg-pink-500/10 text-pink-400'}`}><Heart size={20} /></div>
                    <span className={`text-xs font-bold uppercase ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>Por Tamu</span>
                </div>
            </div>

            <p className={`text-xs opacity-50 ${isLight ? 'text-gray-400' : 'text-gray-600'}`}>
                © 2025 Autamubilismo. Todos os direitos reservados.
            </p>
        </div>
      </div>
    </div>
  );
};

export default CreditsPage;