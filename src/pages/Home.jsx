import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Coffee } from 'lucide-react';
import { BentoCard, NextRaceWidget, NewsWidget, FanzoneWidget, CuriosityWidget, NewsletterWidget } from '../components/UI';

const Home = ({ theme }) => {
  const isLight = theme === 'light';
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(180px,auto)] animate-in fade-in zoom-in duration-300">
      
      {/* BLOCO 1: NOTÍCIAS (Grande Destaque 2x2 - Esquerda) */}
      <BentoCard theme={theme} className="md:col-span-2 md:row-span-2 min-h-[400px]">
         <NewsWidget theme={theme} onNewsClick={(post) => navigate(`/articles/${post.id}`)} />
      </BentoCard>

      {/* BLOCO 2: PRÓXIMA CORRIDA (1x1 - Topo Centro-Direita) */}
      <BentoCard theme={theme} to="/season" className="md:col-span-1 md:row-span-1 cursor-pointer">
        <NextRaceWidget theme={theme} />
      </BentoCard>

      {/* BLOCO 3: FANZONE (1x1 - Abaixo da Próxima Corrida) */}
      <BentoCard theme={theme} to="/fanzone" className="md:col-span-1 md:row-span-1 overflow-hidden relative p-0 group cursor-pointer">
        <FanzoneWidget theme={theme} />
      </BentoCard>

      {/* BLOCO 4: MANIFESTO (Torre Vertical 1x2 - Extrema Direita) */}
      <BentoCard theme={theme} to="/articles/manifesto" className="md:col-span-1 md:row-span-2 min-h-[400px] cursor-pointer">
         <div className="flex flex-col justify-between h-full relative z-10 p-2">
            <div>
               <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase mb-3 ${theme === 'light' ? 'bg-[#F7B8C8] text-white' : 'border border-[#ff0055] text-[#ff0055]'}`}>Editorial</span>
               <h2 className={`text-3xl font-black leading-tight ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>Correndo como uma <br/><span className={theme === 'light' ? 'text-[#D8C4F0]' : 'text-[#bd00ff]'}>Garota.</span></h2>
            </div>
            <div className="text-6xl self-end mt-4">👩‍🚀</div>
         </div>
      </BentoCard>

      {/* BLOCO 5: NEWSLETTER (Larga Horizontal 2x1 - Embaixo das Notícias) */}
      <BentoCard theme={theme} className={`md:col-span-2 md:row-span-1 ${theme === 'light' ? 'bg-[#D8C4F0]/20' : 'bg-[#0a0a12]'}`}>
        <NewsletterWidget theme={theme} />
      </BentoCard>

      {/* BLOCO 6: CURIOSIDADES (1x1) */}
      <BentoCard theme={theme} to="/curiosities" className={`md:col-span-1 md:row-span-1 cursor-pointer ${theme === 'light' ? 'bg-white' : 'bg-[#1a1a20]'}`}>
        <CuriosityWidget theme={theme} />
      </BentoCard>

      {/* BLOCO 7: APOIE (1x1) */}
      <BentoCard theme={theme} className={`md:col-span-1 flex flex-col items-center justify-center text-center ${theme === 'light' ? 'bg-[#D8C4F0] text-white' : 'bg-[#1a1a20] border-[#bd00ff]'}`}>
        <Coffee size={32} className="mb-2"/>
        <h3 className="font-bold">Apoie</h3>
      </BentoCard>

    </div>
  );
};

export default Home;