import React from 'react';

const lightPattern = {
  backgroundColor: '#FFF0F5',
  backgroundImage: `
    radial-gradient(at 0% 0%, rgba(255, 182, 193, 0.4) 0px, transparent 50%),
    radial-gradient(at 100% 0%, rgba(216, 196, 240, 0.4) 0px, transparent 50%),
    conic-gradient(from 0deg at 50% 50%, rgba(255, 255, 255, 0.8) 0deg, transparent 60deg, rgba(255, 255, 255, 0.5) 120deg)
  `,
  backgroundSize: '100% 100%'
};

const darkPattern = {
  backgroundColor: '#050510',
  backgroundImage: `
    linear-gradient(rgba(0, 255, 242, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(189, 0, 255, 0.05) 1px, transparent 1px),
    radial-gradient(at 50% 0%, rgba(189, 0, 255, 0.2) 0px, transparent 70%)
  `,
  backgroundSize: '40px 40px, 40px 40px, 100% 100%'
};

export const PageContainer = ({ theme, children, className = "" }) => {
  const isLight = theme === 'light';
  
  return (
    <div 
      className={`min-h-screen p-6 md:p-12 animate-in fade-in slide-in-from-bottom-6 duration-700 font-sans ${
        isLight 
          ? 'selection:bg-pink-300 selection:text-white' 
          : 'selection:bg-cyan-500 selection:text-black'
      } ${className}`}
      style={isLight ? lightPattern : darkPattern}
    >
      {/* Luzes decorativas flutuantes */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden mix-blend-screen">
        <div className={`absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full blur-[120px] opacity-30 ${
          isLight ? 'bg-pink-200' : 'bg-[#bd00ff]/30 animate-pulse'
        }`} />
        <div className={`absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full blur-[100px] opacity-20 ${
          isLight ? 'bg-purple-200' : 'bg-[#00fff2]/20 animate-pulse'
        }`} />
        {!isLight && (
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent shadow-[0_0_20px_cyan]" />
        )}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {children}
      </div>
    </div>
  );
};