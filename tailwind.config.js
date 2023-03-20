/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)"
      },
    },
    screens: {
      '2xl': { 'max': '1535px' },

      'xl': { 'max': '1279px' },

      'lg': { 'max': '1023px' },

      'md': { 'max': '767px' },

      'sm': { 'max': '639px' },

      'xs': { 'max': '428px'}
  }
  },
  plugins: [],
}
