/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
        starJedi: ['StarJedi', 'sans-serif'],
        speedy: ['SpeedyRegular', 'sans-serif'],
      },
      fontSize: {
        '5xl': [
          '3rem',
          {
            lineHeight: '2em',
            fontWeight: '700',
          },
        ],
        '4xl': [
          '2rem',
          {
            lineHeight: '2em',
            fontWeight: '700',
          },
        ],
        '3xl': [
          '1.75rem',
          {
            lineHeight: '2em',
            fontWeight: '700',
          },
        ],
        '2xl': [
          '1.5rem',
          {
            lineHeight: '1.75em',
            fontWeight: '700',
          },
        ],
        xl: [
          '1.35rem',
          {
            lineHeight: '1.75em',
            fontWeight: '600',
          },
        ],
        lg: [
          '1.15rem',
          {
            lineHeight: '1.75em',
            fontWeight: '600',
          },
        ],
        base: [
          '1.1rem',
          {
            lineHeight: '1.5em',
            fontWeight: '400',
          },
        ],
        sm: [
          '.9rem',
          {
            lineHeight: '1.25em',
            fontWeight: '400',
          },
        ],
        xs: [
          '.7rem',
          {
            lineHeight: '.8em',
            fontWeight: '400',
          },
        ],
      },
    },
  },
  plugins: [],
};
