/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#69ef7d",
        
"secondary": "#b2c2f7",
        
"accent": "#ffbcdc",
        
"neutral": "#1F2632",
        
"base-100": "#E3E3F3",
        
"info": "#9AE6F9",
        
"success": "#187C3D",
        
"warning": "#FAC247",
        
"error": "#E5362A",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

