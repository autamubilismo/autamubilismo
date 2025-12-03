import React from 'react';
import { Heart, TrendingUp, Search, Users, Quote } from 'lucide-react';
import { BackButton, LogoHelmet } from '../components/UI';

const ManifestoPage = ({ theme }) => {
  const isLight = theme === 'light';

  // Cores
  const textMain = isLight ? 'text-gray-900' : 'text-white';
  const textSec = isLight ? 'text-gray-600' : 'text-gray-400';
  const accent = '#ff0055'; // Rosa Neon
  const bgPage = isLight ? 'bg-[#FFF5F8]' : 'bg-[#050505]';

  return (
    <div className={`min-h-screen pb-20 transition-colors duration-500 ${bgPage}`}>
      <div className="max-w-3xl mx-auto px-6 pt-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
        <BackButton to="/" theme={theme} />

        {/* --- CABEÇALHO --- */}
        <header className="text-center mb-16 mt-8">
          <span className={`inline-block text-[10px] font-black uppercase tracking-[0.3em] mb-4 px-3 py-1 rounded-full ${isLight ? 'bg-gray-200 text-gray-600' : 'bg-white/10 text-gray-400'}`}>
             Manifesto
          </span>
          <h1 className={`text-4xl md:text-6xl font-black leading-tight mb-6 uppercase tracking-tighter ${textMain}`} style={{ fontFamily: "'Russo One', sans-serif" }}>
            Autamubilismo
          </h1>
          <div className={`w-24 h-1 mx-auto rounded-full`} style={{ backgroundColor: accent }}></div>
        </header>

        {/* --- CORPO DO TEXTO --- */}
        <div className="space-y-10">
          
          {/* Introdução */}
          <section>
            <p className={`text-xl md:text-2xl font-medium leading-relaxed ${isLight ? 'text-gray-800' : 'text-gray-200'}`}>
              O automobilismo sempre foi feito de barulho — motores, torcida, narrador, coração acelerado — mas a internet transformou esse barulho numa <span className="italic opacity-60">bagunça</span>.
            </p>
            <p className={`mt-4 text-lg ${textSec}`}>
              Informação jogada, fofoca sem fonte, números errados, fandom isolado.
            </p>
          </section>

          {/* A Mudança */}
          <section className={`relative p-8 md:p-10 rounded-[2.5rem] ${isLight ? 'bg-white shadow-xl' : 'bg-[#141416] border border-[#333]'}`}>
             <h2 className={`text-3xl font-black mb-6 ${textMain}`}>Eu decidi fazer diferente.</h2>
             <p className={`text-lg leading-relaxed mb-6 ${textSec}`}>
               O <strong>autamubilismo</strong> nasce como um porto seguro para quem ama o esporte.
             </p>
             <p className={`text-xl font-black ${isLight ? 'text-gray-900' : 'text-white'}`}>
               Aqui, todo fã é fã de verdade.
             </p>
             <div className="mt-6 pt-6 border-t border-gray-200/10">
                <p className={`leading-relaxed ${textSec}`}>
                  Eu acredito que corrida é cultura, e que cultura se vive junto. Que dá pra informar com precisão e, ao mesmo tempo, falar com paixão.
                </p>
             </div>
          </section>

          {/* Inegociáveis */}
          <section>
            <h3 className={`text-sm font-black uppercase tracking-[0.2em] mb-8 text-center ${isLight ? 'text-gray-400' : 'text-gray-500'}`}>
              Inegociáveis
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
               {[
                 { icon: TrendingUp, text: "Dados importam.", color: "text-blue-500" },
                 { icon: Search, text: "Fontes importam.", color: "text-green-500" },
                 { icon: Heart, text: "Os fãs importam.", color: "text-[#ff0055]" } // Rosa Neon
               ].map((item, idx) => (
                 <div key={idx} className={`p-6 rounded-3xl flex flex-col items-center text-center gap-3 transition-transform hover:-translate-y-1 ${isLight ? 'bg-white shadow-lg' : 'bg-[#1e1e24] border border-[#333]'}`}>
                    <item.icon size={32} className={item.color} />
                    <span className={`font-bold text-lg ${textMain}`}>{item.text}</span>
                 </div>
               ))}
            </div>
          </section>

          {/* Citação Final */}
          <section className="py-10 text-center">
             <Quote size={48} className="mx-auto mb-6 opacity-20 rotate-180" />
             <p className={`text-2xl md:text-4xl font-black leading-tight tracking-tight ${textMain}`} style={{ fontFamily: "'Russo One', sans-serif" }}>
               "O autamubilismo existe pra transformar a experiência de acompanhar corrida em algo mais humano."
             </p>
          </section>

          {/* Fechamento */}
          <section className={`p-10 rounded-[3rem] text-center border-2 ${isLight ? 'bg-white border-gray-100' : 'bg-gradient-to-br from-[#1a1a20] to-black border-[#333]'}`}>
             <div className={`flex flex-col gap-3 text-sm md:text-base font-black uppercase tracking-[0.25em] ${isLight ? 'text-gray-400' : 'text-gray-500'}`}>
                <span>Mais acessível.</span>
                <span>Mais organizado.</span>
             </div>
             <div className={`text-3xl md:text-5xl mt-6 font-black tracking-tighter drop-shadow-lg`} style={{ fontFamily: "'Russo One', sans-serif", color: accent }}>
                Mais meu.
             </div>
             {/* Logo Pequeno ou Assinatura */}
             <div className="mt-10 flex justify-center opacity-50 grayscale hover:grayscale-0 transition-all">
               <LogoHelmet theme={theme} />
             </div>
          </section>

        </div>
      </div>
      
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');`}</style>
    </div>
  );
};

export default ManifestoPage;