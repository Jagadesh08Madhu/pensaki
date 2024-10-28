// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        right: {
          '0%': { transform: 'translatex(100%)' },
          '100%': { transform: 'translatex(0)' },
        },
        scroll: {
          '0%' :{ transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-100%)' }
        },
      },
      animation: {
        wiggle: 'wiggle 0.75s ease-in-out',
        right: 'right 1s ease-in-out',
        scroll: 'scroll 25s linear infinite',
      },
    },
  },
  plugins: [],
}
