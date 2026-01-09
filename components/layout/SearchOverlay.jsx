'use client';
import React, { useEffect, useMemo, useState } from 'react';
import { Search, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { client } from '@/lib/sanity';
import { DRIVERS_DATA, TEAMS_DATA } from '@/data';

const normalize = (value = '') =>
  value
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();

export const SearchOverlay = ({ isOpen, onClose, theme }) => {
  if (!isOpen) return null;
  
  const isLight = theme === 'light';
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [remoteResults, setRemoteResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchError, setSearchError] = useState('');

  useEffect(() => {
    if (!isOpen) return;
    setQuery('');
    setRemoteResults([]);
    setIsSearching(false);
    setSearchError('');
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return undefined;
    const handleKeydown = (event) => {
      if (event.key === 'Escape') onClose?.();
    };
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [isOpen, onClose]);

  const localResults = useMemo(() => {
    const needle = normalize(query);
    if (!needle || needle.length < 2) return [];

    const drivers = DRIVERS_DATA.filter((driver) => {
      const haystack = normalize(`${driver.name} ${driver.team} ${driver.id}`);
      return haystack.includes(needle);
    }).map((driver) => ({
      id: driver.id,
      title: driver.name,
      subtitle: driver.team,
      type: 'Pilotos',
      href: `/drivers/${driver.id}`,
    }));

    const teams = TEAMS_DATA.filter((team) => {
      const driverList = Array.isArray(team.drivers) ? team.drivers.join(' ') : '';
      const haystack = normalize(`${team.name} ${team.fullName || ''} ${driverList} ${team.id}`);
      return haystack.includes(needle);
    }).map((team) => ({
      id: team.id,
      title: team.name,
      subtitle: team.fullName,
      type: 'Equipes',
      href: `/teams/${team.id}`,
    }));

    return [...drivers, ...teams];
  }, [query]);

  useEffect(() => {
    const needle = normalize(query);
    if (!needle || needle.length < 2) {
      setRemoteResults([]);
      setIsSearching(false);
      setSearchError('');
      return undefined;
    }

    let isActive = true;
    const timer = setTimeout(async () => {
      try {
        setIsSearching(true);
        setSearchError('');
        const pattern = `*${needle}*`;
        const results = await client.fetch(
          `*[_type in ["news", "article", "articles"] && (
            title match $pattern ||
            excerpt match $pattern ||
            category->title match $pattern ||
            category match $pattern
          )] | order(publishedAt desc)[0...8] {
            _id,
            title,
            "slug": slug.current,
            excerpt,
            "image": coalesce(image.asset->url, mainImage.asset->url),
            "category": coalesce(category->title, category, "Geral"),
            publishedAt,
            _createdAt,
            _type
          }`,
          { pattern }
        );

        if (!isActive) return;
        const mapped = (results || []).map((item) => ({
          id: item._id,
          title: item.title,
          subtitle: item.category,
          type: item._type === 'news' ? 'Noticias' : 'Artigos',
          href: `/article/${item.slug}`,
          rawType: item._type,
        }));

        const normalized = mapped.map((item) => ({
          ...item,
          href: item.rawType === 'news' ? `/news/${item.slug}` : item.href,
        }));

        setRemoteResults(normalized);
      } catch (error) {
        if (!isActive) return;
        setSearchError('Erro ao buscar no banco de conteudo.');
        setRemoteResults([]);
      } finally {
        if (isActive) setIsSearching(false);
      }
    }, 300);

    return () => {
      isActive = false;
      clearTimeout(timer);
    };
  }, [query]);

  const results = useMemo(() => {
    return [...localResults, ...remoteResults];
  }, [localResults, remoteResults]);

  const groupedResults = useMemo(() => {
    return results.reduce((acc, item) => {
      acc[item.type] = acc[item.type] || [];
      acc[item.type].push(item);
      return acc;
    }, {});
  }, [results]);
  
  return (
    <div className={`fixed inset-0 z-50 flex flex-col animate-in fade-in slide-in-from-top-8 duration-300 backdrop-blur-3xl ${isLight ? 'bg-pink-50/90' : 'bg-[#050510]/90'}`}>
      <div className="p-8 flex items-center gap-6 max-w-5xl mx-auto w-full mt-20">
        <Search 
          size={32} 
          className={isLight ? 'text-pink-500' : 'text-cyan-400 drop-shadow-[0_0_5px_cyan]'} 
        />
        <input 
          type="text" 
          autoFocus 
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Busque por pilotos, equipes..." 
          className={`flex-1 bg-transparent text-4xl md:text-5xl font-black outline-none placeholder:opacity-30 ${isLight ? 'text-gray-900 placeholder-pink-400' : 'text-white placeholder-cyan-700'}`} 
        />
        <button 
          onClick={onClose}
          className={`p-4 rounded-full transition-colors ${isLight ? 'hover:bg-pink-100 text-gray-400 hover:text-pink-500' : 'hover:bg-white/10 text-gray-500 hover:text-white'}`}
        >
          <X size={32} />
        </button>
      </div>

      <div className="max-w-5xl mx-auto w-full px-8 pb-10">
        {query.length < 2 && (
          <p className={`text-sm font-semibold ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>
            Digite pelo menos 2 caracteres para buscar.
          </p>
        )}

        {query.length >= 2 && isSearching && (
          <p className={`text-sm font-semibold ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>
            Buscando resultados...
          </p>
        )}

        {query.length >= 2 && !isSearching && searchError && (
          <p className={`text-sm font-semibold ${isLight ? 'text-rose-500' : 'text-rose-300'}`}>
            {searchError}
          </p>
        )}

        {query.length >= 2 && !isSearching && !searchError && results.length === 0 && (
          <p className={`text-sm font-semibold ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>
            Nenhum resultado encontrado.
          </p>
        )}

        {query.length >= 2 && results.length > 0 && (
          <div className="mt-6 flex flex-col gap-6 max-h-[55vh] overflow-y-auto pr-2 custom-scrollbar">
            {Object.entries(groupedResults).map(([group, items]) => (
              <div key={group}>
                <p className={`text-xs font-black uppercase tracking-[0.3em] mb-3 ${isLight ? 'text-pink-400' : 'text-cyan-400'}`}>
                  {group}
                </p>
                <div className="flex flex-col gap-3">
                  {items.map((item) => (
                    <button
                      key={`${group}-${item.id}`}
                      onClick={() => {
                        router.push(item.href);
                        onClose?.();
                      }}
                      className={`group flex items-center justify-between gap-4 p-4 rounded-2xl text-left border transition-all duration-300 ${
                        isLight
                          ? 'bg-white/80 border-pink-100 hover:border-pink-300 hover:shadow-lg hover:shadow-pink-100'
                          : 'bg-[#0d0d16]/80 border-white/10 hover:border-cyan-500/60 hover:shadow-[0_0_20px_rgba(0,255,242,0.2)]'
                      }`}
                    >
                      <div>
                        <p className={`text-lg font-black ${isLight ? 'text-gray-800' : 'text-white'}`}>{item.title}</p>
                        {item.subtitle && (
                          <p className={`text-xs font-semibold uppercase tracking-widest ${isLight ? 'text-gray-400' : 'text-gray-500'}`}>
                            {item.subtitle}
                          </p>
                        )}
                      </div>
                      <span className={`text-xs font-black uppercase tracking-widest ${isLight ? 'text-pink-400' : 'text-cyan-400'}`}>
                        Ver
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
