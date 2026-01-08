'use client';
import React, { useState } from 'react';
import { Mail, Loader2, RotateCcw } from 'lucide-react';

export const NewsletterWidget = ({ theme }) => {
  const isLight = theme === "light";
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);
  
  const handleSubmit = async (e) => { 
    e.preventDefault(); 
    if (!email) return; 
    try { 
      setStatus("loading"); 
      await new Promise(r => setTimeout(r, 1500)); 
      setStatus("success"); 
      setEmail(""); 
    } catch (error) { 
      setStatus("error"); 
    } 
  };
  
  return (
    <div className="h-full flex flex-col items-center justify-center p-6 md:p-10 gap-6 relative z-10">
      {/* Ícone decorativo de fundo */}
      <Mail className={`absolute -right-4 -top-4 w-40 h-40 opacity-5 pointer-events-none rotate-12 ${isLight ? 'text-purple-600' : 'text-cyan-500'}`} />
      
      {/* Header com ícone e texto - CENTRALIZADO */}
      <div className="flex flex-col items-center text-center gap-4 relative z-10">
        <div className={`p-5 md:p-6 rounded-3xl shadow-md ${isLight ? "bg-white text-purple-400" : "bg-[#1a1a20] border border-fuchsia-500/30 text-fuchsia-400"}`}>
          <Mail size={32} />
        </div>
        <div>
          <h3 className={`font-black text-xl md:text-2xl mb-1 ${isLight ? 'text-gray-800' : 'text-white'}`}>
            Newsletter
          </h3>
          <p className={`text-xs md:text-sm font-medium ${isLight ? 'text-gray-400' : 'text-cyan-200'}`}>
            Fofocas quentinhas na sua caixa de entrada.
          </p>
        </div>
      </div>
      
      {/* Form - CENTRALIZADO */}
      <form className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full max-w-lg relative z-10" onSubmit={handleSubmit}>
        <div className="relative flex-1 group">
          <input 
            type="email" 
            placeholder="seu@email.com" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className={`w-full h-12 md:h-14 px-5 md:px-6 rounded-2xl text-sm md:text-base font-bold outline-none transition-all text-center sm:text-left ${isLight ? "bg-white border-2 border-transparent focus:border-pink-300 text-gray-800 placeholder-gray-300 shadow-md" : "bg-[#0a0a12] border border-[#333] focus:border-cyan-400 text-white placeholder-gray-600"}`} 
          />
        </div>
        <button 
          type="submit" 
          disabled={status === "loading" || status === "success"} 
          className={`h-12 md:h-14 px-6 md:px-10 rounded-2xl font-black text-xs md:text-sm uppercase tracking-wider transition-all active:scale-95 whitespace-nowrap shadow-xl flex items-center justify-center gap-3 ${isLight ? "bg-gray-900 hover:bg-black text-white hover:shadow-2xl" : "bg-fuchsia-600 hover:bg-fuchsia-500 text-white shadow-[0_0_20px_rgba(192,38,211,0.4)] hover:shadow-[0_0_30px_rgba(192,38,211,0.6)]"} ${status === "success" ? "bg-green-500 hover:bg-green-600" : ""}`}
        >
          {status === "loading" && <Loader2 size={18} className="animate-spin" />}
          {status === "success" ? "Enviado!" : "Assinar"}
        </button>
      </form>

      {/* Mensagem de status */}
      {status === "success" && (
        <div className={`text-xs font-bold uppercase tracking-wider animate-in fade-in slide-in-from-bottom-2 ${
          isLight ? 'text-green-600' : 'text-green-400'
        }`}>
          ✓ Você será notificado das novidades!
        </div>
      )}
      
      {status === "error" && (
        <div className={`text-xs font-bold uppercase tracking-wider animate-in fade-in slide-in-from-bottom-2 ${
          isLight ? 'text-red-600' : 'text-red-400'
        }`}>
          ✗ Ops! Algo deu errado. Tente novamente.
        </div>
      )}
    </div>
  );
};

export const KpopPhotocard = ({ driver, theme, onClick }) => {
  const isLight = theme === 'light';
  const [isFlipped, setIsFlipped] = useState(false);
  const surname = driver.name.split(' ').slice(-1)[0].toLowerCase();
  
  return (
    <div 
      className="group relative w-full aspect-[3/4.2] cursor-pointer" 
      style={{ perspective: '1200px' }} 
      onClick={(e) => { 
        e.stopPropagation(); 
        setIsFlipped(!isFlipped); 
        if (onClick) onClick(); 
      }}
    >
      <div 
        className="relative w-full h-full transition-all duration-700 ease-out-back" 
        style={{ 
          transformStyle: 'preserve-3d', 
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' 
        }}
      >
        {/* Frente */}
        <div 
          className={`absolute inset-0 rounded-[2.5rem] overflow-hidden ${isLight ? 'border-[8px] border-white ring-4 ring-pink-200 shadow-2xl' : 'border-[6px] border-[#1a1a20] ring-4 ring-fuchsia-500/50 shadow-[0_0_30px_rgba(232,121,249,0.3)]'} bg-gray-200 z-10`} 
          style={{ backfaceVisibility: 'hidden' }}
        >
          <img src={driver.photocardImage} alt={driver.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute top-4 right-5 text-8xl font-black text-white opacity-20 pointer-events-none tracking-tighter mix-blend-overlay">
            {driver.number}
          </div>
          <div className="absolute bottom-0 left-0 w-full p-6 z-10 flex flex-col items-center text-center">
            <h3 className="text-4xl font-black text-white leading-none drop-shadow-lg tracking-tighter uppercase mb-2">
              {surname}
            </h3>
            <div className="flex items-center justify-center gap-2 text-white/90 text-[10px] font-bold uppercase tracking-[0.2em] animate-pulse bg-white/20 px-4 py-1.5 rounded-full backdrop-blur-md border border-white/10">
              <RotateCcw size={12} /> Virar
            </div>
          </div>
        </div>
        
        {/* Verso */}
        <div 
          className={`absolute inset-0 rounded-[2.5rem] p-6 flex flex-col justify-between text-center ${isLight ? 'bg-gradient-to-br from-pink-50 via-white to-purple-50 border-[8px] border-white ring-4 ring-pink-200' : 'bg-[#09090c] border-[6px] border-[#1a1a20] ring-4 ring-cyan-500/50 shadow-[0_0_20px_rgba(0,255,242,0.3)]'}`} 
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="flex flex-col items-center gap-3 mt-4">
            <div className={`w-24 h-24 rounded-full overflow-hidden border-4 shadow-lg ${isLight ? 'border-pink-300' : 'border-cyan-400'}`}>
              <img src={driver.photocardImage} className="w-full h-full object-cover" alt="Avatar" />
            </div>
            <div>
              <h3 className={`font-black text-2xl leading-none ${isLight ? 'text-gray-800' : 'text-white'}`}>
                {driver.name}
              </h3>
              <span className={`inline-block mt-2 px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest ${isLight ? 'bg-pink-100 text-pink-600' : 'bg-fuchsia-900/30 text-fuchsia-300 border border-fuchsia-500/30'}`}>
                {driver.team}
              </span>
            </div>
          </div>
          <div className={`flex justify-center gap-4 text-xs font-bold uppercase tracking-widest ${isLight ? 'text-gray-400' : 'text-gray-500'}`}>
            <span>{driver.zodiac}</span>
            <span>•</span>
            <span>#{driver.number}</span>
          </div>
          <div className={`p-5 rounded-2xl text-sm italic font-medium relative mx-2 ${isLight ? 'bg-white/80 text-gray-600 shadow-inner ring-1 ring-pink-100' : 'bg-[#1a1a20] text-cyan-200 border border-cyan-500/20'}`}>
            <span className="absolute -top-3 -left-2 text-4xl opacity-20 font-serif">"</span>
            {driver.secretFact}
            <span className="absolute -bottom-5 -right-2 text-4xl opacity-20 font-serif">"</span>
          </div>
          <div className="mt-2 transform -rotate-6 opacity-60 pb-4">
            <p className={`font-handwriting text-3xl ${isLight ? 'text-pink-400' : 'text-fuchsia-400'}`} style={{ fontFamily: 'cursive' }}>
              {driver.signature}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};