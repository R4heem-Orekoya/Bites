// @type {import('tailwindcss').Config} 
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  extend: {
    theme: {
      colors: {
        'primary': '#1fb6ff',
        'orange': '#1fb6ff',
      },
    },
  },
  plugins: [],
}
