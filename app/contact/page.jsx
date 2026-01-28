'use client';

import { useState } from "react";
import {
  Send,
  Sparkles,
  Instagram,
  Mail,
  ChevronLeft,
  Loader2
} from "lucide-react";
import Link from 'next/link';
import { useTheme } from '@/components/layout/ThemeContext';

const BackButton = ({ to, theme }) => {
  const isLight = theme === 'light';
  return (
    <Link
      href={to}
      className={`group mb-8 inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold transition-all hover:-translate-x-1 px-5 py-2.5 rounded-full ${
        isLight
          ? 'text-gray-500 hover:text-cottage-rosy bg-white/50 border border-white hover:border-cottage-rosy shadow-sm' 
          : 'text-cyan-400/80 hover:text-cyan-300 bg-black/20 border border-cyan-500/20 hover:border-cyan-500/60 shadow-[0_0_10px_rgba(0,255,242,0.1)] hover:shadow-[0_0_20px_rgba(0,255,242,0.3)]'
      }`}
    >
      <ChevronLeft size={14} />
      Voltar
    </Link>
  );
};

const ContactPage = () => {
  const { theme } = useTheme();
  const resolvedTheme = theme || "light";
  const isLight = resolvedTheme === "light";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    try {
      setStatus("loading");

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao enviar mensagem');
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error('Erro:', err);
      setStatus("error");
      alert(err.message || 'Erro ao enviar mensagem. Tente novamente.');
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const TikTokIcon = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );

  const XIcon = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  );
  const cardClass = isLight
    ? 'bg-white/70 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_20px_40px_-12px_rgba(255,182,193,0.3)] border border-white hover:shadow-[0_25px_50px_-12px_rgba(255,182,193,0.5)]'
    : 'bg-[#0f0518]/80 backdrop-blur-xl rounded-[2.5rem] border border-fuchsia-500/20 hover:border-cyan-400/40 shadow-[0_0_30px_rgba(189,0,255,0.1)] hover:shadow-[0_0_40px_rgba(0,255,242,0.15)] ring-1 ring-white/5 transition-all duration-500';

  // Input Style
  const inputClass = isLight
    ? "bg-white border-cottage-rosy focus:border-cottage-rosy focus:ring-4 focus:ring-cottage-beige text-gray-800 placeholder-gray-400 shadow-sm transition-all duration-300"
    : "bg-[#1a1025] border-white/5 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-400/30 text-white placeholder-white/20 transition-all duration-300 shadow-inner hover:bg-[#201430]";

  return (
    <div 
      className={`min-h-screen p-4 md:p-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 font-sans ${
        isLight 
          ? 'bg-[#F7F4D5] bg-[radial-gradient(#D3968C_1px,transparent_1px)] [background-size:32px_32px]' 
          : 'bg-[#050510]'
      }`}
    >
      {!isLight && (
        <div className="absolute inset-0 pointer-events-none opacity-20 fixed"
             style={{
               backgroundImage: 'linear-gradient(rgba(255, 0, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)',
               backgroundSize: '40px 40px',
               maskImage: 'linear-gradient(to bottom, black 20%, transparent 100%)'
             }}
        />
      )}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden mix-blend-screen">
         <div className={`absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[150px] opacity-40 ${isLight ? 'bg-cottage-rosy' : 'bg-fuchsia-900/40 animate-pulse'}`} />
         <div className={`absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[150px] opacity-40 ${isLight ? 'bg-cottage-rosy' : 'bg-cyan-900/40 animate-pulse'}`} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <BackButton to="/" theme={resolvedTheme} />

        <div className="mb-12 md:mb-20 text-center relative px-4">
          <div className={`inline-flex items-center justify-center p-3 mb-6 rounded-2xl rotate-3 transition-transform hover:rotate-0 duration-500 ${
            isLight ? 'bg-white shadow-xl text-cottage-rosy' : 'bg-black/40 border border-cyan-500/50 text-cyan-400 shadow-[0_0_20px_cyan]'
          }`}>
             <Sparkles size={32} />
          </div>
          <h1
            className={`text-5xl md:text-7xl lg:text-8xl font-black mb-4 tracking-tighter leading-[0.9] uppercase ${
              isLight 
                ? 'text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-gray-700 to-gray-500' 
                : 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-fuchsia-400 drop-shadow-[0_0_15px_rgba(0,255,242,0.5)]'
            }`}
            style={{ fontFamily: "'Russo One', sans-serif" }}
          >
            Quem faz?
          </h1>
          <p className={`text-lg md:text-xl font-medium tracking-wide max-w-xl mx-auto ${isLight ? "text-gray-400" : "text-cyan-100/60"}`}>
            Conheça a mente, o coração e a velocidade por trás do projeto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className={`lg:col-span-7 p-8 md:p-12 relative overflow-hidden flex flex-col group ${cardClass}`}>
            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-10 pb-8 border-b border-gray-100 dark:border-white/5">
                <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shrink-0 border-4 ${isLight ? 'border-white shadow-lg' : 'border-cyan-500/30 shadow-[0_0_20px_rgba(0,255,242,0.2)]'}`}>
                   <div className={`w-full h-full flex items-center justify-center text-4xl ${isLight ? 'bg-cottage-beige' : 'bg-black'}`}>👩‍💻</div>
                </div>
                <div>
                   <h3 className={`text-3xl md:text-4xl font-black leading-none mb-2 tracking-tight ${isLight ? "text-gray-900" : "text-white"}`}>
                     Oi, sou a Tamu!
                   </h3>
                   <div className="flex flex-wrap items-center gap-3">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${isLight ? 'bg-cottage-rosy text-cottage-beige' : 'bg-fuchsia-900/30 text-fuchsia-300 border border-fuchsia-500/30'}`}>Founder</span>
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${isLight ? 'bg-cottage-rosy text-cottage-beige' : 'bg-cyan-900/30 text-cyan-300 border border-cyan-500/30'}`}>Editora</span>
                   </div>
                </div>
            </div>

            <div className={`space-y-6 text-base md:text-lg leading-relaxed font-light relative z-10 text-justify ${isLight ? "text-gray-600" : "text-gray-300"}`}>
                <p>
                  <strong className={isLight ? "text-gray-900" : "text-cyan-300"}>O automobilismo entrou na minha vida não como um hobby, mas como linguagem.</strong> Minhas ideias nascem no ponto exato onde velocidade encontra comportamento humano. Onde dados, emoção, pressão e silêncio convivem no mesmo segundo. A Fórmula 1 nunca foi, pra mim, apenas sobre carros. É sobre decisões sob risco, performance mental, relações de poder, estética, narrativa e humanidade exposta em alta rotação.
                </p>
                <p>
                  Sou <span className={isLight ? "text-cottage-rosy font-medium" : "text-fuchsia-400"}>biomédica por formação</span>, estudante de veterinária por vocação científica, e criadora por natureza. Meu olhar sobre o esporte vem de quem observa o paddock como um organismo vivo: equipes como sistemas, pilotos como indivíduos complexos, e a pista como um palco onde técnica e emoção disputam espaço a cada volta.
                </p>
                <div className={`pl-6 border-l-4 ${isLight ? 'border-cottage-rosy bg-cottage-beige/50' : 'border-cyan-500/50 bg-cyan-900/10'} p-4 rounded-r-xl my-8 italic font-serif text-xl md:text-2xl opacity-90`}>
                  "Minhas ideias surgem da curiosidade indisciplinada. De perguntas que não cabem em planilhas."
                </div>
                <p>
                  Do interesse em entender como pessoas performam quando tudo está em jogo, e como isso pode ser contado de forma honesta, estética e relevante. Não falo de automobilismo como espectadora, mas como alguém que traduz bastidores, tensão psicológica e cultura do esporte em linguagem acessível, sensível e contemporânea.
                </p>
                <p>
                  Este também é um <strong className={isLight ? "text-cottage-rosy" : "text-cottage-rosy"}>espaço seguro para garotas</strong> e para quem se sente deslocada dentro do automobilismo. Para quem ama o esporte, mas nunca se sentiu totalmente pertencente a ele. Aqui, conhecimento e sensibilidade caminham juntos. Não há exigência de performance social, nem gatekeeping disfarçado de paixão. Existe escuta, troca e respeito.
                </p>
                <p>
                  Trabalho com conteúdo, narrativa e estratégia criativa conectando esporte, ciência, comportamento e lifestyle. Minha relação com marcas nasce do mesmo princípio: autenticidade, inteligência e construção de valor a longo prazo. Não acredito em presença vazia, nem em storytelling sem verdade.
                </p>
                <p className={`pt-4 font-bold text-lg md:text-xl ${isLight ? "text-gray-900" : "text-white"}`}>
                  Automobilismo, pra mim, é sobre legado, identidade e futuro. E é desse lugar técnico, humano e criativo que eu crio.
                </p>
            </div>

            <div className={`mt-12 pt-8 border-t ${isLight ? "border-gray-100" : "border-white/10"} flex flex-col md:flex-row items-center justify-between gap-6`}>
              <span className={`text-[10px] font-bold uppercase tracking-[0.25em] ${isLight ? "text-gray-400" : "text-cyan-600"}`}>
                Conecte-se
              </span>
              <div className="flex gap-3">
                {[
                  { href: "https://instagram.com/autamubilismo", icon: Instagram },
                  { href: "https://twitter.com/autamubilismo", icon: XIcon },
                  { href: "https://tiktok.com/@autamubilismo", icon: TikTokIcon },
                  { href: "mailto:autamubilismo@gmail.com", icon: Mail },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-xl transition-all duration-300 hover:-translate-y-1 ${
                      isLight
                        ? "bg-gray-50 text-gray-400 hover:bg-cottage-rosy hover:text-white hover:shadow-lg hover:shadow-cottage-rosy"
                        : "bg-white/5 text-gray-400 hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_15px_cyan]"
                    }`}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 sticky top-8">
             <div className={`p-8 md:p-10 relative overflow-hidden flex flex-col justify-center ${cardClass}`}>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                     <span className={`w-8 h-1 rounded-full ${isLight ? 'bg-cottage-rosy' : 'bg-fuchsia-500 shadow-[0_0_10px_magenta]'}`}></span>
                     <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${isLight ? 'text-gray-400' : 'text-fuchsia-300'}`}>Contato</span>
                  </div>
                  
                  <h3 className={`text-3xl md:text-4xl font-black mb-4 tracking-tighter ${isLight ? "text-gray-900" : "text-white"}`}>
                    Vamos criar algo juntos?
                  </h3>
                  
                  <p className={`text-sm mb-10 font-medium leading-relaxed opacity-70 ${isLight ? "text-gray-600" : "text-cyan-100"}`}>
                    Sugestões, parcerias ou só para falar de F1. Prometo responder o mais rápido possível!
                  </p>

                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <div className="group">
                      <label className={`block text-[10px] font-bold uppercase tracking-wider mb-2 ml-1 ${isLight ? "text-gray-400" : "text-cyan-400"}`}>Nome</label>
                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full p-4 rounded-xl outline-none ${inputClass}`}
                        placeholder="Como você se chama?"
                      />
                    </div>

                    <div className="group">
                      <label className={`block text-[10px] font-bold uppercase tracking-wider mb-2 ml-1 ${isLight ? "text-gray-400" : "text-cyan-400"}`}>E-mail</label>
                      <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full p-4 rounded-xl outline-none ${inputClass}`}
                        placeholder="seu@email.com"
                      />
                    </div>

                    <div className="group">
                      <label className={`block text-[10px] font-bold uppercase tracking-wider mb-2 ml-1 ${isLight ? "text-gray-400" : "text-cyan-400"}`}>Mensagem</label>
                      <textarea
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full p-4 rounded-xl resize-none outline-none ${inputClass}`}
                        placeholder="Escreva aqui..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className={`w-full py-4 rounded-xl font-black text-xs uppercase tracking-[0.25em] flex items-center justify-center gap-3 mt-4 transition-all duration-300 active:scale-[0.98] ${
                        isLight
                          ? "bg-gray-900 text-white hover:bg-cottage-rosy hover:shadow-xl hover:shadow-cottage-rosy"
                          : "bg-gradient-to-r from-cyan-600 to-cyan-500 text-white hover:to-cyan-400 hover:shadow-[0_0_25px_rgba(0,255,242,0.4)] border border-cyan-400/20"
                      }`}
                    >
                      {status === "loading" ? <Loader2 size={16} className="animate-spin" /> : <>Enviar <Send size={16} /></>}
                    </button>

                    {status === "success" && (
                      <div className="p-4 rounded-xl bg-green-50 text-green-700 text-center text-xs font-bold uppercase tracking-wide border border-green-200 animate-in fade-in slide-in-from-top-2">
                        Mensagem enviada! 💌
                      </div>
                    )}

                    {status === "error" && (
                      <div className="p-4 rounded-xl bg-red-50 text-red-700 text-center text-xs font-bold uppercase tracking-wide border border-red-200 animate-in fade-in slide-in-from-top-2">
                        Erro ao enviar. Tente novamente! ❌
                      </div>
                    )}
                  </form>
                </div>
             </div>
          </div>

        </div>
      </div>
      
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');`}</style>
    </div>
  );
};

export default ContactPage;
