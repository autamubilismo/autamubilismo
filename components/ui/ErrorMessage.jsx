import React from 'react';
import { AlertCircle } from 'lucide-react';

export const ErrorMessage = ({ theme, title = 'Ops!', message, onRetry }) => {
  const isLight = theme === 'light';

  return (
    <div className={`flex flex-col items-center justify-center gap-4 py-12 px-6 text-center max-w-md mx-auto rounded-3xl ${
      isLight 
        ? 'bg-red-50 border-2 border-red-200' 
        : 'bg-red-900/20 border-2 border-red-500/30'
    }`}>
      <AlertCircle 
        size={48} 
        className={isLight ? 'text-red-500' : 'text-red-400'} 
      />
      
      <div>
        <h3 className={`text-xl font-black mb-2 ${
          isLight ? 'text-red-700' : 'text-red-300'
        }`}>
          {title}
        </h3>
        <p className={`text-sm ${
          isLight ? 'text-red-600' : 'text-red-400'
        }`}>
          {message || 'Algo deu errado. Tente novamente mais tarde.'}
        </p>
      </div>

      {onRetry && (
        <button
          onClick={onRetry}
          className={`px-6 py-2.5 rounded-full font-black text-xs uppercase tracking-wider transition-all hover:scale-105 active:scale-95 ${
            isLight
              ? 'bg-red-500 text-white hover:bg-red-600'
              : 'bg-red-500/20 text-red-400 border border-red-500/50 hover:bg-red-500/30'
          }`}
        >
          Tentar Novamente
        </button>
      )}
    </div>
  );
};