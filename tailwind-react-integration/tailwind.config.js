/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], // Updated from 'purge'
  theme: {
    extend: {}, // Keep the theme extension
  },
  plugins: [], // Add plugins if needed
};

