/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'fjalla':["Fjalla One", "sans-serif"],
      'cantarell':["Cantarell", "sans-serif"]
    },
    colors:{
      "white-bg":"#FCF5F3",
      "yellow-custom":"#FFE682",
      "blue-custom":"#82FBFF",
      "black":"#000001"

    },
    extend: {},
  },
  plugins: [],
}

