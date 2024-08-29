/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        'custom-height': 'calc(100vh - 120px)',
      },
      screens: {
        'xsm': '480px', 
      },
    },
  },
  plugins: [],
}

