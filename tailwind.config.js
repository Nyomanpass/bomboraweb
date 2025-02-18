/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         //angka aja pakein bjier biar ga bingung
         colors: {
            // "text-color": "#2D1B4F",
            // customDark: "#23212f",
            // customLight: "#704a9f",
            // light: "#BFA5DA",
            // footer: "#4E2A7F",
            // button: "#F4C542",

            // warna baru - makin kecil angkanya makin putih
            "bombora-100": "#F7F7FF", // background
            "bombora-200": "#BFA5DA",
            "bombora-300": "#704A9F", // default
            "bombora-400": "#4E2A7F", //hover
            "bombora-500": "#2D1B4F", //text
            "bombora-600": "#F4C542", //kuning
         },

         fontFamily: {
            worksans: ["Work Sans", "sans-serif"],
            plusJakarta: ["Plus Jakarta Sans", "sans-serif"],

            istok: ["Istok Web", "sans-serif"],
            dancing: ["Dancing Script", "cursive"],
            inria: ["Inria Sans, sans-serif"],
            inter: ["Inter, sans-serif"],
         },

         backgroundImage: {
            processbg: "url('/src/images/processbg.png')",
         },

         screens: {
            xs: "365px",
         },
      },
   },
   plugins: [],
};
