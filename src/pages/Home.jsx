import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Coffee } from 'lucide-react';
import {
  BentoCard,
  NextRaceWidget,
  NewsWidget,
  SeasonWidget,
  ContactWidget,
  CuriosityWidget,
  NewsletterWidget,
} from '../components/UI';
import { client, urlFor } from '../lib/sanity';
import { NEWS_WIDGET_QUERY, MANIFESTO_POST_QUERY } from '../lib/queries';

const Home = ({ theme }) => {
  const isLight = theme === 'light';
  const navigate = useNavigate();

  const [feed, setFeed] = useState([]); // Agora chamamos de 'feed' pois mistura news + articles
  const [manifesto, setManifesto] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 1. Buscar Notícias
        const newsData = await client.fetch(NEWS_WIDGET_QUERY);
        const formattedNews = newsData.map((item) => ({
          ...item,
          type: 'news', // Identificador
          image: item.image ? urlFor(item.image).width(400).height(400).url() : null,
          dateObj: new Date(item.publishedAt || Date.now()), // Para ordenação
        }));

        // 2. Buscar Artigos (Query inline para facilitar)
        // Buscamos os 3 últimos artigos para misturar
        const articlesData = await client.fetch(`
          *[_type == "article"] | order(publishedAt desc)[0..2] {
            _id,
            title,
            slug,
            "image": image.asset->url,
            publishedAt,
            "category": "Opinião",
            "author": author
          }
        `);
        
        const formattedArticles = articlesData.map((item) => ({
          ...item,
          type: 'article', // Identificador IMPORTANTE para o estilo
          image: item.image ? urlFor(item.image).width(400).height(400).url() : null,
          dateObj: new Date(item.publishedAt || Date.now()),
        }));

        // 3. Misturar e Ordenar por Data (Mais recente primeiro)
        const combinedFeed = [...formattedNews, ...formattedArticles].sort(
          (a, b) => b.dateObj - a.dateObj
        );

        setFeed(combinedFeed);

      } catch (err) {
        console.error('Erro ao carregar feed:', err);
      }
    };

    // Buscar Manifesto (Mantido igual)
    const fetchManifesto = async () => {
      try {
        const data = await client.fetch(MANIFESTO_POST_QUERY);
        if (data) {
          setManifesto({
            ...data,
            imageUrl: data.image ? urlFor(data.image).width(600).url() : null,
          });
        }
      } catch (err) { console.error('Erro manifesto:', err); }
    };

    fetchData();
    fetchManifesto();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(180px,auto)] animate-in fade-in zoom-in duration-300">
      
      {/* 1. FEED (Notícias + Artigos) - Hero Esquerda */}
      <BentoCard theme={theme} className="md:col-span-2 md:row-span-2 min-h-[400px]">
        <NewsWidget
          theme={theme}
          posts={feed} // Passamos o feed misturado
          onNewsClick={(post) => {
            // Redireciona para a rota certa dependendo do tipo
            const route = post.type === 'article' ? '/articles' : '/news';
            navigate(`${route}/${post.slug?.current || post.slug}`);
          }}
        />
      </BentoCard>

      {/* 2. PRÓXIMA CORRIDA (Topo Direita 1x1) */}
      <BentoCard theme={theme} to="/season" className="md:col-span-1 md:row-span-1 cursor-pointer">
        <NextRaceWidget theme={theme} />
      </BentoCard>

      {/* 3. TEMPORADA (Topo Direita Extrema - 1x1) */}
      <BentoCard theme={theme} to="/season" className="md:col-span-1 md:row-span-1 overflow-hidden relative p-0 group cursor-pointer">
        <SeasonWidget theme={theme} />
      </BentoCard>

      {/* 4. CURIOSIDADES (Meio Direita 1x1) */}
      <BentoCard theme={theme} to="/curiosities" className={`md:col-span-1 md:row-span-1 cursor-pointer ${theme === 'light' ? 'bg-white' : 'bg-[#1a1a20]'}`}>
        <CuriosityWidget theme={theme} />
      </BentoCard>

      {/* 5. CONTATO (Meio Direita 1x1) */}
      <BentoCard theme={theme} to="/contact" className={`md:col-span-1 cursor-pointer flex flex-col items-center justify-center text-center ${theme === 'light' ? 'bg-[#D8C4F0] text-white' : 'bg-[#1a1a20] border-[#bd00ff]'}`}>
         <ContactWidget theme={theme} />
      </BentoCard>

      {/* 6. MANIFESTO (Rodapé Esquerda - 2x1 Horizontal) */}
      <BentoCard 
        theme={theme} 
        to="/articles/manifesto" 
        className="md:col-span-2 md:row-span-1 cursor-pointer relative overflow-hidden"
      >
         {/* Imagem de fundo do manifesto (se houver) */}
         {manifesto?.imageUrl && (
            <div className="absolute inset-0 z-0">
                <img src={manifesto.imageUrl} alt="Manifesto" className="w-full h-full object-cover opacity-30 transition-transform duration-700 group-hover:scale-110" />
                <div className={`absolute inset-0 bg-gradient-to-t ${isLight ? 'from-white via-white/50' : 'from-black via-black/50'} to-transparent`}></div>
            </div>
         )}

         <div className="flex flex-col justify-center h-full relative z-10 p-2">
            <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase mb-2 w-fit ${theme === 'light' ? 'bg-[#F7B8C8] text-white' : 'border border-[#fe88dd] text-[#fe88dd]'}`}>
              {manifesto?.categoryTitle || 'Editorial'}
            </span>
            <h2 className={`text-2xl md:text-3xl font-black leading-tight ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
              {manifesto?.title || <>Correndo como uma <span className={theme === 'light' ? 'text-[#D8C4F0]' : 'text-[#fe88dd]'}>Garota.</span></>}
            </h2>
         </div>
      </BentoCard>

      {/* 7. NEWSLETTER (Rodapé Direita - 2x1 Larga) */}
      <BentoCard theme={theme} className={`md:col-span-2 md:row-span-1 ${theme === 'light' ? 'bg-[#D8C4F0]/20' : 'bg-[#0a0a12]'}`}>
        <NewsletterWidget theme={theme} />
      </BentoCard>
      
    </div>
  );
};

export default Home;