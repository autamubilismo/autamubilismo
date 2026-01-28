import React from 'react';
import { Loader2 } from 'lucide-react';

export const LoadingSpinner = ({ theme, size = 'medium', text = 'Carregando...' }) => {
  const isLight = theme === 'light';

  const sizeClasses = {
    small: 'w-6 h-6',
    medium: 'w-10 h-10',
    large: 'w-16 h-16'
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 py-12">
      <Loader2
        className={`animate-spin ${sizeClasses[size]} ${
          isLight ? 'text-[#D3968C]' : 'text-cyan-400'
        }`}
      />
      {text && (
        <p className={`text-sm font-bold tracking-wide ${
          isLight ? 'text-[#105666]/70' : 'text-gray-400'
        }`}>
          {text}
        </p>
      )}
    </div>
  );
};
