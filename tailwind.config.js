/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    "./src/**/*.{tsx,js}",
    "./src/**/**/*.{tsx,js}",
    "./src/**/**/**/*.{tsx,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Orbitron', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

