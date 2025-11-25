import React from 'react';
import { Link } from 'react-router-dom';
import { BackButton } from '../components/UI';
import { DRIVERS_DATA } from '../data';

const DriversPage = ({ theme }) => {
  const isLight = theme === 'light';
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-12">
      <BackButton to="/" theme={theme} />
      <div className="mb-8"><h2 className={`text-4xl font-black ${isLight ? 'text-gray-800' : 'text-white'}`}>Grid 2025</h2></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {DRIVERS_DATA.map((driver) => (
          <Link key={driver.number} to={`/drivers/${driver.id}`} className={`relative overflow-hidden h-80 rounded-3xl group cursor-pointer transition-transform hover:-translate-y-2 ${isLight ? 'bg-white shadow-lg' : 'bg-[#121217] border border-[#333] hover:border-[#00fff2]'}`}>
             {driver.image && <img src={driver.image} alt={driver.name} className="absolute inset-0 w-full h-full object-top transition-transform duration-700 group-hover:scale-110" />}
             
             {driver.vibes && (
               <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-md p-2 rounded-full text-white shadow-sm z-20">
                  {driver.vibes[0].icon}
               </div>
             )}

             <div className="absolute bottom-0 left-0 w-full p-6 z-10 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-3xl font-black text-white">{driver.name}</h3>
             </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DriversPage;