import React from 'react';
import { useParams } from 'react-router-dom';
import { BackButton } from '../components/UI';
import { ARTICLES_DATA, NEWS_DATA, MANIFESTO_POST } from '../data';

const ArticleDetail = ({ theme }) => {
  const { id } = useParams();
  const isLight = theme === 'light';
  // Busca no manifesto ou nos artigos normais ou nas notícias
  const article = id === 'manifesto' ? MANIFESTO_POST : (ARTICLES_DATA.find(a => a.id === id) || NEWS_DATA.find(n => n.id === id));

  if (!article) return <div>Artigo não encontrado</div>;

  return (
    <div className={`max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20`}>
      <BackButton to={id === 'manifesto' ? '/' : '/articles'} theme={theme} />
      <header className="mb-8">
        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${isLight ? 'bg-[#F7B8C8] text-white' : 'border border-[#bd00ff] text-[#bd00ff]'}`}>{article.category}</span>
        <h1 className={`text-4xl md:text-5xl font-black mt-4 mb-4 ${isLight ? 'text-gray-800' : 'text-white'}`}>{article.title}</h1>
        {article.time && <div className={`flex items-center gap-3 text-sm ${isLight?'text-gray-500':'text-gray-400'}`}><span>{article.time}</span><span>•</span><span>Por {article.author}</span></div>}
      </header>
      {article.image && <div className={`w-full aspect-video rounded-3xl bg-gray-200 mb-8 overflow-hidden shadow-lg`}><img src={article.image} className="w-full h-full object-cover" alt="Cover" /></div>}
      <article className={`prose max-w-none leading-relaxed text-lg ${isLight ? 'prose-gray text-gray-600' : 'prose-invert text-gray-300'}`} dangerouslySetInnerHTML={{ __html: article.content }} />
    </div>
  );
}

export default ArticleDetail;