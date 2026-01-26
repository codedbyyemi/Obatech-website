/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'brand-purple': '#775ED0',
        'brand-blue': '#5C7AEA',
        'brand-cyan': '#00D4FF',
        'dark-purple': '#5C3ACD',
        'dark-blue': '#7A4DE8',
        'dark-cyan': '#00B8FF',
      }
    }
  }
}