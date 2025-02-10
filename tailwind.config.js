/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {  
      screens:{
        lg:"1000px",
        xl:"1224px"
      },
      colors: {
        "text-color": "#2D1B4F",
        "customDark": '#23212f',
        "customLight": '#704a9f',
        "light": '#BFA5DA',
        "footer": '#4E2A7F',
        "button": '#F4C542'
      },


      fontFamily:{
        istok : ['Istok Web', 'sans-serif'],
        dancing : ['Dancing Script', 'cursive'],
        inria : ['Inria Sans, sans-serif'],
        inter : ['Inter, sans-serif']
      },

      backgroundImage:{
        'processbg': "url('/src/images/processbg.png')"
      }
      
    },
    
    container: {
      center:true,
      padding :"1rem",
    },
  },
  plugins: [],
}

