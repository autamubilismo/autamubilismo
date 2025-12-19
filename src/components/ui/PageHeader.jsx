import React from 'react';

export const PageHeader = ({ 
  theme, 
  title, 
  subtitle, 
  badge, 
  icon: Icon,
  className = "" 
}) => {
  const isLight = theme === 'light';

  return (
    <div className={`mb-14 text-center md:text-left relative ${className}`}>
      {badge && (
        <span className={`inline-block px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-4 border ${
          isLight 
            ? 'bg-white/50 border-pink-200 text-pink-500 shadow-sm' 
            : 'bg-[#bd00ff]/10 border-[#bd00ff]/30 text-fuchsia-400 shadow-[0_0_10px_rgba(189,0,255,0.3)]'
        }`}>
          {Icon && <Icon size={12} className="inline mr-2" />}
          {badge}
        </span>
      )}
      
      <h1 className={`text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-6 ${
        isLight 
          ? 'text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600' 
          : 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-fuchsia-500 drop-shadow-[0_0_10px_rgba(0,255,242,0.4)]'
      }`}>
        {title}
      </h1>
      
      {subtitle && (
        <p className={`text-lg md:text-xl font-medium max-w-2xl mx-auto md:mx-0 ${
          isLight ? 'text-gray-500' : 'text-cyan-100/70'
        }`}>
          {subtitle}
        </p>
      )}
      
      <div className={`h-1.5 w-24 rounded-full mt-6 ${
        isLight 
          ? 'bg-gradient-to-r from-pink-300 to-purple-300' 
          : 'bg-gradient-to-r from-cyan-500 to-fuchsia-500'
      } mx-auto md:mx-0 shadow-[0_0_15px_currentColor]`} />
    </div>
  );
};