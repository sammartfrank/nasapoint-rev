/** @type {import('tailwindcss').Config} */
const { fontFamily, colors, fontSize, ...theme } = require('tailwindcss/defaultTheme');
const scrollbarPlugin = require('tailwind-scrollbar');

module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{html,js,ts,jsx,tsx}', './src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      ...fontSize,
      xss: ['0.5rem', { lineHeight: '0.75rem' }],
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1.16' }],
      '6xl': ['3.25rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    screens: {
      sm: '428px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1752px',
    },
    extend: {
      fontFamily: {
        sans: ['inter', ...fontFamily.sans],
      },
      colors: {
        primary: {
          100: '#EEF6FD',
          200: '#C5E4FB',
          300: '#79C0F6',
          400: '#52AEF4',
          500: '#279AF1',
        },
        secondary: {
          100: '#F3F3F3',
          200: '#DCDCDD',
          300: '#A1A1A3',
          400: '#424346',
          500: '#111317',
        },
        red: {
          100: '#FBF0EE',
          200: '#F4D1CD',
          300: '#E9A49B',
          400: '#DE7668',
          500: '#D65745',
        },
        orange: {
          100: '#FDF2EC',
          200: '#F9CBB4',
          300: '#F4A37B',
          400: '#F18955',
          500: '#EE7032',
        },
        yellow: {
          100: '#FFF9EB',
          200: '#FFECC2',
          300: '#FFDF99',
          400: '#FFCB5C',
          500: '#FFB20F',
        },
        green: {
          100: '#EEFCFA',
          200: '#CBF6F1',
          300: '#97EDE3',
          400: '#22BFAC',
          500: '#1B998B',
        },
        blue: {
          100: '#EDF0FD',
          200: '#C9D3F8',
          300: '#93A7F0',
          400: '#5D7CE9',
          500: '#3B60E4',
          600: '#3B92F7',
          700: '#05283A',
          800: '#F0F7FB',
        },
        purple: {
          100: '#F1EDFD',
          200: '#D6C9F8',
          300: '#AC93F0',
          400: '#835DE9',
          500: '#673BE4',
        },
      },
    },
  },
  plugins: [scrollbarPlugin({ noncompatible: true })],
};
