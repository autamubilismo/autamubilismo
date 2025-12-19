import { 
  Home as HomeIcon, Users, BarChart3, Flag, Calendar, 
  MapPin, BookOpen, Heart, FileText, Video, HelpCircle, 
  Zap, MessageSquare, Info, Newspaper, Trophy 
} from 'lucide-react';

// ==============================================================================
// 🗺️ MAPA DE NAVEGAÇÃO DO SITE
// ==============================================================================

export const SITE_MAP = [
  { id: 'home', path: '/', label: 'Início', desc: 'Página Principal', icon: HomeIcon },
  { id: 'news', path: '/news', label: 'Notícias', desc: 'Últimas Updates', icon: Newspaper },
  { id: 'season', path: '/season', label: 'Temporada', desc: 'Resumo 2025', icon: Trophy },
  { id: 'drivers', path: '/drivers', label: 'Pilotos', desc: 'Grid Atual', icon: Users },
  { id: 'teams', path: '/teams', label: 'Equipes', desc: 'Construtores', icon: Flag },
  { id: 'calendar', path: '/calendar', label: 'Calendário', desc: 'Corridas & Horários', icon: Calendar },
  { id: 'standings', path: '/standings', label: 'Classificação', desc: 'Tabelas de Pontos', icon: BarChart3 },
  { id: 'circuits', path: '/circuits', label: 'Circuitos', desc: 'Mapas e Detalhes', icon: MapPin },
  { id: 'regulations', path: '/regulations', label: 'Regulamento', desc: 'Regras 2026', icon: BookOpen },
  { id: 'fanzone', path: '/fanzone', label: 'Fanzone', desc: 'Vote e Participe', icon: Heart },
  { id: 'articles', path: '/articles', label: 'Artigos', desc: 'Opinião e Análise', icon: FileText },
  { id: 'media', path: '/media', label: 'Multimídia', desc: 'Galeria e Vídeos', icon: Video },
  { id: 'glossary', path: '/glossary', label: 'Glossário', desc: 'Termos da F1', icon: HelpCircle },
  { id: 'curiosities', path: '/curiosities', label: 'Curiosidades', desc: 'Fatos Históricos', icon: Zap },
  { id: 'contact', path: '/contact', label: 'Contato', desc: 'Fale Conosco', icon: MessageSquare },
  { id: 'about', path: '/credits', label: 'Sobre', desc: 'Créditos e Info', icon: Info },
];