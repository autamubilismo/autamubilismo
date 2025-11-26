import { 
  Home, Calendar, Users, Wrench, Sparkles, Zap, BookOpen, 
  FileText, Headphones, Mail, Heart, Gamepad2, Smile, Trophy as TrophyIcon,
  Music, Star, Briefcase, Utensils, Newspaper
} from 'lucide-react';

// --- IMAGENS E CORES ---
export const LOGO_LIGHT_URL = "https://i.ibb.co/gLx3yLbN/Logo-Light-copiar.png"; 
export const LOGO_DARK_URL = "https://i.ibb.co/ds8KGVKB/NEONMODE-copiar.png"; 

export const PASTEL = { pink: '#F7B8C8', purple: '#D8C4F0', mint: '#CFF7E8', bg: '#FFFDFE' };
export const NEON = { bg: '#09090b', purple: '#fe88dd', cyan: '#00fff2', pink: '#ff0055' };

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
// Nota: Aqui usamos a referência do ícone (Gamepad2) e não o JSX (<Gamepad2 />) para evitar erros no arquivo .js
export const DRIVERS_DATA = [
{ id: 'kimi', name: 'Kimi Antonelli', number: 12, team: 'Mercedes', color: '#00D2BE', image: '/img/pilotos/antonelli/grid-antonelli.avif', bio: "O garoto prodígio que fez a Mercedes esquecer Carlos Sainz. Pulou a F3 direto para o abismo da F1 e caiu de pé.", country: 'Itália 🇮🇹', age: '18 anos', vibes: [{ icon: Gamepad2, label: 'Sim Racer' }, { icon: Utensils, label: 'Pasta Lover' }, { icon: Zap, label: 'Rookie' }], stats: { xp: 'F2 (Prema)', podiums: '2', bestResult: 'P3 (Vegas)' }, signature: "Kimi A.", secretFact: "Leva seu simulador portátil para todos os hotéis.", zodiac: "Leão ♌" },
{ id: 'lewis', name: 'Lewis Hamilton', number: 44, team: 'Ferrari', color: '#FF0000', image: '/img/pilotos/hamilton/grid-hamilton.avif', signature: "Lewis 44", secretFact: "Roscoe tem seu próprio passe VIP.", zodiac: "Capricórnio ♑", vibes: [{ icon: Star, label: 'Lenda' }] },
{ id: 'gabriel', name: 'Gabriel Bortoleto', number: 5, team: 'Sauber', color: '#52E252', image: '/img/pilotos/bortoleto/grid-bortoleto.avif', country: 'Brasil 🇧🇷', signature: "Bortoleto", secretFact: "Adora feijoada.", zodiac: "Libra ♎", vibes: [{ icon: Zap, label: 'Rápido' }] },
{ id: 'max', name: 'Max Verstappen', number: 1, team: 'Red Bull', color: '#1E41FF', image: '/img/pilotos/verstappen/grid-verstappen.avif', signature: "Max V.", secretFact: "Prefere FIFA a entrevistas.", zodiac: "Libra ♎", vibes: [{ icon: TrophyIcon, label: 'Campeão' }] },
{ id: 'lando', name: 'Lando Norris', number: 4, team: 'McLaren', color: '#FF8700', image: '/img/pilotos/norris/grid-norris.avif', signature: "Lando", secretFact: "DJ nas horas vagas.", zodiac: "Escorpião ♏", vibes: [{ icon: Gamepad2, label: 'Gamer' }] },
{ id: 'charles', name: 'Charles Leclerc', number: 16, team: 'Ferrari', color: '#FF0000', image: '/img/pilotos/leclerc/grid-leclerc.avif', signature: "Charles 16", secretFact: "Toca piano para relaxar.", zodiac: "Libra ♎", vibes: [{ icon: Music, label: 'Piano' }] },
{ id: 'oscar', name: 'Oscar Piastri', number: 81, team: 'McLaren', color: '#FF8700', image: '/img/pilotos/piastri/grid-piastri.avif', signature: "Oscar P.", secretFact: "O homem mais calmo do mundo.", zodiac: "Áries ♈", vibes: [{ icon: Smile, label: 'Calmo' }] },
{ id: 'george', name: 'George Russell', number: 63, team: 'Mercedes', color: '#00D2BE', image: '/img/pilotos/russell/grid-russell.avif', signature: "GR63", secretFact: "Ama uma pose de powerpoint.", zodiac: "Aquário ♒", vibes: [{ icon: Briefcase, label: 'CEO' }] },
{ id: 'carlos', name: 'Carlos Sainz', number: 55, team: 'Williams', color: '#005AFF', image: '/img/pilotos/sainz/grid-sainz.avif', signature: "Chili", secretFact: "Smooth Operator original.", zodiac: "Virgem ♍" },
{ id: 'oliver', name: 'Oliver Bearman', number: 87, team: 'Haas', color: '#B6BABD', image: '/img/pilotos/bearman/grid-bearman.avif', signature: "Ollie", secretFact: "Estudou para a prova de direção durante o GP.", zodiac: "Touro ♉" },
{ id: 'liam', name: 'Liam Lawson', number: 30, team: 'Red Bull', color: '#1E41FF', image: '/img/pilotos/lawson/grid-lawson.avif', signature: "Lawson", zodiac: "Aquário ♒" },
{ id: 'isack', name: 'Isack Hadjar', number: 6, team: 'VCARB', color: '#1633EF', image: '/img/pilotos/hadjar/grid-hadjar.avif', signature: "Hadjar", zodiac: "Libra ♎" },
{ id: 'nico', name: 'Nico Hulkenberg', number: 27, team: 'Sauber', color: '#52E252', image: '/img/pilotos/hulkenberg/grid-hulkenberg.avif', signature: "Hulk", zodiac: "Leão ♌" },
{ id: 'esteban', name: 'Esteban Ocon', number: 31, team: 'Haas', color: '#B6BABD', image: '/img/pilotos/ocon/grid-ocon.avif', signature: "Ocon", zodiac: "Virgem ♍" },
{ id: 'fernando', name: 'Fernando Alonso', number: 14, team: 'Aston Martin', color: '#006F62', image: '/img/pilotos/alonso/grid-alonso.avif', signature: "Alo 14", zodiac: "Leão ♌" },
{ id: 'lance', name: 'Lance Stroll', number: 18, team: 'Aston Martin', color: '#006F62', image: '/img/pilotos/stroll/grid-stroll.avif', signature: "Lance", zodiac: "Escorpião ♏" },
{ id: 'pierre', name: 'Pierre Gasly', number: 10, team: 'Alpine', color: '#0090FF', image: '/img/pilotos/gasly/grid-gasly.avif', signature: "Gasly", zodiac: "Aquário ♒" },
{ id: 'alex', name: 'Alex Albon', number: 23, team: 'Williams', color: '#005AFF', image: '/img/pilotos/albon/grid-albon.avif', signature: "Albon", zodiac: "Áries ♈" },
{ id: 'yuki', name: 'Yuki Tsunoda', number: 22, team: 'VCARB', color: '#1633EF', image: '/img/pilotos/tsunoda/grid-tsunoda.avif', signature: "Yuki", zodiac: "Touro ♉" },

];

// --- EQUIPES ---
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
  { id: 'news-1', title: "Verstappen vence em Vegas e retoma liderança por 1 ponto!", category: "GP Vegas", time: "12h atrás", image: "https://images.unsplash.com/photo-1506191839364-10509691934e?q=80&w=800", author: "Tamu", content: `<p class="lead">Reviravolta no campeonato! Com a desclassificação das McLarens, Max Verstappen vence e vira o jogo.</p>` },
  { id: 'news-2', title: "Kimi Antonelli brilha e conquista pódio inédito na Strip", category: "Destaque", time: "15h atrás", image: "https://i.pinimg.com/736x/4f/40/12/4f4012d7ffec1216e21b9b01150eee00.jpg", author: "Redação", content: `<p class="lead">O garoto prodígio da Mercedes segurou a pressão e terminou em P3, calando os críticos.</p>` },
  { id: 'news-3', title: "Próxima parada: O calor escaldante do Catar pode decidir tudo", category: "Prévia", time: "1d atrás", image: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?q=80&w=800", author: "Tech Analysis", content: `<p class="lead">Depois do gelo de Vegas, os pilotos enfrentarão a "sauna" de Lusail. Haja preparo físico.</p>` },
];

// --- ARTIGOS E MANIFESTO ---
export const ARTICLES_DATA = [
  { id: 'art-1', title: "A Psicologia de um Campeão: Como Norris virou a chave", excerpt: "De 'bom moço' a predador. Analisamos a mudança de postura que colocou Lando na briga pelo título mundial.", category: "Análise", time: "18 Nov", image: "https://media.formula1.com/image/upload/f_auto/q_auto/v1709223759/fom-website/2024/McLaren/Lando_Norris_Bahrain_2024.jpg", author: "Tamu", content: `<p>Texto longo e profundo sobre a psicologia do Lando...</p>` },
  { id: 'art-2', title: "Por que a F1 precisa parar de ignorar a estética", excerpt: "O visual não é futilidade, é identidade. Como o design dos carros e macacões conta a história da temporada.", category: "Opinião", time: "15 Nov", image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1200", author: "Tamu", content: `<p>Texto longo sobre design e estética na F1...</p>` },
];

export const MANIFESTO_POST = {
  id: 'manifesto', title: "Correndo como uma garota.", category: "Manifesto", time: "19 Nov", image: "https://images.unsplash.com/photo-1592853625511-ad0ed2881895?q=80&w=1200", author: "Tamu",
  content: `<p>Eu cresci ouvindo que corrida é barulho, é graxa, é homem bravo gritando no rádio.</p><p>Mas eu nunca ouvi ninguém dizer que corrida também é sensibilidade...</p><div class="mt-12 p-8 rounded-2xl text-center bg-current bg-opacity-10"><p class="text-2xl font-black mb-2">"Porque eu corro como uma garota."</p></div>`
};

export const GLOSSARY_DATA = [{ id: 1, term: 'Undercut', category: 'Estratégia', definition: 'Parar nos boxes antes...', example: '...' }];
export const STANDINGS_DRIVERS = [{ pos: 1, name: 'Max Verstappen', points: 391 }];
export const STANDINGS_TEAMS = [{ pos: 1, name: 'McLaren', points: 756 }];