import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { BackButton } from '../components/UI';
import { ARTICLES_DATA } from '../data';

const ArticlesPage = ({ theme }) => {
  const isLight = theme === 'light';
  
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-12">
      <BackButton to="/" theme={theme} />
      
      <div className="mb-10 text-center">
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-3 ${isLight ? 'bg-[#F7B8C8] text-white' : 'border border-[#ff0055] text-[#ff0055]'}`}>
          Blog & Opinião
        </span>
        <h2 className={`text-4xl md:text-6xl font-black ${isLight ? 'text-gray-800' : 'text-white'}`}>
          Deep Dives
        </h2>
        <p className={`mt-2 ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>
          Análises técnicas, desabafos de fã e histórias do paddock.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {ARTICLES_DATA.map((article) => (
          <Link 
            key={article.id} 
            to={`/articles/${article.id}`}
            className={`group cursor-pointer rounded-3xl overflow-hidden transition-all hover:-translate-y-1
              ${isLight ? 'bg-white shadow-md hover:shadow-xl' : 'bg-[#121217] border border-[#333] hover:border-[#bd00ff]'}
            `}
          >
            <div className="md:flex">
               <div className="md:w-2/5 h-48 md:h-auto relative overflow-hidden">
                 <img 
                   src={article.image} 
                   alt={article.title} 
                   className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                 />
               </div>
               <div className="p-6 md:p-8 flex-1 flex flex-col justify-center">
                 <div className="flex items-center gap-3 mb-3">
                    <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded ${isLight ? 'bg-gray-100 text-gray-600' : 'bg-[#0a0a12] text-gray-400'}`}>
                      {article.category}
                    </span>
                    <span className={`text-xs ${isLight ? 'text-gray-400' : 'text-gray-500'}`}>
                      {article.time} • por {article.author}
                    </span>
                 </div>
                 <h3 className={`text-2xl font-black leading-tight mb-3 ${isLight ? 'text-gray-800 group-hover:text-[#D8C4F0]' : 'text-white group-hover:text-[#bd00ff]'}`}>
                   {article.title}
                 </h3>
                 <p className={`text-sm leading-relaxed line-clamp-2 ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>
                   {article.excerpt}
                 </p>
                 <div className={`mt-6 flex items-center gap-2 text-sm font-bold ${isLight ? 'text-gray-800' : 'text-white'}`}>
                    Ler Artigo <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                 </div>
               </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ArticlesPage;