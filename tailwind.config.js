/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(199, 100%, 33%)",
        secondary: "hsl(187, 85%, 43%)",
        snow: "hsl(0, 0%, 93%)",
        silver: "rgb(190, 190, 190)",
        "dark-slate-gray": "hsl(201, 33%, 16%)",
        "dusky-rose": "hsl(240, 4%, 36%)",
        "light-gray": "rgb(239, 239, 239)",
        "ghost-white": "rgb(240, 240, 246)",
        "light-blue": "rgb(225, 225, 235)",
      },
      backgroundImage: {
        hero: "url('/images/background.jpg')",
        explore: "url('/images/explore.jpg')",
      },
    },
  },
  plugins: [],
};
