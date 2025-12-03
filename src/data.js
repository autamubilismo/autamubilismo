import { 
  Home, Calendar, Users, Wrench, Sparkles, Zap, BookOpen, 
  FileText, Headphones, Mail, Heart, Gamepad2, Smile, Trophy as TrophyIcon,
  Music, Star, Briefcase, Utensils, Newspaper, Radio, Disc, ShieldAlert, Cpu
} from 'lucide-react';

// --- IMAGENS E CORES ---
export const LOGO_DARK_URL = "/img/web/DARK-MODE-HEADER.png";
export const LOGO_LIGHT_URL = "/img/web/LIGHT-MODE-HEADER.png";

export const PASTEL = { 
  pink: '#F7B8C8', 
  purple: '#D8C4F0', 
  mint: '#CFF7E8', 
  bg: '#FFFDFE' 
};

export const NEON = { 
  bg: '#141416', 
  purple: '#bd00ff', 
  cyan: '#00fff2', 
  pink: '#ab0eff', 
  surface: '#1e1e24' 
};

// --- MENU ---
export const SITE_MAP = [
  { id: 'home', label: 'Home', icon: Home, path: '/', desc: 'Painel Principal' },
  { id: 'news', label: 'Notícias', icon: Newspaper, path: '/news', desc: 'Últimas do Paddock' },
  { id: 'season', label: 'Temporada', icon: Calendar, path: '/season', desc: 'Calendário & Pontos' },
  { id: 'drivers', label: 'Pilotos', icon: Users, path: '/drivers', desc: 'Grid de 2025' },
  { id: 'teams', label: 'Equipes', icon: Wrench, path: '/teams', desc: 'Carros & Motores' },
  { id: 'fanzone', label: 'Fanzone', icon: Sparkles, path: '/fanzone', desc: 'Comunidade & Artes' },
  { id: 'curiosities', label: 'Curiosidades', icon: Zap, path: '/curiosities', desc: 'Fatos & História' },
  { id: 'glossary', label: 'Glossário', icon: BookOpen, path: '/glossary', desc: 'Dicionário da F1' },
  { id: 'articles', label: 'Artigos', icon: FileText, path: '/articles', desc: 'Análises & Opinião' },
  { id: 'media', label: 'Multimídia', icon: Headphones, path: '/media', desc: 'Playlists & Vídeos' },
  { id: 'contact', label: 'Contato', icon: Mail, path: '/contact', desc: 'Fale com a gente' },
  { id: 'credits', label: 'Créditos', icon: Heart, path: '/credits', desc: 'Quem faz' },
];

// --- PILOTOS ---
export const DRIVERS_DATA = [
  { 
    id: 'kimi', 
    name: 'Kimi Antonelli', 
    number: 12, 
    team: 'Mercedes', 
    color: '#00D2BE', 
    image: '/img/pilotos/antonelli/grid-antonelli.avif', 
    bio: "O garoto prodígio que fez a Mercedes esquecer Carlos Sainz. Pulou a F3 direto para o abismo da F1 e caiu de pé.", 
    country: 'Itália 🇮🇹', 
    age: '18 anos', 
    vibes: [
      { icon: Gamepad2, label: 'Sim Racer' }, 
      { icon: Utensils, label: 'Pasta Lover' }, 
      { icon: Zap, label: 'Rookie' }
    ], 
    stats: { 
      xp: 'F2 (Prema)', 
      podiums: '2', 
      bestResult: 'P3 (Vegas)' 
    }, 
    signature: "Kimi A.", 
    secretFact: "Leva seu simulador portátil para todos os hotéis.", 
    zodiac: "Virgem ♍" 
  },
  { 
    id: 'lewis', 
    name: 'Lewis Hamilton', 
    number: 44, 
    team: 'Ferrari', 
    color: '#FF0000', 
    image: '/img/pilotos/hamilton/grid-hamilton.avif', 
    signature: "Lewis 44", 
    secretFact: "Roscoe tem seu próprio passe VIP.", 
    zodiac: "Capricórnio ♑", 
    vibes: [{ icon: Star, label: 'Lenda' }] 
  },
  { 
    id: 'gabriel', 
    name: 'Gabriel Bortoleto', 
    number: 5, 
    team: 'Sauber', 
    color: '#52E252', 
    image: '/img/pilotos/bortoleto/grid-bortoleto.avif', 
    country: 'Brasil 🇧🇷', 
    signature: "Bortoleto", 
    secretFact: "Adora feijoada.", 
    zodiac: "Libra ♎", 
    vibes: [{ icon: Zap, label: 'Rápido' }] 
  },
  { 
    id: 'max', 
    name: 'Max Verstappen', 
    number: 1, 
    team: 'Red Bull', 
    color: '#1E41FF', 
    image: '/img/pilotos/verstappen/grid-verstappen.avif', 
    signature: "Max V.", 
    secretFact: "Prefere FIFA a entrevistas.", 
    zodiac: "Libra ♎", 
    vibes: [{ icon: TrophyIcon, label: 'Campeão' }] 
  },
  { 
    id: 'lando', 
    name: 'Lando Norris', 
    number: 4, 
    team: 'McLaren', 
    color: '#FF8700', 
    image: '/img/pilotos/norris/grid-norris.avif', 
    signature: "Lando", 
    secretFact: "DJ nas horas vagas.", 
    zodiac: "Escorpião ♏", 
    vibes: [{ icon: Gamepad2, label: 'Gamer' }] 
  },
  { 
    id: 'charles', 
    name: 'Charles Leclerc', 
    number: 16, 
    team: 'Ferrari', 
    color: '#FF0000', 
    image: '/img/pilotos/leclerc/grid-leclerc.avif', 
    signature: "Charles 16", 
    secretFact: "Toca piano para relaxar.", 
    zodiac: "Libra ♎", 
    vibes: [{ icon: Music, label: 'Piano' }] 
  },
  { 
    id: 'oscar', 
    name: 'Oscar Piastri', 
    number: 81, 
    team: 'McLaren', 
    color: '#FF8700', 
    image: '/img/pilotos/piastri/grid-piastri.avif', 
    signature: "Oscar P.", 
    secretFact: "O homem mais calmo do mundo.", 
    zodiac: "Áries ♈", 
    vibes: [{ icon: Smile, label: 'Calmo' }] 
  },
  { 
    id: 'george', 
    name: 'George Russell', 
    number: 63, 
    team: 'Mercedes', 
    color: '#00D2BE', 
    image: '/img/pilotos/russell/grid-russell.avif', 
    signature: "GR63", 
    secretFact: "Ama uma pose de powerpoint.", 
    zodiac: "Aquário ♒", 
    vibes: [{ icon: Briefcase, label: 'CEO' }] 
  },
  { 
    id: 'carlos', 
    name: 'Carlos Sainz', 
    number: 55, 
    team: 'Williams', 
    color: '#005AFF', 
    image: '/img/pilotos/sainz/grid-sainz.avif', 
    signature: "Chili", 
    secretFact: "Smooth Operator original.", 
    zodiac: "Virgem ♍" 
  },
  { 
    id: 'oliver', 
    name: 'Oliver Bearman', 
    number: 87, 
    team: 'Haas', 
    color: '#B6BABD', 
    image: '/img/pilotos/bearman/grid-bearman.avif', 
    signature: "Ollie", 
    secretFact: "Estudou para a prova de direção durante o GP.", 
    zodiac: "Touro ♉" 
  },
  { 
    id: 'liam', 
    name: 'Liam Lawson', 
    number: 30, 
    team: 'Red Bull', 
    color: '#1E41FF', 
    image: '/img/pilotos/lawson/grid-lawson.avif', 
    signature: "Lawson", 
    zodiac: "Aquário ♒" 
  },
  { 
    id: 'isack', 
    name: 'Isack Hadjar', 
    number: 6, 
    team: 'VCARB', 
    color: '#1633EF', 
    image: '/img/pilotos/hadjar/grid-hadjar.avif', 
    signature: "Hadjar", 
    zodiac: "Libra ♎" 
  },
  { 
    id: 'nico', 
    name: 'Nico Hulkenberg', 
    number: 27, 
    team: 'Sauber', 
    color: '#52E252', 
    image: '/img/pilotos/hulkenberg/grid-hulkenberg.avif', 
    signature: "Hulk", 
    zodiac: "Leão ♌" 
  },
  { 
    id: 'esteban', 
    name: 'Esteban Ocon', 
    number: 31, 
    team: 'Haas', 
    color: '#B6BABD', 
    image: '/img/pilotos/ocon/grid-ocon.avif', 
    signature: "Ocon", 
    zodiac: "Virgem ♍" 
  },
  { 
    id: 'fernando', 
    name: 'Fernando Alonso', 
    number: 14, 
    team: 'Aston Martin', 
    color: '#006F62', 
    image: '/img/pilotos/alonso/grid-alonso.avif', 
    signature: "Alo 14", 
    zodiac: "Leão ♌" 
  },
  { 
    id: 'lance', 
    name: 'Lance Stroll', 
    number: 18, 
    team: 'Aston Martin', 
    color: '#006F62', 
    image: '/img/pilotos/stroll/grid-stroll.avif', 
    signature: "Lance", 
    zodiac: "Escorpião ♏" 
  },
  { 
    id: 'pierre', 
    name: 'Pierre Gasly', 
    number: 10, 
    team: 'Alpine', 
    color: '#0090FF', 
    image: '/img/pilotos/gasly/grid-gasly.avif', 
    signature: "Gasly", 
    zodiac: "Aquário ♒" 
  },
  { 
    id: 'alex', 
    name: 'Alex Albon', 
    number: 23, 
    team: 'Williams', 
    color: '#005AFF', 
    image: '/img/pilotos/albon/grid-albon.avif', 
    signature: "Albon", 
    zodiac: "Áries ♈" 
  },
  { 
    id: 'yuki', 
    name: 'Yuki Tsunoda', 
    number: 22, 
    team: 'VCARB', 
    color: '#1633EF', 
    image: '/img/pilotos/tsunoda/grid-tsunoda.avif', 
    signature: "Yuki", 
    zodiac: "Touro ♉" 
  },
];

// --- EQUIPES 2026 (IMAGENS HD ATUALIZADAS) ---
export const TEAMS_DATA = [
  { 
    id: 'mercedes', 
    name: 'Mercedes', 
    fullName: 'Mercedes-AMG PETRONAS F1 Team', 
    color: '#00D2BE', 
    engine: 'Mercedes', 
    drivers: ['Russell', 'Antonelli'],
    domain: 'mercedesamgf1.com',
    image: 'https://images.unsplash.com/photo-1692707805708-74b576400b7c?q=80&w=1600',
    titles: 8,
    base: 'Brackley, UK',
    bio: 'A flecha de prata busca retomar a hegemonia na nova era de 2026 com motores sustentáveis.'
  },
  { 
    name: 'Ferrari', 
    color: '#FF0000', 
    engine: 'Ferrari', 
    drivers: ['Leclerc', 'Hamilton'],
    domain: 'ferrari.com',
    image: 'https://images.unsplash.com/photo-1592853625597-7d17be820d0c?q=80&w=1600',
    titles: 16,
    base: 'Maranello, IT',
    fullName: 'Scuderia Ferrari HP'
  },
  { 
    name: 'Red Bull Racing', 
    color: '#1E41FF', 
    engine: 'Red Bull-Ford', 
    drivers: ['Verstappen', 'Lawson'],
    domain: 'redbullracing.com',
    image: 'https://images.unsplash.com/photo-1589769819573-d3f4a3345391?q=80&w=1600',
    titles: 6,
    base: 'Milton Keynes, UK',
    fullName: 'Oracle Red Bull Racing'
  },
  { 
    name: 'McLaren', 
    color: '#FF8700', 
    engine: 'Mercedes', 
    drivers: ['Norris', 'Piastri'],
    domain: 'mclaren.com',
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1600',
    titles: 8,
    base: 'Woking, UK',
    fullName: 'McLaren Formula 1 Team'
  },
  { 
    name: 'Aston Martin', 
    color: '#006F62', 
    engine: 'Honda', 
    drivers: ['Alonso', 'Stroll'],
    domain: 'astonmartinf1.com',
    image: 'https://images.unsplash.com/photo-1631558361324-172852861830?q=80&w=1600',
    titles: 0,
    base: 'Silverstone, UK',
    fullName: 'Aston Martin Aramco F1 Team'
  },
  { 
    name: 'Alpine', 
    color: '#0090FF', 
    engine: 'Mercedes',
    drivers: ['Gasly', 'Doohan'],
    domain: 'alpinecars.com',
    image: 'https://images.unsplash.com/photo-1634472333187-c18776c4984b?q=80&w=1600',
    titles: 2,
    base: 'Enstone, UK',
    fullName: 'BWT Alpine F1 Team'
  },
  { 
    name: 'Williams', 
    color: '#005AFF', 
    engine: 'Mercedes', 
    drivers: ['Albon', 'Sainz'],
    domain: 'williamsf1.com',
    image: 'https://images.unsplash.com/photo-1612620272995-8b77d8928454?q=80&w=1600',
    titles: 9,
    base: 'Grove, UK',
    fullName: 'Williams Racing'
  },
  { 
    name: 'VCARB', 
    color: '#1633EF', 
    engine: 'Red Bull-Ford', 
    drivers: ['Tsunoda', 'Hadjar'],
    domain: 'visacashapprb.com',
    image: 'https://images.unsplash.com/photo-1626722843337-5f55d3473417?q=80&w=1600',
    titles: 0,
    base: 'Faenza, IT',
    fullName: 'Visa Cash App RB Formula One Team'
  },
  { 
    name: 'Haas', 
    color: '#B6BABD', 
    engine: 'Ferrari', 
    drivers: ['Ocon', 'Bearman'],
    domain: 'haasf1team.com',
    image: 'https://images.unsplash.com/photo-1618486640092-0c3679e86f49?q=80&w=1600',
    titles: 0,
    base: 'Kannapolis, USA',
    fullName: 'MoneyGram Haas F1 Team'
  },
  { 
    name: 'Sauber', 
    color: '#52E252', 
    engine: 'Ferrari', 
    drivers: ['Hulkenberg', 'Bortoleto'],
    domain: 'sauber-group.com',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1600',
    titles: 0,
    base: 'Hinwil, CH',
    fullName: 'Stake F1 Team Kick Sauber'
  },
  { 
    name: 'Audi', 
    color: '#000000', 
    engine: 'Audi', 
    drivers: ['TBA'], 
    note: '2026',
    domain: 'audi.com',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1600',
    titles: 0,
    base: 'Neuburg, DE',
    fullName: 'Audi F1 Team'
  },
  { 
    name: 'Cadillac', 
    color: '#E6BE56', 
    engine: 'GM', 
    drivers: ['TBA'], 
    note: '2026',
    domain: 'cadillac.com',
    image: 'https://images.unsplash.com/photo-1536643278213-2990d0f962d1?q=80&w=1600',
    titles: 0,
    base: 'USA',
    fullName: 'Cadillac F1 Team'
  },
];

// --- CORRIDAS ---
export const RACES_2025 = [
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

// --- NOTÍCIAS ---
export const NEWS_DATA = [
  { 
    id: 'news-1', 
    title: "Verstappen vence em Vegas e retoma liderança por 1 ponto!", 
    category: "GP Vegas", 
    time: "12h atrás", 
    image: "https://images.unsplash.com/photo-1506191839364-10509691934e?q=80&w=800", 
    author: "Tamu", 
    content: `<p class="lead">Reviravolta no campeonato! Com a desclassificação das McLarens, Max Verstappen vence e vira o jogo.</p>` 
  },
  { 
    id: 'news-2', 
    title: "Kimi Antonelli brilha e conquista pódio inédito na Strip", 
    category: "Destaque", 
    time: "15h atrás", 
    image: "https://i.pinimg.com/736x/4f/40/12/4f4012d7ffec1216e21b9b01150eee00.jpg", 
    author: "Redação", 
    content: `<p class="lead">O garoto prodígio da Mercedes segurou a pressão e terminou em P3, calando os críticos.</p>` 
  },
  { 
    id: 'news-3', 
    title: "Próxima parada: O calor escaldante do Catar pode decidir tudo", 
    category: "Prévia", 
    time: "1d atrás", 
    image: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?q=80&w=800", 
    author: "Tech Analysis", 
    content: `<p class="lead">Depois do gelo de Vegas, os pilotos enfrentarão a "sauna" de Lusail. Haja preparo físico.</p>` 
  },
];

// --- ARTIGOS E MANIFESTO ---
export const MANIFESTO_POST = {
  id: "manifesto",
  title: "Correndo como uma garota.",
  category: "Manifesto",
  time: "19 Nov",
  author: "Tamu",
  image: "/img/web/manifesto.jpg",

  excerpt:
    "O automobilismo sempre foi feito de barulho, mas a internet transformou isso numa bagunça.",

  // ⚡️ Duas versões: LIGHT e DARK
  contentLight: `
    <section class="space-y-8">

      <header class="space-y-4">
        <p class="text-sm font-bold tracking-[0.25em] uppercase opacity-70">
          manifesto do autamubilismo
        </p>

        <p class="text-xl md:text-2xl font-medium leading-relaxed">
          O automobilismo sempre foi feito de barulho — motores, torcida, narrador, coração acelerado —
          mas a internet transformou esse barulho numa bagunça. Informação jogada, fofoca sem fonte,
          números errados, fandom isolado.
        </p>
      </header>

      <section class="space-y-4">
        <h2 class="text-3xl md:text-4xl font-black leading-tight">
          A gente decidiu fazer diferente.
        </h2>

        <p class="text-lg leading-relaxed">
          O <strong>autamubilismo</strong> nasce como um porto seguro para quem ama o esporte.
          <span class="text-[#ab0eff] font-black">Aqui, todo fã é fã de verdade.</span>
        </p>

        <p class="leading-relaxed">
          A gente acredita que corrida é cultura, e que cultura se vive junto.
        </p>

        <p class="leading-relaxed">
          Que dá pra informar com precisão e, ao mesmo tempo, falar com paixão.
        </p>
      </section>

      <section class="my-10 p-8 rounded-[2.5rem] border border-[#ab0eff]/30 bg-[#FFF5F8]/70 space-y-6">
        <p class="font-black text-xs tracking-[0.35em] uppercase opacity-80">
          aqui, algumas coisas são inegociáveis:
        </p>

        <ul class="space-y-4 text-lg font-semibold">
          <li class="flex items-center gap-4">
            <span class="text-2xl">📊</span>
            <span>Dados importam.</span>
          </li>

          <li class="flex items-center gap-4">
            <span class="text-2xl">🔍</span>
            <span>Fontes importam.</span>
          </li>

          <li class="flex items-center gap-4">
            <span class="text-2xl">💖</span>
            <span class="text-[#ab0eff]">Os fãs importam.</span>
          </li>
        </ul>
      </section>

      <section class="mt-14 p-10 rounded-[3rem] text-center border border-[#ab0eff]/30 bg-gradient-to-br from-[#FFF5F8] via-white to-[#F7B8C8]/40">
        <p class="text-2xl md:text-4xl font-black mb-6 leading-tight">
          “O autamubilismo existe pra transformar a experiência
          de acompanhar corrida em algo mais humano.”
        </p>

        <div class="flex flex-col gap-2 text-xs md:text-sm font-bold uppercase tracking-[0.25em] opacity-80">
          <span>Mais acessível.</span>
          <span>Mais organizado.</span>
          <span class="text-xl md:text-2xl mt-3 text-[#ab0eff] tracking-normal font-black">
            Mais nosso.
          </span>
        </div>
      </section>

    </section>
  `,

  contentDark: `
    <section class="space-y-8">

      <header class="space-y-4">
        <p class="text-sm font-bold tracking-[0.25em] uppercase text-gray-400">
          manifesto do autamubilismo
        </p>

        <p class="text-xl md:text-2xl leading-relaxed text-gray-300">
          O automobilismo sempre foi feito de barulho — motores, torcida, narrador —
          mas a internet transformou isso numa bagunça.
        </p>
      </header>

      <section class="space-y-4 text-gray-300">
        <h2 class="text-3xl md:text-4xl font-black text-white">
          A gente decidiu fazer diferente.
        </h2>

        <p class="text-lg">
          O <strong>autamubilismo</strong> nasce como um porto seguro para quem ama o esporte.
          <span class="text-[#ab0eff] font-black">Aqui, todo fã é fã de verdade.</span>
        </p>

        <p>Que dá pra informar com precisão e ainda falar com paixão.</p>
      </section>

      <section class="my-10 p-8 rounded-[2.5rem] border border-[#ab0eff]/30 bg-[#1a1a20]/70 text-gray-200 space-y-6">
        <p class="font-black text-xs tracking-[0.35em] uppercase text-gray-400">
          aqui, algumas coisas são inegociáveis:
        </p>

        <ul class="space-y-4 text-lg font-semibold">
          <li class="flex items-center gap-4">
            <span class="text-2xl">📊</span>
            <span>Dados importam.</span>
          </li>

          <li class="flex items-center gap-4">
            <span class="text-2xl">🔍</span>
            <span>Fontes importam.</span>
          </li>

          <li class="flex items-center gap-4">
            <span class="text-2xl">💖</span>
            <span class="text-[#ab0eff]">Os fãs importam.</span>
          </li>
        </ul>
      </section>

      <section class="mt-14 p-10 rounded-[3rem] text-center border border-[#ab0eff]/20 bg-gradient-to-br from-[#151515] via-[#1a1a20] to-[#ab0eff]/10 text-gray-200">
        <p class="text-2xl md:text-4xl font-black mb-6 leading-tight text-white">
          “O autamubilismo existe pra transformar a experiência
          de acompanhar corrida em algo mais humano.”
        </p>

        <div class="flex flex-col gap-2 text-xs md:text-sm font-bold uppercase opacity-70">
          <span>Mais acessível.</span>
          <span>Mais organizado.</span>
          <span class="text-xl md:text-2xl mt-3 text-[#ab0eff] font-black opacity-100">
            Mais nosso.
          </span>
        </div>
      </section>

    </section>
  `,
};




// fallback local de artigos (por enquanto vazio, mas já exportado)
export const ARTICLES_DATA = [
  // exemplo de artigo fixo se quiser depois:
  // {
  //   id: 'editorial-1',
  //   title: 'Editorial: Por que 2026 vai virar tudo de cabeça pra baixo',
  //   category: 'Editorial',
  //   time: '21 Nov',
  //   image: 'https://images.unsplash.com/....',
  //   author: 'Tamu',
  //   excerpt: 'Motores novos, política velha e muita treta pela frente.',
  //   content: '<p>HTML aqui...</p>',
  // },
];

// --- GLOSSÁRIO ---
export const GLOSSARY_SETS = [
  {
    id: 'general',
    title: 'Glossário Geral',
    description: 'Termos essenciais para entender a corrida, do Undercut ao DRS.',
    icon: BookOpen,
    color: '#bd00ff',
    items: [
      { id: 1, term: 'Undercut', definition: 'Parar nos boxes antes do rival para aproveitar pneus novos e ganhar a posição quando ele parar.' },
      { id: 2, term: 'Overcut', definition: 'Ficar na pista com pneus velhos enquanto o rival para, tentando ganhar tempo com ar limpo.' },
      { id: 3, term: 'Dirty Air', definition: 'Ar turbulento deixado por um carro à frente, que reduz a pressão aerodinâmica de quem vem atrás.' },
      { id: 4, term: 'DRS', definition: 'Drag Reduction System. A asa móvel traseira que abre para facilitar ultrapassagens.' }
    ]
  },
  {
    id: 'engine2026',
    title: 'Motor 2026',
    description: 'O futuro híbrido: MGU-K triplicado e combustíveis 100% sustentáveis.',
    icon: Cpu,
    color: '#00fff2',
    items: [
      { id: 1, term: 'Combustível 100% Sustentável', definition: 'Combustível criado em laboratório que não adiciona carbono novo à atmosfera.' },
      { id: 2, term: 'MGU-K', definition: 'Unidade Geradora de Motor Cinético. Em 2026, fornecerá 350kW (quase 50% da potência total).' },
      { id: 3, term: 'Aerodinâmica Ativa', definition: 'Asas que se movem tanto na frente quanto atrás para reduzir arrasto nas retas (Modo X) e aumentar pressão nas curvas (Modo Z).' },
      { id: 4, term: 'Remoção do MGU-H', definition: 'O complexo sistema que recuperava energia do calor do escapamento foi removido para reduzir custos.' }
    ]
  },
  {
    id: 'tires',
    title: 'Estratégia de Pneus',
    description: 'Compostos Pirelli, janelas de pit stop e degradação.',
    icon: Disc,
    color: '#ab0eff',
    items: [
      { id: 1, term: 'C1 a C5', definition: 'A gama de pneus slick da Pirelli. C1 é o mais duro (durável, lento), C5 é o mais macio (rápido, frágil).' },
      { id: 2, term: 'Graining', definition: 'Quando a borracha descasca e gruda de volta no pneu, criando uma superfície rugosa que reduz aderência.' },
      { id: 3, term: 'Blistering', definition: 'Bolhas de ar que se formam dentro da borracha devido ao superaquecimento interno, podendo estourar o pneu.' },
      { id: 4, term: 'Cliff', definition: 'O momento em que o pneu perde performance subitamente e de forma irreversível.' }
    ]
  },
  {
    id: 'radio',
    title: 'Rádio & Callouts',
    description: 'O que os engenheiros e pilotos realmente estão dizendo.',
    icon: Radio,
    color: '#F59E0B',
    items: [
      { id: 1, term: 'Box, Box', definition: 'Instrução imperativa para entrar nos boxes nesta volta.' },
      { id: 2, term: 'Lift and Coast', definition: 'Tirar o pé do acelerador antes da zona de frenagem para economizar combustível e freios.' },
      { id: 3, term: 'Plan B', definition: 'Estratégia alternativa pré-combinada (ex: estender o stint ou mudar para duas paradas).' },
      { id: 4, term: 'Strat Mode', definition: 'Ajuste no mapeamento do motor para mais potência ou economia.' }
    ]
  },
  {
    id: 'rules',
    title: 'Normas & Punições',
    description: 'ISC, Apêndice L e o que pode dar bandeira preta.',
    icon: ShieldAlert,
    color: '#10B981',
    items: [
      { id: 1, term: 'Drive-Through', definition: 'Punição onde o piloto deve passar pelos boxes sem parar, em velocidade limitada.' },
      { id: 2, term: 'Track Limits', definition: 'As linhas brancas definem a pista. Sair com as 4 rodas gera aviso e, depois, punição.' },
      { id: 3, term: 'Bandeira Azul', definition: 'Aviso para um retardatário deixar um carro mais rápido (líder) passar.' },
      { id: 4, term: 'Safety Car Delta', definition: 'Tempo mínimo que o piloto deve respeitar durante bandeira amarela/SC.' }
    ]
  }
];

// compat antiga
export const GLOSSARY_DATA = GLOSSARY_SETS[0].items;

export const STANDINGS_DRIVERS = [{ pos: 1, name: 'Max Verstappen', points: 391 }];
export const STANDINGS_TEAMS = [{ pos: 1, name: 'McLaren', points: 756 }];

// --- CIRCUITOS ---
export const CIRCUITS_DATA = [
  { 
    id: 'interlagos', 
    name: 'Autódromo de Interlagos', 
    gp: 'GP de São Paulo', 
    country: 'Brasil', 
    flag: '🇧🇷', 
    date: '07-09 Nov', 
    length: '4.309 km', 
    laps: 71, 
    record: '1:10.540 (Bottas, 2018)',
    layout: 'https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Brazil_Circuit.png.transform/7col/image.png'
  },
  { 
    id: 'las-vegas', 
    name: 'Las Vegas Strip Circuit', 
    gp: 'GP de Las Vegas', 
    country: 'EUA', 
    flag: '🇺🇸', 
    date: '20-22 Nov', 
    length: '6.201 km', 
    laps: 50, 
    record: '1:35.490 (Piastri, 2023)',
    layout: 'https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Las_Vegas_Circuit.png.transform/7col/image.png'
  },
  { 
    id: 'lusail', 
    name: 'Lusail International Circuit', 
    gp: 'GP do Catar', 
    country: 'Catar', 
    flag: '🇶🇦', 
    date: '28-30 Nov', 
    length: '5.419 km', 
    laps: 57, 
    record: '1:24.319 (Verstappen, 2023)',
    layout: 'https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Qatar_Circuit.png.transform/7col/image.png'
  },
  { 
    id: 'yas-marina', 
    name: 'Yas Marina Circuit', 
    gp: 'GP de Abu Dhabi', 
    country: 'EAU', 
    flag: '🇦🇪', 
    date: '05-07 Dez', 
    length: '5.281 km', 
    laps: 58, 
    record: '1:26.103 (Verstappen, 2021)',
    layout: 'https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Abu_Dhabi_Circuit.png.transform/7col/image.png'
  },
];
