/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundImage: {
      whiteCircle: "url('../pics/dentist-19.webp')",
      contactBackGround: "url('../pics/dentist-04.webp')",
      quemSomosBackground: "url('../pics/dentist-23.webp')",
      equipamentosBackground: "url('../pics/dentist-15.webp')",
      implanteDentario:
        "url('../pics/Como-funciona-o-implante-dentario-1.webp')",
      facetasResina: "url('../pics/Facetas-em-Resina_2_11zon.webp')",
    },
    extend: {
      colors: {
        maribrown: "#76483A",
        lightGray: "#666",
        mariYellow: "#bc6009",
      },
      backgroundImage: () => ({
        "radial-gradient":
          "radial-gradient(circle at right, rgba(255, 255, 255, 0) 0%, #ffffff 70%)",
        "linear-gradient":
          "linear-gradient(180deg, rgba(255,255,255,0.29) 0%, #ffffff 100%)",
        "invisalign-gradient":
          "linear-gradient(to right, rgba(255, 255, 255, 0.25) 0%, #ffffff 100%, rgba(255, 255, 255, 1))",
      }),
    },
    fontFamily: {
      openSans: ["Open Sans", "sans-serif"],
      cantataOne: ["Cantata One", "serif"],
    },
    boxShadow: {
      imageShadow: "0px 40px 60px 0px rgba(0,64,135,0.06)",
      opinionShadow: "0px 12px 18px -6px rgba(0,0,0,0.3)",
      contactShadow: "0px 20px 50px 0px rgba(0,121,255,0.2)",
      insideShadow: "inset 80px -100px 200px 80px #ffffff",
      invisalignShadow: "0px -100px 200px 0px #ffffff",
      headerShadow: "0 2px 5px rgba(0,0,0,.1)",
      whatsappShadow: "1px 6px 24px 0 rgba(7,94,84,.24)",
    },
  },
  plugins: [],
};
