/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,tsx,ts}'],
  theme: {
    screens: {
      flex_lg: { min: '0', max: '950px' },
      mob: { min: '320px', max: '767px' },
      tab: { min: '768px', max: '1023px' },
      // desk: { min: '1024px', max: '1439px' },
      sm_range: { min: '200', max: '500' },
      sm: '500px',
      md: '660px',
      lg_md_range: { min: '0', max: '758px' },
      lg_md: '758px',
      lg: '950px',
      xl_md: { min: '0', max: '1024px' },
      xxl_max: { min: '0', max: '1300px' },
      xl: '1024px',
      xxl: '1300px',
    },
    extend: {
      display: ['group-hover'],
      boxShadow: {
        root: '0px 2px 4px 0px rgba(0, 0, 0, 0.04), 0px 3px 16px 0px rgba(0, 0, 0, 0.12)',
      },
      borderWidth: {
        3: '3px',
      },
      colors: {
        orange: {
          primary: '#FFA031',
        },
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
          600: '#D9D9D9',
          700: '#EEEEEE',
        },
      },
    },
  },
};
