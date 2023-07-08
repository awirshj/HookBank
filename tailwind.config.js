/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,svelte,ts,html,css}"],
  theme: {
    screens: {
      xs:'400px',
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        bgDark:'rgb(0 4 15)',
        textColor: '#8f9aa3',
        textColorDarker: '#5d6d7e',
        textColorSemiLighter: '#b4bbc0',
        textColorLighter:'#c3c9cd',
        textColorExtraLighter:"#dadde0"
    },

    }
  },
  plugins: [],
};
