/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,tsx,ts}'],
  theme: {
    extend: {
      colors: {
        blue: {
          primary: '#224b8f',
          secondary: '#2e5eab',
          100: '#3f8cff',
        },
        black: {
          100: '#1c1c1c',
        },
        gray: {
          100: '#afafaf',
          200: '#DDDDDD',
          300: '#f5f4f4',
          400: '#A6A6A6',
          500: '#717171',
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
