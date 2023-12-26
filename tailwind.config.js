/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundImage: {
      whiteCircle: "url('./src/pics/dentist-19.png')",
      contactBackGround: "url('./src/pics/dentist-04.png')",
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
      etMoudles: ["ETmoudles"],
    },
    boxShadow: {
      imageShadow: "0px 40px 60px 0px rgba(0,64,135,0.06)",
      opinionShadow: "0px 12px 18px -6px rgba(0,0,0,0.3)",
      contactShadow: "0px 20px 50px 0px rgba(0,121,255,0.2)",
    },
  },
  plugins: [],
};
