/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  daisyui: {
    themes: [
      {
        light: {
          "primary": "#1b2857fb",
          "secondary": "#FFC000",
          "accent": "#FFEDD5",
          "neutral": "#F3F4F6",
          "base-100": "#FFFFFF",
          "info": "#98A8DD",
          "success": "#1BBB70",
          "warning": "#DF7E07",
          "error": "#FA5C5C",
          "login": "#6358DC"
        },
      },
      "dark",
    ],
  },
  plugins: [require("daisyui")],
}
