/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        border: "border 4s ease infinite",
      },
      keyframes: {
        border: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      textUnderlineOffset: {
        10: '10px',
      }, 
      textShadow: {
        'text': '2px 2px 3px rgba(0,0,0,0.1)'
      },
    },
    plugins: [],
  },
};
