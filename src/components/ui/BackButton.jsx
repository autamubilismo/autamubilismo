import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const BackButton = ({ theme, to }) => {
  const navigate = useNavigate();
  const isLight = theme === 'light';

  const handleClick = () => {
    if (to) {
      navigate(to);
    } else {
      navigate(-1);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`group flex items-center gap-2 px-4 py-2.5 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 ${
        isLight
          ? 'bg-white text-gray-800 shadow-md hover:shadow-lg hover:text-pink-500 border border-gray-100'
          : 'bg-[#1a1a20] text-white border border-[#333] hover:text-cyan-400 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(0,255,242,0.2)]'
      }`}
    >
      <ArrowLeft
        size={20}
        className="transition-transform group-hover:-translate-x-1"
      />
      <span className="font-black text-xs tracking-widest uppercase">
        Voltar
      </span>
    </button>
  );
};