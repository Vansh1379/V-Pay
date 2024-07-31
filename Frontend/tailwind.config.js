/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#232028',
      },
      boxShadow: {
        '3xl': '1px 2px 2px 2px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
