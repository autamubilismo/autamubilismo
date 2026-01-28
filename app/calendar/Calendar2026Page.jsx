'use client';

import Link from 'next/link';
import { ChevronLeft, Globe, Zap } from 'lucide-react';
import { useTheme } from '@/components/layout/ThemeContext';

const BackButton = ({ to, theme }) => {
  const isLight = theme === 'light';
  return (
    <Link
      href={to}
      className={`group mb-8 inline-flex items-center gap-2 text-sm font-bold transition-all hover:pl-2 ${
        isLight
          ? 'text-gray-400 hover:text-cottage-rosy'
          : 'text-gray-500 hover:text-[#00fff2]'
      }`}
    >
      <ChevronLeft size={18} />
      Voltar
    </Link>
  );
};

const Calendar2026Page = () => {
  const { theme } = useTheme();
  const resolvedTheme = theme || 'light';
  const isLight = resolvedTheme === 'light';

  const CALENDAR_2026 = [
    { round: 1, code: 'AU', gp: 'GP Austrália', date: '6-8 MAR', flag: '🇦🇺' },
    { round: 2, code: 'CN', gp: 'GP China', date: '13-15 MAR', flag: '🇨🇳', sprint: true },
    { round: 3, code: 'JP', gp: 'GP Japão', date: '27-29 MAR', flag: '🇯🇵' },
    { round: 4, code: 'BH', gp: 'GP Bahrein', date: '10-12 ABR', flag: '🇧🇭', night: true },
    { round: 5, code: 'SA', gp: 'GP Arábia Saudita', date: '17-19 ABR', flag: '🇸🇦', night: true },
    { round: 6, code: 'US', gp: 'GP Miami', date: '1-3 MAI', flag: '🇺🇸', sprint: true },
    { round: 7, code: 'CA', gp: 'GP Canadá', date: '22-24 MAI', flag: '🇨🇦', sprint: true },
    { round: 8, code: 'MC', gp: 'GP Mônaco', date: '5-7 JUN', flag: '🇲🇨' },
    { round: 9, code: 'ES', gp: 'GP Espanha', date: '12-14 JUN', flag: '🇪🇸' },
    { round: 10, code: 'AT', gp: 'GP Áustria', date: '26-28 JUN', flag: '🇦🇹' },
    { round: 11, code: 'GB', gp: 'GP Grã-Bretanha', date: '3-5 JUL', flag: '🇬🇧', sprint: true },
    { round: 12, code: 'BE', gp: 'GP Bélgica', date: '17-19 JUL', flag: '🇧🇪' },
    { round: 13, code: 'HU', gp: 'GP Hungria', date: '24-26 JUL', flag: '🇭🇺' },
    { round: 14, code: 'NL', gp: 'GP Holanda', date: '21-23 AGO', flag: '🇳🇱', sprint: true },
    { round: 15, code: 'IT', gp: 'GP Itália', date: '4-6 SET', flag: '🇮🇹' },
    { round: 16, code: 'ES', gp: 'GP Madrid', date: '11-13 SET', flag: '🇪🇸', new: true },
    { round: 17, code: 'AZ', gp: 'GP Azerbaijão', date: '24-26 SET', flag: '🇦🇿' },
    { round: 18, code: 'SG', gp: 'GP Singapura', date: '9-11 OUT', flag: '🇸🇬', sprint: true, night: true },
    { round: 19, code: 'US', gp: 'GP EUA (Austin)', date: '23-25 OUT', flag: '🇺🇸' },
    { round: 20, code: 'MX', gp: 'GP México', date: '30 OUT-1 NOV', flag: '🇲🇽' },
    { round: 21, code: 'BR', gp: 'GP São Paulo', date: '6-8 NOV', flag: '🇧🇷' },
    { round: 22, code: 'US', gp: 'GP Las Vegas', date: '19-21 NOV', flag: '🇺🇸', night: true },
    { round: 23, code: 'QA', gp: 'GP Catar', date: '27-29 NOV', flag: '🇶🇦', night: true },
    { round: 24, code: 'AE', gp: 'GP Abu Dhabi', date: '4-6 DEZ', flag: '🇦🇪', night: true },
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 pb-12">
      <BackButton to="/season" theme={resolvedTheme} />

      <div className={`p-8 rounded-[2.5rem] border ${isLight ? 'bg-[#F7F4D5] border-[#D3968C]' : 'bg-[#121217] border-[#bd00ff] shadow-[0_0_30px_rgba(189,0,255,0.15)]'}`}>
         <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-6">
            <div className="flex items-center gap-4">
               <div className={`p-3 rounded-2xl shadow-sm ${isLight ? 'bg-white text-cottage-rosy' : 'bg-[#bd00ff] text-white'}`}>
                  <Globe size={32} />
               </div>
               <div>
                  <h3 className={`text-3xl font-black uppercase italic leading-none ${isLight ? 'text-gray-800' : 'text-white'}`}>Calendário 2026</h3>
                  <p className={`text-sm font-bold opacity-60 mt-1 ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>24 Corridas • 6 Sprints • 5 Continentes</p>
               </div>
            </div>
            <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest">
               <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.6)]"></span> Sprint</div>
               <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span> Estreia</div>
               <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-cottage-rosy shadow-[0_0_8px_rgba(168,85,247,0.6)]"></span> Noite</div>
            </div>
         </div>

         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {CALENDAR_2026.map((race) => (
              <div key={race.round} className={`relative p-5 rounded-3xl flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${isLight ? 'bg-white shadow-sm border border-white hover:border-cottage-rosy' : 'bg-white/5 border border-white/5 hover:border-[#bd00ff]/50'}`}>
                 <div className="flex justify-between items-start mb-3">
                    <span className={`text-[10px] font-black uppercase tracking-widest opacity-40 ${isLight ? 'text-gray-500' : 'text-white'}`}>R{race.round}</span>
                    <div className="flex gap-1.5">
                       {race.sprint && <span className="w-2 h-2 rounded-full bg-orange-500" title="Sprint"></span>}
                       {race.new && <span className="text-[8px] bg-green-500 text-white px-1.5 py-0.5 rounded-md font-bold shadow-sm">NEW</span>}
                       {race.night && <span className="w-2 h-2 rounded-full bg-cottage-rosy" title="Corrida Noturna"></span>}
                    </div>
                 </div>
                 
                 <div className="mb-4">
                    <div className="flex items-center gap-2 mb-1">
                       <span className="text-2xl shadow-sm rounded-sm overflow-hidden">{race.flag}</span>
                       <span className={`text-xs font-black uppercase tracking-wider ${isLight ? 'text-gray-400' : 'text-gray-500'}`}>{race.code}</span>
                    </div>
                    <h4 className={`font-bold text-base leading-tight ${isLight ? 'text-gray-800' : 'text-white'}`}>{race.gp}</h4>
                 </div>
                 
                 <div className={`pt-3 border-t flex justify-between items-center ${isLight ? 'border-gray-100' : 'border-white/10'}`}>
                    <span className={`text-[10px] font-bold uppercase tracking-wider ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>{race.date}</span>
                 </div>
              </div>
            ))}
         </div>
         
         <div className={`text-center text-[10px] font-bold uppercase tracking-widest mt-8 opacity-40 ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>
            *Datas sujeitas a alteração da FIA
         </div>
      </div>
    </div>
  );
};

export default Calendar2026Page;
