/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
        lora: ["Lora", "serif"],
      },
      screens: {
        'xs': '390px',       // 📱 iPhone 14 Pro (390x850)
        'custom-md': '480px', // 📱 Pixel 7 Pro (480x1040)
        'custom-lg': '430px',
        'custom-llg': '770px', // 📱 iPhone 14 Pro Max (430x930)
        'custom-xl': '890px', // 📱 iPad Air 5 (820x1080)
        'custom-xs': '1100px',
        'custom-xxl': '1520px',
      },
      keyframes: {
        breathing: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" }, // Estado normal
          "50%": { transform: "scale(1.08)", opacity: "0.85" },  // Se expande y baja la opacidad
        },
        glow: {
          "0%, 100%": { textShadow: "0 0 0px rgba(100, 100, 255, 0.5)" },
          "50%": { textShadow: "0 0 8px rgba(100, 100, 255, 0.8)" },
          rotateIn: {
            "0%": { opacity: "0", transform: "rotate(-10deg)" },
            "100%": { opacity: "1", transform: "rotate(0deg)" },
          },
        },
      },
      animation: {
        breathing: "breathing 0.6s ease-in-out", // Efecto de "respiro" suave
        glow: "glow 0.5s ease-in-out infinite alternate",
        rotateIn: "rotateIn 0.6s ease-out"
      }
    },
  },
  plugins: [],
};
