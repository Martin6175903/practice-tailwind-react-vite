/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif']
    },
    colors: {
      transparent: 'transparent',
      current: '#000',
      'black': '#333',
      'blind-gray': '#c4c4c4',
      'dark-gray': '#828282',
      'gray': '#efefef',
      'pink': '#f13c6e',
      'white': '#fff',
      'purple': 'rebeccapurple'
    },
    extend: {},
  },
  plugins: [],
}

