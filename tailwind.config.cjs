/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B0F14",
        fog: "#EDEBE7",
        stone: "#A8B0BB",
        ember: "#6B0F1A"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,.12)",
        glow: "0 0 0 1px rgba(255,255,255,.08), 0 20px 60px rgba(0,0,0,.35)"
      },
      borderRadius: {
        xl: "1rem",
        '2xl': "1.25rem",
        '3xl': "1.75rem"
      },
      keyframes: {
        floaty: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" }
        },
        sweep: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(120%)" }
        }
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        sweep: "sweep 2.6s ease-in-out infinite"
      }
    },
  },
  plugins: [],
}
