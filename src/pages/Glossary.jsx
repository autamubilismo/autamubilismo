import React, { useState } from 'react';
import { Search, ChevronRight, ArrowLeft, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
import { BackButton } from '../components/UI';
import { GLOSSARY_SETS } from '../data';

const GlossaryPage = ({ theme }) => {
  const isLight = theme === 'light';
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

  const cardBg = isLight ? 'bg-white border-2 border-transparent hover:border-gray-200 shadow-lg' : 'bg-[#1a1a20] border border-[#333] hover:border-[#fe88dd]/50';
  const textMain = isLight ? 'text-gray-800' : 'text-white';
  const textSub = isLight ? 'text-gray-500' : 'text-gray-400';

  // --- MENU DE CATEGORIAS ---
  if (!selectedSet) {
    return (
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-12">
        <BackButton to="/" theme={theme} />
        
        <div className="mb-10 px-2 text-center md:text-left">
          <h2 className={`text-4xl md:text-6xl font-black mb-2 ${textMain}`} style={{ fontFamily: "'Russo One', sans-serif" }}>
            Enciclopédia F1
          </h2>
          <p className={textSub}>Domine o vocabulário do paddock.</p>
        </div>

        {/* Busca Global */}
        <div className={`relative mb-8 ${isLight ? 'bg-white' : 'bg-[#1a1a20] border border-[#333]'} p-4 rounded-2xl shadow-sm flex items-center gap-3`}>
            <Search className={isLight ? 'text-gray-400' : 'text-gray-500'} />
            <input 
                type="text" 
                placeholder="Buscar categorias..." 
                className={`bg-transparent w-full outline-none font-bold ${textMain}`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSets.map((set) => {
            const Icon = set.icon || BookOpen;
            return (
              <div 
                key={set.id} 
                onClick={() => { setSelectedSet(set); setSearchTerm(''); }}
                className={`group cursor-pointer p-8 rounded-[2.5rem] flex flex-col justify-between transition-all hover:-translate-y-1 ${cardBg}`}
              >
                <div className="mb-6">
                   <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-colors`} style={{ backgroundColor: isLight ? `${set.color}20` : `${set.color}15`, color: set.color }}>
                      <Icon size={28} />
                   </div>
                   <h3 className={`text-2xl font-black mb-2 ${textMain}`}>{set.title}</h3>
                   <p className={`text-sm font-medium leading-relaxed ${textSub}`}>{set.description}</p>
                </div>
                
                <div className="flex items-center justify-between border-t border-gray-500/10 pt-4">
                   <span className={`text-xs font-bold uppercase tracking-widest opacity-60 ${textMain}`}>
                     {set.items.length} Termos
                   </span>
                   <div className={`p-2 rounded-full transition-transform group-hover:translate-x-2`} style={{ color: set.color }}>
                      <ChevronRight />
                   </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // --- LISTA DE TERMOS ---
  return (
    <div className="animate-in fade-in slide-in-from-right duration-500 pb-12">
      <button 
        onClick={() => { setSelectedSet(null); setSearchTerm(''); }}
        className={`group mb-8 inline-flex items-center gap-2 text-sm font-bold transition-colors ${isLight ? 'text-gray-500 hover:text-[#D8C4F0]' : 'text-gray-400 hover:text-[#fe88dd]'}`}
      >
         <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" /> Voltar para Categorias
      </button>

      <div className="flex items-center gap-4 mb-8">
         <div className={`p-3 rounded-2xl`} style={{ backgroundColor: isLight ? `${selectedSet.color}20` : `${selectedSet.color}15`, color: selectedSet.color }}>
            {selectedSet.icon && <selectedSet.icon size={32} />}
         </div>
         <div><h2 className={`text-3xl md:text-5xl font-black ${textMain}`}>{selectedSet.title}</h2></div>
      </div>

      <div className={`relative mb-8 ${isLight ? 'bg-white' : 'bg-[#1a1a20] border border-[#333]'} p-4 rounded-2xl shadow-sm flex items-center gap-3`}>
          <Search className={isLight ? 'text-gray-400' : 'text-gray-500'} />
          <input 
              type="text" 
              placeholder={`Pesquisar em ${selectedSet.title}...`} 
              className={`bg-transparent w-full outline-none font-bold ${textMain}`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
          />
      </div>

      <div className="space-y-4">
          {filteredTerms.length > 0 ? (
            filteredTerms.map((item) => {
                const isExpanded = expandedTermId === item.id;
                return (
                    <div 
                      key={item.id} 
                      onClick={() => setExpandedTermId(isExpanded ? null : item.id)}
                      className={`group cursor-pointer rounded-3xl overflow-hidden transition-all border ${isLight ? 'bg-white border-transparent hover:border-gray-200 shadow-sm' : `bg-[#1a1a20] ${isExpanded ? 'border-[#fe88dd]' : 'border-[#333] hover:border-[#fe88dd]/50'}`}`}
                    >
                        <div className="p-6 flex items-center justify-between">
                            <h3 className={`text-lg font-bold ${isExpanded ? (isLight ? 'text-purple-600' : 'text-[#fe88dd]') : textMain}`}>{item.term}</h3>
                            {isExpanded ? <ChevronUp size={20} className={isLight?'text-gray-400':'text-gray-500'} /> : <ChevronDown size={20} className={isLight?'text-gray-400':'text-gray-500'} />}
                        </div>
                        
                        {/* Conteúdo Expansível */}
                        <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                            <p className={`text-base leading-relaxed ${textSub}`}>{item.definition}</p>
                        </div>
                    </div>
                );
            })
          ) : (
            <div className={`text-center py-12 ${textSub}`}><p>Nenhum termo encontrado.</p></div>
          )}
      </div>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');');`}</style>
    </div>
  );
};

export default GlossaryPage;