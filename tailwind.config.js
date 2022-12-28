/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        body: 'Bai Jamjuree', 
      },
      fontSize: {
        '275rem': ['2.65rem', {lineHeight: '1'}]
      },
      colors: {
        'strong-cyan': '#26baa4',
        'light-blue': '#6173ff',
      }
    },
  },
  plugins: [],
}
