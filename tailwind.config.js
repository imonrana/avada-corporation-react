/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     maxWidth:{
      "container" : "1320px"
     },
      fontFamily:{
        'plusJakarta': ['Plus Jakarta Sans', 'sans-serif']
      },
      backgroundImage:{
        'heroImg': "url('Src/assets/banner-bg.png')",
        'goalsBg': "url('Src/assets/Goals_bg.png')",
        'cardBtnGradient': "linear-gradient(to left,#0F2385 72%, rgba(3,8,31,0.83) 100%)",
      },
    
    },
  },
  plugins: [],
}