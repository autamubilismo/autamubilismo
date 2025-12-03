import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BentoCard,
  NextRaceWidget,
  NewsWidget,
  SeasonWidget,
  NewsletterWidget,
} from '../components/UI';
import { client, urlFor } from '../lib/sanity';
import { NEWS_WIDGET_QUERY, MANIFESTO_POST_QUERY } from '../lib/queries';

const Home = ({ theme }) => {
  const isLight = theme === 'light';
  const navigate = useNavigate();

  const [feed, setFeed] = useState([]);
  const [manifesto, setManifesto] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newsData = await client.fetch(NEWS_WIDGET_QUERY);
        const formattedNews = newsData.map((item) => ({
          ...item,
          type: 'news',
          image: item.image
            ? urlFor(item.image).width(400).height(400).url()
            : null,
          dateObj: new Date(item.publishedAt || Date.now()),
        }));

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
          type: 'article',
          image: item.image
            ? urlFor(item.image).width(400).height(400).url()
            : null,
          dateObj: new Date(item.publishedAt || Date.now()),
        }));

        const combinedFeed = [...formattedNews, ...formattedArticles].sort(
          (a, b) => b.dateObj - a.dateObj
        );

        setFeed(combinedFeed);
      } catch (err) {
        console.error('Erro ao carregar feed:', err);
      }
    };

    const fetchManifesto = async () => {
      try {
        const data = await client.fetch(MANIFESTO_POST_QUERY);
        if (data) {
          setManifesto({
            ...data,
            imageUrl: data.image ? urlFor(data.image).width(600).url() : null,
          });
        }
      } catch (err) {
        console.error('Erro manifesto:', err);
      }
    };

    fetchData();
    fetchManifesto();
  }, []);

  return (
    <div
      className="
        grid grid-cols-1
        md:grid-cols-3
        lg:grid-cols-4
        gap-4 md:gap-6
        auto-rows-[230px]
        animate-in fade-in zoom-in duration-300
      "
    >
      {/* 1. NEWS */}
      <BentoCard
        theme={theme}
        className="lg:col-span-2 lg:row-span-2"
      >
        <NewsWidget
          theme={theme}
          posts={feed}
          onNewsClick={(post) => {
            const route = post.type === 'article' ? '/articles' : '/news';
            navigate(`${route}/${post.slug?.current || post.slug}`);
          }}
        />
      </BentoCard>

      {/* 2. NEXT RACE */}
      <BentoCard
        theme={theme}
        to="/season"
        className="lg:col-span-1 lg:row-span-2 cursor-pointer"
      >
        <NextRaceWidget theme={theme} />
      </BentoCard>

      {/* 3. SEASON */}
      <BentoCard
        theme={theme}
        to="/season"
        className="lg:col-span-1 lg:row-span-2 overflow-hidden relative p-0 group cursor-pointer"
      >
        <SeasonWidget theme={theme} />
      </BentoCard>

      {/* 4. MANIFESTO */}
      <BentoCard 
        theme={theme} 
        to="/manifesto" 
        className="md:col-span-2 md:row-span-1 cursor-pointer relative overflow-hidden min-h-[220px]"
      >
         {/* Fundo Decorativo */}
         {manifesto?.imageUrl && (
            <div className="absolute inset-0 z-0">
                <img src={manifesto.imageUrl} alt="Manifesto" className="w-full h-full object-cover opacity-30 transition-transform duration-700 group-hover:scale-110" />
                <div className={`absolute inset-0 bg-gradient-to-t ${isLight ? 'from-white via-white/50' : 'from-black via-black/50'} to-transparent`}></div>
            </div>
         )}

         <div className="flex items-center justify-between h-full relative z-10 p-6 gap-4">
            <div className="flex-1">
               <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase mb-3 w-fit ${theme === 'light' ? 'bg-[#F7B8C8] text-white' : 'border border-[#ff0055] text-[#ff0055]'}`}>
                 {manifesto?.categoryTitle || 'Editorial'}
               </span>
               <h2 className={`text-2xl md:text-3xl font-black leading-tight ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
                 {manifesto?.title || <>Correndo como uma <span className={theme === 'light' ? 'text-[#D8C4F0]' : 'text-[#ff0055]'}>Garota.</span></>}
               </h2>
            </div>
            
            {/* LOGO DO CAPACETE */}
            <div className="flex-shrink-0">
               <img 
                 src="/img/web/helmet.png" 
                 alt="Autamubilismo" 
                 className={`w-20 h-20 md:w-24 md:h-24 object-contain transition-transform duration-500 group-hover:rotate-12 ${!isLight ? 'drop-shadow-[0_0_15px_#ff0055]' : ''}`}
               />
            </div>
         </div>
      </BentoCard>

      {/* 5. NEWSLETTER */}
      <BentoCard
        theme={theme}
        className={`
          lg:col-span-2 lg:row-span-1
          lg:col-start-3 lg:row-start-3
          ${theme === 'light' ? 'bg-[#D8C4F0]/20' : 'bg-[#0a0a12]'}
        `}
      >
        <NewsletterWidget theme={theme} />
      </BentoCard>
    </div>
  );
};

export default Home;
