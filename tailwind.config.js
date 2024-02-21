/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        lato : ["Lato"],
        protest: ["Protest Strike"],
      },
      lineClamp:{
        7: '7',
        8: '8',
        9: '9',
        10: '10',
      },
    },
  },
  plugins: [
    require('tailwindcss-no-scrollbar'),
  ],
}

