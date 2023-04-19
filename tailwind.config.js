/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      margin: {
        ml: "1px",
        97: "303px",
      },
      rotate: {
        10: "10deg",
        15: "20deg",
        80: "80deg",
      },
      fontFamily: {
        "architects-daughter": ["'Architects Daughter'", "sans-serif"],
      },
      keyframes: {
        'fade-menu': {
          from: {
            opacity: 0
          },
          to: {
            opacity: 100
          }
        }
      },
      animation: {
        'fade-submenu': 'fade-menu ease-in-out 0.5s'
      }
    },
  },
  variants: {
    display: ["group-hover"],
  },
  plugins: [],
};
