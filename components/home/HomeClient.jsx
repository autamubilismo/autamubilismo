'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Heart } from 'lucide-react';
import { lightPattern, darkPattern } from '../../constants/theme';
import { F1_2026_CALENDAR } from '../../data/f1Calendar2026';
import { BentoCard } from '../ui/BentoCard';
import { NextRaceWidget } from '../widgets/NextRaceWidget';
import { NewsWidget } from '../widgets/NewsWidget';
import { SeasonWidget } from '../widgets/SeasonWidget';
import { ContactWidget } from '../widgets/SimpleWidgets';
import { NewsletterWidget, KpopPhotocard } from '../widgets/NewsletterWidget';
import { FanzoneWidget } from '../widgets';
import { CuriosityWidget } from '../widgets/CuriosityWidget';
import { useTheme } from '../layout/ThemeContext';

const DRIVER_OF_DAY = {
  name: 'Lando Norris',
  team: 'McLaren',
  number: '4',
  image: '/img/pilotos/norris/grid-norris.avif',
  photocardImage: '/img/pilotos/norris/norris-photocard.jpg',
  zodiac: 'Escorpiao',
  secretFact: 'Tem medo de peixes mas ama sushi.',
  signature: 'L4ndo',
};

const toFeedItem = (item, type) => ({
  ...item,
  type,
  dateObj: new Date(item.publishedAt || item._createdAt || 0),
});

const CountdownWidget = ({ theme }) => {
  const isLight = theme === 'light';
  const seasonStartDate = useMemo(() => {
    const firstRace = F1_2026_CALENDAR[0];
    return new Date(`${firstRace?.startDate || '2026-03-06'}T00:00:00`);
  }, []);
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const tick = () => {
      setTimeLeft(seasonStartDate.getTime() - Date.now());
    };

    tick();
    const interval = setInterval(tick, 1000 * 60);
    return () => clearInterval(interval);
  }, [seasonStartDate]);

  const totalSeconds = Math.max(0, Math.floor(timeLeft / 1000));
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);

  return (
    <div className="h-full flex flex-col items-center justify-center gap-4 p-6 text-center">
      <div
        className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] ${
          isLight ? 'bg-pink-100 text-pink-600' : 'bg-white/10 text-cyan-200'
        }`}
      >
        Temporada F1 2026
      </div>
      <div className="flex items-center gap-3">
        {[
          { label: 'Dias', value: days },
          { label: 'Horas', value: hours },
          { label: 'Min', value: minutes },
        ].map((item) => (
          <div
            key={item.label}
            className={`min-w-[72px] rounded-2xl px-3 py-2 text-center shadow-sm ${
              isLight ? 'bg-white/80 border border-pink-100' : 'bg-black/30 border border-white/10'
            }`}
          >
            <div className={`text-xl font-black leading-none ${isLight ? 'text-gray-900' : 'text-white'}`}>
              {String(item.value).padStart(2, '0')}
            </div>
            <div className={`text-[10px] font-bold uppercase tracking-wider ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>
              {item.label}
            </div>
          </div>
        ))}
      </div>
      <div className={`text-xs font-bold uppercase tracking-widest ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>
        Comeca no GP da Australia
      </div>
    </div>
  );
};

export const HomeClient = ({ news = [], articles = [] }) => {
  const { theme } = useTheme();
  const router = useRouter();

  const feed = useMemo(() => {
    const formattedNews = news.map((item) => toFeedItem(item, 'news'));
    const formattedArticles = articles.map((item) => toFeedItem(item, 'article'));

    const topNews = formattedNews.slice(0, 3);
    const topArticles = formattedArticles.slice(0, 3);

    return [...topNews, ...topArticles].sort((a, b) => b.dateObj - a.dateObj);
  }, [news, articles]);

  return (
    <div
      className="min-h-screen transition-colors duration-700 ease-in-out selection:bg-pink-300 selection:text-purple-900 flex flex-col"
      style={theme === 'light' ? lightPattern : darkPattern}
    >
      {theme === 'dark' && (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden mix-blend-screen">
          <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#bd00ff]/10 blur-[120px] rounded-full animate-pulse" />
          <div
            className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#00fff2]/10 blur-[120px] rounded-full animate-pulse"
            style={{ animationDelay: '1s' }}
          />
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-yellow-400 via-pink-500 to-purple-600 rounded-full blur-[100px] opacity-10" />
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent shadow-[0_0_20px_cyan]" />
        </div>
      )}

      <main className="flex-1 max-w-[1400px] mx-auto p-4 md:p-8 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 auto-rows-[minmax(200px,auto)] lg:auto-rows-auto">
          {/* NewsWidget - Ordem 1 no mobile */}
          <div className="order-1 md:col-span-2 lg:col-span-2 lg:row-span-1 lg:col-start-3 lg:row-start-1">
            <BentoCard theme={theme} className="h-full min-h-[480px] lg:min-h-[500px]" noPadding>
              <NewsWidget
                theme={theme}
                posts={feed}
                onNewsClick={(post) => {
                  const route = post.type === 'article' ? '/article' : '/news';
                  const slugFinal = post.slug?.current || post.slug;
                  if (slugFinal) router.push(`${route}/${slugFinal}`);
                }}
              />
            </BentoCard>
          </div>

          {/* NextRaceWidget - Ordem 2 no mobile */}
          <div className="order-2 md:col-span-2 lg:col-span-1 lg:row-span-1 lg:col-start-1 lg:row-start-1">
            <BentoCard theme={theme} className="h-full min-h-[480px] lg:min-h-[500px]" noPadding>
              <NextRaceWidget theme={theme} />
            </BentoCard>
          </div>

          {/* Driver of the Day - Ordem 3 no mobile */}
          <div className="order-3 lg:col-span-1 lg:row-span-1 lg:col-start-2 lg:row-start-1">
            <BentoCard theme={theme} className="h-full min-h-[480px] lg:min-h-[500px]" noPadding>
              <div className="h-full flex flex-col p-4 gap-3">
                <div className="flex items-center justify-between px-1">
                  <span
                    className={`text-xs font-black uppercase tracking-[0.2em] ${
                      theme === 'light' ? 'text-purple-400' : 'text-gray-500'
                    }`}
                  >
                    Driver of the Day
                  </span>
                  <Heart
                    size={20}
                    className={`${theme === 'light' ? 'text-red-400' : 'text-pink-500'} animate-pulse`}
                  />
                </div>
                <div className="flex-1 flex items-start">
                  <KpopPhotocard driver={DRIVER_OF_DAY} theme={theme} />
                </div>
              </div>
            </BentoCard>
          </div>

          <div className="lg:col-span-1 lg:row-span-2 lg:col-start-1 lg:row-start-2">
            <BentoCard theme={theme} className="h-full min-h-[480px] lg:min-h-[500px]" noPadding>
              <SeasonWidget theme={theme} />
            </BentoCard>
          </div>

          <div className="lg:col-span-1 lg:col-start-2 lg:row-start-2">
            <BentoCard theme={theme} className="h-full flex items-center justify-center min-h-[200px]">
              <FanzoneWidget theme={theme} />
            </BentoCard>
          </div>

          <div className="lg:col-span-1 lg:col-start-3 lg:row-start-2">
            <BentoCard theme={theme} className="h-full flex items-center justify-center min-h-[200px]" noPadding>
              <CuriosityWidget theme={theme} />
            </BentoCard>
          </div>

          <div className="lg:col-span-1 lg:col-start-4 lg:row-start-2">
            <BentoCard theme={theme} className="h-full min-h-[200px]" noPadding>
              <CountdownWidget theme={theme} />
            </BentoCard>
          </div>

          <div className="lg:col-span-1 lg:col-start-2 lg:row-start-3">
            <BentoCard theme={theme} className="h-full flex items-center justify-center min-h-[200px]" to="/contact" noPadding>
              <ContactWidget theme={theme} />
            </BentoCard>
          </div>

          <div className="md:col-span-2 lg:col-span-2 lg:col-start-3 lg:row-start-3">
            <BentoCard theme={theme} className="h-full min-h-[200px]" noPadding>
              <NewsletterWidget theme={theme} />
            </BentoCard>
          </div>
        </div>
      </main>
    </div>
  );
};
