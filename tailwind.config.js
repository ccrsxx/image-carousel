module.exports = {
  content: ['./src/**/*.{ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fade-in 1s ease-in-out'
      },
      keyframes: {
        'fade-in': {
          from: {
            opacity: 0
          },
          to: {
            opacity: 1
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
