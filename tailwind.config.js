/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.jsx" 
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#FFC6D3",
          300: "#FEA1BF",
          500: "#E98EAD",
          600: "#FF9F9F",
          700: "#E97777",
          800: "#FF6464",
          900: "#3A4F7A",
          DEFAULT: "#FEFCF3",
        }
      }
    },
  },
  plugins: [],
}
