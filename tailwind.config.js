/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', 
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        kawaii: {
          pink: "#FFB6C1",
          purple: "#E6B8FF",
          blue: "#B8D8FF",
          green: "#B8FFD8",
          yellow: "#FFF5B8",
          peach: "#FFD4B8",
        },
        dark: {
          bg: "#1a1a2e",
          card: "#16213e",
          text: "#e4e4e7",
        },
      },
    },
  },
  plugins: [],
};