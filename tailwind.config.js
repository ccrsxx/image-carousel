module.exports = {
  content: ['./src/**/*.tsx', './public/index.html'],
  theme: {
    extend: {
      animation: {
        'fade-slide-up': 'fade-slide-up 1s ease-in-out',
        'spin-gradient': 'spin-gradient 1s linear infinite'
      },
      keyframes: {
        'fade-slide-up': {
          from: {
            opacity: 0,
            transform: 'translateY(40px)'
          },
          to: {
            opacity: 1,
            transform: 'translateY(0)'
          }
        },
        'spin-gradient': {
          from: {
            transform: 'rotate(0deg)'
          },
          to: {
            transform: 'rotate(360deg)'
          }
        }
      },
      colors: {
        'gray-ish': 'rgba(0, 0, 0, 0.4)'
      }
    }
  },
  plugins: []
};
