'use client';

import Link from 'next/link';
import { CheckCircle, Mail, ArrowLeft } from 'lucide-react';
import { BackButton } from '../../components/ui';
import { useTheme } from '@/components/layout/ThemeContext';

const NewsletterSuccess = () => {
  const { theme } = useTheme();
  const resolvedTheme = theme || 'light';
  const isLight = resolvedTheme === 'light';

  const cardBg = isLight 
    ? 'bg-white shadow-xl border-2 border-transparent' 
    : 'bg-[#121217] border border-[#333] shadow-[0_0_20px_rgba(255,0,85,0.1)]';

  const iconBg = isLight ? 'bg-green-100 text-green-600' : 'bg-[#bd00ff]/20 text-[#bd00ff] border border-[#bd00ff]/30';

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 animate-in fade-in zoom-in duration-500">
      
      <div className={`max-w-md w-full p-8 md:p-12 rounded-[3rem] text-center relative overflow-hidden ${cardBg}`}>
        
        {/* Confete/Brilho de fundo */}
        <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent ${isLight ? 'via-[#F7B8C8]' : 'via-[#bd00ff]'} to-transparent opacity-50`}></div>

        <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${iconBg}`}>
           <CheckCircle size={40} />
        </div>

        <h1 className={`text-3xl md:text-4xl font-black mb-4 ${isLight ? 'text-gray-800' : 'text-white'}`} style={{ fontFamily: "'Russo One', sans-serif" }}>
          Bem-vindo ao Paddock!
        </h1>
        
        <p className={`text-lg mb-8 leading-relaxed ${isLight ? 'text-gray-600' : 'text-gray-300'}`}>
          Sua inscrição foi confirmada. <br/>
          Agora você receberá as melhores fofocas e análises da F1 direto na sua caixa de entrada. 🏎️💨
        </p>

        <div className={`p-4 rounded-2xl mb-8 flex items-center gap-3 text-sm text-left ${isLight ? 'bg-gray-50 text-gray-500' : 'bg-white/5 text-gray-400'}`}>
           <Mail size={20} className="shrink-0" />
           <span>Fique de olho no seu e-mail, já enviamos um "olá" pra você confirmar.</span>
        </div>

        <Link 
          href="/" 
          className={`inline-flex items-center justify-center w-full py-4 rounded-2xl font-bold text-lg transition-transform active:scale-95 ${isLight ? 'bg-gray-900 text-white hover:bg-black' : 'bg-[#bd00ff] text-white hover:bg-[#d40046] shadow-lg shadow-[#bd00ff]/20'}`}
        >
           Voltar para a Home
        </Link>

      </div>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');`}</style>
    </div>
  );
};

export default NewsletterSuccess;
