/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "project-orange": "#FC620C",
        "project-offWhite": "rgba(255, 244, 238, 1)",
        "project-green": "#1BCC42",
        "project-red": "#FF0000",
        "project-gray": "#E8E8E8",
        "project-yellow": "#D6E31E",
      },
      screens: {
        "max-sm": { max: "639px" }, // Targets screens up to 639px
        "max-md": { max: "767px" }, // Targets screens up to 767px
        "max-lg": { max: "1023px" }, // Targets screens up to 1023px
        "max-xl": { max: "1279px" }, // Targets screens up to 1279px
        "max-2xl": { max: "1535px" }, // Targets screens up to 1535px
      },
    },
  },
  plugins: [],
};
