/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      },
      animation: {
        home: 'home 10s ease-in-out infinite',
        con: 'con 10s ease-in-out infinite',
        con2: 'con2 10s ease-in-out infinite',
        bou: 'bou 10s  infinite',
        typing: "typing 3s steps(20) infinite alternate, blink .7s infinite"
      },
      keyframes: {
        home: {
          '0%, 100%': {
            transform: 'scale(520%,510%)',
            opacity: 1,

          },
          '50%': {
            transform: 'scale(10%,20%) ',
            opacity: 0,
          },
        },
        con: {
          '0%, 100%': {
            transform: 'translateX(-100%) translateY(-60%)',
            scale: "120%",

          },
          '50%': {
            transform: 'translateX(0) translateY(0)',
            scale: "100%" ,
          },
        },
        con2: {
          '0%, 100%': {
            transform: 'translateX(0) translateY(0)',
            scale: "120%",

          },
          '50%': {
            transform: 'translateX(100%) translateY(-60%)',
            scale: "100%" ,
          },
        },
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }  
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }  
        },
        bou: {
          "0%, 100% ":{
            transform: 'translateY(-300%)',
            opacity:0,
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            opacity:1,
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
          }
        },
        
      }


    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },

  },
  plugins: [
    require('tailwindcss-animated'),
  ],
}