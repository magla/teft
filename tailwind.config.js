const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      maxWidth: {
        'content': '568px',
        'blockquote': '50%',
      },
      spacing: {
        '4': '4px',
        '8': '8px',
        '12': '12px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '48': '48px',
        '52': '52px',
        '64': '64px',
        '72': '72px',
        '88': '88px',
        '96': '96px',
        'fifteen': '15%',
        'quarter': '25%',
        'third': '33%',
        'half': '50%',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '24px',
        lg: '0px',
      },
    },
    screens: {
      'sm': '568px',
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
      grey: {
        light: '#C9C9C9',
        DEFAULT: '#262626',
        dark: '#707070'
      },
      white: '#ffffff',
      neon: '#00FFD1',
      blue: '#1E6CF9',
    },
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['16px', '24px'],
      header: ['20px', '24px'],
      base: ['20px', '32px'],
      lg: ['32px', '40px'],
      'lg-mobile': ['24px', '32px'],
      xl: ['56px', '64px'],
      'xl-mobile': ['32px', '64px'],
    },
    fontFamily: {
      'sans': ['"Circular Std"', ...defaultTheme.fontFamily.sans],
      'serif': ['"Roboto Slab"', ...defaultTheme.fontFamily.serif],
    },
    boxShadow: {
      blue: '0px 0px 4px #1E6CF9',
      light: '4px 0px 4px rgba(145, 158, 167, 0.25)',
      DEFAULT: '0px 4px 4px rgba(145, 158, 167, 0.25)',
      quote: '0px 4px 8px rgba(145, 158, 167, 0.32)'
    },
  },
  variants: {
    extend: {},
  },
}
