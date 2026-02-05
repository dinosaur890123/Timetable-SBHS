/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        sbhs: {
          dark: '#1e1e1e', // Dark theme background
          panel: '#2d2d2d',
          accent: '#4ade80', // Green accent
          text: '#e5e7eb',
          subtext: '#9ca3af'
        }
      }
    },
  },
  plugins: [],
}
