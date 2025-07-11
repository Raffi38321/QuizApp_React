/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: "#2D4356",
        "english-lavender": "#A78295",
        copper: "#A76F6F",
        pastelPink: "#EAB2A0",
      },
      fontFamily: {
        aclonica: ["Aclonica", "sans-serif"],
        alfa: ["Alfa Slab One", "sans-serif"],
      },
    },
  },
  variants: {
    fill: ["hover", "focus"],
  },
  plugins: [],
};
