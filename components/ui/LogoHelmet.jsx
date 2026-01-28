import React, { useState } from 'react';
import { LOGO_IMG_LIGHT, LOGO_IMG_DARK, HELMET_ICON } from '../../constants/theme';

export const LogoHelmet = ({ theme, size = 'normal' }) => {
  const isLight = theme === 'light';
  const [imgError, setImgError] = useState(false);
  
  const logoUrl = isLight ? LOGO_IMG_LIGHT : LOGO_IMG_DARK;
  
  const mobileHelmetSize = size === 'large' ? "h-16" : "h-12"; 
  const desktopLogoSize = size === 'large' ? "h-48 lg:h-56 xl:h-64" : "h-20 md:h-24"; 

  if (!imgError) {
    return (
      <div className={`relative flex items-center justify-center ${size === 'large' ? 'p-2 md:p-4' : ''}`}>
        <div className={`absolute inset-0 blur-2xl opacity-40 rounded-full ${isLight ? 'bg-cottage-rosy' : 'bg-cyan-500'} animate-pulse`} />
        
        <img 
          src={HELMET_ICON} 
          alt="Autamubilismo Helmet" 
          className={`${mobileHelmetSize} w-auto object-contain transition-all duration-500 drop-shadow-lg relative z-10 md:hidden`}
          onError={() => setImgError(true)} 
        />
        
        <img 
          src={logoUrl} 
          alt="Autamubilismo" 
          className={`hidden md:block ${desktopLogoSize} w-auto max-w-[500px] object-contain transition-all duration-500 drop-shadow-lg relative z-10`}
          onError={() => setImgError(true)} 
        />
      </div>
    );
  }
  
  return (
    <div className="flex flex-col justify-center items-center md:items-start leading-none select-none relative z-10">
      <h1 className={`font-black tracking-tighter italic ${size === 'large' ? 'text-3xl md:text-6xl lg:text-7xl' : 'text-xl md:text-2xl'} ${isLight ? 'text-transparent bg-clip-text bg-gradient-to-r from-cottage-rosy via-cottage-rosy to-cottage-rosy' : 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-cyan-400'}`}>
        AUTA<span className={isLight ? 'text-cottage-rosy' : 'text-fuchsia-400'}>MU</span>BILISMO
      </h1>
    </div>
  );
};