/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.jsx",
    "./components/**/*.jsx" 
  ],
  theme: {
    extend: {
      screens: {
        s: {
          max: "768px",
        },
      },

      colors: {
        primary: {
          100: "#FFC6D3",
          300: "#FEA1BF",
          400: "#FF6EC7",
          500: "#FF9F9F",
          600: "#E98EAD",          
          700: "#E97777",
          800: "#FF6464",
          900: "#FF597B",
          1000: "#FF007F",

          DEFAULT: "#FEFCF3",
        },

        secondary: {
          DEFAULT: "#3A4F7A",
        }
      },
      animation: {
        'spin-slow': 'spin 4s linear infinite',
        'spin-delay': 'spin 4s linear infinite',
        "fade-in": "fade-in 1s linear forwards"        
      },
      keyframes: {
        'fade-in': {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          }
        },
      },
      backgroundImage: {
        'bsa': "url('/img/bsa2.jpeg');"
      }
    },
  },
  plugins: [],
}
