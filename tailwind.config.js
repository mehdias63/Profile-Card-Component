/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      kum: ["Kumbh Sans"],
    },
    extend: {
      colors: {
        green: "#19A1AE",
        gray: "#6B7082",
      },
    },
  },
  plugins: [],
};
