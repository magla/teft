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
    spacing: {
      '1': '8px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '48px',
      '6': '64px',
      '7': '72px',
      '8': '96px',
    },
    fontFamily: {
      sans: ["'Circular Std'", 'sans-serif'],
      serif: ['Roboto Slab', 'serif'],
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
