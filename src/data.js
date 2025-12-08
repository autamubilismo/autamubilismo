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
    name: 'Andrea Kimi Antonelli', 
    number: 12, 
    team: 'Mercedes-AMG', 
    color: '#00D2BE', 
    image: '/img/pilotos/antonelli/grid-antonelli.avif', 
    bio: "Andrea Kimi Antonelli nasceu em Bolonha, Itália, em 25 de agosto de 2006. Filho do ex-piloto Marco Antonelli, cresceu imerso no automobilismo. Dominou o kart, venceu a F4 Italiana, ADAC F4 e brilhou na Fórmula Regional Europeia e Middle East. Em 2025, estreou pela Mercedes como um dos pilotos mais jovens da história, mostrando maturidade, ritmo forte e consistência impressionante ao longo de seus primeiros 24 GPs.", 
    country: 'Bolonha, Itália 🇮🇹', 
    age: '19 anos', 
    vibes: [{ icon: Gamepad2, label: 'Sim Racer' }, { icon: Utensils, label: 'Pasta Lover' }, { icon: Zap, label: 'Rookie' }], 
    stats: { 
      points: '150', 
      podiums: '3', 
      bestResult: 'P2', 
      xp: '24 GPs'
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
    bio: "Lewis Hamilton, nascido em Stevenage em 7 de janeiro de 1985, é uma das maiores lendas da Fórmula 1. Sete vezes campeão mundial, redefiniu padrões de pilotagem, performance e impacto cultural no esporte. Em 2025, já na Ferrari, manteve sua consistência exemplar e sua reputação de competidor feroz, trazendo sua liderança e influência para Maranello.", 
    country: 'Reino Unido 🇬🇧', 
    age: '40 anos', 
    vibes: [{ icon: Star, label: 'Lenda' }], 
    stats: { 
      points: '171', 
      podiums: '1', 
      bestResult: 'P2', 
      xp: '327 GPs'
    }, 
    signature: "Lewis 44", 
    secretFact: "Roscoe tem seu próprio passe VIP.", 
    zodiac: "Capricórnio ♑" 
  },

  { 
    id: 'gabriel', 
    name: 'Gabriel Bortoleto', 
    number: 5, 
    team: 'Sauber', 
    color: '#52E252', 
    image: '/img/pilotos/bortoleto/grid-bortoleto.avif', 
    bio: "Gabriel Bortoleto nasceu no Brasil em 2004 e rapidamente se tornou um dos maiores talentos da nova geração. Campeão da Fórmula 3, entrou na Fórmula 1 com maturidade além da idade. Em 2025, somou 19 pontos e mostrou velocidade, técnica e estabilidade, garantindo resultados sólidos para a Sauber. Sua condução suave e inteligente o coloca entre os jovens mais promissores do grid.", 
    country: 'Brasil 🇧🇷', 
    age: '21 anos', 
    vibes: [{ icon: Zap, label: 'Rápido' }], 
    stats: { 
      points: '19', 
      podiums: '0', 
      bestResult: 'P6', 
      xp: '24 GPs'
    }, 
    signature: "Bortoleto", 
    secretFact: "Adora feijoada.", 
    zodiac: "Libra ♎" 
  },

  { 
    id: 'max', 
    name: 'Max Verstappen', 
    number: 1, 
    team: 'Red Bull', 
    color: '#1E41FF', 
    image: '/img/pilotos/verstappen/grid-verstappen.avif', 
    bio: "Max Verstappen, nascido em 1997, é um fenômeno da Fórmula 1. Depois de dominar a categoria por anos, seguiu extremamente competitivo em 2025, somando vitórias, pódios e mantendo um nível técnico absurdo. Conhecido pelo estilo agressivo, controle de corrida e leitura afiada, é um dos nomes mais dominantes da história moderna da F1.", 
    country: 'Países Baixos 🇳🇱', 
    age: '28 anos', 
    vibes: [{ icon: TrophyIcon, label: 'Campeão' }], 
    stats: { 
      points: '421', 
      podiums: '15', 
      bestResult: 'P1', 
      xp: '233 GPs'
    }, 
    signature: "Max V.", 
    secretFact: "Prefere FIFA a entrevistas.", 
    zodiac: "Libra ♎" 
  },

  { 
    id: 'lando', 
    name: 'Lando Norris', 
    number: 4, 
    team: 'McLaren', 
    color: '#FF8700', 
    image: '/img/pilotos/norris/grid-norris.avif', 
    bio: "Lando Norris nasceu em 1999 e tornou-se um dos pilotos mais completos do grid. Em 2025, viveu sua melhor temporada, conquistando vitórias, pódios e o título mundial ao lado da McLaren. Sua combinação de velocidade, carisma e consistência elevou sua reputação a um patamar histórico.", 
    country: 'Reino Unido 🇬🇧', 
    age: '26 anos', 
    vibes: [{ icon: Gamepad2, label: 'Gamer' }], 
    stats: { 
      points: '423', 
      podiums: '18', 
      bestResult: 'P1', 
      xp: '152 GPs'
    }, 
    signature: "Lando", 
    secretFact: "DJ nas horas vagas.", 
    zodiac: "Escorpião ♏" 
  },

  { 
    id: 'charles', 
    name: 'Charles Leclerc', 
    number: 16, 
    team: 'Ferrari', 
    color: '#FF0000', 
    image: '/img/pilotos/leclerc/grid-leclerc.avif', 
    bio: "Charles Leclerc nasceu em Mônaco em 1997 e tornou-se o principal nome da Ferrari na última década. Conhecido por sua velocidade de uma volta, precisão e emocionalidade intensa, entregou uma temporada forte em 2025, com pódios e consistência no top 10. Seu talento bruto segue inquestionável no cenário da F1.", 
    country: 'Mônaco 🇲🇨', 
    age: '28 anos', 
    vibes: [{ icon: Music, label: 'Piano' }], 
    stats: { 
      points: '242', 
      podiums: '7', 
      bestResult: 'P2', 
      xp: '171 GPs'
    }, 
    signature: "Charles 16", 
    secretFact: "Toca piano para relaxar.", 
    zodiac: "Libra ♎" 
  },

  { 
    id: 'oscar', 
    name: 'Oscar Piastri', 
    number: 81, 
    team: 'McLaren', 
    color: '#FF8700', 
    image: '/img/pilotos/piastri/grid-piastri.avif', 
    bio: "Oscar Piastri, nascido na Austrália em 2001, é um dos talentos mais limpos e precisos do grid. Em 2025, conquistou vitórias, pódios e consolidou sua posição como vice-líder técnico da McLaren. Seu estilo calmo, calculado e maduro faz dele um competidor extremamente perigoso.", 
    country: 'Austrália 🇦🇺', 
    age: '24 anos', 
    vibes: [{ icon: Smile, label: 'Calmo' }], 
    stats: { 
      points: '410', 
      podiums: '16', 
      bestResult: 'P1', 
      xp: '70 GPs'
    }, 
    signature: "Oscar P.", 
    secretFact: "O homem mais calmo do mundo.", 
    zodiac: "Áries ♈" 
  },

  { 
    id: 'george', 
    name: 'George Russell', 
    number: 63, 
    team: 'Mercedes-AMG', 
    color: '#00D2BE', 
    image: '/img/pilotos/russell/grid-russell.avif', 
    bio: "George Russell nasceu em 1998 e rapidamente ascendeu como um dos pilotos mais técnicos de sua geração. Em 2025, entregou vitórias, pódios e uma temporada extremamente consistente para a Mercedes, reforçando seu status de líder interno e competidor cerebral.", 
    country: 'Reino Unido 🇬🇧', 
    age: '27 anos', 
    vibes: [{ icon: Briefcase, label: 'CEO' }], 
    stats: { 
      points: '319', 
      podiums: '9', 
      bestResult: 'P1', 
      xp: '152 GPs'
    }, 
    signature: "GR63", 
    secretFact: "Ama uma pose de powerpoint.", 
    zodiac: "Aquário ♒" 
  },

  { 
    id: 'carlos', 
    name: 'Carlos Sainz', 
    number: 55, 
    team: 'Williams', 
    color: '#005AFF', 
    image: '/img/pilotos/sainz/grid-sainz.avif', 
    bio: "Carlos Sainz nasceu em Madri em 1994 e construiu uma carreira marcada por solidez e inteligência estratégica. Em 2025, correndo pela Williams, entregou pódios e resultados fortes mesmo com equipamento limitado, reforçando sua reputação como um dos pilotos mais consistentes do pelotão.", 
    country: 'Espanha 🇪🇸', 
    age: '31 anos', 
    vibes: [{ icon: Zap, label: 'Smooth Operator' }], 
    stats: { 
      points: '64', 
      podiums: '2', 
      bestResult: 'P3', 
      xp: '230 GPs'
    }, 
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
    bio: "Oliver Bearman nasceu em 2005 no Reino Unido e rapidamente se tornou um prodígio do automobilismo. Sua temporada completa de estreia em 2025 mostrou velocidade, maturidade e capacidade de pontuar com equipamento limitado, consolidando seu status como futura estrela da F1.", 
    country: 'Reino Unido 🇬🇧', 
    age: '20 anos', 
    vibes: [{ icon: Zap, label: 'Prodígio' }], 
    stats: { 
      points: '41', 
      podiums: '0', 
      bestResult: 'P4', 
      xp: '27 GPs'
    }, 
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
    bio: "Liam Lawson, nascido na Nova Zelândia em 2002, finalmente garantiu uma vaga fixa na Fórmula 1 e entregou uma temporada forte em 2025. Sua condução agressiva, carisma e capacidade de extrair performance mesmo sob pressão fizeram dele um destaque do pelotão intermediário.", 
    country: 'Nova Zelândia 🇳🇿', 
    age: '23 anos', 
    vibes: [{ icon: Zap, label: 'Agressivo' }], 
    stats: { 
      points: '38', 
      podiums: '0', 
      bestResult: 'P5', 
      xp: '35 GPs'
    }, 
    signature: "Lawson", 
    secretFact: "Adora carros JDM.", 
    zodiac: "Aquário ♒" 
  },

  { 
    id: 'isack', 
    name: 'Isack Hadjar', 
    number: 6, 
    team: 'VCARB', 
    color: '#1633EF', 
    image: '/img/pilotos/hadjar/grid-hadjar.avif', 
    bio: "Isack Hadjar nasceu na França em 2004 e teve uma ascensão meteórica até a Fórmula 1. Em 2025, conquistou seu primeiro pódio e mostrou agressividade controlada, velocidade natural e excelente adaptação à categoria, consolidando-se como uma das maiores promessas recentes.", 
    country: 'França 🇫🇷', 
    age: '21 anos', 
    vibes: [{ icon: Zap, label: 'Promessa' }], 
    stats: { 
      points: '51', 
      podiums: '1', 
      bestResult: 'P3', 
      xp: '23 GPs'
    }, 
    signature: "Hadjar", 
    secretFact: "Treina kart até de madrugada.", 
    zodiac: "Libra ♎" 
  },

  { 
    id: 'nico', 
    name: 'Nico Hulkenberg', 
    number: 27, 
    team: 'Sauber', 
    color: '#52E252', 
    image: '/img/pilotos/hulkenberg/grid-hulkenberg.avif', 
    bio: "Nico Hülkenberg, nascido em 1987, é um dos veteranos mais respeitados da Fórmula 1. Em 2025, conquistou um pódio histórico após anos de espera. Sua pilotagem técnica, experiência e leitura de corrida continuam sendo valiosas para qualquer equipe.", 
    country: 'Alemanha 🇩🇪', 
    age: '38 anos', 
    vibes: [{ icon: TrophyIcon, label: 'Veterano' }], 
    stats: { 
      points: '51', 
      podiums: '1', 
      bestResult: 'P3', 
      xp: '251 GPs'
    }, 
    signature: "Hulk", 
    secretFact: "O rei das sextas-feiras.", 
    zodiac: "Leão ♌" 
  },

  { 
    id: 'esteban', 
    name: 'Esteban Ocon', 
    number: 31, 
    team: 'Haas', 
    color: '#B6BABD', 
    image: '/img/pilotos/ocon/grid-ocon.avif', 
    bio: "Esteban Ocon, nascido em 1996, sempre foi reconhecido por sua consistência, defesa impecável e frieza estratégica. Em 2025, competiu pela Haas e entregou resultados sólidos, mostrando maturidade e profissionalismo mesmo em condições desafiadoras.", 
    country: 'França 🇫🇷', 
    age: '29 anos', 
    vibes: [{ icon: Zap, label: 'Consistente' }], 
    stats: { 
      points: '56', 
      podiums: '0', 
      bestResult: 'P7', 
      xp: '427 GPs'
    }, 
    signature: "Ocon", 
    secretFact: "Dirige melhor sob pressão.", 
    zodiac: "Virgem ♍" 
  },

  { 
    id: 'fernando', 
    name: 'Fernando Alonso', 
    number: 14, 
    team: 'Aston Martin', 
    color: '#006F62', 
    image: '/img/pilotos/alonso/grid-alonso.avif', 
    bio: "Fernando Alonso, nascido em 1981, é um dos maiores talentos da história da Fórmula 1. Bicampeão mundial, dono de velocidade pura, inteligência estratégica e longevidade espetacular, seguiu extremamente competitivo em 2025, acumulando top 10s e mantendo sua reputação de lenda viva do esporte.", 
    country: 'Espanha 🇪🇸', 
    age: '44 anos', 
    vibes: [{ icon: Star, label: 'Lenda' }], 
    stats: { 
      points: '56', 
      podiums: '0', 
      bestResult: 'P7', 
      xp: '427 GPs'
    }, 
    signature: "Alo 14", 
    secretFact: "Provavelmente venceria se corresse sozinho.", 
    zodiac: "Leão ♌" 
  },

  { 
    id: 'lance', 
    name: 'Lance Stroll', 
    number: 18, 
    team: 'Aston Martin', 
    color: '#006F62', 
    image: '/img/pilotos/stroll/grid-stroll.avif', 
    bio: "Lance Stroll nasceu em 1998 no Canadá e construiu uma carreira marcada por bons desempenhos, incluindo pódios e grandes atuações na chuva. Em 2025, continuou entregando resultados sólidos com a Aston Martin, pontuando regularmente e mostrando evolução técnica.", 
    country: 'Canadá 🇨🇦', 
    age: '27 anos', 
    vibes: [{ icon: Zap, label: 'Determinado' }], 
    stats: { 
      points: '33', 
      podiums: '0', 
      bestResult: 'P9', 
      xp: '190 GPs'
    }, 
    signature: "Lance", 
    secretFact: "Adora guiar na chuva.", 
    zodiac: "Escorpião ♏" 
  },

  { 
    id: 'pierre', 
    name: 'Pierre Gasly', 
    number: 10, 
    team: 'Alpine', 
    color: '#0090FF', 
    image: '/img/pilotos/gasly/grid-gasly.avif', 
    bio: "Pierre Gasly nasceu em 1996 e conquistou seu espaço na Fórmula 1 com talento, resiliência e carisma. Vencedor de corrida, entregou uma temporada regular em 2025, somando pontos importantes para a Alpine e mantendo sua reputação de piloto técnico e rápido.", 
    country: 'França 🇫🇷', 
    age: '29 anos', 
    vibes: [{ icon: Music, label: 'Estiloso' }], 
    stats: { 
      points: '22', 
      podiums: '0', 
      bestResult: 'P7', 
      xp: '177 GPs'
    }, 
    signature: "Gasly", 
    secretFact: "Viciado em moda.", 
    zodiac: "Aquário ♒" 
  },

  { 
    id: 'alex', 
    name: 'Alex Albon', 
    number: 23, 
    team: 'Williams', 
    color: '#005AFF', 
    image: '/img/pilotos/albon/grid-albon.avif', 
    bio: "Alexander Albon nasceu em Londres em 23 de março de 1996 e representa a Tailândia na Fórmula 1. Sua carreira é marcada por resiliência e evolução constante. Em 2025, viveu sua melhor temporada, somando 73 pontos, 11 top 10 e uma volta mais rápida. Suas conduções calmas, limpas e extremamente técnicas o mantêm como um dos pilotos mais valorizados do pelotão intermediário.", 
    country: 'Tailândia 🇹🇭', 
    age: '29 anos', 
    vibes: [{ icon: Smile, label: 'Calmo' }], 
    stats: { 
      points: '73', 
      podiums: '0', 
      bestResult: 'P7', 
      xp: '128 GPs'
    }, 
    signature: "Albon", 
    secretFact: "Come arroz com ovo em todo GP.", 
    zodiac: "Áries ♈" 
  },

  { 
    id: 'yuki', 
    name: 'Yuki Tsunoda', 
    number: 22, 
    team: 'VCARB', 
    color: '#1633EF', 
    image: '/img/pilotos/tsunoda/grid-tsunoda.avif', 
    bio: "Yuki Tsunoda, nascido em 2000 no Japão, é conhecido por sua velocidade explosiva e personalidade marcante. Em 2025, entregou atuações consistentes e seguiu evoluindo como um dos pilotos mais carismáticos e talentosos do grid.", 
    country: 'Japão 🇯🇵', 
    age: '25 anos', 
    vibes: [{ icon: Utensils, label: 'Ramen Lover' }], 
    stats: { 
      points: '11', 
      podiums: '0', 
      bestResult: 'P8', 
      xp: '89 GPs'
    }, 
    signature: "Yuki", 
    secretFact: "Come mais que a equipe inteira junta.", 
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
    drivers: ['George Russell', 'Kimi Antonelli'],
    domain: 'mercedesamgf1.com',
    image: '/img/equipes/mercedes/logo-mercedes.png',
    titles: 8,
    base: 'Brackley, Inglaterra',
    principal: 'Toto Wolff',
    bio: 'A Mercedes dominou a F1 na era turbo-híbrida (2014-2021) com 8 títulos consecutivos de construtores, estabelecendo um dos períodos mais dominantes da história do esporte. Sediada em Brackley (chassis) e Brixworth (motores), a equipe alemã é conhecida por sua excelência técnica e gestão impecável. Para 2026, representa uma nova era pós-Hamilton, com George Russell como líder estabelecido e Kimi Antonelli, jovem prodígio italiano, fazendo sua estreia. A Mercedes também fornece motores para McLaren, Williams e Alpine, tornando-se o maior fornecedor do grid. A equipe busca retornar ao topo após temporadas desafiadoras.'
  },

  { 
    id: 'ferrari',
    name: 'Ferrari', 
    fullName: 'Scuderia Ferrari HP',
    color: '#FF0000', 
    engine: 'Ferrari', 
    drivers: ['Charles Leclerc', 'Lewis Hamilton'],
    domain: 'ferrari.com',
    image: '/img/equipes/ferrari/logo-ferrari.png',
    titles: 16,
    base: 'Maranello, Itália',
    principal: 'Fred Vasseur',
    bio: 'A Ferrari é a única equipe presente desde a primeira temporada da Fórmula 1 em 1950, sendo sinônimo do esporte. Com 16 títulos de construtores e 15 de pilotos, a Scuderia é a equipe mais vitoriosa da história. Sediada em Maranello, a Ferrari produz seus próprios motores e chassis, sendo a verdadeira equipe de fábrica da categoria. Para 2026, conta com a dupla de sonho formada por Charles Leclerc, piloto da casa e futuro da equipe, e Lewis Hamilton, o heptacampeão mundial que se juntou à Ferrari em 2025 na transferência mais impactante da história recente da F1. A equipe busca retornar ao topo após anos sem títulos.'
  },

  { 
    id: 'redbull',
    name: 'Red Bull Racing', 
    fullName: 'Oracle Red Bull Racing',
    color: '#1E41FF', 
    engine: 'Red Bull Powertrains-Ford', 
    drivers: ['Max Verstappen', 'Isaack Hadjar'],
    domain: 'redbullracing.com',
    image: '/img/equipes/redbull/logo-redbull.png',
    titles: 7,
    base: 'Milton Keynes, Inglaterra',
    principal: 'Laurent Mekies',
    bio: 'A Red Bull Racing entrou na F1 em 2005 após comprar a Jaguar e rapidamente se estabeleceu como uma potência. Com 7 títulos de construtores e 7 de pilotos (2010-2013 com Vettel e 2021-2024 com Verstappen), a equipe austríaca dominou a última era da F1. Para 2026, marca uma nova fase com motores próprios desenvolvidos em parceria com a Ford, encerrando a parceria com Honda. Max Verstappen continua como líder, enquanto Isack Hadjar, promovido da Racing Bulls, representa a nova geração de talentos da academia Red Bull. A equipe enfrenta o desafio de se adaptar aos novos regulamentos enquanto mantém a competitividade.'
  },

  { 
    id: 'mclaren',
    name: 'McLaren', 
    fullName: 'McLaren F1 Team',
    color: '#FF8700', 
    engine: 'Mercedes', 
    drivers: ['Lando Norris', 'Oscar Piastri'],
    domain: 'mclaren.com',
    image: '/img/equipes/mclaren/logo-mclaren.png',
    titles: 8,
    base: 'Woking, Inglaterra',
    principal: 'Andrea Stella',
    bio: 'A McLaren é uma das equipes mais icônicas da Fórmula 1, fundada por Bruce McLaren em 1963. Com 8 títulos de construtores e 12 de pilotos, a equipe de Woking é a segunda mais bem-sucedida da história da F1. Após anos difíceis, a McLaren ressurgiu como força competitiva a partir de 2021 com o retorno dos motores Mercedes. Em 2025, conquistou o campeonato de construtores e viu Lando Norris tornar-se campeão mundial, marcando o início de uma nova era dourada. A dupla Norris-Piastri é considerada uma das mais fortes do grid, combinando juventude, talento e experiência crescente.'
  },

  { 
    id: 'astonmartin',
    name: 'Aston Martin', 
    fullName: 'Aston Martin Aramco F1 Team',
    color: '#006F62', 
    engine: 'Honda', 
    drivers: ['Fernando Alonso', 'Lance Stroll'],
    domain: 'astonmartinf1.com',
    image: '/img/equipes/astonmartin/logo-astonmartin.png',
    titles: 0,
    base: 'Silverstone, Inglaterra',
    principal: 'Adrian Newey',
    bio: 'A Aston Martin renasceu em 2021 quando o empresário Lawrence Stroll renomeou a Racing Point, trazendo de volta o icônico nome britânico à F1. Com investimentos massivos em infraestrutura, incluindo um túnel de vento de última geração e novas instalações em Silverstone, a equipe busca se estabelecer entre as grandes. Para 2026, representa uma mudança histórica: Adrian Newey, o designer mais bem-sucedido da história da F1, assume como chefe de equipe, e a Honda retorna como parceira de motores. Fernando Alonso, bicampeão mundial, continua desafiando a idade aos 44 anos, enquanto Lance Stroll complementa a formação.'
  },

  { 
    id: 'alpine',
    name: 'Alpine', 
    fullName: 'BWT Alpine F1 Team',
    color: '#0090FF', 
    engine: 'Mercedes',
    drivers: ['Pierre Gasly', 'Franco Colapinto'],
    domain: 'alpinecars.com',
    image: '/img/equipes/alpine/logo-alpine.png',
    titles: 2,
    base: 'Enstone, Inglaterra',
    principal: 'Flavio Briatore / Steve Nielsen',
    bio: 'A Alpine representa a operação francesa na F1, com raízes que remontam à Benetton e aos títulos mundiais com a Renault em 2005 e 2006. Sediada em Enstone, a equipe passou por transformação significativa em 2026 ao abandonar os motores Renault (pela primeira vez desde os anos 90) em favor dos Mercedes. Esta mudança marca o fim de uma era, com a Alpine tornando-se equipe cliente após décadas como equipe de fábrica. Pierre Gasly lidera a formação, enquanto Franco Colapinto, que impressionou ao substituir Jack Doohan em 2025, confirma-se como titular. A equipe busca reconstruir sua competitividade sob nova liderança.'
  },

  { 
    id: 'haas',
    name: 'Haas', 
    fullName: 'MoneyGram Haas F1 Team',
    color: '#B6BABD', 
    engine: 'Ferrari', 
    drivers: ['Esteban Ocon', 'Oliver Bearman'],
    domain: 'haasf1team.com',
    image: '/img/equipes/haas/logo-haas.png',
    titles: 0,
    base: 'Kannapolis, EUA / Banbury, Inglaterra',
    principal: 'Ayao Komatsu',
    bio: 'A Haas é a equipe americana que estreou na F1 em 2016, fundada pelo empresário Gene Haas. Operando com base nos EUA e instalações na Inglaterra, a equipe adota um modelo único de parceria estreita com a Ferrari, fornecedora de motores e diversos componentes. Para 2026, a Haas mantém sua dupla renovada de 2025: Esteban Ocon, experiente vencedor de GP, e Oliver Bearman, jovem talento britânico que impressionou em sua temporada de estreia. A equipe tem mostrado progresso consistente e busca se estabelecer no meio do grid, aproveitando os novos regulamentos para dar um salto competitivo.'
  },

  { 
    id: 'rb',
    name: 'Racing Bulls', 
    fullName: 'Visa Cash App RB F1 Team',
    color: '#1633EF', 
    engine: 'Red Bull Powertrains-Ford', 
    drivers: ['Liam Lawson', 'Arvid Lindblad'],
    domain: 'visacashapprb.com',
    image: '/img/equipes/rb/logo-rb.png',
    titles: 0,
    base: 'Faenza, Itália',
    principal: 'Alan Permane',
    bio: 'A Racing Bulls (anteriormente Toro Rosso e AlphaTauri) é a equipe irmã da Red Bull Racing, servindo como plataforma de desenvolvimento para jovens talentos da academia Red Bull. Sediada em Faenza, Itália, a equipe tem tradição em revelar futuros campeões como Sebastian Vettel e Max Verstappen. Para 2026, continua sua missão com Liam Lawson, piloto neozelandês que retorna após ser rebaixado da Red Bull em 2025, e Arvid Lindblad, prodígio britânico-sueco de apenas 18 anos fazendo sua estreia direta da Fórmula 2. A equipe compartilhará os novos motores Red Bull-Ford com a equipe principal.'
  },

  { 
    id: 'williams',
    name: 'Williams', 
    fullName: 'Williams Racing',
    color: '#005AFF', 
    engine: 'Mercedes', 
    drivers: ['Alex Albon', 'Carlos Sainz'],
    domain: 'williamsf1.com',
    image: '/img/equipes/williams/logo-williams.png',
    titles: 9,
    base: 'Grove, Inglaterra',
    principal: 'James Vowles',
    bio: 'A Williams é uma das equipes mais lendárias da F1, fundada por Sir Frank Williams em 1977. Com 9 títulos de construtores e 7 de pilotos, a equipe de Grove atravessou anos difíceis desde seu último título em 1997. Sob nova liderança de James Vowles (ex-Mercedes), a Williams passa por reconstrução significativa. Para 2026, conta com Alex Albon como líder e Carlos Sainz, experiente piloto espanhol que deixou a Ferrari, formando uma dupla sólida. A parceria com Mercedes continua fornecendo motores competitivos. A equipe busca aproveitar os novos regulamentos para retornar ao topo do grid.'
  },

  { 
    id: 'audi',
    name: 'Audi', 
    fullName: 'Audi F1 Team',
    color: '#000000', 
    engine: 'Audi', 
    drivers: ['Nico Hulkenberg', 'Gabriel Bortoleto'],
    domain: 'audi.com',
    image: '/img/equipes/audi/logo-audi.png',
    titles: 0,
    base: 'Hinwil, Suíça',
    principal: 'Jonathan Wheatley',
    bio: 'A Audi marca o retorno de uma grande montadora alemã à F1, tendo adquirido a equipe Sauber em 2024. Esta é a primeira incursão da Audi na Fórmula 1, embora sua empresa predecessora Auto Union tenha competido antes da Segunda Guerra Mundial. Sediada em Hinwil, Suíça, a equipe passa por transformação completa para se tornar operação de fábrica com motores próprios. Para 2026, conta com Nico Hülkenberg, experiente piloto alemão que finalmente conquistou seu primeiro pódio em 2025, e Gabriel Bortoleto, jovem brasileiro campeão da F2 2024. Jonathan Wheatley, ex-Red Bull, lidera a transição como chefe de equipe. A Audi chega com grandes ambições e recursos para se estabelecer entre as principais forças da categoria.'
  },

  { 
    id: 'cadillac',
    name: 'Cadillac', 
    fullName: 'Cadillac F1 Team',
    color: '#E6BE56', 
    engine: 'Ferrari', 
    drivers: ['Valteri Bottas', 'Sergio Perez'],
    domain: 'cadillac.com',
    image: '/img/equipes/cadillac/logo-cadillac.png',
    titles: 0,
    base: 'Estados Unidos',
    principal: 'A confirmar',
    bio: 'A Cadillac faz história como a 11ª equipe do grid e a segunda equipe americana na F1 moderna (ao lado da Haas), marcando a expansão mais significativa da categoria em anos. Parte do grupo General Motors, a Cadillac inicialmente usará motores Ferrari enquanto desenvolve sua própria unidade de potência prevista para 2029. Para sua temporada de estreia, escolheu experiência: Valtteri Bottas (ex-Mercedes e Sauber) e Sergio Pérez (ex-Red Bull), dois pilotos veteranos com mais de 500 GPs combinados. A entrada da Cadillac reflete o crescimento da F1 nos Estados Unidos, onde a categoria agora disputa três corridas. A equipe chega com ambições de longo prazo e apoio de uma das maiores montadoras mundiais.'
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
