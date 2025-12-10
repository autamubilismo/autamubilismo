import React, { useState } from 'react';
import { Send, Wrench, Heart, Sparkles, Instagram, Twitter, Mail } from 'lucide-react';
import { BackButton } from '../components/UI';

const ContactPage = ({ theme }) => {
  const isLight = theme === 'light';
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
const [status, setStatus] = useState("idle"); // idle | loading | success | error


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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

    // 🎯 Agora chama SUA API, não a Brevo diretamente
    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await res.json();

    if (res.ok) {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      console.log("✅ Email enviado! ID:", data.messageId);
    } else {
      console.error("❌ Erro Brevo:", data);
      setStatus("error");
    }
  } catch (err) {
    console.error("❌ Erro geral:", err);
    setStatus("error");
  }
};



  // Ícone do TikTok Customizado
  const TikTokIcon = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );

  // Classes de estilo
  const cardClass = isLight
    ? 'bg-white shadow-xl border-2 border-transparent'
    : 'bg-[#121217] border border-[#333] shadow-[0_0_15px_rgba(254,136,221,0.05)]';

  const inputClass = isLight
    ? 'bg-gray-50 border-gray-200 focus:border-[#F7B8C8] focus:ring-[#F7B8C8] text-gray-800'
    : 'bg-[#0a0a12] border-[#333] focus:border-[#caa5d8] focus:ring-[#caa5d8] text-white placeholder-gray-600';

  const labelClass = `block text-[10px] font-black uppercase tracking-widest mb-2 ${isLight ? 'text-gray-400' : 'text-gray-500'}`;

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-12">
      <BackButton to="/" theme={theme} />

      <div className="mb-10 text-center md:text-left px-2">
        {/* Título sem fonte Russo One, apenas Bold */}
        <h2 className={`text-4xl md:text-6xl font-black mb-2 ${isLight ? 'text-gray-800' : 'text-white'}`}>
          Quem faz?
        </h2>
        <p className={`${isLight ? 'text-gray-500' : 'text-gray-400'}`}>Um pouco sobre a pilota desse projeto.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

        {/* COLUNA DA BIO */}
        <div className={`lg:col-span-3 p-8 md:p-10 rounded-[2.5rem] relative overflow-hidden flex flex-col justify-between ${cardClass}`}>
           {/* Decoração de fundo */}
           <Sparkles className={`absolute top-[-20px] right-[-20px] w-40 h-40 opacity-5 rotate-12 ${isLight ? 'text-pink-600' : 'text-[#caa5d8]'}`} />

           <div className="relative z-10">
              <div className="flex items-center gap-5 mb-8">
                 <div className={`w-20 h-20 rounded-full flex items-center justify-center text-3xl shadow-inner ${isLight ? 'bg-pink-50 border-4 border-white' : 'bg-[#caa5d8]/10 text-[#caa5d8] border-4 border-[#caa5d8]/20'}`}>
                    👩‍💻
                 </div>
                 <div>
                    <h3 className={`text-3xl font-black leading-none ${isLight ? 'text-gray-800' : 'text-white'}`}>Oi, sou a Tamu!</h3>
                    <span className={`text-xs font-bold uppercase tracking-widest ${isLight ? 'text-pink-400' : 'text-[#caa5d8]'}`}>Founder & Editora</span>
                 </div>
              </div>

              <div className={`space-y-5 text-lg leading-relaxed ${isLight ? 'text-gray-600' : 'text-gray-300'}`}>
                 <p>
                   Tenho <strong>33 anos</strong>, uma filha, sou designer, biomédica e aspirante a jornalista amadora neste site.
                 </p>
                 <p>
                   Sou apaixonada por carros desde pequena. Com um <strong>pai mecânico</strong> <Wrench size={18} className={`inline mb-1 ${isLight?'text-gray-400':'text-gray-500'}`} />, cresci entre motores e lanternas.
                 </p>
                 
                 <div className={`p-6 rounded-3xl my-8 ${isLight ? 'bg-[#FFF5F8] border-l-4 border-[#F7B8C8]' : 'bg-[#caa5d8]/5 border-l-4 border-[#caa5d8]'}`}>
                    <p className={`italic font-medium ${isLight ? 'text-gray-700' : 'text-gray-200'}`}>
                      "O automobilismo vem ganhando cada vez mais garotas, e eu queria criar um espaço seguro para todos os públicos."
                    </p>
                 </div>

                 <p>
                   Aqui, meu compromisso é misturar <strong>informação séria</strong> com feminilidade, cuidado e capricho. <Heart size={18} className="inline text-red-400 fill-current" />
                 </p>
              </div>
           </div>

           {/* REDES SOCIAIS */}
           <div className={`mt-10 pt-8 border-t ${isLight ? 'border-gray-100' : 'border-white/5'} flex flex-col sm:flex-row items-center justify-between gap-4`}>
              <span className={`text-[10px] font-black uppercase tracking-widest ${isLight ? 'text-gray-400' : 'text-gray-500'}`}>
                Vamos conversar?
              </span>
              <div className="flex gap-3">
                 <a href="https://instagram.com/autamubilismo" target="_blank" rel="noopener noreferrer" className={`p-3 rounded-full transition-all hover:scale-110 ${isLight ? 'bg-pink-50 text-pink-500 hover:bg-pink-100' : 'bg-[#caa5d8]/10 text-[#caa5d8] hover:bg-[#caa5d8]/20'}`}>
                    <Instagram size={20} />
                 </a>
                 <a href="https://twitter.com/autamubilismo" target="_blank" rel="noopener noreferrer" className={`p-3 rounded-full transition-all hover:scale-110 ${isLight ? 'bg-blue-50 text-blue-400 hover:bg-blue-100' : 'bg-blue-500/10 text-blue-400 hover:bg-blue-500/20'}`}>
                    <Twitter size={20} />
                 </a>
                 <a href="https://tiktok.com/@autamubilismo" target="_blank" rel="noopener noreferrer" className={`p-3 rounded-full transition-all hover:scale-110 ${isLight ? 'bg-gray-100 text-black hover:bg-gray-200' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                    <TikTokIcon size={20} />
                 </a>
                 <a href="mailto:autamubilismo@gmail.com" className={`p-3 rounded-full transition-all hover:scale-110 ${isLight ? 'bg-yellow-50 text-yellow-600 hover:bg-yellow-100' : 'bg-yellow-500/10 text-yellow-400 hover:bg-yellow-500/20'}`}>
                    <Mail size={20} />
                 </a>
              </div>
           </div>
        </div>

        {/* COLUNA DO FORMULÁRIO */}
        <div className={`lg:col-span-2 p-8 rounded-[2.5rem] flex flex-col justify-center ${cardClass}`}>
          <h3 className={`text-2xl font-black mb-1 ${isLight ? 'text-gray-800' : 'text-white'}`}>Mande um alô</h3>
          <p className={`text-sm mb-8 ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>Sugestões, parcerias ou só pra falar de F1.</p>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="space-y-1">
               <label className={labelClass}>Seu Nome</label>
               <input 
                 name="name" 
                 value={formData.name} 
                 onChange={handleChange} 
                 type="text" 
                 className={`w-full p-4 rounded-2xl outline-none border transition-all focus:ring-2 focus:ring-opacity-20 ${inputClass}`} 
                 placeholder="Ex: Ayrton Senna" 
               />
            </div>

            <div className="space-y-1">
               <label className={labelClass}>Seu E-mail</label>
               <input 
                 name="email" 
                 value={formData.email} 
                 onChange={handleChange} 
                 type="email" 
                 className={`w-full p-4 rounded-2xl outline-none border transition-all focus:ring-2 focus:ring-opacity-20 ${inputClass}`} 
                 placeholder="exemplo@email.com" 
               />
            </div>

            <div className="space-y-1">
               <label className={labelClass}>Mensagem</label>
               <textarea 
                 name="message" 
                 value={formData.message} 
                 onChange={handleChange} 
                 rows="5" 
                 className={`w-full p-4 rounded-2xl outline-none border transition-all focus:ring-2 focus:ring-opacity-20 resize-none ${inputClass}`} 
                 placeholder="O que você achou da última corrida?"
               ></textarea>
            </div>

            <button
  type="submit"
  disabled={status === "loading"}
  className={`w-full py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg mt-4 ${
    isLight
      ? "bg-gray-900 text-white hover:bg-black shadow-gray-300 disabled:opacity-60 disabled:hover:bg-gray-900"
      : "bg-[#caa5d8] text-white hover:bg-[#e06fc0] shadow-[#caa5d8]/20 disabled:opacity-60 disabled:hover:bg-[#caa5d8]"
  }`}
>
  {status === "loading" ? "Enviando..." : "Enviar Mensagem"} <Send size={20} />
</button>
{status === "success" && (
  <p className="text-sm text-green-500 mt-2">
    Mensagem enviada com sucesso! 💌
  </p>
)}

{status === "error" && (
  <p className="text-sm text-red-500 mt-2">
    Opa… deu erro ao enviar. Tenta de novo em alguns minutos.
  </p>
)}

          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;