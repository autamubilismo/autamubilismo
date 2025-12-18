import React, { useState } from "react";
import {
  Send,
  Wrench,
  Heart,
  Sparkles,
  Instagram,
  Twitter,
  Mail,
  ChevronLeft,
  Loader2
} from "lucide-react";
import { Link } from 'react-router-dom';

// Componente BackButton Estilizado (Premium & Minimalista)
const BackButton = ({ to, theme }) => {
  const isLight = theme === 'light';
  return (
    <Link
      to={to}
      className={`group mb-8 inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold transition-all hover:pl-2 px-5 py-2.5 rounded-full ${
        isLight
          ? 'text-gray-400 hover:text-pink-500 hover:bg-white/60 hover:shadow-sm bg-white/30 backdrop-blur-sm border border-white/60' 
          : 'text-cyan-400 hover:text-white hover:bg-cyan-900/20 border border-cyan-500/30 bg-black/40 backdrop-blur-md shadow-[0_0_15px_rgba(0,255,242,0.15)] hover:shadow-[0_0_25px_cyan] hover:border-cyan-400'
      }`}
    >
      <ChevronLeft size={16} />
      Voltar
    </Link>
  );
};

const ContactPage = ({ theme }) => {
  const isLight = theme === "light";

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
      // Simulação de envio
      await new Promise(r => setTimeout(r, 1500));
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  // Ícone TikTok Oficial
  const TikTokIcon = ({ size = 20 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );

  // --- PADRÕES DE FUNDO "PREMIUM/GIRLIE" vs "VAPORWAVE" ---
  const lightPattern = {
    backgroundColor: '#FFF5F8',
    backgroundImage: `
      radial-gradient(at 0% 0%, rgba(247, 184, 200, 0.3) 0px, transparent 50%),
      radial-gradient(at 100% 0%, rgba(216, 196, 240, 0.3) 0px, transparent 50%),
      conic-gradient(from 0deg at 50% 50%, rgba(247, 184, 200, 0.1) 0deg, transparent 60deg, rgba(216, 196, 240, 0.1) 120deg, transparent 180deg, rgba(247, 184, 200, 0.1) 240deg, transparent 300deg, rgba(216, 196, 240, 0.1) 360deg)
    `,
    backgroundSize: '100% 100%'
  };

  const darkPattern = {
    backgroundColor: '#050510',
    backgroundImage: `
      linear-gradient(rgba(0, 255, 242, 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(189, 0, 255, 0.05) 1px, transparent 1px)
    `,
    backgroundSize: '40px 40px'
  };

  // --- CLASSES DE ESTILO (Refinadas para Vaporwave) ---
  const cardClass = isLight
    ? 'bg-white/60 backdrop-blur-2xl rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(200,180,220,0.2)] border border-white/80 ring-1 ring-white/60'
    : 'bg-[#090912]/80 backdrop-blur-xl rounded-[2rem] border border-fuchsia-500/30 hover:border-cyan-400/50 shadow-[0_0_30px_rgba(189,0,255,0.15)] hover:shadow-[0_0_50px_rgba(0,255,242,0.2)] ring-1 ring-white/5 transition-all duration-500';

  const inputClass = isLight
    ? "bg-white/70 border-gray-100 focus:border-pink-300 focus:ring-4 focus:ring-pink-50 text-gray-800 placeholder-gray-400 shadow-sm transition-all duration-300 hover:bg-white"
    : "bg-[#12121a] border-[#333] focus:border-cyan-400/80 focus:ring-1 focus:ring-cyan-400/50 text-white placeholder-gray-600 transition-all duration-300 hover:bg-[#1a1a24] shadow-inner";

  const labelClass = `block text-[10px] font-bold uppercase tracking-[0.2em] mb-2.5 ml-1 ${
    isLight ? "text-gray-400" : "text-fuchsia-400 drop-shadow-[0_0_5px_rgba(232,121,249,0.5)]"
  }`;

  return (
    <div 
      className={`min-h-screen p-4 md:p-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 flex flex-col`} 
      style={isLight ? lightPattern : darkPattern}
    >
      
      {/* Luz de Fundo Decorativa */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden mix-blend-screen">
         <div className={`absolute top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full blur-[120px] opacity-30 ${isLight ? 'bg-pink-100' : 'bg-[#bd00ff]/30 animate-pulse'}`} />
         <div className={`absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full blur-[100px] opacity-30 ${isLight ? 'bg-purple-100' : 'bg-[#00fff2]/20 animate-pulse'}`} />
         {/* Vaporwave Horizon Line (Dark Mode Only) */}
         {!isLight && <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent shadow-[0_0_20px_cyan]" />}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <BackButton to="/" theme={theme} />

        <div className="mb-16 text-center md:text-left px-2 relative">
          <h2
            className={`text-6xl md:text-8xl font-black mb-4 tracking-tighter leading-[0.85] ${
              isLight 
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900' 
                : 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-fuchsia-500 drop-shadow-[0_0_10px_rgba(0,255,242,0.4)]'
            }`}
          >
            Quem faz?
          </h2>
          <p className={`text-xl md:text-2xl font-light tracking-tight max-w-xl ${isLight ? "text-gray-500" : "text-cyan-200/80"}`}>
            Conheça a mente e o coração por trás do projeto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          
          {/* --- BIO CARD --- */}
          <div className={`lg:col-span-3 p-10 md:p-14 relative overflow-hidden flex flex-col justify-between group ${cardClass}`}>
            
            {/* Elemento Decorativo Sutil */}
            <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${isLight ? 'from-pink-100/50' : 'from-fuchsia-600/20'} to-transparent rounded-bl-[100%] pointer-events-none opacity-60`} />
            
            <Sparkles
              className={`absolute top-10 right-10 w-32 h-32 opacity-5 rotate-12 pointer-events-none ${
                isLight ? "text-gray-900" : "text-cyan-400"
              }`}
            />

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-12">
                <div
                  className={`w-24 h-24 md:w-32 md:h-32 rounded-[2rem] flex items-center justify-center text-5xl md:text-6xl shadow-2xl transition-transform duration-500 hover:rotate-3 hover:scale-105 ${
                    isLight
                      ? "bg-white text-pink-500 ring-1 ring-gray-100"
                      : "bg-[#1a1a20] text-cyan-400 border border-cyan-500/50 shadow-[0_0_20px_rgba(0,255,242,0.3)]"
                  }`}
                >
                  👩‍💻
                </div>
                <div>
                  <h3
                    className={`text-4xl md:text-5xl font-black leading-none mb-3 tracking-tighter ${
                      isLight ? "text-gray-900" : "text-white drop-shadow-md"
                    }`}
                  >
                    Oi, sou a Tamu!
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className={`h-px w-8 ${isLight ? 'bg-pink-300' : 'bg-gradient-to-r from-cyan-500 to-fuchsia-500'}`}></span>
                    <span
                      className={`text-xs font-bold uppercase tracking-[0.25em] ${
                        isLight 
                          ? "text-pink-500" 
                          : "text-fuchsia-400 drop-shadow-[0_0_5px_rgba(232,121,249,0.8)]"
                      }`}
                    >
                      Founder & Editora
                    </span>
                  </div>
                </div>
              </div>

              <div
                className={`space-y-6 text-lg md:text-xl leading-relaxed font-light ${
                  isLight ? "text-gray-600" : "text-gray-300"
                }`}
              >
                <p>
                  Me chamo <strong className={isLight ? "font-bold text-gray-900" : "text-cyan-300 font-bold"}>Tamara Viamonte</strong>, tenho 33 anos, uma filha, sou designer,
                  biomédica e aspirante a jornalista amadora neste site.
                </p>
                
                <div className={`pl-6 border-l-2 ${isLight ? 'border-pink-200' : 'border-cyan-500/50'} my-8 py-2`}>
                  <p className="italic text-2xl md:text-3xl font-serif opacity-90">
                    "O automobilismo vem ganhando cada vez mais garotas, e eu queria criar um espaço seguro."
                  </p>
                </div>

                <p className="flex items-center flex-wrap gap-2">
                  Aqui, meu compromisso é misturar{" "}
                  <span className={`inline-block px-2 py-0.5 rounded-md text-sm font-bold uppercase tracking-wider ${isLight ? 'bg-purple-100 text-purple-700' : 'bg-fuchsia-900/30 text-fuchsia-300 border border-fuchsia-500/30'}`}>informação séria</span> com feminilidade, cuidado e capricho.
                  <Heart size={20} className={`${isLight ? 'text-red-500' : 'text-pink-500'} fill-current animate-pulse`} />
                </p>
              </div>
            </div>

            {/* REDES SOCIAIS REFINADAS */}
            <div
              className={`mt-14 pt-8 border-t ${
                isLight ? "border-gray-200/50" : "border-white/10"
              } flex flex-col md:flex-row items-center justify-between gap-6 relative z-10`}
            >
              <span
                className={`text-[10px] font-bold uppercase tracking-[0.3em] ${
                  isLight ? "text-gray-400" : "text-cyan-600"
                }`}
              >
                Vamos conversar?
              </span>
              <div className="flex gap-4">
                {[
                  { href: "https://instagram.com/autamubilismo", icon: Instagram, label: "Instagram" },
                  { href: "https://twitter.com/autamubilismo", icon: Twitter, label: "Twitter" },
                  { href: "https://tiktok.com/@autamubilismo", icon: TikTokIcon, label: "TikTok" },
                  { href: "mailto:autamubilismo@gmail.com", icon: Mail, label: "Email" },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative p-4 rounded-2xl transition-all duration-300 hover:-translate-y-2 ${
                      isLight
                        ? "bg-white text-gray-400 hover:text-gray-900 hover:shadow-xl hover:shadow-pink-100/50"
                        : "bg-white/5 text-gray-500 hover:bg-black/60 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(0,255,242,0.4)] hover:border-cyan-500/50 border border-transparent"
                    }`}
                  >
                    <social.icon size={22} strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* --- FORMULÁRIO DE CONTATO (Minimalista & Elegante) --- */}
          <div className={`lg:col-span-2 p-10 md:p-12 flex flex-col justify-center relative ${cardClass}`}>
            
            <div className="relative z-10">
              <h3
                className={`text-3xl font-black mb-3 tracking-tight ${
                  isLight ? "text-gray-900" : "text-white"
                }`}
              >
                Mande um alô
              </h3>
              <p
                className={`text-sm mb-12 font-medium leading-relaxed opacity-60 ${
                  isLight ? "text-gray-600" : "text-cyan-100"
                }`}
              >
                Sugestões, parcerias ou só para falar de F1. Prometo responder o mais rápido possível!
              </p>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="group">
                  <label className={labelClass}>Seu Nome</label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full p-5 rounded-2xl outline-none ${inputClass}`}
                    placeholder="Como você se chama?"
                  />
                </div>

                <div className="group">
                  <label className={labelClass}>Seu E-mail</label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full p-5 rounded-2xl outline-none ${inputClass}`}
                    placeholder="email@exemplo.com"
                  />
                </div>

                <div className="group">
                  <label className={labelClass}>Mensagem</label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full p-5 rounded-2xl resize-none outline-none ${inputClass}`}
                    placeholder="Escreva sua mensagem aqui..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className={`w-full py-5 rounded-2xl font-black text-xs uppercase tracking-[0.25em] flex items-center justify-center gap-3 mt-8 transition-all duration-500 active:scale-[0.98] ${
                    isLight
                      ? "bg-gray-900 text-white hover:bg-pink-500 hover:shadow-2xl hover:shadow-pink-200"
                      : "bg-[#bd00ff] text-white hover:bg-fuchsia-500 hover:shadow-[0_0_30px_rgba(189,0,255,0.6)] shadow-[0_0_15px_rgba(189,0,255,0.3)]"
                  }`}
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" /> Enviando
                    </>
                  ) : (
                    <>
                      Enviar Mensagem <Send size={16} />
                    </>
                  )}
                </button>

                {status === "success" && (
                  <div className="p-4 rounded-2xl bg-green-50 text-green-700 text-center text-xs font-bold uppercase tracking-wide border border-green-100 animate-in fade-in slide-in-from-top-2 mt-4">
                    Mensagem enviada com sucesso! 💌
                  </div>
                )}

                {status === "error" && (
                  <div className="p-4 rounded-2xl bg-red-50 text-red-700 text-center text-xs font-bold uppercase tracking-wide border border-red-100 animate-in fade-in slide-in-from-top-2 mt-4">
                    Opa… deu erro ao enviar.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;