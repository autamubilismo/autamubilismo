import React from 'react';
import { BackButton } from '../components/UI';

const CircuitsPage = ({ theme }) => {
  const isLight = theme === 'light';
  return (
    <div className="animate-in fade-in pb-12">
        <BackButton to="/season" theme={theme} />
        <div className="p-8 text-center">
            <h1 className={`text-4xl font-black ${isLight?'text-gray-800':'text-white'}`}>Circuitos</h1>
            <p className="mt-4 text-gray-500">Guias de traçado em construção...</p>
        </div>
    </div>
  );
};

export default CircuitsPage;