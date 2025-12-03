import React from 'react';
import { Play, Headphones, Video } from 'lucide-react';
import { BackButton } from '../components/UI';

const MEDIA_DATA = [
  { id: 1, type: 'video', title: 'Melhores Rádios da Temporada', duration: '10:24', thumb: 'https://images.unsplash.com/photo-1517524285303-d754396a36b0?q=80&w=800' },
  { id: 2, type: 'podcast', title: 'Ep. 42: A Dança das Cadeiras', duration: '45:10', thumb: 'https://images.unsplash.com/photo-1478737270239-2f02b77ac6d5?q=80&w=800' },
  { id: 3, type: 'video', title: 'Análise Técnica: Mercedes W16', duration: '15:00', thumb: 'https://images.unsplash.com/photo-1535970793554-44c1e7815487?q=80&w=800' },
  { id: 4, type: 'video', title: 'Vlog: Um dia no Paddock', duration: '08:45', thumb: 'https://images.unsplash.com/photo-1533561098133-7157448e8d68?q=80&w=800' },
];

const MultimediaPage = ({ theme }) => {
  const isLight = theme === 'light';

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-12">
      <BackButton to="/" theme={theme} />

      <div className="mb-10 px-2 text-center md:text-left">
        <h2 className={`text-4xl md:text-6xl font-black mb-2 ${isLight ? 'text-gray-800' : 'text-white'}`}>
          Multimídia
        </h2>
        <p className={`${isLight ? 'text-gray-500' : 'text-gray-400'}`}>Vídeos, podcasts e conteúdos exclusivos.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {MEDIA_DATA.map((item) => (
           <div 
             key={item.id} 
             className={`group relative rounded-[2rem] overflow-hidden cursor-pointer aspect-video flex items-center justify-center ${isLight ? 'shadow-lg' : 'border border-[#333]'}`}
           >
              <img src={item.thumb} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-60" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
              
              {/* Botão de Play */}
              <div className={`relative z-10 p-5 rounded-full transition-transform duration-300 group-hover:scale-125 ${isLight ? 'bg-white text-gray-900' : 'bg-[#ab0eff] text-white'}`}>
                 {item.type === 'video' ? <Play fill="currentColor" /> : <Headphones />}
              </div>

              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                 <span className="text-[10px] font-bold uppercase tracking-widest text-white/60 block mb-1">{item.type} • {item.duration}</span>
                 <h3 className="text-xl font-black text-white leading-tight">{item.title}</h3>
              </div>
           </div>
        ))}
      </div>
    </div>
  );
};

export default MultimediaPage;