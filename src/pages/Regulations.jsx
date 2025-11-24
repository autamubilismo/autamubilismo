import React from 'react';
import { BackButton } from '../components/UI';

const RegulationsPage = ({ theme }) => {
  const isLight = theme === 'light';
  return (
    <div className="animate-in fade-in pb-12">
        <BackButton to="/season" theme={theme} />
        <div className="p-8 text-center">
            <h1 className={`text-4xl font-black ${isLight?'text-gray-800':'text-white'}`}>Regulamento 2026</h1>
            <p className="mt-4 text-gray-500">Novas regras de motor e chassi em breve...</p>
        </div>
    </div>
  );
};

export default RegulationsPage;