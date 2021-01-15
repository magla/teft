module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {},
    container: {
      center: true,
    },
    screens: {
      'sm': '640px',
      'md': '1024px',
      'lg': '1440px',
    },
    colors: {
      primary: {
        light: '#E7BFFF',
        DEFAULT: '#8500D7',
      },
      secondary: '#FF007A',
      black: '#262626',
      neon: '#00FFD1',
      blue: '#1E6CF9',
      grey: '#C9C9C9',
    },
    padding: {
      sm: '12px',
      md: '16px',
      lg: '24px',
      xl: '48px',
    },
    margin: {
      xs: '8px',
      sm: '12px',
      md: '24px',
      lg: '48px',
      xl: '64px',
      xxl: '96px',
    },
    spacing: {
      sm: '16px',
      md: '24px',
      lg: '48px',
      xl: '64px',
      xxl: '72px',
    },
    fontFamily: {
      sans: ['Circular\\ Std', 'sans-serif'],
      serif: ['Roboto\\ Slab', 'serif'],
    },
    boxShadow: {
      blue: '0px 0px 4px #1E6CF9',
      DEFAULT: '0px 4px 4px #919EA7',
    },
  },
  variants: {
    extend: {},
  },

  // TODO: remove
  plugins: [require("tailwindcss-debug-screens")],
}
