import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp, MessageSquare } from 'lucide-react';
import { BackButton } from '../components/UI';
import { GLOSSARY_DATA } from '../data';

const GlossaryPage = ({ theme }) => {
  const isLight = theme === 'light';
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [expandedId, setExpandedId] = useState(null);
  const categories = ['Todos', ...new Set(GLOSSARY_DATA.map(item => item.category))];
  
  const filteredTerms = GLOSSARY_DATA.filter(item => {
    const matchesSearch = item.term.toLowerCase().includes(searchTerm.toLowerCase()) || item.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Todos' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  const toggleExpand = (id) => setExpandedId(expandedId === id ? null : id);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-12">
      <BackButton to="/" theme={theme} />
      <div className="mb-8"><h2 className={`text-4xl font-black mb-2 ${isLight ? 'text-gray-800' : 'text-white'}`}>Dicionário F1</h2></div>
      <div className={`sticky top-4 z-30 p-4 rounded-2xl shadow-lg mb-8 backdrop-blur-md ${isLight ? 'bg-white/90 border border-gray-100' : 'bg-[#121217]/90 border border-[#333]'}`}><div className={`flex items-center gap-3 px-4 py-3 rounded-xl mb-4 transition-all ${isLight ? 'bg-gray-100 focus-within:bg-white focus-within:ring-2 ring-[#D8C4F0]' : 'bg-[#0a0a12] focus-within:border-[#00fff2] border border-transparent'}`}><Search size={20} className={isLight ? 'text-gray-400' : 'text-gray-500'} /><input type="text" placeholder="Busque por termos..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className={`bg-transparent w-full outline-none font-medium ${isLight ? 'text-gray-700' : 'text-white'}`} /></div><div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">{categories.map(cat => (<button key={cat} onClick={() => setSelectedCategory(cat)} className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${selectedCategory === cat ? (isLight ? 'bg-[#D8C4F0] text-white shadow-md' : 'bg-[#00fff2] text-black shadow-[0_0_10px_#00fff2]') : (isLight ? 'bg-gray-100 text-gray-500 hover:bg-gray-200' : 'bg-[#1a1a20] border border-[#333] text-gray-400 hover:border-[#00fff2]')}`}>{cat}</button>))}</div></div>
      <div className="space-y-3">{filteredTerms.length > 0 ? (filteredTerms.map((item) => {const isExpanded = expandedId === item.id;return (<div key={item.id} onClick={() => toggleExpand(item.id)} className={`group rounded-2xl transition-all cursor-pointer overflow-hidden border ${isLight ? 'bg-white border-transparent shadow-sm hover:shadow-md' : `bg-[#121217] ${isExpanded ? 'border-[#fe88dd]' : 'border-[#333]'} hover:border-[#fe88dd]/50`}`}><div className="p-5 flex items-center justify-between"><div className="flex items-center gap-4"><div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold ${isLight ? 'bg-[#F7B8C8]/20 text-[#F7B8C8]' : 'bg-[#fe88dd]/10 text-[#fe88dd]'}`}>{item.term.charAt(0)}</div><div><h3 className={`text-lg font-bold ${isLight ? 'text-gray-800' : 'text-white'}`}>{item.term}</h3><span className={`text-xs font-bold uppercase tracking-wide ${isLight ? 'text-gray-400' : 'text-gray-500'}`}>{item.category}</span></div></div><div className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>{isExpanded ? <ChevronUp size={20} className={isLight ? 'text-[#D8C4F0]' : 'text-[#00fff2]'} /> : <ChevronDown size={20} className="text-gray-400" />}</div></div><div className={`px-5 overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-48 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}><p className={`text-sm leading-relaxed mb-3 ${isLight ? 'text-gray-600' : 'text-gray-300'}`}>{item.definition}</p><div className={`p-3 rounded-xl text-xs font-medium italic flex gap-2 ${isLight ? 'bg-gray-50 text-gray-500' : 'bg-[#0a0a12] text-gray-400'}`}><MessageSquare size={14} className="shrink-0 mt-0.5" />"{item.example}"</div></div></div>);})) : (<div className="text-center py-12 opacity-50"><Search size={48} className="mx-auto mb-4" /><p>Nenhum termo encontrado.</p></div>)}</div>
    </div>
  );
};

export default GlossaryPage;