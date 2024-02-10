/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['"Roboto"', 'sans-serif']
    },
    extend: {
      colors: {
        'darker': '#133c55',
        'dark':'#386FA4',
        'light': '#59A5D8',
        'lighter': '#84D2F6',
        'lightest' : '#91E5F6'

        
      },
    },
  },
  plugins: [],
}

