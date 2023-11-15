/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'header-image': "url('../src/images/sg-11134004-7rbnd-ln2u4n7zfkag0a.png')"
      },
      colors: {
        oranges: '#ee4d2d'
      }
    }
  },
  plugins: []
}
