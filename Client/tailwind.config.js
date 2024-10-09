/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "project-orange": "#FC620C",
        "project-offWhite": "rgba(255, 244, 238, 1)",
        "project-green": "#1BCC42",
      },
    },
  },
  plugins: [],
};
