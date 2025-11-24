import { 
  Home, Calendar, Users, Wrench, Sparkles, Zap, BookOpen, 
  FileText, Headphones, Mail, Heart, Gamepad2, Smile, 
  Trophy as TrophyIcon, Music, Star, Briefcase, Utensils
} from 'lucide-react';

export const LOGO_LIGHT_URL = "https://i.ibb.co/tw2VBdC4/Logo-Light.png"; 
export const LOGO_DARK_URL = "https://i.ibb.co/3mMHfZxb/NEONMODE.png"; 

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

export const DRIVERS_DATA = [
  { 
    id: 'kimi',
    name: 'Kimi Antonelli',
    number: 12,
    team: 'Mercedes',
    color: '#00D2BE',
    image: '/img/pilotos/antonelli/profile.avif',
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
    image: '/img/pilotos/hamilton/profile.avif',
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
    image: '/img/pilotos/bortoleto/profile.avif',
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
    image: '/img/pilotos/verstappen/profile.avif',
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
    image: '/img/pilotos/norris/profile.avif',
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
    image: '/img/pilotos/leclerc/profile.avif',
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
    image: '/img/pilotos/piastri/profile.avif',
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
    image: '/img/pilotos/russell/profile.avif',
    signature: "GR63",
    secretFact: "Powerpoint lover.",
    zodiac: "Aquário ♒",
    vibes: [
      { icon: 'Briefcase', label: 'CEO' }
    ]
  },

  { id: 'carlos', name: 'Carlos Sainz', number: 55, team: 'Williams', color: '#005AFF', image: '/img/pilotos/sainz/profile.avif', signature: "Chili", secretFact: "Smooth Operator.", zodiac: "Virgem ♍" },
  { id: 'oliver', name: 'Oliver Bearman', number: 87, team: 'Haas', color: '#B6BABD', image: '/img/pilotos/bearman/profile.avif', signature: "Ollie", secretFact: "Estudante.", zodiac: "Touro ♉" },
  { id: 'jack', name: 'Jack Doohan', number: 7, team: 'Alpine', color: '#0090FF', image: '/img/pilotos/doohan/profile.avif', signature: "Jack D", secretFact: "MotoGP DNA.", zodiac: "Aquário ♒" },
  { id: 'liam', name: 'Liam Lawson', number: 30, team: 'Red Bull', color: '#1E41FF', image: '/img/pilotos/lawson/profile.avif', signature: "Lawson", zodiac: "Aquário ♒" },
  { id: 'isack', name: 'Isack Hadjar', number: 6, team: 'VCARB', color: '#1633EF', image: '/img/pilotos/hadjar/profile.avif', signature: "Hadjar", zodiac: "Libra ♎" },
  { id: 'nico', name: 'Nico Hulkenberg', number: 27, team: 'Sauber', color: '#52E252', image: '/img/pilotos/hulkenberg/profile.avif', signature: "Hulk", zodiac: "Leão ♌" },
  { id: 'esteban', name: 'Esteban Ocon', number: 31, team: 'Haas', color: '#B6BABD', image: '/img/pilotos/ocon/profile.avif', signature: "Ocon", zodiac: "Virgem ♍" },
  { id: 'fernando', name: 'Fernando Alonso', number: 14, team: 'Aston Martin', color: '#006F62', image: '/img/pilotos/alonso/profile.avif', signature: "Alo 14", zodiac: "Leão ♌" },
  { id: 'lance', name: 'Lance Stroll', number: 18, team: 'Aston Martin', color: '#006F62', image: '/img/pilotos/stroll/profile.avif', signature: "Lance", zodiac: "Escorpião ♏" },
  { id: 'pierre', name: 'Pierre Gasly', number: 10, team: 'Alpine', color: '#0090FF', image: '/img/pilotos/gasly/profile.avif', signature: "Gasly", zodiac: "Aquário ♒" },
  { id: 'alex', name: 'Alex Albon', number: 23, team: 'Williams', color: '#005AFF', image: '/img/pilotos/albon/profile.avif', signature: "Albon", zodiac: "Áries ♈" },
  { id: 'yuki', name: 'Yuki Tsunoda', number: 22, team: 'VCARB', color: '#1633EF', image: '/img/pilotos/tsunoda/profile.avif', signature: "Yuki", zodiac: "Touro ♉" }
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
  { round: 1, name: 'GP da Austrália', date: '16 Mar', circuit: 'Albert Park', status: 'completed', winner: 'L. Norris 🥇', podium: ['L. Norris 🥇', 'M. Verstappen 🥈', 'G. Russell 🥉'] },
  { round: 22, name: 'GP de Las Vegas', date: '22 Nov', circuit: 'Las Vegas Strip', status: 'completed', winner: 'M. Verstappen 🥇', podium: ['M. Verstappen 🥇', 'G. Russell 🥈', 'K. Antonelli 🥉'] }, 
  { round: 23, name: 'GP do Catar', date: '30 Nov', circuit: 'Lusail', status: 'next' },
  { round: 24, name: 'GP de Abu Dhabi', date: '07 Dez', circuit: 'Yas Marina', status: 'upcoming' },
];

export const STANDINGS_DRIVERS = [
  { pos: 1, name: 'Max Verstappen', team: 'Red Bull', points: 391, color: '#1E41FF' },
  { pos: 2, name: 'Lando Norris', team: 'McLaren', points: 390, color: '#FF8700' },
  { pos: 3, name: 'Oscar Piastri', team: 'McLaren', points: 366, color: '#FF8700' },
  { pos: 4, name: 'George Russell', team: 'Mercedes', points: 312, color: '#00D2BE' },
  { pos: 5, name: 'Charles Leclerc', team: 'Ferrari', points: 238, color: '#FF0000' },
];

export const STANDINGS_TEAMS = [
  { pos: 1, name: 'McLaren', points: 756, color: '#FF8700' },
  { pos: 2, name: 'Mercedes', points: 464, color: '#00D2BE' },
  { pos: 3, name: 'Red Bull', points: 419, color: '#1E41FF' },
  { pos: 4, name: 'Ferrari', points: 394, color: '#FF0000' },
];

export const GLOSSARY_DATA = [
  { id: 1, term: 'Undercut', category: 'Estratégia', definition: 'Parar nos boxes antes do rival para aproveitar a velocidade dos pneus novos e ganhar a posição quando ele parar.', example: 'O undercut da Mercedes funcionou e Lewis voltou na frente.' },
  { id: 2, term: 'Overcut', category: 'Estratégia', definition: 'Ficar na pista com pneus velhos enquanto o rival para, tentando fazer voltas rápidas com ar limpo para voltar na frente.', example: 'Perez fez o overcut funcionar poupando os pneus.' },
  { id: 3, term: 'Graining', category: 'Pneus', definition: 'Quando a borracha do pneu se solta e gruda de volta na superfície, criando uma textura rugosa que reduz a aderência.', example: 'O frio de Vegas causou muito graining nos pneus dianteiros.' },
];

export const NEWS_DATA = [
  { id: 'news-1', title: "Verstappen vence em Vegas e retoma liderança por 1 ponto!", category: "GP Vegas", time: "12h atrás", image: "https://images.unsplash.com/photo-1506191839364-10509691934e?q=80&w=800", author: "Tamu", content: `<p class="lead">Reviravolta no campeonato! Com a desclassificação das McLarens, Max Verstappen vence e vira o jogo.</p>` },
  { id: 'news-2', title: "Kimi Antonelli brilha e conquista pódio inédito na Strip", category: "Destaque", time: "15h atrás", image: "https://i.pinimg.com/736x/4f/40/12/4f4012d7ffec1216e21b9b01150eee00.jpg", author: "Redação", content: `<p class="lead">O garoto prodígio da Mercedes segurou a pressão e terminou em P3, calando os críticos.</p>` },
  { id: 'news-3', title: "Próxima parada: O calor escaldante do Catar pode decidir tudo", category: "Prévia", time: "1d atrás", image: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?q=80&w=800", author: "Tech Analysis", content: `<p class="lead">Depois do gelo de Vegas, os pilotos enfrentarão a "sauna" de Lusail. Haja preparo físico.</p>` },
];

export const MANIFESTO_POST = {
  id: 'manifesto',
  title: "Correndo como uma garota.",
  category: "Manifesto",
  time: "19 Nov",
  image: "https://images.unsplash.com/photo-1592853625511-ad0ed2881895?q=80&w=1200",
  author: "Tamu",
  content: `<p>Eu cresci ouvindo que corrida é barulho, é graxa, é homem bravo gritando no rádio.</p><p>Mas eu nunca ouvi ninguém dizer que corrida também é sensibilidade...</p><div class="mt-12 p-8 rounded-2xl text-center bg-current bg-opacity-10"><p class="text-2xl font-black mb-2">"Porque eu corro como uma garota."</p></div>`
};

export const ARTICLES_DATA = [
  { 
    id: 'art-1',
    title: "A Psicologia de um Campeão: Como Norris virou a chave",
    excerpt: "De 'bom moço' a predador. Analisamos a mudança de postura que colocou Lando na briga pelo título mundial.",
    category: "Análise",
    time: "18 Nov",
    image: "https://media.formula1.com/image/upload/f_auto/q_auto/v1709223759/fom-website/2024/McLaren/Lando_Norris_Bahrain_2024.jpg",
    author: "Tamu",
    content: `<p>Texto longo e profundo sobre a psicologia do Lando...</p>`
  },

  { 
    id: 'art-2',
    title: "Por que a F1 precisa parar de ignorar a estética",
    excerpt: "O visual não é futilidade, é identidade. Como o design dos carros e macacões conta a história da temporada.",
    category: "Opinião",
    time: "15 Nov",
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1200",
    author: "Tamu",
    content: `<p>Texto longo sobre design e estética na F1...</p>`
  },
];
