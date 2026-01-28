// ==============================================================================
// 🎨 CONFIGURAÇÃO DE TEMA E CORES
// ==============================================================================

export const LOGO_IMG_LIGHT = "/img/web/LIGHT-MODE-HEADER.png"; 
export const LOGO_IMG_DARK = "/img/web/DARK-MODE-HEADER.png"; 
export const HELMET_ICON = "/img/web/helmet.png";

// Cores Cottagecore / Natureza (Light Mode)
export const GIRLIE_COLORS = {
  // Mantido para retrocompatibilidade - agora com palette cottagecore
  darkGreen: '#0A3323',    // Texto principal, acentos profundos
  moss: '#839958',          // Acento primário (substitui pink)
  beige: '#F7F4D5',         // Background principal
  rosy: '#D3968C',          // Acento secundário (substitui purple)
  midnight: '#105666',      // Hover, texto secundário
  // Cores antigas (deprecated)
  roxo: '#D3968C',          // Mapped to rosy
  rosa: '#839958',          // Mapped to moss
  azul: '#105666',          // Mapped to midnight
};

// Cores Vaporwave (Dark Mode) - mantidas
export const VAPORWAVE_COLORS = {
  neonRoxo: '#bd00ff',
  neonCyan: '#00fff2',
  neonPink: '#ff00ff',
};

// Padrões de Fundo - Light Mode Cottagecore
export const lightPattern = {
  backgroundColor: '#F7F4D5',
  backgroundImage: `
    radial-gradient(at 0% 0%, rgba(211, 150, 140, 0.22) 0px, transparent 50%),
    radial-gradient(at 100% 0%, rgba(131, 153, 88, 0.12) 0px, transparent 50%),
    radial-gradient(at 50% 100%, rgba(211, 150, 140, 0.14) 0px, transparent 50%)
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
