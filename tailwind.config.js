/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Mantido por retrocompatibilidade se tiveres ficheiros lá
  ],
  theme: {
    extend: {
      fontFamily: {
        // Estas variáveis serão definidas no layout.js
        sans: ['var(--font-inter)'],
        russo: ['var(--font-russo)'],
      },
      colors: {
        // Cottagecore / Nature palette (Light Mode)
        'cottage': {
          'dark-green': '#0A3323',
          'moss': '#839958',
          'beige': '#F7F4D5',
          'rosy': '#D3968C',
          'midnight': '#105666',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}