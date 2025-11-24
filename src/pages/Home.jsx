import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Coffee, BookOpenText } from 'lucide-react';
import { BentoCard, NextRaceWidget, NewsWidget, FanzoneWidget, CuriosityWidget, NewsletterWidget } from '../components/UI';

const Home = ({ theme }) => {
  const isLight = theme === 'light';
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(180px,auto)] animate-in fade-in zoom-in duration-300">
      <BentoCard theme={theme} to="/articles/manifesto" className="md:col-span-2 md:row-span-2 min-h-[400px]">
         <div className="space-y-4"><span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase ${isLight ? 'bg-[#F7B8C8] text-white' : 'border border-[#ff0055] text-[#ff0055]'}`}>Destaque</span><h2 className={`text-3xl md:text-5xl font-black leading-tight ${isLight ? 'text-gray-800' : 'text-white'}`}>Correndo como uma <br/><span className={isLight ? 'text-[#D8C4F0]' : 'text-[#bd00ff]'}>Garota.</span></h2></div>
      </BentoCard>
      <BentoCard theme={theme} to="/season" title="Próxima Corrida" subtitle="Temporada"><NextRaceWidget theme={theme} /></BentoCard>
      <BentoCard theme={theme} className="md:col-span-1 md:row-span-2 bg-white/50"><NewsWidget theme={theme} onNewsClick={(post) => navigate(`/articles/${post.id}`)} /></BentoCard>
      <BentoCard theme={theme} to="/fanzone" className="md:col-span-1 md:row-span-1 overflow-hidden relative p-0 group"><FanzoneWidget theme={theme} /></BentoCard>
      <BentoCard theme={theme} to="/curiosities" className={`md:col-span-1 md:row-span-1 cursor-pointer ${theme === 'light' ? 'bg-white' : 'bg-[#1a1a20]'}`}><CuriosityWidget theme={theme} /></BentoCard>
      <BentoCard theme={theme} className={`md:col-span-1 flex flex-col items-center justify-center text-center ${theme === 'light' ? 'bg-[#D8C4F0] text-white' : 'bg-[#1a1a20] border-[#bd00ff]'}`}><Coffee size={32} className="mb-2"/><h3 className="font-bold">Apoie</h3></BentoCard>
      <BentoCard theme={theme} className={`md:col-span-2 md:row-span-1 ${theme === 'light' ? 'bg-[#D8C4F0]/20' : 'bg-[#0a0a12]'}`}><NewsletterWidget theme={theme} /></BentoCard>
      <BentoCard theme={theme} to="/articles" className="md:col-span-1 md:row-span-1"><div className={`absolute inset-0 flex flex-col items-center justify-center ${theme === 'light' ? 'bg-[#D8C4F0]/20' : 'bg-[#1a1a20]'}`}><BookOpenText size={40} className={theme==='light'?'text-[#D8C4F0]':'text-[#bd00ff]'} /><h3 className={`mt-2 font-bold ${theme==='light'?'text-gray-800':'text-white'}`}>Opinião</h3></div></BentoCard>
    </div>
  );
};

export default Home;