import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

export const BackButton = ({ theme, to }) => {
  const router = useRouter();
  const isLight = theme === 'light';

  const handleClick = () => {
    if (to) {
      router.push(to);
    } else {
      router.back();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`group flex items-center gap-2 px-4 py-2.5 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 ${
        isLight
          ? 'bg-white text-[#0A3323] shadow-md hover:shadow-lg hover:text-[#D3968C] border border-[#D3968C]/20'
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
