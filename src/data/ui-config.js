import { 
  Home, Calendar, Users, Wrench, Sparkles, Zap, BookOpen, 
  FileText, Headphones, Mail, Heart, Newspaper, Instagram, Twitter, Youtube
} from 'lucide-react';

export const LOGO_DARK_URL = "/img/web/DARK-MODE-HEADER.png";
export const LOGO_LIGHT_URL = "/img/web/LIGHT-MODE-HEADER.png";

export const PASTEL = { 
  pink: '#fac4dc',   // Seu Rosa exato
  purple: '#caa5d8', // Seu Roxo exato
  blue: '#bbd3f2',   // Seu Azul exato
  bg: '#FFFDFE' 
};

export const NEON = { 
  bg: '#141416', 
  purple: '#bd00ff', 
  cyan: '#00fff2', 
  pink: '#caa5d8', 
  surface: '#1e1e24' 
};

export const SOCIAL_LINKS = [
  { id: 'insta', icon: Instagram, url: 'https://instagram.com/autamubilismo', label: 'Instagram' },
  { id: 'twitter', icon: Twitter, url: 'https://twitter.com/autamubilismo', label: 'Twitter' },
  { id: 'youtube', icon: Youtube, url: 'https://tiktok.com/@autamubilismo', label: 'Youtube' },
  { id: 'mail', icon: Mail, url: 'mailto:contato@autamubilismo.com', label: 'Email' },
];

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