/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#668C3F',
        'dark-green': '#728C58',
        'semi-light-green': '#93A680',
        'light-green': '#B4BFA3',
        background: '#F2EAE4',
      },
    },
  },
  plugins: [],
}
