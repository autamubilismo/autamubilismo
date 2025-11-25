import { 
  Home, Calendar, Users, Wrench, Sparkles, Zap, BookOpen, 
  FileText, Headphones, Mail, Heart, Gamepad2, Smile, Trophy as TrophyIcon,
  Music, Star, Briefcase
} from 'lucide-react';

// --- IMAGENS E CORES ---
export const LOGO_LIGHT_URL = "https://i.ibb.co/gLx3yLbN/Logo-Light-copiar.png"; 
export const LOGO_DARK_URL = "https://i.ibb.co/ds8KGVKB/NEONMODE-copiar.png"; 

export const PASTEL = { pink: '#F7B8C8', purple: '#D8C4F0', mint: '#CFF7E8', bg: '#FFFDFE' };
export const NEON = { bg: '#09090b', purple: '#bd00ff', cyan: '#00fff2', pink: '#ff0055' };

// --- MENU ---
export const SITE_MAP = [
  { id: 'home', label: 'Home', icon: Home, path: '/', desc: 'Destaques' },
  { id: 'season', label: 'Temporada', icon: Calendar, path: '/season', desc: '2025/26' },
  { id: 'drivers', label: 'Pilotos', icon: Users, path: '/drivers', desc: 'Grid Atual' },
  { id: 'teams', label: 'Equipes', icon: Wrench, path: '/teams', desc: 'Construtores' },
  { id: 'fanzone', label: 'Fanzone', icon: Sparkles, path: '/fanzone', desc: 'Comunidade' },
  { id: 'curiosities', label: 'Curiosidades', icon: Zap, path: '/curiosities', desc: 'Fatos' },
  { id: 'glossary', label: 'Glossário', icon: BookOpen, path: '/glossary', desc: 'Termos' },
  { id: 'articles', label: 'Artigos', icon: FileText, path: '/articles', desc: 'Opinião' },
  { id: 'media', label: 'Multimídia', icon: Headphones, path: '/media', desc: 'Playlists' },
  { id: 'contact', label: 'Contato', icon: Mail, path: '/contact', desc: 'Newsletter' },
  { id: 'credits', label: 'Créditos', icon: Heart, path: '/credits', desc: 'Parceiros' },
];

// --- PILOTOS (Exemplo resumido para o arquivo não ficar gigante, mantenha seus dados originais se tiver mais) ---
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
      { icon: 'Gamepad2', label: 'Sim Racer' },
      { icon: 'Utensils', label: 'Pasta Lover' },
      { icon: 'Zap', label: 'Rookie' }
    ],
    stats: { xp: 'F2 (Prema)', podiums: '2', bestResult: 'P3 (Vegas)' },
    signature: "Kimi A.",
    secretFact: "Leva seu simulador portátil para todos os hotéis.",
    zodiac: "Leão ♌"
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
    vibes: [
      { icon: 'Star', label: 'Lenda' }
    ]
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
    vibes: [
      { icon: 'Zap', label: 'Rápido' }
    ]
  },

  { 
    id: 'max',
    name: 'Max Verstappen',
    number: 1,
    team: 'Red Bull',
    color: '#1E41FF',
    image: '/img/pilotos/verstappen/grid-verstappen.avif',
    signature: "Max V.",
    secretFact: "Prefere FIFA.",
    zodiac: "Libra ♎",
    vibes: [
      { icon: 'TrophyIcon', label: 'Campeão' }
    ]
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
    vibes: [
      { icon: 'Gamepad2', label: 'Gamer' }
    ]
  },

  { 
    id: 'charles',
    name: 'Charles Leclerc',
    number: 16,
    team: 'Ferrari',
    color: '#FF0000',
    image: '/img/pilotos/leclerc/grid-leclerc.avif',
    signature: "Charles 16",
    secretFact: "Toca piano.",
    zodiac: "Libra ♎",
    vibes: [
      { icon: 'Music', label: 'Piano' }
    ]
  },

  {
    id: 'oscar',
    name: 'Oscar Piastri',
    number: 81,
    team: 'McLaren',
    color: '#FF8700',
    image: '/img/pilotos/piastri/grid-piastri.avif',
    signature: "Oscar P.",
    secretFact: "Calmo demais.",
    zodiac: "Áries ♈",
    vibes: [
      { icon: 'Smile', label: 'Calmo' }
    ]
  },

  {
    id: 'george',
    name: 'George Russell',
    number: 63,
    team: 'Mercedes',
    color: '#00D2BE',
    image: '/img/pilotos/russell/grid-russell.avif',
    signature: "GR63",
    secretFact: "Powerpoint lover.",
    zodiac: "Aquário ♒",
    vibes: [
      { icon: 'Briefcase', label: 'CEO' }
    ]
  },

  { id: 'carlos', name: 'Carlos Sainz', number: 55, team: 'Williams', color: '#005AFF', image: '/img/pilotos/sainz/grid-sainz.avif', signature: "Chili", secretFact: "Smooth Operator.", zodiac: "Virgem ♍" },
  { id: 'oliver', name: 'Oliver Bearman', number: 87, team: 'Haas', color: '#B6BABD', image: '/img/pilotos/bearman/grid-bearman.avif', signature: "Ollie", secretFact: "Estudante.", zodiac: "Touro ♉" },
  { id: 'liam', name: 'Liam Lawson', number: 30, team: 'Red Bull', color: '#1E41FF', image: '/img/pilotos/lawson/grid-lawson.avif', signature: "Lawson", zodiac: "Aquário ♒" },
  { id: 'isack', name: 'Isack Hadjar', number: 6, team: 'VCARB', color: '#1633EF', image: '/img/pilotos/hadjar/grid-hadjar.avif', signature: "Hadjar", zodiac: "Libra ♎" },
  { id: 'nico', name: 'Nico Hulkenberg', number: 27, team: 'Sauber', color: '#52E252', image: '/img/pilotos/hulkenberg/grid-hulkenberg.avif', signature: "Hulk", zodiac: "Leão ♌" },
  { id: 'esteban', name: 'Esteban Ocon', number: 31, team: 'Haas', color: '#B6BABD', image: '/img/pilotos/ocon/grid-ocon.avif', signature: "Ocon", zodiac: "Virgem ♍" },
  { id: 'fernando', name: 'Fernando Alonso', number: 14, team: 'Aston Martin', color: '#006F62', image: '/img/pilotos/alonso/grid-alonso.avif', signature: "Alo 14", zodiac: "Leão ♌" },
  { id: 'lance', name: 'Lance Stroll', number: 18, team: 'Aston Martin', color: '#006F62', image: '/img/pilotos/stroll/grid-stroll.avif', signature: "Lance", zodiac: "Escorpião ♏" },
  { id: 'pierre', name: 'Pierre Gasly', number: 10, team: 'Alpine', color: '#0090FF', image: '/img/pilotos/gasly/grid-gasly.avif', signature: "Gasly", zodiac: "Aquário ♒" },
  { id: 'alex', name: 'Alex Albon', number: 23, team: 'Williams', color: '#005AFF', image: '/img/pilotos/albon/grid-albon.avif', signature: "Albon", zodiac: "Áries ♈" },
  { id: 'yuki', name: 'Yuki Tsunoda', number: 22, team: 'VCARB', color: '#1633EF', image: '/img/pilotos/tsunoda/grid-tsunoda.avif', signature: "Yuki", zodiac: "Touro ♉" }
];

export const TEAMS_DATA = [
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

export const RACES_2025 = [
  { round: 22, name: 'GP de Las Vegas', date: '22 Nov', circuit: 'Las Vegas Strip', status: 'completed', winner: 'M. Verstappen 🥇', podium: ['M. Verstappen 🥇', 'G. Russell 🥈', 'K. Antonelli 🥉'] }, 
  { round: 23, name: 'GP do Catar', date: '30 Nov', circuit: 'Lusail', status: 'next' },
];

export const NEWS_DATA = [
  { id: 'news-1', title: "Verstappen vence em Vegas e retoma liderança", category: "GP Vegas", time: "12h atrás", image: "https://images.unsplash.com/photo-1506191839364-10509691934e?q=80&w=800" },
  { id: 'news-2', title: "Kimi Antonelli conquista pódio inédito", category: "Destaque", time: "15h atrás", image: "https://i.pinimg.com/736x/4f/40/12/4f4012d7ffec1216e21b9b01150eee00.jpg" },
  { id: 'news-3', title: "Calor extremo no Catar preocupa equipes", category: "Prévia", time: "1d atrás", image: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?q=80&w=800" },
  { id: 'news-4', title: "FIA anuncia novas regras para 2026", category: "Técnica", time: "2d atrás", image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1200" },
];

export const ARTICLES_DATA = [
  { id: 'art-1', title: "A Psicologia de um Campeão", excerpt: "Análise...", category: "Análise", time: "18 Nov", image: "https://media.formula1.com/image/upload/f_auto/q_auto/v1709223759/fom-website/2024/McLaren/Lando_Norris_Bahrain_2024.jpg" },
  { id: 'manifesto', title: "Correndo como uma garota.", category: "Manifesto", time: "19 Nov", image: "https://images.unsplash.com/photo-1592853625511-ad0ed2881895?q=80&w=1200", content: "<p>Texto do manifesto...</p>" },
];

export const GLOSSARY_DATA = [{ id: 1, term: 'Undercut', category: 'Estratégia', definition: '...' }];
export const STANDINGS_DRIVERS = [{ pos: 1, name: 'Max Verstappen', points: 391 }];
export const STANDINGS_TEAMS = [{ pos: 1, name: 'McLaren', points: 756 }];