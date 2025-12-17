import React from 'react';
import { Heart, TrendingUp, Search, Quote, Sparkles, ChevronLeft } from 'lucide-react';

// --- Componentes Internos para substituir as importações em falta ---

const BackButton = ({ to, theme }) => {
  const isLight = theme === 'light';
  return (
    <a 
      href={to} 
      className={`inline-flex items-center gap-2 mb-8 text-sm font-bold uppercase tracking-wider transition-colors hover:-translate-x-1 duration-200 ${isLight ? 'text-gray-500 hover:text-gray-900' : 'text-gray-500 hover:text-white'}`}
    >
      <ChevronLeft size={16} />
      Voltar
    </a>
  );
};

const LogoHelmet = ({ theme, className = "w-12 h-12" }) => {
  const color = theme === 'light' ? '#111' : '#fff';
  return (
    <div className={className}>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C7.58172 2 4 5.58172 4 10V14C4 18.4183 7.58172 22 12 22C16.4183 22 20 18.4183 20 14V10C20 5.58172 16.4183 2 12 2Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 10H20" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 2V10" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="16" r="2" fill={color}/>
      </svg>
    </div>
  );
};

// --- Página Principal ---

const ManifestoPage = ({ theme }) => {
  const isLight = theme === 'light';

  // Paleta de Cores Refinada
  const colors = {
    bg: isLight ? 'bg-[#fafafa]' : 'bg-[#0a0a0a]',
    textMain: isLight ? 'text-gray-800' : 'text-white',
    textMuted: isLight ? 'text-gray-500' : 'text-gray-400',
    accent: isLight ? 'text-[#D8C4F0]' : 'text-[#00fff2]',
    cardBg: isLight ? 'bg-white shadow-xl'
    : 'bg-[#121217] border border-[#333]',
    border: isLight ? 'bg-[#F7B8C8] text-white'
    : 'bg-[#121217]/20 text-[#00fff2] border border-[#00fff2]/50',
  };

  return (
    <div className={`min-h-screen relative overflow-hidden transition-colors duration-500 ${colors.bg}`}>
      
      {/* Background Gradients Ambientais */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full blur-[120px] opacity-20 pointer-events-none ${isLight ? 'bg-purple-300' : 'bg-purple-900/40'}`} />
      
      <div className="max-w-4xl mx-auto px-6 py-12 relative z-10">
        <BackButton to="/" theme={theme} />

        {/* --- HERO SECTION --- */}
        <header className="mt-8 mb-24 text-center">
          <div className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.4em] mb-6 px-4 py-1.5 rounded-full border ${isLight ? 'border-gray-900/10 bg-white/50' : 'border-white/10 bg-white/5'} ${colors.textMuted}`}>
            <Sparkles size={12} /> Manifesto 01
          </div>
          
          <h1 className={`text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-8 uppercase ${colors.textMain}`} style={{ fontFamily: "'Russo One', sans-serif" }}>
            Autamubilismo
          </h1>
          
          <p className={`text-lg md:text-xl max-w-xl mx-auto leading-relaxed font-serif italic ${colors.textMuted}`}>
            "Porque velocidade sem direção é apenas barulho."
          </p>
        </header>

        {/* --- O PROBLEMA (Contrastante) --- */}
        <section className="mb-24 relative">
          <div className={`absolute left-0 top-0 bottom-0 w-1 ${isLight ? 'bg-gray-200' : 'bg-gray-800'}`} />
          <div className="pl-8 md:pl-12 py-4">
            <h2 className={`text-2xl md:text-3xl font-bold mb-6 ${colors.textMain}`}>
              O automobilismo é feito de barulho. <br/>
              <span className={`opacity-40 font-normal`}>Mas a internet transformou isso em bagunça.</span>
            </h2>
            <p className={`text-lg leading-relaxed max-w-2xl ${colors.textMuted}`}>
              Informação jogada, fofoca sem fonte, números errados e fandoms isolados em bolhas. A paixão se perdeu no ruído do algoritmo.
            </p>
          </div>
        </section>

        {/* --- A SOLUÇÃO (Centralizada) --- */}
        <section className="mb-24 text-center px-4">
          <Quote size={40} className={`mx-auto mb-6 opacity-20 ${colors.textMain}`} />
          <h2 className={`text-3xl md:text-5xl font-black mb-8 leading-tight ${colors.textMain}`} style={{ fontFamily: "'Russo One', sans-serif" }}>
            Eu decidi fazer <span className={`${colors.accent}`}>diferente</span>.
          </h2>
          <div className={`max-w-2xl mx-auto text-lg md:text-xl leading-relaxed space-y-6 ${colors.textMuted}`}>
            <p>
              O <strong className={colors.textMain}>autamubilismo</strong> não é apenas uma página. É um porto seguro. 
            </p>
            <p>
              Eu acredito que corrida é cultura, e cultura se vive junto. Dá para ser preciso nos dados e, ao mesmo tempo, visceral na paixão.
            </p>
          </div>
        </section>

        {/* --- INEGOCIÁVEIS (Cards Modernos) --- */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <div className={`h-px flex-1 ${colors.border} bg-current opacity-20`}></div>
            <h3 className={`text-xs font-black uppercase tracking-[0.3em] ${colors.textMuted}`}>
              Os Inegociáveis
            </h3>
            <div className={`h-px flex-1 ${colors.border} bg-current opacity-20`}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ValueCard 
              icon={TrendingUp} 
              title="Dados Importam" 
              desc="Opinião é livre, mas os fatos são sagrados. Analisamos com profundidade."
              color="text-blue-500"
              theme={theme}
              colors={colors}
            />
            <ValueCard 
              icon={Search} 
              title="Fontes Importam" 
              desc="Nada de 'disseram por aí'. Credibilidade é a nossa moeda mais valiosa."
              color="text-emerald-500"
              theme={theme}
              colors={colors}
            />
            <ValueCard 
              icon={Heart} 
              title="Fãs Importam" 
              desc="Não somos apenas espectadores. Somos parte do espetáculo. Aqui você tem voz."
              color="text-purple-500"
              theme={theme}
              colors={colors}
            />
          </div>
        </section>

        {/* --- FECHAMENTO (Editorial) --- */}
        <section className={`relative rounded-3xl overflow-hidden p-10 md:p-16 text-center ${isLight ? 'bg-gray-100' : 'bg-[#111]'}`}>
          {/* Background Pattern decorativo */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
          
          <div className="relative z-10 flex flex-col items-center">
             <p className={`text-sm font-bold uppercase tracking-widest mb-6 ${colors.textMuted}`}>A Missão é clara</p>
             
             <div className={`text-2xl md:text-4xl font-black mb-8 ${colors.textMain}`} style={{ fontFamily: "'Russo One', sans-serif" }}>
               "Transformar a experiência de acompanhar corrida em algo mais humano."
             </div>

             <div className={`w-16 h-1 rounded-full mb-8 ${isLight ? 'bg-gray-900' : 'bg-white'}`}></div>

             <div className="flex flex-col md:flex-row items-center gap-2 md:gap-8 text-sm font-bold uppercase tracking-widest opacity-60">
                <span>Mais Acessível</span>
                <span className="hidden md:block">•</span>
                <span>Mais Organizado</span>
                <span className="hidden md:block">•</span>
                <span>Mais Meu</span>
             </div>

             <div className="mt-12 opacity-80 hover:opacity-100 transition-opacity duration-300">
               <LogoHelmet theme={theme} className="w-16 h-16" />
             </div>
          </div>
        </section>

      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Russo+One&family=Inter:wght@400;500;900&display=swap');
      `}</style>
    </div>
  );
};

// Subcomponente para manter o código limpo
const ValueCard = ({ icon: Icon, title, desc, color, colors }) => (
  <div className={`p-8 rounded-2xl border ${colors.border} ${colors.cardBg} hover:translate-y-[-4px] transition-transform duration-300 group`}>
    <div className={`p-3 rounded-xl inline-flex mb-4 bg-opacity-10 ${color.replace('text-', 'bg-')}`}>
      <Icon size={24} className={color} />
    </div>
    <h4 className={`text-xl font-bold mb-3 ${colors.textMain}`}>{title}</h4>
    <p className={`text-sm leading-relaxed ${colors.textMuted}`}>
      {desc}
    </p>
  </div>
);

export default ManifestoPage;