/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.jsx",
    "./components/**/*.jsx" 
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#FFC6D3",
          300: "#FEA1BF",
          500: "#FF9F9F",
          600: "#E98EAD",          
          700: "#E97777",
          800: "#FF6464",
          900: "#FF597B",
          DEFAULT: "#FEFCF3",
        },

        secondary: {
          DEFAULT: "#3A4F7A",
        }
      },
      animation: {
        'spin-slow': 'spin 4s linear infinite',
        'spin-delay': 'spin 4s 2s linear infinite',
      }
    },
  },
  plugins: [],
}
