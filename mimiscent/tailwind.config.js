/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#010020",   // Deep navy (for navbar & backgrounds)
        accent: "#FFD700",    // Gold (for highlights/buttons)
      },
    },
  },
  plugins: [],
}
