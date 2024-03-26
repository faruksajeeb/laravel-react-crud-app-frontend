/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          '50': '#faf5ff', // Define custom color 'primary-50'
          '100': '#f3e8ff', // Define custom color 'primary-100'
          '200': '#e9d5ff', // Define custom color 'primary-200'
          '300': '#d8b4fe', // Define custom color 'primary-300'
          '400': '#c084fc', // Define custom color 'primary-400'
          '500': '#a855f7', // Define custom color 'primary-500'
          '600': '#9333ea', // Define custom color 'primary-600'
          '700': '#7e22ce', // Define custom color 'primary-700'
          '800': '#6b21a8', // Define custom color 'primary-800'
          '900': '#581c87', // Define custom color 'primary-900'
          '950': '#3b0764', // Define custom color 'primary-950'
        },
      },
    },
  },
  // plugins: [require("daisyui")],
  plugins: [],
}

