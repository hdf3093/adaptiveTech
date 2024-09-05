/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: '#90EE90',
        'accent-dark': '#66CDAA',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}