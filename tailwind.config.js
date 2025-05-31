/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translate(-50%,-100%)', opacity: '0' },
          '100%': { transform: 'translate(-50%,-50%)', opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 3s ease-out',
        slideDown: 'slideDown 1s ease-out',
        slideUp: 'slideUp 1s ease-out',
        'spin-once': 'spin 1s linear 1',
      },
    },
  },
  plugins: [],
}

