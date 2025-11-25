// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Coffee } from 'lucide-react';
import {
  BentoCard,
  NextRaceWidget,
  NewsWidget,
  FanzoneWidget,
  CuriosityWidget,
  NewsletterWidget,
} from '../components/UI';
import { client, urlFor } from '../lib/sanity';
import { NEWS_WIDGET_QUERY, MANIFESTO_POST_QUERY } from '../lib/queries';

const Home = ({ theme }) => {
  const isLight = theme === 'light';
  const navigate = useNavigate();

  const [news, setNews] = useState([]);
  const [manifesto, setManifesto] = useState(null);

  // buscar notícias + manifesto no Sanity
  useEffect(() => {
    // notícias
    client
      .fetch(NEWS_WIDGET_QUERY)
      .then((data) => {
        const withImages = data.map((item) => ({
          ...item,
          imageUrl: item.image ? urlFor(item.image).width(200).height(200).url() : null,
        }));
        setNews(withImages);
      })
      .catch((err) => {
        console.error('Erro ao buscar notícias do Sanity:', err);
      });

    // manifesto
    client
      .fetch(MANIFESTO_POST_QUERY)
      .then((data) => {
        if (!data) return;
        setManifesto({
          ...data,
          imageUrl: data.image ? urlFor(data.image).width(400).url() : null,
        });
      })
      .catch((err) => {
        console.error('Erro ao buscar manifesto do Sanity:', err);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(180px,auto)] animate-in fade-in zoom-in duration-300">
      {/* 1. NOTÍCIAS (Hero Esquerda 2x2) */}
      <BentoCard theme={theme} className="md:col-span-2 md:row-span-2 min-h-[400px]">
        <NewsWidget
          theme={theme}
          posts={news}
          onNewsClick={(post) => {
            // por enquanto manda pra lista de artigos;
            // depois a gente pluga a página de detalhe pelo slug/id
            navigate('/articles');
          }}
        />
      </BentoCard>

      {/* 2. COLUNA DIREITA SUPERIOR: Próxima Corrida (1x1) */}
      <BentoCard theme={theme} to="/season" className="md:col-span-1 md:row-span-1 cursor-pointer">
        <NextRaceWidget theme={theme} />
      </BentoCard>

      {/* 3. COLUNA DIREITA SUPERIOR: Fanzone (1x1 - Abaixo da Corrida) */}
      <BentoCard
        theme={theme}
        to="/fanzone"
        className="md:col-span-1 md:row-span-1 overflow-hidden relative p-0 group cursor-pointer"
      >
        <FanzoneWidget theme={theme} />
      </BentoCard>

      {/* 4. COLUNA DIREITA INFERIOR: Curiosidades (1x1) */}
      <BentoCard
        theme={theme}
        to="/curiosities"
        className={`md:col-span-1 md:row-span-1 cursor-pointer ${
          theme === 'light' ? 'bg-white' : 'bg-[#1a1a20]'
        }`}
      >
        <CuriosityWidget theme={theme} />
      </BentoCard>

      {/* 5. COLUNA DIREITA INFERIOR: Apoie (1x1) */}
      <BentoCard
        theme={theme}
        className={`md:col-span-1 flex flex-col items-center justify-center text-center ${
          theme === 'light'
            ? 'bg-[#D8C4F0] text-white'
            : 'bg-[#1a1a20] border-[#fe88dd]'
        }`}
      >
        <Coffee size={32} className="mb-2" />
        <h3 className="font-bold">Apoie</h3>
      </BentoCard>

      {/* 6. RODAPÉ ESQUERDA: Manifesto (2x1 Horizontal) */}
      <BentoCard
        theme={theme}
        to="/articles/manifesto"
        className="md:col-span-2 md:row-span-1 cursor-pointer"
      >
        <div className="flex items-center justify-between h-full relative z-10 p-2">
          <div>
            <span
              className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase mb-3 ${
                theme === 'light'
                  ? 'bg-[#F7B8C8] text-white'
                  : 'border border-[#fe88dd] text-[#fe88dd]'
              }`}
            >
              {manifesto?.categoryTitle || 'Editorial'}
            </span>
            <h2
              className={`text-3xl font-black leading-tight ${
                theme === 'light' ? 'text-gray-800' : 'text-white'
              }`}
            >
              {manifesto?.title || (
                <>
                  Correndo como uma <br />
                  <span className={theme === 'light' ? 'text-[#D8C4F0]' : 'text-[#fe88dd]'}>
                    Garota.
                  </span>
                </>
              )}
            </h2>
          </div>
          <div className="text-6xl self-end mt-4">👩‍🚀</div>
        </div>
      </BentoCard>

      {/* 7. RODAPÉ DIREITA: Newsletter (2x1 Larga) */}
      <BentoCard
        theme={theme}
        className={`md:col-span-2 md:row-span-1 ${
          theme === 'light' ? 'bg-[#D8C4F0]/20' : 'bg-[#0a0a12]'
        }`}
      >
        <NewsletterWidget theme={theme} />
      </BentoCard>
    </div>
  );
};

export default Home;
