import React from 'react';
import { Send } from 'lucide-react';
import { BackButton } from '../components/UI';

const ContactPage = ({ theme }) => {
  const isLight = theme === 'light';
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-12">
      <BackButton to="/" theme={theme} />
      <div className="mb-8"><h2 className={`text-4xl font-black mb-2 ${isLight ? 'text-gray-800' : 'text-white'}`}>Contato & Sobre</h2></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className={`p-8 rounded-3xl flex flex-col justify-between ${isLight ? 'bg-white shadow-lg' : 'bg-[#121217] border border-[#333]'}`}><div><h3 className={`text-2xl font-bold mb-2 ${isLight ? 'text-gray-800' : 'text-white'}`}>Oi, sou a Tamu! 👋</h3><p className={`leading-relaxed mb-6 ${isLight ? 'text-gray-600' : 'text-gray-300'}`}>Criei o Autamubilismo para mostrar que velocidade e estética andam juntos.</p></div></div>
        <div className={`p-8 rounded-3xl ${isLight ? 'bg-white shadow-lg' : 'bg-[#121217] border border-[#333]'}`}><h3 className={`text-xl font-bold mb-6 ${isLight ? 'text-gray-800' : 'text-white'}`}>Mande um alô</h3><form className="space-y-4"><input type="text" className={`w-full p-4 rounded-xl outline-none ${isLight ? 'bg-gray-50' : 'bg-[#0a0a12] border border-[#333]'}`} placeholder="Nome" /><button className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 ${isLight ? 'bg-gray-900 text-white' : 'bg-[#00fff2] text-black'}`}>Enviar <Send size={20} /></button></form></div>
      </div>
    </div>
  );
};

export default ContactPage;