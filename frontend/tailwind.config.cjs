/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      'handynow_grad_purple': '#aa8bff',
      'handynow_grad_light': '#f5f1ff',
    },
    fontFamily: {
      josephinclassic: ["JosephinClassic", "sans-serif"],
      josephinsemibold: ["JosephinSemiBold", "sans-serif"],
      josephinbold: ["JosephinBold", "sans-serif"],
    }
  },
  plugins: [],
}
