
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{  
        cream: '#ededed',
        violet:'#e5b9fe',
        wine:'#722F37'
      }
    },
  },
  plugins: [],
}

