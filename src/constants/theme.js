// ==============================================================================
// 🎨 CONFIGURAÇÃO DE TEMA E CORES
// ==============================================================================

export const LOGO_IMG_LIGHT = "/img/web/LIGHT-MODE-HEADER.png"; 
export const LOGO_IMG_DARK = "/img/web/DARK-MODE-HEADER.png"; 
export const HELMET_ICON = "/img/web/helmet.png";

// Cores Girlie (Light Mode)
export const GIRLIE_COLORS = {
  roxo: '#caa5d8',
  rosa: '#fac4dc',
  azul: '#bbd3f2',
};

// Cores Vaporwave (Dark Mode)
export const VAPORWAVE_COLORS = {
  neonRoxo: '#bd00ff',
  neonCyan: '#00fff2',
  neonPink: '#ff00ff',
};

// Padrões de Fundo
export const lightPattern = {
  backgroundColor: '#FFF0F5',
  backgroundImage: `
    radial-gradient(at 10% 10%, rgba(252, 205, 238, 0.5) 0px, transparent 50%),
    radial-gradient(at 90% 0%, rgba(255, 182, 193, 0.5) 0px, transparent 50%),
    radial-gradient(at 50% 100%, rgba(230, 230, 250, 0.5) 0px, transparent 50%)
  `,
  backgroundSize: '100% 100%'
};

export const darkPattern = {
  backgroundColor: '#050510',
  backgroundImage: `
    linear-gradient(rgba(0, 255, 242, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(189, 0, 255, 0.05) 1px, transparent 1px)
  `,
  backgroundSize: '40px 40px'
};