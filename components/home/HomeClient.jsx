'use client';

import { useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { Heart } from 'lucide-react';
import { lightPattern, darkPattern } from '../../constants/theme';
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
  dateObj: new Date(item.publishedAt || item._createdAt || Date.now()),
});

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 auto-rows-[minmax(200px,auto)]">
          <div className="lg:col-span-2 lg:row-span-1">
            <BentoCard theme={theme} className="h-full min-h-[260px]" noPadding>
              <NextRaceWidget theme={theme} />
            </BentoCard>
          </div>

          <div className="lg:col-span-2 lg:row-span-2">
            <BentoCard theme={theme} className="h-full min-h-[460px]" noPadding>
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

          <div className="lg:col-span-1 lg:row-span-2">
            <BentoCard theme={theme} className="h-full min-h-[440px]" noPadding>
              <SeasonWidget theme={theme} />
            </BentoCard>
          </div>

          <div className="lg:col-span-1 lg:row-span-2 flex flex-col gap-6">
            <div className="flex items-center justify-between px-3">
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
            <div className="flex-1">
              <KpopPhotocard driver={DRIVER_OF_DAY} theme={theme} />
            </div>
          </div>

          <div className="lg:col-span-1">
            <BentoCard theme={theme} className="h-full flex items-center justify-center min-h-[200px]">
              <FanzoneWidget theme={theme} />
            </BentoCard>
          </div>

          <div className="lg:col-span-1">
            <div className="grid grid-rows-2 gap-6 h-full min-h-[200px]">
              <BentoCard theme={theme} className="flex items-center justify-center" noPadding>
                <CuriosityWidget theme={theme} />
              </BentoCard>
              <BentoCard theme={theme} className="flex items-center justify-center" to="/contact" noPadding>
                <ContactWidget theme={theme} />
              </BentoCard>
            </div>
          </div>

          <div className="md:col-span-2 lg:col-span-4">
            <BentoCard theme={theme} className="min-h-[240px]" noPadding>
              <NewsletterWidget theme={theme} />
            </BentoCard>
          </div>
        </div>
      </main>
    </div>
  );
};
