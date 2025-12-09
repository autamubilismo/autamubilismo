import {defineConfig, buildLegacyTheme} from 'sanity';
import {structureTool} from 'sanity/structure';
import {visionTool} from '@sanity/vision';
import {schemaTypes} from './schemaTypes';
import React from 'react';

// 🌸 PALETA AUTAMUBILISMO
const colors = {
  '--my-white': '#FFF5F8',
  '--my-black': '#1B0B16',
  '--my-pink': '#FF7EB6',
  '--my-rose': '#F7B8C8',
  '--my-purple': '#D8C4F0',
};

// 🌸 THEME LEGACY (OFICIAL DO SANITY)
const autamubilismoTheme = buildLegacyTheme({
  // base
  '--black': colors['--my-black'],
  '--white': colors['--my-white'],
  '--gray': '#6B5B6E',
  '--gray-base': '#6B5B6E',

  '--component-bg': colors['--my-white'],
  '--component-text-color': colors['--my-black'],

  // brand
  '--brand-primary': colors['--my-pink'],

  // buttons
  '--default-button-color': '#6B5B6E',
  '--default-button-primary-color': colors['--my-pink'],
  '--default-button-success-color': '#38a169',
  '--default-button-warning-color': '#dd6b20',
  '--default-button-danger-color': '#e53e3e',

  // states
  '--state-info-color': colors['--my-purple'],
  '--state-success-color': '#38a169',
  '--state-warning-color': '#dd6b20',
  '--state-danger-color': '#e53e3e',

  // navbar
  '--main-navigation-color': colors['--my-black'],
  '--main-navigation-color--inverted': colors['--my-white'],

  // focus
  '--focus-color': colors['--my-pink'],
});

// 🌸 LOGO (capacete)
function Logo() {
  return React.createElement('img', {
    src: '/img/web/helmet.png',
    style: {
      height: '40px',
      opacity: 0.9,
      marginTop: '6px',
    },
    alt: 'Autamubilismo',
  });
}

export default defineConfig({
  name: 'default',
  title: 'autamubilismo-cms',

  projectId: 'c7nvssn2',
  dataset: 'production',

  theme: autamubilismoTheme,

  studio: {
    components: {
      // só mexemos no logo pra não quebrar layout
      logo: Logo,
    },
  },

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
