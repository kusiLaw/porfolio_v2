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
         'light_bg': '#fff',
         'accent_light' : '#56cbf9',
         'light_accent_divider' : '#f3f6f9',
         'light_accent' : '#005ce1',
         'light_accent_dark' : '#003fc7',
         'light_text_header': ' #2b353f',
         'light_text_color' : '#4e5b67',
         'light_bg_shallow' : 'rgba(240, 250, 250, 0.5)',

          'light-btn-hover': '#0065d9',
         'btn-active': '#056ade',
         'highlight': '#dbf3fb',
         'highlight-active': '#c0edff',
         'line': '#a8b4b7',
         'shadow': '#00479725',
         'shadow-light': 'hsla(192,8%,61%,.074)',

         'dark_bg' : '#040f16',
         'dark_bg_secondary' : '#0b202b',
         'dark_text_header': '#b4c5cb',
         'dark_text_color' : '#8d9a9c',
         'dark_accent' : '#0081ac',
         'dark_hover_shallow' : 'rgba(4, 15, 22, 0.3)'
       },

       fontSize: {
        'name_font': ['clamp(1.8rem ,5vw,4rem)', {
          lineHeight: '4rem',
          letterSpacing: '-0.01em',
          fontWeight: '900',
        }],
 
      },

      screens: {
        phone : '320px',
        mdx  : '920px'
      },


      width: {
       '90': '90%',
       '80':  '80%'
     },

     keyframes: {
      bgSlide: {
       'from' : { 'background-position': '0'},
       'to' :  { 'background-position': '-200%'}
      }
     },


      animation: {
        'name_animate' : 'bgSlide 3s linear infinite',
      },

      backgroundImage: {
       'grad_form': "linear-gradient(100deg,#0b202b  0%, #0b202b  50%, rgba(4, 15, 22, 1) 50%)",
       'light_grad_form': "linear-gradient(100deg,#f3f6f9  0%, #f3f6f9  50%, #fff 50%)",
       'name_dark_gradient': "linear-gradient(to right, #005a78, #0081ac, #005a78)",
       'name_gradient' : "linear-gradient(to right, #003fc7, #005ce1, #003fc7) "
      }
      

     },
    },
  
  plugins: [],
}

