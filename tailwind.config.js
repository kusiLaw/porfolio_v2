/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
         'light_bg': '#f0fafa',
         'light_context_color' : '#005ce1',
         'light_text_header': ' #2b353f',
         'light_text_color' : '#4e5b67',
         'dark_bg' : '#040f16',
         'dark_text_header': '#b4c5cb',
         'dark_text_color' : '#8d9a9c',
         'dark_context_color' : '#0081ac',
       }
        
    },
  },
  plugins: [],
}
