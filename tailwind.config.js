/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    flex: {
      '1': '0 1 100%',
     '2': '2 2 0%',
      auto: '1 1 auto',
     initial: '0 1 auto',
     inherit: 'inherit',
      none: 'none',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
