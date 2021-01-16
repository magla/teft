const defaultTheme = require('tailwindcss/defaultTheme');
const debug = require("tailwindcss-debug-screens");

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: '24px',
        lg: '0px',
      },
    },
    screens: {
      'sm': '640px',
      'md': '1024px',
      'lg': '1200px',
    },
    minHeight: {
      '0': '0px',
      '72': '72px',
    },
    colors: {
      primary: {
        light: '#E7BFFF',
        DEFAULT: '#8500D7',
      },
      secondary: '#FF007A',
      black: '#262626',
      white: '#ffffff',
      grey: '#C9C9C9',
      neon: '#00FFD1',
      blue: '#1E6CF9',
    },
    spacing: {
      '4': '4px',
      '8': '8px',
      '12': '12px',
      '16': '16px',
      '24': '24px',
      '48': '48px',
      '64': '64px',
      '72': '72px',
      '96': '96px',
    },
    fontSize: {
      sm: ['12px', '16px'],
      base: ['20px', '32px'],
      lg: ['32px', '40px'],
      xl: ['56px', '64px'],
    },
    fontFamily: {
      'sans': ['"Circular Std"', ...defaultTheme.fontFamily.sans],
      'serif': ['"Roboto Slab"', ...defaultTheme.fontFamily.serif],
    },
    boxShadow: {
      blue: '0px 0px 4px #1E6CF9',
      light: '4px 0px 4px #e3e6e9',
      DEFAULT: '0px 4px 4px #e3e6e9',
    },
  },
  variants: {
    extend: {},
  },

  // TODO: remove
  plugins: [debug],
}
