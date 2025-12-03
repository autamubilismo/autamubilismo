import React from 'react';
import { BackButton } from '../components/UI';

const GenericPage = ({ theme, title }) => {
  const isLight = theme === 'light';
  return (
    <div className="animate-in fade-in text-center mt-20">
        <BackButton to="/" theme={theme} />
        <div className="mb-6"></div>
        <h1 className={`text-4xl font-black ${isLight?'text-gray-800':'text-white'}`}>{title}</h1>
        <p className={`mt-4 ${isLight?'text-gray-600':'text-gray-400'}`}>Em Construção</p>
    </div>
  );
};

export default GenericPage;