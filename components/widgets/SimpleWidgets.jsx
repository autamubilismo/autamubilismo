'use client';
import React from 'react';
import { Sparkles, MessageSquare, Zap } from 'lucide-react';

export const ContactWidget = ({ theme }) => {
  const isLight = theme === 'light';
  
  return (
    <div className="h-full flex flex-col items-center justify-center text-center p-4 relative z-10 group">
      <div className={`p-4 rounded-full mb-3 transition-transform duration-300 group-hover:rotate-12 ${isLight ? 'bg-cottage-beige text-cottage-rosy' : 'bg-black/40 text-cyan-400 border border-cyan-500/20'}`}>
        <MessageSquare size={28} />
      </div>
      <h3 className={`font-black text-lg ${isLight ? 'text-gray-800' : 'text-white'}`}>Contato</h3>
      <p className={`text-[10px] font-bold uppercase tracking-widest opacity-60 ${isLight ? 'text-gray-500' : 'text-cyan-200'}`}>
        Mande um alô
      </p>
    </div>
  );
};

export const CuriosityWidget = ({ theme }) => {
  const isLight = theme === 'light';
  const [isOpen, setIsOpen] = useState(false);
  const [currentCuriosity, setCurrentCuriosity] = useState(null);

  // Selecionar uma curiosidade aleatória ao montar o componente ou atualizar a página
  useEffect(() => {
    const randomCuriosity = CURIOSITIES_DATA[Math.floor(Math.random() * CURIOSITIES_DATA.length)];
    setCurrentCuriosity(randomCuriosity);
  }, []);

  // Função para pegar uma nova curiosidade aleatória
  const getNewCuriosity = () => {
    const randomCuriosity = CURIOSITIES_DATA[Math.floor(Math.random() * CURIOSITIES_DATA.length)];
    setCurrentCuriosity(randomCuriosity);
  };

  // Estado fechado - Preview
  if (!isOpen) {
    return (
      <div 
        onClick={() => setIsOpen(true)}
        className="h-full flex flex-col items-center justify-center text-center p-6 relative z-10 cursor-pointer group"
      >
        {/* Efeito de fundo ao hover */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
          style={{
            background: isLight 
              ? 'radial-gradient(circle at center, rgba(234, 179, 8, 0.1) 0%, transparent 70%)'
              : 'radial-gradient(circle at center, rgba(234, 179, 8, 0.2) 0%, transparent 70%)'
          }}
        />

        <div className={`p-4 rounded-full mb-3 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12 ${
          isLight ? 'bg-yellow-100 text-yellow-500' : 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/30'
        }`}>
          <Zap size={28} className="fill-current" />
        </div>

        <h4 className={`font-black text-lg leading-tight mb-1 ${isLight ? 'text-gray-800' : 'text-white'}`}>
          Você Sabia?
        </h4>

        {currentCuriosity && (
          <p className={`text-xs font-bold uppercase tracking-wider mb-2 ${
            isLight ? 'text-yellow-600' : 'text-yellow-400'
          }`}>
            {currentCuriosity.category}
          </p>
        )}

        <span className={`text-[10px] uppercase font-bold tracking-widest opacity-60 ${
          isLight ? 'text-gray-500' : 'text-gray-400'
        }`}>
          Clique para descobrir
        </span>
      </div>
    );
  }

  // Estado aberto - Mostrando a curiosidade
  return (
    <div className="h-full flex flex-col p-6 relative z-10 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-xl ${
            isLight ? 'bg-yellow-100 text-yellow-500' : 'bg-yellow-500/10 text-yellow-400'
          }`}>
            <Zap size={20} className="fill-current" />
          </div>
          <div>
            <h3 className={`text-sm font-black uppercase leading-none ${
              isLight ? 'text-gray-800' : 'text-white'
            }`}>
              Você Sabia?
            </h3>
            {currentCuriosity && (
              <p className={`text-[9px] font-bold uppercase tracking-wider opacity-60 mt-0.5 ${
                isLight ? 'text-gray-500' : 'text-gray-400'
              }`}>
                {currentCuriosity.category}
              </p>
            )}
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

      {/* Conteúdo da Curiosidade */}
      {currentCuriosity && (
        <div className="flex-1 flex flex-col justify-center">
          <div className={`p-6 rounded-2xl mb-4 ${
            isLight 
              ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-200'
              : 'bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border-2 border-yellow-500/30'
          }`}>
            <h4 className={`text-lg font-black mb-3 ${
              isLight ? 'text-gray-800' : 'text-yellow-400'
            }`}>
              {currentCuriosity.title}
            </h4>
            <p className={`text-sm font-medium leading-relaxed ${
              isLight ? 'text-gray-700' : 'text-gray-300'
            }`}>
              {currentCuriosity.fact}
            </p>
          </div>

          {/* Botão para nova curiosidade */}
          <button
            onClick={getNewCuriosity}
            className={`w-full py-3 rounded-xl font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 group ${
              isLight
                ? 'bg-yellow-500 text-white hover:bg-yellow-600 shadow-lg hover:shadow-xl'
                : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/50 hover:bg-yellow-500/30 hover:border-yellow-400'
            }`}
          >
            <RefreshCw size={14} className="group-hover:rotate-180 transition-transform duration-500" />
            Nova Curiosidade
          </button>
        </div>
      )}

      {/* Badge de contador */}
      <div className={`mt-4 text-center text-[9px] font-bold uppercase tracking-wider opacity-50 ${
        isLight ? 'text-gray-400' : 'text-gray-500'
      }`}>
        {CURIOSITIES_DATA.length} curiosidades disponíveis
      </div>
    </div>
  );
};