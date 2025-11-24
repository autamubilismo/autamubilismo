import React, { useState, useEffect } from 'react';
import { 
  Moon, Sun, Heart, MessageCircle, Share2, ArrowRight, ArrowLeft, 
  Instagram, Twitter, Youtube, Flag, Trophy, Calendar, Sparkles, 
  Clock, User, Menu, Search, X, ChevronRight, MapPin, BookOpen, 
  Music, Smile, TrendingUp, CloudMoon, Timer, Zap, Coffee, 
  Newspaper, Wrench, Gamepad2, Utensils, Users, Briefcase, Mail, 
  Home, FileText, Palette, Headphones, Thermometer, Ruler, Scale, 
  Wind, BatteryCharging, CheckCircle2, Circle, Trophy as TrophyIcon, 
  Star, Sparkles as SparklesIcon, Grid, Image, RotateCcw, MessageSquare,
  Send, ChevronDown, ChevronUp, Filter, BookOpenText
} from 'lucide-react';

/* ==========================================================================
   1. CONFIGURAÇÕES E TEMAS
   ========================================================================== */

const LOGO_LIGHT_URL = "https://i.ibb.co/tw2VBdC4/Logo-Light.png"; 
const LOGO_DARK_URL = "https://i.ibb.co/3mMHfZxb/NEONMODE.png"; 

const PASTEL = { pink: '#F7B8C8', purple: '#D8C4F0', mint: '#CFF7E8', salmon: '#FBCAD2', bg: '#FFFDFE', text: '#4A4A4A' };
const NEON = { bg: '#09090b', purple: '#bd00ff', cyan: '#00fff2', pink: '#ff0055', surface: '#121217' };

const SITE_MAP = [
  { id: 'home', label: 'Home', icon: Home, desc: 'Destaques' },
  { id: 'season', label: 'Temporada', icon: Calendar, desc: '2025/26' },
  { id: 'drivers', label: 'Pilotos', icon: Users, desc: 'Grid Atual' },
  { id: 'teams', label: 'Equipes', icon: Wrench, desc: 'Construtores' },
  { id: 'fanzone', label: 'Fanzone', icon: Sparkles, desc: 'Comunidade' },
  { id: 'curiosities', label: 'Curiosidades', icon: Zap, desc: 'Fatos' },
  { id: 'glossary', label: 'Glossário', icon: BookOpen, desc: 'Termos' },
  { id: 'articles', label: 'Artigos', icon: FileText, desc: 'Opinião' },
  { id: 'media', label: 'Multimídia', icon: Headphones, desc: 'Playlists' },
  { id: 'contact', label: 'Contato', icon: Mail, desc: 'Newsletter' },
  { id: 'credits', label: 'Créditos', icon: Heart, desc: 'Parceiros' },
];

/* ==========================================================================
   2. BANCO DE DADOS
   ========================================================================== */

const DRIVERS_DATA = [
  { id: 'kimi', name: 'Kimi Antonelli', number: 12, team: 'Mercedes', color: '#00D2BE', image: 'https://i.pinimg.com/736x/4f/40/12/4f4012d7ffec1216e21b9b01150eee00.jpg', bio: "O garoto prodígio que fez a Mercedes esquecer Carlos Sainz. Pulou a F3 direto para o abismo da F1 e caiu de pé.", country: 'Itália 🇮🇹', age: '18 anos', vibes: [{ icon: <Gamepad2 size={18} />, label: 'Sim Racer' }, { icon: <Utensils size={18} />, label: 'Pasta Lover' }, { icon: <Zap size={18} />, label: 'Rookie' }], stats: { xp: 'F2 (Prema)', podiums: '2', bestResult: 'P3 (Vegas)' }, signature: "Kimi A.", secretFact: "Leva seu simulador portátil para todos os hotéis.", zodiac: "Leão ♌" },
  { name: 'Lewis Hamilton', number: 44, team: 'Ferrari', color: '#FF0000', signature: "Lewis 44", secretFact: "Roscoe tem seu próprio passe VIP.", zodiac: "Capricórnio ♑" },
  { name: 'Gabriel Bortoleto', number: 5, team: 'Sauber', color: '#52E252', country: 'Brasil 🇧🇷', signature: "Bortoleto", secretFact: "Adora feijoada.", zodiac: "Libra ♎" },
  { name: 'Max Verstappen', number: 1, team: 'Red Bull', color: '#1E41FF', signature: "Max V.", secretFact: "Prefere FIFA a entrevistas.", zodiac: "Libra ♎" },
  { name: 'Lando Norris', number: 4, team: 'McLaren', color: '#FF8700', signature: "Lando", secretFact: "DJ nas horas vagas.", zodiac: "Escorpião ♏" },
  { name: 'Charles Leclerc', number: 16, team: 'Ferrari', color: '#FF0000', signature: "Charles 16", secretFact: "Toca piano para relaxar.", zodiac: "Libra ♎" },
  { name: 'Oscar Piastri', number: 81, team: 'McLaren', color: '#FF8700', signature: "Oscar P.", secretFact: "O homem mais calmo do mundo.", zodiac: "Áries ♈" },
  { name: 'George Russell', number: 63, team: 'Mercedes', color: '#00D2BE', signature: "GR63", secretFact: "Ama uma pose de powerpoint.", zodiac: "Aquário ♒" },
  { name: 'Carlos Sainz', number: 55, team: 'Williams', color: '#005AFF', signature: "Chili", secretFact: "Smooth Operator original.", zodiac: "Virgem ♍" },
  { name: 'Oliver Bearman', number: 87, team: 'Haas', color: '#B6BABD', signature: "Ollie", secretFact: "Estudou para a prova de direção durante o GP.", zodiac: "Touro ♉" },
  { name: 'Jack Doohan', number: 7, team: 'Alpine', color: '#0090FF', signature: "Jack D", secretFact: "Filho de lenda da MotoGP.", zodiac: "Aquário ♒" },
];

const TEAMS_DATA = [
  { id: 'mercedes', name: 'Mercedes', fullName: 'Mercedes-AMG PETRONAS F1 Team', domain: 'mercedesamgf1.com', color: '#00D2BE', engine: 'Mercedes', principal: 'Toto Wolff', base: 'Brackley, UK', chassis: 'W17', titles: 8, drivers: ['George Russell', 'Kimi Antonelli'], bio: "A força dominante da era híbrida busca retornar ao topo com uma mistura de experiência e juventude extrema.", image: 'https://images.unsplash.com/photo-1626722843337-5f55d3473417?q=80&w=1200' },
  { name: 'Ferrari', domain: 'ferrari.com', color: '#FF0000', engine: 'Ferrari', drivers: ['Charles Leclerc', 'Lewis Hamilton'] },
  { name: 'Red Bull Racing', domain: 'redbullracing.com', color: '#1E41FF', engine: 'Red Bull-Ford', drivers: ['Max Verstappen', 'Liam Lawson'] },
  { name: 'McLaren', domain: 'mclaren.com', color: '#FF8700', engine: 'Mercedes', drivers: ['Lando Norris', 'Oscar Piastri'] },
  { name: 'Aston Martin', domain: 'astonmartinf1.com', color: '#006F62', engine: 'Honda', drivers: ['Fernando Alonso', 'Lance Stroll'] },
  { name: 'Alpine', domain: 'alpinecars.com', color: '#0090FF', engine: 'Renault', drivers: ['Pierre Gasly', 'Jack Doohan'] },
  { name: 'Williams', domain: 'williamsf1.com', color: '#005AFF', engine: 'Mercedes', drivers: ['Alex Albon', 'Carlos Sainz'] },
  { name: 'VCARB', domain: 'visacashapprb.com', color: '#1633EF', engine: 'Red Bull-Ford', drivers: ['Yuki Tsunoda', 'Isack Hadjar'] },
  { name: 'Haas', domain: 'haasf1team.com', color: '#B6BABD', engine: 'Ferrari', drivers: ['Esteban Ocon', 'Oliver Bearman'] },
  { name: 'Sauber', domain: 'sauber-group.com', color: '#52E252', engine: 'Ferrari', drivers: ['Nico Hulkenberg', 'Gabriel Bortoleto'] },
  { name: 'Audi', domain: 'audi.com', color: '#000000', engine: 'Audi', drivers: ['TBA'], note: '2026' },
  { name: 'Cadillac', domain: 'cadillac.com', color: '#E6BE56', engine: 'GM', drivers: ['TBA'], note: '2026' },
];

const RACES_2025 = [
  { round: 1, name: 'GP da Austrália', date: '16 Mar', circuit: 'Albert Park', status: 'completed', winner: 'L. Norris 🥇', podium: ['L. Norris 🥇', 'M. Verstappen 🥈', 'G. Russell 🥉'] },
  { round: 2, name: 'GP da China', date: '23 Mar', circuit: 'Xangai', status: 'completed', winner: 'O. Piastri 🥇', podium: ['O. Piastri 🥇', 'L. Norris 🥈', 'G. Russell 🥉'] },
  { round: 3, name: 'GP do Japão', date: '06 Abr', circuit: 'Suzuka', status: 'completed', winner: 'M. Verstappen 🥇', podium: ['M. Verstappen 🥇', 'L. Norris 🥈', 'O. Piastri 🥉'] },
  { round: 4, name: 'GP do Bahrein', date: '13 Abr', circuit: 'Sakhir', status: 'completed', winner: 'O. Piastri 🥇', podium: ['O. Piastri 🥇', 'G. Russell 🥈', 'L. Norris 🥉'] },
  { round: 5, name: 'GP da Arábia Saudita', date: '20 Abr', circuit: 'Jeddah', status: 'completed', winner: 'O. Piastri 🥇', podium: ['O. Piastri 🥇', 'M. Verstappen 🥈', 'C. Leclerc 🥉'] },
  { round: 6, name: 'GP de Miami', date: '04 Mai', circuit: 'Miami', status: 'completed', winner: 'O. Piastri 🥇', podium: ['O. Piastri 🥇', 'L. Norris 🥈', 'G. Russell 🥉'] },
  { round: 7, name: 'GP da Emilia Romagna', date: '18 Mai', circuit: 'Imola', status: 'completed', winner: 'M. Verstappen 🥇', podium: ['M. Verstappen 🥇', 'L. Norris 🥈', 'O. Piastri 🥉'] },
  { round: 8, name: 'GP de Mônaco', date: '25 Mai', circuit: 'Mônaco', status: 'completed', winner: 'L. Norris 🥇', podium: ['L. Norris 🥇', 'C. Leclerc 🥈', 'O. Piastri 🥉'] },
  { round: 9, name: 'GP da Espanha', date: '01 Jun', circuit: 'Barcelona', status: 'completed', winner: 'L. Norris 🥇', podium: ['O. Piastri 🥇', 'L. Norris 🥈', 'C. Leclerc 🥉'] },
  { round: 10, name: 'GP do Canadá', date: '15 Jun', circuit: 'Montreal', status: 'completed', winner: 'G. Russell 🥇', podium: ['G. Russell 🥇', 'M. Verstappen 🥈', 'K. Antonelli 🥉'] },
  { round: 11, name: 'GP da Áustria', date: '29 Jun', circuit: 'Red Bull Ring', status: 'completed', winner: 'M. Verstappen 🥇', podium: ['L. Norris 🥇', 'O. Piastri 🥈', 'C. Leclerc 🥉'] },
  { round: 12, name: 'GP da Grã-Bretanha', date: '06 Jul', circuit: 'Silverstone', status: 'completed', winner: 'L. Norris 🥇', podium: ['L. Norris 🥇', 'O. Piastri 🥈', 'N. Hulkenberg 🥉'] },
  { round: 13, name: 'GP da Bélgica', date: '27 Jul', circuit: 'Spa', status: 'completed', winner: 'O. Piastri 🥇', podium: ['O. Piastri 🥇', 'L. Norris 🥈', 'C. Leclerc 🥉'] },
  { round: 14, name: 'GP da Hungria', date: '03 Ago', circuit: 'Hungaroring', status: 'completed', winner: 'L. Norris 🥇', podium: ['L. Norris 🥇', 'O. Piastri 🥈', 'M. Verstappen 🥉'] },
  { round: 15, name: 'GP da Holanda', date: '31 Ago', circuit: 'Zandvoort', status: 'completed', winner: 'L. Norris 🥇', podium: ['O. Piastri 🥇', 'M. Verstappen 🥈', 'L. Norris 🥉'] },
  { round: 16, name: 'GP da Itália', date: '07 Set', circuit: 'Monza', status: 'completed', winner: 'C. Leclerc 🥇', podium: ['M. Verstappen 🥇', 'L. Norris 🥈', 'O. Piastri 🥉'] },
  { round: 17, name: 'GP do Azerbaijão', date: '21 Set', circuit: 'Baku', status: 'completed', winner: 'O. Piastri 🥇', podium: ['M. Verstappen 🥇', 'O. Piastri 🥈', 'L. Norris 🥉'] },
  { round: 18, name: 'GP de Singapura', date: '05 Out', circuit: 'Marina Bay', status: 'completed', winner: 'L. Norris 🥇', podium: ['G. Russell 🥇', 'L. Norris 🥈', 'O. Piastri 🥉'] },
  { round: 19, name: 'GP dos EUA', date: '19 Out', circuit: 'Austin', status: 'completed', winner: 'M. Verstappen 🥇', podium: ['M. Verstappen 🥇', 'L. Norris 🥈', 'C. Leclerc 🥉'] },
  { round: 20, name: 'GP do México', date: '26 Out', circuit: 'Hermanos Rdz', status: 'completed', winner: 'L. Norris 🥇', podium: ['L. Norris 🥇', 'O. Piastri 🥈', 'G. Russell 🥉'] },
  { round: 21, name: 'GP de São Paulo', date: '09 Nov', circuit: 'Interlagos', status: 'completed', winner: 'G. Bortoleto (P8) 🇧🇷', podium: ['L. Norris 🥇', 'M. Verstappen 🥈', 'G. Russell 🥉'] }, 
  { round: 22, name: 'GP de Las Vegas', date: '22 Nov', circuit: 'Las Vegas Strip', status: 'completed', winner: 'M. Verstappen 🥇', podium: ['M. Verstappen 🥇', 'G. Russell 🥈', 'K. Antonelli 🥉'] }, 
  { round: 23, name: 'GP do Catar', date: '30 Nov', circuit: 'Lusail', status: 'next' },
  { round: 24, name: 'GP de Abu Dhabi', date: '07 Dez', circuit: 'Yas Marina', status: 'upcoming' },
];

const STANDINGS_DRIVERS = [
  { pos: 1, name: 'Max Verstappen', team: 'Red Bull', points: 391, color: '#1E41FF' },
  { pos: 2, name: 'Lando Norris', team: 'McLaren', points: 390, color: '#FF8700' },
  { pos: 3, name: 'Oscar Piastri', team: 'McLaren', points: 366, color: '#FF8700' },
  { pos: 4, name: 'George Russell', team: 'Mercedes', points: 312, color: '#00D2BE' },
  { pos: 5, name: 'Charles Leclerc', team: 'Ferrari', points: 238, color: '#FF0000' },
];

const STANDINGS_TEAMS = [
  { pos: 1, name: 'McLaren', points: 756, color: '#FF8700' },
  { pos: 2, name: 'Mercedes', points: 464, color: '#00D2BE' },
  { pos: 3, name: 'Red Bull', points: 419, color: '#1E41FF' },
  { pos: 4, name: 'Ferrari', points: 394, color: '#FF0000' },
];

const GLOSSARY_DATA = [
  { id: 1, term: 'Undercut', category: 'Estratégia', definition: 'Parar nos boxes antes do rival para aproveitar a velocidade dos pneus novos e ganhar a posição quando ele parar.', example: 'O undercut da Mercedes funcionou e Lewis voltou na frente.' },
  { id: 2, term: 'Overcut', category: 'Estratégia', definition: 'Ficar na pista com pneus velhos enquanto o rival para, tentando fazer voltas rápidas com ar limpo para voltar na frente.', example: 'Perez fez o overcut funcionar poupando os pneus.' },
  { id: 3, term: 'Graining', category: 'Pneus', definition: 'Quando a borracha do pneu se solta e gruda de volta na superfície, criando uma textura rugosa que reduz a aderência.', example: 'O frio de Vegas causou muito graining nos pneus dianteiros.' },
];

const NEWS_DATA = [
  { id: 'news-1', title: "Verstappen vence em Vegas e retoma liderança por 1 ponto!", category: "GP Vegas", time: "12h atrás", image: "https://images.unsplash.com/photo-1506191839364-10509691934e?q=80&w=800", author: "Tamu", content: `<p class="lead">Reviravolta no campeonato! Com a desclassificação das McLarens, Max Verstappen vence e vira o jogo.</p>` },
  { id: 'news-2', title: "Kimi Antonelli brilha e conquista pódio inédito na Strip", category: "Destaque", time: "15h atrás", image: "https://i.pinimg.com/736x/4f/40/12/4f4012d7ffec1216e21b9b01150eee00.jpg", author: "Redação", content: `<p class="lead">O garoto prodígio da Mercedes segurou a pressão e terminou em P3, calando os críticos.</p>` },
  { id: 'news-3', title: "Próxima parada: O calor escaldante do Catar pode decidir tudo", category: "Prévia", time: "1d atrás", image: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?q=80&w=800", author: "Tech Analysis", content: `<p class="lead">Depois do gelo de Vegas, os pilotos enfrentarão a "sauna" de Lusail. Haja preparo físico.</p>` },
];

const MANIFESTO_POST = {
  id: 'manifesto', title: "Correndo como uma garota.", category: "Manifesto", time: "19 Nov", image: "https://images.unsplash.com/photo-1592853625511-ad0ed2881895?q=80&w=1200", author: "Tamu",
  content: `<p>Eu cresci ouvindo que corrida é barulho, é graxa, é homem bravo gritando no rádio.</p><p>Mas eu nunca ouvi ninguém dizer que corrida também é sensibilidade...</p><div class="mt-12 p-8 rounded-2xl text-center bg-current bg-opacity-10"><p class="text-2xl font-black mb-2">"Porque eu corro como uma garota."</p></div>`
};

const ARTICLES_DATA = [
  { id: 'art-1', title: "A Psicologia de um Campeão: Como Norris virou a chave", excerpt: "De 'bom moço' a predador. Analisamos a mudança de postura que colocou Lando na briga pelo título mundial.", category: "Análise", time: "18 Nov", image: "https://media.formula1.com/image/upload/f_auto/q_auto/v1709223759/fom-website/2024/McLaren/Lando_Norris_Bahrain_2024.jpg", author: "Tamu", content: `<p>Texto longo e profundo sobre a psicologia do Lando...</p>` },
  { id: 'art-2', title: "Por que a F1 precisa parar de ignorar a estética", excerpt: "O visual não é futilidade, é identidade. Como o design dos carros e macacões conta a história da temporada.", category: "Opinião", time: "15 Nov", image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1200", author: "Tamu", content: `<p>Texto longo sobre design e estética na F1...</p>` },
];

/* ==========================================================================
   3. COMPONENTES DE UI
   ========================================================================== */

const LogoHelmet = ({ theme, size = 'normal' }) => {
  const isLight = theme === 'light';
  const [imageError, setImageError] = useState(false);
  useEffect(() => setImageError(false), [theme]);
  const currentLogoUrl = isLight ? LOGO_LIGHT_URL : LOGO_DARK_URL;
  const hasUrl = currentLogoUrl && currentLogoUrl.trim() !== "";
  const containerClass = size === 'large' ? "w-32 h-32 md:w-48 md:h-48" : "w-16 h-16 md:w-20 md:h-20";
  if (hasUrl && !imageError) return (<div className={`${containerClass} transition-all duration-500 relative flex items-center justify-center`}><img src={currentLogoUrl} alt="Logo" onError={() => setImageError(true)} className={`w-full h-full object-contain transition-all duration-500 ${!isLight ? 'drop-shadow-[0_0_25px_rgba(0,255,242,0.5)] scale-110' : 'drop-shadow-xl hover:scale-105'}`} /></div>);
  return null;
};

const BackButton = ({ onClick, theme }) => {
  const isLight = theme === 'light';
  return (<button onClick={onClick} className={`group mb-6 inline-flex items-center gap-2 text-sm font-bold transition-colors ${isLight ? 'text-gray-500 hover:text-[#D8C4F0]' : 'text-gray-400 hover:text-[#00fff2]'}`}><ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" /> Voltar para o Paddock</button>);
};

const NavigationOverlay = ({ isOpen, onClose, theme, setView }) => {
  if (!isOpen) return null;
  const isLight = theme === 'light';
  return (
    <div className={`fixed inset-0 z-50 flex flex-col overflow-y-auto animate-in slide-in-from-left duration-300 ${isLight ? 'bg-[#FFF5F8]' : 'bg-[#050505]'}`}>
      <div className="p-6 flex justify-end"><button onClick={onClose} className={`p-2 rounded-full ${isLight ? 'bg-white shadow-md text-gray-600' : 'bg-[#1a1a20] text-[#00fff2] border border-[#333]'}`}><X size={24} /></button></div>
      <div className="flex-1 max-w-4xl mx-auto w-full p-4 md:p-6 pb-20"><h2 className={`text-sm font-bold uppercase tracking-widest mb-6 md:mb-8 ${isLight ? 'text-gray-400' : 'text-gray-500'}`}>Mapa do Paddock</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {SITE_MAP.map((item) => (
            <button key={item.id} onClick={() => { setView(item.id); onClose(); }} className={`group p-3 md:p-4 rounded-2xl flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4 text-left transition-all ${isLight ? 'bg-white hover:bg-[#F7B8C8]/20 hover:shadow-lg border-2 border-transparent hover:border-[#F7B8C8]' : 'bg-[#121217] hover:bg-[#1a1a20] border border-[#333] hover:border-[#00fff2] hover:shadow-[0_0_15px_rgba(0,255,242,0.1)]'}`}>
              <div className={`w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full flex items-center justify-center transition-colors ${isLight ? 'bg-[#F7B8C8]/20 text-[#D8C4F0] group-hover:bg-[#F7B8C8] group-hover:text-white' : 'bg-[#1a1a20] text-[#00fff2] group-hover:bg-[#00fff2] group-hover:text-black group-hover:shadow-[0_0_15px_#00fff2]'}`}>{item.icon && <item.icon size={20} className="md:w-6 md:h-6" />}</div>
              <div className="flex-1 min-w-0"><span className={`block text-sm md:text-xl font-bold truncate ${isLight ? 'text-gray-800' : 'text-white group-hover:text-[#00fff2]'}`}>{item.label}</span><span className={`block text-[10px] md:text-xs font-medium leading-tight ${isLight ? 'text-gray-400' : 'text-gray-500'}`}>{item.desc}</span></div>
              <ChevronRight className={`ml-auto opacity-0 group-hover:opacity-100 transition-opacity hidden md:block ${isLight ? 'text-[#D8C4F0]' : 'text-[#bd00ff]'}`} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const SearchOverlay = ({ isOpen, onClose, theme }) => {
  if (!isOpen) return null;
  const isLight = theme === 'light';
  return (<div className={`fixed inset-0 z-50 flex flex-col animate-in fade-in slide-in-from-top-4 duration-300 backdrop-blur-md ${isLight ? 'bg-white/95' : 'bg-[#050505]/95'}`}><div className="p-6 flex items-center gap-4 max-w-4xl mx-auto w-full"><Search size={24} className={isLight ? 'text-gray-400' : 'text-[#00fff2]'} /><input type="text" autoFocus placeholder="Buscar..." className={`flex-1 bg-transparent text-2xl font-bold outline-none ${isLight ? 'text-gray-800' : 'text-white'}`} /><button onClick={onClose}><X size={28} /></button></div><div className="flex-1 max-w-4xl mx-auto w-full p-6"><div className="flex items-center gap-2 mb-6 opacity-60"><TrendingUp size={16} /><span className="text-xs font-bold uppercase">Em Alta</span></div><div className="flex flex-wrap gap-3">{['GP de Vegas', 'Ferrari 2025', 'Lewis Hamilton', 'Merch da McLaren'].map((term, idx) => (<button key={idx} className={`px-4 py-2 rounded-full text-sm font-medium ${isLight ? 'bg-gray-100' : 'bg-[#1a1a20] border border-[#333]'}`}>{term}</button>))}</div></div></div>);
};

const BentoCard = ({ children, className, theme, title, subtitle, onClick }) => {
  const isLight = theme === 'light';
  const childType = children?.type?.name;
  const isSpecialWidget = childType === 'NextRaceWidget' || childType === 'NewsWidget' || childType === 'CuriosityWidget' || childType === 'NewsletterWidget' || childType === 'FanzoneWidget';
  return (
    <div onClick={onClick} className={`relative overflow-hidden transition-all duration-500 group ${isLight ? 'bg-white rounded-3xl shadow-[0_10px_40px_-10px_rgba(216,196,240,0.3)] border-2 border-transparent hover:border-[#D8C4F0]' : 'bg-[#121217] rounded-xl border border-[#333] hover:border-[#00fff2] shadow-[0_0_15px_rgba(0,255,242,0.05)]'} ${onClick ? 'cursor-pointer active:scale-[0.98]' : ''} ${className}`}>
      {!isLight && (<div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#00fff2 1px, transparent 1px), linear-gradient(90deg, #00fff2 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>)}
      <div className="relative z-10 h-full flex flex-col p-6">
        {!isSpecialWidget && (title || subtitle) && (<div className="mb-4">{subtitle && <span className={`text-xs font-bold tracking-wider uppercase mb-1 block ${isLight ? 'text-[#D8C4F0]' : 'text-[#bd00ff]'}`}>{subtitle}</span>}{title && <h3 className={`text-xl font-bold leading-tight ${isLight ? 'text-gray-800' : 'text-white font-mono'}`}>{title}</h3>}</div>)}
        {children}
      </div>
    </div>
  );
};

const KpopPhotocard = ({ driver, theme, onClick }) => {
  const isLight = theme === 'light';
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <div className="group relative w-full aspect-[3/4] cursor-pointer perspective-1000" onClick={(e) => { e.stopPropagation(); setIsFlipped(!isFlipped); }}>
      <div className={`relative w-full h-full transition-all duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        <div className="absolute inset-0 backface-hidden rounded-3xl overflow-hidden shadow-xl">
            {driver.image ? (<img src={driver.image} alt={driver.name} className="w-full h-full object-cover" />) : (<div className={`w-full h-full bg-gradient-to-br ${isLight ? 'from-gray-200 to-gray-100' : 'from-[#1a1a20] to-[#0a0a12]'}`}></div>)}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none bg-gradient-to-tr from-transparent via-white to-transparent -translate-x-full group-hover:animate-shine" style={{ backgroundSize: '200% 200%' }}></div>
            <div className="absolute top-3 right-3 flex flex-col gap-2"><div className="bg-white/20 backdrop-blur-md p-2 rounded-full text-yellow-300 rotate-12 shadow-lg animate-pulse"><Star size={16} fill="currentColor" /></div></div>
            <div className="absolute bottom-0 left-0 w-full p-5 text-left"><div className="relative z-10"><span className="inline-block px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-widest bg-white text-black mb-1 shadow-sm">{driver.team}</span><h3 className="text-2xl font-black text-white leading-none drop-shadow-md font-mono tracking-tighter">{driver.name.split(' ')[0]} <br/><span className="text-[#00fff2]">{driver.name.split(' ').slice(1).join(' ')}</span></h3></div><div className="absolute bottom-4 right-4 text-white/50 text-xs flex items-center gap-1 animate-bounce"><RotateCcw size={12}/> Virar</div></div>
        </div>
        <div className={`absolute inset-0 backface-hidden rotate-y-180 rounded-3xl overflow-hidden shadow-xl p-6 flex flex-col justify-between text-center ${isLight ? 'bg-[#FFF5F8] border-4 border-white' : 'bg-[#121217] border-2 border-[#00fff2] shadow-[0_0_15px_#00fff2]'}`}>
            <div className="flex flex-col items-center gap-2"><div className={`w-16 h-16 rounded-full overflow-hidden border-4 ${isLight ? 'border-[#FBCAD2]' : 'border-[#bd00ff]'}`}>{driver.image && <img src={driver.image} className="w-full h-full object-cover" />}</div><h3 className={`font-black text-xl ${isLight ? 'text-gray-800' : 'text-white'}`}>{driver.name}</h3><span className={`text-xs font-bold uppercase tracking-widest ${isLight ? 'text-[#D8C4F0]' : 'text-[#00fff2]'}`}>{driver.zodiac || "Signo Secreto"}</span></div>
            <div className={`p-4 rounded-xl text-sm italic font-medium relative ${isLight ? 'bg-white text-gray-600' : 'bg-[#0a0a12] text-gray-300'}`}><span className="absolute -top-2 -left-2 text-2xl">❝</span>{driver.secretFact || "Fato curioso indisponível no momento."}<span className="absolute -bottom-4 -right-2 text-2xl">❞</span></div>
            <div className="mt-auto"><p className={`font-handwriting text-3xl transform -rotate-6 ${isLight ? 'text-gray-400' : 'text-gray-500'}`}>{driver.signature || driver.name.split(' ')[0]}</p></div>
        </div>
      </div>
    </div>
  );
};

// --- WIDGETS ---
const NextRaceWidget = ({ theme }) => {
  const isLight = theme === 'light';
  const [timeLeft, setTimeLeft] = useState({ d: '05', h: '18', m: '30' });
  return (
    <div className={`h-full flex flex-col justify-between relative overflow-hidden p-1 ${isLight ? 'text-teal-900' : 'text-white'}`}>
      <svg className={`absolute right-[-20px] bottom-[-20px] w-48 h-48 opacity-10 pointer-events-none ${isLight ? 'stroke-teal-900' : 'stroke-[#00fff2]'}`} viewBox="0 0 100 100" fill="none" strokeWidth="2"><path d="M10 80 L30 80 L40 60 L80 60 L90 30 L60 10 L30 30 L10 80 Z" strokeLinecap="round" strokeLinejoin="round"/></svg>
      <div className="flex justify-between items-start relative z-10"><div className="flex items-center gap-2"><Flag size={18} /><span className="text-xs font-bold uppercase">Próxima Parada</span></div><div className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${isLight ? 'bg-white/40' : 'bg-[#1a1a20] border border-[#333]'}`}><CloudMoon size={12} /><span>28°C</span></div></div>
      <div className="relative z-10 mt-4"><h3 className="text-3xl font-black leading-none tracking-tight mb-1">GP QATAR</h3><p className="text-xs font-bold uppercase opacity-70 flex items-center gap-1"><MapPin size={10} /> Lusail Circuit</p></div>
      <div className={`mt-4 pt-4 border-t flex justify-between items-end relative z-10 ${isLight ? 'border-teal-900/10' : 'border-gray-800'}`}><div className="flex gap-3"><div><span className="text-2xl font-black">{timeLeft.d}</span><span className="text-[10px] uppercase block">Dias</span></div><div><span className="text-2xl font-black">{timeLeft.h}</span><span className="text-[10px] uppercase block">Hrs</span></div></div><button className={`p-2 rounded-full transition-all active:scale-95 ${isLight ? 'bg-teal-900 text-white' : 'bg-[#00fff2] text-black'}`}><ArrowRight size={16} /></button></div>
    </div>
  );
};

const NewsWidget = ({ theme, onNewsClick }) => {
  const isLight = theme === 'light';
  return (<div className="h-full flex flex-col"><div className="flex items-center gap-2 mb-4 opacity-70"><Newspaper size={16} /><span className="text-xs font-bold uppercase">Últimas do Paddock</span></div><div className="flex-1 flex flex-col gap-2">{NEWS_DATA.map((item)=>(<div key={item.id} onClick={(e)=>{e.stopPropagation();onNewsClick(item)}} className={`flex-1 p-3 rounded-xl flex items-center gap-3 transition-colors cursor-pointer ${isLight ? 'bg-[#FFF5F8] hover:bg-[#F7B8C8]/20' : 'bg-[#1a1a20] hover:bg-[#bd00ff]/10 border border-transparent hover:border-[#bd00ff]/30'}`}><div className="w-12 h-12 rounded-lg overflow-hidden shrink-0"><img src={item.image} className="w-full h-full object-cover" /></div><div className="min-w-0"><h4 className={`text-sm font-bold leading-tight mb-1 truncate ${isLight?'text-gray-800':'text-gray-200'}`}>{item.title}</h4><span className={`text-[10px] font-medium ${isLight?'text-gray-400':'text-gray-500'}`}>{item.time}</span></div></div>))}</div></div>);
};

const CuriosityWidget = ({ theme }) => {
  const isLight = theme === 'light';
  return (<div className="h-full flex flex-col items-center justify-center text-center p-2"><Zap size={40} className="mb-3 text-yellow-400" /><h4 className="font-black text-lg">Você Sabia?</h4><p className="text-xs">Max Verstappen lidera por apenas 1 ponto! A decisão será insana.</p></div>);
};

const NewsletterWidget = ({ theme }) => {
  const isLight = theme === 'light';
  return (<div className="h-full flex flex-col justify-center p-2"><div className="flex items-center gap-2 mb-2"><Mail size={18} /><h3 className="font-bold text-lg">Newsletter</h3></div><p className="text-xs mb-4">Receba análises e fofocas.</p><form className="flex gap-2" onSubmit={(e)=>e.preventDefault()}><input type="email" placeholder="seu@email.com" className={`flex-1 px-4 py-2 rounded-full text-xs font-medium outline-none ${isLight?'bg-white border border-gray-200':'bg-[#0a0a12] border border-[#333]'}`}/><button className={`px-4 py-2 rounded-full font-bold text-xs ${isLight?'bg-gray-900 text-white':'bg-[#bd00ff] text-white'}`}>Assinar</button></form></div>);
};

const FanzoneWidget = ({ theme }) => {
  const isLight = theme === 'light';
  return (
    <div className={`h-full flex flex-col items-center justify-center relative overflow-hidden p-4 ${isLight ? 'bg-[#D8C4F0]/30' : 'bg-[#1a1a20]'}`}>
      <div className="absolute top-2 left-2 opacity-20 rotate-[-15deg]"><MessageSquare size={40} /></div>
      <div className="absolute bottom-2 right-2 opacity-20 rotate-[15deg]"><Heart size={40} /></div>
      <div className={`relative z-10 p-4 rounded-full mb-2 ${isLight ? 'bg-white shadow-sm text-[#bd00ff]' : 'bg-[#0a0a12] border border-[#bd00ff] text-[#bd00ff] shadow-[0_0_15px_#bd00ff]'}`}>
         <div className="flex items-center justify-center gap-[-4px]"><Flag size={32} className="-mr-2" /><Heart size={24} className="fill-current" /></div>
      </div>
      <h3 className={`font-black text-lg ${isLight ? 'text-gray-800' : 'text-white'}`}>Fanzone</h3>
      <p className={`text-xs text-center ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>Artes, surtos e a galera.</p>
    </div>
  );
};

// --- PÁGINAS ---
const GlossaryPage = ({ theme, onBack }) => {
  const isLight = theme === 'light';
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [expandedId, setExpandedId] = useState(null);
  const categories = ['Todos', ...new Set(GLOSSARY_DATA.map(item => item.category))];
  const filteredTerms = GLOSSARY_DATA.filter(item => {
    const matchesSearch = item.term.toLowerCase().includes(searchTerm.toLowerCase()) || item.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Todos' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  const toggleExpand = (id) => setExpandedId(expandedId === id ? null : id);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-12">
      <BackButton onClick={onBack} theme={theme} />
      <div className="mb-8"><h2 className={`text-4xl font-black mb-2 ${isLight ? 'text-gray-800' : 'text-white'}`}>Dicionário F1</h2></div>
      <div className={`sticky top-4 z-30 p-4 rounded-2xl shadow-lg mb-8 backdrop-blur-md ${isLight ? 'bg-white/90 border border-gray-100' : 'bg-[#121217]/90 border border-[#333]'}`}><div className={`flex items-center gap-3 px-4 py-3 rounded-xl mb-4 transition-all ${isLight ? 'bg-gray-100 focus-within:bg-white focus-within:ring-2 ring-[#D8C4F0]' : 'bg-[#0a0a12] focus-within:border-[#00fff2] border border-transparent'}`}><Search size={20} className={isLight ? 'text-gray-400' : 'text-gray-500'} /><input type="text" placeholder="Busque por termos..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className={`bg-transparent w-full outline-none font-medium ${isLight ? 'text-gray-700' : 'text-white'}`} /></div><div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">{categories.map(cat => (<button key={cat} onClick={() => setSelectedCategory(cat)} className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${selectedCategory === cat ? (isLight ? 'bg-[#D8C4F0] text-white shadow-md' : 'bg-[#00fff2] text-black shadow-[0_0_10px_#00fff2]') : (isLight ? 'bg-gray-100 text-gray-500 hover:bg-gray-200' : 'bg-[#1a1a20] border border-[#333] text-gray-400 hover:border-[#00fff2]')}`}>{cat}</button>))}</div></div>
      <div className="space-y-3">{filteredTerms.length > 0 ? (filteredTerms.map((item) => {const isExpanded = expandedId === item.id;return (<div key={item.id} onClick={() => toggleExpand(item.id)} className={`group rounded-2xl transition-all cursor-pointer overflow-hidden border ${isLight ? 'bg-white border-transparent shadow-sm hover:shadow-md' : `bg-[#121217] ${isExpanded ? 'border-[#bd00ff]' : 'border-[#333]'} hover:border-[#bd00ff]/50`}`}><div className="p-5 flex items-center justify-between"><div className="flex items-center gap-4"><div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold ${isLight ? 'bg-[#F7B8C8]/20 text-[#F7B8C8]' : 'bg-[#bd00ff]/10 text-[#bd00ff]'}`}>{item.term.charAt(0)}</div><div><h3 className={`text-lg font-bold ${isLight ? 'text-gray-800' : 'text-white'}`}>{item.term}</h3><span className={`text-xs font-bold uppercase tracking-wide ${isLight ? 'text-gray-400' : 'text-gray-500'}`}>{item.category}</span></div></div><div className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>{isExpanded ? <ChevronUp size={20} className={isLight ? 'text-[#D8C4F0]' : 'text-[#00fff2]'} /> : <ChevronDown size={20} className="text-gray-400" />}</div></div><div className={`px-5 overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-48 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}><p className={`text-sm leading-relaxed mb-3 ${isLight ? 'text-gray-600' : 'text-gray-300'}`}>{item.definition}</p><div className={`p-3 rounded-xl text-xs font-medium italic flex gap-2 ${isLight ? 'bg-gray-50 text-gray-500' : 'bg-[#0a0a12] text-gray-400'}`}><MessageSquare size={14} className="shrink-0 mt-0.5" />"{item.example}"</div></div></div>);})) : (<div className="text-center py-12 opacity-50"><Search size={48} className="mx-auto mb-4" /><p>Nenhum termo encontrado.</p></div>)}</div>
    </div>
  );
};

const SeasonPage = ({ theme, onBack, onViewRegulation, onViewCalendar, onViewStandings, onViewCircuits }) => {
  const isLight = theme === 'light';
  const [year, setYear] = useState('2025'); // Estado do Toggle
  
  return (
    <div className="animate-in fade-in pb-12">
      <BackButton onClick={onBack} theme={theme} />
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <h2 className={`text-4xl font-black ${isLight?'text-gray-800':'text-white'}`}>Temporada {year}</h2>
        {/* TOGGLE 2025/2026 RESTAURADO */}
        <div className={`flex p-1 rounded-full ${isLight ? 'bg-gray-200' : 'bg-[#1a1a20] border border-[#333]'}`}>
           <button onClick={() => setYear('2025')} className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${year === '2025' ? (isLight ? 'bg-white text-black shadow-sm' : 'bg-[#00fff2] text-black shadow-[0_0_10px_#00fff2]') : (isLight ? 'text-gray-500 hover:text-black' : 'text-gray-500 hover:text-white')}`}>2025</button>
           <button onClick={() => setYear('2026')} className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${year === '2026' ? (isLight ? 'bg-white text-black shadow-sm' : 'bg-[#bd00ff] text-white shadow-[0_0_10px_#bd00ff]') : (isLight ? 'text-gray-500 hover:text-black' : 'text-gray-500 hover:text-white')}`}>2026</button>
        </div>
      </div>
      
      {year === '2025' ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
           {/* CARDS COLORIDOS RESTAURADOS */}
           <div onClick={onViewCalendar} className={`p-6 rounded-3xl h-48 cursor-pointer flex flex-col justify-between ${isLight?'bg-[#CFF7E8] text-teal-900':'bg-[#121217] border border-[#333] hover:border-[#00fff2]'}`}>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${isLight?'bg-white/50':'bg-[#00fff2]/20'}`}><Calendar size={24} className={isLight?'text-teal-800':'text-[#00fff2]'}/></div>
              <div><h3 className={`text-xl font-bold ${isLight?'text-teal-900':'text-white'}`}>Calendário</h3><p className={`text-sm ${isLight?'text-teal-700':'text-gray-400'}`}>Datas e resultados.</p></div>
           </div>
           <div onClick={onViewStandings} className={`p-6 rounded-3xl h-48 cursor-pointer flex flex-col justify-between ${isLight?'bg-[#FBCAD2] text-pink-900':'bg-[#121217] border border-[#333] hover:border-[#ff0055]'}`}>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${isLight?'bg-white/50':'bg-[#ff0055]/20'}`}><TrophyIcon size={24} className={isLight?'text-pink-800':'text-[#ff0055]'}/></div>
              <div><h3 className={`text-xl font-bold ${isLight?'text-pink-900':'text-white'}`}>Resultados</h3><p className={`text-sm ${isLight?'text-pink-700':'text-gray-400'}`}>Classificação final.</p></div>
           </div>
           <div onClick={onViewCircuits} className={`p-6 rounded-3xl h-48 cursor-pointer flex flex-col justify-between ${isLight?'bg-[#D8C4F0] text-purple-900':'bg-[#121217] border border-[#333] hover:border-[#bd00ff]'}`}>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${isLight?'bg-white/50':'bg-[#bd00ff]/20'}`}><MapPin size={24} className={isLight?'text-purple-800':'text-[#bd00ff]'}/></div>
              <div><h3 className={`text-xl font-bold ${isLight?'text-purple-900':'text-white'}`}>Circuitos</h3><p className={`text-sm ${isLight?'text-purple-700':'text-gray-400'}`}>Guias de traçado.</p></div>
           </div>
        </div>
      ) : (
        // CONTEÚDO DE 2026 (REGULAMENTO)
        <div onClick={onViewRegulation} className={`p-8 rounded-3xl flex items-center justify-between cursor-pointer group transition-all hover:scale-[1.01] ${isLight ? 'bg-gradient-to-r from-[#D8C4F0] to-[#CFF7E8] text-gray-800' : 'bg-gradient-to-r from-[#bd00ff]/20 to-[#00fff2]/20 border border-[#bd00ff]'}`}>
          <div className="flex items-center gap-6">
             <div className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg ${isLight ? 'bg-white text-purple-600' : 'bg-black border border-[#bd00ff] text-[#bd00ff]'}`}><Scale size={32} /></div>
             <div><h3 className={`text-2xl md:text-3xl font-black mb-1 ${isLight ? 'text-gray-800' : 'text-white'}`}>Novo Regulamento</h3><p className={`font-medium ${isLight ? 'text-gray-700' : 'text-gray-300'}`}>Entenda as mudanças radicais dos carros e motores.</p></div>
          </div>
          <div className={`p-3 rounded-full ${isLight ? 'bg-white/30' : 'bg-black/30 border border-[#00fff2]'}`}><ArrowRight size={24} className={isLight ? 'text-gray-800' : 'text-[#00fff2]'} /></div>
       </div>
      )}
    </div>
  );
};

const CalendarPage = ({ theme, onBack, onViewCircuit }) => {
  const isLight = theme === 'light';
  const [expandedRaceId, setExpandedRaceId] = useState(null);

  const toggleRace = (id, isNext) => {
    if (isNext) {
      onViewCircuit('circuit_vegas');
    } else {
      setExpandedRaceId(expandedRaceId === id ? null : id);
    }
  };

  return (
    <div className="animate-in fade-in pb-12">
      <BackButton onClick={onBack} theme={theme} />
      <h2 className={`text-4xl font-black ${isLight?'text-gray-800':'text-white'}`}>Calendário 2025</h2>
      <div className="space-y-4 mt-6">
        {RACES_2025.map((race, idx) => {
           const isNext = race.status === 'next';
           const isCompleted = race.status === 'completed';
           const isExpanded = expandedRaceId === idx;

           return (
             <div 
               key={idx} 
               onClick={() => toggleRace(idx, isNext)}
               className={`p-4 rounded-xl transition-all cursor-pointer
                 ${isLight?'bg-white shadow-sm hover:shadow-md':'bg-[#1a1a20] border border-[#333] hover:border-[#00fff2]'}
                 ${isNext ? (isLight ? 'ring-2 ring-[#00D2BE]' : 'border-[#00fff2] shadow-[0_0_10px_rgba(0,255,242,0.2)]') : ''}
               `}
             >
               <div className="flex justify-between items-center">
                 <div className="flex items-center gap-4">
                    <div className={`w-10 text-center ${isLight?'text-gray-400':'text-gray-600'}`}>
                      <span className="text-xs font-bold uppercase block">{race.date.split(' ')[1]}</span>
                      <span className="text-lg font-black block">{race.date.split(' ')[0]}</span>
                    </div>
                    <div>
                      <span className={`font-bold text-lg block ${isLight?'text-gray-800':'text-white'}`}>{race.name}</span>
                      <span className="text-xs text-gray-500">{race.circuit}</span>
                    </div>
                 </div>
                 
                 <div>
                   {isNext ? (
                     <span className="text-xs bg-teal-500 text-white px-3 py-1 rounded-full font-bold animate-pulse">Próxima</span>
                   ) : (isCompleted ? (
                     <div className="flex items-center gap-2">
                       <span className={`text-xs font-bold hidden md:inline ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>{race.winner}</span>
                       {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                     </div>
                   ) : (
                     <Circle size={16} className="text-gray-700/30" />
                   ))}
                 </div>
               </div>

               {/* PÓDIO EXPANDIDO */}
               {isExpanded && race.podium && (
                 <div className={`mt-4 pt-4 border-t ${isLight ? 'border-gray-100' : 'border-gray-800'} animate-in slide-in-from-top-2`}>
                    <div className="grid grid-cols-3 gap-2 text-center">
                       <div className="flex flex-col items-center">
                          <div className="text-2xl">🥈</div>
                          <span className={`text-xs font-bold ${isLight ? 'text-gray-600' : 'text-gray-300'}`}>{race.podium[1].replace(' 🥈', '')}</span>
                       </div>
                       <div className="flex flex-col items-center -mt-2">
                          <div className="text-4xl">🥇</div>
                          <span className={`text-sm font-black ${isLight ? 'text-gray-800' : 'text-white'}`}>{race.podium[0].replace(' 🥇', '')}</span>
                       </div>
                       <div className="flex flex-col items-center">
                          <div className="text-2xl">🥉</div>
                          <span className={`text-xs font-bold ${isLight ? 'text-gray-600' : 'text-gray-300'}`}>{race.podium[2].replace(' 🥉', '')}</span>
                       </div>
                    </div>
                 </div>
               )}
             </div>
           );
        })}
      </div>
    </div>
  );
};

const StandingsPage = ({ theme, onBack }) => {
  const isLight = theme === 'light';
  const [tab, setTab] = useState('drivers');
  const list = tab === 'drivers' ? STANDINGS_DRIVERS : STANDINGS_TEAMS;
  return (
    <div className="animate-in fade-in pb-12">
      <BackButton onClick={onBack} theme={theme} />
      <div className="flex justify-between items-center mb-6">
        <h2 className={`text-4xl font-black ${isLight?'text-gray-800':'text-white'}`}>Classificação</h2>
        <div className={`flex p-1 rounded-full ${isLight?'bg-gray-200':'bg-[#1a1a20]'}`}><button onClick={()=>setTab('drivers')} className={`px-4 py-1 rounded-full text-xs font-bold ${tab==='drivers'?(isLight?'bg-white shadow':'bg-[#00fff2] text-black'):'text-gray-500'}`}>Pilotos</button><button onClick={()=>setTab('teams')} className={`px-4 py-1 rounded-full text-xs font-bold ${tab==='teams'?(isLight?'bg-white shadow':'bg-[#00fff2] text-black'):'text-gray-500'}`}>Equipes</button></div>
      </div>
      <div className="space-y-2">{list.map((item, idx) => (
         // TABELA DETALHADA RESTAURADA
         <div key={idx} className={`p-4 rounded-xl flex items-center gap-4 ${isLight?'bg-white shadow-sm':'bg-[#1a1a20] border border-[#333]'}`}>
            <span className={`font-black text-lg w-8 text-center ${idx<3?(isLight?'text-[#F7B8C8]':'text-[#ff0055]'):'text-gray-400'}`}>{item.pos}</span>
            {item.color && <div className="w-1 h-8 rounded-full" style={{ backgroundColor: item.color }}></div>}
            <div className="flex-1"><span className={`font-bold block ${isLight?'text-gray-800':'text-white'}`}>{item.name}</span></div>
            <span className={`font-mono font-bold ${isLight?'text-gray-800':'text-white'}`}>{item.points} PTS</span>
         </div>
      ))}</div>
    </div>
  );
};

const CircuitsListPage = ({ theme, onBack, onViewCircuit }) => {
  const isLight = theme === 'light';
  return (<div className="animate-in fade-in pb-12"><BackButton onClick={onBack} theme={theme} /><h2 className={`text-4xl font-black ${isLight?'text-gray-800':'text-white'}`}>Circuitos</h2></div>);
};

const RegulationPage = ({ theme, onBack }) => {
  const isLight = theme === 'light';
  return (<div className="animate-in fade-in pb-12"><BackButton onClick={onBack} theme={theme} /><h2 className={`text-4xl font-black ${isLight?'text-gray-800':'text-white'}`}>Regulamento 2026</h2></div>);
};

const BlogPost = ({ theme, post, onBack }) => {
  const isLight = theme === 'light';
  const content = post || MANIFESTO_POST; // Fallback para o Manifesto se nenhum post for passado
  return (
    <div className={`max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20`}>
      <BackButton onClick={onBack} theme={theme} />
      <header className="mb-8">
        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${isLight ? 'bg-[#F7B8C8] text-white' : 'border border-[#bd00ff] text-[#bd00ff]'}`}>{content.category}</span>
        <h1 className={`text-4xl md:text-5xl font-black mt-4 mb-4 ${isLight ? 'text-gray-800' : 'text-white'}`}>{content.title}</h1>
        {content.time && <div className={`flex items-center gap-3 text-sm ${isLight?'text-gray-500':'text-gray-400'}`}><span>{content.time}</span><span>•</span><span>Por {content.author}</span></div>}
      </header>
      {content.image && <div className={`w-full aspect-video rounded-3xl bg-gray-200 mb-8 overflow-hidden shadow-lg`}><img src={content.image} className="w-full h-full object-cover" alt="Cover" /></div>}
      <article className={`prose max-w-none leading-relaxed text-lg ${isLight ? 'prose-gray text-gray-600' : 'prose-invert text-gray-300'}`} dangerouslySetInnerHTML={{ __html: content.content }} />
    </div>
  );
}

const ContactPage = ({ theme, onBack }) => {
  const isLight = theme === 'light';
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-12">
      <BackButton onClick={onBack} theme={theme} />
      <div className="mb-8"><h2 className={`text-4xl font-black mb-2 ${isLight ? 'text-gray-800' : 'text-white'}`}>Contato & Sobre</h2></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className={`p-8 rounded-3xl flex flex-col justify-between ${isLight ? 'bg-white shadow-lg' : 'bg-[#121217] border border-[#333]'}`}><div><h3 className={`text-2xl font-bold mb-2 ${isLight ? 'text-gray-800' : 'text-white'}`}>Oi, sou a Tamu! 👋</h3><p className={`leading-relaxed mb-6 ${isLight ? 'text-gray-600' : 'text-gray-300'}`}>Criei o Autamubilismo para mostrar que velocidade e estética andam juntos.</p></div></div>
        <div className={`p-8 rounded-3xl ${isLight ? 'bg-white shadow-lg' : 'bg-[#121217] border border-[#333]'}`}><h3 className={`text-xl font-bold mb-6 ${isLight ? 'text-gray-800' : 'text-white'}`}>Mande um alô</h3><form className="space-y-4"><input type="text" className={`w-full p-4 rounded-xl outline-none ${isLight ? 'bg-gray-50' : 'bg-[#0a0a12] border border-[#333]'}`} placeholder="Nome" /><button className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 ${isLight ? 'bg-gray-900 text-white' : 'bg-[#00fff2] text-black'}`}>Enviar <Send size={20} /></button></form></div>
      </div>
    </div>
  );
};

const GenericPage = ({ theme, title, icon: Icon, desc, onBack }) => {
  const isLight = theme === 'light';
  return (<div className="animate-in fade-in text-center mt-20"><BackButton onClick={onBack} theme={theme} /><div className={`mb-6 ${isLight?'text-gray-800':'text-white'}`}>{Icon && <Icon size={64} />}</div><h1 className={`text-4xl font-black ${isLight?'text-gray-800':'text-white'}`}>{title}</h1><p>Em Construção</p></div>);
};


// --- APP PRINCIPAL ---
export default function App() {
  const [theme, setTheme] = useState('light');
  const [view, setView] = useState('home'); 
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [selectedDriver, setSelectedDriver] = useState(null); 
  const [selectedTeam, setSelectedTeam] = useState(null); 
  const [selectedPost, setSelectedPost] = useState(null);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');
  const handleDriverClick = (driver) => { setSelectedDriver(driver); setView('driver_detail'); };
  const handleTeamClick = (team) => { setSelectedTeam(team); setView('team_detail'); };
  const handleNewsClick = (post) => { setSelectedPost(post); setView('post_detail'); };
  const handleArticleClick = (article) => { setSelectedPost(article); setView('post_detail'); };
  const handleManifestoClick = () => { setSelectedPost(MANIFESTO_POST); setView('post_detail'); };

  const renderContent = () => {
    const activeItem = SITE_MAP.find(i => i.id === view);
    const handleBack = () => setView('home'); 

    switch (view) {
      case 'home': return (
           <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(180px,auto)] animate-in fade-in zoom-in duration-300">
            <BentoCard theme={theme} onClick={handleManifestoClick} className="md:col-span-2 md:row-span-2 flex flex-col justify-between min-h-[400px] cursor-pointer hover:scale-[1.01]"><div className="space-y-4"><span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest ${theme === 'light' ? 'bg-[#F7B8C8] text-white' : 'border border-[#ff0055] text-[#ff0055]'}`}>Destaque</span><h2 className={`text-3xl md:text-5xl font-black leading-tight ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>Correndo como uma <br/><span className={theme === 'light' ? 'text-[#D8C4F0]' : 'text-[#bd00ff]'}>Garota.</span></h2><p className={`text-lg max-w-md ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>Desconstruindo estereótipos.</p></div><div className="mt-8"><button className={`px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-all duration-500 transform ${theme === 'light' ? 'bg-gray-900 text-white hover:bg-[#D8C4F0] hover:text-gray-900 hover:scale-105 hover:shadow-[0_10px_20px_-5px_rgba(216,196,240,0.6)]' : 'bg-[#00fff2] text-black shadow-[0_0_20px_rgba(0,255,242,0.4)] hover:bg-[#bd00ff] hover:text-white hover:shadow-[0_0_40px_#bd00ff] hover:scale-105 hover:border-[#bd00ff]'}`}>Ler Manifesto <ArrowRight size={18} /></button></div></BentoCard>
            <BentoCard theme={theme} onClick={() => setView('circuit_vegas')} className={`cursor-pointer md:col-span-1 md:row-span-1 ${theme === 'light' ? 'bg-[#CFF7E8]' : 'bg-[#0a0a12]'}`}><NextRaceWidget theme={theme} /></BentoCard>
            <BentoCard theme={theme} className="md:col-span-1 md:row-span-2 bg-white/50"><NewsWidget theme={theme} onNewsClick={handleNewsClick} /></BentoCard>
            <BentoCard theme={theme} onClick={() => setView('fanzone')} className="md:col-span-1 md:row-span-1 overflow-hidden relative p-0 cursor-pointer group"><FanzoneWidget theme={theme} /></BentoCard>
            <BentoCard theme={theme} onClick={() => setView('curiosities')} className={`md:col-span-1 md:row-span-1 cursor-pointer ${theme === 'light' ? 'bg-white' : 'bg-[#1a1a20]'}`}><CuriosityWidget theme={theme} /></BentoCard>
            <BentoCard theme={theme} className={`md:col-span-1 flex flex-col items-center justify-center text-center ${theme === 'light' ? 'bg-[#D8C4F0] text-white' : 'bg-[#1a1a20] border-[#bd00ff]'}`}><Coffee size={32} className={`mb-2 ${theme === 'light' ? 'text-white' : 'text-[#bd00ff]'}`} /><h3 className={`font-bold ${theme === 'light' ? 'text-white' : 'text-[#bd00ff]'}`}>Apoie</h3><button className={`mt-3 text-xs px-4 py-2 rounded-full font-bold transition-colors ${theme === 'light' ? 'bg-white text-[#D8C4F0]' : 'bg-[#bd00ff] text-white'}`}>Ko-fi</button></BentoCard>
            <BentoCard theme={theme} className={`md:col-span-2 md:row-span-1 ${theme === 'light' ? 'bg-[#D8C4F0]/20' : 'bg-[#0a0a12]'}`}><NewsletterWidget theme={theme} /></BentoCard>
            <BentoCard theme={theme} onClick={() => setView('articles')} className="md:col-span-1 md:row-span-1 overflow-hidden relative p-0 cursor-pointer group"><div className={`absolute inset-0 flex flex-col items-center justify-center ${theme === 'light' ? 'bg-[#D8C4F0]/20' : 'bg-[#1a1a20]'}`}><BookOpenText size={40} className={theme==='light'?'text-[#D8C4F0]':'text-[#bd00ff]'} /><h3 className={`mt-2 font-bold ${theme==='light'?'text-gray-800':'text-white'}`}>Opinião</h3></div></BentoCard>
           </div>
        );
      case 'articles': return <ArticlesPage theme={theme} onBack={handleBack} onArticleClick={handleArticleClick} />;
      case 'post_detail': return <BlogPost theme={theme} post={selectedPost} onBack={handleBack} />;
      case 'season': return <SeasonPage theme={theme} onBack={handleBack} onViewRegulation={() => setView('regulation_2026')} onViewCalendar={() => setView('calendar_2025')} onViewStandings={() => setView('standings_2025')} onViewCircuits={() => setView('circuits_2025')} />; 
      case 'regulation_2026': return <RegulationPage theme={theme} onBack={() => setView('season')} />; 
      case 'calendar_2025': return <CalendarPage theme={theme} onBack={() => setView('season')} onViewCircuit={setView} />; 
      case 'standings_2025': return <StandingsPage theme={theme} onBack={() => setView('season')} />; 
      case 'circuits_2025': return <CircuitsListPage theme={theme} onBack={() => setView('season')} onViewCircuit={setView} />; 
      case 'drivers': return <DriversPage theme={theme} onBack={handleBack} onDriverClick={handleDriverClick} />;
      case 'driver_detail': return <DriverDetail theme={theme} driver={selectedDriver} onBack={() => setView('drivers')} />;
      case 'teams': return <TeamsPage theme={theme} onBack={handleBack} onTeamClick={handleTeamClick} />; 
      case 'team_detail': return <TeamDetail theme={theme} team={selectedTeam} onBack={() => setView('teams')} />; 
      case 'circuit_vegas': return <CircuitPage theme={theme} onBack={handleBack} />;
      case 'fanzone': return <FanzonePage theme={theme} onBack={handleBack} />;
      case 'contact': return <ContactPage theme={theme} onBack={handleBack} />;
      case 'glossary': return <GlossaryPage theme={theme} onBack={handleBack} />;
      case 'curiosities': return <GenericPage theme={theme} title="Curiosidades" icon={Zap} desc="Fatos e Moda" onBack={handleBack} />;
      case 'media': return <GenericPage theme={theme} title="Multimídia" icon={Headphones} desc="Playlists" onBack={handleBack} />;
      case 'credits': return <GenericPage theme={theme} title="Créditos" icon={Heart} desc="Parceiros" onBack={handleBack} />;
      default: return <GenericPage theme={theme} title={activeItem?.label} icon={activeItem?.icon} desc={activeItem?.desc} onBack={handleBack} />;
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-700 font-sans selection:bg-pink-200 ${theme === 'light' ? 'bg-[#FFF5F8]' : 'bg-[#050505] text-gray-200'}`}>
      <style>{`@keyframes shine { 0% { transform: translateX(-150%) rotate(45deg); } 100% { transform: translateX(150%) rotate(45deg); } } .group:hover .group-hover\\:animate-shine { animation: shine 0.7s ease-in-out forwards; } .perspective-1000 { perspective: 1000px; } .transform-style-3d { transform-style: preserve-3d; } .backface-hidden { backface-visibility: hidden; } .rotate-y-180 { transform: rotateY(180deg); }`}</style>
      <NavigationOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} theme={theme} setView={setView} />
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} theme={theme} />
      {theme === 'dark' && (<div className="fixed inset-0 z-0 pointer-events-none"><div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-[#bd00ff]/10 to-transparent" /><div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00fff2]/10 blur-[100px]" /></div>)}
      <div className="max-w-7xl mx-auto p-4 md:p-8 relative z-10">
        <header className="flex justify-between items-center mb-12 pt-4 relative min-h-[100px]">
          <div className="flex-1 flex justify-start"><button onClick={() => setMenuOpen(true)} className={`group flex items-center gap-3 px-5 py-3 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 ${theme === 'light' ? 'bg-white text-gray-800 shadow-md hover:shadow-xl border-2 border-transparent hover:border-[#F7B8C8]' : 'bg-[#1a1a20] text-[#00fff2] border border-[#333] hover:border-[#00fff2] hover:shadow-[0_0_20px_rgba(0,255,242,0.4)]'}`}><Menu size={24} className={`transition-transform duration-300 group-hover:rotate-90`} /><span className="font-black tracking-widest text-sm">MENU</span></button></div>
          <div className="flex-0 cursor-pointer z-20 transform hover:scale-105 transition-transform duration-300" onClick={() => setView('home')}><LogoHelmet theme={theme} size="large" /></div>
          <div className="flex-1 flex justify-end gap-3"><button onClick={() => setSearchOpen(true)} className={`p-3 rounded-full flex items-center justify-center transition-colors ${theme === 'light' ? 'bg-white shadow-sm text-gray-400 hover:text-gray-600' : 'bg-[#1a1a20] text-gray-500 border border-[#333] hover:text-[#00fff2]'}`}><Search size={24} /></button><button onClick={toggleTheme} className={`p-3 rounded-full transition-all duration-300 ${theme === 'light' ? 'bg-white shadow-lg text-yellow-500' : 'bg-[#1a1a20] text-[#00fff2] border border-[#333]'}`}>{theme === 'light' ? <Sun size={24} /> : <Moon size={24} />}</button></div>
        </header>
        <main className="min-h-[60vh]">{renderContent()}</main>
        <footer className="mt-20 text-center space-y-2 pb-8"><p className={`text-sm font-medium ${theme === 'light' ? 'text-gray-400' : 'text-gray-600'}`}>© 2025 Autamubilismo. Feito com velocidade.</p><div className={`w-full h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-20 ${theme === 'light' ? 'text-[#F7B8C8]' : 'text-[#00fff2]'}`}></div></footer>
      </div>
    </div>
  );
}