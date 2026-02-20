'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Play, Music, Youtube, Headphones, Mic, ExternalLink, 
  ChevronLeft, Sparkles, Tv, Heart, Radio
} from 'lucide-react';
import { useTheme } from '@/components/layout/ThemeContext';

// --- COMPONENTE INTERNO: BackButton ---
const BackButton = ({ to = "/", theme }) => {
  const isLight = theme === 'light';
  return (
    <Link
      href={to}
      className={`group mb-8 inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold transition-all hover:pl-2 px-5 py-2.5 rounded-full ${
        isLight
          ? 'text-cottage-rosy hover:text-cottage-rosy hover:bg-cottage-beige hover:shadow-sm bg-white/60 backdrop-blur-sm border border-cottage-rosy' 
          : 'text-cyan-400 hover:text-white hover:bg-cyan-900/20 border border-cyan-500/30 bg-black/40 backdrop-blur-md shadow-[0_0_15px_rgba(0,255,242,0.15)] hover:shadow-[0_0_25px_cyan] hover:border-cyan-400'
      }`}
    >
      <ChevronLeft size={16} />
      Voltar
    </Link>
  );
};

// --- DADOS DE MULTIMÍDIA ---
// Canais do YouTube indicados
const YOUTUBE_CHANNELS = [
  {
    id: 'c1',
    name: 'BeFast Podcast', // EDITE: Nome do canal
    desc: 'Podcast sobre automobilismo', // EDITE: Descrição curta
    image: '/images/befast-placeholder.jpg', // EDITE: URL da imagem do canal
    url: 'https://www.youtube.com/@befastpodcast',
  },
];

// Playlists do YouTube indicadas
const YOUTUBE_PLAYLISTS = [
  {
    id: 'pl1',
    title: 'Nome da Playlist', // EDITE: Nome da playlist
    channel: 'BeFast Podcast', // EDITE: Canal que criou
    thumb: '/images/playlist-placeholder.jpg', // EDITE: URL da thumbnail
    url: 'https://youtube.com/playlist?list=PLOt0vB-eyrgXpYQJQo1-MPEq7fZKGxR-n',
    videoCount: '10+ vídeos', // EDITE: Quantidade de vídeos
  },
];

// Podcasts do Spotify indicados
const SPOTIFY_PODCASTS = [
  {
    id: 'p1',
    title: 'Nome do Podcast 1', // EDITE: Nome do podcast
    author: 'Autor 1', // EDITE: Nome do autor/host
    image: '/images/podcast1-placeholder.jpg', // EDITE: URL da imagem
    url: 'https://open.spotify.com/show/3Hyvd4zxv627A1p52NojrH',
  },
  {
    id: 'p2',
    title: 'Nome do Podcast 2', // EDITE: Nome do podcast
    author: 'Autor 2', // EDITE: Nome do autor/host
    image: '/images/podcast2-placeholder.jpg', // EDITE: URL da imagem
    url: 'https://open.spotify.com/show/2YG8gxPWFu0NIbzLBWOMAa',
  },
];

const MultimediaPage = () => {
  const { theme } = useTheme();
  const resolvedTheme = theme || 'dark';
  const isLight = resolvedTheme === 'light';

  // --- BACKGROUNDS ---
  const lightPattern = {
    backgroundColor: '#F7F4D5',
    backgroundImage: `
      radial-gradient(at 0% 0%, rgba(211, 150, 140, 0.35) 0px, transparent 50%),
      radial-gradient(at 100% 100%, rgba(211, 150, 140, 0.25) 0px, transparent 50%),
      url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ff69b4' fill-opacity='0.05' fill-rule='evenodd'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/svg%3E")
    `,
  };

  const darkPattern = {
    backgroundColor: '#050510',
    backgroundImage: `
      linear-gradient(rgba(0, 255, 242, 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(189, 0, 255, 0.05) 1px, transparent 1px),
      radial-gradient(at 50% 50%, rgba(189, 0, 255, 0.1) 0px, transparent 60%)
    `,
    backgroundSize: '40px 40px, 40px 40px, 100% 100%'
  };

  // Cores dinâmicas
  const textMain = isLight ? 'text-gray-900' : 'text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]';
  const textSub = isLight ? 'text-gray-500' : 'text-cyan-100/70';
  const cardBg = isLight 
    ? 'bg-white/70 backdrop-blur-xl border border-cottage-rosy shadow-[0_10px_30px_rgba(255,182,193,0.3)]' 
    : 'bg-[#121217]/80 backdrop-blur-xl border border-white/10 hover:border-cyan-500/30 shadow-[0_0_20px_rgba(0,0,0,0.5)]';

  const sectionTitleStyle = `text-2xl font-black uppercase tracking-tight mb-6 flex items-center gap-3 ${isLight ? 'text-gray-800' : 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500'}`;

  return (
    <div 
      className="min-h-screen p-4 md:p-8 animate-in fade-in slide-in-from-bottom-4 duration-700 font-sans"
      style={isLight ? lightPattern : darkPattern}
    >
      
      {/* Luz de Fundo Decorativa */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden mix-blend-screen">
         <div className={`absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[100px] opacity-20 ${isLight ? 'bg-cottage-rosy' : 'bg-[#bd00ff]/30 animate-pulse'}`} />
         <div className={`absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[100px] opacity-20 ${isLight ? 'bg-cottage-rosy' : 'bg-[#00fff2]/20 animate-pulse'}`} />
         {!isLight && <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent shadow-[0_0_20px_cyan]" />}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <BackButton to="/" theme={resolvedTheme} />

        {/* HEADER */}
        <div className="mb-16 text-center relative">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border bg-white/10 backdrop-blur-sm border-white/20 shadow-lg">
             <Tv size={16} className={isLight ? 'text-cottage-rosy' : 'text-cyan-400'} />
             <span className={`text-[10px] font-black uppercase tracking-[0.25em] ${isLight ? 'text-cottage-rosy' : 'text-cyan-300'}`}>Hub de Conteúdo</span>
          </div>
          <h1 className={`text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 ${isLight ? 'text-transparent bg-clip-text bg-gradient-to-r from-cottage-rosy to-cottage-rosy drop-shadow-sm' : 'text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]'}`} style={{ fontFamily: "'Russo One', sans-serif" }}>
            Multimídia
          </h1>
          <p className={`text-lg font-medium max-w-xl mx-auto ${textSub}`}>
            Uma curadoria especial do melhor conteúdo sobre F1.
          </p>
        </div>

        {/* --- SEÇÃO DE CANAIS DO YOUTUBE --- */}
        <div className="mb-16">
           <h2 className={sectionTitleStyle}>
              <div className={`p-2 rounded-xl ${isLight ? 'bg-red-100 text-red-500' : 'bg-red-900/30 text-red-400'}`}><Youtube size={24} /></div>
              Canais Indicados
           </h2>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {YOUTUBE_CHANNELS.map((channel) => (
                 <a
                   key={channel.id}
                   href={channel.url}
                   target="_blank"
                   rel="noopener noreferrer"
                   className={`group flex items-center gap-4 p-5 rounded-4xl transition-all duration-300 hover:scale-[1.02] ${cardBg}`}
                 >
                    <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg shrink-0 relative ring-2 ring-red-500/30">
                       <img src={channel.image} alt={channel.name} className="w-full h-full object-cover" />
                       <div className="absolute inset-0 bg-red-500/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Play size={20} className="text-white" fill="currentColor" />
                       </div>
                    </div>
                    <div className="min-w-0">
                       <h3 className={`text-base font-black leading-tight mb-1 truncate group-hover:text-red-500 transition-colors ${textMain}`}>{channel.name}</h3>
                       <p className={`text-xs font-medium truncate ${textSub}`}>{channel.desc}</p>
                       <div className={`mt-2 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider ${isLight ? 'text-red-500' : 'text-red-400'}`}>
                          Ver no YouTube <ExternalLink size={10} />
                       </div>
                    </div>
                 </a>
              ))}
           </div>
        </div>

        {/* --- SEÇÃO DE PLAYLISTS DO YOUTUBE --- */}
        <div className="mb-16">
           <h2 className={sectionTitleStyle}>
              <div className={`p-2 rounded-xl ${isLight ? 'bg-purple-100 text-purple-500' : 'bg-purple-900/30 text-purple-400'}`}><Play size={24} /></div>
              Playlists Indicadas
           </h2>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {YOUTUBE_PLAYLISTS.map((playlist) => (
                 <a
                   key={playlist.id}
                   href={playlist.url}
                   target="_blank"
                   rel="noopener noreferrer"
                   className={`group relative rounded-4xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${cardBg}`}
                 >
                    <div className="relative aspect-video overflow-hidden">
                       <img src={playlist.thumb} alt={playlist.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                       <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md transition-transform duration-300 group-hover:scale-125 ${isLight ? 'bg-white/80 text-purple-500' : 'bg-black/60 text-white'}`}>
                             <Play size={20} fill="currentColor" />
                          </div>
                       </div>
                       <span className="absolute bottom-3 right-3 px-2 py-1 rounded-md text-[10px] font-bold bg-black/70 text-white backdrop-blur-sm">
                          {playlist.videoCount}
                       </span>
                    </div>

                    <div className="p-6">
                       <h3 className={`text-lg font-bold leading-tight mb-2 line-clamp-2 group-hover:text-purple-500 transition-colors ${textMain}`}>{playlist.title}</h3>
                       <p className={`text-xs font-bold uppercase tracking-wider ${textSub}`}>{playlist.channel}</p>
                    </div>
                 </a>
              ))}
           </div>
        </div>

        {/* --- SEÇÃO DE PODCASTS (SPOTIFY) --- */}
        <div>
           <h2 className={sectionTitleStyle}>
              <div className={`p-2 rounded-xl ${isLight ? 'bg-green-100 text-green-600' : 'bg-green-900/30 text-green-400'}`}><Mic size={24} /></div>
              Podcasts Indicados
           </h2>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SPOTIFY_PODCASTS.map((pod) => (
                 <a
                   key={pod.id}
                   href={pod.url}
                   target="_blank"
                   rel="noopener noreferrer"
                   className={`flex items-center gap-4 p-4 rounded-4xl transition-all duration-300 group hover:scale-[1.02] ${cardBg}`}
                 >
                    <div className={`w-20 h-20 rounded-2xl overflow-hidden shadow-lg shrink-0 relative`}>
                       <img src={pod.image} alt={pod.title} className="w-full h-full object-cover" />
                       <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Headphones size={20} className="text-white" />
                       </div>
                    </div>
                    <div className="min-w-0">
                       <h3 className={`text-base font-black leading-tight mb-1 truncate ${textMain}`}>{pod.title}</h3>
                       <p className={`text-xs font-medium truncate ${textSub}`}>Por {pod.author}</p>
                       <div className={`mt-2 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider ${isLight ? 'text-green-600' : 'text-green-400'}`}>
                          Ouvir no Spotify <ExternalLink size={10} />
                       </div>
                    </div>
                 </a>
              ))}
           </div>
        </div>

      </div>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Russo+One&display=swap');`}</style>
    </div>
  );
};

export default MultimediaPage;
