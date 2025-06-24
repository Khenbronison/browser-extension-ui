/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        noto: ['"Noto Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
