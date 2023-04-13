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
         'accent_light' : '#56cbf9',
         'light_accent' : '#005ce1',
         'light_accent_dark' : '#003fc7',
         'light_text_header': ' #2b353f',
         'light_text_color' : '#4e5b67',
         'dark_bg' : '#040f16',
         'dark_text_header': '#b4c5cb',
         'dark_text_color' : '#8d9a9c',
         'dark_accent' : '#0081ac',
       },

       fontSize: {
        'name_font': ['clamp(1.8rem ,5vw,4rem)', {
          lineHeight: '4rem',
          letterSpacing: '-0.01em',
          fontWeight: '900',
        }],
 
      },

      screens: {
        phone : '320px'
      },


      width: {
       '90': '90%',
       '80':  '80%'
     },


      animation: {
        'name_animate' : 'background-pan 3s linear infinite',
      },

      

     },
    },
  // },
  plugins: [],
}
