/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, js}"],
  theme: {
    screens: {
      'mobile': {'max': '767px'},

      'tablet': {'min': '768px', 'max': '979px'},

      'note': {'min': '980px'},
    },
    extend: {},
  },
  plugins: [],
}

