/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{
        center: true,
      },
      fontFamily:{
        'plusJakarta': ['Plus Jakarta Sans', 'sans-serif']
      },
      backgroundImage:{
        'heroImg': "url('Src/assets/banner-bg.png')"
      },
    
    },
  },
  plugins: [],
}