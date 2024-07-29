/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        karla: ["Karla", "sans-serif"],
      },

      fontWeight: {
        thin: "100",
        hairline: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },

      colors: {
        "primary-green-600": "#13B974",
        "primary-green-400": "#73F0BC",
        "bg-primary-light": "#FAFAFA",
        "secondary-dark-500": "#494E59",
        "secondary-dark-600": "#303540",
      },
    },
  },
  plugins: [],
};
