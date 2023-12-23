/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundImage: {
      whiteCircle: "url('./src/pics/dentist-19.png')",
    },
    extend: {
      colors: {
        maribrown: "#571e0d",
        lightGray: "#666",
      },
    },
    fontFamily: {
      openSans: ["Open Sans", "sans-serif"],
      cantataOne: ["Cantata One", "serif"],
    },
    boxShadow: {
      imageShadow: "0px 40px 60px 0px rgba(0,64,135,0.06)",
    },
  },
  plugins: [],
};
