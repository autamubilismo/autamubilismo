import React from 'react';
import Link from 'next/link';
import { Heart } from 'lucide-react';

export const BentoCard = ({ children, className, theme, title, subtitle, onClick, to, noPadding = false }) => {
  const isLight = theme === 'light';
  
  const content = (
    <div className={`relative z-10 h-full flex flex-col ${noPadding ? '' : 'p-6 md:p-8'}`}>
      {(title || subtitle) && (
        <div className="mb-5 relative">
          {subtitle && (
            <span className={`text-[10px] md:text-xs font-black tracking-[0.2em] uppercase mb-2 block opacity-80 ${isLight ? 'text-pink-400' : 'text-cyan-400'}`}>
              {subtitle}
            </span>
          )}
          {title && (
            <h3 className={`text-xl md:text-2xl font-black leading-none ${isLight ? 'text-gray-900' : 'text-white font-mono'}`}>
              {title}
            </h3>
          )}
          {isLight && <Heart size={12} className="absolute -right-2 top-0 text-pink-300 opacity-50 rotate-12" />}
        </div>
      )}
      {children}
    </div>
  );
  
  const baseClasses = `relative overflow-hidden transition-all duration-500 group ${className} 
    ${isLight 
      ? 'bg-white/60 backdrop-blur-xl rounded-[2.5rem] shadow-[0_10px_30px_rgba(255,182,193,0.3)] border border-pink-100 hover:border-pink-300 hover:shadow-[0_20px_50px_rgba(255,105,180,0.25)] hover:-translate-y-1' 
      : 'bg-[#090912]/80 backdrop-blur-xl rounded-[2rem] border border-white/5 hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(0,255,242,0.15)] hover:-translate-y-1 ring-1 ring-white/5'
    } active:scale-[0.98]`;
  
  const CardWrapper = ({ children }) => (
    <>
      <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${isLight ? 'from-pink-100/40' : 'from-cyan-900/10'} to-transparent opacity-50 pointer-events-none`} />
      <div 
        className={`absolute inset-0 opacity-[0.05] pointer-events-none group-hover:opacity-[0.1] transition-opacity duration-700`} 
        style={{ 
          backgroundImage: isLight 
            ? 'radial-gradient(circle at 2px 2px, #ec4899 1px, transparent 0)' 
            : 'linear-gradient(to right, #4f4f4f 1px, transparent 1px), linear-gradient(to bottom, #4f4f4f 1px, transparent 1px)', 
          backgroundSize: isLight ? '24px 24px' : '40px 40px' 
        }} 
      />
      {children}
    </>
  );
  
  if (to) {
    return (
      <Link href={to} className={baseClasses}>
        <CardWrapper>{content}</CardWrapper>
      </Link>
    );
  }
  
  return (
    <div onClick={onClick} className={`${baseClasses} ${onClick ? 'cursor-pointer' : ''}`}>
      <CardWrapper>{content}</CardWrapper>
    </div>
  );
};
