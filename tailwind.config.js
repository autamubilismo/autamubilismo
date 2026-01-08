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
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}