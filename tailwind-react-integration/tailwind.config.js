/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], // from the first config
  darkMode: false, // from the first config
  content: [], // from the second config
  theme: {
    extend: {}, // combined from both configs
  },
  variants: {
    extend: {}, // from the first config
  },
  plugins: [], // combined from both configs (empty arrays)
};

