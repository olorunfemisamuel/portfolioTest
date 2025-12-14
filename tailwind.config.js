/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./*.html", "./js/**/*.js"],
  theme: {
    extend: {
      keyframes: {
    slideInUp: {
      '0%': { transform: 'translateY(100%)', opacity: '0' },
      '100%': { transform: 'translateY(0)', opacity: '1' },
    },
  },
  animation: {
    slideInUp: 'slideInUp 2s ease-out forwards',
  },
    },
  },
  plugins: [],

  
}


  


