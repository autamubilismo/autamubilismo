'use client';

import { useState } from 'react';
import { Search, ChevronRight, ArrowLeft, BookOpen, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { BackButton } from '../../components/ui';
import { GLOSSARY_SETS } from '../../data';
import { useTheme } from '@/components/layout/ThemeContext';

const GlossaryPage = () => {
  const { theme } = useTheme();
  const resolvedTheme = theme || 'light';
  const isLight = resolvedTheme === 'light';
  const [selectedSet, setSelectedSet] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedTermId, setExpandedTermId] = useState(null);

  // Garante que GLOSSARY_SETS existe (caso o data.js ainda não tenha atualizado)
  const sets = GLOSSARY_SETS || [];

  const filteredSets = sets.filter(set => 
    set.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    set.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredTerms = selectedSet 
    ? selectedSet.items.filter(item => 
        item.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
        item.definition.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  // --- CLASSES DE ESTILO (Refinadas para Girlie & Vaporwave) ---
  const cardBg = isLight 
    ? 'bg-white/70 backdrop-blur-md border border-pink-100 hover:border-pink-300 shadow-[0_10px_30px_rgba(255,182,193,0.3)]' 
    : 'bg-[#121217]/80 backdrop-blur-xl border border-white/10 hover:border-cyan-500/50 shadow-[0_0_20px_rgba(0,255,242,0.1)] hover:shadow-[0_0_30px_rgba(0,255,242,0.2)]';
  
  const textMain = isLight ? 'text-gray-900' : 'text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.6)]';
  const textSub = isLight ? 'text-gray-500' : 'text-cyan-100/70';
  const accentText = isLight ? 'text-pink-500' : 'text-fuchsia-400 drop-shadow-[0_0_5px_rgba(232,121,249,0.8)]';

  // --- PADRÕES DE FUNDO ---
  const lightPattern = {
    backgroundColor: '#FFF5F8',
    backgroundImage: `
      radial-gradient(at 0% 0%, rgba(247, 184, 200, 0.3) 0px, transparent 50%),
      radial-gradient(at 100% 0%, rgba(216, 196, 240, 0.3) 0px, transparent 50%),
      conic-gradient(from 0deg at 50% 50%, rgba(247, 184, 200, 0.1) 0deg, transparent 60deg, rgba(216, 196, 240, 0.1) 120deg, transparent 180deg, rgba(247, 184, 200, 0.1) 240deg, transparent 300deg, rgba(216, 196, 240, 0.1) 360deg)
    `,
    backgroundSize: '100% 100%'
  };

  const darkPattern = {
    backgroundColor: '#050510',
    backgroundImage: `
      linear-gradient(rgba(0, 255, 242, 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(189, 0, 255, 0.05) 1px, transparent 1px)
    `,
    backgroundSize: '40px 40px'
  };

  // --- MENU DE CATEGORIAS ---
  if (!selectedSet) {
    return (
      <div className={`min-h-screen p-4 md:p-8 animate-in fade-in slide-in-from-bottom-4 duration-500 font-sans`} style={isLight ? lightPattern : darkPattern}>
        
        {/* Luz de Fundo Decorativa */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden mix-blend-screen">
           <div className={`absolute top-[-20%] left-[-10%] w-[800px] h-[800px] rounded-full blur-[120px] opacity-20 ${isLight ? 'bg-pink-200' : 'bg-[#bd00ff]/30 animate-pulse'}`} />
           <div className={`absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[100px] opacity-20 ${isLight ? 'bg-purple-200' : 'bg-[#00fff2]/20 animate-pulse'}`} />
           {!isLight && <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent shadow-[0_0_20px_cyan]" />}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full pb-12">
          <BackButton to="/" theme={resolvedTheme} />
          
          <div className="mb-12 text-center md:text-left relative">
            <span className={`inline-block px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4 border ${isLight ? 'bg-white/50 border-pink-200 text-pink-600' : 'bg-[#bd00ff]/10 border-[#bd00ff]/30 text-fuchsia-400 shadow-[0_0_10px_rgba(189,0,255,0.3)]'}`}>
               Glossário
            </span>
            <h2 className={`text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 ${isLight ? textMain : 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-fuchsia-500 drop-shadow-[0_0_10px_rgba(0,255,242,0.4)]'}`} style={{ fontFamily: "'Russo One', sans-serif" }}>
              Enciclopédia F1
            </h2>
            <p className={`text-lg md:text-xl font-medium max-w-2xl ${textSub}`}>
              Domine o vocabulário do paddock, de A a Z.
            </p>
          </div>

          {/* Busca Global */}
          <div className={`relative mb-12 p-1 rounded-[2rem] bg-gradient-to-r ${isLight ? 'from-pink-100 via-white to-purple-100' : 'from-cyan-500 via-fuchsia-500 to-cyan-500'} shadow-lg`}>
             <div className={`relative ${isLight ? 'bg-white' : 'bg-[#09090c]'} p-4 rounded-[1.8rem] flex items-center gap-4 transition-all focus-within:shadow-inner`}>
                <Search className={`w-6 h-6 ${isLight ? 'text-pink-400' : 'text-cyan-400'}`} />
                <input 
                  type="text" 
                  placeholder="Buscar categorias..." 
                  className={`bg-transparent w-full outline-none font-bold text-lg ${isLight ? 'text-gray-800 placeholder-pink-300' : 'text-white placeholder-gray-600'}`}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {filteredSets.map((set) => {
              const Icon = set.icon || BookOpen;
              return (
                <div 
                  key={set.id} 
                  onClick={() => { setSelectedSet(set); setSearchTerm(''); }}
                  className={`group cursor-pointer p-8 md:p-10 rounded-[2.5rem] flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 ${cardBg}`}
                >
                  <div className="mb-8 relative">
                     {/* Glow icon background */}
                     <div className={`absolute -inset-4 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 ${isLight ? 'bg-pink-300' : 'bg-fuchsia-600'}`} />
                     
                     <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 shadow-lg relative z-10 ${isLight ? 'bg-white text-pink-500 ring-1 ring-pink-100' : 'bg-[#1a1a20] text-cyan-400 border border-cyan-500/30 shadow-[0_0_15px_cyan]'}`}>
                        <Icon size={32} strokeWidth={1.5} />
                     </div>
                     
                     <h3 className={`text-3xl font-black uppercase mb-3 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${isLight ? 'from-pink-500 to-purple-600' : 'from-cyan-400 to-fuchsia-500'} transition-all ${textMain}`}>
                        {set.title}
                     </h3>
                     <p className={`text-sm md:text-base font-medium leading-relaxed ${textSub}`}>
                        {set.description}
                     </p>
                  </div>
                  
                  <div className={`flex items-center justify-between border-t pt-6 ${isLight ? 'border-pink-100' : 'border-white/10'}`}>
                     <span className={`text-[10px] font-black uppercase tracking-[0.25em] opacity-60 ${textMain}`}>
                       {set.items.length} Termos
                     </span>
                     <div className={`p-3 rounded-full transition-all duration-300 transform group-hover:translate-x-2 ${isLight ? 'bg-pink-50 text-pink-500' : 'bg-white/5 text-cyan-400 group-hover:bg-cyan-500/20 group-hover:shadow-[0_0_10px_cyan]'}`}>
                        <ChevronRight size={20} />
                     </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // --- LISTA DE TERMOS ---
  return (
    <div className={`min-h-screen p-4 md:p-8 animate-in fade-in slide-in-from-right duration-500 font-sans`} style={isLight ? lightPattern : darkPattern}>
      
      {/* Luz de Fundo Decorativa (Detalhe) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden mix-blend-screen">
         <div className={`absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full blur-[100px] opacity-20 ${isLight ? 'bg-purple-200' : 'bg-cyan-900/40 animate-pulse'}`} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full pb-12">
        <button 
          onClick={() => { setSelectedSet(null); setSearchTerm(''); }}
          className={`group mb-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-all px-5 py-2.5 rounded-full ${
            isLight 
              ? 'bg-white/50 text-gray-500 hover:text-pink-600 hover:bg-pink-50 border border-pink-100' 
              : 'bg-black/40 text-gray-400 hover:text-cyan-400 hover:bg-cyan-900/20 border border-white/10 hover:border-cyan-500/50'
          }`}
        >
           <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" /> 
           Voltar para Categorias
        </button>

        <div className="flex flex-col md:flex-row md:items-center gap-6 mb-12">
           <div className={`w-20 h-20 rounded-[1.5rem] flex items-center justify-center shadow-xl ${isLight ? 'bg-white text-pink-500 ring-4 ring-pink-50' : 'bg-[#1a1a20] text-fuchsia-400 border border-fuchsia-500/30 shadow-[0_0_20px_rgba(232,121,249,0.3)]'}`}>
              {selectedSet.icon && <selectedSet.icon size={40} strokeWidth={1.5} />}
           </div>
           <div>
              <div className={`flex items-center gap-2 mb-2 text-[10px] font-black uppercase tracking-[0.25em] ${isLight ? 'text-purple-400' : 'text-cyan-400'}`}>
                 <Sparkles size={12} className="animate-spin-slow" /> Categoria
              </div>
              <h2 className={`text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none ${isLight ? textMain : 'text-transparent bg-clip-text bg-gradient-to-r from-white to-fuchsia-200 drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]'}`}>
                 {selectedSet.title}
              </h2>
           </div>
        </div>

        {/* Busca Interna */}
        <div className={`relative mb-10 p-1 rounded-[2rem] bg-gradient-to-r ${isLight ? 'from-pink-100 to-white' : 'from-[#1a1a20] to-[#0a0a0c] border border-white/10'}`}>
           <div className={`relative ${isLight ? 'bg-white/80' : 'bg-[#09090c]/80'} backdrop-blur-md p-4 rounded-[1.8rem] flex items-center gap-4 shadow-sm`}>
              <Search className={`w-5 h-5 ${isLight ? 'text-gray-400' : 'text-gray-500'}`} />
              <input 
                type="text" 
                placeholder={`Pesquisar em ${selectedSet.title}...`} 
                className={`bg-transparent w-full outline-none font-bold ${isLight ? 'text-gray-800 placeholder-gray-400' : 'text-white placeholder-gray-600'}`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
           </div>
        </div>

        <div className="space-y-4">
           {filteredTerms.length > 0 ? (
             filteredTerms.map((item) => {
                 const isExpanded = expandedTermId === item.id;
                 return (
                     <div 
                       key={item.id} 
                       onClick={() => setExpandedTermId(isExpanded ? null : item.id)}
                       className={`group cursor-pointer rounded-[1.5rem] overflow-hidden transition-all duration-500 border ${
                         isLight 
                           ? `bg-white/60 hover:bg-white border-pink-50 hover:border-pink-200 ${isExpanded ? 'shadow-lg ring-1 ring-pink-100 bg-white' : 'shadow-sm'}` 
                           : `bg-[#121217]/60 hover:bg-[#1a1a20] border-white/5 hover:border-cyan-500/30 ${isExpanded ? 'border-cyan-500/50 shadow-[0_0_20px_rgba(0,255,242,0.15)]' : ''}`
                       }`}
                     >
                         <div className="p-6 md:p-7 flex items-center justify-between">
                            <h3 className={`text-lg md:text-xl font-bold tracking-tight transition-colors ${isExpanded ? accentText : textMain}`}>
                               {item.term}
                            </h3>
                            <div className={`p-2 rounded-full transition-all duration-300 ${isExpanded ? (isLight ? 'bg-pink-100 text-pink-600 rotate-180' : 'bg-cyan-900/30 text-cyan-400 rotate-180') : (isLight ? 'bg-gray-50 text-gray-400 group-hover:bg-pink-50 group-hover:text-pink-400' : 'bg-white/5 text-gray-500 group-hover:text-cyan-200')}`}>
                               <ChevronDown size={20} />
                            </div>
                         </div>
                         
                         {/* Conteúdo Expansível */}
                         <div className={`px-6 md:px-7 overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-96 pb-8 opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className={`h-px w-full mb-6 ${isLight ? 'bg-pink-100' : 'bg-white/5'}`} />
                            <p className={`text-base md:text-lg leading-relaxed font-medium ${textSub}`}>
                               {item.definition}
                            </p>
                         </div>
                     </div>
                 );
             })
           ) : (
             <div className={`text-center py-20 rounded-[2rem] border-2 border-dashed ${isLight ? 'border-gray-200 text-gray-400' : 'border-white/10 text-gray-600'}`}>
                <p className="font-bold text-lg">Nenhum termo encontrado.</p>
                <p className="text-sm mt-2 opacity-60">Tente buscar por outra palavra-chave.</p>
             </div>
           )}
        </div>
      </div>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Russo+One&display=swap');`}</style>
    </div>
  );
};

export default GlossaryPage;
