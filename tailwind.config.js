/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        headingColor: "#0E1133",
        paragraphColor: "#505056",
        yellow: "#FBAF5B",
        blueGray: "0F172A",
        lightBlue: "#007AFF",
        lightGray: "#F3F9FD",
        grayColor: "#71717A",
        cardText: "#505056",
        inputPlaceholder: "#9D9DBD",
        footerList: "#E4E4E7",
        footerBorder: "#1E293B",
      },
      boxShadow: {
        cardShadow: "0px 0px 24px rgba(44, 41, 41, 0.1)",
      },
      borderColor: {
        borderColor: "#9FCDFF",
      },
    },
  },
  plugins: [],
};
