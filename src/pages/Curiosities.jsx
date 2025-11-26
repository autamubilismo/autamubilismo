import React from 'react';
import { Zap, Award, Clock, Flag, Fuel, Settings } from 'lucide-react';
import { BackButton } from '../components/UI';

const CURIOSITIES_DATA = [
  {
    id: 1,
    title: "O piloto mais jovem",
    text: "Max Verstappen é o piloto mais jovem a iniciar uma corrida (17 anos, 166 dias) e a vencer uma (18 anos, 228 dias).",
    icon: Award,
    color: "text-yellow-500"
  },
  {
    id: 2,
    title: "Pit Stop Recorde",
    text: "A McLaren detém o recorde mundial do pit stop mais rápido: 1.80 segundos, no GP do Catar de 2023.",
    icon: Clock,
    color: "text-blue-500"
  },
  {
    id: 3,
    title: "Perda de Peso",
    text: "Um piloto pode perder até 4kg de peso corporal apenas transpirando durante uma corrida de 2 horas em locais quentes.",
    icon: Zap,
    color: "text-orange-500"
  },
  {
    id: 4,
    title: "Consumo de Combustível",
    text: "Um carro de F1 consome cerca de 110kg de combustível por corrida, com uma eficiência térmica de mais de 50%.",
    icon: Fuel,
    color: "text-red-500"
  },
  {
    id: 5,
    title: "Força G Extrema",
    text: "Em curvas de alta velocidade, como a curva 8 na Turquia, os pilotos podem enfrentar até 5G ou mais de força lateral.",
    icon: Settings,
    color: "text-purple-500"
  },
  {
    id: 6,
    title: "Bandeira Quadriculada",
    text: "A tradição da bandeira quadriculada vem desde 1906, no Glider Tour, usada para sinalizar o fim da prova.",
    icon: Flag,
    color: "text-green-500"
  }
];

const CuriositiesPage = ({ theme }) => {
  const isLight = theme === 'light';

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-12">
      <BackButton to="/" theme={theme} />

      <div className="mb-10 px-2 text-center md:text-left">
        <h2 className={`text-4xl md:text-6xl font-black mb-2 ${isLight ? 'text-gray-800' : 'text-white'}`}>
          Você Sabia?
        </h2>
        <p className={`${isLight ? 'text-gray-500' : 'text-gray-400'}`}>Fatos aleatórios e surpreendentes do paddock.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CURIOSITIES_DATA.map((item) => (
          <div 
            key={item.id} 
            className={`p-8 rounded-[2rem] transition-all hover:-translate-y-1 hover:shadow-xl flex flex-col gap-4 ${
              isLight 
                ? 'bg-white shadow-lg border-2 border-transparent hover:border-gray-100' 
                : 'bg-[#1a1a20] border border-[#333] hover:border-[#fe88dd]/30'
            }`}
          >
             <div className={`p-4 rounded-2xl w-fit ${isLight ? 'bg-gray-50' : 'bg-black/30'} ${item.color}`}>
                <item.icon size={32} />
             </div>
             <div>
                <h3 className={`text-xl font-black mb-2 ${isLight ? 'text-gray-800' : 'text-white'}`}>
                    {item.title}
                </h3>
                <p className={`leading-relaxed ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>
                    {item.text}
                </p>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CuriositiesPage;