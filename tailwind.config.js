/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{html,ts}", // Modifiez ce chemin selon la structure de votre projet
    ],
    theme: {
      extend: {

        animation: {
          inCome : 'inCome 2s linear forwards',
          floatar : 'floatar 3s linear infinite',
          floatot : 'floatot 2.5s linear infinite',
        },

        keyframes: {
          'inCome': {
            '0%': { opacity: 0 },
            '100%': { opacity: 1 },
          },
          'floatar': {
            "0%" : { transform: 'translateY(5px)' },
            "50%" : { transform: 'translateY(-20px)' },
            "100%" : { transform: 'translateY(5px)' }
          },
          'floatot': {
            "0%" : { transform: 'translateY(0px)' },
            "50%" : { transform: 'translateY(-18px)' },
            "100%" : { transform: 'translateY(0px)' }
          }
          
        }

      },
    },
    plugins: [
      require('daisyui'),
    ],
  }
  